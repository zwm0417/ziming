import { defineComponent as r, computed as p, openBlock as s, createElementBlock as u, normalizeClass as a, renderSlot as m, createTextVNode as c } from "vue";
import "./style/index.css";
const f = /* @__PURE__ */ r({
  name: "zm-button",
  __name: "button",
  props: {
    type: {}
  },
  setup(e) {
    const t = e, o = p(() => ({
      [`zm-button--${t.type}`]: t.type
    }));
    return (n, l) => (s(), u("button", {
      class: a(["zm-button", o.value])
    }, [
      m(n.$slots, "default", {}, () => [
        c("测试按钮")
      ])
    ], 2));
  }
});
export {
  f as default
};
