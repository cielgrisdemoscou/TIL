(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{448:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tdd-test-driven-development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tdd-test-driven-development"}},[t._v("#")]),t._v(" TDD; Test-Driven Development")]),t._v(" "),e("p",[t._v("TDD is where you first write a test that fails, and then you write code to make it pass, and then you refactor your code to be as simple as possible.")]),t._v(" "),e("p",[t._v("What is the difference between Unit Test and Test-Driven Development? In Unit Test you write code to test your code. You first write code then you write tests to verify your logic and code that you wrote. But in TDD, you first write tests that fail and then write code to make the tests pass, and then you refactor your code.")]),t._v(" "),e("p",[t._v("Writing automated tests is seen as not real work and boring compared to building new features. TDD, however, turns testing into a design activity. We use our tests to make sure our code is doing what we want it to do. It also keeps code as simple as possible so it’s easier to understand and modify, especially since developers spend more time reading code than writing it.")]),t._v(" "),e("div",{staticClass:"language-swift extra-class"},[e("pre",{pre:!0,attrs:{class:"language-swift"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("XCTest")]),t._v("\n@testable "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" unit_test\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignupFormModelValidatorTests")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("XCTestCase")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUpWithError")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tearDownWithError")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//First, You make the function before making app code")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("testSignFormModelValidator_WhenValidFirstNameProvided_ShouldReturnTrue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Arrange")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sut "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignupFormModelValidator")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Act")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isFirstNameValid "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sut"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFirstNameValid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("firstName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ted"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Write code to make the tests pass")]),t._v("\n        \n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Assert")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("XCTAssertTrue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isFirstNameValid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The isFirstNameValid() Should Have returned TRUE for a valid first name but returned FALSE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Refactor your code to be as simple as possible.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);