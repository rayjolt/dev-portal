(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),c=(n(0),n(295)),i={id:"exchange-transaction-receipts",title:"Understanding Transaction Receipts",keywords:["transaction receipts","fields","polling","exchanges","zilliqa"],description:"Transaction Receipts Exchanges"},b={id:"exchanges/exchange-transaction-receipts",isDocsHomePage:!1,title:"Understanding Transaction Receipts",description:"Transaction Receipts Exchanges",source:"@site/docs/exchanges/exchange-transaction-receipts.md",permalink:"/docs/exchanges/exchange-transaction-receipts",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/exchanges/exchange-transaction-receipts.md",sidebar:"ExchangesSidebar",previous:{title:"Polling for Deposits",permalink:"/docs/exchanges/exchange-tracking-deposits"},next:{title:"Managing Fungible Tokens (ZRC-2)",permalink:"/docs/exchanges/exchange-managing-zrc2-tokens"}},s=[{value:"Transaction Receipts",id:"transaction-receipts",children:[]},{value:"Basic Fields",id:"basic-fields",children:[]},{value:"Additional Fields",id:"additional-fields",children:[{value:"Successful Transactions",id:"successful-transactions",children:[]},{value:"Unsuccessful Transactions",id:"unsuccessful-transactions",children:[]}]},{value:"Recommended Steps for Exchanges Polling for Incoming $ZIL Deposit from Smart Contract Transactions",id:"recommended-steps-for-exchanges-polling-for-incoming-zil-deposit-from-smart-contract-transactions",children:[]}],o={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("hr",null),Object(c.b)("h2",{id:"transaction-receipts"},"Transaction Receipts"),Object(c.b)("p",null,"Confirmed transactions come with a ",Object(c.b)("strong",{parentName:"p"},"receipt")," under the ",Object(c.b)("strong",{parentName:"p"},"result")," field when ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://apidocs.zilliqa.com/#gettransaction"}),"fetching the transaction")," in JSON format."),Object(c.b)("h2",{id:"basic-fields"},"Basic Fields"),Object(c.b)("p",null,"The following are the fields a ",Object(c.b)("strong",{parentName:"p"},"receipt")," may have. These fields generally apply to both payment and contract transactions."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"cumulative_gas")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The total gas consumed in this transaction")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"epoch_num")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The epoch number in which this transaction was confirmed")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"success")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The result of this transaction (",Object(c.b)("inlineCode",{parentName:"td"},"true")," on success)")))),Object(c.b)("p",null,"For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'"receipt": {\n  "cumulative_gas": "10481",\n  "epoch_num": "586524",\n  "success": true\n},\n')),Object(c.b)("h2",{id:"additional-fields"},"Additional Fields"),Object(c.b)("p",null,'For smart contract transactions, additional information relating to smart contract execution is contained in additional fields under the "',Object(c.b)("strong",{parentName:"p"},"receipt"),'".'),Object(c.b)("h3",{id:"successful-transactions"},"Successful Transactions"),Object(c.b)("p",null,"If a transaction is successful (i.e., the ",Object(c.b)("strong",{parentName:"p"},"success")," field is ",Object(c.b)("inlineCode",{parentName:"p"},"true"),"), these fields will be present:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"accepted")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Indicates whether the last transition in this transaction incurred a ",Object(c.b)("strong",{parentName:"td"},"balance transfer"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"event_logs")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"json-array"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A list of event logs emitted by the contract during processing. Each log contains:",Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"_","eventname"),": ","[string]"," The name of the event"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"address"),": ","[string]"," The address of the contract that emitted this event"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"params"),": ","[json-array]"," A list of parameters under the transition. Each entry contains:",Object(c.b)("ul",null,Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"vname"),": ","[string]"," The name of the variable"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"type"),": ","[string]"," The type of the variable"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"value"),": ","[string]"," The value of the variable")))))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"transitions")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"json-array"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A list of internal transitions invoked during the processing of the transaction by the Scilla interpreter. Each transition contains:",Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"addr"),": ","[string]"," The address of the contract account that emitted this transition"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"depth"),": ","[int]"," The depth of the current transition. The transitions directly emitted by the recipient in the transaction will be in depth 0. If those transitions in depth 0 invoked transitions from other contracts, those will be in depth 1. And so on and so forth."),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"msg"),": ","[json-object]"," The message field emitted by the Scilla interpreter, which includes:",Object(c.b)("ul",null,Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"_","amount"),": ","[string]"," The balance transferred from this transition"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"_","recipient"),": ","[string]"," The recipient of this transition, which can either be a wallet account or contract account"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"_","tag"),": ","[string]"," The contract-defined transition name"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"params"),": ","[json-array]"," A list of parameters under the transition. Each entry contains:",Object(c.b)("ul",null,Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"vname"),": ","[string]"," The name of the variable"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"type"),": ","[string]"," The type of the variable"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"value"),": ","[string]"," The value of the variable")))))))))),Object(c.b)("p",null,"For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'"receipt": {\n  "accepted": true,\n  "cumulative_gas": "878",\n  "epoch_num": "589742",\n  "event_logs":[\n    {\n      "_eventname":"RecordsSet",\n      "address":"0x708bfbba57436ed45efc13df9fab4249a354e06b",\n      "params":[\n        {\n          "type":"ByStr20",\n          "value":"0x9611c53be6d1b32058b2747bdececed7e1216793",\n          "vname":"registry"\n        },\n        {\n          "type":"ByStr32",\n          "value":"0x2bb13c9b0a5dd28d42b470e2073df14608a9056310988b84b24dc342211e0627",\n          "vname":"node"\n        }\n      ]\n    },\n  ],\n  "success": true,\n  "transitions": [\n    {\n      "addr": "0x9a65df55b2668a0f9f5f749267cb351a37e1f3d9",\n      "depth": 0,\n      "msg": {\n        "_amount": "50000000000000",\n        "_recipient": "0xc0e28525e9d329156e16603b9c1b6e4a9c7ed813",\n        "_tag": "onFundsReceived",\n        "params": [\n          "vname": "emp_addr",\n          "type": "ByStr20",\n          "Value": "0x00345678901234567890123456789012345678ab"\n        ]\n      }\n    }\n  ]\n}\n\n')),Object(c.b)("h3",{id:"unsuccessful-transactions"},"Unsuccessful Transactions"),Object(c.b)("p",null,"If a transaction is unsuccessful (i.e., the ",Object(c.b)("strong",{parentName:"p"},"success")," field is ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"), no balance transfer will be executed. Additionally, these fields will be present:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Field"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"errors")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"json-object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object containing a key-value field. The key ","[string]"," indicates the depth at which the error occurred. The value part is a JSON array that lists the error codes ","[int]"," reported. The list of possible error codes can be found ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/Zilliqa/Zilliqa/blob/8b088f8ea63f1aab43fde8bbb9741ecaf36b089b/src/libData/AccountData/TransactionReceipt.h#L32"}),"here"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"exceptions")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"json-array"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A list of exceptions returned by the Scilla interpreter. Each exception contains:",Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"line\u201d"),": ","[int]"," The line in the Scilla contract code where the exception was detected"),Object(c.b)("li",null,Object(c.b)("strong",{parentName:"td"},"message"),": ","[string]"," The message describing the exception")))))),Object(c.b)("p",null,"For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),'"receipt": {\n  "cumulative_gas": "1220",\n  "epoch_num": "588004",\n  "errors": {\n    "0": [\n      7\n    ]\n  },\n  "exceptions": [\n    {\n      "line": 87,\n      "message": "Exception thrown: (Message [(_exception : (String \\"Error\\")) ; (code : (Int32 -2))])"\n    },\n    {\n      "line": 100,\n      "message": "Raised from IsAdmin"\n    },\n    {\n      "line": 137,\n      "message": "Raised from ConfigureUsers"\n    }\n  ],\n  "success": false\n  }\n')),Object(c.b)("h2",{id:"recommended-steps-for-exchanges-polling-for-incoming-zil-deposit-from-smart-contract-transactions"},"Recommended Steps for Exchanges Polling for Incoming $ZIL Deposit from Smart Contract Transactions"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Confirm that the ",Object(c.b)("strong",{parentName:"li"},"success")," field is set to ",Object(c.b)("inlineCode",{parentName:"li"},"true"),"."),Object(c.b)("li",{parentName:"ol"},"Traverse the ",Object(c.b)("strong",{parentName:"li"},"transitions")," JSON array. For each transition, for a successful deposit of ",Object(c.b)("inlineCode",{parentName:"li"},"$ZIL")," via the smart contract, the following must be fulfilled:",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"_","recipient")," corresponds to a known deposit address controlled by the exchange."),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"_","tag")," is either ",Object(c.b)("inlineCode",{parentName:"li"},"AddFunds")," or empty.",Object(c.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"_tag")," can be found under ",Object(c.b)("inlineCode",{parentName:"p"},"msg")," field. If either ",Object(c.b)("inlineCode",{parentName:"p"},"_tag")," or ",Object(c.b)("inlineCode",{parentName:"p"},"msg")," is not present, there is no incoming deposit from this particular transition.")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"_","amount")," is non-zero."),Object(c.b)("li",{parentName:"ol"},"Check the ",Object(c.b)("strong",{parentName:"li"},"_","recipient")," and ",Object(c.b)("strong",{parentName:"li"},"_","amount")," to complete the information on the balance transfer. In such a case, you can confirm that there is a deposit\nto address ",Object(c.b)("strong",{parentName:"li"},"_","recipient")," with value ",Object(c.b)("strong",{parentName:"li"},"_","amount")," (in ",Object(c.b)("inlineCode",{parentName:"li"},"Qa"),")."),Object(c.b)("li",{parentName:"ol"},"Continue traversing the remaining transitions and checking for more deposits.")))))}l.isMDXComponent=!0},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,O=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?r.a.createElement(O,b(b({ref:t},o),{},{components:n})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);