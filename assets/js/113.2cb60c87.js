(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{389:function(t,o,s){"use strict";s.r(o);var _=s(14),v=Object(_.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"synchronized-monitoring-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-monitoring-tool"}},[t._v("#")]),t._v(" 실시간 모니터링 도구 ")]),t._v(" "),o("p",[t._v("Desync_monitor는 지정된 노드의 데이터베이스가 동기화되었는지 확인하는 특수 도구입니다.")]),t._v(" "),o("p",[t._v("이 도구는 데몬으로 사용하거나 일회성 검사를 실행하는 데 사용할 수 있습니다.")]),t._v(" "),o("p",[t._v("이 도구의 작동 원리는 다음과 같습니다:")]),t._v(" "),o("blockquote",[o("ol",[o("li",[t._v("각 블록에는 모든 거래의 변경 내용에 대한 해시가 포함되어 있으며, 지정된 노드에 마지막 블록 ID를 요청합니다.")]),t._v(" "),o("li",[t._v("그런 다음 해당 ID를 가진 블록을 모든 노드에서 요청하고 위의 해시를 비교합니다.")]),t._v(" "),o("li",[t._v("해시가 다른 경우, 동기화 오류 메시지가 지정된 이메일 주소로 전송됩니다.")])])]),t._v(" "),o("h2",{attrs:{id:"location"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" 위치 ")]),t._v(" "),o("p",[t._v("이 도구는 "),o("code",[t._v("tools/desync_monitor/")]),t._v("에 위치해 있습니다.")]),t._v(" "),o("h2",{attrs:{id:"command-prompt-flags"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-prompt-flags"}},[t._v("#")]),t._v(" 명령 프롬프트 플래그 ")]),t._v(" "),o("p",[t._v("다음 플래그를 사용하여 명령 프롬프트에서 사용할 수 있습니다:")]),t._v(" "),o("blockquote",[o("ul",[o("li",[o("strong",[t._v("confPath")]),t._v(" -- 구성 파일의 경로입니다. 기본 파일 이름은 "),o("code",[t._v("config.toml")]),t._v("입니다.")]),t._v(" "),o("li",[o("strong",[t._v("nodesList")]),t._v(" -- 블록을 요청할 노드 목록입니다. 쉼표로 구분됩니다. 기본값은 "),o("code",[t._v("127.0.0.1:7079")]),t._v("입니다.")]),t._v(" "),o("li",[o("strong",[t._v("daemonMode")]),t._v(" -- 데몬 모드로 실행하여 N초마다 확인해야 할 경우 사용합니다. 이 플래그는 기본적으로 "),o("code",[t._v("false")]),t._v("로 설정됩니다.")]),t._v(" "),o("li",[o("strong",[t._v("queryingPeriod")]),t._v(" -- 도구를 데몬 모드로 실행할 경우, 확인 간의 시간 간격(초)을 설정합니다. 기본값은 "),o("code",[t._v("1")]),t._v("초입니다.")])])]),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("alertMessageTo")]),t._v(" -- 동기화 경고 오류를 받을 이메일 주소입니다.")]),t._v(" "),o("blockquote",[o("ul",[o("li",[o("strong",[t._v("alertMessageSubj")]),t._v(' -- 경고 메시지의 제목입니다. 기본값은 "노드 동기화 문제"입니다.')]),t._v(" "),o("li",[o("strong",[t._v("alertMessageFrom")]),t._v(" -- 메시지를 보내는 주소입니다.")]),t._v(" "),o("li",[o("strong",[t._v("smtpHost")]),t._v(" -- 이메일을 보내기 위한 SMTP 서버 호스트입니다. 기본값은 "),o("code",[t._v('""')]),t._v("입니다.")]),t._v(" "),o("li",[o("strong",[t._v("smtpPort")]),t._v(" -- 이메일 메시지를 보내기 위한 SMTP 서버 포트입니다. 기본값은 "),o("code",[t._v("25")]),t._v("입니다.")]),t._v(" "),o("li",[o("strong",[t._v("smtpUsername")]),t._v(" -- SMTP 서버 사용자 이름입니다. 기본값은 "),o("code",[t._v('""')]),t._v("입니다.")]),t._v(" "),o("li",[o("strong",[t._v("smtpPassword")]),t._v(" -- SMTP 서버 비밀번호입니다. 기본값은 "),o("code",[t._v('""')]),t._v("입니다.")])])])])]),t._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" 구성 ")]),t._v(" "),o("p",[t._v("이 도구는 toml 형식의 구성 파일을 사용합니다.")]),t._v(" "),o("p",[t._v("기본적으로 실행 파일이 있는 폴더에서 "),o("em",[t._v("config.toml")]),t._v(" 파일을 찾습니다.")]),t._v(" "),o("p",[o("strong",[t._v("configPath")]),t._v(" 플래그를 사용하여 파일 경로를 변경할 수 있습니다.")]),t._v(" "),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('nodes_list = ["http://127.0.0.1:7079", "http://127.0.0.1:7002"]\n\n[daemon]\ndaemon = false\nquerying_period = 1\n\n[alert_message]\nto = ""\nsubject = "problem with xxx nodes"\nfrom = ""\n\n[smtp]\nhost = ""\nport = 25\nusername = ""\npassword = ""\n')])])]),o("h3",{attrs:{id:"nodes-list"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nodes-list"}},[t._v("#")]),t._v(" nodes_list ")]),t._v(" "),o("blockquote",[o("ul",[o("li",[o("strong",[t._v("nodes_list")]),t._v(" -- 요청 정보의 노드(호스트) 목록을 요청합니다.")])])]),t._v(" "),o("h3",{attrs:{id:"daemon"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#daemon"}},[t._v("#")]),t._v(" [daemon] ")]),t._v(" "),o("p",[t._v("데몬 모드 구성.")]),t._v(" "),o("blockquote",[o("ul",[o("li",[o("strong",[t._v("daemon_mode")]),t._v(" -- 도구가 데몬으로 작동하고 동기화 검사를 수행합니다.")]),t._v(" "),o("li",[o("strong",[t._v("querying_period")]),t._v(" -- 동기화 검사 간의 시간 간격.")])])]),t._v(" "),o("h3",{attrs:{id:"alert-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alert-message"}},[t._v("#")]),t._v(" [alert_message] ")]),t._v(" "),o("p",[t._v("경고 메시지 매개변수.")]),t._v(" "),o("blockquote",[o("ul",[o("li",[o("strong",[t._v("to")]),t._v(" -- 동기화 오류 경고 메시지를 받을 수신자 주소;")]),t._v(" "),o("li",[o("strong",[t._v("subject")]),t._v(" -- 메시지 주제;")]),t._v(" "),o("li",[o("strong",[t._v("from")]),t._v(" -- 발신자 주소.")])])]),t._v(" "),o("h3",{attrs:{id:"smtp"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#smtp"}},[t._v("#")]),t._v(" [smtp] ")]),t._v(" "),o("p",[t._v("동기화 오류 메시지를 보내기 위한 (Simple Mail Transfer Protocol SMTP) 서버 매개변수.")]),t._v(" "),o("blockquote",[o("ul",[o("li",[o("strong",[t._v("host")]),t._v(" -- SMTP 서버 호스트;")]),t._v(" "),o("li",[o("strong",[t._v("port")]),t._v(" -- SMTP 서버 포트;")]),t._v(" "),o("li",[o("strong",[t._v("username")]),t._v(" -- SMTP 서버 사용자 이름;")]),t._v(" "),o("li",[o("strong",[t._v("password")]),t._v(" -- SMTP 서버 비밀번호;")])])])])}),[],!1,null,null,null);o.default=v.exports}}]);