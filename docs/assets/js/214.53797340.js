(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{285:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"styled-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styled-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Styled-components")]),a("h2",{attrs:{id:"간단-예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#간단-예제","aria-hidden":"true"}},[t._v("#")]),t._v(" 간단 예제")]),a("p",[t._v("reusable "),a("code",[t._v("<Button />")]),t._v(" component 만들기")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" styled"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" css "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'styled-components'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Button "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("button"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("``")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 이게 React Component된다.")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Button2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("button"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n    background: transparent;\n    border-radius: 3px;\n`")])]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Button3 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("button"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n    background: red;\n\n    // 함수로 props를 받을 수 있음.\n    ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("props "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        props"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("primary "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n        css"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n            background: blue;\n        `")])]),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(";\n`")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Styled components는 render밖에 만들어라")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Button3"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Normal Button"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Button3 primary"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Primary Button"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics","aria-hidden":"true"}},[t._v("#")]),t._v(" Basics")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Title "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h1"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n    font-size: 1.5em;\n    color: ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("props "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" props"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("primary "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"white"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"red"')]),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(";\n`")])]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Wrapper "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" styled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("section"),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n    padding: 4em;\n`")])]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" TitleExtended "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("styled")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Title"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n    color: blue;\n`")])]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Wrapper"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Title primary"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Hi"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Title"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Wrapper"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"styling-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styling-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Styling components")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("Link")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("className"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("a className"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("className"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("children"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" StyledLink "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("styled")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Link"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`\n    color: red;\n`")])]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Link"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Default link"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Link"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("StyledLink"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Styled link"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("StyledLink"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"coming-from-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coming-from-css","aria-hidden":"true"}},[t._v("#")]),t._v(" Coming from CSS")]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" styles "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./styles.css'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 모듈로 불러오는 방식")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Counter")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("render")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("div className"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("styles"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("counter"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("button className"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("styles"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("button"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" \n")])])]),a("h2",{attrs:{id:"refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refer","aria-hidden":"true"}},[t._v("#")]),t._v(" Refer")]),a("ul",[a("li",[t._v("https://www.styled-components.com/")])])])}],!1,null,null,null);s.default=o.exports}}]);