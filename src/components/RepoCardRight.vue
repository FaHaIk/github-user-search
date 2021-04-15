<template>
  <div class="card" @mouseover="mOver" @mouseleave="mLeave">
    <div class="date-wrapper">
      <span class="month-txt">{{ month }} {{ day }}, {{ year }}</span>
    </div>
    <div class="divider" :class="{'bgDiv': !hover, 'bgDivH': hover }"></div>
    <div class="rest-wrapper">
      <div class="name">
        <a :href="url" target="_blank">{{ name }}</a>
      </div>
      <div class="desc">{{ description }}</div>
      <div class="ico-wrapper">
        <div class="float" v-html="starIcon"></div>
        <div class="float numTxt">{{ stars }}</div>
        <div class="puffer"></div>
        <div class="float" v-html="forkIcon"></div>
        <div class="float numTxt">{{ forks }}</div>
        <div class="puffer"></div>
        <div class="float" v-html="codeIcon"></div>
        <div class="float numTxt">{{ language }}</div>
      </div>
    </div>
  </div>
</template>

<script>
var octicons = require("@primer/octicons");

export default {
  name: "RepoCardRight",
  props: [
    "name",
    "avatarUrl",
    "upDate",
    "descr",
    "url",
    "stars",
    "forks",
    "language",
    "index"
  ],
  data() {
    return {
      hover: false,
      starIcon: octicons.star.toSVG({ width: 16, height: 16 }),
      forkIcon: octicons["repo-forked"].toSVG({ width: 16, height: 16 }),
      codeIcon: octicons["code"].toSVG({ width: 16, height: 16 })
    };
  },
  methods: {
    mOver: function() {
      this.hover = true;
    },
    mLeave: function() {
      this.hover = false;
    }
  },
  computed: {
    day: {
      get() {
        return this.upDate.substring(8, 10);
      }
    },
    month: {
      get() {
        const num = this.upDate.substring(5, 7);
        switch (num) {
          case "01":
            return "January";
          case "02":
            return "February";
          case "03":
            return "March";
          case "04":
            return "April";
          case "05":
            return "May";
          case "06":
            return "June";
          case "07":
            return "July";
          case "08":
            return "Aug";
          case "09":
            return "Sept";
          case "10":
            return "Oct";
          case "11":
            return "Nov";
          case "12":
            return "Dec";
          default:
            return "n/a";
        }
      }
    },
    year: {
      get() {
        return this.upDate.substring(0, 4);
      }
    },
    description: {
      get() {
        if (this.descr == null) {
          return "No Description...";
        } else if (this.descr.length > 105) {
          return this.descr.substring(0, 105) + "...";
        } else return this.descr
      }
    }
  }
};
</script>

<style scoped>
.ico-wrapper {
  /* color: #727979; */
  fill: currentColor;
  font-size: 14px;
}
.numTxt {
  margin-top: -2px;
}
.puffer {
  height: 10px;
  width: 7px;
  float: left;
}
.float {
  float: left;
  margin-right: 3px;
}
.desc {
  font-size: 16px;
  font-weight: normal;
  margin-top: 6px;
  margin-bottom: 15px;
}
.name {
  line-height: 1;
  font-size: 20px;
  font-weight: bold;
}
.name a {
  text-decoration: none;
  color: black;
}
.name a:hover {
  text-decoration: underline;
}
.card {
  width: 960px;
  height: 140px;
  display: flex;
}
.date-wrapper {
  height: 140px;
  width: 440px;
  text-align: right;
}
.divider {
  width: 80px;
  background-position: center top;
  transition: all 0.2s ease-in-out;
}
.bgDiv {
  background-image: url("../assets/tl-bg.png");
}
.bgDivH {
  background-image: url("../assets/tl-bgH.png");
}
.rest-wrapper {
  height: 140px;
  width: 440px;
  text-align: left;
  border-radius: 5px;
}
.month-txt {
  color: #adadad;
  color: white;
  background-color: #3de3bb;
  background-color: black;
  font-weight: 500;
  font-size: 13px;
  line-height: 2;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 2px;
}
</style>