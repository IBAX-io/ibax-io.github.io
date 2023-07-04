(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{359:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tutorial-for-application-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-for-application-development"}},[e._v("#")]),e._v(" Tutorial for application development ")]),e._v(" "),t("p",[e._v("In this section, we will show you how to  develop a simple application on the IBAX Network.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#the-goal"}},[e._v("The Goal")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#part-1-the-environment"}},[e._v("Part 1: The Environment")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#part-2-contract"}},[e._v("Part 2: Contract")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#creator-account"}},[e._v("Creator account")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#new-application"}},[e._v("New application")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#new-database-table"}},[e._v("New database table")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#new-contract"}},[e._v("New contract")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#contract-code"}},[e._v("Contract code")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#create-a-contract"}},[e._v("Create a contract")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#contract-name"}},[e._v("Contract name")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#data"}},[e._v("Data")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#conditions"}},[e._v("Conditions")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#action"}},[e._v("Action")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#full-contract-code"}},[e._v("Full contract code")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#save-and-run"}},[e._v("Save and run")])])])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#part-3-page"}},[e._v("Part 3: Page")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#new-field"}},[e._v("New field")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#update-the-contract"}},[e._v("Update the contract")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#page"}},[e._v("Page")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#designer-views"}},[e._v("Designer views")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#developer-view"}},[e._v("Developer view")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#fetch-data-from-the-database-table"}},[e._v("Fetch data from the database table")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#full-page-code-1"}},[e._v("Full page code")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#save-the-page"}},[e._v("Save the page")])])])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#part-4-application"}},[e._v("Part 4: Application")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#menu"}},[e._v("Menu")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#add-a-menu-item"}},[e._v("Add a menu item")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#test-the-new-menu-item"}},[e._v("Test the new menu item")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#send-a-message"}},[e._v("Send a message")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#form"}},[e._v("Form")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#form-navigation"}},[e._v("Form navigation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#navigation-buttons"}},[e._v("Navigation buttons")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#variables"}},[e._v("Variables")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#entry-count"}},[e._v("Entry count")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#table-offset"}},[e._v("Table offset")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#button-code"}},[e._v("Button code")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#page-refreshing"}},[e._v("Page refreshing")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#full-page-code-2"}},[e._v("Full page code")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#conclusions"}},[e._v("Conclusions")])])]),e._v(" "),t("h2",{attrs:{id:"the-goal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-goal"}},[e._v("#")]),e._v(" The Goal ")]),e._v(" "),t("p",[e._v("The application begins with simple functions but grows in complexity as the tutorial progresses.")]),e._v(" "),t("p",[e._v("In the final version of the application, some simple messages (strings) are stored in a database table, which contains the timestamps and account identifiers of senders. Users can view the messages list and add a new message from the application page which can be accessed from the menu of the ecosystem.")]),e._v(" "),t("h2",{attrs:{id:"part-1-the-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part-1-the-environment"}},[e._v("#")]),e._v(" Part 1: The Environment ")]),e._v(" "),t("p",[t("strong",[e._v("Weaver")])]),e._v(" "),t("p",[e._v("As the only client of IBAX, Weaver provides functions for all users and ecosystem roles. With it, application developers can develop and test their applications, ecosystem administrators can manage their ecosystems, while users can interact with the ecosystems.")]),e._v(" "),t("p",[e._v("In this tutorial, you are going to code contracts, page templates and perform all other actions in Weaver. Weaver also provides a way to restore, save and execute contract codes, manage data structures (database tables), assign access permissions and create applications.")]),e._v(" "),t("p",[e._v("Each node has its own Weaver instance.")]),e._v(" "),t("h2",{attrs:{id:"part-2-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part-2-contract"}},[e._v("#")]),e._v(" Part 2: Contract ")]),e._v(" "),t("p",[e._v('Your first simple application is "Hello, World!".')]),e._v(" "),t("blockquote",[t("p",[e._v("Note")])]),e._v(" "),t("blockquote",[t("p",[e._v("In this application, strings will be stored in a database table, and there is not a user page.")])]),e._v(" "),t("h3",{attrs:{id:"creator-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creator-account"}},[e._v("#")]),e._v(" Creator account ")]),e._v(" "),t("p",[e._v('Accounts with the Developer role will be assigned the "root" privileges of the ecosystem. By default, this role can access all actions. In a new ecosystem, the creator account will be assigned the Admin role, which you must use it to introduce major changes to the ecosystem, such as creating new applications and database tables.')]),e._v(" "),t("p",[e._v("Log in to the ecosystem using the creator account.")]),e._v(" "),t("h3",{attrs:{id:"new-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-application"}},[e._v("#")]),e._v(" New application ")]),e._v(" "),t("p",[e._v("Once you logged in as the ecosystem creator, you can create a new application.")]),e._v(" "),t("p",[e._v("Create a new application:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Go to the Developer tab;")])]),e._v(" "),t("li",[t("p",[e._v("Select Application in the menu at the left;")])]),e._v(" "),t("li",[t("p",[e._v("Select New at the application page;")])]),e._v(" "),t("li",[t("p",[e._v("Specify the application name in the Name field;")])]),e._v(" "),t("li",[t("p",[e._v("Set Conditions to "),t("code",[e._v("true")]),e._v(";")])])]),e._v(" "),t("p",[t("code",[e._v("true")]),e._v(" means anyone can make changes to the application;")]),e._v(" "),t("p",[e._v("Another option is "),t("code",[e._v('ContractConditions("MainCondition")')]),e._v(", which means no one can make changes to the application except for the creator.")]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Your application will be displayed in the applications list, click the Name field of a specific application to activate it.")])]),e._v(" "),t("blockquote",[t("p",[e._v("Note")])]),e._v(" "),t("blockquote",[t("p",[e._v("You can access relevant resources by clicking an application in the Developer tab, no impact on the ecosystem. No matter which one you choose, all ecosystem applications are still available.")])]),e._v(" "),t("h3",{attrs:{id:"new-database-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-database-table"}},[e._v("#")]),e._v(" New database table ")]),e._v(" "),t("p",[e._v("To store the data, create a database table for the application in Weaver.")]),e._v(" "),t("p",[e._v("Create a data table:")]),e._v(" "),t("ol",[t("li",[e._v("In the Developer tab, select Application - Name > Database table;")])]),e._v(" "),t("p",[e._v("All database tables in relation to the application selected will be displayed here. If the list is empty, then, no database tables have been created for your application yet.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Click New；")])]),e._v(" "),t("p",[e._v("Weaver will show you the page to create a new database table.")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Specify the name in the Name field;")])]),e._v(" "),t("p",[e._v("In this tutorial, the name of the database table will be "),t("code",[e._v("apptable")]),e._v(".")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Add the "),t("code",[e._v("message")]),e._v(" column, set its type as "),t("code",[e._v("Text")]),e._v(";")])]),e._v(" "),t("p",[e._v("This table must have two columns: "),t("code",[e._v("id")]),e._v(" (predefine) and "),t("code",[e._v("message")]),e._v(". You are going to add more columns later.")]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("With respect to the read and write permissions, set each field to "),t("code",[e._v("true")]),e._v(";")])]),e._v(" "),t("p",[e._v("This will allow anyone to insert, update entries, add columns and read entry data on the database table;")]),e._v(" "),t("p",[e._v("As an option, you may reserve the read and write permissions to the creator account. In this case, set this field to "),t("code",[e._v('ContractConditions("MainCondition")')]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"new-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-contract"}},[e._v("#")]),e._v(" New contract ")]),e._v(" "),t("h4",{attrs:{id:"contract-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contract-code"}},[e._v("#")]),e._v(" Contract code ")]),e._v(" "),t("p",[e._v("Each contract has three parts. For more details, please see: "),t("RouterLink",{attrs:{to:"/it/topics/script.html#contract-structure"}},[e._v("Contract structure")]),e._v("。")],1),e._v(" "),t("h4",{attrs:{id:"create-a-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-contract"}},[e._v("#")]),e._v(" Create a contract ")]),e._v(" "),t("ol",[t("li",[e._v("In the Developer tab, select Application - Name > Contract;")])]),e._v(" "),t("p",[e._v("All contracts in relation to the application will be displayed here. The list is empty for new applications.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Click New;")])]),e._v(" "),t("p",[e._v("A new contract template will be displayed in the editor.")]),e._v(" "),t("p",[e._v("An empty contract template is shown as below:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("contract ... {\n    data {\n\n    }\n    conditions {\n\n    }\n    action {\n\n    }\n}\n")])])]),t("h4",{attrs:{id:"contract-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contract-name"}},[e._v("#")]),e._v(" Contract name ")]),e._v(" "),t("p",[e._v("First, please specify the contract name.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    contract AppContract {\n\n    }\n")])])]),t("h4",{attrs:{id:"data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[e._v("#")]),e._v(" Data ")]),e._v(" "),t("p",[e._v("Fill in the "),t("code",[e._v("data")]),e._v(" section.")]),e._v(" "),t("p",[e._v("In the following example, "),t("code",[e._v("Message")]),e._v(" refers to the variable name, while "),t("code",[e._v("string")]),e._v(" the variable type.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    data {\n        Message string\n    }\n")])])]),t("h4",{attrs:{id:"conditions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conditions"}},[e._v("#")]),e._v(" Conditions ")]),e._v(" "),t("p",[e._v("Fill in the "),t("code",[e._v("conditions")]),e._v(" section. A simple verification condition is to avoid empty strings. If the length of "),t("code",[e._v("Message")]),e._v(" is "),t("code",[e._v("0")]),e._v(", a predefined warning message will be triggered when implementing the contract.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('conditions {\n    // avoid writing empty strings\n    if Size($Message) == 0 {\n        error "Message is empty"\n    }\n}\n')])])]),t("h4",{attrs:{id:"action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[e._v("#")]),e._v(" Action ")]),e._v(" "),t("p",[e._v("Fill in the "),t("code",[e._v("action")]),e._v(" section. A simple action is to write "),t("code",[e._v("Message")]),e._v(" into the data table.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    action {\n        DBInsert("apptable", {message: $Message})\n    }\n')])])]),t("h4",{attrs:{id:"full-contract-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-contract-code"}},[e._v("#")]),e._v(" Full contract code ")]),e._v(" "),t("p",[e._v("The full contract code is shown below.")]),e._v(" "),t("p",[e._v("All contracts in IBAX will be constructed like this, including the "),t("code",[e._v("data")]),e._v(", "),t("code",[e._v("conditions")]),e._v(" and "),t("code",[e._v("action")]),e._v(" sections.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('contract AppContract {\n    data {\n        Message string\n    }\n    conditions {\n        // avoid writing empty strings\n        if Size($Message) == 0 {\n            error "Message is empty"\n        }\n    }\n    action {\n        DBInsert("apptable", {message: $Message})\n    }\n}\n')])])]),t("h4",{attrs:{id:"save-and-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#save-and-run"}},[e._v("#")]),e._v(" Save and run ")]),e._v(" "),t("p",[e._v("Now, we are preparing to test the contract:")]),e._v(" "),t("ol",[t("li",[e._v("Click Save in the editor's menu;")])]),e._v(" "),t("p",[e._v("This will update the contract code, and the updated version will be available to all network nodes.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Click Run in the editor's menu;")])]),e._v(" "),t("p",[e._v("This will display the Run the Contract page.")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("In the Run the Contract page, fill in the input parameters of the contract;")])]),e._v(" "),t("p",[e._v("As this contract has one parameter "),t("code",[e._v("Message")]),e._v(", set "),t("code",[e._v("Message")]),e._v(" at the Key field and "),t("code",[e._v("Hello, World")]),e._v(" at the Value field.")]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Click Run.")])]),e._v(" "),t("p",[e._v("The result will be displayed at the right.")]),e._v(" "),t("p",[e._v("If successfully added some strings, then, the result will contain the block ID and result code to introduce the change of transactions.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n "block": "31",\n "result": null\n}\n')])])]),t("h2",{attrs:{id:"part-3-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part-3-page"}},[e._v("#")]),e._v(" Part 3: Page ")]),e._v(" "),t("p",[e._v("When the contract becomes effective, it is time to extend it to something useful. In this part, you are going to implement the UI and other functions.")]),e._v(" "),t("p",[e._v("Note")]),e._v(" "),t("p",[e._v("In this application, strings will be stored in a database table, like entries in a log. Each string will have an author and timestamp.")]),e._v(" "),t("p",[e._v("Users can view the list of strings stored at the application page, which is shown as a simple form then.")]),e._v(" "),t("h3",{attrs:{id:"new-field"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-field"}},[e._v("#")]),e._v(" New field ")]),e._v(" "),t("p",[e._v("As with the previous, edit the database table at the Developer tab > Application - Name > Database table page;")]),e._v(" "),t("p",[e._v("Add the following fields into "),t("code",[e._v("apptable")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("author")]),e._v(" , field type "),t("code",[e._v("Number")]),e._v(", set Change to "),t("code",[e._v("true")]),e._v(";")])]),e._v(" "),t("p",[e._v("This field will store the identifier of the author account.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("timestamp")]),e._v(" , field type "),t("code",[e._v("Date/Time")]),e._v(", set Change to "),t("code",[e._v("true")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"update-the-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-the-contract"}},[e._v("#")]),e._v(" Update the contract ")]),e._v(" "),t("p",[e._v("We will update the contract code to handle the author ID and timestamp.")]),e._v(" "),t("p",[e._v("The author ID is the account ID of the ecosystem. The timestamp is the date and time executing the contract in Unix time format.")]),e._v(" "),t("p",[e._v("As both values are provided by the "),t("RouterLink",{attrs:{to:"/it/topics/script.html#variables"}},[e._v("Predefined variables")]),e._v(" and no need to input or verify the predefined variables, they can only be updated in the action part.")],1),e._v(" "),t("p",[e._v("Update the contract to write the author ID and timestamp into the database table when adding a message, among which the author ID is defined by "),t("code",[e._v("$key_id")]),e._v(", while the timestamp by "),t("code",[e._v("$time")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('action {\n DBInsert("apptable", {message: $Message, author: $key_id, timestamp: $time})\n}\n')])])]),t("h3",{attrs:{id:"page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[e._v("#")]),e._v(" Page ")]),e._v(" "),t("p",[e._v("For the application page, it is a simple page where displays the messages stored in the database table.")]),e._v(" "),t("p",[e._v("Like all other resources, you can create the UI page in Weaver:")]),e._v(" "),t("p",[e._v("1.Navigate to the Developer tab, click Application - Name > Page;")]),e._v(" "),t("p",[e._v("2.Click New;\nThe visual designer will be opened in a new tab.")]),e._v(" "),t("h4",{attrs:{id:"designer-views"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#designer-views"}},[e._v("#")]),e._v(" Designer views ")]),e._v(" "),t("p",[e._v("The default page is empty. You can use the predefine structure to quickly fill in the page.")]),e._v(" "),t("p",[e._v("Create a basic table:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("In the view selector at the right, click Designer;\nThe view will be switched to the visual designer.")])]),e._v(" "),t("li",[t("p",[e._v("In the menu at the left, select Table With Header and drag it on to the page.\nA table with multiple elements will be displayed on the page.")])])]),e._v(" "),t("h4",{attrs:{id:"developer-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developer-view"}},[e._v("#")]),e._v(" Developer view ")]),e._v(" "),t("p",[e._v("As the user page of IBAX is coded with a "),t("RouterLink",{attrs:{to:"/it/topics/templates2.html"}},[e._v("Template Language")]),e._v(", please switch to the Developer view when writing the page code.")],1),e._v(" "),t("p",[e._v("Switch to the Developer view.")]),e._v(" "),t("ol",[t("li",[e._v("In the view selector at the right, click Developer.")])]),e._v(" "),t("p",[e._v("The view will be switched to the editor with a tab holding the page code.")]),e._v(" "),t("h4",{attrs:{id:"fetch-data-from-the-database-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch-data-from-the-database-table"}},[e._v("#")]),e._v(" Fetch data from the database table ")]),e._v(" "),t("p",[e._v("So far, nothing done with the page template. In the next, we will update the code to allow the page to display data from "),t("code",[e._v("apptable")]),e._v(".")]),e._v(" "),t("ol",[t("li",[e._v("To request data from the database table with the "),t("RouterLink",{attrs:{to:"/it/topics/script.html#dbfind"}},[e._v("DBFind")]),e._v(" function;")],1)]),e._v(" "),t("p",[e._v("In the following example, this function call is used to fetch data from "),t("code",[e._v("apptable")]),e._v(". The data will be put it in the source "),t("code",[e._v("src_table")]),e._v(" and sorted by the timestamp field. "),t("code",[e._v("src_table")]),e._v(" will be later used as the data source for the page in table view.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('   DBFind(Name: apptable, Source: src_table).Columns(Columns: "author,timestamp,message").Order(timestamp)\n')])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("To display the data from "),t("code",[e._v("src_table")]),e._v(", specify it as the data source and the header in the "),t("code",[e._v("Table")]),e._v(" function.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    Table(Columns: "AUTHOR=author,TIME=timestamp,MESSAGE=message", Source: src_table)\n')])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("In the view selector at the right, click Preview to check whether the data is displayed correctly.")])]),e._v(" "),t("h4",{attrs:{id:"full-page-code-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-page-code-1"}},[e._v("#")]),e._v(" Full page code ")]),e._v(" "),t("p",[e._v("The following is the full page code for this part. This basic page will be expanded later.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('DBFind(Name: apptable, Source: src_table).Columns(Columns: "author,timestamp,message").Order(timestamp)\n\nDiv(Class: panel panel-primary) {\n    Div(Class: panel-heading, Body: Table block)\n    Table(Columns: "AUTHOR=author,TIME=timestamp,MESSAGE=message", Source: src_table)\n    Div(Class: panel-footer text-right) {\n    Button(Class: btn btn-primary, Contract: ContractName, Body: More)\n    }\n}\n\n')])])]),t("h4",{attrs:{id:"save-the-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#save-the-page"}},[e._v("#")]),e._v(" Save the page ")]),e._v(" "),t("p",[e._v("Click Save to save the page:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Specify "),t("code",[e._v("AppPage")]),e._v(" or any other name for the page in the Page Name field;")])]),e._v(" "),t("li",[t("p",[e._v("Select "),t("code",[e._v("default_menu")]),e._v(" in the Menu;")])]),e._v(" "),t("li",[t("p",[e._v("Set Conditions to "),t("code",[e._v("true")]),e._v(";")])]),e._v(" "),t("li",[t("p",[e._v("Click OK.")])])]),e._v(" "),t("h2",{attrs:{id:"part-4-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part-4-application"}},[e._v("#")]),e._v(" Part 4: Application ")]),e._v(" "),t("p",[e._v("In the previous sections, you created a contract, a table to store data, and a basic UI page to display that data.")]),e._v(" "),t("p",[e._v("In this part, you are going to finalize the application to make its appearance and actions are similar to an actual one.")]),e._v(" "),t("h3",{attrs:{id:"menu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menu"}},[e._v("#")]),e._v(" Menu ")]),e._v(" "),t("p",[e._v("The page needs to be linked to a menu, for example, "),t("code",[e._v("default_page")]),e._v(" displayed on the Home tab is linked to the default ecosystem menu "),t("code",[e._v("default_menu")]),e._v(".")]),e._v(" "),t("p",[e._v("As this application tutorial is very simple (only having one page), there is no need to create a separate menu for it. The new menu item in the default menu is sufficient.")]),e._v(" "),t("blockquote",[t("p",[e._v("Note")])]),e._v(" "),t("blockquote",[t("p",[e._v("You can define the page menu by editing the page properties at the Developer tab > Application - Name > Page. For example, if your app has multiple pages, you may need to create a menu to navigate between these pages and assign it to all pages of the app.")])]),e._v(" "),t("h4",{attrs:{id:"add-a-menu-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-a-menu-item"}},[e._v("#")]),e._v(" Add a menu item ")]),e._v(" "),t("p",[e._v("Like all other resources, menus can be created and edited in Weaver:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Navigate to the Developer tab > Menu;")])]),e._v(" "),t("li",[t("p",[e._v("Click the Name of the "),t("code",[e._v("default_menu")]),e._v(" entry;")])])]),e._v(" "),t("p",[e._v("A new tab will be opened in the editor.")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Add a new menu item to the end of the template, which will be linked to open the application page and its icon comes from the "),t("a",{attrs:{href:"https://fontawesome.com/icons",target:"_blank",rel:"noopener noreferrer"}},[e._v("FontAwesome"),t("OutboundLink")],1),e._v(" icon set.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    MenuItem(Title:Messages, Page:AppPage, Icon:"fa fa-envelope")\n')])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Click Save.")])]),e._v(" "),t("h4",{attrs:{id:"test-the-new-menu-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-the-new-menu-item"}},[e._v("#")]),e._v(" Test the new menu item ")]),e._v(" "),t("p",[e._v("Check whether the new menu item is valid:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Open the Home tab;")])]),e._v(" "),t("li",[t("p",[e._v("Click Refresh in the menu;")]),e._v(" "),t("p",[e._v("An entry with a header of Messages will appear;")])]),e._v(" "),t("li",[t("p",[e._v("Click Messages.")]),e._v(" "),t("p",[e._v("The application page will be opened.")])])]),e._v(" "),t("h3",{attrs:{id:"send-a-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-a-message"}},[e._v("#")]),e._v(" Send a message ")]),e._v(" "),t("p",[e._v("The buttons in Logicor can be used to implement contracts and open pages, depending on the parameters.")]),e._v(" "),t("p",[e._v("The "),t("RouterLink",{attrs:{to:"/it/topics/templates2.html#button"}},[e._v("Button")]),e._v(" function has two contract parameters:")],1),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("Contract")])]),e._v(" "),t("p",[e._v("Name of the contract activated.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("Params")])]),e._v(" "),t("p",[e._v("Input parameters of the contract.")])])]),e._v(" "),t("h4",{attrs:{id:"form"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form"}},[e._v("#")]),e._v(" Form ")]),e._v(" "),t("p",[e._v("To send data to the contract, add a form on the application page, which must have an input field for a message and a button to activate the contract AppContract.")]),e._v(" "),t("p",[e._v("The following is an example of this type of form. It is nested in its own "),t("RouterLink",{attrs:{to:"/it/topics/templates2.html#div"}},[e._v("Div")]),e._v(". Putting it after the Div element that contains the form view, which defines that the "),t("RouterLink",{attrs:{to:"/it/topics/templates2.html#input"}},[e._v("Input")]),e._v(" field has a predefine name "),t("code",[e._v("message_input")]),e._v(". The button uses this name to send the value of "),t("code",[e._v("Message")]),e._v(" to the contract. Finally, the "),t("RouterLink",{attrs:{to:"/it/topics/templates2.html#calling-contracts"}},[e._v("Val")]),e._v(" function is used to get the value of the input field.")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Div(Class: panel panel-primary) {\n Form() {\n Input(Name: message_input, Class: form-control, Type: text, Placeholder: "Write a message...", )\n Button(Class: btn btn-primary, Body: Send, Contract: AppContract, Params: "Message=Val(message_input)")\n }\n}\n')])])]),t("p",[e._v("You may notice that when testing this new feature by sending a message, the form does not refresh. This will be introduced in "),t("a",{attrs:{href:"#page-refreshing"}},[e._v("page refresh")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"form-navigation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form-navigation"}},[e._v("#")]),e._v(" Form navigation ")]),e._v(" "),t("p",[e._v("Under the default view, the form on the page can only display 25 entries on the first page. Hence, you can add some simple buttons to navigate users to all form entries.")]),e._v(" "),t("h4",{attrs:{id:"navigation-buttons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigation-buttons"}},[e._v("#")]),e._v(" Navigation buttons ")]),e._v(" "),t("p",[e._v("There will be two navigation buttons, and each of them could reload the application page and pass the parameters to it.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The Previous button will display the first 25 entries. If there are no other entries, the button will not be displayed;")])]),e._v(" "),t("li",[t("p",[e._v("The Next button will display the next 25 entries. If there are no other entries, the button will not be displayed.")])])]),e._v(" "),t("h4",{attrs:{id:"variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables ")]),e._v(" "),t("p",[e._v("The navigation buttons require two variables to store the table view states:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("#table_view_offset#")])])]),e._v(" "),t("p",[e._v("This variable stores the offset of current table view.")]),e._v(" "),t("p",[e._v("The navigation buttons will pass it as a parameter when the page is reloaded.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("#record_count#")])])]),e._v(" "),t("p",[e._v("This variable stores the total number of entries in the table.")]),e._v(" "),t("p",[e._v("The value will be calculated.")]),e._v(" "),t("h4",{attrs:{id:"entry-count"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entry-count"}},[e._v("#")]),e._v(" Entry count ")]),e._v(" "),t("p",[e._v("To count "),t("code",[e._v("#record_count#")]),e._v(", please modify the existing "),t("RouterLink",{attrs:{to:"/it/topics/script.html#dbfind"}},[e._v("DBFind")]),e._v(" function call. The variable specified in the "),t("code",[e._v(".count()")]),e._v(" call will store the entry count.")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('DBFind(Name: apptable, Source: src_table).Columns(Columns: "author,timestamp,message").Order(timestamp).Count(record_count)\n')])])]),t("h4",{attrs:{id:"table-offset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-offset"}},[e._v("#")]),e._v(" Table offset ")]),e._v(" "),t("p",[e._v("The table view offset must be passed to the page when the page is opened. If "),t("code",[e._v("#table_view_offset#")]),e._v(" does not get a value, set it to 0.")]),e._v(" "),t("p",[e._v("Add the following code to the top of the page.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("If(GetVar(table_view_offset)){\n\n}.Else{\n    SetVar(table_view_offset, 0)\n}\n")])])]),t("p",[e._v("Modify the "),t("RouterLink",{attrs:{to:"/it/topics/script.html#dbfind"}},[e._v("DBFind")]),e._v(" function call again. This time it must use the new table view offset.")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('DBFind(Name: apptable, Source: src_table).Columns(Columns: "author,timestamp,message").Order(timestamp).Count(record_count).Offset(#table_view_offset#)\n')])])]),t("h4",{attrs:{id:"button-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#button-code"}},[e._v("#")]),e._v(" Button code ")]),e._v(" "),t("p",[e._v("Find the "),t("RouterLink",{attrs:{to:"/it/topics/templates2.html#div"}},[e._v("Div")]),e._v(" function call that defines the footer: "),t("code",[e._v("Div(Class:panel-footer text-right)")]),e._v(". Add the button code into it.")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Div(Class: panel-footer text-right) {\n}\n")])])]),t("p",[e._v("The "),t("em",[e._v("Previous")]),e._v(" button will only appear if there is at least one Next to return. When adding a button, the new table view offset "),t("code",[e._v("offset_previous")]),e._v(" of the page will be calculated. The parameters are passed to "),t("code",[e._v("PageParams")]),e._v(" of the reopened page.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('If(#table_view_offset# >= 25) {\n    SetVar(offset_previous, Calculate(#table_view_offset# - 25))\n    Button(Class: btn btn-primary, Body: Previous, Page: AppPage, PageParams:"table_view_offset=#offset_previous#")\n}\n')])])]),t("p",[e._v("The Next button will only be displayed when the total number of records is greater than the number displayed on the page. When a button is added, the new table view offset "),t("code",[e._v("offset_next")]),e._v(" of the page will be calculated. The parameters are passed to "),t("code",[e._v("PageParams")]),e._v(" of the reopened page.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('If(#record_count# >= Calculate(#table_view_offset# + 25)) {\n    SetVar(offset_next, Calculate(#table_view_offset# + 25))\n    Button(Class: btn btn-primary, Body: Next, Page: AppPage, PageParams:"table_view_offset=#offset_next#")\n}\n')])])]),t("p",[e._v("After adding these buttons, save the page and test it from the Home > Messages menu item.")]),e._v(" "),t("h4",{attrs:{id:"page-refreshing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page-refreshing"}},[e._v("#")]),e._v(" Page refreshing ")]),e._v(" "),t("p",[e._v("The last function to be implemented is to automatically update the table on the page. When users send a new message, it must be displayed in the table.")]),e._v(" "),t("p",[e._v("In addition to implementing the contract, you may also use the Send button to reopen the current page to achieve the same. "),t("code",[e._v("#table_view_offset#")]),e._v(" must be passed to the page without any change.")]),e._v(" "),t("p",[e._v("Add "),t("code",[e._v("Page")]),e._v(" and "),t("code",[e._v("PageParams")]),e._v(" to the Send button, the code is as follows:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Button(Class: btn btn-primary, Body: Send, Contract: AppContract, Params: "Message=Val(message_input)", Page:AppPage, PageParams:"table_view_offset=#table_view_offset#")\n')])])]),t("h3",{attrs:{id:"full-page-code-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-page-code-2"}},[e._v("#")]),e._v(" Full page code ")]),e._v(" "),t("p",[e._v("This part describes many changes to the application page. The following is the full code of the application page.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('If(GetVar(table_view_offset)){\n}.Else{\n    SetVar(table_view_offset, 0)\n}\nDBFind(Name: apptable, Source: src_table).Columns(Columns: "author,timestamp,message").Order(timestamp).Count(record_count).Offset(#table_view_offset#)\n    Div(Class: panel panel-primary) {\n        Div(Class: panel-heading, Body: Table block)\n        Table(Columns: "AUTHOR=author,TIME=timestamp,MESSAGE=message", Source: src_table)\n        Div(Class: panel-footer text-right) {\n            If(#table_view_offset# >= 25) {\n                SetVar(offset_previous, Calculate(#table_view_offset# - 25))\n                Button(Class: btn btn-primary, Body: Previous, Page: AppPage, PageParams:"table_view_offset=#offset_previous#")\n            }\n            If(#record_count# >= Calculate(#table_view_offset# + 25)) {\n                SetVar(offset_next, Calculate(#table_view_offset# + 25))\n                Button(Class: btn btn-primary, Body: Next, Page: AppPage, PageParams:"table_view_offset=#offset_next#")\n            }\n        }\n    }\n    Div(Class: panel panel-primary) {\n    Form() {\n        Input(Name: message_input, Class: form-control, Type: text, Placeholder: "Write a message...", )\n        Button(Class: btn btn-primary, Body: Send, Contract: AppContract, Params: "Message=Val(message_input)", Page:AppPage, PageParams:"table_view_offset=#table_view_offset#")\n    }\n}\n')])])]),t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions ")]),e._v(" "),t("p",[e._v("Instead of expounding other important topics for application developers, such as layout styles, access permissions management and interaction between applications and resources, this tutorial introduces how to create a basic application for an ecosystem. For more information on these advanced topics, see other relevant documents.")])])}),[],!1,null,null,null);t.default=n.exports}}]);