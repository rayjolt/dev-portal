(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{249:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return l}));var a=t(2),c=t(6),s=(t(0),t(295)),r={id:"dev-tools-websockets",title:"WebSocket Server",keywords:["websockets","txblock","subscription events","events","contract","zilliqa"],description:"Zilliqa Websockets"},i={id:"dev/dev-tools-websockets",isDocsHomePage:!1,title:"WebSocket Server",description:"Zilliqa Websockets",source:"@site/docs/dev/dev-tools-websockets.md",permalink:"/docs/dev/dev-tools-websockets",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-tools-websockets.md",sidebar:"DevelopersSidebar",previous:{title:"Other SDKs",permalink:"/docs/dev/dev-tools-sdks"},next:{title:"CLI-Tools",permalink:"/docs/dev/dev-tools-cli"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"Feature Workflow",id:"feature-workflow",children:[]},{value:"Supported Query",id:"supported-query",children:[]},{value:"Exception Handling",id:"exception-handling",children:[]},{value:"Message Encoding",id:"message-encoding",children:[{value:"Subscribe New Block",id:"subscribe-new-block",children:[]},{value:"Subscribe Event Log",id:"subscribe-event-log",children:[]},{value:"Subscribe Transaction Log",id:"subscribe-transaction-log",children:[]},{value:"Unsubscribe",id:"unsubscribe",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Example using zilliqa-js",id:"example-using-zilliqa-js",children:[{value:"Subscribe New Block",id:"subscribe-new-block-1",children:[]},{value:"Subscribe Event Log",id:"subscribe-event-log-1",children:[]}]}],b={rightToc:o};function l(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("hr",null),Object(s.b)("p",null,"This page describes the protocol - between the Zilliqa WebSocket Server and the SDK client - for querying subscription and message pushing."),Object(s.b)("h2",{id:"introduction"},"Introduction"),Object(s.b)("p",null,"Zilliqa WebSocket Server provides WebSocket service, enabling dApp developers or other builders on Zilliqa blockchain to subscribe to specific topics (e.g., a new block has been produced, the payment transaction has been confirmed, events issued by smart contracts). With the WebSocket service, developers no longer need to poll the blockchain routinely to get specific information."),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Network"),Object(s.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Endpoint"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mainnet"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"wss://api-ws.zilliqa.com")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Testnet"),Object(s.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"wss://dev-ws.zilliqa.com")))),Object(s.b)("h2",{id:"feature-workflow"},"Feature Workflow"),Object(s.b)("p",null,"Clients can subscribe to or unsubscribe from certain topics by sending a query. If the query fails, clients will normally be informed immediately through a relevant error message. For every Tx block, the subscribed content will be sent out by the server to each client in one message. This message (herein referred to as the ",Object(s.b)("strong",{parentName:"p"},"notification"),") includes an array that contains all the updates to subscribed topics."),Object(s.b)("h2",{id:"supported-query"},"Supported Query"),Object(s.b)("p",null,"The following types of data are currently supported for querying:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"New TxBlock"),". This includes the recently generated Tx block and hashes of all the transactions processed within this block."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Event log"),". This includes all the event logs generated for the specified contract address."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Unsubscribe"),". This tells the server to unsubscribe the client from a certain topic.")),Object(s.b)("h2",{id:"exception-handling"},"Exception Handling"),Object(s.b)("p",null,"An ",Object(s.b)("strong",{parentName:"p"},"error message")," will usually be sent to the client if a query fails:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type":"Error",\n  "error":"..."\n}\n')),Object(s.b)("p",null,"The following error message applies to all kinds of invalid queries:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"invalid query field"),". This informs the client that the query is invalid, cannot be found, empty, malformed, or not available.")),Object(s.b)("h2",{id:"message-encoding"},"Message Encoding"),Object(s.b)("p",null,"For convention, we still use JSON as our encoding format."),Object(s.b)("p",null,"The epoch message will be presented in this way:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "type": "Notification",\n    "values": [{\n        "query": "NewBlock",\n        "value": {\n            "TxBlock": {\n                "body": {\n                    "BlockHash": "b2214da8e25efbd4291f85016094824a8fcd46075d06e365282d39ee4ba8ca24",\n                    "HeaderSign": "E276EFC8B01AC51804272AAAB4FC59DD96B08B3988F9DA6BED28657CC74A1A609E73B203AA58664EAEB4A960FFEF3D636A7691EBD7F89A03CEFEB12FA8797615",\n                    "MicroBlockInfos": [{\n                        "MicroBlockHash": "9e811581454211ea5a757678460bb62a73860d1be9e5b8b805d3b176d4d92451",\n                        "MicroBlockShardId": 0,\n                        "MicroBlockTxnRootHash": "eec45db6a9b70463a8ac32bec853bcb5fe1d73ffec1244e1cc0427036483bbfa"\n                    }, {\n                        "MicroBlockHash": "066ff187ff392a9a9cd430a248552f10759f98e0ac530015091ffa430d68ba83",\n                        "MicroBlockShardId": 1,\n                        "MicroBlockTxnRootHash": "0000000000000000000000000000000000000000000000000000000000000000"\n                    }, {\n                        "MicroBlockHash": "250091b5c626143bde230813c527f77a007303e6dc3502642c7d468bc2d064e4",\n                        "MicroBlockShardId": 2,\n                        "MicroBlockTxnRootHash": "0000000000000000000000000000000000000000000000000000000000000000"\n                    }]\n                },\n                "header": {\n                    "BlockNum": "15",\n                    "DSBlockNum": "1",\n                    "GasLimit": "15000000",\n                    "GasUsed": "1",\n                    "MbInfoHash": "4b2d20a0bcb382ad2e2560791ed90ed21100e8e84ebac63d62d3c0b1a3fb11fe",\n                    "MinerPubKey": "0x02FC9ED69524A23AEFCB85B8A36C998F512C0512C6932DED74680A044F9D3EBC95",\n                    "NumMicroBlocks": 3,\n                    "NumTxns": 1,\n                    "PrevBlockHash": "5bda21605e7ea9404c58a40eebe99563adf330bab5b39e7438f8e4db28607b37",\n                    "Rewards": "1000000000",\n                    "StateDeltaHash": "2f878030ab9b0a211c1e584e140707c79d62d067390bfe3ccaf08fdaeaad2229",\n                    "StateRootHash": "94abb63e27984f46e914db2601de6af2048a3bf72f69eaac34421b7dfbd34a82",\n                    "Timestamp": "1572512230807870",\n                    "Version": 1\n                }\n            }\n        },\n        "TxHashes": [\n            ["1beb32a5435e993aa3025a70d8a5e71df43c10e2fe3f6ef832d1a5c371a63852"],\n            [],\n            []\n        ]\n    }, {\n        "query": "EventLog",\n        "value": [{\n            "address": "0x0000000000000000000000000000000000000000",\n            "event_logs": [{\n                "_eventname": "foo1",\n                "params": [{\n                    "vname": "bar1",\n                    "type": "String",\n                    "value": "abc"\n                }, {\n                    "vname": "bar2",\n                    "type": "ByStr32",\n                    "value": "0x0000000000000000000000000000000000000001"\n                }]\n            }]\n        }]\n    }, {\n        "query": "Unsubscribe",\n        "value": ["NewBlock"]\n    }]\n}\n')),Object(s.b)("p",null,"The following sections provide the details for each subscription topic."),Object(s.b)("h3",{id:"subscribe-new-block"},"Subscribe New Block"),Object(s.b)("h4",{id:"query-message"},"Query Message"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "query": "NewBlock"\n}\n')),Object(s.b)("h4",{id:"response-message"},"Response Message"),Object(s.b)("p",null,"Once successfully subscribed, the server will echo the query message to the client. Otherwise, the server will return an error message."),Object(s.b)("h4",{id:"error-messages-specific-to-this-topic"},"Error Messages Specific to this Topic"),Object(s.b)("p",null,"None"),Object(s.b)("h4",{id:"sample-notification"},"Sample Notification"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "query": "NewBlock",\n    "value": {\n        "TxBlock": {\n            "body": {\n                "BlockHash": "b2214da8e25efbd4291f85016094824a8fcd46075d06e365282d39ee4ba8ca24",\n                "HeaderSign": "E276EFC8B01AC51804272AAAB4FC59DD96B08B3988F9DA6BED28657CC74A1A609E73B203AA58664EAEB4A960FFEF3D636A7691EBD7F89A03CEFEB12FA8797615",\n                "MicroBlockInfos": [{\n                    "MicroBlockHash": "9e811581454211ea5a757678460bb62a73860d1be9e5b8b805d3b176d4d92451",\n                    "MicroBlockShardId": 0,\n                    "MicroBlockTxnRootHash": "eec45db6a9b70463a8ac32bec853bcb5fe1d73ffec1244e1cc0427036483bbfa"\n                }, {\n                    "MicroBlockHash": "066ff187ff392a9a9cd430a248552f10759f98e0ac530015091ffa430d68ba83",\n                    "MicroBlockShardId": 1,\n                    "MicroBlockTxnRootHash": "0000000000000000000000000000000000000000000000000000000000000000"\n                }, {\n                    "MicroBlockHash": "250091b5c626143bde230813c527f77a007303e6dc3502642c7d468bc2d064e4",\n                    "MicroBlockShardId": 2,\n                    "MicroBlockTxnRootHash": "0000000000000000000000000000000000000000000000000000000000000000"\n                }]\n            },\n            "header": {\n                "BlockNum": "15",\n                "DSBlockNum": "1",\n                "GasLimit": "15000000",\n                "GasUsed": "1",\n                "MbInfoHash": "4b2d20a0bcb382ad2e2560791ed90ed21100e8e84ebac63d62d3c0b1a3fb11fe",\n                "MinerPubKey": "0x02FC9ED69524A23AEFCB85B8A36C998F512C0512C6932DED74680A044F9D3EBC95",\n                "NumMicroBlocks": 3,\n                "NumTxns": 1,\n                "PrevBlockHash": "5bda21605e7ea9404c58a40eebe99563adf330bab5b39e7438f8e4db28607b37",\n                "Rewards": "1000000000",\n                "StateDeltaHash": "2f878030ab9b0a211c1e584e140707c79d62d067390bfe3ccaf08fdaeaad2229",\n                "StateRootHash": "94abb63e27984f46e914db2601de6af2048a3bf72f69eaac34421b7dfbd34a82",\n                "Timestamp": "1572512230807870",\n                "Version": 1\n            }\n        }\n    },\n    "TxHashes": [\n        ["1beb32a5435e993aa3025a70d8a5e71df43c10e2fe3f6ef832d1a5c371a63852"],\n        [],\n        []\n    ]\n}\n')),Object(s.b)("h3",{id:"subscribe-event-log"},"Subscribe Event Log"),Object(s.b)("h4",{id:"query-message-1"},"Query Message"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "query":"EventLog",\n  "addresses":[\n    "0x0000000000000000000000000000000000000000",\n    "0x1111111111111111111111111111111111111111"\n  ]\n}\n')),Object(s.b)("h4",{id:"response-message-1"},"Response Message"),Object(s.b)("p",null,"Once successfully subscribed, the server will echo the query message to the client. Otherwise, the server will return an error message."),Object(s.b)("h4",{id:"error-messages-specific-to-this-topic-1"},"Error Messages Specific to this Topic"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"invalid addresses field"),". This tells the client that the addresses field is invalid, meaning it could not be found or is either malformed or empty."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"no contract found in list"),". This tells the client that the addresses provided are all non-contracts.")),Object(s.b)("h4",{id:"sample-notification-1"},"Sample Notification"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "query":"EventLog",\n  "value":\n  [\n    {\n      "address":"0x0000000000000000000000000000000000000000",\n      "event_logs":[\n        {\n          "_eventname":"foo1",\n          "params":[\n            {\n              "vname":"bar1",\n              "type":"String",\n              "value":"abc"\n            },\n            {\n              "vname":"bar2",\n              "type":"ByStr32",\n              "value":"0x0000000000000000000000000000000000000001"\n            }\n          ]\n        },\n      ]\n    }\n  ]\n}\n')),Object(s.b)("p",null,"Notice that for address ",Object(s.b)("inlineCode",{parentName:"p"},"0x1111111111111111111111111111111111111111")," is not presented in the message since it doesn't have any event log released in this epoch."),Object(s.b)("h3",{id:"subscribe-transaction-log"},"Subscribe Transaction Log"),Object(s.b)("h4",{id:"query-message-2"},"Query Message"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"query" : "TxnLog" , "addresses" : ["0x42fb82623b9ea0b9dbf41e74304a39908a378cfd"]}\n')),Object(s.b)("h4",{id:"response-message-2"},"Response Message"),Object(s.b)("p",null,"Once successfully subscribed, the server will echo the query message to the client. Otherwise, the server will return an error message."),Object(s.b)("h4",{id:"error-messages-specific-to-this-topic-2"},"Error Messages Specific to this Topic"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"invalid hex address")," . This tells if the address field is a proper 32 byte address.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"invalid addresses field"),". This tells the client that the addresses field is invalid, meaning it could not be found or is either malformed or empty.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"no valid address found in list"),". This tells the client that the addresses provided are all invalid."))),Object(s.b)("h4",{id:"sample-notification-2"},"Sample Notification"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "Notification",\n  "values": [\n    {\n      "query": "TxnLog",\n      "value": [\n        {\n          "address": "eb955ff1715a1eb71f63c655504866117591b7fa",\n          "log": [\n            {\n              "ID": "b676bd19fecaf6296e799f9edc2887c85e6d5e6417860f454ddd73ed0dc6fd61",\n              "amount": "1000000000000",\n              "fromAddr": "eb955ff1715a1eb71f63c655504866117591b7fa",\n              "success": true,\n              "toAddr": "046105286e2ec9ca467b5bdfa0975b0e9342eb0a"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(s.b)("h3",{id:"unsubscribe"},"Unsubscribe"),Object(s.b)("h4",{id:"query-message-3"},"Query Message"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "query":"Unsubscribe",\n  "type":"EventLog"\n}\n')),Object(s.b)("h4",{id:"response-message-3"},"Response Message"),Object(s.b)("p",null,"Once successfully unsubscribed, the server will echo the query message to the client. Otherwise, the server will return an error message."),Object(s.b)("h4",{id:"error-messages-specific-to-this-topic-3"},"Error Messages Specific to this Topic"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"invalid type field"),". This tells the client that the type field is invalid, meaning it could not be found or is either malformed or empty.")),Object(s.b)("h4",{id:"sample-notification-3"},"Sample Notification"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "query":"Unsubscribe",\n  "value":["NewBlock", "EventLog"]\n}\n')),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)("p",null,"Client subscribe NewBlock:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n "query":"NewBlock"\n}\n')),Object(s.b)("p",null,"Client subscribe EventLog:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n "query":"EventLog",\n "addresses":[\n   "0x000000000000000000000000000000000",\n   "0x111111111111111111111111111111111"\n ]\n}\n')),Object(s.b)("p",null,"Client unsubscribe NewBlock:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "query":"Unsubscribe",\n  "type":"NewBlock"\n}\n')),Object(s.b)("p",null,"Notification:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type":"Notification",\n  "values":[\n    {\n      "query":"NewBlock",\n      "value":{\n        "TxBlock":{\n          "body":{\n            "BlockHash":"b2214da8e25efbd4291f85016094824a8fcd46075d06e365282d39ee4ba8ca24",\n            "HeaderSign":"E276EFC8B01AC51804272AAAB4FC59DD96B08B3988F9DA6BED28657CC74A1A609E73B203AA58664EAEB4A960FFEF3D636A7691EBD7F89A03CEFEB12FA8797615",\n            "MicroBlockInfos":[\n              {\n                "MicroBlockHash":"9e811581454211ea5a757678460bb62a73860d1be9e5b8b805d3b176d4d92451",\n                "MicroBlockShardId":0,\n                "MicroBlockTxnRootHash":"eec45db6a9b70463a8ac32bec853bcb5fe1d73ffec1244e1cc0427036483bbfa"\n              },\n              {\n                "MicroBlockHash":"066ff187ff392a9a9cd430a248552f10759f98e0ac530015091ffa430d68ba83",\n                "MicroBlockShardId":1,\n                "MicroBlockTxnRootHash":"0000000000000000000000000000000000000000000000000000000000000000"\n              },\n              {\n                "MicroBlockHash":"250091b5c626143bde230813c527f77a007303e6dc3502642c7d468bc2d064e4",\n                "MicroBlockShardId":2,\n                "MicroBlockTxnRootHash":"0000000000000000000000000000000000000000000000000000000000000000"\n              }\n            ]\n          },\n          "header":{\n            "BlockNum":"15",\n            "DSBlockNum":"1",\n            "GasLimit":"15000000",\n            "GasUsed":"1",\n            "MbInfoHash":"4b2d20a0bcb382ad2e2560791ed90ed21100e8e84ebac63d62d3c0b1a3fb11fe",\n            "MinerPubKey":"0x02FC9ED69524A23AEFCB85B8A36C998F512C0512C6932DED74680A044F9D3EBC95",\n            "NumMicroBlocks":3,\n            "NumTxns":1,\n            "PrevBlockHash":"5bda21605e7ea9404c58a40eebe99563adf330bab5b39e7438f8e4db28607b37",\n            "Rewards":"1000000000",\n            "StateDeltaHash":"2f878030ab9b0a211c1e584e140707c79d62d067390bfe3ccaf08fdaeaad2229",\n            "StateRootHash":"94abb63e27984f46e914db2601de6af2048a3bf72f69eaac34421b7dfbd34a82",\n            "Timestamp":"1572512230807870",\n            "Version":1\n          }\n        }\n      },\n      "TxHashes":[\n        ["1beb32a5435e993aa3025a70d8a5e71df43c10e2fe3f6ef832d1a5c371a63852"],\n        [],\n        []\n      ]\n    },\n    {\n      "query":"EventLog",\n      "value":[\n        {\n          "address":"0x0000000000000000000000000000000000000000",\n          "event_logs":[\n            {\n              "_eventname":"foo1",\n              "params":[\n                {\n                  "vname":"bar1",\n                  "type":"String",\n                  "value":"abc"\n                },\n                {\n                  "vname":"bar2",\n                  "type":"ByStr32",\n                  "value":"0x0000000000000000000000000000000000000001"\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "query":"Unsubscribe",\n      "value":["NewBlock"]\n    }\n  ]\n}\n\n')),Object(s.b)("p",null,"After the above message, during the next Tx block, the client will no longer receive a ",Object(s.b)("inlineCode",{parentName:"p"},"NewBlock")," in the notification."),Object(s.b)("h2",{id:"example-using-zilliqa-js"},"Example using zilliqa-js"),Object(s.b)("p",null,"Our ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library"}),"Zilliqa-JavaScript-Library")," provides an easier way to subscribe to topics."),Object(s.b)("h3",{id:"subscribe-new-block-1"},"Subscribe New Block"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Zilliqa } = require('@zilliqa-js/zilliqa');\nconst {\n  SocketConnect,\n  StatusType,\n  MessageType,\n} = require('@zilliqa-js/subscriptions');\n\nasync function test() {\n  const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n  \n  const subscriber = zilliqa.subscriptionBuilder.buildNewBlockSubscriptions(\n    'wss://dev-ws.zilliqa.com',\n  );\n  \n  // if subscribe success, it will echo the subscription info\n  subscriber.emitter.on(StatusType.SUBSCRIBE_NEW_BLOCK, (event) => {\n    console.log('get SubscribeNewBlock echo: ', event);\n  });\n\n  subscriber.emitter.on(MessageType.NEW_BLOCK, (event) => {\n    // doing what you want with new block\n    console.log('get new block: ', event.value.TxBlock.header);\n  });\n  \n  //if unsubscribe success, it will echo the unsubscription info\n  subscriber.emitter.on(MessageType.UNSUBSCRIBE, (event) => {\n    console.log('get unsubscribe event: ', event);\n  });\n\n  await subscriber.start();\n}\n\ntest();\n")),Object(s.b)("h3",{id:"subscribe-event-log-1"},"Subscribe Event Log"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Zilliqa } = require('@zilliqa-js/zilliqa');\nconst { StatusType, MessageType } = require('@zilliqa-js/subscriptions');\n\nasync function test() {\n  const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n  const subscriber = zilliqa.subscriptionBuilder.buildEventLogSubscriptions(\n    'wss://dev-ws.zilliqa.com',\n    {\n      // smart contract address you want to listen on  \n      addresses: [\n        '0x2ce491a0fd9e318b39172258101b7c836da7449b',\n        '0x167e3980e04eab1e89ff84523ae8c77e008932dc',\n      ],\n    },\n  );\n  \n  subscriber.emitter.on(StatusType.SUBSCRIBE_EVENT_LOG, (event) => {\n    // if subscribe success, it will echo the subscription info\n    console.log('get SubscribeEventLog echo: ', event);\n  });\n  \n  subscriber.emitter.on(MessageType.EVENT_LOG, (event) => {\n    // do what you want with new event log\n    console.log('get new event log: ', JSON.stringify(event));\n  });\n \n  subscriber.emitter.on(MessageType.UNSUBSCRIBE, (event) => {\n    //if unsubscribe success, it will echo the unsubscription info\n    console.log('get unsubscribe event: ', event);\n  });\n\n  await subscriber.start();\n}\n\ntest();\n")))}l.isMDXComponent=!0},295:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),c=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var b=c.a.createContext({}),l=function(e){var n=c.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return c.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},p=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=l(t),p=a,f=d["".concat(r,".").concat(p)]||d[p]||u[p]||s;return t?c.a.createElement(f,i(i({ref:n},b),{},{components:t})):c.a.createElement(f,i({ref:n},b))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=p;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var b=2;b<s;b++)r[b]=t[b];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);