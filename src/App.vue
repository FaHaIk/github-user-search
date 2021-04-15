<template>
  <div id="app">
    <div class="nav-wrapper">
      <div class="txtBig">Get a user's repositories by searching for his name.</div>
      <div class="txtSmall">Simply type in a name in the textbox and hit Enter.</div>
      <form @submit.prevent="search">
        <div>
          <input class="inpu" v-model="inputText" type="text" placeholder="Username" />
        </div>
      </form>
    </div>
    <div class="content-wrapper">
      <div class="sea" v-if="repos.length == 0 && !notFound">Search for a User's repos.</div>
      <div class="sea" v-if="notFound">User not found..</div>
      <div v-else v-for="(repo, index) in repos" :key="repo.id">
        <RepoCard
          :name="repo.name"
          :avatarUrl="repo.owner.avatar_url"
          :upDate="repo.created_at"
          :descr="repo.description"
          :url="repo.html_url"
          :stars="repo.stargazers_count"
          :forks="repo.forks_count"
          :language="repo.language"
          :left="left(index)"
        />
      </div>
      <button v-if="repos.length != 0 && !loading" class="btn" @click="loadMore">Load More</button>
      <div style="text-align: center;" v-if="loading">
        <img src="./assets/loading.gif" />
      </div>
    </div>
  </div>
</template>

<script>
import { Octokit } from "@octokit/rest";
import RepoCard from "./components/RepoCard";

const octokit = new Octokit();

export default {
  components: {
    RepoCard
  },
  data() {
    return {
      username: "",
      inputText: "",
      repos: [],
      page: 1,
      perPage: 20,
      sortPage: "created",
      loading: false,
      count: 0,
      notFound: false
    };
  },
  methods: {
    left: function(index) {
      let odd = true;
      if (index % 2 == 0) {
        odd = false;
      }
      return odd;
    },
    search: function() {
      if (this.username == this.inputText) {
        console.log("inside")
        return false;
      }
      this.repos = [];
      this.page = 1;
      this.loading = true;
      this.username = this.inputText;
      octokit.repos
        .listForUser({
          username: this.username,
          per_page: this.perPage,
          sort: this.sortPage,
          page: this.page
        })
        .then(result => {
          this.notFound = false;
          this.loading = false;
          result.data.forEach(element => {
            this.count += 1;
            this.repos.push(element);
          });
        })
        .catch(() => {
          this.notFound = true;
          this.loading = false;
        });
    },
    loadMore: function() {
      this.page += 1;
      this.loading = true;
      octokit.repos
        .listForUser({
          username: this.username,
          per_page: this.perPage,
          sort: this.sortPage,
          page: this.page
        })
        .then(result => {
          this.loading = false;
          result.data.forEach(element => {
            this.count += 1;
            this.repos.push(element);
          });
        });
    }
  }
};
</script>

<style>
.btn {
  margin-top: 20px;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  background-color: #3de3bb;
  background-color: black;
  color: white;
}
.inpu {
  outline: none;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #3de3bb;
  text-align: center;
}
input[type="text"]:focus {
  box-shadow: 0 0 0 2px #3de3bc73;
}
.txtBig {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
}
.txtSmall {
  font-size: 16px;
  margin-bottom: 40px;
}
.sea {
  text-align: center;
}
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  /* background-color: #f5f7f9; */
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content-wrapper {
  width: 960px;
  margin: 0 auto;
  /* background-color: #f5f7f9; */
  padding: 20px;
  text-align: center;
  margin-top: 80px;
}
.nav-wrapper {
  background-color: white;
  text-align: center;
  margin-top: 80px;
}
</style>
