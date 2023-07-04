(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{427:function(t,v,_){"use strict";_.r(v);var e=_(14),a=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"ibax-overview"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ibax-overview"}},[t._v("#")]),t._v(" IBAX区块链平台 概述 ")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#ibax-overview"}},[t._v("IBAX区块链平台 概述")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#features"}},[t._v("特性")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#architecture"}},[t._v("架构")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#network"}},[t._v("网络")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#honor-node"}},[t._v("荣誉节点")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#transactions"}},[t._v("交易")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#network-protocol"}},[t._v("网络协议")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#block-and-transaction-verification"}},[t._v("区块和交易验证")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#database"}},[t._v("数据库")])])])]),t._v(" "),v("li",[v("a",{attrs:{href:"#ecolib"}},[t._v("生态系统")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#ide"}},[t._v("集成开发环境")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#applications"}},[t._v("应用程序")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#tables"}},[t._v("数据表")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#ecosystem-parameters"}},[t._v("生态系统参数")])])])]),t._v(" "),v("li",[v("a",{attrs:{href:"#access-rights-control-mechanism"}},[t._v("访问权限控制机制")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#access-control-actions"}},[t._v("访问权限控制操作")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#access-rights-management"}},[t._v("访问权限管理方法")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#exclusive-rights"}},[t._v("特殊权限")])])])]),t._v(" "),v("li",[v("a",{attrs:{href:"#virtual-private-ecosystem"}},[t._v("虚拟专用生态系统")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#requests-to-web-resources"}},[t._v("请求web资源")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#rights-to-read-data"}},[t._v("读取数据权限")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#clb-creation"}},[t._v("创建 CLB")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#clb-usage"}},[t._v("使用 CLB")])])])])])])]),t._v(" "),v("h2",{attrs:{id:"features"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" 特性 ")]),t._v(" "),v("p",[t._v("IBAX区块链平台包括一个集成的应用程序开发环境，可以对数据、用户页面和智能合约进行多级访问权限控制系统。")]),t._v(" "),v("p",[t._v("就其结构和功能而言，IBAX区块链平台 与大多数现有的区块链平台有较大不同：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("IBAX区块链平台 应用程序的开发和使用在名为 "),v("strong",[t._v("生态系统")]),t._v(" 的自治软件环境中，每个生态系统都有自己的成员规则，这些规则最初是由生态系统创建者建立的；")]),t._v(" "),v("li",[t._v("生态系统的活动基于使用 "),v("strong",[t._v("智能合约")]),t._v(" 去创建 "),v("strong",[t._v("寄存器")]),t._v("，例如 "),v("font",{attrs:{color:"Red"}},[t._v("数据库表")]),t._v(" 和记录或更新所涉及的数据， 而在大多数其他区块链平台中，活动基于在账户之间交易交换；")],1),t._v(" "),v("li",[t._v("对 "),v("strong",[t._v("寄存器")]),t._v(" 的访问权限和生态系统成员间的关系控制由一套称为 "),v("strong",[t._v("智能法律")]),t._v(" 的规则来管理。")])])]),t._v(" "),v("h2",{attrs:{id:"architecture"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" 架构 ")]),t._v(" "),v("h3",{attrs:{id:"network"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#network"}},[t._v("#")]),t._v(" 网络 ")]),t._v(" "),v("p",[t._v("IBAX区块链平台 基于点对点(P2P)网络构建。")]),t._v(" "),v("p",[t._v("网络中的候选荣誉节点存储着最新版本的区块链数据库，其中记录了IBAX区块链平台的区块链最新状态。")]),t._v(" "),v("p",[t._v("网络用户可通过使用 Weaver 或REST API命令从 候选荣誉节点数据库发送请求来接收数据，新请求被用户签名后以交易的二进制格式发送到网络。 这些交易本质上是修改数据库中记录的命令，交易以区块的形式聚合在一起，然后将区块发送到网络节点的区块链中，每个候选荣誉节点 将处理该区块中的交易，从而更新其数据库中的相应数据。")]),t._v(" "),v("h3",{attrs:{id:"honor-node"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#honor-node"}},[t._v("#")]),t._v(" 荣誉节点 ")]),t._v(" "),v("p",[t._v("网络中有权生成新区块的候选荣誉节点称为 荣誉节点。在平台参数表中"),v("RouterLink",{attrs:{to:"/zh-CN/reference/platform-parameters.html#number_of_nodes"}},[t._v("number_of_nodes")]),t._v(" 定义了荣誉节点数量，这表明荣誉节点的数量是有限的。")],1),t._v(" "),v("p",[t._v("荣誉节点是 IBAX 公网的关键组件之一。它执行和验证交易，从其他节点收集交易信息，将交易添加到队列中，并使用确认机制验证新块的正确性和有效性。一般来说，它有两种状态：打包和非打包状态。")]),t._v(" "),v("p",[t._v("打包状态下的荣耀节点性能最高。它从事务队列中获取要执行的事务请求，并验证事务的签名有效性和正确性，例如转账金额、交易操作权限、交易准确执行。所有的交易操作，无论正确或错误（错误的交易将被回滚），都将被写入块中。错误的交易会产生惩罚性的gas费用。通过广播将执行的交易与区块一起通知给其他荣誉节点。")]),t._v(" "),v("p",[t._v("非打包状态的荣誉节点主要负责区块验证，保证打包节点产生的区块内交易被正确执行。如果出现异常，将触发异常处理机制，IBAX网络将回滚并重新验证区块。")]),t._v(" "),v("p",[t._v("为保证交易执行效率，荣耀节点不断收集交易信息。")]),t._v(" "),v("h3",{attrs:{id:"transactions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" 交易 ")]),t._v(" "),v("p",[t._v("交易由 "),v("RouterLink",{attrs:{to:"/zh-CN/concepts/thesaurus.html#weaver"}},[t._v("Weaver")]),t._v(" 生成，其中包括用于执行智能合约的数据。")],1),t._v(" "),v("p",[t._v("交易由用户持有人的私钥进行签名。私钥和 "),v("code",[t._v("Weaver")]),t._v(" 的签名函数可以存储在浏览器、软件客户端，SIM卡或专用物理设备上。在当前实现中，私钥通过ECDSA算法加密保存在"),v("code",[t._v("Weaver")]),t._v("端中。使用ECDSA算法对交易进行签名。")]),t._v(" "),v("p",[t._v("每笔交易有以下格式结构:")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("ID - 执行智能合约的ID；")]),t._v(" "),v("li",[t._v("Params - 发送给智能合约的参数；")]),t._v(" "),v("li",[t._v("KeyID - 发送交易的用户ID；")]),t._v(" "),v("li",[t._v("PublicKey - 荣誉节点 的节点公钥；")]),t._v(" "),v("li",[t._v("Time - 交易产生时间戳；")]),t._v(" "),v("li",[t._v("EcosystemID - 交易产生的所在生态系统ID；")]),t._v(" "),v("li",[t._v("ТokenEcosystem - 生态系统ID，默认为 1，其生态内的通证用于支付交易费用。")])])]),t._v(" "),v("h3",{attrs:{id:"network-protocol"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#network-protocol"}},[t._v("#")]),t._v(" 网络协议 ")]),t._v(" "),v("p",[t._v("用户将交易发送到一个荣誉节点，该交易在该节点进行基本验证以确保交易格式的正确性，然后将交易添加到交易队列中。该交易还会发送到网络上的其他荣誉节点，并将交易添加到交易队列中。")]),t._v(" "),v("p",[t._v("荣誉节点在特定时间段内有权产生新区块，时间段根据"),v("RouterLink",{attrs:{to:"/zh-CN/reference/platform-parameters.html#honor-nodes"}},[t._v("honor_nodes")]),t._v(" 平台参数和特殊算法决定，荣誉节点从交易队列中检索交易并将交易发送到区块生成器。在产生新区块的期间，也会对该新区块中的交易进行处理：将每个交易发送到虚拟机，虚拟机执行交易参数中对应的智能合约，从而更新数据库中的记录。")],1),t._v(" "),v("p",[t._v("验证新区块是否出现错误，如果验证通过，则将该区块发送到其他网络上的其他荣誉节点。")]),t._v(" "),v("p",[t._v("其他荣誉节点将接收到的新区块添加到区块队列，在验证该区块通过后，该区块会被添加到区块所在的荣誉节点区块链中，并处理该区块中的交易，从而更新数据库中的记录。")]),t._v(" "),v("h3",{attrs:{id:"block-and-transaction-verification"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#block-and-transaction-verification"}},[t._v("#")]),t._v(" 区块和交易验证 ")]),t._v(" "),v("p",[t._v("荣誉节点在产生新区块块之后执行新区块验证，以及在收到此区块后在所有其他荣誉节点上验证此区块，包括以下验证：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[v("p",[t._v("接收的数据第一个字节应该是为 0，如果不是，则接收的数据不被视为区块；")])]),t._v(" "),v("li",[v("p",[t._v("接收的区块的生成时间戳应该在当前时间戳之前；")])]),t._v(" "),v("li",[v("p",[t._v("区块的生成时间戳应该与荣誉节点有权产生新区块的时间间隔相对应；")])]),t._v(" "),v("li",[v("p",[t._v("新区块高度应该大于现有区块链上最大区块高度；")])]),t._v(" "),v("li",[v("p",[t._v("不能超过该区块允许交易的最大费用限额；")])]),t._v(" "),v("li",[v("p",[t._v("该区块必须被其节点的节点密钥正确签名，签名数据为：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("该区块高度、前一个区块的哈希值、该区块时间戳、该区块所在的生态系统ID、该区块的荣誉节点 的账户地址；")]),t._v(" "),v("li",[t._v("荣誉节点在平台参数 "),v("RouterLink",{attrs:{to:"/zh-CN/reference/platform-parameters.html#honor-nodes"}},[t._v("honor_nodes")]),t._v(" 数组的位置、 该区块中所有交易的默克尔树（MrklRoot）、前一个区块的回滚哈希值。")],1)])])])])]),t._v(" "),v("p",[t._v("通过以下方式检查区块中的每笔事务的正确性：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("每笔交易的哈希值必须是唯一的；")]),t._v(" "),v("li",[t._v("一个密钥签名的交易不能超过限制"),v("RouterLink",{attrs:{to:"/zh-CN/reference/platform-parameters.html#max-tx-block-per-user"}},[t._v("max_tx_block_per_user")]),t._v(" ；")],1),t._v(" "),v("li",[t._v("不能超过最大交易大小限制"),v("RouterLink",{attrs:{to:"/zh-CN/reference/platform-parameters.html#max-tx-size"}},[t._v("max_tx_size")]),t._v(" ；")],1),t._v(" "),v("li",[t._v("交易时间不能大于区块生成时间，交易时间不能大于区块生成时间加上600秒，不能小于区块生成时间减去86400秒；")]),t._v(" "),v("li",[t._v("交易必须被正确签名；")]),t._v(" "),v("li",[t._v("执行智能合约的用户必须在其帐户中具有足够数量的通证来支付执行交易所需的费用。")])])]),t._v(" "),v("h3",{attrs:{id:"database"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" 数据库 ")]),t._v(" "),v("p",[t._v("IBAX 网络的底层数据存储层是 "),v("font",{attrs:{color:"Red"}},[t._v("PostgreSQL")]),t._v(" 数据库完全向公众开放。基于IBAX操作系统平台的权限设计，用户无需担心数据安全。IBAX Network采用面向对象的设计理念，通过关系型PostgreSQL数据库对数据进行预编译，提高数据处理效率。")],1),t._v(" "),v("p",[t._v("如果您是技术专家，您可能对以下内容感兴趣，如果不是，请跳过它。"),v("br"),t._v("\n① 所有名称中不带数字前缀的表都属于 IBAX Network Basic 的权限表；"),v("br"),t._v("\n② 所有名称中带有数字前缀的表都属于ecoLibs的权限表。")]),t._v(" "),v("h2",{attrs:{id:"ecolib"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ecolib"}},[t._v("#")]),t._v(" 生态系统 ")]),t._v(" "),v("p",[t._v("用户，甚至普通用户，在 IBAX 网络系统平台上创建自己的 ecoLib 都非常容易。 我们集成并开发了一个应用程序，只需单击一下即可创建 ecoLib。")]),t._v(" "),v("p",[t._v("创建ecoLib时，可以配置生态参数和规则，设置管理员账号和计费模式。 最重要的是，为了更好地在 ecoLibs 中应用 DPoA 共识，创建者可以通过编写或导入自己的智能合约来设置它。")]),t._v(" "),v("p",[t._v("我们通过导入智能合约模板来支持ecoLib代币的快速发行。")]),t._v(" "),v("p",[t._v("由于共识和管理权限的不同，ecoLib 分为去中心化和中心化两种。 按类型划分，它们没有特定的优势或劣势。您应该根据您的服务需求选择合适的。如果现在可以但将来不行怎么办？ 您可以在 IBAX 网络系统平台上更改 ecoLib 参数，甚至是共识机制、代币和治理方法。 您可以将其全部交给由 ecoLib 管理员或成员维护的自治机制（取决于 ecoLib 类型）。")]),t._v(" "),v("p",[t._v("在IBAX网络系统平台上，一个ecoLib拥有完整的数据控制权限以及设计和访问独立数据库表和字段的权限。在数据控制权限设计中，我们支持在字段满足逻辑表达式时触发。 此功能允许在特殊服务中提供想象空间，例如监控、逻辑满足以及按时间和特定条件触发。")]),t._v(" "),v("p",[t._v("一个 ecoLib 中可能有多个 DApp，每个 DApp 可以有独立的参数。ecoLib 就像一个平台，您可以在其中实现任何您想要的东西。")]),t._v(" "),v("p",[t._v("为了更好地支持生态系统开发者，我们提供了编辑、管理和开发工具 Weaver。 它将大大降低生态系统的开发、维护和管理成本。")]),t._v(" "),v("h3",{attrs:{id:"ide"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ide"}},[t._v("#")]),t._v(" 集成开发环境 ")]),t._v(" "),v("p",[t._v("Weaver包括用于创建区块链应用程序的全套集成开发环境（IDE）。使用此IDE不需要软件开发人员对区块链技术有深刻的了解。")]),t._v(" "),v("p",[t._v("Weaver提供了数据库表管理工具，智能合约编辑器，页面编辑器以及在生态系统中创建应用程序所需的其他功能，而无需借助任何其他软件模块。")]),t._v(" "),v("p",[t._v("IDE主要包括以下部分:")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("生态系统参数表；")]),t._v(" "),v("li",[t._v("智能合约编辑器；")]),t._v(" "),v("li",[t._v("数据库表管理工具；")]),t._v(" "),v("li",[t._v("页面编辑器和可视化页面设计器；")]),t._v(" "),v("li",[t._v("多语言资源编辑器；")]),t._v(" "),v("li",[t._v("应用程序导入/导出功能。")])])]),t._v(" "),v("h3",{attrs:{id:"applications"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#applications"}},[t._v("#")]),t._v(" 应用程序 ")]),t._v(" "),v("p",[t._v("应用程序是具有配置访问权限的数据库表、智能合约和用户页面等元素的集合。应用程序元素所属的生态系统由元素名称中的前缀表示，例如"),v("font",{attrs:{color:"Red"}},[t._v("@1ElementName")]),t._v("，其中生态系统ID在 "),v("font",{attrs:{color:"Red"}},[t._v("@")]),t._v(" 符号后的数字 "),v("font",{attrs:{color:"Red"}},[t._v("1")]),t._v("表示。在当前生态系统中使用应用程序元素时，可以省略前缀"),v("font",{attrs:{color:"Red"}},[t._v("@1")]),t._v("。这些应用程序可执行有用的功能或实现各种服务。")],1),t._v(" "),v("h3",{attrs:{id:"tables"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tables"}},[t._v("#")]),t._v(" 数据表 ")]),t._v(" "),v("p",[t._v("在 IBAX区块链平台数据库，每个生态系统可以创建无限数量的数据表。特定生态系统的数据表可以通过包含生态系统ID的前缀来标识，该生态系统ID在该生态系统中不会显示在Weaver 中。")]),t._v(" "),v("p",[t._v("数据表不以任何方式绑定和属于某个智能合约，在数据表访问权限范围内，其可以被所有应用程序使用。")]),t._v(" "),v("p",[t._v("每个生态系统都可以为其应用程序的开发创建一组数据表。这并不排除通过指定表名前缀来访问其他生态系统表的可能性。")]),t._v(" "),v("p",[t._v("通过智能法律配置访问权限来将数据记录至数据表。智能法律用于权限管理。")]),t._v(" "),v("blockquote",[v("p",[t._v("数据表管理工具")])]),t._v(" "),v("p",[t._v("用于管理数据表的工具可从 Weaver 的 "),v("strong",[t._v("数据表")]),t._v(" 菜单中找到。具有以下功能：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("查看数据表列表及其条目内容；")])]),t._v(" "),v("li",[v("p",[t._v("创建新数据表；")])]),t._v(" "),v("li",[v("p",[t._v("添加表字段并指定字段数据类型："),v("code",[t._v("Text")]),t._v(" ， "),v("code",[t._v("Date/Time")]),t._v(" ， "),v("code",[t._v("Varchar")]),t._v(" , "),v("code",[t._v("Character")]),t._v(" ， "),v("code",[t._v("JSON")]),t._v(" ， "),v("code",[t._v("Number")]),t._v(" ， "),v("code",[t._v("Money")]),t._v(" ， "),v("code",[t._v("Double")]),t._v(" ，"),v("code",[t._v("Binary")]),t._v("；")]),t._v(" "),v("ul",[v("li",[t._v("Text 对应postgresql "),v("code",[t._v("text")]),t._v("。")]),t._v(" "),v("li",[t._v("Date/Time 对应postgresql "),v("code",[t._v("timestamp")]),t._v("。")]),t._v(" "),v("li",[t._v("Varchar 对应postgresql "),v("code",[t._v("varchar(102400)")]),t._v("。")]),t._v(" "),v("li",[t._v("Character 对应postgresql "),v("code",[t._v("character(1) NOT NULL DEFAULT '0'")]),t._v("。")]),t._v(" "),v("li",[t._v("JSON 对应postgresql "),v("code",[t._v("jsonb")]),t._v("。")]),t._v(" "),v("li",[t._v("Number 对应postgresql "),v("code",[t._v("bigint NOT NULL DEFAULT '0'")]),t._v("。")]),t._v(" "),v("li",[t._v("Money 对应postgresql "),v("code",[t._v("decimal (30, 0) NOT NULL DEFAULT '0'")]),t._v("。")]),t._v(" "),v("li",[t._v("Double 对应postgresql "),v("code",[t._v("double precision")]),t._v("。")]),t._v(" "),v("li",[t._v("Binary 对应postgresql "),v("code",[t._v("bytea NOT NULL DEFAULT '\\x'")]),t._v("。")])])]),t._v(" "),v("li",[v("p",[t._v("管理插入数据、更新数据和更改表结构的权限。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("表数据操作")])]),t._v(" "),v("p",[t._v("为了更好数据库操作，Needle  和 Logicor  都具有"),v("RouterLink",{attrs:{to:"/zh-CN/topics/script.html#dbfind"}},[t._v("DBFind")]),t._v(" 函数，该函数用于从数据表中检索值和数据数组。")],1),t._v(" "),v("p",[t._v("智能合约语言 "),v("RouterLink",{attrs:{to:"/zh-CN/topics/script.html#dbinsert"}},[t._v("DBInsert")]),t._v(" 函数用于向数据表添加条目。"),v("RouterLink",{attrs:{to:"/zh-CN/topics/script.html#dbupdate"}},[t._v("DBUpdate")]),t._v(" 和"),v("RouterLink",{attrs:{to:"/zh-CN/topics/script.html#dbupdateext"}},[t._v("DBUpdateExt")]),t._v(" 函数用于更新现有条目的值，当更新值时，数据表对应数据会更新，而区块链会添加新的交易，同时保留着所有历史交易。数据表的数据只可以被修改，不能被删除。")],1),t._v(" "),v("p",[t._v("为了最大程度缩短执行智能合约的时间，"),v("RouterLink",{attrs:{to:"/zh-CN/topics/script.html#dbfind"}},[t._v("DBFind")]),t._v(" 函数不能同时查询多个数据表，不支持 "),v("em",[t._v("JOIN")]),t._v("进行查询，因此建议放弃应用程序的数据表规范化，而是将所有可用的信息存储在条目中或者重复其他数据表可用的信息。这不是一种强制性措施，而是区块链应用程序的必要条件。就这种情况而言，存储的数据应该是完整的数据，即使其他表的相同数据更新了，该数据也是无法更新的，这在关系型数据库中该数据是同步更新的。")],1),t._v(" "),v("h3",{attrs:{id:"ecosystem-parameters"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ecosystem-parameters"}},[t._v("#")]),t._v(" 生态系统参数 ")]),t._v(" "),v("p",[t._v("生态系统参数表（ "),v("strong",[t._v("1_parameters")]),t._v(" ）可从 Weaver 生态系统参数菜单查看和编辑。生态系统参数可分为以下几组：")]),t._v(" "),v("blockquote",[v("ul",[v("li",[v("p",[t._v("常规参数：生态系统创建者的帐户（founder_account）以及其他信息；")])]),t._v(" "),v("li",[v("p",[t._v("访问权限参数：定义应用程序元素的访问权限")]),t._v(" "),v("blockquote",[v("ul",[v("li",[t._v("更新数据表结构（ "),v("em",[t._v("changing_tables")]),t._v(" ）；")]),t._v(" "),v("li",[t._v("更新智能合约（ "),v("em",[t._v("changing_contracts")]),t._v(" ）；")]),t._v(" "),v("li",[t._v("更新用户页面（ "),v("em",[t._v("changing_page")]),t._v(" ）；")]),t._v(" "),v("li",[t._v("更新菜单（ "),v("em",[t._v("changing_menu")]),t._v(" ）；")]),t._v(" "),v("li",[t._v("更新多语言资源 （ "),v("em",[t._v("changing_language")]),t._v(" )。")])])])]),t._v(" "),v("li",[v("p",[t._v("技术参数：定义用户样式( "),v("em",[t._v("stylesheet")]),t._v(" )等；")])]),t._v(" "),v("li",[v("p",[t._v("用户参数：定义应用程序工作所需的常量或列表（以逗号分隔）。")])])])]),t._v(" "),v("p",[t._v("可以为每个生态系统的参数指定编辑权限。")]),t._v(" "),v("p",[t._v("要检索生态系统参数的值，可使用"),v("RouterLink",{attrs:{to:"/zh-CN/topics/script.html#ecosysparam"}},[t._v("EcosysParam")]),t._v(" 函数，将生态系统参数名称作为参数传递给该函数。")],1),t._v(" "),v("h2",{attrs:{id:"access-rights-control-mechanism"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#access-rights-control-mechanism"}},[t._v("#")]),t._v(" 访问权限控制机制 ")]),t._v(" "),v("p",[t._v("IBAX区块链平台拥有多级访问权限管理系统。可以配置访问权限来创建和更改应用程序的任何元素：智能合约，数据表，用户页面，生态系统参数。也可以配置更改访问权限的权限。")]),t._v(" "),v("p",[t._v("默认情况下，IBAX区块链平台 生态系统中的所有权限都由其创始人管理，这在"),v("strong",[t._v("MainCondition")]),t._v("智能合约中定义，默认情况下每个生态系统都有这个智能合约。但是在创建智能法律之后，访问权限控制可以转移到所有生态系统成员或一组此类成员。")]),t._v(" "),v("h3",{attrs:{id:"access-control-actions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#access-control-actions"}},[t._v("#")]),t._v(" 访问权限控制操作 ")]),t._v(" "),v("p",[t._v("访问权限在智能合约表（ "),v("strong",[t._v("1_contracts")]),t._v(" ）、数据表（ "),v("strong",[t._v("1_tables")]),t._v("）、用户页面表（ "),v("strong",[t._v("1_pages")]),t._v(" ）、 菜单表（ "),v("strong",[t._v("1_menu")]),t._v(" ），代码片段表（"),v("strong",[t._v("1_blocks")]),t._v(" ）的权限字段中定义，可以 Weaver 找到对应的菜单部分。")]),t._v(" "),v("h3",{attrs:{id:"access-rights-management"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#access-rights-management"}},[t._v("#")]),t._v(" 访问权限管理方法 ")]),t._v(" "),v("p",[t._v("访问权限的规则在权限字段填入对应智能合约表达式"),v("strong",[t._v('ContractConditions("@1MainCondition")')]),t._v(' 、**ContractAccess("@1MainCondition")**或者逻辑表达式，如果请求表示式的结果通过（true），则授予访问权限。 否则拒绝访问权限并终止相关操作。')]),t._v(" "),v("p",[t._v("定义权限的简单方法是在权限字段输入逻辑表达式。例如"),v("code",[t._v("$key_id == 8919730491904441614")]),t._v("，其中 "),v("strong",[t._v("$keyid")]),t._v(" 表示生态系统成员的ID。")]),t._v(" "),v("p",[t._v("定义权限的最通用和推荐的方法是使用"),v("code",[t._v('ContractConditions("@1ContractsName1","@1ContractsName2")')]),t._v("函数， 智能合约名称 "),v("strong",[t._v("ContractsName")]),t._v("作为参数传递给该函数，合约结果必须是逻辑表达式的结果（true或者false）。")]),t._v(" "),v("p",[t._v("定义权限的另一种方法是使用"),v("code",[t._v('ContractAccess("@1ContractsName3","@1ContractsName4")')]),t._v("函数。 有资格实现相应操作的合约 "),v("strong",[t._v("ContractsName")]),t._v("可以作为参数传递给该函数。例如，如果 "),v("em",[t._v("amount")]),t._v(" 列的权限字段配置为"),v("code",[t._v('ContractAccess("@1TokenTransfer")')]),t._v("，那么想要更改 "),v("em",[t._v("amount")]),t._v("列中的值，只能执行 "),v("strong",[t._v("@1TokenTransfer")]),t._v("合约来更改。访问合约本身的权限可以在条件部分 "),v("em",[t._v("conditions")]),t._v("进行管理。它们可能相当复杂，可能包含许多其他合约。")]),t._v(" "),v("h3",{attrs:{id:"exclusive-rights"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#exclusive-rights"}},[t._v("#")]),t._v(" 特殊权限 ")]),t._v(" "),v("p",[t._v("考虑到解决突发情况或对生态系统运行至关重要的情况，生态系统参数表（"),v("strong",[t._v("1_parameters")]),t._v(" ）有许多特殊参数（"),v("strong",[t._v("changing_contracts")]),t._v("、"),v("strong",[t._v("changing_pages")]),t._v("）等，参数定义了访问当前生态系统的所有合约，数据表和页面的权限，这些权限使用起关键作用的合约配置的。")]),t._v(" "),v("h2",{attrs:{id:"virtual-private-ecosystem"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#virtual-private-ecosystem"}},[t._v("#")]),t._v(" 虚拟专用生态系统 ")]),t._v(" "),v("p",[t._v("IBAX区块链平台 可以创建虚拟专用生态系统 Cross Ledgers Base(CLB)，它具有标准生态系统的全套功能，但在区块链之外工作。在 CLB中，可以使用和创建合约和模板语言、数据库表，可以使用 Weaver 创建应用程序。可以使用接口方式调用区块链生态系统上的合约。")]),t._v(" "),v("h3",{attrs:{id:"requests-to-web-resources"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#requests-to-web-resources"}},[t._v("#")]),t._v(" 请求web资源 ")]),t._v(" "),v("blockquote",[v("p",[t._v("CLB 和标准生态系统之间的主要区别在于可以使用"),v("RouterLink",{attrs:{to:"/zh-CN/topics/script.html#httprequest"}},[t._v("HTTPRequest")]),t._v(" 和"),v("RouterLink",{attrs:{to:"/zh-CN/topics/script.html#httppostjson"}},[t._v("HTTPPostJSON")]),t._v(" 合约函数通过 "),v("strong",[t._v("HTTP / HTTPS")]),t._v("请求方式在合约内向任何Web资源发出请求。传递给此函数的参数为：URL，请求方法（"),v("strong",[t._v("GET")]),t._v("或"),v("strong",[t._v("POST")]),t._v("），请求头和请求参数。")],1)]),t._v(" "),v("h3",{attrs:{id:"rights-to-read-data"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rights-to-read-data"}},[t._v("#")]),t._v(" 读取数据权限 ")]),t._v(" "),v("p",[t._v("由于 CLB 中的数据未保存到区块链（但可用于读取），因此可以选择配置读取数据表的权限。可以为单独的列设置读取权限， 也可以为使用特殊合约的任何行设置读取权限。")]),t._v(" "),v("h3",{attrs:{id:"clb-creation"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#clb-creation"}},[t._v("#")]),t._v(" 创建 CLB ")]),t._v(" "),v("p",[t._v("可以在网络上创建 CLB 节点。 CLB 节点的管理员定义允许使用 CLB功能的生态系统列表，并指定将拥有生态系统创建者权限的用户可以安装应用程序，接受新成员以及配置资源访问权限。")]),t._v(" "),v("h3",{attrs:{id:"clb-usage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#clb-usage"}},[t._v("#")]),t._v(" 使用 CLB ")]),t._v(" "),v("p",[t._v("CLB可以创建注册表单，通过邮件或者电话向用户发送验证信息，存储在外部公共访问的数据。可以编写和测试应用程序，然后将应用程序导入至区块链生态系统。在CLB中可以使用调度合约任务，可以创建预言机，用于从web资源接收数据并发送该数据至区块链生态系统中。")])])}),[],!1,null,null,null);v.default=a.exports}}]);