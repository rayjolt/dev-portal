(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(295)),i=n(299),c=n(300),l={id:"dev-txn-polling",title:"Polling",keywords:["polling","transaction","zilliqa"],description:"Zilliqa Transaction Polling"},s={id:"dev/dev-txn-polling",isDocsHomePage:!1,title:"Polling",description:"Zilliqa Transaction Polling",source:"@site/docs/dev/dev-txn-polling.mdx",permalink:"/docs/dev/dev-txn-polling",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-txn-polling.mdx",sidebar:"DevelopersSidebar",previous:{title:"Broadcasting",permalink:"/docs/dev/dev-txn-broadcasting"},next:{title:"Confirmation",permalink:"/docs/dev/dev-txn-confirmation"}},u=[],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"If your transaction is successfully verified by the seed node, the transaction will be sent to the appropriate shard. Shard selection depends on a number of factors that are explained in detail in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.zilliqa.com/provisioning-sharding-for-smart-contracts-a-design-for-zilliqa-cd8d012ee735"}),"this post"),"."),Object(o.b)("p",null,"After sending the transaction object, there will be a ",Object(o.b)("inlineCode",{parentName:"p"},"transaction id"),". We can invoke the ",Object(o.b)("inlineCode",{parentName:"p"},"GetTransaction")," JSON RPC API with the ",Object(o.b)("inlineCode",{parentName:"p"},"transaction id")," periodically to check the transaction status. It is recommended to poll the seed node with ",Object(o.b)("inlineCode",{parentName:"p"},"GetTransaction")," for ",Object(o.b)("strong",{parentName:"p"},"3 Tx Epochs")," (around 3-5 minutes). If the transaction is not confirmed after that, we can assume that it has not been included in any block and should be re-broadcasted."),Object(o.b)("p",null,"Example of transaction polling:"),Object(o.b)(i.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Go",value:"go"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const txn = await zilliqa.blockchain.getTransaction("1899b381d644a4892ca5ba5d8d60bbcc7bd121d511d55e438a8ddbdcc53272c4");\nconsole.log(JSON.stringify(txn));\n'))),Object(o.b)(c.a,{value:"go",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'provider := NewProvider("https://dev-api.zilliqa.com/")\nresult, _ := provider.GetTransaction("c7d6550a6558edcddbf4b3c7cf14db9f1025200b89bcbcd6a570c84db58d554f")\nresStr,_ := json.Marshal(result)\nfmt.Println(string(resStr))\n'))),Object(o.b)(c.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'HttpProvider client = new HttpProvider("https://api.zilliqa.com/");\nTransaction transaction = client.getTransaction("055294ba67b3073d66ef078fb149dfb0490b2d46156479a9f2c9327fb762f4e9").getResult();\nSystem.out.println(new Gson().toJson(transaction))\n')))))}d.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,f=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(f,c(c({ref:t},s),{},{components:n})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},296:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},297:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},298:function(e,t,n){"use strict";var a=n(0),r=n(297);t.a=function(){return Object(a.useContext)(r.a)}},299:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(298),i=n(296),c=n(92),l=n.n(c);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:b,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:f}=Object(o.a)(),[m,v]=Object(a.useState)(c);if(null!=d){const e=p[d];null!=e&&e!==m&&b.some(t=>t.value===e)&&v(e)}const g=e=>{v(e),null!=d&&f(d,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},300:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);