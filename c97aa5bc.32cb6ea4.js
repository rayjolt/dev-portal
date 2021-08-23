(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{254:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(295)),o={id:"dev-keys-pkey",title:"Private Key & Keystore File",keywords:["key management","private key","keystore","import","dapp interaction","zilliqa"],description:"Zilliqa Private Key & Keystore File"},c={id:"dev/dev-keys-pkey",isDocsHomePage:!1,title:"Private Key & Keystore File",description:"Zilliqa Private Key & Keystore File",source:"@site/docs/dev/dev-keys-pkey.md",permalink:"/docs/dev/dev-keys-pkey",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-keys-pkey.md",sidebar:"DevelopersSidebar",previous:{title:"ZilPay",permalink:"/docs/dev/dev-keys-zilpay"},next:{title:"ZRC-2 Wallet Support",permalink:"/docs/dev/dev-keys-zrc2-wallet-support"}},l=[{value:"Import via Private Key",id:"import-via-private-key",children:[]},{value:"Import via Keystore File",id:"import-via-keystore-file",children:[]},{value:"Interacting with dApp",id:"interacting-with-dapp",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"Other than ZilPay, dApp developers can allow their users to interact with their dApp using other wallet choices such as a private key or keystore file.\nHowever, we do recommend to use browser add-on such as ZilPay for key management."),Object(i.b)("h2",{id:"import-via-private-key"},"Import via Private Key"),Object(i.b)("p",null,"The following code snippet illustrates on how To import your account from a private key"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"zilliqa.wallet.addByPrivateKey(privkey); //Private key was stored in the privKey variable\n")),Object(i.b)("h2",{id:"import-via-keystore-file"},"Import via Keystore File"),Object(i.b)("p",null,"The following code snippet illustrates how to import your account from an encrypted JSON keystore file and retrieve the private from the encrypted"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { decryptPrivateKey } from '@zilliqa-js/crypto';\nasync function privKeyFromKeystore() {\n  let keystore = JSON.parse(encryptedWallet); //encryptedWallet is the encrypted keystore file\n  let privKey = await decryptPrivateKey(passphrase, keystore); //passphrase variable has the passphrase of the encrypted wallet\n}\n")),Object(i.b)("h2",{id:"interacting-with-dapp"},"Interacting with dApp"),Object(i.b)("p",null,"After importing the account using ",Object(i.b)("inlineCode",{parentName:"p"},"zilliqa-js/crypto")," module, the subsequent steps for doing anything are similar to the previous example.\nIn the code snippet below, we call the ",Object(i.b)("inlineCode",{parentName:"p"},"setHello()")," transition of the ",Object(i.b)("inlineCode",{parentName:"p"},"Hello World")," Contract using a private key."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you wish to use keystore instead of a private key, you can replace the ",Object(i.b)("inlineCode",{parentName:"p"},"zilliqa.wallet.addByPrivateKey(privkey)")," with the code snippet above."))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"  async updateWelcomeMsg(){\n    //Only the below two lines are different when compared with ZilPay login.\n    let zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n    zilliqa.wallet.addByPrivateKey(privkey); //Private key was stored in the privKey variable\n\n    let setHelloValue = this.state.setHelloValue; //new value of the welcome msg\n    let contractAddress = localStorage.getItem(\"contract_address\");\n    const CHAIN_ID = 333;\n    const MSG_VERSION = 1;\n    const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);\n    const myGasPrice = units.toQa('1000', units.Units.Li); // Gas Price that will be used by all transactions\n    contractAddress = contractAddress.substring(2);\n    const ftAddr = toBech32Address(contractAddress);\n    try {\n        const contract = zilliqa.contracts.at(ftAddr);\n        const callTx = await contract.call(\n            'setHello',\n            [\n                {\n                    vname: 'msg',\n                    type: 'String',\n                    value: setHelloValue\n                }\n            ],\n            {\n                // amount, gasPrice and gasLimit must be explicitly provided\n                version: VERSION,\n                amount: new BN(0),\n                gasPrice: myGasPrice,\n                gasLimit: Long.fromNumber(10000),\n            }\n        );\n\n    } catch (err) {\n        console.log(err);\n    }\n  }\n")))}p.isMDXComponent=!0},295:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(o,".").concat(u)]||d[u]||y[u]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);