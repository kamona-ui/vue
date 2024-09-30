import { defineComponent as u, createVNode as a, Transition as te, mergeProps as c, toRefs as Se, Fragment as I, ref as ae, withDirectives as ze, vModelCheckbox as Be, onMounted as Me, isVNode as Te, computed as R } from "vue";
import { Icon as b } from "@iconify/vue";
import _e from "flatpickr";
import { TransitionRoot as re, Dialog as le, TransitionChild as T, DialogOverlay as ne, DialogTitle as Ve, Menu as je, MenuButton as Ie, MenuItems as Oe, MenuItem as Pe } from "@headlessui/vue";
import Ke, { useToast as qe } from "vue-toastification";
const _ = ["sm", "base", "lg"], M = ["square", "rounded", "pill", "circle"], ie = [
  "primary",
  "success",
  "info",
  "warning",
  "danger",
  "white",
  "black"
], De = ["tr", "tl", "br", "bl"], S = ({ defaultSizes: e = "base", sizes: t = _ } = {}) => ({
  type: String,
  default: e,
  validator(r) {
    return t.includes(r);
  }
}), k = ({ defaultShape: e = "rounded", shapes: t = M } = {}) => ({
  type: String,
  default: e,
  validator(r) {
    return t.includes(r);
  }
}), se = ({
  defaultShape: e = "tr",
  positions: t = De
} = {}) => ({
  type: String,
  default: e,
  validator(r) {
    return t.includes(r);
  }
}), C = ({
  defaultVariant: e = "primary",
  variants: t = ie
} = {}) => ({
  type: String,
  default: e,
  validator(r) {
    return t.includes(r);
  }
}), Ae = /* @__PURE__ */ u({
  props: {
    variant: C({
      defaultVariant: "success",
      variants: ["success", "danger"]
    }),
    avatarShape: k({
      defaultShape: "circle"
    }),
    shape: k({
      defaultShape: "circle"
    }),
    avatarSize: S({
      sizes: ["xs", ..._, "xl", "2xl"]
    }),
    position: se(),
    bordered: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = {
      success: "bg-green-500",
      danger: "bg-red-500"
    }, r = {
      square: "rounded-none",
      rounded: "rounded-md",
      circle: "rounded-full"
    }, l = {
      tr: "justify-end items-start",
      tl: "justify-start items-start",
      br: "justify-end items-end",
      bl: "justify-start items-end"
    }, s = {
      tr: {
        default: "*:-m-2",
        circle: {
          xs: "*:-m-2",
          sm: "*:-m-1",
          base: "*:-m-0.5",
          lg: "*:-m-0.5",
          xl: "*:m-0.5",
          "2xl": "*:m-2.5"
        }
      },
      tl: {
        default: "*:-m-2",
        circle: {
          xs: "*:-m-2",
          sm: "*:-m-1",
          base: "*:-m-0.5",
          lg: "*:-m-0.5",
          xl: "*:m-0.5",
          "2xl": "*:m-2.5"
        }
      },
      br: {
        default: "*:-m-2",
        circle: {
          xs: "*:-m-2",
          sm: "*:-m-1",
          base: "*:-m-0.5",
          lg: "*:-m-0.5",
          xl: "*:m-0.5",
          "2xl": "*:m-2.5"
        }
      },
      bl: {
        default: "*:-m-2",
        circle: {
          xs: "*:-m-2",
          sm: "*:-m-1",
          base: "*:-m-0.5",
          lg: "*:-m-0.5",
          xl: "*:m-0.5",
          "2xl": "*:m-2.5"
        }
      }
    };
    return () => {
      var n, d, i;
      return a("div", {
        class: ["col-[1/1] row-[1/1]", "flex", l[e.position], e.avatarShape == "circle" ? (d = (n = s[e.position]) == null ? void 0 : n.circle) == null ? void 0 : d[e.avatarSize] : (i = s[e.position]) == null ? void 0 : i.default]
      }, [a("div", {
        class: ["w-4 h-4", "ring ring-white dark:ring-dark-eval-0", t[e.variant], r[e.shape]]
      }, null)]);
    };
  }
}), Fe = /* @__PURE__ */ u({
  props: {
    variant: C(),
    size: S({
      sizes: ["xs", ..._, "xl", "2xl"]
    }),
    shape: k({
      shapes: M.filter((e) => e != "pill")
    }),
    src: String,
    alt: String,
    status: {
      type: Boolean,
      default: !1
    },
    statusVariant: C({
      defaultVariant: "success",
      variants: ["success", "danger"]
    }),
    statusPosition: se(),
    statusShape: k({
      defaultShape: "circle",
      shapes: M.filter((e) => e != "pill")
    }),
    bordered: {
      type: Boolean,
      default: !1
    },
    ringColorClass: {
      type: String,
      default: "ring-primary"
    },
    placeholder: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: "tabler:user"
    }
  },
  setup(e) {
    const t = {
      "rounded-md": e.shape == "rounded",
      "rounded-full": e.shape == "circle",
      "rounded-none": e.shape == "square"
    }, r = {
      "w-6 h-6": e.size == "xs",
      "w-10 h-10": e.size == "sm",
      "w-14 h-14": e.size == "base",
      "w-16 h-16": e.size == "lg",
      "w-20 h-20": e.size == "xl",
      "w-36 h-36": e.size == "2xl"
    }, l = {
      primary: "ring-primary",
      success: "ring-green-500",
      info: "ring-cyan-500",
      warning: "ring-yellow-500",
      danger: "ring-red-500",
      white: "ring-white",
      black: "ring-black"
    };
    return () => a("div", {
      class: ["grid aspect-square max-w-max", r, t, {
        "bg-gray-200 dark:bg-gray-800": !e.src,
        "ring ring-offset-2 dark:ring-offset-dark-eval-0": e.bordered,
        [l[e.variant]]: e.bordered
      }]
    }, [a("div", {
      class: ["col-[1/1] row-[1/1]"]
    }, [e.src ? a("img", {
      class: ["object-fit", "w-full h-full", t],
      src: e.src,
      alt: e.alt
    }, null) : a(b, {
      icon: e.icon,
      class: ["w-full h-full dark:text-gray-200", r]
    }, null)]), e.status && a(Ae, {
      "avatar-shape": e.shape,
      shape: e.statusShape,
      "avatar-size": e.size,
      position: e.statusPosition,
      variant: e.statusVariant
    }, null)]);
  }
}), oe = /* @__PURE__ */ u({
  props: {
    variant: {
      type: String,
      default: "danger",
      validator: (e) => ["success", "warning", "danger"].includes(e)
    },
    shape: {
      type: String,
      default: "circle",
      validator: (e) => ["circle", "square", "rounded"].includes(e)
    },
    position: {
      type: String,
      default: "tr",
      validator: (e) => ["tr", "tl", "br", "bl"].includes(e)
    },
    clickable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, {
    slots: t,
    emit: r
  }) {
    const l = {
      success: "bg-green-500",
      warning: "bg-yellow-500",
      danger: "bg-red-500"
    }, s = {
      circle: "rounded-full",
      square: "rounded-none",
      rounded: "rounded-md"
    }, n = {
      tr: "-top-2 -right-2",
      tl: "-top-2 -left-2",
      br: "-bottom-2 -right-2",
      bl: "-bottom-2 -left-2"
    }, d = [t.default && "text-white text-xs w-auto h-6 min-w-6 items-center justify-center leading-6", !t.default && "p-1 w-1 h-1"], i = (o) => {
      e.clickable && (o.preventDefault(), r("click", o));
    };
    return () => {
      var o;
      return a("div", {
        class: ["inline-flex", ...d, l[e.variant], s[e.shape], n[e.position], e.clickable && "cursor-pointer"],
        onClick: i
      }, [(o = t.default) == null ? void 0 : o.call(t)]);
    };
  }
}), $e = /* @__PURE__ */ u({
  props: {
    shape: {
      type: String,
      default: "circle"
    },
    count: {
      type: Number,
      default: 0
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    showZero: {
      type: Boolean,
      default: !1
    },
    clickable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t,
    attrs: r
  }) {
    return () => {
      var l;
      return a("div", {
        class: "relative max-w-max"
      }, [a(te, {
        enterActiveClass: "transition-all transform duration-300",
        enterFromClass: "opacity-20 scale-95 translate-y-2",
        enterToClass: "opacity-100 scale-100 translate-y-0",
        leaveActiveClass: "transition-all transform duration-300",
        leaveFromClass: "opacity-100 scale-100 translate-y-0",
        leaveToClass: "opacity-20 scale-95 -translate-y-2"
      }, {
        default: () => [(e.count >= 1 || e.showZero) && a(oe, c({
          clickable: e.clickable,
          class: "absolute"
        }, r), {
          default: () => [e.count <= e.overflowCount ? e.count : `+${e.overflowCount}`]
        })]
      }), (l = t.default) == null ? void 0 : l.call(t)]);
    };
  }
}), Le = ["inline-flex", "items-center", "justify-center", "gap-2", "transition", "duration-300", "ease-in-out", "min-w-max", "font-medium", "select-none", "disabled:opacity-50", "disabled:cursor-not-allowed", "focus:outline-none", "focus:z-10", "focus:ring"], B = {
  primary: {
    default: "focus:ring-primary",
    filled: {
      normal: "bg-primary text-white hover:bg-primary-dark",
      active: "bg-primary-600"
    },
    outline: {
      normal: "border border-primary text-primary hover:bg-primary-light hover:text-white",
      active: ""
    }
  },
  success: {
    default: "focus:ring-green-500",
    filled: {
      normal: "bg-green-500 text-white hover:bg-green-600",
      active: ""
    },
    outline: {
      normal: "border border-green-500 text-green-500 hover:bg-green-400 hover:text-white",
      active: ""
    }
  },
  info: {
    default: "focus:ring-cyan-500",
    filled: {
      normal: "bg-cyan-500 text-white hover:bg-cyan-600",
      active: ""
    },
    outline: {
      normal: "border border-cyan-500 text-cyan-500 hover:bg-cyan-400 hover:text-white",
      active: ""
    }
  },
  warning: {
    default: "focus:ring-yellow-500",
    filled: {
      normal: "bg-yellow-500 text-white hover:bg-yellow-600",
      active: ""
    },
    outline: {
      normal: "border border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:text-white",
      active: ""
    }
  },
  danger: {
    default: "focus:ring-red-500",
    filled: {
      normal: "bg-red-500 text-white hover:bg-red-600",
      active: ""
    },
    outline: {
      normal: "border border-red-500 text-red-500 hover:bg-red-400 hover:text-white",
      active: ""
    }
  },
  white: {
    default: "focus:ring-white",
    filled: {
      normal: "bg-white text-gray-700 hover:bg-gray-200"
    },
    outline: {
      normal: "border border-white text-white hover:bg-white hover:text-gray-800"
    }
  },
  black: {
    default: "focus:ring-black",
    filled: {
      normal: "bg-black text-gray-300 hover:text-white hover:bg-gray-800",
      active: ""
    },
    outline: {
      normal: "border border-black text-black hover:bg-black hover:text-white",
      active: ""
    }
  },
  link: {
    default: "focus:ring-blue-500 underline text-blue-600 hover:text-blue-500",
    filled: {
      normal: "",
      active: ""
    },
    outline: {
      normal: "border border-blue-500",
      active: ""
    }
  },
  transparent: {
    default: "focus:ring-primary text-gray-700 dark:text-gray-300",
    filled: {
      normal: "hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-dark-eval-1",
      active: ""
    },
    outline: {
      normal: "hover:text-gray-800",
      active: ""
    }
  }
}, Ne = ["focus:ring-offset-2"], Ee = ["focus:outline-none", "focus:ring"], ue = {
  variant: C({
    variants: [...ie, "link", "transparent"]
  }),
  size: S({
    sizes: ["xs", ..._]
  }),
  shape: k({
    shapes: M.filter((e) => e != "circle")
  }),
  outline: {
    type: Boolean,
    default: !1
  }
}, O = /* @__PURE__ */ u({
  props: {
    ...ue,
    as: {
      // type: [String, Object],
      required: !1,
      default: "a"
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String
    },
    type: {
      type: String,
      default: "submit"
    },
    srText: {
      type: String || void 0,
      default: void 0
    },
    text: {
      type: String || void 0,
      default: void 0
    },
    external: {
      type: Boolean,
      default: !1
    },
    block: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String || void 0,
      default: void 0
    },
    startIcon: {
      type: String || void 0,
      default: void 0
    },
    endIcon: {
      type: String || void 0,
      default: void 0
    },
    ringOffsetColorClass: {
      type: String,
      default: "focus:ring-offset-white dark:focus:ring-offset-dark-eval-2"
    },
    slim: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, {
    slots: t,
    emit: r,
    attrs: l
  }) {
    var D, A, F, $, L, N, E, G, H;
    const {
      type: s,
      size: n,
      href: d,
      srText: i,
      external: o,
      outline: f,
      block: x,
      startIcon: g,
      endIcon: h,
      ringOffsetColorClass: xe,
      slim: we,
      shape: V
    } = e, {
      disabled: w,
      icon: z,
      text: K
    } = Se(e), q = [...Le, (D = B[e.variant]) == null ? void 0 : D.default, f ? e.active ? (F = (A = B[e.variant]) == null ? void 0 : A.outline) == null ? void 0 : F.active : (L = ($ = B[e.variant]) == null ? void 0 : $.outline) == null ? void 0 : L.normal : e.active ? (E = (N = B[e.variant]) == null ? void 0 : N.filled) == null ? void 0 : E.active : (H = (G = B[e.variant]) == null ? void 0 : G.filled) == null ? void 0 : H.normal, ...Ee, xe, Ne, x ? "w-full" : null, we ? null : z.value ? {
      "p-1": n == "xs",
      "p-1.5": n == "sm",
      "p-2": n == "base",
      "p-3": n == "lg"
    } : {
      "px-2 py-1 text-xs": n == "xs",
      "px-2.5 py-1.5 text-sm": n == "sm",
      "px-4 py-2 text-base": n == "base",
      "px-5 py-2 text-xl": n == "lg"
    }, {
      "rounded-none": V == "square",
      "rounded-md": V == "rounded",
      "rounded-full": V == "pill"
    }, {
      "pointer-events-none opacity-50": (d || e.to) && w.value
    }], v = [{
      "w-4 h-4": n == "xs",
      "w-5 h-5": n == "sm",
      "w-6 h-6": n == "base",
      "w-7 h-7": n == "lg"
    }], ke = (y) => {
      if (w.value) {
        y.preventDefault(), y.stopPropagation();
        return;
      }
      r("click", y);
    }, Ce = e.as;
    return d || e.to ? () => a(Ce, c({
      href: w.value ? null : d,
      to: w.value ? null : e.to,
      class: q,
      "aria-disabled": w.value.toString(),
      target: o ? "_blank" : null
    }, l), {
      default: () => {
        var y;
        return [i && a("span", {
          class: "sr-only"
        }, [i]), z.value && !t.default && a(b, {
          icon: z.value,
          class: v
        }, null), g && a(b, {
          icon: g,
          class: v
        }, null), K.value ?? ((y = t.default) == null ? void 0 : y.call(t, {
          iconSizeClasses: v
        })), h && a(b, {
          icon: h,
          class: v
        }, null)];
      }
    }) : () => {
      var y;
      return a("button", c({
        type: s,
        onClick: ke,
        class: q,
        disabled: w.value
      }, l), [i && a("span", {
        class: "sr-only"
      }, [i]), z.value && !t.default && a(b, {
        icon: z.value,
        class: v
      }, null), g && a(b, {
        icon: g,
        class: v
      }, null), K.value ?? ((y = t.default) == null ? void 0 : y.call(t, {
        iconSizeClasses: v
      })), h && a(b, {
        icon: h,
        class: v
      }, null)]);
    };
  }
}), Ge = ["*:inline-flex", "*:items-center", "*:transition", "*:font-semibold", "*:select-none", "disabled:*:opacity-50", "disabled:*:cursor-not-allowed", "focus:*:outline-none", "focus:*:z-10"], He = ["focus:*:outline-none", "focus:*:ring-1", "focus:*:z-10", "focus:*:ring-offset-1", "dark:focus:*:dark:ring-offset-gray-800"], Re = "first:*:border-s first:*:border-e *:border-e *:border-t *:border-b", j = {
  primary: {
    default: "focus:*:ring-primary-dark hover:*:bg-primary-light",
    filled: {
      normal: "*:bg-primary *:text-white *:border-primary-dark",
      active: ""
    },
    outline: {
      normal: "*:border-primary *:text-primary hover:*:text-white",
      active: ""
    }
  },
  success: {
    default: "focus:*:ring-green-600 hover:*:bg-green-400",
    filled: {
      normal: "*:bg-green-500 *:text-white *:border-green-600",
      active: ""
    },
    outline: {
      normal: "*:border-green-500 *:text-green-500 hover:*:text-white",
      active: ""
    }
  },
  info: {
    default: "focus:*:ring-cyan-600 hover:*:bg-cyan-400",
    filled: {
      normal: "*:bg-cyan-500 *:text-white *:border-cyan-600",
      active: ""
    },
    outline: {
      normal: "*:border-cyan-500 *:text-cyan-500 hover:*:text-white",
      active: ""
    }
  },
  warning: {
    default: "focus:*:ring-yellow-600 hover:*:bg-yellow-400",
    filled: {
      normal: "*:bg-yellow-500 *:text-white *:border-yellow-600",
      active: ""
    },
    outline: {
      normal: "*:border-yellow-500 *:text-yellow-500 hover:*:text-white",
      active: ""
    }
  },
  danger: {
    default: "focus:*:ring-red-600 hover:*:bg-red-400",
    filled: {
      normal: "*:bg-red-500 *:text-white *:border-red-600",
      active: ""
    },
    outline: {
      normal: "*:border-red-500 *:text-red-500 hover:*:text-white",
      active: ""
    }
  },
  white: {
    default: "focus:*:ring-white",
    filled: {
      normal: "*:bg-white *:text-gray-800 hover:*:bg-gray-200",
      active: ""
    },
    outline: {
      normal: "*:border-white *:text-white hover:*:bg-white hover:*:text-gray-800",
      active: ""
    }
  },
  black: {
    default: "focus:*:ring-black hover:*:bg-gray-800",
    filled: {
      normal: "*:bg-black *:text-gray-300 *:border-black",
      active: ""
    },
    outline: {
      normal: "*:border-black *:text-black hover:*:text-white",
      active: ""
    }
  },
  link: {
    // default: 'focus:*:ring-red-600 hover:*:bg-red-400',
    // filled: '*:bg-red-500 *:text-white *:border-red-600',
    // outline: '*:border-red-500 *:text-red-500 hover:*:text-white',
    default: "focus:*:ring-blue-500 *:underline *:text-blue-600 hover:*:text-blue-500",
    filled: {
      normal: "*:border-blue-500",
      active: ""
    },
    outline: {
      normal: "*:border-blue-500",
      active: ""
    }
  }
}, W = {
  sm: {
    default: "*:px-2.5 *:py-1.5 *:text-sm",
    iconOnly: "*:p-1.5"
  },
  base: {
    default: "*:px-4 *:py-2 *:text-base",
    iconOnly: "p-2"
  },
  lg: {
    default: "*:px-5 *:py-2 *:text-xl",
    iconOnly: "*:p-3"
  }
}, We = /* @__PURE__ */ u({
  props: {
    ...ue,
    iconOnly: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, {
    slots: t
  }) {
    var i, o, f, x, g;
    const {
      size: r,
      iconOnly: l
    } = e, s = (i = j[e.variant]) == null ? void 0 : i.default, n = e.outline ? (f = (o = j[e.variant]) == null ? void 0 : o.outline) == null ? void 0 : f.normal : (g = (x = j[e.variant]) == null ? void 0 : x.filled) == null ? void 0 : g.normal, d = [...Ge, {
      "first:*:rounded-s-lg last:*:rounded-e-lg": e.shape == "rounded",
      "first:*:rounded-s-full last:*:rounded-e-full": e.shape == "pill"
    }, s, n, He, {
      "focus:*:ring": !e.outline,
      "focus:*:ring-inset": e.outline
    }, Re, l ? W[r].iconOnly : W[r].default];
    return () => {
      var h;
      return a("div", {
        class: ["inline-flex items-stretch", ...d]
      }, [(h = t.default) == null ? void 0 : h.call(t)]);
    };
  }
}), P = /* @__PURE__ */ u({
  props: {
    value: String
  },
  setup(e, {
    slots: t
  }) {
    return () => {
      var r;
      return a("label", {
        class: [!t.default && "block", "text-sm font-medium text-gray-700 dark:text-gray-300"]
      }, [e.value ? a("span", null, [e.value]) : (r = t.default) == null ? void 0 : r.call(t)]);
    };
  }
}), Z = ["w-full", "focus:ring", "focus:ring-offset-2", "focus:ring-offset-white", "dark:bg-dark-eval-1", "dark:text-gray-300", "dark:focus:ring-offset-dark-eval-1"], U = {
  sm: "py-1 text-sm",
  base: "py-2 text-base",
  lg: "py-4 text-xl"
}, J = {
  primary: "border-gray-400 focus:ring-primary focus:border-primary dark:border-gray-600",
  success: "border-green-400 focus:ring-green-500 focus:border-green-500 dark:border-green-600",
  info: "border-cyan-400 focus:ring-cyan-500 focus:border-cyan-500 dark:border-gray-600",
  warning: "border-yellow-400 focus:ring-yellow-500 focus:border-yellow-500 dark:border-gray-600",
  danger: "border-red-400 focus:ring-red-500 focus:border-red-500 dark:border-gray-600",
  black: "border-black focus:ring-black focus:border-black dark:border-gray-600"
}, de = {
  variant: C({}),
  size: S(),
  shape: k({
    shapes: M.filter((e) => e != "circle")
  })
}, Q = /* @__PURE__ */ u({
  props: {
    ...de,
    modelValue: String,
    icon: {
      type: [String, void 0],
      default: void 0
    },
    type: {
      type: String,
      default: "text"
    },
    hasError: {
      type: Boolean,
      default: !1
    },
    rows: {
      type: String,
      default: "6"
    }
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    attrs: r
  }) {
    return e.type == "textarea" ? () => a("textarea", c(r, {
      type: e.type,
      rows: e.rows,
      class: [...Z, J[e.variant], e.icon ? {
        // 'ps-8 pe-2': props.size == 'sm',
        // 'ps-10 pe-4': props.size == 'base',
        // 'ps-12 pe-6': props.size == 'lg',
        "pl-8 pr-2 rtl:pl-2 rtl:pr-8": e.size == "sm",
        "pl-10 pr-4 rtl:pl-4 rtl:pr-10": e.size == "base",
        "pl-12 pr-6 rtl:pl-6 rtl:pr-12": e.size == "lg"
      } : {
        "px-2": e.size == "sm",
        "px-4": e.size == "base",
        "px-6": e.size == "lg"
      }, U[e.size], {
        "rounded-none": e.shape == "square",
        "rounded-md": e.shape == "rounded",
        "rounded-full": e.shape == "pill"
      }],
      value: e.modelValue,
      onInput: (l) => {
        t("update:modelValue", l.target.value);
      }
    }), null) : () => a("input", c(r, {
      type: e.type,
      class: [...Z, J[e.variant], e.icon ? {
        // 'ps-8 pe-2': props.size == 'sm',
        // 'ps-10 pe-4': props.size == 'base',
        // 'ps-12 pe-6': props.size == 'lg',
        "pl-8 pr-2 rtl:pl-2 rtl:pr-8": e.size == "sm",
        "pl-10 pr-4 rtl:pl-4 rtl:pr-10": e.size == "base",
        "pl-12 pr-6 rtl:pl-6 rtl:pr-12": e.size == "lg"
      } : {
        "px-2": e.size == "sm",
        "px-4": e.size == "base",
        "px-6": e.size == "lg"
      }, U[e.size], {
        "rounded-none": e.shape == "square",
        "rounded-md": e.shape == "rounded",
        "rounded-full": e.shape == "pill"
      }],
      value: e.modelValue,
      onInput: (l) => {
        t("update:modelValue", l.target.value);
      }
    }), null);
  }
}), ce = /* @__PURE__ */ u({
  props: {
    message: String
  },
  setup(e, {
    attrs: t
  }) {
    return () => a(I, null, [e.message && a("p", c(t, {
      class: "text-sm text-gray-600 dark:text-gray-300"
    }), [e.message])]);
  }
}), X = /* @__PURE__ */ u({
  props: {
    message: String
  },
  setup(e) {
    return () => a(I, null, [e.message && a("p", {
      class: "text-sm text-red-600"
    }, [e.message])]);
  }
}), Y = /* @__PURE__ */ u({
  props: {
    label: {
      type: [String, void 0],
      default: void 0
    },
    helperMessage: {
      type: [String, void 0],
      default: void 0
    }
  },
  setup(e) {
    return () => a("div", {
      class: ["w-full flex items-center gap-2", e.label ? "justify-between" : "justify-end"]
    }, [e.label && a(P, {
      value: e.label
    }, null), e.helperMessage && a(ce, {
      message: e.helperMessage
    }, null)]);
  }
}), Ze = /* @__PURE__ */ u({
  props: {
    size: S(),
    type: {
      type: String,
      default: "text"
    },
    icon: {
      type: [String, void 0],
      default: void 0
    }
  },
  setup(e, {
    slots: t
  }) {
    const r = {
      sm: "w-3 h-3",
      base: "w-5 h-5",
      lg: "w-7 h-7"
    };
    return () => {
      var l;
      return a("div", {
        class: "relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-gray-400"
      }, [a("div", {
        "aria-hidden": "true",
        class: ["absolute inset-y-0 flex px-4 pointer-events-none", {
          "items-center": e.type != "textarea",
          "items-start py-4": e.type == "textarea"
        }]
      }, [a(b, {
        icon: e.icon,
        class: [r[e.size]]
      }, null)]), (l = t.default) == null ? void 0 : l.call(t)]);
    };
  }
}), fe = /* @__PURE__ */ u({
  props: {
    size: S(),
    icon: {
      type: [String, void 0],
      default: void 0
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: [String, void 0],
      default: void 0
    },
    helperMessage: {
      type: [String, void 0],
      default: void 0
    },
    errorMessage: {
      type: [String, Boolean],
      default: !1
    }
  },
  inheritAttrs: !1,
  setup(e, {
    attrs: t
  }) {
    return e.icon ? () => a("div", {
      class: "space-y-2 w-full"
    }, [a(Y, {
      label: e.label,
      helperMessage: e.helperMessage
    }, null), a(Ze, {
      size: e.size,
      icon: e.icon,
      type: e.type
    }, {
      default: () => [a(Q, c({
        type: e.type,
        icon: e.icon,
        size: e.size
      }, t), null)]
    }), e.errorMessage && a(X, {
      message: e.errorMessage
    }, null)]) : () => a("div", {
      class: "space-y-2 w-full"
    }, [a(Y, {
      label: e.label,
      helperMessage: e.helperMessage
    }, null), e.helperMessage && a(ce, {
      message: e.helperMessage
    }, null), a(Q, c({
      type: e.type,
      icon: e.icon,
      size: e.size
    }, t), null), e.errorMessage && a(X, {
      message: e.errorMessage
    }, null)]);
  }
}), Ue = /* @__PURE__ */ u({
  props: {
    ...de,
    checked: {
      type: [Array, Boolean],
      default: !1
    },
    value: {
      default: null
    },
    label: {
      type: [String, void 0],
      default: void 0
    }
  },
  inheritAttrs: !1,
  emits: ["update:checked"],
  setup(e, {
    slots: t,
    emit: r,
    attrs: l
  }) {
    const {
      value: s,
      checked: n,
      label: d
    } = e, i = ae(n);
    return () => a(P, {
      class: "inline-flex items-center gap-2"
    }, {
      default: () => [ze(a("input", c(l, {
        type: "checkbox",
        class: ["focus:ring", "rounded", "text-primary", "border-gray-400", "focus:border-primary-300 focus:ring-primary", "dark:border-gray-600", "dark:bg-dark-eval-1", "dark:focus:ring-offset-dark-eval-1", {
          "transform scale-110": e.size == "sm",
          "transform scale-125": e.size == "base",
          "transform scale-150": e.size == "lg"
        }],
        value: s,
        "onUpdate:modelValue": (o) => i.value = o,
        onChange: () => {
          r("update:checked", i.value);
        }
      }), null), [[Be, i.value]]), t.default ? t.default() : d && a("span", {
        class: "text-sm"
      }, [d])]
    });
  }
}), Je = /* @__PURE__ */ u({
  props: {
    modelValue: String,
    options: {
      type: Object,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    attrs: r
  }) {
    const l = ae(null);
    return Me(() => {
      l.value.$el && _e(l.value.$el, e.options);
    }), () => a(fe, c({
      value: e.modelValue,
      onInput: (s) => {
        t("update:modelValue", s.target.value);
      },
      ref: l
    }, r), null);
  }
});
function Qe(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Te(e);
}
const Xe = /* @__PURE__ */ u({
  props: {
    show: {
      type: Boolean,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    position: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "w-screen max-w-md"
    }
  },
  emits: ["close"],
  setup(e, {
    emit: t,
    slots: r
  }) {
    const {
      title: l,
      position: s,
      width: n
    } = e, d = (o) => {
      t("close", o);
    }, i = (o) => s == o;
    return () => a(re, {
      as: "template",
      show: e.show
    }, {
      default: () => [a(le, {
        as: "div",
        class: "fixed inset-0 overflow-hidden z-50",
        onClose: d
      }, {
        default: () => [a("div", {
          class: "absolute inset-0 overflow-hidden"
        }, [a(T, {
          as: "template",
          enter: "transition-opacity ease-in-out duration-200",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity ease-in-out duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0"
        }, {
          default: () => [a(ne, {
            class: "absolute inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm"
          }, null)]
        }), a(T, {
          as: "template",
          enter: "transform transition ease-out duration-300 sm:duration-500",
          "enter-from": i("left") ? "-translate-x-full" : "translate-x-full",
          "enter-to": "translate-x-0",
          leave: "transform transition ease-in-out duration-300 sm:duration-500",
          "leave-from": "translate-x-0",
          "leave-to": i("left") ? "-translate-x-full" : "translate-x-full"
        }, {
          default: () => {
            var o, f;
            return [a("div", {
              class: [n, "fixed inset-y-0 flex", {
                "right-0": i("right"),
                "left-0": i("left")
              }]
            }, [a("div", {
              class: "h-full w-full bg-white flex flex-col shadow-xl overflow-y-hidden dark:bg-gray-900"
            }, [r.header ? r.header() : a("div", {
              class: "px-4 flex-shrink-0 pt-4"
            }, [a("div", {
              class: "flex items-center justify-between"
            }, [a(Ve, {
              class: "flex-1 text-lg font-medium text-gray-900 dark:text-gray-200"
            }, Qe(l) ? l : {
              default: () => [l]
            }), a(O, {
              size: "sm",
              type: "button",
              class: "flex-shrink-0",
              onClick: d,
              "sr-text": "Close panel",
              "icon-only": !0,
              outline: !0,
              variant: "danger",
              icon: "tabler:x"
            }, null)])]), a("div", {
              class: "mt-6 relative flex-1 px-4 overflow-y-auto"
            }, [(o = r.default) == null ? void 0 : o.call(r)]), a("div", {
              class: "flex-shrink-0"
            }, [(f = r.footer) == null ? void 0 : f.call(r)])])])];
          }
        })])]
      })]
    });
  }
}), Ye = /* @__PURE__ */ u({
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "w-full sm:max-w-2xl"
    }
  },
  emits: ["close"],
  setup(e, {
    slots: t,
    emit: r
  }) {
    const l = () => {
      r("close");
    };
    return () => a(re, {
      appear: !0,
      as: "template",
      show: e.show
    }, {
      default: () => [a(le, {
        as: "div",
        class: "fixed inset-0 overflow-hidden z-50",
        onClose: l
      }, {
        default: () => [a(T, {
          as: "template",
          enter: "transition-opacity ease-in-out duration-200",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity ease-in-out duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0"
        }, {
          default: () => [a(ne, {
            onClick: l,
            class: "absolute inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm"
          }, null)]
        }), a("div", {
          class: "p-6"
        }, [a(T, {
          enter: "ease-out duration-300",
          "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
          "enter-to": "opacity-100 translate-y-0 sm:scale-100",
          leave: "ease-in duration-200",
          "leave-from": "opacity-100 translate-y-0 sm:scale-100",
          "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        }, {
          default: () => {
            var s;
            return [a("div", {
              class: ["bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:mx-auto", e.width]
            }, [(s = t.default) == null ? void 0 : s.call(t)])];
          }
        })])]
      })]
    });
  }
}), et = /* @__PURE__ */ u({
  props: {
    title: String
  },
  setup(e, {
    slots: t,
    attrs: r
  }) {
    return () => a(Pe, {
      class: "w-full"
    }, {
      default: ({
        active: l,
        disabled: s
      }) => {
        var n;
        return a(I, null, [t.default ? (n = t.default) == null ? void 0 : n.call(t) : a("button", c({
          type: "button"
        }, r, {
          class: ["block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-75 ease-in-out  focus:outline-none  dark:text-gray-400", {
            "bg-gray-100 dark:text-white dark:bg-dark-eval-3": l,
            "pointer-events-none": s
          }]
        }), [e.title])]);
      }
    });
  }
}), tt = /* @__PURE__ */ u({
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white dark:bg-dark-eval-1"]
    }
  },
  setup(e, {
    slots: t
  }) {
    R(() => ({
      48: "w-48"
    })[e.width.toString()]);
    const r = R(() => e.align === "left" ? "origin-top-left left-0" : e.align === "right" ? "origin-top-right right-0" : "origin-top");
    return () => a(je, {
      as: "div",
      class: "relative max-w-max"
    }, {
      default: () => [a(Ie, {
        as: "span"
      }, {
        default: () => {
          var l;
          return [(l = t.trigger) == null ? void 0 : l.call(t)];
        }
      }), a(te, {
        enterActiveClass: "transition ease-out duration-200",
        enterFromClass: "transform opacity-0 scale-95",
        enterToClass: "transform opacity-100 scale-100",
        leaveActiveClass: "transition ease-in duration-75",
        leaveFromClass: "transform opacity-100 scale-100",
        leaveToClass: "transform opacity-0 scale-95"
      }, {
        default: () => [a(Oe, {
          class: [
            "absolute z-50 mt-2 rounded-md shadow-lg",
            "focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-5",
            // widthClass.value,
            "min-w-full",
            r.value
          ]
        }, {
          default: () => {
            var l;
            return [a("div", {
              class: ["rounded-md", e.contentClasses]
            }, [(l = t.content) == null ? void 0 : l.call(t)])];
          }
        })]
      })]
    });
  }
}), at = /* @__PURE__ */ u({
  props: {
    width: {
      type: String,
      default: "w-6"
    },
    fgColor: {
      type: String,
      default: "white"
    },
    bgColor: {
      type: String,
      default: "white"
    }
  },
  setup(e) {
    return () => a("div", {
      class: "flex items-center justify-center min-w-max"
    }, [a("div", {
      style: {
        "--loading-fg-color": e.fgColor,
        "--loading-bg-color": e.bgColor,
        "--loading-fg-mask": "#000 0 36deg, #0000 0 72deg",
        "--loading-bg-mask": "#0000 0 36deg, #000 0 72deg"
      },
      class: ["grid aspect-square", e.width]
    }, [a("div", {
      class: ["col-[1/1] row-[1/1] rounded-[50%]", "animate-rotate", "bg-[repeating-radial-gradient(farthest-side,#0000_0%,var(--loading-fg-color)_1%_10%,#0000_11%_30%)]", "[mask:repeating-conic-gradient(var(--loading-fg-mask))]"]
    }, null), a("div", {
      class: ["col-[1/1] row-[1/1] rounded-[50%]", "animate-rotate-reverse", "bg-[repeating-radial-gradient(farthest-side,#0000_0%,var(--loading-bg-color)_1%_10%,#0000_11%_30%)]", "[mask:repeating-conic-gradient(var(--loading-bg-mask))]"]
    }, null)])]);
  }
}), p = /* @__PURE__ */ u({
  props: {
    variant: C({
      defaultVariant: "white"
    }),
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    hideClose: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: "tabler:check"
    },
    hideClose: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close-toast"],
  setup(e, {
    emit: t
  }) {
    const {
      variant: r,
      title: l,
      message: s,
      icon: n,
      hideClose: d,
      bordered: i
    } = e, o = {
      primary: "bg-white",
      success: "bg-green-100",
      warning: "bg-yellow-100",
      danger: "bg-red-100",
      info: "bg-cyan-100",
      white: "bg-white",
      black: "bg-black"
    }, f = {
      primary: "text-primary",
      success: "text-green-500",
      warning: "text-yellow-500",
      danger: "text-red-500",
      info: "text-cyan-500",
      white: "text-gray-800",
      black: "text-gray-200"
    }, x = {
      primary: "text-primary-dark",
      success: "text-green-600",
      warning: "text-yellow-600",
      danger: "text-red-600",
      info: "text-cyan-600",
      white: "text-gray-800 dark:text-gray-200",
      black: "text-gray-200"
    }, g = () => {
      t("close-toast");
    };
    return () => a("div", {
      class: "p-2"
    }, [a("div", {
      class: ["relative p-3 rounded-md shadow-lg dark:bg-dark-eval-3 border-s-4", o[r], {
        "border-s-primary": r == "primary",
        "border-s-green-500": r == "success",
        "border-s-cyan-500": r == "info",
        "border-s-yellow-500": r == "warning",
        "border-s-red-500": r == "danger",
        "border-s-gray-200": r == "white",
        "border-s-gray-500": r == "black"
      }]
    }, [a("div", {
      class: "flex items-start gap-2"
    }, [a(b, {
      icon: n,
      class: ["w-8 h-8 -my-0.5", f[r]]
    }, null), a(O, {
      onClick: g,
      icon: "tabler:x",
      size: "xs",
      variant: e.variant,
      class: "absolute right-2 top-2",
      "sr-text": "Close"
    }, null), a("div", {
      class: "space-y-2"
    }, [a("div", {
      class: [x[r]]
    }, [l]), a("p", {
      class: "text-gray-600 dark:text-gray-400"
    }, [s])])])])]);
  }
}), m = qe(), ge = ({ title: e = "Success", message: t = "", icon: r = "tabler:circle-check" }) => m.success({
  component: p,
  props: {
    variant: "primary",
    title: e,
    message: t,
    icon: r
  }
}), ye = ({ title: e = "Success", message: t = "", icon: r = "tabler:circle-check" }) => m.success({
  component: p,
  props: {
    variant: "success",
    title: e,
    message: t,
    icon: r
  }
}), be = ({ title: e = "Warning", message: t = "", icon: r = "tabler:exclamation-circle" }) => m.error({
  component: p,
  props: {
    variant: "warning",
    title: e,
    message: t,
    icon: r
  }
}), me = ({ title: e = "Info", message: t = "", icon: r = "tabler:help-circle" }) => m.error({
  component: p,
  props: {
    variant: "info",
    title: e,
    message: t,
    icon: r
  }
}), ve = ({ title: e = "Error", message: t = "", icon: r = "tabler:circle-x" }) => m.error({
  component: p,
  props: {
    variant: "danger",
    title: e,
    message: t,
    icon: r
  }
}), he = ({ title: e = "", message: t = "", icon: r = "tabler:circle-check" }) => m.success({
  component: p,
  props: {
    title: e,
    message: t,
    icon: r
  }
}), pe = ({ title: e = "", message: t = "", icon: r = "tabler:circle-check" }) => m.success({
  component: p,
  props: {
    variant: "black",
    title: e,
    message: t,
    icon: r
  }
}), ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blackToast: pe,
  errorToast: ve,
  infoToast: me,
  primaryToast: ge,
  successToast: ye,
  toast: m,
  warnToast: be,
  whiteToast: he
}, Symbol.toStringTag, { value: "Module" })), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Fe,
  Badge: $e,
  Button: O,
  ButtonGroup: We,
  Checkbox: Ue,
  DatePicker: Je,
  Dot: oe,
  Dropdown: tt,
  DropdownItem: et,
  Input: fe,
  Label: P,
  Loading: at,
  Modal: Ye,
  Panel: Xe,
  blackToast: pe,
  errorToast: ve,
  infoToast: me,
  primaryToast: ge,
  successToast: ye,
  toast: m,
  warnToast: be,
  whiteToast: he
}, Symbol.toStringTag, { value: "Module" }));
function ut(e) {
  for (const t in ee)
    e.component(`Kui${t}`, ee[t]);
  e.use(Ke, {
    hideProgressBar: !0,
    closeOnClick: !1,
    closeButton: !1,
    icon: !1,
    timeout: !1,
    transition: "Vue-Toastification__fade"
  });
}
export {
  Fe as KuiAvatar,
  $e as KuiBadge,
  O as KuiButton,
  We as KuiButtonGroup,
  Ue as KuiCheckbox,
  Je as KuiDatePicker,
  oe as KuiDot,
  tt as KuiDropdown,
  et as KuiDropdownItem,
  fe as KuiInput,
  P as KuiLabel,
  at as KuiLoading,
  Ye as KuiModal,
  Xe as KuiPanel,
  ut as default,
  ot as toast
};
//# sourceMappingURL=kui-vue.es.js.map
