(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{432:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"swift-type-property"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swift-type-property"}},[t._v("#")]),t._v(" [Swift] Type Property")]),t._v(" "),a("p",[t._v("Instance Property: 특정 Instance에 속한 Property를 말한다. 이 Property는 새로운 Instance가\n생성 될 때마다 새로운 Property도 같이 생성된다.")]),t._v(" "),a("p",[t._v("Type Property: 특정 타입에 속한 Property로 그 타입에 해당하는 단 하나의 Property만 생성된다.\n이 타입 프로퍼티는 특정 타입의 모든 인스턴스에 공통으로 사용되는 값을 정의할때 유용하다.")]),t._v(" "),a("p",[t._v("타입 프로퍼티를 선언을 위해서는 "),a("code",[t._v("static")]),t._v(" 키워드를 사용한다.")]),t._v(" "),a("p",[t._v("static 키워드를 사용한 변수는 클래스가 메모리에 올라갈 때 자동으로 생성이 된다. 즉, 인스턴스(객체) 생성 없이 바로 사용가능 하다.\n그러므로, 객체를 생성하지 않아도 되니까 편리하고 속도도 빠르다.")]),t._v(" "),a("p",[t._v("하지만 클래스에서는 "),a("code",[t._v("static")]),t._v("과 "),a("code",[t._v("class")]),t._v(" 이렇게 2가지 형태로 타입 프로퍼티를 선언할 수 있는데\n두 가지 경우의 차이는 class로 선언된 프로퍼트는 서브클래스에서 오버라이드 가능.")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AudioChannel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" threholdlevel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" maxInputLevelForAllChannels "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" currentLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("didSet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" currentLevel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AudioChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thresholdLevel "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                currentLevel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AudioChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thresholdLevel\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" currentLevel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AudioChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxInputLevelForAllChannels "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("AudioChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxInputLevelForAllChannels "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentLevel\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("인스턴스 프로퍼티는 인스턴스 생성할 때마다 초깃값에 해당하는 값이 프로퍼티의 값이 되고,\n인스턴스 마다 다른 값을 지닐 수 있다.")]),t._v(" "),a("p",[t._v("하지만 타입 프로퍼티는 인스턴스의 생성 여부와 상관없이 타입 프로퍼티 자체로 값은 하나이며,\n그 타입의 모든 인스턴스가 공통으로 사용한다.")]),t._v(" "),a("p",[t._v("자주 변하지 않는 일정한 값이나 설정 정보같은 공용자원에 대한 접근에 있어서 매번 메모리에 로딩하거나 값을 읽어들이는 것보다 일종의 '전역변수'와 같은 개념을 통해서 접근하는 것이 비용도 줄이고 효율을 높일 수있다.")]),t._v(" "),a("p",[t._v("즉, "),a("code",[t._v("모든 인스턴스에서 공용으로 접근하고 값을 병경한 변수를 정의할 떄 아주 유용하므로, 이것이 타입 프로퍼티를 사용하는 핵심 이유")])])])}),[],!1,null,null,null);s.default=e.exports}}]);