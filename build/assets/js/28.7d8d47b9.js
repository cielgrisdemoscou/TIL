(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{390:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git-commit-message-style-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-message-style-guide"}},[e._v("#")]),e._v(" Git Commit Message Style Guide")]),e._v(" "),a("p",[e._v("To create a useful revision history, teams should first agree on a commit message convention to use. This also applies to personal projects.")]),e._v(" "),a("h2",{attrs:{id:"message-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-structure"}},[e._v("#")]),e._v(" Message Structure")]),e._v(" "),a("p",[e._v("A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("type: Subject\n\nbody\n\nfooter\n")])])]),a("p",[e._v("The type is contained within the title and can be one of these types:")]),e._v(" "),a("ul",[a("li",[e._v("feat: A new feature")]),e._v(" "),a("li",[e._v("fix: A bug fix")]),e._v(" "),a("li",[e._v("docs: Changes to documentation")]),e._v(" "),a("li",[e._v("style: Formatting, missing semi colons, etc; no code change")]),e._v(" "),a("li",[e._v("refactor: Refactoring production code")]),e._v(" "),a("li",[e._v("test: Adding tests, refactoring test; no production code change")]),e._v(" "),a("li",[e._v("chore: Updating build tasks, package manager configs, etc; no production code change")])]),e._v(" "),a("h3",{attrs:{id:"subject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[e._v("#")]),e._v(" Subject")]),e._v(" "),a("p",[e._v("Subjects should be no greater than 50 characters, should begin with "),a("code",[e._v("a capital letter")]),e._v(" and do not end with a period.")]),e._v(" "),a("p",[e._v("Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.")]),e._v(" "),a("h3",{attrs:{id:"body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[e._v("#")]),e._v(" Body")]),e._v(" "),a("p",[e._v("Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the what and why of a commit, not the how.")]),e._v(" "),a("p",[e._v("When writing a body, the blank line between the title and the body is required and you should limit the length of each line to no more than 72 characters.")]),e._v(" "),a("h3",{attrs:{id:"footer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#footer"}},[e._v("#")]),e._v(" Footer")]),e._v(" "),a("p",[e._v("The footer is optional and is used to reference issue tracker IDs.")]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("ul",[a("li",[e._v("Commit message with description and breaking change footer")])]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("docs: Edit README.md to include New Features Use-Cases\n")])])]),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("feat: Allow provided config object to extend other configs\n\nBREAKING CHANGE: `extends` key in config file is now used for extending other config files\n")])])]),a("ul",[a("li",[e._v("Commit message with ! to draw attention to breaking change")])]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("refactor!: Drop support for Node 6\n")])])]),a("ul",[a("li",[e._v("Commit message with both ! and BREAKING CHANGE footer")])]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("refactor!: Drop support for Node 6\n\nBREAKING CHANGE: Refactor to use JavaScript features not available in Node 6.\n")])])]),a("ul",[a("li",[e._v("Commit message with no body")])]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("docs: Correct spelling of CHANGELOG\n")])])]),a("ul",[a("li",[e._v("Commit message with scope")])]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("feat(lang): Add polish language\n")])])]),a("ul",[a("li",[e._v("Commit message with multi-paragraph body and multiple footers")])]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("fix: Correct minor typos in code\n\nsee the issue for details\n\non typos fixed.\n\nReviewed-by: Z\nRefs #133\n")])])]),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://udacity.github.io/git-styleguide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Udacity Git Commit Message Style Guide"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Write Good Commit Messages: A Practical Git Guide"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://joshuatauberer.medium.com/write-joyous-git-commit-messages-2f98891114c4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Write joyous git commit messages"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.conventionalcommits.org/en/v1.0.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Conventional Commits"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);