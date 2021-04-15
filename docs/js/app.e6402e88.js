(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav-wrapper"},[a("div",{staticClass:"txtBig"},[t._v("Get a user's repositories by searching for his name.")]),a("div",{staticClass:"txtSmall"},[t._v("Simply type in a name in the textbox and hit Enter.")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"inpu",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}})])])]),a("div",{staticClass:"content-wrapper"},[0!=t.repos.length||t.notFound?t._e():a("div",{staticClass:"sea"},[t._v("Search for a User's repos.")]),t.notFound?a("div",{staticClass:"sea"},[t._v("User not found..")]):t._l(t.repos,(function(e,s){return a("div",{key:e.id},[a("RepoCard",{attrs:{name:e.name,avatarUrl:e.owner.avatar_url,upDate:e.created_at,descr:e.description,url:e.html_url,stars:e.stargazers_count,forks:e.forks_count,language:e.language,left:t.left(s)}})],1)})),0==t.repos.length||t.loading?t._e():a("button",{staticClass:"btn",on:{click:t.loadMore}},[t._v("Load More")]),t.loading?a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:s("cf1c")}})]):t._e()],2)])},n=[],i=(s("4160"),s("159b"),s("1af2")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0==t.left?s("div",{staticClass:"card",on:{mouseover:t.mOver,mouseleave:t.mLeave}},[s("div",{staticClass:"rest-wrapper"},[s("div",{staticClass:"name"},[s("a",{attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.name))])]),s("div",{staticClass:"desc"},[t._v(t._s(t.description))]),s("div",{staticClass:"ico-wrapper"},[s("div",{staticClass:"float",domProps:{innerHTML:t._s(t.starIcon)}}),s("div",{staticClass:"float icon-text"},[t._v(t._s(t.stars))]),s("div",{staticClass:"puffer"}),s("div",{staticClass:"float",domProps:{innerHTML:t._s(t.forkIcon)}}),s("div",{staticClass:"float icon-text"},[t._v(t._s(t.forks))]),s("div",{staticClass:"puffer"}),s("div",{staticClass:"float",domProps:{innerHTML:t._s(t.codeIcon)}}),s("div",{staticClass:"float icon-text"},[t._v(t._s(t.language))])])]),s("div",{staticClass:"divider",class:{bgDiv:!t.hover,bgDivH:t.hover}}),s("div",{staticClass:"date-wrapper-right"},[s("span",{staticClass:"date-txt"},[t._v(t._s(t.month)+" "+t._s(t.day)+", "+t._s(t.year))])])]):s("div",{staticClass:"card",on:{mouseover:t.mOver,mouseleave:t.mLeave}},[s("div",{staticClass:"date-wrapper"},[s("span",{staticClass:"date-txt"},[t._v(t._s(t.month)+" "+t._s(t.day)+", "+t._s(t.year))])]),s("div",{staticClass:"divider",class:{bgDiv:!t.hover,bgDivH:t.hover}}),s("div",{staticClass:"rest-wrapper-right"},[s("div",{staticClass:"name"},[s("a",{attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.name))])]),s("div",{staticClass:"desc"},[t._v(t._s(t.description))]),s("div",{staticClass:"ico-wrapper"},[s("div",{staticClass:"float-left",domProps:{innerHTML:t._s(t.starIcon)}}),s("div",{staticClass:"float-left icon-text"},[t._v(t._s(t.stars))]),s("div",{staticClass:"puffer-left"}),s("div",{staticClass:"float-left",domProps:{innerHTML:t._s(t.forkIcon)}}),s("div",{staticClass:"float-left icon-text"},[t._v(t._s(t.forks))]),s("div",{staticClass:"puffer-left"}),s("div",{staticClass:"float-left",domProps:{innerHTML:t._s(t.codeIcon)}}),s("div",{staticClass:"float-left icon-text"},[t._v(t._s(t.language))])])])])])},c=[],u=s("ca7d"),l={name:"RepoCard",props:["name","avatarUrl","upDate","descr","url","stars","forks","language","left"],data:function(){return{hover:!1,starIcon:u.star.toSVG({width:16,height:16}),forkIcon:u["repo-forked"].toSVG({width:16,height:16}),codeIcon:u["code"].toSVG({width:16,height:16})}},methods:{mOver:function(){this.hover=!0},mLeave:function(){this.hover=!1}},computed:{day:{get:function(){return this.upDate.substring(8,10)}},month:{get:function(){var t=this.upDate.substring(5,7);switch(t){case"01":return"January";case"02":return"February";case"03":return"March";case"04":return"April";case"05":return"May";case"06":return"June";case"07":return"July";case"08":return"Aug";case"09":return"Sept";case"10":return"Oct";case"11":return"Nov";case"12":return"Dec";default:return"n/a"}}},year:{get:function(){return this.upDate.substring(0,4)}},description:{get:function(){return null==this.descr?"No Description...":this.descr.length>105?this.descr.substring(0,105)+"...":this.descr}}}},d=l,p=(s("9c78"),s("2877")),f=Object(p["a"])(d,o,c,!1,null,"6ba7344d",null),v=f.exports,h=new i["a"],g={components:{RepoCard:v},data:function(){return{username:"",inputText:"",repos:[],page:1,perPage:20,sortPage:"created",loading:!1,count:0,notFound:!1}},methods:{left:function(t){var e=!0;return t%2==0&&(e=!1),e},search:function(){var t=this;if(this.username==this.inputText)return console.log("inside"),!1;this.repos=[],this.page=1,this.loading=!0,this.username=this.inputText,h.repos.listForUser({username:this.username,per_page:this.perPage,sort:this.sortPage,page:this.page}).then((function(e){t.notFound=!1,t.loading=!1,e.data.forEach((function(e){t.count+=1,t.repos.push(e)}))})).catch((function(){t.notFound=!0,t.loading=!1}))},loadMore:function(){var t=this;this.page+=1,this.loading=!0,h.repos.listForUser({username:this.username,per_page:this.perPage,sort:this.sortPage,page:this.page}).then((function(e){t.loading=!1,e.data.forEach((function(e){t.count+=1,t.repos.push(e)}))}))}}},m=g,_=(s("034f"),Object(p["a"])(m,r,n,!1,null,null,null)),C=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)}}).$mount("#app")},"85ec":function(t,e,s){},"9c78":function(t,e,s){"use strict";var a=s("fb43"),r=s.n(a);r.a},cf1c:function(t,e,s){t.exports=s.p+"img/loading.5e53c76c.gif"},fb43:function(t,e,s){}});
//# sourceMappingURL=app.e6402e88.js.map