export const text = "## 💡 Web Editor\n[WebEditor](https://git.corp.kuaishou.com/ks-ep/ks-ep-fe/docs/is-docs-markdown-editor) 是一款基于 Web 浏览器，即时渲染的 Markdown 编辑器。它基于 TypeScript 和 JavaScript 打造，并且不依赖任何第三方框架，可以方便的进行扩展并接入到原生 JavaScript、Vue、React、Angular等应用中。如果有需要，它也拥有扩展协同编辑的能力。\n> 提示：通过 `cmd+/` 可以切换源码模式\n### ✨ 中文演示\n!['中文演示图'](https://static.yximgs.com/udata/pkg/IS-DOCS-MD/zengyong/img/demo-zh.gif)\n### ✨ 英文演示\n![英文演示图](https://static.yximgs.com/udata/pkg/IS-DOCS-MD/zengyong/img/demo-en.gif)\n\n### 🛠️ 使用说明\n### CommonJS\n* 安装依赖\n```shell\nnpm install web-editor-markdown --save\n```\n* 在代码中引入并初始化对象\n```ts\nimport QuickEditor from 'quick-editor'\nconst webEitor = new WebEditor(domId, {options...})\n```\n"