(self.webpackChunkgatsby_personal_site=self.webpackChunkgatsby_personal_site||[]).push([[186],{7757:function(e,t,r){e.exports=r(5666)},8192:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var n=r(5761),o=r(7294),a=r(5444),i=r(9925),l=r(1496),c=r(3770),u=r(4337),s=r(255),m=r(7836),h=r(3971);function d(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,o)}var f,p,g,v,y=r(7757),w=r.n(y),E=r(1234),_=i.default.div.withConfig({displayName:"Avatar__Wrapper",componentId:"sc-1t23ak8-0"})(["position:absolute;margin-left:-60px;a{border:none;&:hover{border:none;}}img{border-radius:40px;}"]),b=function(e){var t=e.url,r=e.avatar,n=e.login;return o.createElement(_,null,o.createElement("a",{href:t,title:"@"+n},o.createElement("img",{className:"avatar avatar-user",height:"40",width:"40",alt:"@"+n,src:r})))},x=function(e){var t=e.url,r=e.noComments;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Comments"),o.createElement("p",null,"Thanks for reading ❤️ "),o.createElement("p",null,"You can comment by replying to the"," ",o.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},"issue for this post.")),r&&o.createElement("p",null,"There’s no comments yet,"," ",o.createElement("a",{href:t+"#new_comment_field",target:"_blank",rel:"noreferrer noopener"},"be the first to leave one!")))},k=i.default.div.withConfig({displayName:"Reaction__Wrapper",componentId:"sc-6yydx2-0"})(["display:inline;a{display:inline-block;border:none;padding:1rem;margin:0;&:hover{border:none;}}"]),C=i.default.span.withConfig({displayName:"Reaction__ReactionCount",componentId:"sc-6yydx2-1"})(["color:",";padding-left:0.8rem;"],(function(e){return e.theme.colors.lightest})),L=function(e){var t=e.url,r=e.reaction,n=e.count,a={"+1":"👍","-1":"👎",confused:"😕",eyes:"👀",heart:"❤️",hooray:"🎉",laugh:"🤣",rocket:"🚀"}[r];return 0!==n&&o.createElement(k,null,o.createElement("a",{href:t,title:r,target:"_blank",rel:"noreferrer noopener"},a," ",o.createElement(C,null,n)))},N=i.default.div.withConfig({displayName:"Reactions__Wrapper",componentId:"sc-1httucd-0"})(["border-top:1px solid ",";padding:0;display:block;width:100%;a{border:none;&:hover{border:none;}}"],(function(e){return e.theme.colors.lightest})),I=i.default.div.withConfig({displayName:"Reactions__AddReaction",componentId:"sc-1httucd-1"})(["border-right:none;display:inline-block;padding:16px;margin:0;svg{padding-top:2px;}"]),z=["+1","-1","confused","eyes","heart","hooray","laugh","rocket"],O=function(e){var t=e.comment;return o.createElement(N,null,z.map((function(e){return o.createElement(L,{key:e,url:t.html_url,reaction:e,count:+t.reactions[e]})})),o.createElement("a",{href:t.html_url,title:"Add a reaction",target:"_blank",rel:"noreferrer noopener"},o.createElement(I,null,o.createElement("svg",{viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true"},o.createElement("path",{fillRule:"evenodd",fill:"#ffffff",d:"M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000\r 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0\r 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192\r 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0\r 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984\r 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946\r 0-1.652-.308-2.126-.63a3.32 3.32 0\r 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"})))))},j=i.default.div.withConfig({displayName:"Comments__Wrapper",componentId:"sc-czvh9a-0"})(["padding:1rem 1rem 4rem;"]),S=i.default.div.withConfig({displayName:"Comments__Comment",componentId:"sc-czvh9a-1"})(["margin-top:1rem;padding-top:1rem;letter-spacing:normal;a{background:none;}"]),A=i.default.div.withConfig({displayName:"Comments__Content",componentId:"sc-czvh9a-2"})(["color:",";border:1px solid ",";border-radius:5px;margin-left:60px;"],(function(e){return e.theme.colors.lightest}),(function(e){return e.theme.colors.lightest})),R=i.default.div.withConfig({displayName:"Comments__ContentHeader",componentId:"sc-czvh9a-3"})(["border-bottom:1px solid ",";padding:1rem;width:100%;display:flex;flex-wrap:wrap;"],(function(e){return e.theme.colors.lightest})),T=i.default.div.withConfig({displayName:"Comments__ContentHeaderDate",componentId:"sc-czvh9a-4"})(["width:70%;padding:0.2rem;",""],(function(e){return e.theme.media.max.sm(f||(f=(0,n.Z)(["\n    width: 100%;\n  "])))})),W=i.default.div.withConfig({displayName:"Comments__AssociationWrapper",componentId:"sc-czvh9a-5"})(["width:30%;display:flex;justify-content:flex-end;padding:0.2rem;",""],(function(e){return e.theme.media.max.sm(p||(p=(0,n.Z)(["\n    padding: 0.5rem 0.2rem 0.2rem;\n    justify-content: flex-start;\n  "])))})),Z=i.default.div.withConfig({displayName:"Comments__Association",componentId:"sc-czvh9a-6"})(["border:1px solid ",";font-size:",";border-radius:20px;margin-right:6px;padding:4px 8px;text-transform:capitalize;"],(function(e){return e.theme.colors.lightest}),(function(e){return e.theme.fontSizes.small})),G=i.default.div.withConfig({displayName:"Comments__ContentBody",componentId:"sc-czvh9a-7"})(["color:",";margin:0 auto;padding:1rem 2rem 2rem;letter-spacing:normal;line-height:1.5;"],(function(e){return e.theme.colors.lightest})),P=i.default.div.withConfig({displayName:"Comments__Actions",componentId:"sc-czvh9a-8"})(["color:",";background-color:",";font-size:",";font-weight:",";border-radius:5px;box-sizing:border-box;text-decoration:none;display:block;padding:0.4rem 0.6rem;border-bottom:0;white-space:nowrap;line-height:1;margin:2rem 0 0.2rem 1rem;transition:0.4s ease;float:right;&:hover{background-color:",";border-bottom:none;}a{border:none;&:hover{border:none;color:",";}}"],(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.light+"40"}),(function(e){return e.theme.fontSizes.normal}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.darkest})),F=function(e){var t=e.url,r=e.comments;return o.createElement(j,null,o.createElement(x,{url:t,noComments:!r||0===r.length}),r&&r.map((function(e){return o.createElement(S,{key:e.id},o.createElement(A,null,o.createElement(b,{url:e.user.html_url,avatar:e.user.avatar_url,login:e.user.login}),o.createElement(R,null,o.createElement(T,{"data-date":e.created_at},o.createElement("a",{href:e.user.html_url},o.createElement("strong",null,"@",e.user.login))," ","commented"," ",o.createElement("a",{href:e.html_url},(0,E.hX)(e.created_at)," ago")," ",e.updated_at>e.created_at&&o.createElement("span",null,"• edited")," "),o.createElement(W,null,"OWNER"===e.author_association&&o.createElement(Z,null,"Author"),"OWNER"===e.author_association&&o.createElement(Z,null,"Owner"))),o.createElement(G,null,o.createElement("div",{dangerouslySetInnerHTML:{__html:e.body_html}})),o.createElement(O,{comment:e})))})),o.createElement(P,null,o.createElement("a",{href:t+"#new_comment_field",target:"_blank",rel:"noreferrer noopener",className:"button btn"},"Add a comment →")))},M="undefined"!=typeof window,H=function(e){var t=e.commentsUrl,r=(0,o.useState)(null),n=r[0],a=r[1];return(0,o.useEffect)((function(){if(M){var e=t.replace("github.com/","api.github.com/repos/")+"/comments";(function(){var t,r=(t=w().mark((function t(){var r,n;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{headers:{Accept:"application/vnd.github.v3.html+json application/vnd.github.squirrel-girl-preview"}});case 2:if(!(r=t.sent).ok){t.next=8;break}return t.next=6,r.json();case 6:n=t.sent,a(n);case 8:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(e){d(a,n,o,i,l,"next",e)}function l(e){d(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}})()()}}),[t]),o.createElement(F,{comments:n,url:t})},D=i.default.ul.withConfig({displayName:"post__OtherPostsLinks",componentId:"sc-18ghmkz-0"})(["list-style-type:none;margin-left:0;padding-bottom:2rem;display:flex;flex-wrap:wrap;li{text-align:left;padding:1rem;width:50%;","}li::before{content:'' !important;padding-right:0 !important;}li:nth-child(2){text-align:right;","}a{border-bottom:none;}"],(function(e){return e.theme.media.max.md(g||(g=(0,n.Z)(["\n      width: 100%;\n      text-align: center;\n  "])))}),(function(e){return e.theme.media.max.md(v||(v=(0,n.Z)(["\n      text-align: center;\n  "])))})),U=i.default.div.withConfig({displayName:"post__Date",componentId:"sc-18ghmkz-1"})(["font-size:",";font-weight:",";padding:1rem 0 2rem 0;"],(function(e){return e.theme.fontSizes.normal}),(function(e){return e.theme.fontWeights.thin})),Y=function(e){var t=e.data,r=e.pageContext,n=t.markdownRemark,i=t.site.siteMetadata.title,d=r.previous,f=r.next,p=n.frontmatter.featuredImage.childImageSharp.fluid,g=n.frontmatter.featuredImage.childImageSharp.fixed;return o.createElement(c.Z,{title:i},o.createElement(u.Z,{title:n.frontmatter.title,description:n.frontmatter.description,image:g.src,keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),o.createElement(s.Z,{normalVelocity:1e-4,containerOpacity:.3,addEventListeners:!1}),o.createElement(m.Z,null,o.createElement("article",null,o.createElement(h.h4,null,o.createElement(h.Dx,null,n.frontmatter.title),o.createElement(h.dk,null,n.frontmatter.description),o.createElement(h.Ol,null,n.frontmatter.tags&&n.frontmatter.tags.sort().map((function(e){return o.createElement(h.Vp,{to:"/tags/"+e+"/",key:e},e)}))),o.createElement(U,null,n.frontmatter.date),o.createElement("div",{style:{width:"100%",height:"auto"}},o.createElement(l.Z,{fluid:p}))),o.createElement("div",null,o.createElement("div",{style:{paddingLeft:"1rem",lineHeight:1.6},dangerouslySetInnerHTML:{__html:n.html}}),o.createElement(H,{commentsUrl:n.frontmatter.commentsUrl}),o.createElement("h2",null,"Other posts"),o.createElement(D,null,d&&o.createElement("li",null,o.createElement(a.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),f&&o.createElement("li",null,o.createElement(a.Link,{to:f.fields.slug,rel:"next"},f.frontmatter.title," →")))))))}},5666:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(e,t,r){var n=s;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return z()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=k(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?d:m,c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var s="suspendedStart",m="suspendedYield",h="executing",d="completed",f={};function p(){}function g(){}function v(){}var y={};y[a]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(I([])));E&&E!==r&&n.call(E,a)&&(y=E);var _=v.prototype=p.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function x(e,t){function r(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,f):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function I(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:z}}function z(){return{value:t,done:!0}}return g.prototype=_.constructor=v,v.constructor=g,v[l]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},b(x.prototype),x.prototype[i]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(_),_[l]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=I,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}(e.exports);try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-fe2160dd836dba3da097.js.map