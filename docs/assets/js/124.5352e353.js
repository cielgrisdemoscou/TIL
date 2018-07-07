(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{254:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("자바스크립트로 서버 애플리케이션을 구현할 수 있게 해주는 서버 플랫폼.")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),s("p",[t._v("mongodb는 직접 heroku에 설치하지 않고,  mongodb를 제공해주는 saas 서비스인 mongolab 에서 db를 free 버전으로 만든다음에 heroku랑 연동을 하면 돈을 들지 않고 여러분만의 간단한 서비스를 만들수 있습니다. -> 부하가 많지 않다는 전제하에.")]),s("p",[t._v("https://mongolab.com/\nnode.js + heroku + mongolab + (웹 페이지가 필요할 경우 jade 추가)\n참고하세요!!")]),t._m(11),s("p",[t._v("http://stackoverflow.com/questions/12369390/bower-command-not-found\n1시간 삽질\n"),s("a",{attrs:{href:"http://stackoverflow.com/questions/18940333/how-to-install-grunt",target:"_blank",rel:"noopener noreferrer"}},[t._v("grunt 버젼"),s("OutboundLink")],1)]),t._m(12),s("p",[t._v("https://www.npmjs.com/package/concat")]),t._m(13),s("p",[s("a",{attrs:{href:"http://www.nextree.co.kr/p8574/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js: Hello로 시작하는 Web 애플리케이션"),s("OutboundLink")],1),s("a",{attrs:{href:"http://www.nodebeginner.org/index-kr.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Node Beginner Book"),s("OutboundLink")],1),s("a",{attrs:{href:"http://blog.doortts.com/207",target:"_blank",rel:"noopener noreferrer"}},[t._v("making nodepad"),s("OutboundLink")],1),t._v("\n[AngularJS Tutorial for Beginners With NodeJS ExpressJS and MongoDB (Part I)](AngularJS Tutorial for Beginners With NodeJS ExpressJS and MongoDB (Part I))\n"),s("a",{attrs:{href:"https://speakerdeck.com/leewin12/rest-api-seolgye",target:"_blank",rel:"noopener noreferrer"}},[t._v("REST API 설계"),s("OutboundLink")],1),s("a",{attrs:{href:"https://thinkster.io/mean-stack-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MEAN Stack Tutorial"),s("OutboundLink")],1),s("a",{attrs:{href:"http://mean.io/#!/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MEAN.io"),s("OutboundLink")],1),s("a",{attrs:{href:"http://mobicon.tistory.com/384",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mean stack 소개"),s("OutboundLink")],1),s("a",{attrs:{href:"http://nodeqa.com/nodejs_ref/65",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs runtime에서 지켜야할 필수 조건들"),s("OutboundLink")],1),s("a",{attrs:{href:"http://blog.outsider.ne.kr/588",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js 템플릿엔진 jade"),s("OutboundLink")],1),s("a",{attrs:{href:"https://github.com/jadejs/jade",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jade"),s("OutboundLink")],1),s("a",{attrs:{href:"http://uiandwe.tistory.com/964",target:"_blank",rel:"noopener noreferrer"}},[t._v("jade 간단예제"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"nodejs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs","aria-hidden":"true"}},[this._v("#")]),this._v(" nodejs")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"간단한-시나리오"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#간단한-시나리오","aria-hidden":"true"}},[this._v("#")]),this._v(" 간단한 시나리오")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ol",[n("li",[this._v("사용자: 조회를 위한 요청을 보냄 -> 서버: 결과를 응답")]),n("li",[this._v("사용자: 데이터 생성/저장 요청 -> 서버: 데이터 받고 처리")]),n("li",[this._v("모든 요청이나 응답은 HTTP 프로토콜을 사용.")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"http"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//내장되어 있는 http모듈 사용")]),t._v("\n\nhttp"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createServer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token comment"}},[t._v("//서버 인스턴스 생성:http모듈의 createServer함수 사용")]),t._v("\n  response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("writeHead")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token string"}},[t._v('"Content-Type"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"text/plain"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("write")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("end")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("listen")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("8888")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("파일 저장하고 "),n("code",[this._v("nodejs server.js")]),this._v("친 다음에 "),n("code",[this._v("localhost:8888")]),this._v('들어가보면 "Hello World"')]),n("li",[this._v("서버 인스턴스의 listen()함수는 http서버를 시작하게 하며 여기서 사용자의 요청을 받도록 대기.")]),n("li",[this._v("이 서버는 클라의 요청에 응답하기 위하여 Callback함수가 등록되었고 response객체로 응답하게 됨.")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'http'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onRequest")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("writeHead")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("write")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("end")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createServer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onRequest"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("listen")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("8888")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("위 코드를 "),n("code",[this._v("기명 함수")]),this._v("로 변경한 것")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'http'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createServer")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'request'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'requested...'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("writeHead")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("200")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("write")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'Hello nodejs'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    response"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("end")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'connection'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'connected...'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("listen")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("8888")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("addListener()로 등록")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"nodejs-on-heroku"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-on-heroku","aria-hidden":"true"}},[this._v("#")]),this._v(" nodejs on heroku")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("https://devcenter.heroku.com/articles/deploying-nodejs"),n("br"),this._v("\nheroku 라는 클라우드 서비스가 있습니다 amazon과 달리 git 명령으로 push해서 배포하는 서비스로,\nnode.js 로 서버를 만들수 있습니다.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"zsh-bower-install에서-command-not-found나오면"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zsh-bower-install에서-command-not-found나오면","aria-hidden":"true"}},[this._v("#")]),this._v(" zsh bower install에서 command not found나오면?")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"여러-파일-하나로-합치기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#여러-파일-하나로-합치기","aria-hidden":"true"}},[this._v("#")]),this._v(" 여러 파일 하나로 합치기")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[this._v("#")]),this._v(" reference")])}],!1,null,null,null);n.default=e.exports}}]);