(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(295)),c=n(302),o={id:"dev-started-introduction",title:"Introduction",keywords:["getting started","dapp development","address formats","zilliqa"],description:"Zilliqa developer getting started"},s={id:"dev/dev-started-introduction",isDocsHomePage:!1,title:"Introduction",description:"Zilliqa developer getting started",source:"@site/docs/dev/dev-started-introduction.mdx",permalink:"/docs/dev/dev-started-introduction",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-started-introduction.mdx",sidebar:"DevelopersSidebar",next:{title:"Hello World",permalink:"/docs/dev/dev-started-helloworld"}},l=[{value:"Getting Started with dApp Development",id:"getting-started-with-dapp-development",children:[{value:"What are dApps?",id:"what-are-dapps",children:[]},{value:"Addresses",id:"addresses",children:[]}]}],d={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"getting-started-with-dapp-development"},"Getting Started with dApp Development"),Object(i.b)("p",null,"This section aims to give developers an idea on how to get started with development on Zilliqa."),Object(i.b)("p",null,"We try to make this guide concise, but yet easy enough for a developer with no experience in blockchain development. As many applications developers are ",Object(i.b)("inlineCode",{parentName:"p"},"javascript")," developers, we will use ",Object(i.b)("inlineCode",{parentName:"p"},"javascript")," in code snippet examples. Zilliqa Research currently actively maintains an official SDK in Javascript ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library"}),Object(i.b)("inlineCode",{parentName:"a"},"zilliqa-js"))," which we'll be using in our examples."),Object(i.b)("h3",{id:"what-are-dapps"},"What are dApps?"),Object(i.b)("p",null,'Decentralised Apps ("dApps") are applications that interact with smart contracts on the blockchain. As Zilliqa blockchain is a decentralised network that is not hosted by a single entity, application that sits on the blockchain is ',Object(i.b)("em",{parentName:"p"},"decentralised"),"."),Object(i.b)("p",null,'An application can have a user-facing components ("client"), which could be a web application or mobile app. These applications can interact with smart contracts on the Zilliqa blockchain.'),Object(i.b)("img",{alt:"Overview",src:Object(c.a)("img/dev/dapps-overview.png")}),Object(i.b)("p",null,"The entry to Zilliqa blockchain lies on the RPC interface. SDKs are not compulsory for you to interact with the blockchain, but they do make your life easier."),Object(i.b)("p",null,"Saw the ",Object(i.b)("inlineCode",{parentName:"p"},"0x1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"0x2")," on the entities on the blockchain? Those are ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#addresses"}),"addresses"),"."),Object(i.b)("p",null,"Addresses are an identifier to an entity on the blockchain. An entity on the blockchain can be either a user or a contract."),Object(i.b)("h3",{id:"addresses"},"Addresses"),Object(i.b)("p",null,"Zilliqa currently supports two address formats."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ByStr20"),": 20 byte hexadecimal string (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"0x573EC96638C8bB1c386394602E1460634F02aDdA"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bech32"),": A ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-1.md"}),"bech32")," with a human-readable prefix of ",Object(i.b)("inlineCode",{parentName:"li"},"zil")," (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"zil12ulvje3ceza3cwrrj3szu9rqvd8s9tw69c978p"),")")),Object(i.b)("p",null,"The reason behind this design is to prevent confusion with Ethereum addresses. For more detailed explanation on the address, refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://blog.zilliqa.com/zilliqa-migrates-to-new-address-format-bf1fa6d7e41d"}),"this post")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const { toBech32Address, toChecksumAddress } = require('@zilliqa-js/crypto');\n\n// not checksummed address (will not be accepted by blockchain)\nconst address = '573EC96638C8BB1C386394602E1460634F02ADDA';\n\n// checksummed ByStr20\nconst checksummedAddresses = toChecksumAddress(address);\n// returns '0x573EC96638C8bB1c386394602E1460634F02aDdA'\n\nconst bech32_address = toBech32Address(address);\n// returns zil12ulvje3ceza3cwrrj3szu9rqvd8s9tw69c978p\n")),Object(i.b)("p",null,"We ",Object(i.b)("strong",{parentName:"p"},"strongly recommend")," that developers use ",Object(i.b)("inlineCode",{parentName:"p"},"bech32")," formatted addresses for token transfers. This prevents users from mistaking Zilliqa addresses from Ethereum addresses. All wallets and exchanges that deal with token transfers currently use the ",Object(i.b)("inlineCode",{parentName:"p"},"bech32")," standard for security purposes."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ByStr20")," checksummed addresses are supported by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://apidocs.zilliqa.com"}),"RPC"),", SDKs and ",Object(i.b)("inlineCode",{parentName:"p"},"scilla")," contracts."),Object(i.b)("p",null,"How do you know if an address is a smart contract or an account? One way to go about it is to send a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://apidocs.zilliqa.com/#getsmartcontractcode"}),Object(i.b)("inlineCode",{parentName:"a"},"GetSmartContractInit"))," POST request to check."),Object(i.b)("p",null,"In Javascript, you can do the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const { Zilliqa } = require('@zilliqa-js/zilliqa');\n\n(async () => {\n  const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n  const address = '573EC96638C8BB1C386394602E1460634F02ADDA';\n\n  const res = await zilliqa.blockchain.getSmartContractInit(address);\n  const isContract = !!res.result;\n  // returns false\n})();\n")))}p.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||b[u]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},301:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(301),a=n(303);function i(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:i="/",url:c}={}}=Object(r.a)();if(!e)return e;if(t)return i+e;if(!Object(a.a)(e))return e;const o=i+e.replace(/^\//,"");return n?c+o:o}},303:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);