(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{429:function(t,v,e){"use strict";e.r(v);var _=e(14),a=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"the-ibax-network"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#the-ibax-network"}},[t._v("#")]),t._v(" IBAX区块链平台 ")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#the-ibax-network"}},[t._v("IBAX区块链平台")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#application-developers"}},[t._v("应用程序开发者")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#ecolib-members"}},[t._v("生态系统成员")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#ecolib-applications-and-platform-applications"}},[t._v("生态系统应用程序和平台应用程序")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#underlying-model"}},[t._v("底层模型")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#implementation"}},[t._v("实现")])])])])]),t._v(" "),v("p",[t._v("该章节介绍如何使用 IBAX区块链平台 。")]),t._v(" "),v("p",[t._v("如果您有兴趣在 IBAX区块链平台上开发使用应用程序和管理生态系统，那么您可能根本不需要了解IBAX区块链平台 。")]),t._v(" "),v("p",[t._v("在 IBAX区块链平台中，区块链和区块链网络对生态系统成员、管理员和应用程序开发者都是隐藏的。IBAX区块链平台已为所有这些用户组提供了"),v("RouterLink",{attrs:{to:"/zh-CN/reference/api2.html"}},[t._v("RESTful API")]),t._v(" 接口。这些接口提供对区块链防篡改分布式 "),v("strong",[t._v("全局状态")]),t._v(" 的访问。")],1),t._v(" "),v("h2",{attrs:{id:"application-developers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#application-developers"}},[t._v("#")]),t._v(" 应用程序开发者 ")]),t._v(" "),v("p",[t._v("在技术术语中，"),v("strong",[t._v("全局状态")]),t._v(" 是一组数据。IBAX区块链平台全局状态的实现就是数据库。从应用程序开发者的角度来看，应用程序是通过查询，插入和更新数据库表来与该数据库进行交互。")]),t._v(" "),v("p",[t._v("在IBAX区块链平台，通过执行合约将交易写入区块链中，这些交易调用由区块链网络节点执行的合约代码， 这会更改全局状态数据库。")]),t._v(" "),v("p",[t._v("对于应用程序开发者来说，合约就是一种函数，执行合约时，数据将写入数据库。页面就像脚本。页面代码是一组"),v("RouterLink",{attrs:{to:"/zh-CN/topics/templates2.html"}},[t._v("页面模版")]),t._v(" 函数。其中一些函数显示页面元素，其他数据来自数据库。应用程序开发者无需了解交易、区块生成和共识算法即可使用IBAX区块链平台。")],1),t._v(" "),v("h2",{attrs:{id:"ecolib-members"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ecolib-members"}},[t._v("#")]),t._v(" 生态系统成员 ")]),t._v(" "),v("p",[t._v("应用程序开发者编写的应用程序在"),v("RouterLink",{attrs:{to:"/zh-CN/concepts/thesaurus.html#ecosystem"}},[t._v("生态系统")]),t._v(" 的环境中工作，生态系统通常服务于特定的目的，结合多个应用程序来达到该目的的不同方面。")],1),t._v(" "),v("p",[t._v("要访问生态系统的应用程序，用户必须成为该生态系统成员。一个用户可以是多个生态系统的成员。")]),t._v(" "),v("p",[t._v("生态系统成员可以从应用程序页面查看和修改数据库，就像在常见的Web应用程序中一样，可以填写表单，点击按钮和导航页面。")]),t._v(" "),v("h2",{attrs:{id:"ecolib-applications-and-platform-applications"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ecolib-applications-and-platform-applications"}},[t._v("#")]),t._v(" 生态系统应用程序和平台应用程序 ")]),t._v(" "),v("p",[t._v("应用程序可按范围划分为 "),v("strong",[t._v("生态系统应用程序")]),t._v(" 和 "),v("strong",[t._v("平台应用程序")]),t._v("。")]),t._v(" "),v("blockquote",[v("p",[t._v("生态系统应用程序")])]),t._v(" "),v("p",[t._v("生态系统应用程序实现该生态系统的某些独有功能或业务流程。生态系统应用程序仅在其生态系统中可用。")]),t._v(" "),v("blockquote",[v("p",[t._v("平台应用程序")])]),t._v(" "),v("p",[t._v("平台应用程序适用于所有生态系统。任何应用程序都可以开发为平台应用程序。IBAX区块链平台开发者提供支持生态系统治理核心功能的平台应用程序，例如投票、通知和生态系统成员角色管理等应用程序。")]),t._v(" "),v("h2",{attrs:{id:"underlying-model"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#underlying-model"}},[t._v("#")]),t._v(" 底层模型 ")]),t._v(" "),v("blockquote",[v("p",[t._v("层次定义")])]),t._v(" "),v("p",[t._v("IBAX区块链平台 分为几个层次：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[v("p",[t._v("用户交互层")]),t._v(" "),v("blockquote",[v("p",[t._v("生态系统成员通过页面和页面元素与应用程序交互。")])])]),t._v(" "),v("li",[v("p",[t._v("应用程序层")]),t._v(" "),v("blockquote",[v("p",[t._v("应用程序开发者通过合约代码和页面代码与全局状态（数据库表）交互。")])])]),t._v(" "),v("li",[v("p",[t._v("全局状态层")]),t._v(" "),v("blockquote",[v("p",[t._v("根据写入分布式操作分类帐本（区块链）的操作更新和同步全局状态（数据库）")])])]),t._v(" "),v("li",[v("p",[t._v("区块链层")]),t._v(" "),v("blockquote",[v("p",[t._v("使用新区块更新分布式操作分类帐本。新区块保存的操作（交易）必须在全局状态上执行。")])])]),t._v(" "),v("li",[v("p",[t._v("节点网络层")]),t._v(" "),v("blockquote",[v("p",[t._v("实现了 IBAX区块链平台网络协议。网络协议在节点网络中分发交易、验证交易和生成新区块。同样的，新区块被节点网络分发和验证。所有节点的分布式操作分类帐本保持同步。如果节点发生冲突，则节点会识别哪些区块链被视为有效链并回滚无效区块链。")])])]),t._v(" "),v("li",[v("p",[t._v("交易层")]),t._v(" "),v("blockquote",[v("p",[t._v("交易是生成区块和区块链协议的基础，交易本身是在用户交互层执行的操作结果。交易由 Weaver 生成。当用户或开发者执行诸如单击页面上的按钮或从代码编辑器执行合约等操作时，Weaver会将此操作转换为交易并将其发送到与其连接的网络节点。")])])])])]),t._v(" "),v("p",[t._v("因此，交易流程方向如下：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("用户页面中的用户操作会创建交易；")]),t._v(" "),v("li",[t._v("该交易包含在一个区块中；")]),t._v(" "),v("li",[t._v("该区块包含在区块链中；")]),t._v(" "),v("li",[t._v("更改操作会导致区块链全局状态发生变化，该操作将应用于数据库；")]),t._v(" "),v("li",[t._v("数据库更改显示在应用程序中。")])])]),t._v(" "),v("h2",{attrs:{id:"implementation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" 实现 ")]),t._v(" "),v("p",[t._v("IBAX区块链平台 的两个主要组成部分是服务端"),v("a",{attrs:{href:"https://github.com/IBAX-io/go-ibax",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-ibax"),v("OutboundLink")],1),t._v(" 和 "),v("a",{attrs:{href:"https://github.com/IBAX-io/weaver",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wearver源码"),v("OutboundLink")],1),t._v(" 。")]),t._v(" "),v("p",[t._v("Weaver :")]),t._v(" "),v("blockquote",[v("ul",[v("li",[v("p",[t._v("提供用户页面；")])]),t._v(" "),v("li",[v("p",[t._v("提供用于应用程序开发的IDE；")])]),t._v(" "),v("li",[v("p",[t._v("存储用户帐户的公钥并执行授权；")])]),t._v(" "),v("li",[v("p",[t._v("从应用页面请求数据库数据，并向用户显示应用页面；")])]),t._v(" "),v("li",[v("p",[t._v("通过 "),v("RouterLink",{attrs:{to:"/zh-CN/reference/api2.html"}},[t._v("REST API")]),t._v(" 将交易发送到服务端；")],1),t._v(" "),v("blockquote",[v("p",[t._v("为了方便用户操作自动创建交易，应用程序开发人员从IDE执行合约时，Weaver会将该操作转换为交易。")])])])])]),t._v(" "),v("p",[t._v("服务端：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("保持节点的全局状态（数据库）；")]),t._v(" "),v("li",[t._v("实现区块链协议；")]),t._v(" "),v("li",[t._v("在 "),v("RouterLink",{attrs:{to:"/zh-CN/topics/vm.html"}},[t._v("虚拟机")]),t._v(" 执行合约代码；")],1),t._v(" "),v("li",[t._v("在 "),v("RouterLink",{attrs:{to:"/zh-CN/topics/templates2.html"}},[t._v("模版引擎")]),t._v(" 执行页面代码；")],1),t._v(" "),v("li",[t._v("实现 "),v("RouterLink",{attrs:{to:"/zh-CN/reference/api2.html"}},[t._v("RESTful API")]),t._v(" 接口。")],1)])])])}),[],!1,null,null,null);v.default=a.exports}}]);