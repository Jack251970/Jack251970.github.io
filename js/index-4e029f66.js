import{n as l}from"./index-34b1b7d7.js";const a="",h="https://jack251970.netlify.app/.netlify/functions/twikoo",m={name:"Comment",data(){return{showUtterances:!0,showTwikoo:!1,showToggleBtn:!0,loading:!0}},computed:{currentComment:{get(){let t=this.$store.state.style.currentComment||"utterances";return t="twikoo",t},set(t){this.$store.commit("style/setCurrentComment",t)}},utterancesOpts(){const t=a,e=/(\w+)\s*=\s*["']([^"']+)["']/g,s=t.match(e),o={};return t.includes("async")&&(o.async=!0),s==null||s.forEach(n=>{const[i,r,c]=n.match(/(\w+)\s*=\s*["']([^"']+)["']/);o[r]=c}),o.theme=this.theme==="dark"?"github-dark":"github-light",o},theme(){return this.$store.state.style.theme}},watch:{$route(){document.querySelector(".utterances .utterances")&&document.querySelector(".utterances .utterances").remove(),this.loadAll()},theme(){const t=this.theme==="dark"?"github-dark":"github-light";document.querySelector(".utterances .utterances iframe").contentWindow.postMessage({type:"set-theme",theme:t},"https://utteranc.es")}},mounted(){this.showToggleBtn=a!=="",this.showTwikoo=h!=="",this.showUtterances=a!=="",this.$nextTick(()=>{setTimeout(()=>{this.loadTwikoo()},1e3)})},methods:{installUtterances(){const t=document.createElement("script");t.async=this.utterancesOpts.async||!1,t.setAttribute("src",this.utterancesOpts.src||"https://utteranc.es/client.js"),t.setAttribute("repo",this.utterancesOpts.repo),t.setAttribute("issue-term",this.utterancesOpts.term),this.utterancesOpts.label!==""&&t.setAttribute("label",this.utterancesOpts.label),t.setAttribute("theme",this.utterancesOpts.theme),t.setAttribute("crossorigin",this.utterancesOpts.crossorigin||"anonymous"),this.$refs.utterances.appendChild(t)},installTwikoo(){twikoo.init({envId:"https://jack251970.netlify.app/.netlify/functions/twikoo",el:".twikoo",lang:"en"}).then(()=>{this.loading=!1})},setActiveComment(t){var e,s;if(t){t==="utterances"?(this.showUtterances=!0,this.showTwikoo=!1):t==="twikoo"&&(this.showUtterances=!1,this.showTwikoo=!0,this.loadTwikoo());const o=(e=this.$refs.commentsNav)==null?void 0:e.querySelectorAll("li");o==null||o.forEach(i=>{i==null||i.classList.remove("active")});const n=(s=this.$refs.commentsNav)==null?void 0:s.querySelector(`.${t}-toggle`);n==null||n.classList.add("active")}},setCurrentComment(t){if(t.target.nodeName==="LI"){const e=t.target.classList[0].split("-")[0];this.currentComment=e,this.setActiveComment(e)}},loadUtterances(){new Promise((t,e)=>{const s=setInterval(()=>{this.$refs.utterances?(clearInterval(s),this.loading=!1,t()):e(new Error("Failed to load comments, retrying..."))},100)}).then(()=>{this.setActiveComment(this.currentComment),this.installUtterances()})},loadTwikoo(){this.installTwikoo()}}};var u=function(){var e=this,s=e._self._c;return e.showTwikoo||e.showUtterances?s("div",{staticClass:"comments"},[s("div",{staticClass:"comments-header"},[s("h2",[s("SvgIcon",{attrs:{name:"comment"}}),e._v(" Comment")],1),e.showToggleBtn?s("ul",{ref:"commentsNav",staticClass:"comments-nav",on:{click:e.setCurrentComment}},[s("li",{staticClass:"utterances-toggle active"},[e._v(" Utterances ")]),s("li",{staticClass:"twikoo-toggle"},[e._v(" Twikoo ")])]):e._e()]),s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"comments-body"},[s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showUtterances,expression:"showUtterances"}],staticClass:"u-wrap"},[s("div",{ref:"utterances",staticClass:"utterances"})])]),s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showTwikoo,expression:"showTwikoo"}],staticClass:"t-wrap"},[s("div",{staticClass:"twikoo"})])])],1)]):e._e()},d=[],w=l(m,u,d,!1,null,null,null,null);const g=w.exports;export{g as C};
