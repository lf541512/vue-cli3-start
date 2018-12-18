# hello

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

"function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("img", {
        attrs: { alt: "Vue logo", src: __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png") }
      }),
      _c("v-select"),
      _c("HOCPresentationComponent", {
        staticClass: "hoc-wrapper",
        attrs: { test: 100 },
        on: { "item-click": _vm.handleClick }
      }),
      _vm._v("\n    default slot\n   "),
      _c("div", { attrs: { slot: "slot1" }, slot: "slot1" }, [_vm._v("slot1")])
    ],
    1
  )
}"