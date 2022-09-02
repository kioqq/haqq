(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{719:function(e,a,t){"use strict";t.r(a);var l=t(1),s=Object(l.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"begin-block"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#begin-block"}},[e._v("#")]),e._v(" Begin block")]),e._v(" "),t("p",[e._v("The base fee is calculated at the beginning of each block.")]),e._v(" "),t("h2",{attrs:{id:"base-fee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-fee"}},[e._v("#")]),e._v(" Base Fee")]),e._v(" "),t("h3",{attrs:{id:"disabling-base-fee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disabling-base-fee"}},[e._v("#")]),e._v(" Disabling base fee")]),e._v(" "),t("p",[e._v("We introduce two parameters : "),t("code",[e._v("NoBaseFee")]),e._v("and "),t("code",[e._v("EnableHeight")])]),e._v(" "),t("p",[t("code",[e._v("NoBaseFee")]),e._v(" controls the feemarket base fee value. If set to true, no calculation is done and the base fee returned by the keeper is zero.")]),e._v(" "),t("p",[t("code",[e._v("EnableHeight")]),e._v(" controls the height we start the calculation.")]),e._v(" "),t("ul",[t("li",[e._v("If "),t("code",[e._v("NoBaseFee = false")]),e._v(" and "),t("code",[e._v("height < EnableHeight")]),e._v(", the base fee value will be equal to "),t("code",[e._v("base_fee")]),e._v(" defined in the genesis and the "),t("code",[e._v("BeginBlock")]),e._v(" will return without further computation.")]),e._v(" "),t("li",[e._v("If "),t("code",[e._v("NoBaseFee = false")]),e._v(" and "),t("code",[e._v("height >= EnableHeight")]),e._v(", the base fee is dynamically calculated upon each block at "),t("code",[e._v("BeginBlock")]),e._v(".")])]),e._v(" "),t("p",[e._v("Those parameters allow us to introduce a static base fee or activate the base fee at a later stage.")]),e._v(" "),t("h3",{attrs:{id:"enabling-base-fee"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabling-base-fee"}},[e._v("#")]),e._v(" Enabling base fee")]),e._v(" "),t("p",[e._v("To enable EIP1559 with the EVM, the following parameters should be set :")]),e._v(" "),t("ul",[t("li",[e._v("NoBaseFee should be false")]),e._v(" "),t("li",[e._v("EnableHeight should be set to a positive integer >= upgrade height. It defines at which height the chain starts the base fee adjustment")]),e._v(" "),t("li",[e._v("LondonBlock evm's param should be set to a positive integer >= upgrade height. It defines at which height the chain start to accept EIP1559 transactions")])]),e._v(" "),t("h3",{attrs:{id:"calculation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calculation"}},[e._v("#")]),e._v(" Calculation")]),e._v(" "),t("p",[e._v("The base fee is initialized at "),t("code",[e._v("EnableHeight")]),e._v(" to the "),t("code",[e._v("InitialBaseFee")]),e._v(" value defined in the genesis file.")]),e._v(" "),t("p",[e._v("The base fee is after adjusted according to the total gas used in the previous block.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFyZW50X2dhc190YXJnZXQgPSBwYXJlbnRfZ2FzX2xpbWl0IC8gRUxBU1RJQ0lUWV9NVUxUSVBMSUVSCgppZiBFbmFibGVIZWlnaHQgPT0gYmxvY2subnVtYmVyCiAgICBiYXNlX2ZlZSA9IElOSVRJQUxfQkFTRV9GRUUKZWxzZSBpZiBwYXJlbnRfZ2FzX3VzZWQgPT0gcGFyZW50X2dhc190YXJnZXQ6CiAgICBiYXNlX2ZlZSA9IHBhcmVudF9iYXNlX2ZlZQplbHNlIGlmIHBhcmVudF9nYXNfdXNlZCAmZ3Q7IHBhcmVudF9nYXNfdGFyZ2V0OgogICAgZ2FzX3VzZWRfZGVsdGEgPSBwYXJlbnRfZ2FzX3VzZWQgLSBwYXJlbnRfZ2FzX3RhcmdldAogICAgYmFzZV9mZWVfZGVsdGEgPSBtYXgocGFyZW50X2Jhc2VfZmVlICogZ2FzX3VzZWRfZGVsdGEgLyBwYXJlbnRfZ2FzX3RhcmdldCAvIEJBU0VfRkVFX01BWF9DSEFOR0VfREVOT01JTkFUT1IsIDEpCiAgICBiYXNlX2ZlZSA9IHBhcmVudF9iYXNlX2ZlZSArIGJhc2VfZmVlX2RlbHRhCmVsc2U6CiAgICBnYXNfdXNlZF9kZWx0YSA9IHBhcmVudF9nYXNfdGFyZ2V0IC0gcGFyZW50X2dhc191c2VkCiAgICBiYXNlX2ZlZV9kZWx0YSA9IHBhcmVudF9iYXNlX2ZlZSAqIGdhc191c2VkX2RlbHRhIC8gcGFyZW50X2dhc190YXJnZXQgLyBCQVNFX0ZFRV9NQVhfQ0hBTkdFX0RFTk9NSU5BVE9SCiAgICBiYXNlX2ZlZSA9IHBhcmVudF9iYXNlX2ZlZSAtIGJhc2VfZmVlX2RlbHRhCgo="}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);