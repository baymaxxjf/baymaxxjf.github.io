(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["archiveDetails"],{2430:function(t,e,s){"use strict";var n=s("cfbe"),o=s.n(n);o.a},"9f52":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-details"},[s("h4",{staticClass:"title",domProps:{textContent:t._s(t.issue.title)}}),s("div",{staticClass:"labels flex flex-middle"},t._l(t.issue.labels,(function(e){return s("div",{key:e.name,staticClass:"label",style:{"background-color":"#"+e.color,color:t.isLightColor(e.color)?"#000000":"#ffffff"},domProps:{textContent:t._s(e.name)}})})),0),s("div",{staticClass:"markdown-body"},[s("p",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"cont",domProps:{innerHTML:t._s(t.issue.bodyHTML)}})]),s("div",{attrs:{id:"comment"}})])},o=[],i=s("750b"),a=s("fa7d"),r={setup:function(t,e){var s=Object(i["e"])({title:"",bodyHTML:"",labels:[]}),n=e.root.$route.params.id,o=function(){e.root.$loading.show("努力为您查询");var t='query {\n          repository(owner: "baymaxxjf", name: "blog_articles") {\n            issue(number: '.concat(n,") {\n              title\n              bodyHTML\n              labels (first: 10) {\n                nodes {\n                  name\n                  color\n                }\n              }\n            }\n          }\n        }");e.root.$http(t).then((function(t){var e=t.repository.issue,n=e.title,o=e.bodyHTML,i=e.labels;s.title=n,s.bodyHTML=o,s.labels=i.nodes}))};o();var r=function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.setAttribute("issue-number",n),t.setAttribute("theme","github-light"),t.setAttribute("repo","baymaxxjf/blog_articles"),t.crossorigin="anonymous",t.src="https://utteranc.es/client.js",document.getElementById("comment").appendChild(t)};return Object(i["d"])((function(){r()})),{formatTime:a["b"],isLightColor:a["d"],issue:s}}},l=r,c=(s("2430"),s("2877")),u=Object(c["a"])(l,n,o,!1,null,"088793d8",null);e["default"]=u.exports},cfbe:function(t,e,s){}}]);