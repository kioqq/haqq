(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{729:function(e,a,g){"use strict";g.r(a);var o=g(1),c=Object(o.a)({},(function(){var e=this,a=e.$createElement,g=e._self._c||a;return g("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[g("h1",{attrs:{id:"state"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),g("h2",{attrs:{id:"proposals"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#proposals"}},[e._v("#")]),e._v(" Proposals")]),e._v(" "),g("p",[g("code",[e._v("Proposal")]),e._v(" objects are used to tally votes and generally track the proposal's state.\nThey contain an array of arbitrary "),g("code",[e._v("sdk.Msg")]),e._v("'s which the governance module will attempt\nto resolve and then execute if the proposal passes. "),g("code",[e._v("Proposal")]),e._v("'s are identified by a\nunique id and contains a series of timestamps: "),g("code",[e._v("submit_time")]),e._v(", "),g("code",[e._v("deposit_end_time")]),e._v(",\n"),g("code",[e._v("voting_start_time")]),e._v(", "),g("code",[e._v("voting_end_time")]),e._v(" which track the lifecycle of a proposal")]),e._v(" "),g("p",[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUHJvcG9zYWwgZGVmaW5lcyB0aGUgY29yZSBmaWVsZCBtZW1iZXJzIG9mIGEgZ292ZXJuYW5jZSBwcm9wb3NhbC4KbWVzc2FnZSBQcm9wb3NhbCB7CiAgdWludDY0ICAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDE7CiAgcmVwZWF0ZWQgZ29vZ2xlLnByb3RvYnVmLkFueSBtZXNzYWdlcyA9IDI7CiAgUHJvcG9zYWxTdGF0dXMgICAgICAgICAgICAgICBzdGF0dXMgICA9IDM7CiAgLy8gZmluYWxfdGFsbHlfcmVzdWx0IGlzIHRoZSBmaW5hbCB0YWxseSByZXN1bHQgb2YgdGhlIHByb3Bvc2FsLiBXaGVuCiAgLy8gcXVlcnlpbmcgYSBwcm9wb3NhbCB2aWEgZ1JQQywgdGhpcyBmaWVsZCBpcyBub3QgcG9wdWxhdGVkIHVudGlsIHRoZQogIC8vIHByb3Bvc2FsJ3Mgdm90aW5nIHBlcmlvZCBoYXMgZW5kZWQuCiAgVGFsbHlSZXN1bHQgICAgICAgICAgICAgICBmaW5hbF90YWxseV9yZXN1bHQgICAgICAgID0gNDsKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIHN1Ym1pdF90aW1lICAgICAgICAgICAgICAgPSA1IFsoZ29nb3Byb3RvLnN0ZHRpbWUpID0gdHJ1ZV07CiAgZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCBkZXBvc2l0X2VuZF90aW1lICAgICAgICAgID0gNiBbKGdvZ29wcm90by5zdGR0aW1lKSA9IHRydWVdOwogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiB0b3RhbF9kZXBvc2l0ICAgICA9IDcgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIGdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAgICAgICAgICB2b3Rpbmdfc3RhcnRfdGltZSA9IDggWyhnb2dvcHJvdG8uc3RkdGltZSkgPSB0cnVlXTsKICBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wICAgICAgICAgdm90aW5nX2VuZF90aW1lICAgPSA5IFsoZ29nb3Byb3RvLnN0ZHRpbWUpID0gdHJ1ZV07CgogIC8vIG1ldGFkYXRhIGlzIGFueSBhcmJpdHJhcnkgbWV0YWRhdGEgYXR0YWNoZWQgdG8gdGhlIHByb3Bvc2FsLgogIHN0cmluZyBtZXRhZGF0YSA9IDEwOwp9"}})],1),e._v(" "),g("p",[e._v("A proposal will generally require more than just a set of messages to explain its\npurpose but need some greater justification and allow a means for interested participants\nto discuss and debate the proposal.\nIn most cases, "),g("strong",[e._v("it is encouraged to have an off-chain system that supports the on-chain governance process")]),e._v(".\nTo accommodate for this, a proposal contains a special "),g("strong",[g("code",[e._v("metadata")])]),e._v(" field, a string,\nwhich can be used to add context to the proposal. The "),g("code",[e._v("metadata")]),e._v(" field allows custom use for networks,\nhowever, it is expected that the field contains a URL or some form of CID using a system such as\n"),g("a",{attrs:{href:"https://docs.ipfs.io/concepts/content-addressing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPFS"),g("OutboundLink")],1),e._v(". To support the case of\ninteroperability across networks, the SDK recommends that the "),g("code",[e._v("metadata")]),e._v(" represents\nthe following "),g("code",[e._v("JSON")]),e._v(" template:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3RpdGxlJnF1b3Q7OiAmcXVvdDsuLi4mcXVvdDssCiAgJnF1b3Q7ZGVzY3JpcHRpb24mcXVvdDs6ICZxdW90Oy4uLiZxdW90OywKICAmcXVvdDtmb3J1bSZxdW90OzogJnF1b3Q7Li4uJnF1b3Q7LCAvLyBhIGxpbmsgdG8gdGhlIGRpc2N1c3Npb24gcGxhdGZvcm0gKGkuZS4gRGlzY29yZCkKICAmcXVvdDtvdGhlciZxdW90OzogJnF1b3Q7Li4uJnF1b3Q7IC8vIGFueSBleHRyYSBkYXRhIHRoYXQgZG9lc24ndCBjb3JyZXNwb25kIHRvIHRoZSBvdGhlciBmaWVsZHMKfQo="}}),e._v(" "),g("p",[e._v("This makes it far easier for clients to support multiple networks.")]),e._v(" "),g("p",[e._v("The metadata has a maximum length that is chosen by the app developer, and\npassed into the gov keeper as a config. The default maximum length in the SDK is 255 characters.")]),e._v(" "),g("h3",{attrs:{id:"writing-a-module-that-uses-governance"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-module-that-uses-governance"}},[e._v("#")]),e._v(" Writing a module that uses governance")]),e._v(" "),g("p",[e._v("There are many aspects of a chain, or of the individual modules that you may want to\nuse governance to perform such as changing various parameters. This is very simple\nto do. First, write out your message types and "),g("code",[e._v("MsgServer")]),e._v(" implementation. Add an\n"),g("code",[e._v("authority")]),e._v(" field to the keeper which will be populated in the constructor with the\ngovernance module account: "),g("code",[e._v("govKeeper.GetGovernanceAccount().GetAddress()")]),e._v(". Then for\nthe methods in the "),g("code",[e._v("msg_server.go")]),e._v(", perform a check on the message that the signer\nmatches "),g("code",[e._v("authority")]),e._v(". This will prevent any user from executing that message.")]),e._v(" "),g("h2",{attrs:{id:"parameters-and-base-types"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#parameters-and-base-types"}},[e._v("#")]),e._v(" Parameters and base types")]),e._v(" "),g("p",[g("code",[e._v("Parameters")]),e._v(" define the rules according to which votes are run. There can only\nbe one active parameter set at any given time. If governance wants to change a\nparameter set, either to modify a value or add/remove a parameter field, a new\nparameter set has to be created and the previous one rendered inactive.")]),e._v(" "),g("h3",{attrs:{id:"depositparams"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#depositparams"}},[e._v("#")]),e._v(" DepositParams")]),e._v(" "),g("p",[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRGVwb3NpdFBhcmFtcyBkZWZpbmVzIHRoZSBwYXJhbXMgZm9yIGRlcG9zaXRzIG9uIGdvdmVybmFuY2UgcHJvcG9zYWxzLgptZXNzYWdlIERlcG9zaXRQYXJhbXMgewogIC8vICBNaW5pbXVtIGRlcG9zaXQgZm9yIGEgcHJvcG9zYWwgdG8gZW50ZXIgdm90aW5nIHBlcmlvZC4KICByZXBlYXRlZCBjb3Ntb3MuYmFzZS52MWJldGExLkNvaW4gbWluX2RlcG9zaXQgPSAxCiAgICAgIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlLCAoZ29nb3Byb3RvLmpzb250YWcpID0gJnF1b3Q7bWluX2RlcG9zaXQsb21pdGVtcHR5JnF1b3Q7XTsKCiAgLy8gIE1heGltdW0gcGVyaW9kIGZvciBBdG9tIGhvbGRlcnMgdG8gZGVwb3NpdCBvbiBhIHByb3Bvc2FsLiBJbml0aWFsIHZhbHVlOiAyCiAgLy8gIG1vbnRocy4KICBnb29nbGUucHJvdG9idWYuRHVyYXRpb24gbWF4X2RlcG9zaXRfcGVyaW9kID0gMgogICAgICBbKGdvZ29wcm90by5zdGRkdXJhdGlvbikgPSB0cnVlLCAoZ29nb3Byb3RvLmpzb250YWcpID0gJnF1b3Q7bWF4X2RlcG9zaXRfcGVyaW9kLG9taXRlbXB0eSZxdW90O107Cn0="}})],1),e._v(" "),g("h3",{attrs:{id:"votingparams"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#votingparams"}},[e._v("#")]),e._v(" VotingParams")]),e._v(" "),g("p",[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVm90aW5nUGFyYW1zIGRlZmluZXMgdGhlIHBhcmFtcyBmb3Igdm90aW5nIG9uIGdvdmVybmFuY2UgcHJvcG9zYWxzLgptZXNzYWdlIFZvdGluZ1BhcmFtcyB7CiAgLy8gIExlbmd0aCBvZiB0aGUgdm90aW5nIHBlcmlvZC4KICBnb29nbGUucHJvdG9idWYuRHVyYXRpb24gdm90aW5nX3BlcmlvZCA9IDEgWyhnb2dvcHJvdG8uc3RkZHVyYXRpb24pID0gdHJ1ZV07Cn0="}})],1),e._v(" "),g("h3",{attrs:{id:"tallyparams"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#tallyparams"}},[e._v("#")]),e._v(" TallyParams")]),e._v(" "),g("p",[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gVGFsbHlQYXJhbXMgZGVmaW5lcyB0aGUgcGFyYW1zIGZvciB0YWxseWluZyB2b3RlcyBvbiBnb3Zlcm5hbmNlIHByb3Bvc2Fscy4KbWVzc2FnZSBUYWxseVBhcmFtcyB7CiAgLy8gIE1pbmltdW0gcGVyY2VudGFnZSBvZiB0b3RhbCBzdGFrZSBuZWVkZWQgdG8gdm90ZSBmb3IgYSByZXN1bHQgdG8gYmUKICAvLyAgY29uc2lkZXJlZCB2YWxpZC4KICBzdHJpbmcgcXVvcnVtID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkRlYyZxdW90OywgKGdvZ29wcm90by5qc29udGFnKSA9ICZxdW90O3F1b3J1bSxvbWl0ZW1wdHkmcXVvdDtdOwoKICAvLyAgTWluaW11bSBwcm9wb3J0aW9uIG9mIFllcyB2b3RlcyBmb3IgcHJvcG9zYWwgdG8gcGFzcy4gRGVmYXVsdCB2YWx1ZTogMC41LgogIHN0cmluZyB0aHJlc2hvbGQgPSAyIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuRGVjJnF1b3Q7LCAoZ29nb3Byb3RvLmpzb250YWcpID0gJnF1b3Q7dGhyZXNob2xkLG9taXRlbXB0eSZxdW90O107CgogIC8vICBNaW5pbXVtIHZhbHVlIG9mIFZldG8gdm90ZXMgdG8gVG90YWwgdm90ZXMgcmF0aW8gZm9yIHByb3Bvc2FsIHRvIGJlCiAgLy8gIHZldG9lZC4gRGVmYXVsdCB2YWx1ZTogMS8zLgogIHN0cmluZyB2ZXRvX3RocmVzaG9sZCA9IDMgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5EZWMmcXVvdDssIChnb2dvcHJvdG8uanNvbnRhZykgPSAmcXVvdDt2ZXRvX3RocmVzaG9sZCxvbWl0ZW1wdHkmcXVvdDtdOwp9"}})],1),e._v(" "),g("p",[e._v("Parameters are stored in a global "),g("code",[e._v("GlobalParams")]),e._v(" KVStore.")]),e._v(" "),g("p",[e._v("Additionally, we introduce some basic types:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWb3RlIGJ5dGUKCmNvbnN0ICgKICAgIFZvdGVZZXMgICAgICAgICA9IDB4MQogICAgVm90ZU5vICAgICAgICAgID0gMHgyCiAgICBWb3RlTm9XaXRoVmV0byAgPSAweDMKICAgIFZvdGVBYnN0YWluICAgICA9IDB4NAopCgp0eXBlIFByb3Bvc2FsVHlwZSAgc3RyaW5nCgpjb25zdCAoCiAgICBQcm9wb3NhbFR5cGVQbGFpblRleHQgICAgICAgPSAmcXVvdDtUZXh0JnF1b3Q7CiAgICBQcm9wb3NhbFR5cGVTb2Z0d2FyZVVwZ3JhZGUgPSAmcXVvdDtTb2Z0d2FyZVVwZ3JhZGUmcXVvdDsKKQoKdHlwZSBQcm9wb3NhbFN0YXR1cyBieXRlCgoKY29uc3QgKAogICAgU3RhdHVzTmlsICAgICAgICAgICBQcm9wb3NhbFN0YXR1cyA9IDB4MDAKICAgIFN0YXR1c0RlcG9zaXRQZXJpb2QgUHJvcG9zYWxTdGF0dXMgPSAweDAxICAvLyBQcm9wb3NhbCBpcyBzdWJtaXR0ZWQuIFBhcnRpY2lwYW50cyBjYW4gZGVwb3NpdCBvbiBpdCBidXQgbm90IHZvdGUKICAgIFN0YXR1c1ZvdGluZ1BlcmlvZCAgUHJvcG9zYWxTdGF0dXMgPSAweDAyICAvLyBNaW5EZXBvc2l0IGlzIHJlYWNoZWQsIHBhcnRpY2lwYW50cyBjYW4gdm90ZQogICAgU3RhdHVzUGFzc2VkICAgICAgICBQcm9wb3NhbFN0YXR1cyA9IDB4MDMgIC8vIFByb3Bvc2FsIHBhc3NlZCBhbmQgc3VjY2Vzc2Z1bGx5IGV4ZWN1dGVkCiAgICBTdGF0dXNSZWplY3RlZCAgICAgIFByb3Bvc2FsU3RhdHVzID0gMHgwNCAgLy8gUHJvcG9zYWwgaGFzIGJlZW4gcmVqZWN0ZWQKICAgIFN0YXR1c0ZhaWxlZCAgICAgICAgUHJvcG9zYWxTdGF0dXMgPSAweDA1ICAvLyBQcm9wb3NhbCBwYXNzZWQgYnV0IGZhaWxlZCBleGVjdXRpb24KKQo="}}),e._v(" "),g("h2",{attrs:{id:"deposit"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[e._v("#")]),e._v(" Deposit")]),e._v(" "),g("p",[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gRGVwb3NpdCBkZWZpbmVzIGFuIGFtb3VudCBkZXBvc2l0ZWQgYnkgYW4gYWNjb3VudCBhZGRyZXNzIHRvIGFuIGFjdGl2ZQovLyBwcm9wb3NhbC4KbWVzc2FnZSBEZXBvc2l0IHsKICB1aW50NjQgICBwcm9wb3NhbF9pZCAgICAgICAgICAgICAgICAgICAgID0gMTsKICBzdHJpbmcgICBkZXBvc2l0b3IgICAgICAgICAgICAgICAgICAgICAgID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwogIHJlcGVhdGVkIGNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiBhbW91bnQgPSAzIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKfQ=="}})],1),e._v(" "),g("h2",{attrs:{id:"validatorgovinfo"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#validatorgovinfo"}},[e._v("#")]),e._v(" ValidatorGovInfo")]),e._v(" "),g("p",[e._v("This type is used in a temp map when tallying")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICB0eXBlIFZhbGlkYXRvckdvdkluZm8gc3RydWN0IHsKICAgIE1pbnVzICAgICBzZGsuRGVjCiAgICBWb3RlICAgICAgVm90ZQogIH0K"}}),e._v(" "),g("h2",{attrs:{id:"stores"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#stores"}},[e._v("#")]),e._v(" Stores")]),e._v(" "),g("p",[g("em",[e._v("Note: Stores are KVStores in the multi-store. The key to find the store is the first parameter in the list")])]),e._v(" "),g("p",[e._v("We will use one KVStore "),g("code",[e._v("Governance")]),e._v(" to store two mappings:")]),e._v(" "),g("ul",[g("li",[e._v("A mapping from "),g("code",[e._v("proposalID|'proposal'")]),e._v(" to "),g("code",[e._v("Proposal")]),e._v(".")]),e._v(" "),g("li",[e._v("A mapping from "),g("code",[e._v("proposalID|'addresses'|address")]),e._v(" to "),g("code",[e._v("Vote")]),e._v(". This mapping allows\nus to query all addresses that voted on the proposal along with their vote by\ndoing a range query on "),g("code",[e._v("proposalID:addresses")]),e._v(".")]),e._v(" "),g("li",[e._v("A mapping from "),g("code",[e._v("ParamsKey|'Params'")]),e._v(" to "),g("code",[e._v("Params")]),e._v(". This map allows to query all\nx/gov params.")])]),e._v(" "),g("p",[e._v("For pseudocode purposes, here are the two function we will use to read or write in stores:")]),e._v(" "),g("ul",[g("li",[g("code",[e._v("load(StoreKey, Key)")]),e._v(": Retrieve item stored at key "),g("code",[e._v("Key")]),e._v(" in store found at key "),g("code",[e._v("StoreKey")]),e._v(" in the multistore")]),e._v(" "),g("li",[g("code",[e._v("store(StoreKey, Key, value)")]),e._v(": Write value "),g("code",[e._v("Value")]),e._v(" at key "),g("code",[e._v("Key")]),e._v(" in store found at key "),g("code",[e._v("StoreKey")]),e._v(" in the multistore")])]),e._v(" "),g("h2",{attrs:{id:"proposal-processing-queue"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#proposal-processing-queue"}},[e._v("#")]),e._v(" Proposal Processing Queue")]),e._v(" "),g("p",[g("strong",[e._v("Store:")])]),e._v(" "),g("ul",[g("li",[g("code",[e._v("ProposalProcessingQueue")]),e._v(": A queue "),g("code",[e._v("queue[proposalID]")]),e._v(" containing all the\n"),g("code",[e._v("ProposalIDs")]),e._v(" of proposals that reached "),g("code",[e._v("MinDeposit")]),e._v(". During each "),g("code",[e._v("EndBlock")]),e._v(",\nall the proposals that have reached the end of their voting period are processed.\nTo process a finished proposal, the application tallies the votes, computes the\nvotes of each validator and checks if every validator in the validator set has\nvoted. If the proposal is accepted, deposits are refunded. Finally, the proposal\ncontent "),g("code",[e._v("Handler")]),e._v(" is executed.")])]),e._v(" "),g("p",[e._v("And the pseudocode for the "),g("code",[e._v("ProposalProcessingQueue")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ICBpbiBFbmRCbG9jayBkbwoKICAgIGZvciBmaW5pc2hlZFByb3Bvc2FsSUQgaW4gR2V0QWxsRmluaXNoZWRQcm9wb3NhbElEcyhibG9jay5UaW1lKQogICAgICBwcm9wb3NhbCA9IGxvYWQoR292ZXJuYW5jZSwgJmx0O3Byb3Bvc2FsSUR8J3Byb3Bvc2FsJyZndDspIC8vIHByb3Bvc2FsIGlzIGEgY29uc3Qga2V5CgogICAgICB2YWxpZGF0b3JzID0gS2VlcGVyLmdldEFsbFZhbGlkYXRvcnMoKQogICAgICB0bXBWYWxNYXAgOj0gbWFwKHNkay5BY2NBZGRyZXNzKVZhbGlkYXRvckdvdkluZm8KCiAgICAgIC8vIEluaXRpYXRlIG1hcHBpbmcgYXQgMC4gVGhpcyBpcyB0aGUgYW1vdW50IG9mIHNoYXJlcyBvZiB0aGUgdmFsaWRhdG9yJ3Mgdm90ZSB0aGF0IHdpbGwgYmUgb3ZlcnJpZGRlbiBieSB0aGVpciBkZWxlZ2F0b3IncyB2b3RlcwogICAgICBmb3IgZWFjaCB2YWxpZGF0b3IgaW4gdmFsaWRhdG9ycwogICAgICAgIHRtcFZhbE1hcCh2YWxpZGF0b3IuT3BlcmF0b3JBZGRyKS5NaW51cyA9IDAKCiAgICAgIC8vIFRhbGx5CiAgICAgIHZvdGVySXRlcmF0b3IgPSByYW5nZVF1ZXJ5KEdvdmVybmFuY2UsICZsdDtwcm9wb3NhbElEfCdhZGRyZXNzZXMnJmd0OykgLy9yZXR1cm4gYWxsIHRoZSBhZGRyZXNzZXMgdGhhdCB2b3RlZCBvbiB0aGUgcHJvcG9zYWwKICAgICAgZm9yIGVhY2ggKHZvdGVyQWRkcmVzcywgdm90ZSkgaW4gdm90ZXJJdGVyYXRvcgogICAgICAgIGRlbGVnYXRpb25zID0gc3Rha2luZ0tlZXBlci5nZXREZWxlZ2F0aW9ucyh2b3RlckFkZHJlc3MpIC8vIGdldCBhbGwgZGVsZWdhdGlvbnMgZm9yIGN1cnJlbnQgdm90ZXIKCiAgICAgICAgZm9yIGVhY2ggZGVsZWdhdGlvbiBpbiBkZWxlZ2F0aW9ucwogICAgICAgICAgLy8gbWFrZSBzdXJlIGRlbGVnYXRpb24uU2hhcmVzIGRvZXMgTk9UIGluY2x1ZGUgc2hhcmVzIGJlaW5nIHVuYm9uZGVkCiAgICAgICAgICB0bXBWYWxNYXAoZGVsZWdhdGlvbi5WYWxpZGF0b3JBZGRyKS5NaW51cyArPSBkZWxlZ2F0aW9uLlNoYXJlcwogICAgICAgICAgcHJvcG9zYWwudXBkYXRlVGFsbHkodm90ZSwgZGVsZWdhdGlvbi5TaGFyZXMpCgogICAgICAgIF8sIGlzVmFsID0gc3Rha2luZ0tlZXBlci5nZXRWYWxpZGF0b3Iodm90ZXJBZGRyZXNzKQogICAgICAgIGlmIChpc1ZhbCkKICAgICAgICAgIHRtcFZhbE1hcCh2b3RlckFkZHJlc3MpLlZvdGUgPSB2b3RlCgogICAgICB0YWxseWluZ1BhcmFtID0gbG9hZChHbG9iYWxQYXJhbXMsICdUYWxseWluZ1BhcmFtJykKCiAgICAgIC8vIFVwZGF0ZSB0YWxseSBpZiB2YWxpZGF0b3Igdm90ZWQKICAgICAgZm9yIGVhY2ggdmFsaWRhdG9yIGluIHZhbGlkYXRvcnMKICAgICAgICBpZiB0bXBWYWxNYXAodmFsaWRhdG9yKS5IYXNWb3RlZAogICAgICAgICAgcHJvcG9zYWwudXBkYXRlVGFsbHkodG1wVmFsTWFwKHZhbGlkYXRvcikuVm90ZSwgKHZhbGlkYXRvci5Ub3RhbFNoYXJlcyAtIHRtcFZhbE1hcCh2YWxpZGF0b3IpLk1pbnVzKSkKCgoKICAgICAgLy8gQ2hlY2sgaWYgcHJvcG9zYWwgaXMgYWNjZXB0ZWQgb3IgcmVqZWN0ZWQKICAgICAgdG90YWxOb25BYnN0YWluIDo9IHByb3Bvc2FsLlllc1ZvdGVzICsgcHJvcG9zYWwuTm9Wb3RlcyArIHByb3Bvc2FsLk5vV2l0aFZldG9Wb3RlcwogICAgICBpZiAocHJvcG9zYWwuVm90ZXMuWWVzVm90ZXMvdG90YWxOb25BYnN0YWluICZndDsgdGFsbHlpbmdQYXJhbS5UaHJlc2hvbGQgQU5EIHByb3Bvc2FsLlZvdGVzLk5vV2l0aFZldG9Wb3Rlcy90b3RhbE5vbkFic3RhaW4gICZsdDsgdGFsbHlpbmdQYXJhbS5WZXRvKQogICAgICAgIC8vICBwcm9wb3NhbCB3YXMgYWNjZXB0ZWQgYXQgdGhlIGVuZCBvZiB0aGUgdm90aW5nIHBlcmlvZAogICAgICAgIC8vICByZWZ1bmQgZGVwb3NpdHMgKG5vbi12b3RlcnMgYWxyZWFkeSBwdW5pc2hlZCkKICAgICAgICBmb3IgZWFjaCAoYW1vdW50LCBkZXBvc2l0b3IpIGluIHByb3Bvc2FsLkRlcG9zaXRzCiAgICAgICAgICBkZXBvc2l0b3IuQXRvbUJhbGFuY2UgKz0gYW1vdW50CgogICAgICAgIHN0YXRlV3JpdGVyLCBlcnIgOj0gcHJvcG9zYWwuSGFuZGxlcigpCiAgICAgICAgaWYgZXJyICE9IG5pbAogICAgICAgICAgICAvLyBwcm9wb3NhbCBwYXNzZWQgYnV0IGZhaWxlZCBkdXJpbmcgc3RhdGUgZXhlY3V0aW9uCiAgICAgICAgICAgIHByb3Bvc2FsLkN1cnJlbnRTdGF0dXMgPSBQcm9wb3NhbFN0YXR1c0ZhaWxlZAogICAgICAgICBlbHNlCiAgICAgICAgICAgIC8vIHByb3Bvc2FsIHBhc3MgYW5kIHN0YXRlIGlzIHBlcnNpc3RlZAogICAgICAgICAgICBwcm9wb3NhbC5DdXJyZW50U3RhdHVzID0gUHJvcG9zYWxTdGF0dXNBY2NlcHRlZAogICAgICAgICAgICBzdGF0ZVdyaXRlci5zYXZlKCkKICAgICAgZWxzZQogICAgICAgIC8vIHByb3Bvc2FsIHdhcyByZWplY3RlZAogICAgICAgIHByb3Bvc2FsLkN1cnJlbnRTdGF0dXMgPSBQcm9wb3NhbFN0YXR1c1JlamVjdGVkCgogICAgICBzdG9yZShHb3Zlcm5hbmNlLCAmbHQ7cHJvcG9zYWxJRHwncHJvcG9zYWwnJmd0OywgcHJvcG9zYWwpCg=="}}),e._v(" "),g("h2",{attrs:{id:"legacy-proposal"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#legacy-proposal"}},[e._v("#")]),e._v(" Legacy Proposal")]),e._v(" "),g("p",[e._v("A legacy proposal is the old implementation of governance proposal.\nContrary to proposal that can contain any messages, a legacy proposal allows to submit a set of pre-defined proposals.\nThese proposal are defined by their types.")]),e._v(" "),g("p",[e._v("While proposals should use the new implementation of the governance proposal, we need still to use legacy proposal in order to submit a "),g("code",[e._v("software-upgrade")]),e._v(" and a "),g("code",[e._v("cancel-software-upgrade")]),e._v(" proposal.")]),e._v(" "),g("p",[e._v("More information on how to submit proposals in the "),g("RouterLink",{attrs:{to:"/modules/gov/07_client.html"}},[e._v("client section")]),e._v(".")],1)],1)}),[],!1,null,null,null);a.default=c.exports}}]);