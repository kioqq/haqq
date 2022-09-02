(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{711:function(e,t,n){"use strict";n.r(t);var i=n(1),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"abci"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[e._v("#")]),e._v(" ABCI")]),e._v(" "),n("p",[e._v("The Application Blockchain Interface (ABCI) allows the application to interact with the Tendermint Consensus engine. The application maintains several separate ABCI connections with Tendermint. The most relevant for the  "),n("code",[e._v("x/evm")]),e._v(" is the "),n("a",{attrs:{href:"https://docs.tendermint.com/v0.35/spec/abci/apps.html#consensus-connection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Consensus connection at Commit"),n("OutboundLink")],1),e._v(". This connection is responsible for block execution and calls the fuctions "),n("code",[e._v("InitChain")]),e._v(" (containing "),n("code",[e._v("InitGenesis")]),e._v("), "),n("code",[e._v("BeginBlock")]),e._v(", "),n("code",[e._v("DeliverTx")]),e._v(", "),n("code",[e._v("EndBlock")]),e._v(", "),n("code",[e._v("Commit")]),e._v(" . "),n("code",[e._v("InitChain")]),e._v(" is only called the first time a new blockchain is started and "),n("code",[e._v("DeliverTx")]),e._v(" is called for each transaction in the block.")]),e._v(" "),n("h2",{attrs:{id:"initgenesis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#initgenesis"}},[e._v("#")]),e._v(" InitGenesis")]),e._v(" "),n("p",[n("code",[e._v("InitGenesis")]),e._v(" initializes the EVM module genesis state by setting the "),n("code",[e._v("GenesisState")]),e._v(" fields to the store. In particular it sets the parameters and genesis accounts (state and code).")]),e._v(" "),n("h2",{attrs:{id:"exportgenesis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#exportgenesis"}},[e._v("#")]),e._v(" ExportGenesis")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("ExportGenesis")]),e._v(" ABCI function exports the genesis state of the EVM module. In particular, it retrieves all the accounts with their bytecode, balance and storage, the transaction logs, and the EVM parameters and chain configuration.")]),e._v(" "),n("h2",{attrs:{id:"beginblock"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beginblock"}},[e._v("#")]),e._v(" BeginBlock")]),e._v(" "),n("p",[e._v("The EVM module "),n("code",[e._v("BeginBlock")]),e._v(" logic is executed prior to handling the state transitions from the transactions. The main objective of this function is to:")]),e._v(" "),n("ul",[n("li",[e._v("Set the context for the current block so that the block header, store, gas meter, etc are available to the "),n("code",[e._v("Keeper")]),e._v(" once one of the "),n("code",[e._v("StateDB")]),e._v(" functions are called during EVM state transitions.")]),e._v(" "),n("li",[e._v("Set the EIP155 "),n("code",[e._v("ChainID")]),e._v(" number (obtained from the full chain-id), in case it hasn't been set before during "),n("code",[e._v("InitChain")])])]),e._v(" "),n("h2",{attrs:{id:"endblock"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#endblock"}},[e._v("#")]),e._v(" EndBlock")]),e._v(" "),n("p",[e._v("The EVM module "),n("code",[e._v("EndBlock")]),e._v(" logic occurs after executing all the state transitions from the transactions. The main objective of this function is to:")]),e._v(" "),n("ul",[n("li",[e._v("Emit Block bloom events\n"),n("ul",[n("li",[e._v("This is due for Web3 compatibility as the Ethereum headers contain this type as a field. The JSON-RPC service uses this event query to construct an Ethereum Header from a Tendermint Header.")]),e._v(" "),n("li",[e._v("The block Bloom filter value is obtained from the Transient Store and then emitted")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);