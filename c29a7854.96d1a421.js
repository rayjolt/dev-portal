(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),c=n(6),a=(n(0),n(295)),o={id:"rosetta-construction-derive",title:"Derive",keywords:["rosetta","middleware","exchanges","zilliqa","API","contruction","derive"],description:"Derive"},i={id:"exchanges/rosetta-construction-derive",isDocsHomePage:!1,title:"Derive",description:"Derive",source:"@site/docs/exchanges/rosetta-construction-derive.md",permalink:"/docs/exchanges/rosetta-construction-derive",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/exchanges/rosetta-construction-derive.md",sidebar:"ExchangesSidebar",previous:{title:"Introduction",permalink:"/docs/exchanges/rosetta-construction"},next:{title:"Preprocess",permalink:"/docs/exchanges/rosetta-construction-preprocess"}},s=[{value:"Derive an Address from a Public Key",id:"derive-an-address-from-a-public-key",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("h2",{id:"derive-an-address-from-a-public-key"},"Derive an Address from a Public Key"),Object(a.b)("p",null,"Returns the address associated with the public key. Both ",Object(a.b)("inlineCode",{parentName:"p"},"bech32")," and checksummed ",Object(a.b)("inlineCode",{parentName:"p"},"base16")," format is returned."),Object(a.b)("p",null,"Request:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "network_identifier": {\n    "blockchain": "zilliqa",\n    "network": "mainnet"\n  },\n  "public_key": {\n    "hex_bytes": "026c7f3b8ac6f615c00c34186cbe4253a2c5acdc524b1cfae544c629d8e3564cfc",\n    "curve_type": "secp256k1"\n  },\n  "metadata": {\n    "type": "bech32"\n  }\n}\n')),Object(a.b)("p",null,"Response:"),Object(a.b)("p",null,"Sample"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "address": "zil1y9qmlzmdygfaf4eqfcka4wfx20wzghzl05xazc",\n  "account_identifier": {\n    "address": "zil1y9qmlzmdygfaf4eqfcka4wfx20wzghzl05xazc",\n    "metadata": {\n      "base16": "2141BF8B6D2213d4d7204E2DDAB92653dC245c5F"\n    }\n  }\n}\n')))}u.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?c.a.createElement(f,i(i({ref:t},l),{},{components:n})):c.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);