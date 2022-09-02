(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{715:function(t,e,a){"use strict";a.r(e);var v=a(1),d=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")]),t._v(" "),a("p",[t._v("A user can query and interact with the "),a("code",[t._v("evm")]),t._v(" module using the CLI, JSON-RPC, gRPC or REST.")]),t._v(" "),a("h2",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),a("p",[t._v("Find below a list of "),a("code",[t._v("ethermintd")]),t._v(" commands added with the "),a("code",[t._v("x/evm")]),t._v(" module. You can obtain the full list by using the "),a("code",[t._v("ethermintd -h")]),t._v(" command.")]),t._v(" "),a("h3",{attrs:{id:"queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queries"}},[t._v("#")]),t._v(" Queries")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("query")]),t._v(" commands allow users to query "),a("code",[t._v("evm")]),t._v(" state.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("code")])])]),t._v(" "),a("p",[t._v("Allows users to query the smart contract code at a given address.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZXRoZXJtaW50ZCBxdWVyeSBldm0gY29kZSBbYWRkcmVzc10gW2ZsYWdzXQo="}}),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBFeGFtcGxlCiQgZXRoZXJtaW50ZCBxdWVyeSBldm0gY29kZSAweDdiZjdiMTdkYTU5ODgwZDliY2NhMjQ5MTU2Nzk2NjhkYjc1ZjkzOTcKCiMgT3V0cHV0CmNvZGU6ICZxdW90OzB4ZWY2MTZjOTJmM2NmYzllOTJkYzI3MGQ2YWNmZjljZWEyMTNjZWNjNzAyMGE3NmVlNDM5NWFmMDliZGNlYjQ4MzdhMWViZGI1NzM1ZTExZTdkM2FkYjYxMDRlMGMzYWM1NTE4MGI0ZGRmNWU1NGQwMjJjYzVlODgzN2Y2YTRmOTcxYiZxdW90Owo="}}),t._v(" "),a("p",[a("strong",[a("code",[t._v("storage")])])]),t._v(" "),a("p",[t._v("Allows users to query storage for an account with a given key and height.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCBxdWVyeSBldm0gc3RvcmFnZSBbYWRkcmVzc10gW2tleV0gW2ZsYWdzXQo="}}),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBFeGFtcGxlCiQgZXRoZXJtaW50ZCBxdWVyeSBldm0gc3RvcmFnZSAweDBmNTRmNDdiZjliOGUzMTdiMjE0Y2NkNmE3YzNlMzhiODkzY2Q3ZjAgMCAtLWhlaWdodCAwCgojIE91dHB1dAp2YWx1ZTogJnF1b3Q7MHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7Cg=="}}),t._v(" "),a("h3",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("tx")]),t._v(" commands allow users to interact with the "),a("code",[t._v("evm")]),t._v(" module.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("raw")])])]),t._v(" "),a("p",[t._v("Allows users to build cosmos transactions from raw ethereum transaction.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXRoZXJtaW50ZCB0eCBldm0gcmF3IFt0eC1oZXhdIFtmbGFnc10K"}}),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBFeGFtcGxlCiQgZXRoZXJtaW50ZCB0eCBldm0gcmF3IDB4ZjlmZjc0Yzg2YWVmZWI1ZjYwMTlkNzcyODBiYmI0NGZiNjk1YjRkNDVjZmU5N2U2ZWVkN2FjZDYyOTA1ZjRhODUwMzRkNWM2OGVkMjVhMmU3YThlZWI5YmFmMWI4NAoKIyBPdXRwdXQKdmFsdWU6ICZxdW90OzB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCZxdW90Owo="}}),t._v(" "),a("h2",{attrs:{id:"json-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc"}},[t._v("#")]),t._v(" JSON-RPC")]),t._v(" "),a("p",[t._v("For an overview on  the JSON-RPC methods and namespaces supported on Ethermint, please refer to "),a("a",{attrs:{href:"https://docs.ethermint.zone/basics/json_rpc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.ethermint.zone/basics/json_rpc.html"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"grpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[t._v("#")]),t._v(" gRPC")]),t._v(" "),a("h3",{attrs:{id:"queries-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queries-2"}},[t._v("#")]),t._v(" Queries")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Verb")]),t._v(" "),a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/Account")])]),t._v(" "),a("td",[t._v("Get an Ethereum account")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/CosmosAccount")])]),t._v(" "),a("td",[t._v("Get an Ethereum account's Cosmos Address")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/ValidatorAccount")])]),t._v(" "),a("td",[t._v("Get an Ethereum account's from a validator consensus Address")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/Balance")])]),t._v(" "),a("td",[t._v("Get the balance of a the EVM denomination for a single EthAccount.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/Storage")])]),t._v(" "),a("td",[t._v("Get the balance of all coins for a single account")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/Code")])]),t._v(" "),a("td",[t._v("Get the balance of all coins for a single account")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/Params")])]),t._v(" "),a("td",[t._v("Get the parameters of x/evm module")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/EthCall")])]),t._v(" "),a("td",[t._v("Implements the eth_call rpc api")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/EstimateGas")])]),t._v(" "),a("td",[t._v("Implements the eth_estimateGas rpc api")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/TraceTx")])]),t._v(" "),a("td",[t._v("Implements the debug_traceTransaction rpc api")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Query/TraceBlock")])]),t._v(" "),a("td",[t._v("Implements the debug_traceBlockByNumber and debug_traceBlockByHash rpc api")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/account/{address}")])]),t._v(" "),a("td",[t._v("Get an Ethereum account")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/cosmos_account/{address}")])]),t._v(" "),a("td",[t._v("Get an Ethereum account's Cosmos Address")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/validator_account/{cons_address}")])]),t._v(" "),a("td",[t._v("Get an Ethereum account's from a validator consensus Address")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/balances/{address}")])]),t._v(" "),a("td",[t._v("Get the balance of a the EVM denomination for a single EthAccount.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/storage/{address}/{key}")])]),t._v(" "),a("td",[t._v("Get the balance of all coins for a single account")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/codes/{address}")])]),t._v(" "),a("td",[t._v("Get the balance of all coins for a single account")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/params")])]),t._v(" "),a("td",[t._v("Get the parameters of x/evm module")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/eth_call")])]),t._v(" "),a("td",[t._v("Implements the eth_call rpc api")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/estimate_gas")])]),t._v(" "),a("td",[t._v("Implements the eth_estimateGas rpc api")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/trace_tx")])]),t._v(" "),a("td",[t._v("Implements the debug_traceTransaction rpc api")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("GET")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/trace_block")])]),t._v(" "),a("td",[t._v("Implements the debug_traceBlockByNumber and debug_traceBlockByHash rpc api")])])])]),t._v(" "),a("h3",{attrs:{id:"transactions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions-2"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Verb")]),t._v(" "),a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("gRPC")])]),t._v(" "),a("td",[a("code",[t._v("ethermint.evm.v1.Msg/EthereumTx")])]),t._v(" "),a("td",[t._v("Submit an Ethereum transactions")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("POST")])]),t._v(" "),a("td",[a("code",[t._v("/ethermint/evm/v1/ethereum_tx")])]),t._v(" "),a("td",[t._v("Submit an Ethereum transactions")])])])])],1)}),[],!1,null,null,null);e.default=d.exports}}]);