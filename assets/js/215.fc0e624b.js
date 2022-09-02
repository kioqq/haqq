(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{775:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"automated-upgrades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automated-upgrades"}},[e._v("#")]),e._v(" Automated Upgrades")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn how to automate chain upgrades using Cosmovisor.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[e._v("#")]),e._v(" Pre-requisites")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("a",{attrs:{href:"https://docs.cosmos.network/main/run-node/cosmovisor.html#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Cosmovisor"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"using-cosmovisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-cosmovisor"}},[e._v("#")]),e._v(" Using Cosmovisor")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("cosmovisor")]),e._v(" is a small process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, cosmovisor can automatically download the new binary, stop the current binary, switch from the old binary to the new one, and finally restart the node with the new binary.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("👉 For more info about Cosmovisor, please refer to the project official documentation "),a("a",{attrs:{href:"https://docs.cosmos.network/main/run-node/cosmovisor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("We highly recommend validators use Cosmovisor to run their nodes. This will make low-downtime upgrades smoother, as validators don't have to "),a("RouterLink",{attrs:{to:"/testnet/manual.html"}},[e._v("manually upgrade")]),e._v(" binaries during the upgrade. Instead users can "),a("a",{attrs:{href:"#manual-download"}},[e._v("pre-install")]),e._v(" new binaries, and Cosmovisor will automatically update them based on on-chain Software Upgrade proposals.")],1),e._v(" "),a("h3",{attrs:{id:"_1-setup-cosmovisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-setup-cosmovisor"}},[e._v("#")]),e._v(" 1. Setup Cosmovisor")]),e._v(" "),a("p",[e._v("Set up the Cosmovisor environment variables. We recommend setting these in your "),a("code",[e._v(".profile")]),e._v(" so it is automatically set in every session.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyAmcXVvdDsjIFNldHVwIENvc21vdmlzb3ImcXVvdDsgJmd0OyZndDsgfi8ucHJvZmlsZQplY2hvICZxdW90O2V4cG9ydCBEQUVNT05fTkFNRT1oYXFxZCZxdW90OyAmZ3Q7Jmd0OyB+Ly5wcm9maWxlCmVjaG8gJnF1b3Q7ZXhwb3J0IERBRU1PTl9IT01FPSRIT01FLy5oYXFxZCZxdW90OyAmZ3Q7Jmd0OyB+Ly5wcm9maWxlCnNvdXJjZSB+Ly5wcm9maWxlCg=="}}),e._v(" "),a("p",[e._v("After this, you must make the necessary folders for "),a("code",[e._v("cosmosvisor")]),e._v(" in your "),a("code",[e._v("DAEMON_HOME")]),e._v(" directory ("),a("code",[e._v("~/.haqqd")]),e._v(") and copy over the current binary.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgfi8uaGFxcWQvY29zbW92aXNvcgpta2RpciAtcCB+Ly5oYXFxZC9jb3Ntb3Zpc29yL2dlbmVzaXMKbWtkaXIgLXAgfi8uaGFxcWQvY29zbW92aXNvci9nZW5lc2lzL2Jpbgpta2RpciAtcCB+Ly5oYXFxZC9jb3Ntb3Zpc29yL3VwZ3JhZGVzCgpjcCAkR09QQVRIL2Jpbi9oYXFxZCB+Ly5oYXFxZC9jb3Ntb3Zpc29yL2dlbmVzaXMvYmluCg=="}}),e._v(" "),a("p",[e._v("To check that you did this correctly, ensure your versions of "),a("code",[e._v("cosmovisor")]),e._v(" and "),a("code",[e._v("haqqd")]),e._v(" are the same:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW92aXNvciB2ZXJzaW9uCmhhcXFkIHZlcnNpb24K"}}),e._v(" "),a("h3",{attrs:{id:"_2-download-the-haqq-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-download-the-haqq-release"}},[e._v("#")]),e._v(" 2. Download the Haqq release")]),e._v(" "),a("h4",{attrs:{id:"_2-a-manual-download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-a-manual-download"}},[e._v("#")]),e._v(" 2.a) Manual Download")]),e._v(" "),a("p",[e._v("Cosmovisor will continually poll the "),a("code",[e._v("$DAEMON_HOME/data/upgrade-info.json")]),e._v(" for new upgrade instructions. When an upgrade is "),a("a",{attrs:{href:"https://github.com/haqq-network/haqq/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("released"),a("OutboundLink")],1),e._v(", node operators need to:")]),e._v(" "),a("ol",[a("li",[e._v("Download ("),a("strong",[e._v("NOT INSTALL")]),e._v(") the binary for the new release")]),e._v(" "),a("li",[e._v("Place it under "),a("code",[e._v("$DAEMON_HOME/cosmovisor/upgrades/<name>/bin")]),e._v(", where "),a("code",[e._v("<name>")]),e._v(" is the URI-encoded name of the upgrade as specified in the Software Upgrade Plan.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"CllvdXIgYGNvc21vdmlzb3IvYCBkaXJlY3Rvcnkgc2hvdWxkIGxvb2sgbGlrZSB0aGlzOgoKYGBgc2hlbGwKY29zbW92aXNvci8K4pSc4pSA4pSAIGN1cnJlbnQvICAgIyBlaXRoZXIgZ2VuZXNpcyBvciB1cGdyYWRlcy8mbHQ7bmFtZSZndDsK4pSc4pSA4pSAIGdlbmVzaXMK4pSCICAg4pSU4pSA4pSAIGJpbgrilIIgICAgICAg4pSU4pSA4pSAIGhhcXFkCuKUlOKUgOKUgCB1cGdyYWRlcwogICAg4pSU4pSA4pSAIHYxLjAuMwogICAgICAgIOKUnOKUgOKUgCBiaW4KICAgICAgICDilIIgICDilJTilIDilIAgaGFxcWQKICAgICAgICDilJTilIDilIAgdXBncmFkZS1pbmZvLmpzb24K"}}),e._v(" "),a("h4",{attrs:{id:"_2-b-automatic-download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-b-automatic-download"}},[e._v("#")]),e._v(" 2.b) Automatic Download")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[a("strong",[e._v("NOTE")]),e._v(": Auto-download doesn't verify in advance if a binary is available. If there will be any issue with downloading a binary, "),a("code",[e._v("cosmovisor")]),e._v(" will stop and won't restart an the chain (which could lead it to a halt).")])]),e._v(" "),a("p",[e._v("It is possible to have Cosmovisor "),a("a",{attrs:{href:"https://docs.cosmos.network/main/run-node/cosmovisor.html#auto-download",target:"_blank",rel:"noopener noreferrer"}},[e._v("automatically download"),a("OutboundLink")],1),e._v(" the new binary. Validators can use the automatic download option to prevent unnecessary downtime during the upgrade process. This option will automatically restart the chain with the upgrade binary once the chain has halted at the proposed "),a("code",[e._v("upgrade-height")]),e._v(". The major benefit of this option is that validators can prepare the upgrade binary in advance and then relax at the time of the upgrade.")]),e._v(" "),a("p",[e._v("To set the auto-download use set the following environment variable:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyAmcXVvdDtleHBvcnQgREFFTU9OX0FMTE9XX0RPV05MT0FEX0JJTkFSSUVTPXRydWUmcXVvdDsgJmd0OyZndDsgfi8ucHJvZmlsZQo="}}),e._v(" "),a("h3",{attrs:{id:"_3-start-your-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-start-your-node"}},[e._v("#")]),e._v(" 3. Start your node")]),e._v(" "),a("p",[e._v("Now that everything is setup and ready to go, you can start your node.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y29zbW92aXNvciBzdGFydAo="}}),e._v(" "),a("p",[e._v("You will need some way to keep the process always running. If you're on linux, you can do this by creating a service.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyB0ZWUgL2V0Yy9zeXN0ZW1kL3N5c3RlbS9oYXFxZC5zZXJ2aWNlICZndDsgL2Rldi9udWxsICZsdDsmbHQ7RU9GCltVbml0XQpEZXNjcmlwdGlvbj1IYXFxIERhZW1vbgpBZnRlcj1uZXR3b3JrLW9ubGluZS50YXJnZXQKCltTZXJ2aWNlXQpVc2VyPSRVU0VSCkV4ZWNTdGFydD0kKHdoaWNoIGNvc21vdmlzb3IpIHN0YXJ0ClJlc3RhcnQ9YWx3YXlzClJlc3RhcnRTZWM9MwpMaW1pdE5PRklMRT1pbmZpbml0eQoKRW52aXJvbm1lbnQ9JnF1b3Q7REFFTU9OX0hPTUU9JEhPTUUvLmhhcXFkJnF1b3Q7CkVudmlyb25tZW50PSZxdW90O0RBRU1PTl9OQU1FPWhhcXFkJnF1b3Q7CkVudmlyb25tZW50PSZxdW90O0RBRU1PTl9BTExPV19ET1dOTE9BRF9CSU5BUklFUz1mYWxzZSZxdW90OwpFbnZpcm9ubWVudD0mcXVvdDtEQUVNT05fUkVTVEFSVF9BRlRFUl9VUEdSQURFPXRydWUmcXVvdDsKCltJbnN0YWxsXQpXYW50ZWRCeT1tdWx0aS11c2VyLnRhcmdldApFT0YK"}}),e._v(" "),a("p",[e._v("Then update and start the node")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyAtUyBzeXN0ZW1jdGwgZGFlbW9uLXJlbG9hZApzdWRvIC1TIHN5c3RlbWN0bCBlbmFibGUgaGFxcWQKc3VkbyAtUyBzeXN0ZW1jdGwgc3RhcnQgaGFxcWQK"}}),e._v(" "),a("p",[e._v("You can check the status with:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3lzdGVtY3RsIHN0YXR1cyBoYXFxZAo="}}),e._v(" "),a("h1",{attrs:{id:"manual-upgrades"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-upgrades"}},[e._v("#")]),e._v(" Manual Upgrades")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("Learn how to manually upgrade your node.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisites-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-2"}},[e._v("#")]),e._v(" Pre-requisites")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/quickstart/installation.html"}},[e._v("Install Haqq")])],1)]),e._v(" "),a("h2",{attrs:{id:"_1-upgrade-the-haqq-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-upgrade-the-haqq-version"}},[e._v("#")]),e._v(" 1. Upgrade the Haqq version")]),e._v(" "),a("p",[e._v("Before upgrading the Haqq version. Stop your instance of "),a("code",[e._v("haqqd")]),e._v(" using "),a("code",[e._v("Ctrl/Cmd+C")]),e._v(".")]),e._v(" "),a("p",[e._v("Next, upgrade the software to the desired release version. Check the Haqq "),a("a",{attrs:{href:"https://github.com/haqq-network/haqq/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases page"),a("OutboundLink")],1),e._v(" for details on each release.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[e._v("Ensure that the version installed matches the one needed for the network you are running (mainnet or testnet).")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgaGFxcQpnaXQgZmV0Y2ggLS1hbGwgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgJmx0O25ld192ZXJzaW9uJmd0OwptYWtlIGluc3RhbGwK"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("If you have issues at this step, please check that you have the latest stable version of "),a("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang"),a("OutboundLink")],1),e._v(" installed.")])]),e._v(" "),a("p",[e._v("Verify that you've successfully installed Haqq on your system by using the "),a("code",[e._v("version")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBoYXFxZCB2ZXJzaW9uIC0tbG9uZwoKbmFtZTogaGFxcWQKc2VydmVyX25hbWU6IGhhcXFkCnZlcnNpb246IDEuMC4zCmNvbW1pdDogZmU5ZGY0MzMzMjgwMGE3NGExNjNjMDE0YzY5ZTYyNzY1ZDgyMDZlMwpidWlsZF90YWdzOiBuZXRnbyxsZWRnZXIKZ286IGdvIHZlcnNpb24gZ28xLjE4IGRhcndpbi9hbWQ2NAouLi4K"}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("If the software version does not match, then please check your "),a("code",[e._v("$PATH")]),e._v(" to ensure the correct "),a("code",[e._v("haqqd")]),e._v(" is running.")])]),e._v(" "),a("h2",{attrs:{id:"_2-replace-genesis-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-replace-genesis-file"}},[e._v("#")]),e._v(" 2. Replace Genesis file")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("You can find the latest "),a("code",[e._v("genesis.json")]),e._v(" file for mainnet or testnet in the following repositories:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Testnet")]),e._v(": "),a("a",{attrs:{href:"https://github.com/haqq-network/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/haqq-network/testnets"),a("OutboundLink")],1)])])]),e._v(" "),a("p",[e._v("Save the new genesis as "),a("code",[e._v("new_genesis.json")]),e._v(". Then, replace the old "),a("code",[e._v("genesis.json")]),e._v(" located in your "),a("code",[e._v("config/")]),e._v(" directory with "),a("code",[e._v("new_genesis.json")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgJEhPTUUvLmhhcXFkL2NvbmZpZwpjcCAtZiBnZW5lc2lzLmpzb24gbmV3X2dlbmVzaXMuanNvbgptdiBuZXdfZ2VuZXNpcy5qc29uIGdlbmVzaXMuanNvbgo="}}),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("We recommend using "),a("code",[e._v("sha256sum")]),e._v(" to check the hash of the downloaded genesis against the expected genesis.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2Qgfi8uaGFxcWQvY29uZmlnCmVjaG8gJnF1b3Q7Jmx0O2V4cGVjdGVkX2hhc2gmZ3Q7ICBnZW5lc2lzLmpzb24mcXVvdDsgfCBzaGEyNTZzdW0gLWMK"}})],1),e._v(" "),a("h2",{attrs:{id:"_3-data-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-data-reset"}},[e._v("#")]),e._v(" 3. Data Reset")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[e._v("Check "),a("RouterLink",{attrs:{to:"/testnet/upgrades.html"}},[e._v("here")]),e._v(" if the version you are upgrading require a data reset (hard fork). If this is not the case, you can skip to "),a("a",{attrs:{href:"#restart-node"}},[e._v("Restart")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("Remove the outdated files and reset the data:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gJEhPTUUvLmhhcXFkL2NvbmZpZy9hZGRyYm9vay5qc29uCmhhcXFkIHRlbmRlcm1pbnQgdW5zYWZlLXJlc2V0LWFsbCAtLWhvbWUgJEhPTUUvLmhhcXFkCg=="}}),e._v(" "),a("p",[e._v("Your node is now in a pristine state while keeping the original "),a("code",[e._v("priv_validator.json")]),e._v(" and "),a("code",[e._v("config.toml")]),e._v(". If you had any sentry nodes or full nodes setup before,\nyour node will still try to connect to them, but may fail if they haven't also\nbeen upgraded.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[e._v("🚨 "),a("strong",[e._v("IMPORTANT")]),e._v(" 🚨")]),e._v(" "),a("p",[e._v("Make sure that every node has a unique "),a("code",[e._v("priv_validator.json")]),e._v(". "),a("strong",[e._v("DO NOT")]),e._v(" copy the "),a("code",[e._v("priv_validator.json")]),e._v(" from an old node to multiple new nodes. Running two nodes with the same "),a("code",[e._v("priv_validator.json")]),e._v(" will cause you to "),a("a",{attrs:{href:"https://docs.tendermint.com/master/spec/consensus/signing.html#double-signing",target:"_blank",rel:"noopener noreferrer"}},[e._v("double sign"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"_4-restart-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-restart-node"}},[e._v("#")]),e._v(" 4. Restart Node")]),e._v(" "),a("p",[e._v("To restart your node once the new genesis has been updated, use the "),a("code",[e._v("start")]),e._v(" command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"aGFxcWQgc3RhcnQK"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);