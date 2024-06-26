(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function dm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Df = { exports: {} },
  Eo = {},
  Nf = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for("react.element"),
  hm = Symbol.for("react.portal"),
  pm = Symbol.for("react.fragment"),
  mm = Symbol.for("react.strict_mode"),
  gm = Symbol.for("react.profiler"),
  ym = Symbol.for("react.provider"),
  vm = Symbol.for("react.context"),
  xm = Symbol.for("react.forward_ref"),
  wm = Symbol.for("react.suspense"),
  Sm = Symbol.for("react.memo"),
  km = Symbol.for("react.lazy"),
  cu = Symbol.iterator;
function Pm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cu && e[cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _f = Object.assign,
  Of = {};
function bn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Of),
    (this.updater = n || Rf);
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ff() {}
Ff.prototype = bn.prototype;
function Kl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Of),
    (this.updater = n || Rf);
}
var Gl = (Kl.prototype = new Ff());
Gl.constructor = Kl;
_f(Gl, bn.prototype);
Gl.isPureReactComponent = !0;
var fu = Array.isArray,
  zf = Object.prototype.hasOwnProperty,
  Ql = { current: null },
  If = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      zf.call(t, r) && !If.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: br,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ql.current,
  };
}
function Cm(e, t) {
  return {
    $$typeof: br,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
}
function Tm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var du = /\/+/g;
function bo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tm("" + e.key)
    : t.toString(36);
}
function Ai(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case br:
          case hm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + bo(s, 0) : r),
      fu(i)
        ? ((n = ""),
          e != null && (n = e.replace(du, "$&/") + "/"),
          Ai(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Yl(i) &&
            (i = Cm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(du, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), fu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + bo(o, l);
      s += Ai(o, t, n, a, i);
    }
  else if (((a = Pm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + bo(o, l++)), (s += Ai(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ui(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ai(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Em(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  Di = { transition: null },
  Lm = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Di,
    ReactCurrentOwner: Ql,
  };
O.Children = {
  map: ui,
  forEach: function (e, t, n) {
    ui(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ui(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ui(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
O.Component = bn;
O.Fragment = pm;
O.Profiler = gm;
O.PureComponent = Kl;
O.StrictMode = mm;
O.Suspense = wm;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lm;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = _f({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ql.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      zf.call(t, a) &&
        !If.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: br, type: e.type, key: i, ref: o, props: r, _owner: s };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: vm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ym, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = Bf;
O.createFactory = function (e) {
  var t = Bf.bind(null, e);
  return (t.type = e), t;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: xm, render: e };
};
O.isValidElement = Yl;
O.lazy = function (e) {
  return { $$typeof: km, _payload: { _status: -1, _result: e }, _init: Em };
};
O.memo = function (e, t) {
  return { $$typeof: Sm, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Di.transition;
  Di.transition = {};
  try {
    e();
  } finally {
    Di.transition = t;
  }
};
O.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
O.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
O.useContext = function (e) {
  return xe.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
O.useId = function () {
  return xe.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return xe.current.useRef(e);
};
O.useState = function (e) {
  return xe.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return xe.current.useTransition();
};
O.version = "18.2.0";
Nf.exports = O;
var j = Nf.exports;
const Xl = dm(j);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vm = j,
  Mm = Symbol.for("react.element"),
  jm = Symbol.for("react.fragment"),
  Am = Object.prototype.hasOwnProperty,
  Dm = Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Am.call(t, r) && !Nm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Mm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Dm.current,
  };
}
Eo.Fragment = jm;
Eo.jsx = Uf;
Eo.jsxs = Uf;
Df.exports = Eo;
var w = Df.exports,
  zs = {},
  $f = { exports: {} },
  _e = {},
  Hf = { exports: {} },
  Wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, R) {
    var _ = L.length;
    L.push(R);
    e: for (; 0 < _; ) {
      var D = (_ - 1) >>> 1,
        H = L[D];
      if (0 < i(H, R)) (L[D] = R), (L[_] = H), (_ = D);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var R = L[0],
      _ = L.pop();
    if (_ !== R) {
      L[0] = _;
      e: for (var D = 0, H = L.length, Zt = H >>> 1; D < Zt; ) {
        var tt = 2 * (D + 1) - 1,
          wn = L[tt],
          Me = tt + 1,
          Jt = L[Me];
        if (0 > i(wn, _))
          Me < H && 0 > i(Jt, wn)
            ? ((L[D] = Jt), (L[Me] = _), (D = Me))
            : ((L[D] = wn), (L[tt] = _), (D = tt));
        else if (Me < H && 0 > i(Jt, _)) (L[D] = Jt), (L[Me] = _), (D = Me);
        else break e;
      }
    }
    return R;
  }
  function i(L, R) {
    var _ = L.sortIndex - R.sortIndex;
    return _ !== 0 ? _ : L.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    y = !1,
    v = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(L) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= L)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function x(L) {
    if (((v = !1), p(L), !y))
      if (n(a) !== null) (y = !0), Fe(S);
      else {
        var R = n(u);
        R !== null && et(x, R.startTime - L);
      }
  }
  function S(L, R) {
    (y = !1), v && ((v = !1), g(P), (P = -1)), (m = !0);
    var _ = d;
    try {
      for (
        p(R), f = n(a);
        f !== null && (!(f.expirationTime > R) || (L && !J()));

      ) {
        var D = f.callback;
        if (typeof D == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var H = D(f.expirationTime <= R);
          (R = e.unstable_now()),
            typeof H == "function" ? (f.callback = H) : f === n(a) && r(a),
            p(R);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Zt = !0;
      else {
        var tt = n(u);
        tt !== null && et(x, tt.startTime - R), (Zt = !1);
      }
      return Zt;
    } finally {
      (f = null), (d = _), (m = !1);
    }
  }
  var T = !1,
    C = null,
    P = -1,
    N = 5,
    A = -1;
  function J() {
    return !(e.unstable_now() - A < N);
  }
  function Se() {
    if (C !== null) {
      var L = e.unstable_now();
      A = L;
      var R = !0;
      try {
        R = C(!0, L);
      } finally {
        R ? ke() : ((T = !1), (C = null));
      }
    } else T = !1;
  }
  var ke;
  if (typeof h == "function")
    ke = function () {
      h(Se);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      b = q.port2;
    (q.port1.onmessage = Se),
      (ke = function () {
        b.postMessage(null);
      });
  } else
    ke = function () {
      E(Se, 0);
    };
  function Fe(L) {
    (C = L), T || ((T = !0), ke());
  }
  function et(L, R) {
    P = E(function () {
      L(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), Fe(S));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = d;
      }
      var _ = d;
      d = R;
      try {
        return L();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, R) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var _ = d;
      d = L;
      try {
        return R();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (L, R, _) {
      var D = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? D + _ : D))
          : (_ = D),
        L)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = _ + H),
        (L = {
          id: c++,
          callback: R,
          priorityLevel: L,
          startTime: _,
          expirationTime: H,
          sortIndex: -1,
        }),
        _ > D
          ? ((L.sortIndex = _),
            t(u, L),
            n(a) === null &&
              L === n(u) &&
              (v ? (g(P), (P = -1)) : (v = !0), et(x, _ - D)))
          : ((L.sortIndex = H), t(a, L), y || m || ((y = !0), Fe(S))),
        L
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (L) {
      var R = d;
      return function () {
        var _ = d;
        d = R;
        try {
          return L.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(Wf);
Hf.exports = Wf;
var Rm = Hf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kf = j,
  Ne = Rm;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Gf = new Set(),
  Rr = {};
function gn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) Gf.add(t[e]);
}
var yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Is = Object.prototype.hasOwnProperty,
  _m =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hu = {},
  pu = {};
function Om(e) {
  return Is.call(pu, e)
    ? !0
    : Is.call(hu, e)
    ? !1
    : _m.test(e)
    ? (pu[e] = !0)
    : ((hu[e] = !0), !1);
}
function Fm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zm(e, t, n, r) {
  if (t === null || typeof t > "u" || Fm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function we(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zl = /[\-:]([a-z])/g;
function Jl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zl, Jl);
    fe[t] = new we(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zl, Jl);
    fe[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zl, Jl);
  fe[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new we(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ql(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zm(t, n, i, r) && (n = null),
    r || i === null
      ? Om(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ci = Symbol.for("react.element"),
  kn = Symbol.for("react.portal"),
  Pn = Symbol.for("react.fragment"),
  bl = Symbol.for("react.strict_mode"),
  Bs = Symbol.for("react.profiler"),
  Qf = Symbol.for("react.provider"),
  Yf = Symbol.for("react.context"),
  ea = Symbol.for("react.forward_ref"),
  Us = Symbol.for("react.suspense"),
  $s = Symbol.for("react.suspense_list"),
  ta = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  Xf = Symbol.for("react.offscreen"),
  mu = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mu && e[mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  es;
function pr(e) {
  if (es === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      es = (t && t[1]) || "";
    }
  return (
    `
` +
    es +
    e
  );
}
var ts = !1;
function ns(e, t) {
  if (!e || ts) return "";
  ts = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ts = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? pr(e) : "";
}
function Im(e) {
  switch (e.tag) {
    case 5:
      return pr(e.type);
    case 16:
      return pr("Lazy");
    case 13:
      return pr("Suspense");
    case 19:
      return pr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ns(e.type, !1)), e;
    case 11:
      return (e = ns(e.type.render, !1)), e;
    case 1:
      return (e = ns(e.type, !0)), e;
    default:
      return "";
  }
}
function Hs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Pn:
      return "Fragment";
    case kn:
      return "Portal";
    case Bs:
      return "Profiler";
    case bl:
      return "StrictMode";
    case Us:
      return "Suspense";
    case $s:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yf:
        return (e.displayName || "Context") + ".Consumer";
      case Qf:
        return (e._context.displayName || "Context") + ".Provider";
      case ea:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ta:
        return (
          (t = e.displayName || null), t !== null ? t : Hs(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return Hs(e(t));
        } catch {}
    }
  return null;
}
function Bm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Hs(t);
    case 8:
      return t === bl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Um(e) {
  var t = Zf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fi(e) {
  e._valueTracker || (e._valueTracker = Um(e));
}
function Jf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ws(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function qf(e, t) {
  (t = t.checked), t != null && ql(e, "checked", t, !1);
}
function Ks(e, t) {
  qf(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Gs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Gs(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Gs(e, t, n) {
  (t !== "number" || Qi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mr = Array.isArray;
function zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Qs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (mr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function bf(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function xu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ed(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ys(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ed(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var di,
  td = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        di = di || document.createElement("div"),
          di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = di.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  $m = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
  $m.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function nd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function rd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = nd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Hm = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Xs(e, t) {
  if (t) {
    if (Hm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Zs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Js = null;
function na(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var qs = null,
  In = null,
  Bn = null;
function wu(e) {
  if ((e = ni(e))) {
    if (typeof qs != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Ao(t)), qs(e.stateNode, e.type, t));
  }
}
function id(e) {
  In ? (Bn ? Bn.push(e) : (Bn = [e])) : (In = e);
}
function od() {
  if (In) {
    var e = In,
      t = Bn;
    if (((Bn = In = null), wu(e), t)) for (e = 0; e < t.length; e++) wu(t[e]);
  }
}
function sd(e, t) {
  return e(t);
}
function ld() {}
var rs = !1;
function ad(e, t, n) {
  if (rs) return e(t, n);
  rs = !0;
  try {
    return sd(e, t, n);
  } finally {
    (rs = !1), (In !== null || Bn !== null) && (ld(), od());
  }
}
function Or(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ao(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var bs = !1;
if (yt)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        bs = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    bs = !1;
  }
function Wm(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var wr = !1,
  Yi = null,
  Xi = !1,
  el = null,
  Km = {
    onError: function (e) {
      (wr = !0), (Yi = e);
    },
  };
function Gm(e, t, n, r, i, o, s, l, a) {
  (wr = !1), (Yi = null), Wm.apply(Km, arguments);
}
function Qm(e, t, n, r, i, o, s, l, a) {
  if ((Gm.apply(this, arguments), wr)) {
    if (wr) {
      var u = Yi;
      (wr = !1), (Yi = null);
    } else throw Error(k(198));
    Xi || ((Xi = !0), (el = u));
  }
}
function yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ud(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Su(e) {
  if (yn(e) !== e) throw Error(k(188));
}
function Ym(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Su(i), e;
        if (o === r) return Su(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function cd(e) {
  return (e = Ym(e)), e !== null ? fd(e) : null;
}
function fd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dd = Ne.unstable_scheduleCallback,
  ku = Ne.unstable_cancelCallback,
  Xm = Ne.unstable_shouldYield,
  Zm = Ne.unstable_requestPaint,
  ee = Ne.unstable_now,
  Jm = Ne.unstable_getCurrentPriorityLevel,
  ra = Ne.unstable_ImmediatePriority,
  hd = Ne.unstable_UserBlockingPriority,
  Zi = Ne.unstable_NormalPriority,
  qm = Ne.unstable_LowPriority,
  pd = Ne.unstable_IdlePriority,
  Lo = null,
  st = null;
function bm(e) {
  if (st && typeof st.onCommitFiberRoot == "function")
    try {
      st.onCommitFiberRoot(Lo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : ng,
  eg = Math.log,
  tg = Math.LN2;
function ng(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((eg(e) / tg) | 0)) | 0;
}
var hi = 64,
  pi = 4194304;
function gr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ji(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = gr(l)) : ((o &= s), o !== 0 && (r = gr(o)));
  } else (s = n & ~i), s !== 0 ? (r = gr(s)) : o !== 0 && (r = gr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function rg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ig(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ze(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = rg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function tl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function md() {
  var e = hi;
  return (hi <<= 1), !(hi & 4194240) && (hi = 64), e;
}
function is(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ei(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function og(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ia(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var I = 0;
function gd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var yd,
  oa,
  vd,
  xd,
  wd,
  nl = !1,
  mi = [],
  Dt = null,
  Nt = null,
  Rt = null,
  Fr = new Map(),
  zr = new Map(),
  Vt = [],
  sg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      Nt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      Fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zr.delete(t.pointerId);
  }
}
function ir(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ni(t)), t !== null && oa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function lg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Dt = ir(Dt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Nt = ir(Nt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Rt = ir(Rt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Fr.set(o, ir(Fr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), zr.set(o, ir(zr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Sd(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ud(n)), t !== null)) {
          (e.blockedOn = t),
            wd(e.priority, function () {
              vd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ni(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = rl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Js = r), n.target.dispatchEvent(r), (Js = null);
    } else return (t = ni(n)), t !== null && oa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cu(e, t, n) {
  Ni(e) && n.delete(t);
}
function ag() {
  (nl = !1),
    Dt !== null && Ni(Dt) && (Dt = null),
    Nt !== null && Ni(Nt) && (Nt = null),
    Rt !== null && Ni(Rt) && (Rt = null),
    Fr.forEach(Cu),
    zr.forEach(Cu);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nl ||
      ((nl = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, ag)));
}
function Ir(e) {
  function t(i) {
    return or(i, e);
  }
  if (0 < mi.length) {
    or(mi[0], e);
    for (var n = 1; n < mi.length; n++) {
      var r = mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Dt !== null && or(Dt, e),
      Nt !== null && or(Nt, e),
      Rt !== null && or(Rt, e),
      Fr.forEach(t),
      zr.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Sd(n), n.blockedOn === null && Vt.shift();
}
var Un = St.ReactCurrentBatchConfig,
  qi = !0;
function ug(e, t, n, r) {
  var i = I,
    o = Un.transition;
  Un.transition = null;
  try {
    (I = 1), sa(e, t, n, r);
  } finally {
    (I = i), (Un.transition = o);
  }
}
function cg(e, t, n, r) {
  var i = I,
    o = Un.transition;
  Un.transition = null;
  try {
    (I = 4), sa(e, t, n, r);
  } finally {
    (I = i), (Un.transition = o);
  }
}
function sa(e, t, n, r) {
  if (qi) {
    var i = rl(e, t, n, r);
    if (i === null) ps(e, t, r, bi, n), Pu(e, r);
    else if (lg(i, e, t, n, r)) r.stopPropagation();
    else if ((Pu(e, r), t & 4 && -1 < sg.indexOf(e))) {
      for (; i !== null; ) {
        var o = ni(i);
        if (
          (o !== null && yd(o),
          (o = rl(e, t, n, r)),
          o === null && ps(e, t, r, bi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ps(e, t, r, null, n);
  }
}
var bi = null;
function rl(e, t, n, r) {
  if (((bi = null), (e = na(r)), (e = on(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ud(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bi = e), null;
}
function kd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Jm()) {
        case ra:
          return 1;
        case hd:
          return 4;
        case Zi:
        case qm:
          return 16;
        case pd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null,
  la = null,
  Ri = null;
function Pd() {
  if (Ri) return Ri;
  var e,
    t = la,
    n = t.length,
    r,
    i = "value" in jt ? jt.value : jt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ri = i.slice(e, 1 < r ? 1 - r : void 0));
}
function _i(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function gi() {
  return !0;
}
function Tu() {
  return !1;
}
function Oe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? gi
        : Tu),
      (this.isPropagationStopped = Tu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = gi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = gi));
      },
      persist: function () {},
      isPersistent: gi,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  aa = Oe(er),
  ti = Y({}, er, { view: 0, detail: 0 }),
  fg = Oe(ti),
  os,
  ss,
  sr,
  Vo = Y({}, ti, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ua,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== sr &&
            (sr && e.type === "mousemove"
              ? ((os = e.screenX - sr.screenX), (ss = e.screenY - sr.screenY))
              : (ss = os = 0),
            (sr = e)),
          os);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ss;
    },
  }),
  Eu = Oe(Vo),
  dg = Y({}, Vo, { dataTransfer: 0 }),
  hg = Oe(dg),
  pg = Y({}, ti, { relatedTarget: 0 }),
  ls = Oe(pg),
  mg = Y({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gg = Oe(mg),
  yg = Y({}, er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vg = Oe(yg),
  xg = Y({}, er, { data: 0 }),
  Lu = Oe(xg),
  wg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Sg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  kg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kg[e]) ? !!t[e] : !1;
}
function ua() {
  return Pg;
}
var Cg = Y({}, ti, {
    key: function (e) {
      if (e.key) {
        var t = wg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _i(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ua,
    charCode: function (e) {
      return e.type === "keypress" ? _i(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _i(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Tg = Oe(Cg),
  Eg = Y({}, Vo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Vu = Oe(Eg),
  Lg = Y({}, ti, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ua,
  }),
  Vg = Oe(Lg),
  Mg = Y({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jg = Oe(Mg),
  Ag = Y({}, Vo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Dg = Oe(Ag),
  Ng = [9, 13, 27, 32],
  ca = yt && "CompositionEvent" in window,
  Sr = null;
yt && "documentMode" in document && (Sr = document.documentMode);
var Rg = yt && "TextEvent" in window && !Sr,
  Cd = yt && (!ca || (Sr && 8 < Sr && 11 >= Sr)),
  Mu = String.fromCharCode(32),
  ju = !1;
function Td(e, t) {
  switch (e) {
    case "keyup":
      return Ng.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ed(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function _g(e, t) {
  switch (e) {
    case "compositionend":
      return Ed(t);
    case "keypress":
      return t.which !== 32 ? null : ((ju = !0), Mu);
    case "textInput":
      return (e = t.data), e === Mu && ju ? null : e;
    default:
      return null;
  }
}
function Og(e, t) {
  if (Cn)
    return e === "compositionend" || (!ca && Td(e, t))
      ? ((e = Pd()), (Ri = la = jt = null), (Cn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Cd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fg[e.type] : t === "textarea";
}
function Ld(e, t, n, r) {
  id(r),
    (t = eo(t, "onChange")),
    0 < t.length &&
      ((n = new aa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var kr = null,
  Br = null;
function zg(e) {
  zd(e, 0);
}
function Mo(e) {
  var t = Ln(e);
  if (Jf(t)) return e;
}
function Ig(e, t) {
  if (e === "change") return t;
}
var Vd = !1;
if (yt) {
  var as;
  if (yt) {
    var us = "oninput" in document;
    if (!us) {
      var Du = document.createElement("div");
      Du.setAttribute("oninput", "return;"),
        (us = typeof Du.oninput == "function");
    }
    as = us;
  } else as = !1;
  Vd = as && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
  kr && (kr.detachEvent("onpropertychange", Md), (Br = kr = null));
}
function Md(e) {
  if (e.propertyName === "value" && Mo(Br)) {
    var t = [];
    Ld(t, Br, e, na(e)), ad(zg, t);
  }
}
function Bg(e, t, n) {
  e === "focusin"
    ? (Nu(), (kr = t), (Br = n), kr.attachEvent("onpropertychange", Md))
    : e === "focusout" && Nu();
}
function Ug(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Mo(Br);
}
function $g(e, t) {
  if (e === "click") return Mo(t);
}
function Hg(e, t) {
  if (e === "input" || e === "change") return Mo(t);
}
function Wg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : Wg;
function Ur(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Is.call(t, i) || !qe(e[i], t[i])) return !1;
  }
  return !0;
}
function Ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _u(e, t) {
  var n = Ru(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ru(n);
  }
}
function jd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? jd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ad() {
  for (var e = window, t = Qi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qi(e.document);
  }
  return t;
}
function fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Kg(e) {
  var t = Ad(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    jd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && fa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = _u(n, o));
        var s = _u(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gg = yt && "documentMode" in document && 11 >= document.documentMode,
  Tn = null,
  il = null,
  Pr = null,
  ol = !1;
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ol ||
    Tn == null ||
    Tn !== Qi(r) ||
    ((r = Tn),
    "selectionStart" in r && fa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pr && Ur(Pr, r)) ||
      ((Pr = r),
      (r = eo(il, "onSelect")),
      0 < r.length &&
        ((t = new aa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tn))));
}
function yi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var En = {
    animationend: yi("Animation", "AnimationEnd"),
    animationiteration: yi("Animation", "AnimationIteration"),
    animationstart: yi("Animation", "AnimationStart"),
    transitionend: yi("Transition", "TransitionEnd"),
  },
  cs = {},
  Dd = {};
yt &&
  ((Dd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete En.animationend.animation,
    delete En.animationiteration.animation,
    delete En.animationstart.animation),
  "TransitionEvent" in window || delete En.transitionend.transition);
function jo(e) {
  if (cs[e]) return cs[e];
  if (!En[e]) return e;
  var t = En[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Dd) return (cs[e] = t[n]);
  return e;
}
var Nd = jo("animationend"),
  Rd = jo("animationiteration"),
  _d = jo("animationstart"),
  Od = jo("transitionend"),
  Fd = new Map(),
  Fu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gt(e, t) {
  Fd.set(e, t), gn(t, [e]);
}
for (var fs = 0; fs < Fu.length; fs++) {
  var ds = Fu[fs],
    Qg = ds.toLowerCase(),
    Yg = ds[0].toUpperCase() + ds.slice(1);
  Gt(Qg, "on" + Yg);
}
Gt(Nd, "onAnimationEnd");
Gt(Rd, "onAnimationIteration");
Gt(_d, "onAnimationStart");
Gt("dblclick", "onDoubleClick");
Gt("focusin", "onFocus");
Gt("focusout", "onBlur");
Gt(Od, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xg = new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));
function zu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qm(r, t, void 0, e), (e.currentTarget = null);
}
function zd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          zu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          zu(i, l, u), (o = a);
        }
    }
  }
  if (Xi) throw ((e = el), (Xi = !1), (el = null), e);
}
function U(e, t) {
  var n = t[cl];
  n === void 0 && (n = t[cl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Id(t, e, 2, !1), n.add(r));
}
function hs(e, t, n) {
  var r = 0;
  t && (r |= 4), Id(n, e, r, t);
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[vi]) {
    (e[vi] = !0),
      Gf.forEach(function (n) {
        n !== "selectionchange" && (Xg.has(n) || hs(n, !1, e), hs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vi] || ((t[vi] = !0), hs("selectionchange", !1, t));
  }
}
function Id(e, t, n, r) {
  switch (kd(t)) {
    case 1:
      var i = ug;
      break;
    case 4:
      i = cg;
      break;
    default:
      i = sa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !bs ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ps(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = on(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  ad(function () {
    var u = o,
      c = na(n),
      f = [];
    e: {
      var d = Fd.get(e);
      if (d !== void 0) {
        var m = aa,
          y = e;
        switch (e) {
          case "keypress":
            if (_i(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Tg;
            break;
          case "focusin":
            (y = "focus"), (m = ls);
            break;
          case "focusout":
            (y = "blur"), (m = ls);
            break;
          case "beforeblur":
          case "afterblur":
            m = ls;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = hg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Vg;
            break;
          case Nd:
          case Rd:
          case _d:
            m = gg;
            break;
          case Od:
            m = jg;
            break;
          case "scroll":
            m = fg;
            break;
          case "wheel":
            m = Dg;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = vg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Vu;
        }
        var v = (t & 4) !== 0,
          E = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              g !== null && ((x = Or(h, g)), x != null && v.push(Hr(h, x, p)))),
            E)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Js &&
            (y = n.relatedTarget || n.fromElement) &&
            (on(y) || y[vt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? on(y) : null),
              y !== null &&
                ((E = yn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = Eu),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Vu),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (E = m == null ? d : Ln(m)),
            (p = y == null ? d : Ln(y)),
            (d = new v(x, h + "leave", m, n, c)),
            (d.target = E),
            (d.relatedTarget = p),
            (x = null),
            on(c) === u &&
              ((v = new v(g, h + "enter", y, n, c)),
              (v.target = p),
              (v.relatedTarget = E),
              (x = v)),
            (E = x),
            m && y)
          )
            t: {
              for (v = m, g = y, h = 0, p = v; p; p = Sn(p)) h++;
              for (p = 0, x = g; x; x = Sn(x)) p++;
              for (; 0 < h - p; ) (v = Sn(v)), h--;
              for (; 0 < p - h; ) (g = Sn(g)), p--;
              for (; h--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = Sn(v)), (g = Sn(g));
              }
              v = null;
            }
          else v = null;
          m !== null && Iu(f, d, m, v, !1),
            y !== null && E !== null && Iu(f, E, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Ln(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var S = Ig;
        else if (Au(d))
          if (Vd) S = Hg;
          else {
            S = Ug;
            var T = Bg;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = $g);
        if (S && (S = S(e, u))) {
          Ld(f, S, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            Gs(d, "number", d.value);
      }
      switch (((T = u ? Ln(u) : window), e)) {
        case "focusin":
          (Au(T) || T.contentEditable === "true") &&
            ((Tn = T), (il = u), (Pr = null));
          break;
        case "focusout":
          Pr = il = Tn = null;
          break;
        case "mousedown":
          ol = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ol = !1), Ou(f, n, c);
          break;
        case "selectionchange":
          if (Gg) break;
        case "keydown":
        case "keyup":
          Ou(f, n, c);
      }
      var C;
      if (ca)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Cn
          ? Td(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Cd &&
          n.locale !== "ko" &&
          (Cn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Cn && (C = Pd())
            : ((jt = c),
              (la = "value" in jt ? jt.value : jt.textContent),
              (Cn = !0))),
        (T = eo(u, P)),
        0 < T.length &&
          ((P = new Lu(P, e, null, n, c)),
          f.push({ event: P, listeners: T }),
          C ? (P.data = C) : ((C = Ed(n)), C !== null && (P.data = C)))),
        (C = Rg ? _g(e, n) : Og(e, n)) &&
          ((u = eo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Lu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    zd(f, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function eo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Or(e, n)),
      o != null && r.unshift(Hr(e, o, i)),
      (o = Or(e, t)),
      o != null && r.push(Hr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Iu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Or(n, o)), a != null && s.unshift(Hr(n, a, l)))
        : i || ((a = Or(n, o)), a != null && s.push(Hr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Zg = /\r\n?/g,
  Jg = /\u0000|\uFFFD/g;
function Bu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zg,
      `
`
    )
    .replace(Jg, "");
}
function xi(e, t, n) {
  if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(k(425));
}
function to() {}
var sl = null,
  ll = null;
function al(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ul = typeof setTimeout == "function" ? setTimeout : void 0,
  qg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uu = typeof Promise == "function" ? Promise : void 0,
  bg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Uu < "u"
      ? function (e) {
          return Uu.resolve(null).then(e).catch(ey);
        }
      : ul;
function ey(e) {
  setTimeout(function () {
    throw e;
  });
}
function ms(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ir(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ir(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $u(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tr = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + tr,
  Wr = "__reactProps$" + tr,
  vt = "__reactContainer$" + tr,
  cl = "__reactEvents$" + tr,
  ty = "__reactListeners$" + tr,
  ny = "__reactHandles$" + tr;
function on(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $u(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = $u(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ni(e) {
  return (
    (e = e[ot] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Ao(e) {
  return e[Wr] || null;
}
var fl = [],
  Vn = -1;
function Qt(e) {
  return { current: e };
}
function $(e) {
  0 > Vn || ((e.current = fl[Vn]), (fl[Vn] = null), Vn--);
}
function B(e, t) {
  Vn++, (fl[Vn] = e.current), (e.current = t);
}
var Ht = {},
  me = Qt(Ht),
  Te = Qt(!1),
  fn = Ht;
function Kn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function no() {
  $(Te), $(me);
}
function Hu(e, t, n) {
  if (me.current !== Ht) throw Error(k(168));
  B(me, t), B(Te, n);
}
function Bd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Bm(e) || "Unknown", i));
  return Y({}, n, r);
}
function ro(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (fn = me.current),
    B(me, e),
    B(Te, Te.current),
    !0
  );
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Bd(e, t, fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Te),
      $(me),
      B(me, e))
    : $(Te),
    B(Te, n);
}
var ct = null,
  Do = !1,
  gs = !1;
function Ud(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function ry(e) {
  (Do = !0), Ud(e);
}
function Yt() {
  if (!gs && ct !== null) {
    gs = !0;
    var e = 0,
      t = I;
    try {
      var n = ct;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (Do = !1);
    } catch (i) {
      throw (ct !== null && (ct = ct.slice(e + 1)), dd(ra, Yt), i);
    } finally {
      (I = t), (gs = !1);
    }
  }
  return null;
}
var Mn = [],
  jn = 0,
  io = null,
  oo = 0,
  Ie = [],
  Be = 0,
  dn = null,
  ft = 1,
  dt = "";
function en(e, t) {
  (Mn[jn++] = oo), (Mn[jn++] = io), (io = e), (oo = t);
}
function $d(e, t, n) {
  (Ie[Be++] = ft), (Ie[Be++] = dt), (Ie[Be++] = dn), (dn = e);
  var r = ft;
  e = dt;
  var i = 32 - Ze(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ze(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ft = (1 << (32 - Ze(t) + i)) | (n << i) | r),
      (dt = o + e);
  } else (ft = (1 << o) | (n << i) | r), (dt = e);
}
function da(e) {
  e.return !== null && (en(e, 1), $d(e, 1, 0));
}
function ha(e) {
  for (; e === io; )
    (io = Mn[--jn]), (Mn[jn] = null), (oo = Mn[--jn]), (Mn[jn] = null);
  for (; e === dn; )
    (dn = Ie[--Be]),
      (Ie[Be] = null),
      (dt = Ie[--Be]),
      (Ie[Be] = null),
      (ft = Ie[--Be]),
      (Ie[Be] = null);
}
var De = null,
  Ae = null,
  W = !1,
  Ye = null;
function Hd(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (De = e), (Ae = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (De = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = dn !== null ? { id: ft, overflow: dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (De = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function dl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hl(e) {
  if (W) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Ku(e, t)) {
        if (dl(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = De;
        t && Ku(e, t)
          ? Hd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (De = e));
      }
    } else {
      if (dl(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (De = e);
    }
  }
}
function Gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  De = e;
}
function wi(e) {
  if (e !== De) return !1;
  if (!W) return Gu(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !al(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (dl(e)) throw (Wd(), Error(k(418)));
    for (; t; ) Hd(e, t), (t = _t(t.nextSibling));
  }
  if ((Gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = De ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Wd() {
  for (var e = Ae; e; ) e = _t(e.nextSibling);
}
function Gn() {
  (Ae = De = null), (W = !1);
}
function pa(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var iy = St.ReactCurrentBatchConfig;
function Ge(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var so = Qt(null),
  lo = null,
  An = null,
  ma = null;
function ga() {
  ma = An = lo = null;
}
function ya(e) {
  var t = so.current;
  $(so), (e._currentValue = t);
}
function pl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  (lo = e),
    (ma = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (ma !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (lo === null) throw Error(k(308));
      (An = e), (lo.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var sn = null;
function va(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function Kd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), va(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function xa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Gd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), va(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Oi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ia(e, n);
  }
}
function Qu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ao(e, t, n, r) {
  var i = e.updateQueue;
  Et = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = Y({}, f, d);
              break e;
            case 2:
              Et = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (pn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Yu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Qd = new Kf.Component().refs;
function ml(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = zt(e),
      o = pt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (Je(t, e, i, r), Oi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ve(),
      i = zt(e),
      o = pt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (Je(t, e, i, r), Oi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ve(),
      r = zt(e),
      i = pt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ot(e, i, r)),
      t !== null && (Je(t, e, r, n), Oi(t, e, r));
  },
};
function Xu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(i, o)
      : !0
  );
}
function Yd(e, t, n) {
  var r = !1,
    i = Ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = He(o))
      : ((i = Ee(t) ? fn : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Kn(e, i) : Ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = No),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Zu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && No.enqueueReplaceState(t, t.state, null);
}
function gl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Qd), xa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = He(o))
    : ((o = Ee(t) ? fn : me.current), (i.context = Kn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ml(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && No.enqueueReplaceState(i, i.state, null),
      ao(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function lr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Qd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Si(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ju(e) {
  var t = e._init;
  return t(e._payload);
}
function Xd(e) {
  function t(g, h) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [h]), (g.flags |= 16)) : p.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function i(g, h) {
    return (g = It(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, h, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((g.flags |= 2), h) : p)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, p, x) {
    return h === null || h.tag !== 6
      ? ((h = Ps(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function a(g, h, p, x) {
    var S = p.type;
    return S === Pn
      ? c(g, h, p.props.children, x, p.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Tt &&
            Ju(S) === h.type))
      ? ((x = i(h, p.props)), (x.ref = lr(g, h, p)), (x.return = g), x)
      : ((x = $i(p.type, p.key, p.props, null, g.mode, x)),
        (x.ref = lr(g, h, p)),
        (x.return = g),
        x);
  }
  function u(g, h, p, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = Cs(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p.children || [])), (h.return = g), h);
  }
  function c(g, h, p, x, S) {
    return h === null || h.tag !== 7
      ? ((h = cn(p, g.mode, x, S)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function f(g, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ps("" + h, g.mode, p)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ci:
          return (
            (p = $i(h.type, h.key, h.props, null, g.mode, p)),
            (p.ref = lr(g, null, h)),
            (p.return = g),
            p
          );
        case kn:
          return (h = Cs(h, g.mode, p)), (h.return = g), h;
        case Tt:
          var x = h._init;
          return f(g, x(h._payload), p);
      }
      if (mr(h) || nr(h))
        return (h = cn(h, g.mode, p, null)), (h.return = g), h;
      Si(g, h);
    }
    return null;
  }
  function d(g, h, p, x) {
    var S = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : l(g, h, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ci:
          return p.key === S ? a(g, h, p, x) : null;
        case kn:
          return p.key === S ? u(g, h, p, x) : null;
        case Tt:
          return (S = p._init), d(g, h, S(p._payload), x);
      }
      if (mr(p) || nr(p)) return S !== null ? null : c(g, h, p, x, null);
      Si(g, p);
    }
    return null;
  }
  function m(g, h, p, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(p) || null), l(h, g, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ci:
          return (g = g.get(x.key === null ? p : x.key) || null), a(h, g, x, S);
        case kn:
          return (g = g.get(x.key === null ? p : x.key) || null), u(h, g, x, S);
        case Tt:
          var T = x._init;
          return m(g, h, p, T(x._payload), S);
      }
      if (mr(x) || nr(x)) return (g = g.get(p) || null), c(h, g, x, S, null);
      Si(h, x);
    }
    return null;
  }
  function y(g, h, p, x) {
    for (
      var S = null, T = null, C = h, P = (h = 0), N = null;
      C !== null && P < p.length;
      P++
    ) {
      C.index > P ? ((N = C), (C = null)) : (N = C.sibling);
      var A = d(g, C, p[P], x);
      if (A === null) {
        C === null && (C = N);
        break;
      }
      e && C && A.alternate === null && t(g, C),
        (h = o(A, h, P)),
        T === null ? (S = A) : (T.sibling = A),
        (T = A),
        (C = N);
    }
    if (P === p.length) return n(g, C), W && en(g, P), S;
    if (C === null) {
      for (; P < p.length; P++)
        (C = f(g, p[P], x)),
          C !== null &&
            ((h = o(C, h, P)), T === null ? (S = C) : (T.sibling = C), (T = C));
      return W && en(g, P), S;
    }
    for (C = r(g, C); P < p.length; P++)
      (N = m(C, g, P, p[P], x)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? P : N.key),
          (h = o(N, h, P)),
          T === null ? (S = N) : (T.sibling = N),
          (T = N));
    return (
      e &&
        C.forEach(function (J) {
          return t(g, J);
        }),
      W && en(g, P),
      S
    );
  }
  function v(g, h, p, x) {
    var S = nr(p);
    if (typeof S != "function") throw Error(k(150));
    if (((p = S.call(p)), p == null)) throw Error(k(151));
    for (
      var T = (S = null), C = h, P = (h = 0), N = null, A = p.next();
      C !== null && !A.done;
      P++, A = p.next()
    ) {
      C.index > P ? ((N = C), (C = null)) : (N = C.sibling);
      var J = d(g, C, A.value, x);
      if (J === null) {
        C === null && (C = N);
        break;
      }
      e && C && J.alternate === null && t(g, C),
        (h = o(J, h, P)),
        T === null ? (S = J) : (T.sibling = J),
        (T = J),
        (C = N);
    }
    if (A.done) return n(g, C), W && en(g, P), S;
    if (C === null) {
      for (; !A.done; P++, A = p.next())
        (A = f(g, A.value, x)),
          A !== null &&
            ((h = o(A, h, P)), T === null ? (S = A) : (T.sibling = A), (T = A));
      return W && en(g, P), S;
    }
    for (C = r(g, C); !A.done; P++, A = p.next())
      (A = m(C, g, P, A.value, x)),
        A !== null &&
          (e && A.alternate !== null && C.delete(A.key === null ? P : A.key),
          (h = o(A, h, P)),
          T === null ? (S = A) : (T.sibling = A),
          (T = A));
    return (
      e &&
        C.forEach(function (Se) {
          return t(g, Se);
        }),
      W && en(g, P),
      S
    );
  }
  function E(g, h, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Pn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ci:
          e: {
            for (var S = p.key, T = h; T !== null; ) {
              if (T.key === S) {
                if (((S = p.type), S === Pn)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (h = i(T, p.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Tt &&
                    Ju(S) === T.type)
                ) {
                  n(g, T.sibling),
                    (h = i(T, p.props)),
                    (h.ref = lr(g, T, p)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            p.type === Pn
              ? ((h = cn(p.props.children, g.mode, x, p.key)),
                (h.return = g),
                (g = h))
              : ((x = $i(p.type, p.key, p.props, null, g.mode, x)),
                (x.ref = lr(g, h, p)),
                (x.return = g),
                (g = x));
          }
          return s(g);
        case kn:
          e: {
            for (T = p.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(g, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = Cs(p, g.mode, x)), (h.return = g), (g = h);
          }
          return s(g);
        case Tt:
          return (T = p._init), E(g, h, T(p._payload), x);
      }
      if (mr(p)) return y(g, h, p, x);
      if (nr(p)) return v(g, h, p, x);
      Si(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = i(h, p)), (h.return = g), (g = h))
          : (n(g, h), (h = Ps(p, g.mode, x)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return E;
}
var Qn = Xd(!0),
  Zd = Xd(!1),
  ri = {},
  lt = Qt(ri),
  Kr = Qt(ri),
  Gr = Qt(ri);
function ln(e) {
  if (e === ri) throw Error(k(174));
  return e;
}
function wa(e, t) {
  switch ((B(Gr, t), B(Kr, e), B(lt, ri), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ys(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ys(t, e));
  }
  $(lt), B(lt, t);
}
function Yn() {
  $(lt), $(Kr), $(Gr);
}
function Jd(e) {
  ln(Gr.current);
  var t = ln(lt.current),
    n = Ys(t, e.type);
  t !== n && (B(Kr, e), B(lt, n));
}
function Sa(e) {
  Kr.current === e && ($(lt), $(Kr));
}
var K = Qt(0);
function uo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ys = [];
function ka() {
  for (var e = 0; e < ys.length; e++)
    ys[e]._workInProgressVersionPrimary = null;
  ys.length = 0;
}
var Fi = St.ReactCurrentDispatcher,
  vs = St.ReactCurrentBatchConfig,
  hn = 0,
  Q = null,
  ie = null,
  se = null,
  co = !1,
  Cr = !1,
  Qr = 0,
  oy = 0;
function de() {
  throw Error(k(321));
}
function Pa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Ca(e, t, n, r, i, o) {
  if (
    ((hn = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = e === null || e.memoizedState === null ? uy : cy),
    (e = n(r, i)),
    Cr)
  ) {
    o = 0;
    do {
      if (((Cr = !1), (Qr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (se = ie = null),
        (t.updateQueue = null),
        (Fi.current = fy),
        (e = n(r, i));
    } while (Cr);
  }
  if (
    ((Fi.current = fo),
    (t = ie !== null && ie.next !== null),
    (hn = 0),
    (se = ie = Q = null),
    (co = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ta() {
  var e = Qr !== 0;
  return (Qr = 0), e;
}
function rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (Q.memoizedState = se = e) : (se = se.next = e), se;
}
function We() {
  if (ie === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = se === null ? Q.memoizedState : se.next;
  if (t !== null) (se = t), (ie = e);
  else {
    if (e === null) throw Error(k(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      se === null ? (Q.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Yr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xs(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((hn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Q.lanes |= c),
          (pn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      qe(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Q.lanes |= o), (pn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ws(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    qe(o, t.memoizedState) || (Ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function qd() {}
function bd(e, t) {
  var n = Q,
    r = We(),
    i = t(),
    o = !qe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    Ea(nh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xr(9, th.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(k(349));
    hn & 30 || eh(n, t, i);
  }
  return i;
}
function eh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function th(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), rh(t) && ih(e);
}
function nh(e, t, n) {
  return n(function () {
    rh(t) && ih(e);
  });
}
function rh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function ih(e) {
  var t = xt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function qu(e) {
  var t = rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ay.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Xr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function oh() {
  return We().memoizedState;
}
function zi(e, t, n, r) {
  var i = rt();
  (Q.flags |= e),
    (i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ro(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var s = ie.memoizedState;
    if (((o = s.destroy), r !== null && Pa(r, s.deps))) {
      i.memoizedState = Xr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = Xr(1 | t, n, o, r));
}
function bu(e, t) {
  return zi(8390656, 8, e, t);
}
function Ea(e, t) {
  return Ro(2048, 8, e, t);
}
function sh(e, t) {
  return Ro(4, 2, e, t);
}
function lh(e, t) {
  return Ro(4, 4, e, t);
}
function ah(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function uh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ro(4, 4, ah.bind(null, t, e), n)
  );
}
function La() {}
function ch(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fh(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dh(e, t, n) {
  return hn & 21
    ? (qe(n, t) || ((n = md()), (Q.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function sy(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = vs.transition;
  vs.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (vs.transition = r);
  }
}
function hh() {
  return We().memoizedState;
}
function ly(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ph(e))
  )
    mh(t, n);
  else if (((n = Kd(e, t, n, r)), n !== null)) {
    var i = ve();
    Je(n, e, r, i), gh(n, t, r);
  }
}
function ay(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ph(e)) mh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), qe(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), va(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Kd(e, t, i, r)),
      n !== null && ((i = ve()), Je(n, e, r, i), gh(n, t, r));
  }
}
function ph(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function mh(e, t) {
  Cr = co = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function gh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ia(e, n);
  }
}
var fo = {
    readContext: He,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  uy = {
    readContext: He,
    useCallback: function (e, t) {
      return (rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zi(4194308, 4, ah.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ly.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: qu,
    useDebugValue: La,
    useDeferredValue: function (e) {
      return (rt().memoizedState = e);
    },
    useTransition: function () {
      var e = qu(!1),
        t = e[0];
      return (e = sy.bind(null, e[1])), (rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = rt();
      if (W) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(k(349));
        hn & 30 || eh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        bu(nh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Xr(9, th.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rt(),
        t = ae.identifierPrefix;
      if (W) {
        var n = dt,
          r = ft;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = oy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cy = {
    readContext: He,
    useCallback: ch,
    useContext: He,
    useEffect: Ea,
    useImperativeHandle: uh,
    useInsertionEffect: sh,
    useLayoutEffect: lh,
    useMemo: fh,
    useReducer: xs,
    useRef: oh,
    useState: function () {
      return xs(Yr);
    },
    useDebugValue: La,
    useDeferredValue: function (e) {
      var t = We();
      return dh(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = xs(Yr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: qd,
    useSyncExternalStore: bd,
    useId: hh,
    unstable_isNewReconciler: !1,
  },
  fy = {
    readContext: He,
    useCallback: ch,
    useContext: He,
    useEffect: Ea,
    useImperativeHandle: uh,
    useInsertionEffect: sh,
    useLayoutEffect: lh,
    useMemo: fh,
    useReducer: ws,
    useRef: oh,
    useState: function () {
      return ws(Yr);
    },
    useDebugValue: La,
    useDeferredValue: function (e) {
      var t = We();
      return ie === null ? (t.memoizedState = e) : dh(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = ws(Yr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: qd,
    useSyncExternalStore: bd,
    useId: hh,
    unstable_isNewReconciler: !1,
  };
function Xn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Im(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ss(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var dy = typeof WeakMap == "function" ? WeakMap : Map;
function yh(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      po || ((po = !0), (Ll = r)), yl(e, t);
    }),
    n
  );
}
function vh(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        yl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        yl(e, t),
          typeof r != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ec(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dy();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ey.bind(null, e, t, n)), t.then(e, e));
}
function tc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function nc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pt(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hy = St.ReactCurrentOwner,
  Ce = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Zd(t, null, n, r) : Qn(t, e.child, n, r);
}
function rc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    $n(t, i),
    (r = Ca(e, t, n, r, o, i)),
    (n = Ta()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        wt(e, t, i))
      : (W && n && da(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  );
}
function ic(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !_a(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), xh(e, t, o, r, i))
      : ((e = $i(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(s, r) && e.ref === t.ref)
    )
      return wt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = It(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function xh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ur(o, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), wt(e, t, i);
  }
  return vl(e, t, n, r, i);
}
function wh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Nn, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          B(Nn, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        B(Nn, je),
        (je |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Nn, je),
      (je |= r);
  return ye(e, t, i, n), t.child;
}
function Sh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vl(e, t, n, r, i) {
  var o = Ee(n) ? fn : me.current;
  return (
    (o = Kn(t, o)),
    $n(t, i),
    (n = Ca(e, t, n, r, o, i)),
    (r = Ta()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        wt(e, t, i))
      : (W && r && da(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  );
}
function oc(e, t, n, r, i) {
  if (Ee(n)) {
    var o = !0;
    ro(t);
  } else o = !1;
  if (($n(t, i), t.stateNode === null))
    Ii(e, t), Yd(t, n, r), gl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = He(u))
      : ((u = Ee(n) ? fn : me.current), (u = Kn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Zu(t, s, r, u)),
      (Et = !1);
    var d = t.memoizedState;
    (s.state = d),
      ao(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Te.current || Et
        ? (typeof c == "function" && (ml(t, n, c, r), (a = t.memoizedState)),
          (l = Et || Xu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Gd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ge(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = He(a))
        : ((a = Ee(n) ? fn : me.current), (a = Kn(t, a)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && Zu(t, s, r, a)),
      (Et = !1),
      (d = t.memoizedState),
      (s.state = d),
      ao(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Te.current || Et
      ? (typeof m == "function" && (ml(t, n, m, r), (y = t.memoizedState)),
        (u = Et || Xu(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xl(e, t, n, r, o, i);
}
function xl(e, t, n, r, i, o) {
  Sh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Wu(t, n, !1), wt(e, t, o);
  (r = t.stateNode), (hy.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Qn(t, e.child, null, o)), (t.child = Qn(t, null, l, o)))
      : ye(e, t, l, o),
    (t.memoizedState = r.state),
    i && Wu(t, n, !0),
    t.child
  );
}
function kh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hu(e, t.context, !1),
    wa(e, t.containerInfo);
}
function sc(e, t, n, r, i) {
  return Gn(), pa(i), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var wl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ph(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(K, i & 1),
    e === null)
  )
    return (
      hl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Fo(s, r, 0, null)),
              (e = cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Sl(n)),
              (t.memoizedState = wl),
              e)
            : Va(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return py(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = It(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = It(l, o)) : ((o = cn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Sl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = wl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Va(e, t) {
  return (
    (t = Fo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ki(e, t, n, r) {
  return (
    r !== null && pa(r),
    Qn(t, e.child, null, n),
    (e = Va(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function py(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ss(Error(k(422)))), ki(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Fo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = cn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Qn(t, e.child, null, s),
        (t.child.memoizedState = Sl(s)),
        (t.memoizedState = wl),
        o);
  if (!(t.mode & 1)) return ki(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = Ss(o, r, void 0)), ki(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ce || l)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), xt(e, i), Je(r, e, i, -1));
    }
    return Ra(), (r = Ss(Error(k(421)))), ki(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ly.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = _t(i.nextSibling)),
      (De = t),
      (W = !0),
      (Ye = null),
      e !== null &&
        ((Ie[Be++] = ft),
        (Ie[Be++] = dt),
        (Ie[Be++] = dn),
        (ft = e.id),
        (dt = e.overflow),
        (dn = t)),
      (t = Va(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pl(e.return, t, n);
}
function ks(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ch(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ye(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lc(e, n, t);
        else if (e.tag === 19) lc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((B(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && uo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ks(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && uo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ks(t, !0, n, null, o);
        break;
      case "together":
        ks(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ii(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function my(e, t, n) {
  switch (t.tag) {
    case 3:
      kh(t), Gn();
      break;
    case 5:
      Jd(t);
      break;
    case 1:
      Ee(t.type) && ro(t);
      break;
    case 4:
      wa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      B(so, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ph(e, t, n)
          : (B(K, K.current & 1),
            (e = wt(e, t, n)),
            e !== null ? e.sibling : null);
      B(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ch(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wh(e, t, n);
  }
  return wt(e, t, n);
}
var Th, kl, Eh, Lh;
Th = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
kl = function () {};
Eh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ln(lt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ws(e, i)), (r = Ws(e, r)), (o = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Qs(e, i)), (r = Qs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = to);
    }
    Xs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Rr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Rr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Lh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ar(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gy(e, t, n) {
  var r = t.pendingProps;
  switch ((ha(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return Ee(t.type) && no(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Yn(),
        $(Te),
        $(me),
        ka(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (wi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (jl(Ye), (Ye = null)))),
        kl(e, t),
        he(t),
        null
      );
    case 5:
      Sa(t);
      var i = ln(Gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Eh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return he(t), null;
        }
        if (((e = ln(lt.current)), wi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ot] = t), (r[Wr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < yr.length; i++) U(yr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              gu(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              vu(r, o), U("invalid", r);
          }
          Xs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      xi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      xi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Rr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              fi(r), yu(r, o, !0);
              break;
            case "textarea":
              fi(r), xu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = to);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ed(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ot] = t),
            (e[Wr] = r),
            Th(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Zs(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < yr.length; i++) U(yr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                gu(e, r), (i = Ws(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                vu(e, r), (i = Qs(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            Xs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? rd(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && td(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && _r(e, a)
                    : typeof a == "number" && _r(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Rr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && U("scroll", e)
                      : a != null && ql(e, o, a, s));
              }
            switch (n) {
              case "input":
                fi(e), yu(e, r, !1);
                break;
              case "textarea":
                fi(e), xu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? zn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = to);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) Lh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = ln(Gr.current)), ln(lt.current), wi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (o = r.nodeValue !== n) && ((e = De), e !== null))
          )
            switch (e.tag) {
              case 3:
                xi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        ($(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Wd(), Gn(), (t.flags |= 98560), (o = !1);
        else if (((o = wi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[ot] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (o = !1);
        } else Ye !== null && (jl(Ye), (Ye = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? oe === 0 && (oe = 3) : Ra())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Yn(), kl(e, t), e === null && $r(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return ya(t.type._context), he(t), null;
    case 17:
      return Ee(t.type) && no(), he(t), null;
    case 19:
      if (($(K), (o = t.memoizedState), o === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ar(o, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = uo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ar(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return B(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > Zn &&
            ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = uo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ar(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !W)
            )
              return he(t), null;
          } else
            2 * ee() - o.renderingStartTime > Zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ar(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          B(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        Na(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function yy(e, t) {
  switch ((ha(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && no(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Yn(),
        $(Te),
        $(me),
        ka(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Sa(t), null;
    case 13:
      if (($(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(K), null;
    case 4:
      return Yn(), null;
    case 10:
      return ya(t.type._context), null;
    case 22:
    case 23:
      return Na(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pi = !1,
  pe = !1,
  vy = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function Pl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ac = !1;
function xy(e, t) {
  if (((sl = qi), (e = Ad()), fa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ll = { focusedElem: e, selectionRange: n }, qi = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    E = y.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ge(t.type, v),
                      E
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          X(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = ac), (ac = !1), y;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Pl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function _o(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Cl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[Wr], delete t[cl], delete t[ty], delete t[ny])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Mh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Mh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Tl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = to));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tl(e, t, n), e = e.sibling; e !== null; ) Tl(e, t, n), (e = e.sibling);
}
function El(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (El(e, t, n), e = e.sibling; e !== null; ) El(e, t, n), (e = e.sibling);
}
var ue = null,
  Qe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) jh(e, t, n), (n = n.sibling);
}
function jh(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function")
    try {
      st.onCommitFiberUnmount(Lo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || Dn(n, t);
    case 6:
      var r = ue,
        i = Qe;
      (ue = null),
        kt(e, t, n),
        (ue = r),
        (Qe = i),
        ue !== null &&
          (Qe
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Qe
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? ms(e.parentNode, n)
              : e.nodeType === 1 && ms(e, n),
            Ir(e))
          : ms(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (i = Qe),
        (ue = n.stateNode.containerInfo),
        (Qe = !0),
        kt(e, t, n),
        (ue = r),
        (Qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Pl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (Dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), kt(e, t, n), (pe = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function cc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vy()),
      t.forEach(function (r) {
        var i = Vy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ue = l.stateNode), (Qe = !1);
              break e;
            case 3:
              (ue = l.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ue = l.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          l = l.return;
        }
        if (ue === null) throw Error(k(160));
        jh(o, s, i), (ue = null), (Qe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ah(t, e), (t = t.sibling);
}
function Ah(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), nt(e), r & 4)) {
        try {
          Tr(3, e, e.return), _o(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          Tr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      Ke(t, e), nt(e), r & 512 && n !== null && Dn(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        nt(e),
        r & 512 && n !== null && Dn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          _r(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && qf(i, o),
              Zs(l, s);
            var u = Zs(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? rd(i, f)
                : c === "dangerouslySetInnerHTML"
                ? td(i, f)
                : c === "children"
                ? _r(i, f)
                : ql(i, c, f, u);
            }
            switch (l) {
              case "input":
                Ks(i, o);
                break;
              case "textarea":
                bf(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? zn(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? zn(i, !!o.multiple, o.defaultValue, !0)
                      : zn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Wr] = o;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ir(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      Ke(t, e), nt(e);
      break;
    case 13:
      Ke(t, e),
        nt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Aa = ee())),
        r & 4 && cc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Ke(t, e), (pe = u)) : Ke(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, d, d.return);
                  break;
                case 1:
                  Dn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Dn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    dc(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (V = m)) : dc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = nd("display", s)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), nt(e), r & 4 && cc(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), nt(e);
  }
}
function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Mh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (_r(i, ""), (r.flags &= -33));
          var o = uc(e);
          El(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = uc(e);
          Tl(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wy(e, t, n) {
  (V = e), Dh(e);
}
function Dh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Pi;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = Pi;
        var u = pe;
        if (((Pi = s), (pe = a) && !u))
          for (V = i; V !== null; )
            (s = V),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? hc(i)
                : a !== null
                ? ((a.return = s), (V = a))
                : hc(i);
        for (; o !== null; ) (V = o), Dh(o), (o = o.sibling);
        (V = i), (Pi = l), (pe = u);
      }
      fc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : fc(e);
  }
}
function fc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || _o(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ge(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Yu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ir(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        pe || (t.flags & 512 && Cl(t));
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function dc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function hc(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _o(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var o = t.return;
          try {
            Cl(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Cl(t);
          } catch (a) {
            X(t, s, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (V = l);
      break;
    }
    V = t.return;
  }
}
var Sy = Math.ceil,
  ho = St.ReactCurrentDispatcher,
  Ma = St.ReactCurrentOwner,
  $e = St.ReactCurrentBatchConfig,
  F = 0,
  ae = null,
  ne = null,
  ce = 0,
  je = 0,
  Nn = Qt(0),
  oe = 0,
  Zr = null,
  pn = 0,
  Oo = 0,
  ja = 0,
  Er = null,
  Pe = null,
  Aa = 0,
  Zn = 1 / 0,
  ut = null,
  po = !1,
  Ll = null,
  Ft = null,
  Ci = !1,
  At = null,
  mo = 0,
  Lr = 0,
  Vl = null,
  Bi = -1,
  Ui = 0;
function ve() {
  return F & 6 ? ee() : Bi !== -1 ? Bi : (Bi = ee());
}
function zt(e) {
  return e.mode & 1
    ? F & 2 && ce !== 0
      ? ce & -ce
      : iy.transition !== null
      ? (Ui === 0 && (Ui = md()), Ui)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : kd(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (Vl = null), Error(k(185)));
  ei(e, n, r),
    (!(F & 2) || e !== ae) &&
      (e === ae && (!(F & 2) && (Oo |= n), oe === 4 && Mt(e, ce)),
      Le(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Zn = ee() + 500), Do && Yt()));
}
function Le(e, t) {
  var n = e.callbackNode;
  ig(e, t);
  var r = Ji(e, e === ae ? ce : 0);
  if (r === 0)
    n !== null && ku(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ku(n), t === 1))
      e.tag === 0 ? ry(pc.bind(null, e)) : Ud(pc.bind(null, e)),
        bg(function () {
          !(F & 6) && Yt();
        }),
        (n = null);
    else {
      switch (gd(r)) {
        case 1:
          n = ra;
          break;
        case 4:
          n = hd;
          break;
        case 16:
          n = Zi;
          break;
        case 536870912:
          n = pd;
          break;
        default:
          n = Zi;
      }
      n = Bh(n, Nh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nh(e, t) {
  if (((Bi = -1), (Ui = 0), F & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Ji(e, e === ae ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = go(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = _h();
    (ae !== e || ce !== t) && ((ut = null), (Zn = ee() + 500), un(e, t));
    do
      try {
        Cy();
        break;
      } catch (l) {
        Rh(e, l);
      }
    while (1);
    ga(),
      (ho.current = o),
      (F = i),
      ne !== null ? (t = 0) : ((ae = null), (ce = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = tl(e)), i !== 0 && ((r = i), (t = Ml(e, i)))), t === 1)
    )
      throw ((n = Zr), un(e, 0), Mt(e, r), Le(e, ee()), n);
    if (t === 6) Mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ky(i) &&
          ((t = go(e, r)),
          t === 2 && ((o = tl(e)), o !== 0 && ((r = o), (t = Ml(e, o)))),
          t === 1))
      )
        throw ((n = Zr), un(e, 0), Mt(e, r), Le(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          tn(e, Pe, ut);
          break;
        case 3:
          if (
            (Mt(e, r), (r & 130023424) === r && ((t = Aa + 500 - ee()), 10 < t))
          ) {
            if (Ji(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ul(tn.bind(null, e, Pe, ut), t);
            break;
          }
          tn(e, Pe, ut);
          break;
        case 4:
          if ((Mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ze(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Sy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ul(tn.bind(null, e, Pe, ut), r);
            break;
          }
          tn(e, Pe, ut);
          break;
        case 5:
          tn(e, Pe, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Le(e, ee()), e.callbackNode === n ? Nh.bind(null, e) : null;
}
function Ml(e, t) {
  var n = Er;
  return (
    e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
    (e = go(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && jl(t)),
    e
  );
}
function jl(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function ky(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!qe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Mt(e, t) {
  for (
    t &= ~ja,
      t &= ~Oo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pc(e) {
  if (F & 6) throw Error(k(327));
  Hn();
  var t = Ji(e, 0);
  if (!(t & 1)) return Le(e, ee()), null;
  var n = go(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = tl(e);
    r !== 0 && ((t = r), (n = Ml(e, r)));
  }
  if (n === 1) throw ((n = Zr), un(e, 0), Mt(e, t), Le(e, ee()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tn(e, Pe, ut),
    Le(e, ee()),
    null
  );
}
function Da(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Zn = ee() + 500), Do && Yt());
  }
}
function mn(e) {
  At !== null && At.tag === 0 && !(F & 6) && Hn();
  var t = F;
  F |= 1;
  var n = $e.transition,
    r = I;
  try {
    if ((($e.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), ($e.transition = n), (F = t), !(F & 6) && Yt();
  }
}
function Na() {
  (je = Nn.current), $(Nn);
}
function un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qg(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((ha(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && no();
          break;
        case 3:
          Yn(), $(Te), $(me), ka();
          break;
        case 5:
          Sa(r);
          break;
        case 4:
          Yn();
          break;
        case 13:
          $(K);
          break;
        case 19:
          $(K);
          break;
        case 10:
          ya(r.type._context);
          break;
        case 22:
        case 23:
          Na();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ne = e = It(e.current, null)),
    (ce = je = t),
    (oe = 0),
    (Zr = null),
    (ja = Oo = pn = 0),
    (Pe = Er = null),
    sn !== null)
  ) {
    for (t = 0; t < sn.length; t++)
      if (((n = sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    sn = null;
  }
  return e;
}
function Rh(e, t) {
  do {
    var n = ne;
    try {
      if ((ga(), (Fi.current = fo), co)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        co = !1;
      }
      if (
        ((hn = 0),
        (se = ie = Q = null),
        (Cr = !1),
        (Qr = 0),
        (Ma.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (Zr = t), (ne = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ce),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = tc(s);
          if (m !== null) {
            (m.flags &= -257),
              nc(m, s, l, o, t),
              m.mode & 1 && ec(o, u, t),
              (t = m),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ec(o, u, t), Ra();
              break e;
            }
            a = Error(k(426));
          }
        } else if (W && l.mode & 1) {
          var E = tc(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              nc(E, s, l, o, t),
              pa(Xn(a, l));
            break e;
          }
        }
        (o = a = Xn(a, l)),
          oe !== 4 && (oe = 2),
          Er === null ? (Er = [o]) : Er.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = yh(o, a, t);
              Qu(o, g);
              break e;
            case 1:
              l = a;
              var h = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = vh(o, l, t);
                Qu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Fh(n);
    } catch (S) {
      (t = S), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function _h() {
  var e = ho.current;
  return (ho.current = fo), e === null ? fo : e;
}
function Ra() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ae === null || (!(pn & 268435455) && !(Oo & 268435455)) || Mt(ae, ce);
}
function go(e, t) {
  var n = F;
  F |= 2;
  var r = _h();
  (ae !== e || ce !== t) && ((ut = null), un(e, t));
  do
    try {
      Py();
      break;
    } catch (i) {
      Rh(e, i);
    }
  while (1);
  if ((ga(), (F = n), (ho.current = r), ne !== null)) throw Error(k(261));
  return (ae = null), (ce = 0), oe;
}
function Py() {
  for (; ne !== null; ) Oh(ne);
}
function Cy() {
  for (; ne !== null && !Xm(); ) Oh(ne);
}
function Oh(e) {
  var t = Ih(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? Fh(e) : (ne = t),
    (Ma.current = null);
}
function Fh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yy(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (ne = null);
        return;
      }
    } else if (((n = gy(n, t, je)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function tn(e, t, n) {
  var r = I,
    i = $e.transition;
  try {
    ($e.transition = null), (I = 1), Ty(e, t, n, r);
  } finally {
    ($e.transition = i), (I = r);
  }
  return null;
}
function Ty(e, t, n, r) {
  do Hn();
  while (At !== null);
  if (F & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (og(e, o),
    e === ae && ((ne = ae = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ci ||
      ((Ci = !0),
      Bh(Zi, function () {
        return Hn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = $e.transition), ($e.transition = null);
    var s = I;
    I = 1;
    var l = F;
    (F |= 4),
      (Ma.current = null),
      xy(e, n),
      Ah(n, e),
      Kg(ll),
      (qi = !!sl),
      (ll = sl = null),
      (e.current = n),
      wy(n),
      Zm(),
      (F = l),
      (I = s),
      ($e.transition = o);
  } else e.current = n;
  if (
    (Ci && ((Ci = !1), (At = e), (mo = i)),
    (o = e.pendingLanes),
    o === 0 && (Ft = null),
    bm(n.stateNode),
    Le(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (po) throw ((po = !1), (e = Ll), (Ll = null), e);
  return (
    mo & 1 && e.tag !== 0 && Hn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Vl ? Lr++ : ((Lr = 0), (Vl = e))) : (Lr = 0),
    Yt(),
    null
  );
}
function Hn() {
  if (At !== null) {
    var e = gd(mo),
      t = $e.transition,
      n = I;
    try {
      if ((($e.transition = null), (I = 16 > e ? 16 : e), At === null))
        var r = !1;
      else {
        if (((e = At), (At = null), (mo = 0), F & 6)) throw Error(k(331));
        var i = F;
        for (F |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        m = c.return;
                      if ((Vh(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (V = d);
                        break;
                      }
                      V = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (V = g);
                break e;
              }
              V = o.return;
            }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          s = V;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (V = p);
          else
            e: for (s = h; V !== null; ) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _o(9, l);
                  }
                } catch (S) {
                  X(l, l.return, S);
                }
              if (l === s) {
                V = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (V = x);
                break e;
              }
              V = l.return;
            }
        }
        if (
          ((F = i), Yt(), st && typeof st.onPostCommitFiberRoot == "function")
        )
          try {
            st.onPostCommitFiberRoot(Lo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), ($e.transition = t);
    }
  }
  return !1;
}
function mc(e, t, n) {
  (t = Xn(n, t)),
    (t = yh(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = ve()),
    e !== null && (ei(e, 1, t), Le(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) mc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(r)))
        ) {
          (e = Xn(n, e)),
            (e = vh(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = ve()),
            t !== null && (ei(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ey(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (ce & n) === n &&
      (oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > ee() - Aa)
        ? un(e, 0)
        : (ja |= n)),
    Le(e, t);
}
function zh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pi), (pi <<= 1), !(pi & 130023424) && (pi = 4194304))
      : (t = 1));
  var n = ve();
  (e = xt(e, t)), e !== null && (ei(e, t, n), Le(e, n));
}
function Ly(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zh(e, n);
}
function Vy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), zh(e, n);
}
var Ih;
Ih = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), my(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), W && t.flags & 1048576 && $d(t, oo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ii(e, t), (e = t.pendingProps);
      var i = Kn(t, me.current);
      $n(t, n), (i = Ca(null, t, r, e, i, n));
      var o = Ta();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((o = !0), ro(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            xa(t),
            (i.updater = No),
            (t.stateNode = i),
            (i._reactInternals = t),
            gl(t, r, e, n),
            (t = xl(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && da(t), ye(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ii(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = jy(r)),
          (e = Ge(r, e)),
          i)
        ) {
          case 0:
            t = vl(null, t, r, e, n);
            break e;
          case 1:
            t = oc(null, t, r, e, n);
            break e;
          case 11:
            t = rc(null, t, r, e, n);
            break e;
          case 14:
            t = ic(null, t, r, Ge(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        vl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        oc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((kh(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Gd(e, t),
          ao(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Xn(Error(k(423)), t)), (t = sc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Xn(Error(k(424)), t)), (t = sc(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = _t(t.stateNode.containerInfo.firstChild),
                De = t,
                W = !0,
                Ye = null,
                n = Zd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === i)) {
            t = wt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jd(t),
        e === null && hl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        al(r, i) ? (s = null) : o !== null && al(r, o) && (t.flags |= 32),
        Sh(e, t),
        ye(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && hl(t), null;
    case 13:
      return Ph(e, t, n);
    case 4:
      return (
        wa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        rc(e, t, r, i, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          B(so, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (qe(o.value, s)) {
            if (o.children === i.children && !Te.current) {
              t = wt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = pt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      pl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  pl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ye(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ge(r, t.pendingProps)),
        (i = Ge(r.type, i)),
        ic(e, t, r, i, n)
      );
    case 15:
      return xh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ge(r, i)),
        Ii(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), ro(t)) : (e = !1),
        $n(t, n),
        Yd(t, r, i),
        gl(t, r, i, n),
        xl(null, t, r, !0, e, n)
      );
    case 19:
      return Ch(e, t, n);
    case 22:
      return wh(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Bh(e, t) {
  return dd(e, t);
}
function My(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ue(e, t, n, r) {
  return new My(e, t, n, r);
}
function _a(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jy(e) {
  if (typeof e == "function") return _a(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ea)) return 11;
    if (e === ta) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $i(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) _a(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Pn:
        return cn(n.children, i, o, t);
      case bl:
        (s = 8), (i |= 8);
        break;
      case Bs:
        return (
          (e = Ue(12, n, t, i | 2)), (e.elementType = Bs), (e.lanes = o), e
        );
      case Us:
        return (e = Ue(13, n, t, i)), (e.elementType = Us), (e.lanes = o), e;
      case $s:
        return (e = Ue(19, n, t, i)), (e.elementType = $s), (e.lanes = o), e;
      case Xf:
        return Fo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qf:
              s = 10;
              break e;
            case Yf:
              s = 9;
              break e;
            case ea:
              s = 11;
              break e;
            case ta:
              s = 14;
              break e;
            case Tt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function cn(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Fo(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = Xf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ps(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Cs(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ay(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = is(0)),
    (this.expirationTimes = is(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = is(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Oa(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Ay(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ue(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xa(o),
    e
  );
}
function Dy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: kn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uh(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return Bd(e, n, t);
  }
  return t;
}
function $h(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Oa(n, r, !0, e, i, o, s, l, a)),
    (e.context = Uh(null)),
    (n = e.current),
    (r = ve()),
    (i = zt(n)),
    (o = pt(r, i)),
    (o.callback = t ?? null),
    Ot(n, o, i),
    (e.current.lanes = i),
    ei(e, i, r),
    Le(e, r),
    e
  );
}
function zo(e, t, n, r) {
  var i = t.current,
    o = ve(),
    s = zt(i);
  return (
    (n = Uh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(i, t, s)),
    e !== null && (Je(e, i, s, o), Oi(e, i, s)),
    s
  );
}
function yo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fa(e, t) {
  gc(e, t), (e = e.alternate) && gc(e, t);
}
function Ny() {
  return null;
}
var Hh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function za(e) {
  this._internalRoot = e;
}
Io.prototype.render = za.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  zo(e, t, null, null);
};
Io.prototype.unmount = za.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      zo(null, e, null, null);
    }),
      (t[vt] = null);
  }
};
function Io(e) {
  this._internalRoot = e;
}
Io.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Sd(e);
  }
};
function Ia(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yc() {}
function Ry(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = yo(s);
        o.call(u);
      };
    }
    var s = $h(t, r, e, 0, null, !1, !1, "", yc);
    return (
      (e._reactRootContainer = s),
      (e[vt] = s.current),
      $r(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = yo(a);
      l.call(u);
    };
  }
  var a = Oa(e, 0, !1, null, null, !1, !1, "", yc);
  return (
    (e._reactRootContainer = a),
    (e[vt] = a.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      zo(t, a, n, r);
    }),
    a
  );
}
function Uo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = yo(s);
        l.call(a);
      };
    }
    zo(t, s, e, i);
  } else s = Ry(n, t, e, i, r);
  return yo(s);
}
yd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = gr(t.pendingLanes);
        n !== 0 &&
          (ia(t, n | 1), Le(t, ee()), !(F & 6) && ((Zn = ee() + 500), Yt()));
      }
      break;
    case 13:
      mn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var i = ve();
          Je(r, e, 1, i);
        }
      }),
        Fa(e, 1);
  }
};
oa = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = ve();
      Je(t, e, 134217728, n);
    }
    Fa(e, 134217728);
  }
};
vd = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = ve();
      Je(n, e, t, r);
    }
    Fa(e, t);
  }
};
xd = function () {
  return I;
};
wd = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
qs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ks(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ao(r);
            if (!i) throw Error(k(90));
            Jf(r), Ks(r, i);
          }
        }
      }
      break;
    case "textarea":
      bf(e, n);
      break;
    case "select":
      (t = n.value), t != null && zn(e, !!n.multiple, t, !1);
  }
};
sd = Da;
ld = mn;
var _y = { usingClientEntryPoint: !1, Events: [ni, Ln, Ao, id, od, Da] },
  ur = {
    findFiberByHostInstance: on,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Oy = {
    bundleType: ur.bundleType,
    version: ur.version,
    rendererPackageName: ur.rendererPackageName,
    rendererConfig: ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: St.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ur.findFiberByHostInstance || Ny,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ti.isDisabled && Ti.supportsFiber)
    try {
      (Lo = Ti.inject(Oy)), (st = Ti);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ia(t)) throw Error(k(200));
  return Dy(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Ia(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Hh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Oa(e, 1, !1, null, null, n, !1, r, i)),
    (e[vt] = t.current),
    $r(e.nodeType === 8 ? e.parentNode : e),
    new za(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = cd(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return mn(e);
};
_e.hydrate = function (e, t, n) {
  if (!Bo(t)) throw Error(k(200));
  return Uo(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Ia(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Hh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = $h(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[vt] = t.current),
    $r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Io(t);
};
_e.render = function (e, t, n) {
  if (!Bo(t)) throw Error(k(200));
  return Uo(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!Bo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (mn(function () {
        Uo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Da;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Bo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Uo(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function Wh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wh);
    } catch (e) {
      console.error(e);
    }
}
Wh(), ($f.exports = _e);
var Fy = $f.exports,
  vc = Fy;
(zs.createRoot = vc.createRoot), (zs.hydrateRoot = vc.hydrateRoot);
const Ba = j.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  $o = j.createContext({}),
  Ua = j.createContext(null),
  Ho = typeof document < "u",
  $a = Ho ? j.useLayoutEffect : j.useEffect,
  Kh = j.createContext({ strict: !1 });
function zy(e, t, n, r) {
  const { visualElement: i } = j.useContext($o),
    o = j.useContext(Kh),
    s = j.useContext(Ua),
    l = j.useContext(Ba).reducedMotion,
    a = j.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  j.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = j.useRef(!!window.HandoffAppearAnimations);
  return (
    $a(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    j.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function Rn(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Iy(e, t, n) {
  return j.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Rn(n) && (n.current = r));
    },
    [t]
  );
}
function Jr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Wo(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Ha = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Wa = ["initial", ...Ha];
function Ko(e) {
  return Wo(e.animate) || Wa.some((t) => Jr(e[t]));
}
function Gh(e) {
  return !!(Ko(e) || e.variants);
}
function By(e, t) {
  if (Ko(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Jr(n) ? n : void 0,
      animate: Jr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Uy(e) {
  const { initial: t, animate: n } = By(e, j.useContext($o));
  return j.useMemo(() => ({ initial: t, animate: n }), [xc(t), xc(n)]);
}
function xc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const wc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  qr = {};
for (const e in wc) qr[e] = { isEnabled: (t) => wc[e].some((n) => !!t[n]) };
function $y(e) {
  for (const t in e) qr[t] = { ...qr[t], ...e[t] };
}
const Qh = j.createContext({}),
  Yh = j.createContext({}),
  Hy = Symbol.for("motionComponentSymbol");
function Wy({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && $y(e);
  function o(l, a) {
    let u;
    const c = { ...j.useContext(Ba), ...l, layoutId: Ky(l) },
      { isStatic: f } = c,
      d = Uy(l),
      m = r(l, f);
    if (!f && Ho) {
      d.visualElement = zy(i, m, c, t);
      const y = j.useContext(Yh),
        v = j.useContext(Kh).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y));
    }
    return j.createElement(
      $o.Provider,
      { value: d },
      u && d.visualElement
        ? j.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, Iy(m, d.visualElement, a), m, f, d.visualElement)
    );
  }
  const s = j.forwardRef(o);
  return (s[Hy] = i), s;
}
function Ky({ layoutId: e }) {
  const t = j.useContext(Qh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Gy(e) {
  function t(r, i = {}) {
    return Wy(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Qy = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ka(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Qy.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const vo = {};
function Yy(e) {
  Object.assign(vo, e);
}
const ii = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  vn = new Set(ii);
function Xh(e, { layout: t, layoutId: n }) {
  return (
    vn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!vo[e] || e === "opacity"))
  );
}
const Ve = (e) => !!(e && e.getVelocity),
  Xy = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Zy = ii.length;
function Jy(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < Zy; s++) {
    const l = ii[s];
    if (e[l] !== void 0) {
      const a = Xy[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const Zh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Jh = Zh("--"),
  Al = Zh("var(--"),
  qy =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  by = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Wt = (e, t, n) => Math.min(Math.max(n, e), t),
  xn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Vr = { ...xn, transform: (e) => Wt(0, 1, e) },
  Ei = { ...xn, default: 1 },
  Mr = (e) => Math.round(e * 1e5) / 1e5,
  Go = /(-)?([\d]*\.?[\d])+/g,
  qh =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  e0 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function oi(e) {
  return typeof e == "string";
}
const si = (e) => ({
    test: (t) => oi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Pt = si("deg"),
  at = si("%"),
  M = si("px"),
  t0 = si("vh"),
  n0 = si("vw"),
  Sc = {
    ...at,
    parse: (e) => at.parse(e) / 100,
    transform: (e) => at.transform(e * 100),
  },
  kc = { ...xn, transform: Math.round },
  bh = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    size: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    rotate: Pt,
    rotateX: Pt,
    rotateY: Pt,
    rotateZ: Pt,
    scale: Ei,
    scaleX: Ei,
    scaleY: Ei,
    scaleZ: Ei,
    skew: Pt,
    skewX: Pt,
    skewY: Pt,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Vr,
    originX: Sc,
    originY: Sc,
    originZ: M,
    zIndex: kc,
    fillOpacity: Vr,
    strokeOpacity: Vr,
    numOctaves: kc,
  };
function Ga(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Jh(f)) {
      o[f] = d;
      continue;
    }
    const m = bh[f],
      y = by(d, m);
    if (vn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = Jy(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = l;
    i.transformOrigin = `${f} ${d} ${m}`;
  }
}
const Qa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ep(e, t, n) {
  for (const r in t) !Ve(t[r]) && !Xh(r, n) && (e[r] = t[r]);
}
function r0({ transformTemplate: e }, t, n) {
  return j.useMemo(() => {
    const r = Qa();
    return (
      Ga(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function i0(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    ep(i, r, e),
    Object.assign(i, r0(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function o0(e, t, n) {
  const r = {},
    i = i0(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const s0 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function xo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    s0.has(e)
  );
}
let tp = (e) => !xo(e);
function l0(e) {
  e && (tp = (t) => (t.startsWith("on") ? !xo(t) : e(t)));
}
try {
  l0(require("@emotion/is-prop-valid").default);
} catch {}
function a0(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((tp(i) ||
        (n === !0 && xo(i)) ||
        (!t && !xo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Pc(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function u0(e, t, n) {
  const r = Pc(t, e.x, e.width),
    i = Pc(n, e.y, e.height);
  return `${r} ${i}`;
}
const c0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  f0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function d0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? c0 : f0;
  e[o.offset] = M.transform(-r);
  const s = M.transform(t),
    l = M.transform(n);
  e[o.array] = `${s} ${l}`;
}
function Ya(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Ga(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: y, dimensions: v } = e;
  m.transform && (v && (y.transform = m.transform), delete m.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = u0(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && d0(m, s, l, a, !1);
}
const np = () => ({ ...Qa(), attrs: {} }),
  Xa = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function h0(e, t, n, r) {
  const i = j.useMemo(() => {
    const o = np();
    return (
      Ya(o, t, { enableHardwareAcceleration: !1 }, Xa(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    ep(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function p0(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Ka(n) ? h0 : o0)(r, o, s, n),
      c = { ...a0(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = j.useMemo(() => (Ve(f) ? f.get() : f), [f]);
    return j.createElement(n, { ...c, children: d });
  };
}
const Za = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function rp(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const ip = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function op(e, t, n, r) {
  rp(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(ip.has(i) ? i : Za(i), t.attrs[i]);
}
function Ja(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Ve(n[i]) || (t.style && Ve(t.style[i])) || Xh(i, e)) && (r[i] = n[i]);
  return r;
}
function sp(e, t) {
  const n = Ja(e, t);
  for (const r in e)
    if (Ve(e[r]) || Ve(t[r])) {
      const i =
        ii.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function qa(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Qo(e) {
  const t = j.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const wo = (e) => Array.isArray(e),
  m0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  g0 = (e) => (wo(e) ? e[e.length - 1] || 0 : e);
function Hi(e) {
  const t = Ve(e) ? e.get() : e;
  return m0(t) ? t.toValue() : t;
}
function y0(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: v0(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const lp = (e) => (t, n) => {
  const r = j.useContext($o),
    i = j.useContext(Ua),
    o = () => y0(e, t, r, i);
  return n ? o() : Qo(o);
};
function v0(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Hi(o[d]);
  let { initial: s, animate: l } = e;
  const a = Ko(e),
    u = Gh(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Wo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const y = qa(e, m);
        if (!y) return;
        const { transitionEnd: v, transition: E, ...g } = y;
        for (const h in g) {
          let p = g[h];
          if (Array.isArray(p)) {
            const x = c ? p.length - 1 : 0;
            p = p[x];
          }
          p !== null && (i[h] = p);
        }
        for (const h in v) i[h] = v[h];
      }),
    i
  );
}
const Z = (e) => e;
class Cc {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function x0(e) {
  let t = new Cc(),
    n = new Cc(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const Li = ["prepare", "read", "update", "preRender", "render", "postRender"],
  w0 = 40;
function S0(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Li.reduce((f, d) => ((f[d] = x0(() => (n = !0))), f), {}),
    s = (f) => o[f].process(i),
    l = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, w0), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Li.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: Li.reduce((f, d) => {
      const m = o[d];
      return (f[d] = (y, v = !1, E = !1) => (n || a(), m.schedule(y, v, E))), f;
    }, {}),
    cancel: (f) => Li.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: z,
    cancel: be,
    state: re,
    steps: Ts,
  } = S0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Z, !0),
  k0 = {
    useVisualState: lp({
      scrapeMotionValuesFromProps: sp,
      createRenderState: np,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        z.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          z.render(() => {
            Ya(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Xa(t.tagName),
              e.transformTemplate
            ),
              op(t, n);
          });
      },
    }),
  },
  P0 = {
    useVisualState: lp({
      scrapeMotionValuesFromProps: Ja,
      createRenderState: Qa,
    }),
  };
function C0(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Ka(e) ? k0 : P0),
    preloadedFeatures: n,
    useRender: p0(t),
    createVisualElement: r,
    Component: e,
  };
}
function ht(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const ap = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Yo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const T0 = (e) => (t) => ap(t) && e(t, Yo(t));
function mt(e, t, n, r) {
  return ht(e, t, T0(n), r);
}
const E0 = (e, t) => (n) => t(e(n)),
  Bt = (...e) => e.reduce(E0);
function up(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Tc = up("dragHorizontal"),
  Ec = up("dragVertical");
function cp(e) {
  let t = !1;
  if (e === "y") t = Ec();
  else if (e === "x") t = Tc();
  else {
    const n = Tc(),
      r = Ec();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function fp() {
  const e = cp(!0);
  return e ? (e(), !1) : !0;
}
class Xt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Lc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || fp()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && z.update(() => l[r](o, s));
    };
  return mt(e.current, n, i, { passive: !e.getProps()[r] });
}
class L0 extends Xt {
  mount() {
    this.unmount = Bt(Lc(this.node, !0), Lc(this.node, !1));
  }
  unmount() {}
}
class V0 extends Xt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Bt(
      ht(this.node.current, "focus", () => this.onFocus()),
      ht(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const dp = (e, t) => (t ? (e === t ? !0 : dp(e, t.parentElement)) : !1);
function Es(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Yo(n));
}
class M0 extends Xt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Z),
      (this.removeEndListeners = Z),
      (this.removeAccessibleListeners = Z),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = mt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              z.update(() => {
                dp(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = mt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Bt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Es("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && z.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ht(this.node.current, "keyup", s)),
              Es("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ht(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Es("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = ht(this.node.current, "blur", r);
        this.removeAccessibleListeners = Bt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && z.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !fp()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && z.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = mt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = ht(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Bt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Dl = new WeakMap(),
  Ls = new WeakMap(),
  j0 = (e) => {
    const t = Dl.get(e.target);
    t && t(e);
  },
  A0 = (e) => {
    e.forEach(j0);
  };
function D0({ root: e, ...t }) {
  const n = e || document;
  Ls.has(n) || Ls.set(n, {});
  const r = Ls.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(A0, { root: e, ...t })), r[i];
}
function N0(e, t, n) {
  const r = D0(t);
  return (
    Dl.set(e, n),
    r.observe(e),
    () => {
      Dl.delete(e), r.unobserve(e);
    }
  );
}
const R0 = { some: 0, all: 1 };
class _0 extends Xt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : R0[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return N0(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(O0(t, n)) && this.startObserver();
  }
  unmount() {}
}
function O0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const F0 = {
  inView: { Feature: _0 },
  tap: { Feature: M0 },
  focus: { Feature: V0 },
  hover: { Feature: L0 },
};
function hp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function z0(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function I0(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Xo(e, t, n) {
  const r = e.getProps();
  return qa(r, t, n !== void 0 ? n : r.custom, z0(e), I0(e));
}
const B0 = "framerAppearId",
  U0 = "data-" + Za(B0);
let pp = Z,
  Zo = Z;
const Ut = (e) => e * 1e3,
  gt = (e) => e / 1e3,
  $0 = { current: !1 },
  mp = (e) => Array.isArray(e) && typeof e[0] == "number";
function gp(e) {
  return !!(
    !e ||
    (typeof e == "string" && yp[e]) ||
    mp(e) ||
    (Array.isArray(e) && e.every(gp))
  );
}
const vr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  yp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: vr([0, 0.65, 0.55, 1]),
    circOut: vr([0.55, 0, 1, 0.45]),
    backIn: vr([0.31, 0.01, 0.66, -0.59]),
    backOut: vr([0.33, 1.53, 0.69, 0.99]),
  };
function vp(e) {
  if (e) return mp(e) ? vr(e) : Array.isArray(e) ? e.map(vp) : yp[e];
}
function H0(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = vp(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function W0(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const xp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  K0 = 1e-7,
  G0 = 12;
function Q0(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = xp(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > K0 && ++l < G0);
  return s;
}
function li(e, t, n, r) {
  if (e === t && n === r) return Z;
  const i = (o) => Q0(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : xp(i(o), t, r));
}
const Y0 = li(0.42, 0, 1, 1),
  X0 = li(0, 0, 0.58, 1),
  wp = li(0.42, 0, 0.58, 1),
  Z0 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Sp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  kp = (e) => (t) => 1 - e(1 - t),
  Pp = (e) => 1 - Math.sin(Math.acos(e)),
  ba = kp(Pp),
  J0 = Sp(ba),
  Cp = li(0.33, 1.53, 0.69, 0.99),
  eu = kp(Cp),
  q0 = Sp(eu),
  b0 = (e) =>
    (e *= 2) < 1 ? 0.5 * eu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ev = {
    linear: Z,
    easeIn: Y0,
    easeInOut: wp,
    easeOut: X0,
    circIn: Pp,
    circInOut: J0,
    circOut: ba,
    backIn: eu,
    backInOut: q0,
    backOut: Cp,
    anticipate: b0,
  },
  Vc = (e) => {
    if (Array.isArray(e)) {
      Zo(e.length === 4);
      const [t, n, r, i] = e;
      return li(t, n, r, i);
    } else if (typeof e == "string") return ev[e];
    return e;
  },
  tu = (e, t) => (n) =>
    !!(
      (oi(n) && e0.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Tp = (e, t, n) => (r) => {
    if (!oi(r)) return r;
    const [i, o, s, l] = r.match(Go);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  tv = (e) => Wt(0, 255, e),
  Vs = { ...xn, transform: (e) => Math.round(tv(e)) },
  an = {
    test: tu("rgb", "red"),
    parse: Tp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Vs.transform(e) +
      ", " +
      Vs.transform(t) +
      ", " +
      Vs.transform(n) +
      ", " +
      Mr(Vr.transform(r)) +
      ")",
  };
function nv(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Nl = { test: tu("#"), parse: nv, transform: an.transform },
  _n = {
    test: tu("hsl", "hue"),
    parse: Tp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      at.transform(Mr(t)) +
      ", " +
      at.transform(Mr(n)) +
      ", " +
      Mr(Vr.transform(r)) +
      ")",
  },
  ge = {
    test: (e) => an.test(e) || Nl.test(e) || _n.test(e),
    parse: (e) =>
      an.test(e) ? an.parse(e) : _n.test(e) ? _n.parse(e) : Nl.parse(e),
    transform: (e) =>
      oi(e) ? e : e.hasOwnProperty("red") ? an.transform(e) : _n.transform(e),
  },
  G = (e, t, n) => -n * e + n * t + e;
function Ms(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function rv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Ms(a, l, e + 1 / 3)), (o = Ms(a, l, e)), (s = Ms(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const js = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  iv = [Nl, an, _n],
  ov = (e) => iv.find((t) => t.test(e));
function Mc(e) {
  const t = ov(e);
  let n = t.parse(e);
  return t === _n && (n = rv(n)), n;
}
const Ep = (e, t) => {
  const n = Mc(e),
    r = Mc(t),
    i = { ...n };
  return (o) => (
    (i.red = js(n.red, r.red, o)),
    (i.green = js(n.green, r.green, o)),
    (i.blue = js(n.blue, r.blue, o)),
    (i.alpha = G(n.alpha, r.alpha, o)),
    an.transform(i)
  );
};
function sv(e) {
  var t, n;
  return (
    isNaN(e) &&
    oi(e) &&
    (((t = e.match(Go)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(qh)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Lp = { regex: qy, countKey: "Vars", token: "${v}", parse: Z },
  Vp = { regex: qh, countKey: "Colors", token: "${c}", parse: ge.parse },
  Mp = { regex: Go, countKey: "Numbers", token: "${n}", parse: xn.parse };
function As(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function So(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && As(n, Lp), As(n, Vp), As(n, Mp), n;
}
function jp(e) {
  return So(e).values;
}
function Ap(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = So(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(Lp.token, s[a]))
        : a < r + n
        ? (l = l.replace(Vp.token, ge.transform(s[a])))
        : (l = l.replace(Mp.token, Mr(s[a])));
    return l;
  };
}
const lv = (e) => (typeof e == "number" ? 0 : e);
function av(e) {
  const t = jp(e);
  return Ap(e)(t.map(lv));
}
const Kt = {
    test: sv,
    parse: jp,
    createTransformer: Ap,
    getAnimatableNone: av,
  },
  Dp = (e, t) => (n) => `${n > 0 ? t : e}`;
function Np(e, t) {
  return typeof e == "number"
    ? (n) => G(e, t, n)
    : ge.test(e)
    ? Ep(e, t)
    : e.startsWith("var(")
    ? Dp(e, t)
    : _p(e, t);
}
const Rp = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Np(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  uv = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Np(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  _p = (e, t) => {
    const n = Kt.createTransformer(t),
      r = So(e),
      i = So(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Bt(Rp(r.values, i.values), n)
      : Dp(e, t);
  },
  Jn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  jc = (e, t) => (n) => G(e, t, n);
function cv(e) {
  return typeof e == "number"
    ? jc
    : typeof e == "string"
    ? ge.test(e)
      ? Ep
      : _p
    : Array.isArray(e)
    ? Rp
    : typeof e == "object"
    ? uv
    : jc;
}
function fv(e, t, n) {
  const r = [],
    i = n || cv(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || Z : t;
      l = Bt(a, l);
    }
    r.push(l);
  }
  return r;
}
function Jo(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Zo(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = fv(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Jn(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Wt(e[0], e[o - 1], u)) : a;
}
function dv(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Jn(0, t, r);
    e.push(G(n, 1, i));
  }
}
function Op(e) {
  const t = [0];
  return dv(t, e.length - 1), t;
}
function hv(e, t) {
  return e.map((n) => n * t);
}
function pv(e, t) {
  return e.map(() => t || wp).splice(0, e.length - 1);
}
function ko({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Z0(r) ? r.map(Vc) : Vc(r),
    o = { done: !1, value: t[0] },
    s = hv(n && n.length === t.length ? n : Op(t), e),
    l = Jo(s, t, { ease: Array.isArray(i) ? i : pv(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function nu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const mv = 5;
function Fp(e, t, n) {
  const r = Math.max(t - mv, 0);
  return nu(n - e(r), t - r);
}
const Ds = 0.001,
  gv = 0.01,
  Ac = 10,
  yv = 0.05,
  vv = 1;
function xv({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  pp(e <= Ut(Ac));
  let s = 1 - t;
  (s = Wt(yv, vv, s)),
    (e = Wt(gv, Ac, gt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = Rl(u, s),
            y = Math.exp(-f);
          return Ds - (d / m) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Rl(Math.pow(u, 2), s);
          return ((-i(u) + Ds > 0 ? -1 : 1) * ((d - m) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ds + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = Sv(i, o, l);
  if (((e = Ut(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const wv = 12;
function Sv(e, t, n) {
  let r = n;
  for (let i = 1; i < wv; i++) r = r - e(r) / t(r);
  return r;
}
function Rl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const kv = ["duration", "bounce"],
  Pv = ["stiffness", "damping", "mass"];
function Dc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Cv(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Dc(e, Pv) && Dc(e, kv)) {
    const n = xv(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function zp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = Cv(r),
    m = c ? -gt(c) : 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    E = gt(Math.sqrt(l / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const p = Rl(E, y);
    h = (x) => {
      const S = Math.exp(-y * E * x);
      return (
        o - S * (((m + y * E * v) / p) * Math.sin(p * x) + v * Math.cos(p * x))
      );
    };
  } else if (y === 1) h = (p) => o - Math.exp(-E * p) * (v + (m + E * v) * p);
  else {
    const p = E * Math.sqrt(y * y - 1);
    h = (x) => {
      const S = Math.exp(-y * E * x),
        T = Math.min(p * x, 300);
      return (
        o - (S * ((m + y * E * v) * Math.sinh(T) + p * v * Math.cosh(T))) / p
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (p) => {
      const x = h(p);
      if (d) s.done = p >= f;
      else {
        let S = m;
        p !== 0 && (y < 1 ? (S = Fp(h, p, x)) : (S = 0));
        const T = Math.abs(S) <= n,
          C = Math.abs(o - x) <= t;
        s.done = T && C;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function Nc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
    y = (P) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - P) < Math.abs(a - P)
        ? l
        : a;
  let v = n * t;
  const E = f + v,
    g = s === void 0 ? E : s(E);
  g !== E && (v = g - f);
  const h = (P) => -v * Math.exp(-P / r),
    p = (P) => g + h(P),
    x = (P) => {
      const N = h(P),
        A = p(P);
      (d.done = Math.abs(N) <= u), (d.value = d.done ? g : A);
    };
  let S, T;
  const C = (P) => {
    m(d.value) &&
      ((S = P),
      (T = zp({
        keyframes: [d.value, y(d.value)],
        velocity: Fp(p, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let N = !1;
        return (
          !T && S === void 0 && ((N = !0), x(P), C(P)),
          S !== void 0 && P > S ? T.next(P - S) : (!N && x(P), d)
        );
      },
    }
  );
}
const Tv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => z.update(t, !0),
      stop: () => be(t),
      now: () => (re.isProcessing ? re.timestamp : performance.now()),
    };
  },
  Rc = 2e4;
function _c(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Rc; ) (t += n), (r = e.next(t));
  return t >= Rc ? 1 / 0 : t;
}
const Ev = { decay: Nc, inertia: Nc, tween: ko, keyframes: ko, spring: zp };
function Po({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = Tv,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    y = !1,
    v,
    E;
  const g = () => {
    E = new Promise((D) => {
      v = D;
    });
  };
  g();
  let h;
  const p = Ev[i] || ko;
  let x;
  p !== ko &&
    typeof r[0] != "number" &&
    ((x = Jo([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const S = p({ ...d, keyframes: r });
  let T;
  l === "mirror" &&
    (T = p({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let C = "idle",
    P = null,
    N = null,
    A = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = _c(S));
  const { calculatedDuration: J } = S;
  let Se = 1 / 0,
    ke = 1 / 0;
  J !== null && ((Se = J + s), (ke = Se * (o + 1) - s));
  let q = 0;
  const b = (D) => {
      if (N === null) return;
      m > 0 && (N = Math.min(N, D)),
        m < 0 && (N = Math.min(D - ke / m, N)),
        P !== null ? (q = P) : (q = Math.round(D - N) * m);
      const H = q - t * (m >= 0 ? 1 : -1),
        Zt = m >= 0 ? H < 0 : H > ke;
      (q = Math.max(H, 0)), C === "finished" && P === null && (q = ke);
      let tt = q,
        wn = S;
      if (o) {
        const qo = q / Se;
        let ai = Math.floor(qo),
          qt = qo % 1;
        !qt && qo >= 1 && (qt = 1),
          qt === 1 && ai--,
          (ai = Math.min(ai, o + 1));
        const au = !!(ai % 2);
        au &&
          (l === "reverse"
            ? ((qt = 1 - qt), s && (qt -= s / Se))
            : l === "mirror" && (wn = T));
        let uu = Wt(0, 1, qt);
        q > ke && (uu = l === "reverse" && au ? 1 : 0), (tt = uu * Se);
      }
      const Me = Zt ? { done: !1, value: r[0] } : wn.next(tt);
      x && (Me.value = x(Me.value));
      let { done: Jt } = Me;
      !Zt && J !== null && (Jt = m >= 0 ? q >= ke : q <= 0);
      const fm = P === null && (C === "finished" || (C === "running" && Jt));
      return f && f(Me.value), fm && L(), Me;
    },
    Fe = () => {
      h && h.stop(), (h = void 0);
    },
    et = () => {
      (C = "idle"), Fe(), v(), g(), (N = A = null);
    },
    L = () => {
      (C = "finished"), c && c(), Fe(), v();
    },
    R = () => {
      if (y) return;
      h || (h = n(b));
      const D = h.now();
      a && a(),
        P !== null ? (N = D - P) : (!N || C === "finished") && (N = D),
        C === "finished" && g(),
        (A = N),
        (P = null),
        (C = "running"),
        h.start();
    };
  e && R();
  const _ = {
    then(D, H) {
      return E.then(D, H);
    },
    get time() {
      return gt(q);
    },
    set time(D) {
      (D = Ut(D)),
        (q = D),
        P !== null || !h || m === 0 ? (P = D) : (N = h.now() - D / m);
    },
    get duration() {
      const D = S.calculatedDuration === null ? _c(S) : S.calculatedDuration;
      return gt(D);
    },
    get speed() {
      return m;
    },
    set speed(D) {
      D === m || !h || ((m = D), (_.time = gt(q)));
    },
    get state() {
      return C;
    },
    play: R,
    pause: () => {
      (C = "paused"), (P = q);
    },
    stop: () => {
      (y = !0), C !== "idle" && ((C = "idle"), u && u(), et());
    },
    cancel: () => {
      A !== null && b(A), et();
    },
    complete: () => {
      C = "finished";
    },
    sample: (D) => ((N = 0), b(D)),
  };
  return _;
}
function Lv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Vv = Lv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Mv = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Vi = 10,
  jv = 2e4,
  Av = (e, t) => t.type === "spring" || e === "backgroundColor" || !gp(t.ease);
function Dv(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      Vv() &&
      Mv.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((h) => {
      l = h;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: m } = i;
  if (Av(t, i)) {
    const h = Po({ ...i, repeat: 0, delay: 0 });
    let p = { done: !1, value: c[0] };
    const x = [];
    let S = 0;
    for (; !p.done && S < jv; ) (p = h.sample(S)), x.push(p.value), (S += Vi);
    (m = void 0), (c = x), (f = S - Vi), (d = "linear");
  }
  const y = H0(e.owner.current, t, c, { ...i, duration: f, ease: d, times: m });
  i.syncStart &&
    (y.startTime = re.isProcessing
      ? re.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const v = () => y.cancel(),
    E = () => {
      z.update(v), l(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(W0(c, i)), r && r(), E();
    }),
    {
      then(h, p) {
        return a.then(h, p);
      },
      attachTimeline(h) {
        return (y.timeline = h), (y.onfinish = null), Z;
      },
      get time() {
        return gt(y.currentTime || 0);
      },
      set time(h) {
        y.currentTime = Ut(h);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(h) {
        y.playbackRate = h;
      },
      get duration() {
        return gt(f);
      },
      play: () => {
        s || (y.play(), be(v));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: h } = y;
        if (h) {
          const p = Po({ ...i, autoplay: !1 });
          e.setWithVelocity(p.sample(h - Vi).value, p.sample(h).value, Vi);
        }
        E();
      },
      complete: () => y.finish(),
      cancel: E,
    }
  );
}
function Nv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Z,
      pause: Z,
      stop: Z,
      then: (o) => (o(), Promise.resolve()),
      cancel: Z,
      complete: Z,
    }
  );
  return t
    ? Po({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const Rv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  _v = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ov = { type: "keyframes", duration: 0.8 },
  Fv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  zv = (e, { keyframes: t }) =>
    t.length > 2
      ? Ov
      : vn.has(e)
      ? e.startsWith("scale")
        ? _v(t[1])
        : Rv
      : Fv,
  _l = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Kt.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Iv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Bv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Go) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Iv.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Uv = /([a-z-]*)\(.*?\)/g,
  Ol = {
    ...Kt,
    getAnimatableNone: (e) => {
      const t = e.match(Uv);
      return t ? t.map(Bv).join(" ") : e;
    },
  },
  $v = {
    ...bh,
    color: ge,
    backgroundColor: ge,
    outlineColor: ge,
    fill: ge,
    stroke: ge,
    borderColor: ge,
    borderTopColor: ge,
    borderRightColor: ge,
    borderBottomColor: ge,
    borderLeftColor: ge,
    filter: Ol,
    WebkitFilter: Ol,
  },
  ru = (e) => $v[e];
function Ip(e, t) {
  let n = ru(e);
  return (
    n !== Ol && (n = Kt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Bp = (e) => /^0[^.\s]+$/.test(e);
function Hv(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Bp(e);
}
function Wv(e, t, n, r) {
  const i = _l(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Hv(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = Ip(t, l);
    }
  return o;
}
function Kv({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Up(e, t) {
  return e[t] || e.default || e;
}
const iu =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Up(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - Ut(s);
    const a = Wv(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = _l(e, u),
      d = _l(e, c);
    let m = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (Kv(o) || (m = { ...m, ...zv(e, m) }),
      m.duration && (m.duration = Ut(m.duration)),
      m.repeatDelay && (m.repeatDelay = Ut(m.repeatDelay)),
      !f || !d || $0.current || o.type === !1)
    )
      return Nv(m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = Dv(t, e, m);
      if (y) return y;
    }
    return Po(m);
  };
function Co(e) {
  return !!(Ve(e) && e.add);
}
const $p = (e) => /^\-?\d*\.?\d+$/.test(e);
function ou(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function su(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class lu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ou(this.subscriptions, t), () => su(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Gv = (e) => !isNaN(parseFloat(e)),
  jr = { current: void 0 };
class Qv {
  constructor(t, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = re;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          z.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => z.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Gv(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new lu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            z.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return jr.current && jr.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? nu(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Xe(e, t) {
  return new Qv(e, t);
}
const Hp = (e) => (t) => t.test(e),
  Yv = { test: (e) => e === "auto", parse: (e) => e },
  Wp = [xn, M, at, Pt, n0, t0, Yv],
  cr = (e) => Wp.find(Hp(e)),
  Xv = [...Wp, ge, Kt],
  Zv = (e) => Xv.find(Hp(e));
function Jv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xe(n));
}
function qv(e, t) {
  const n = Xo(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = g0(o[s]);
    Jv(e, s, l);
  }
}
function bv(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && ($p(c) || Bp(c))
            ? (c = parseFloat(c))
            : !Zv(c) && Kt.test(u) && (c = Ip(a, u)),
          e.addValue(a, Xe(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function e1(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function t1(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = e1(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function n1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Kp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      m = l[f];
    if (!d || m === void 0 || (c && n1(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const E = e.getProps()[U0];
      E &&
        ((y.elapsed = window.HandoffAppearAnimations(E, f, d, z)),
        (y.syncStart = !0));
    }
    d.start(iu(f, d, m, e.shouldReduceMotion && vn.has(f) ? { type: !1 } : y));
    const v = d.animation;
    Co(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && qv(e, s);
      }),
    u
  );
}
function Fl(e, t, n = {}) {
  const r = Xo(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Kp(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return r1(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function r1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(i1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Fl(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function i1(e, t) {
  return e.sortNodePosition(t);
}
function o1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Fl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Fl(e, t, n);
  else {
    const i = typeof t == "function" ? Xo(e, t, n.custom) : t;
    r = Promise.all(Kp(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const s1 = [...Ha].reverse(),
  l1 = Ha.length;
function a1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => o1(e, n, r)));
}
function u1(e) {
  let t = a1(e);
  const n = f1();
  let r = !0;
  const i = (a, u) => {
    const c = Xo(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      a = { ...a, ...m, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let y = {},
      v = 1 / 0;
    for (let g = 0; g < l1; g++) {
      const h = s1[g],
        p = n[h],
        x = c[h] !== void 0 ? c[h] : f[h],
        S = Jr(x),
        T = h === u ? p.isActive : null;
      T === !1 && (v = g);
      let C = x === f[h] && x !== c[h] && S;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && T === null) ||
          (!x && !p.prevProp) ||
          Wo(x) ||
          typeof x == "boolean")
      )
        continue;
      const P = c1(p.prevProp, x);
      let N = P || (h === u && p.isActive && !C && S) || (g > v && S);
      const A = Array.isArray(x) ? x : [x];
      let J = A.reduce(i, {});
      T === !1 && (J = {});
      const { prevResolvedValues: Se = {} } = p,
        ke = { ...Se, ...J },
        q = (b) => {
          (N = !0), m.delete(b), (p.needsAnimating[b] = !0);
        };
      for (const b in ke) {
        const Fe = J[b],
          et = Se[b];
        y.hasOwnProperty(b) ||
          (Fe !== et
            ? wo(Fe) && wo(et)
              ? !hp(Fe, et) || P
                ? q(b)
                : (p.protectedKeys[b] = !0)
              : Fe !== void 0
              ? q(b)
              : m.add(b)
            : Fe !== void 0 && m.has(b)
            ? q(b)
            : (p.protectedKeys[b] = !0));
      }
      (p.prevProp = x),
        (p.prevResolvedValues = J),
        p.isActive && (y = { ...y, ...J }),
        r && e.blockInitialAnimation && (N = !1),
        N &&
          !C &&
          d.push(
            ...A.map((b) => ({ animation: b, options: { type: h, ...a } }))
          );
    }
    if (m.size) {
      const g = {};
      m.forEach((h) => {
        const p = e.getBaseTarget(h);
        p !== void 0 && (g[h] = p);
      }),
        d.push({ animation: g });
    }
    let E = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1),
      (r = !1),
      E ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var y;
        return (y = m.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function c1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hp(t, e) : !1;
}
function bt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function f1() {
  return {
    animate: bt(!0),
    whileInView: bt(),
    whileHover: bt(),
    whileTap: bt(),
    whileDrag: bt(),
    whileFocus: bt(),
    exit: bt(),
  };
}
class d1 extends Xt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = u1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Wo(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let h1 = 0;
class p1 extends Xt {
  constructor() {
    super(...arguments), (this.id = h1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const m1 = { animation: { Feature: d1 }, exit: { Feature: p1 } },
  Oc = (e, t) => Math.abs(e - t);
function g1(e, t) {
  const n = Oc(e.x, t.x),
    r = Oc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Gp {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Rs(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = g1(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: m } = re;
        this.history.push({ ...d, timestamp: m });
        const { onStart: y, onMove: v } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Ns(c, this.transformPagePoint)),
          z.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          m = Rs(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Ns(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, m), d && d(u, m);
      }),
      !ap(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Yo(t),
      o = Ns(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = re;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, Rs(o, this.history)),
      (this.removeListeners = Bt(
        mt(window, "pointermove", this.handlePointerMove),
        mt(window, "pointerup", this.handlePointerUp),
        mt(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), be(this.updatePoint);
  }
}
function Ns(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Fc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Rs({ point: e }, t) {
  return {
    point: e,
    delta: Fc(e, Qp(t)),
    offset: Fc(e, y1(t)),
    velocity: v1(t, 0.1),
  };
}
function y1(e) {
  return e[0];
}
function Qp(e) {
  return e[e.length - 1];
}
function v1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Qp(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ut(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = gt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Re(e) {
  return e.max - e.min;
}
function zl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function zc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = G(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (zl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = G(n.min, n.max, e.origin) - e.originPoint),
    (zl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ar(e, t, n, r) {
  zc(e.x, t.x, n.x, r ? r.originX : void 0),
    zc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ic(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Re(t));
}
function x1(e, t, n) {
  Ic(e.x, t.x, n.x), Ic(e.y, t.y, n.y);
}
function Bc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Re(t));
}
function Dr(e, t, n) {
  Bc(e.x, t.x, n.x), Bc(e.y, t.y, n.y);
}
function w1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? G(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Uc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function S1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Uc(e.x, n, i), y: Uc(e.y, t, r) };
}
function $c(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function k1(e, t) {
  return { x: $c(e.x, t.x), y: $c(e.y, t.y) };
}
function P1(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return (
    i > r
      ? (n = Jn(t.min, t.max - r, e.min))
      : r > i && (n = Jn(e.min, e.max - i, t.min)),
    Wt(0, 1, n)
  );
}
function C1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Il = 0.35;
function T1(e = Il) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Il),
    { x: Hc(e, "left", "right"), y: Hc(e, "top", "bottom") }
  );
}
function Hc(e, t, n) {
  return { min: Wc(e, t), max: Wc(e, n) };
}
function Wc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Kc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  On = () => ({ x: Kc(), y: Kc() }),
  Gc = () => ({ min: 0, max: 0 }),
  te = () => ({ x: Gc(), y: Gc() });
function it(e) {
  return [e("x"), e("y")];
}
function Yp({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function E1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function L1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function _s(e) {
  return e === void 0 || e === 1;
}
function Bl({ scale: e, scaleX: t, scaleY: n }) {
  return !_s(e) || !_s(t) || !_s(n);
}
function nn(e) {
  return Bl(e) || Xp(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Xp(e) {
  return Qc(e.x) || Qc(e.y);
}
function Qc(e) {
  return e && e !== "0%";
}
function To(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Yc(e, t, n, r, i) {
  return i !== void 0 && (e = To(e, i, r)), To(e, n, r) + t;
}
function Ul(e, t = 0, n = 1, r, i) {
  (e.min = Yc(e.min, t, n, r, i)), (e.max = Yc(e.max, t, n, r, i));
}
function Zp(e, { x: t, y: n }) {
  Ul(e.x, t.translate, t.scale, t.originPoint),
    Ul(e.y, n.translate, n.scale, n.originPoint);
}
function V1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Fn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Zp(e, s)),
      r && nn(o.latestValues) && Fn(e, o.latestValues));
  }
  (t.x = Xc(t.x)), (t.y = Xc(t.y));
}
function Xc(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Lt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Zc(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = G(e.min, e.max, o);
  Ul(e, t[n], t[r], s, t.scale);
}
const M1 = ["x", "scaleX", "originX"],
  j1 = ["y", "scaleY", "originY"];
function Fn(e, t) {
  Zc(e.x, t, M1), Zc(e.y, t, j1);
}
function Jp(e, t) {
  return Yp(L1(e.getBoundingClientRect(), t));
}
function A1(e, t, n) {
  const r = Jp(e, n),
    { scroll: i } = t;
  return i && (Lt(r.x, i.offset.x), Lt(r.y, i.offset.y)), r;
}
const D1 = new WeakMap();
class N1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor(Yo(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = cp(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          it((y) => {
            let v = this.getAxisMotionValue(y).get() || 0;
            if (at.test(v)) {
              const { projection: E } = this.visualElement;
              if (E && E.layout) {
                const g = E.layout.layoutBox[y];
                g && (v = Re(g) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[y] = v;
          }),
          d && z.update(() => d(a, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = R1(y)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          m && m(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new Gp(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && z.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Mi(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = w1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && Rn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = S1(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = T1(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        it((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = C1(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Rn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = A1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = k1(i.layout.layoutBox, o);
    if (n) {
      const l = n(E1(s));
      (this.hasMutatedConstraints = !!l), l && (s = Yp(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = it((c) => {
        if (!Mi(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(iu(t, r, 0, n));
  }
  stopAnimation() {
    it((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    it((n) => {
      const { drag: r } = this.getProps();
      if (!Mi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - G(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Rn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    it((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = P1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      it((s) => {
        if (!Mi(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(G(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    D1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = mt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Rn(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = ht(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (it((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Il,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Mi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function R1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class _1 extends Xt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Z),
      (this.removeListeners = Z),
      (this.controls = new N1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Z);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Jc = (e) => (t, n) => {
  e && z.update(() => e(t, n));
};
class O1 extends Xt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Z);
  }
  onPointerDown(t) {
    this.session = new Gp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Jc(t),
      onStart: Jc(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && z.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = mt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function F1() {
  const e = j.useContext(Ua);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = j.useId();
  return j.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Wi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function qc(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const fr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (M.test(e)) e = parseFloat(e);
        else return e;
      const n = qc(e, t.target.x),
        r = qc(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  z1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Kt.parse(e);
      if (i.length > 5) return r;
      const o = Kt.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = G(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class I1 extends Xl.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Yy(B1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Wi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              z.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function qp(e) {
  const [t, n] = F1(),
    r = j.useContext(Qh);
  return Xl.createElement(I1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: j.useContext(Yh),
    isPresent: t,
    safeToRemove: n,
  });
}
const B1 = {
    borderRadius: {
      ...fr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: fr,
    borderTopRightRadius: fr,
    borderBottomLeftRadius: fr,
    borderBottomRightRadius: fr,
    boxShadow: z1,
  },
  bp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  U1 = bp.length,
  bc = (e) => (typeof e == "string" ? parseFloat(e) : e),
  ef = (e) => typeof e == "number" || M.test(e);
function $1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, H1(r))),
      (e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, W1(r))))
    : o &&
      (e.opacity = G(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < U1; s++) {
    const l = `border${bp[s]}Radius`;
    let a = tf(t, l),
      u = tf(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || ef(a) === ef(u)
        ? ((e[l] = Math.max(G(bc(a), bc(u), r), 0)),
          (at.test(u) || at.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function tf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const H1 = em(0, 0.5, ba),
  W1 = em(0.5, 0.95, Z);
function em(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Jn(e, t, r)));
}
function nf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ze(e, t) {
  nf(e.x, t.x), nf(e.y, t.y);
}
function rf(e, t, n, r, i) {
  return (
    (e -= t), (e = To(e, 1 / n, r)), i !== void 0 && (e = To(e, 1 / i, r)), e
  );
}
function K1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (at.test(t) &&
      ((t = parseFloat(t)), (t = G(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = G(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = rf(e.min, t, n, l, i)),
    (e.max = rf(e.max, t, n, l, i));
}
function of(e, t, [n, r, i], o, s) {
  K1(e, t[n], t[r], t[i], t.scale, o, s);
}
const G1 = ["x", "scaleX", "originX"],
  Q1 = ["y", "scaleY", "originY"];
function sf(e, t, n, r) {
  of(e.x, t, G1, n ? n.x : void 0, r ? r.x : void 0),
    of(e.y, t, Q1, n ? n.y : void 0, r ? r.y : void 0);
}
function lf(e) {
  return e.translate === 0 && e.scale === 1;
}
function tm(e) {
  return lf(e.x) && lf(e.y);
}
function Y1(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function nm(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function af(e) {
  return Re(e.x) / Re(e.y);
}
class X1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    ou(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (su(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function uf(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const Z1 = (e, t) => e.depth - t.depth;
class J1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    ou(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    su(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Z1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function q1(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (be(r), e(o - t));
    };
  return z.read(r, !0), () => be(r);
}
function b1(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function ex(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function tx(e, t, n) {
  const r = Ve(e) ? e : Xe(e);
  return r.start(iu("", r, t, n)), r.animation;
}
const cf = ["", "X", "Y", "Z"],
  ff = 1e3;
let nx = 0;
const rn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function rm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = nx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (rn.totalNodes =
            rn.resolvedTargetDeltas =
            rn.recalculatedProjection =
              0),
            this.nodes.forEach(ox),
            this.nodes.forEach(cx),
            this.nodes.forEach(fx),
            this.nodes.forEach(sx),
            b1(rn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new J1());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new lu()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = ex(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = q1(d, 250)),
            Wi.hasAnimatedSinceResize &&
              ((Wi.hasAnimatedSinceResize = !1), this.nodes.forEach(hf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || gx,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !nm(this.targetLayout, y) || m,
                p = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, p);
                const x = { ...Up(v, "layout"), onPlay: E, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || hf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        be(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(dx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(df);
        return;
      }
      this.isUpdating || this.nodes.forEach(ax),
        (this.isUpdating = !1),
        this.nodes.forEach(ux),
        this.nodes.forEach(rx),
        this.nodes.forEach(ix),
        this.clearAllSnapshots();
      const l = performance.now();
      (re.delta = Wt(0, 1e3 / 60, l - re.timestamp)),
        (re.timestamp = l),
        (re.isProcessing = !0),
        Ts.update.process(re),
        Ts.preRender.process(re),
        Ts.render.process(re),
        (re.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(lx), this.sharedNodes.forEach(hx);
    }
    scheduleUpdateProjection() {
      z.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !tm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || nn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        yx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return te();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Lt(l.x, a.offset.x), Lt(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = te();
      ze(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            ze(l, s);
            const { scroll: d } = this.root;
            d && (Lt(l.x, -d.offset.x), Lt(l.y, -d.offset.y));
          }
          Lt(l.x, c.offset.x), Lt(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = te();
      ze(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Fn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          nn(c.latestValues) && Fn(a, c.latestValues);
      }
      return nn(this.latestValues) && Fn(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = te();
      ze(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !nn(u.latestValues)) continue;
        Bl(u.latestValues) && u.updateSnapshot();
        const c = te(),
          f = u.measurePageBox();
        ze(c, f),
          sf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return nn(this.latestValues) && sf(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = re.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Dr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              ze(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = te()), (this.targetWithTransforms = te())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                x1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ze(this.target, this.layout.layoutBox),
                Zp(this.target, this.targetDelta))
              : ze(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = te()),
                (this.relativeTargetOrigin = te()),
                Dr(this.relativeTargetOrigin, this.target, m.target),
                ze(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          rn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Bl(this.parent.latestValues) ||
          Xp(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === re.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      ze(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      V1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (l.target = l.layout.layoutBox);
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = On()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = On()),
        (this.projectionDeltaWithTransform = On()));
      const v = this.projectionTransform;
      Ar(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = uf(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        rn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = On();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = te(),
        m = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = m !== y,
        E = this.getStack(),
        g = !E || E.members.length <= 1,
        h = !!(v && !g && this.options.crossfade === !0 && !this.path.some(mx));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        pf(f.x, s.x, S),
          pf(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Dr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            px(this.relativeTarget, this.relativeTargetOrigin, d, S),
            p && Y1(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = te()),
            ze(p, this.relativeTarget)),
          v &&
            ((this.animationValues = c), $1(c, u, this.latestValues, S, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (be(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = z.update(() => {
          (Wi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = tx(0, ff, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ff),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          im(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || te();
          const f = Re(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Re(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        ze(l, a),
          Fn(l, c),
          Ar(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new X1()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < cf.length; c++) {
        const f = "rotate" + cf[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var l, a;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Hi(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Hi(s.pointerEvents) || "")),
          this.hasProjected &&
            !nn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = uf(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in vo) {
        if (d[v] === void 0) continue;
        const { correct: E, applyTo: g } = vo[v],
          h = u.transform === "none" ? d[v] : E(d[v], f);
        if (g) {
          const p = g.length;
          for (let x = 0; x < p; x++) u[g[x]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? Hi(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(df),
        this.root.sharedNodes.clear();
    }
  };
}
function rx(e) {
  e.updateLayout();
}
function ix(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? it((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Re(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : im(o, n.layoutBox, r) &&
        it((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Re(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const l = On();
    Ar(l, r, n.layoutBox);
    const a = On();
    s ? Ar(a, e.applyTransform(i, !0), n.measuredBox) : Ar(a, r, n.layoutBox);
    const u = !tm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const y = te();
          Dr(y, n.layoutBox, d.layoutBox);
          const v = te();
          Dr(v, r, m.layoutBox),
            nm(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ox(e) {
  rn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function sx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function lx(e) {
  e.clearSnapshot();
}
function df(e) {
  e.clearMeasurements();
}
function ax(e) {
  e.isLayoutDirty = !1;
}
function ux(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function hf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function cx(e) {
  e.resolveTargetDelta();
}
function fx(e) {
  e.calcProjection();
}
function dx(e) {
  e.resetRotation();
}
function hx(e) {
  e.removeLeadSnapshot();
}
function pf(e, t, n) {
  (e.translate = G(t.translate, 0, n)),
    (e.scale = G(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function mf(e, t, n, r) {
  (e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r));
}
function px(e, t, n, r) {
  mf(e.x, t.x, n.x, r), mf(e.y, t.y, n.y, r);
}
function mx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const gx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  gf = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  yf = gf("applewebkit/") && !gf("chrome/") ? Math.round : Z;
function vf(e) {
  (e.min = yf(e.min)), (e.max = yf(e.max));
}
function yx(e) {
  vf(e.x), vf(e.y);
}
function im(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !zl(af(t), af(n), 0.2))
  );
}
const vx = rm({
    attachResizeListener: (e, t) => ht(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Os = { current: void 0 },
  om = rm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Os.current) {
        const e = new vx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Os.current = e);
      }
      return Os.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  xx = {
    pan: { Feature: O1 },
    drag: { Feature: _1, ProjectionNode: om, MeasureLayout: qp },
  },
  wx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Sx(e) {
  const t = wx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function $l(e, t, n = 1) {
  const [r, i] = Sx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return $p(s) ? parseFloat(s) : s;
  } else return Al(i) ? $l(i, t, n + 1) : i;
}
function kx(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Al(o)) return;
      const s = $l(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Al(o)) continue;
    const s = $l(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const Px = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  sm = (e) => Px.has(e),
  Cx = (e) => Object.keys(e).some(sm),
  xf = (e) => e === xn || e === M,
  wf = (e, t) => parseFloat(e.split(", ")[t]),
  Sf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return wf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? wf(o[1], e) : 0;
      }
    },
  Tx = new Set(["x", "y", "z"]),
  Ex = ii.filter((e) => !Tx.has(e));
function Lx(e) {
  const t = [];
  return (
    Ex.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const qn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Sf(4, 13),
  y: Sf(5, 14),
};
qn.translateX = qn.x;
qn.translateY = qn.y;
const Vx = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = qn[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = qn[u](a, o));
      }),
      e
    );
  },
  Mx = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(sm);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = cr(c);
        const d = t[a];
        let m;
        if (wo(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = cr(c));
          for (let E = v; E < y && d[E] !== null; E++)
            m ? Zo(cr(d[E]) === m) : (m = cr(d[E]));
        } else m = cr(d);
        if (f !== m)
          if (xf(f) && xf(m)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && m === M && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = Lx(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = Vx(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Ho && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function jx(e, t, n, r) {
  return Cx(t) ? Mx(e, t, n, r) : { target: t, transitionEnd: r };
}
const Ax = (e, t, n, r) => {
    const i = kx(e, t, r);
    return (t = i.target), (r = i.transitionEnd), jx(e, t, n, r);
  },
  Hl = { current: null },
  lm = { current: !1 };
function Dx() {
  if (((lm.current = !0), !!Ho))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Hl.current = e.matches);
      e.addListener(t), t();
    } else Hl.current = !1;
}
function Nx(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Ve(o)) e.addValue(i, o), Co(r) && r.add(i);
    else if (Ve(s)) e.addValue(i, Xe(o, { owner: e })), Co(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, Xe(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const kf = new WeakMap(),
  am = Object.keys(qr),
  Rx = am.length,
  Pf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  _x = Wa.length;
class Ox {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => z.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Ko(n)),
      (this.isVariantNode = Gh(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && Ve(d) && (d.set(l[f], !1), Co(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      kf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      lm.current || Dx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Hl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    kf.delete(this.current),
      this.projection && this.projection.unmount(),
      be(this.notifyUpdate),
      be(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = vn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && z.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < Rx; a++) {
      const u = am[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: m,
        } = qr[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          m && (l = m));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && Rn(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Pf.length; r++) {
      const i = Pf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Nx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < _x; r++) {
      const i = Wa[r],
        o = this.props[i];
      (Jr(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Xe(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = qa(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ve(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new lu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class um extends Ox {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = t1(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      bv(this, r, s);
      const l = Ax(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Fx(e) {
  return window.getComputedStyle(e);
}
class zx extends um {
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = ru(n);
      return (r && r.default) || 0;
    } else {
      const r = Fx(t),
        i = (Jh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Jp(t, n);
  }
  build(t, n, r, i) {
    Ga(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Ja(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ve(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    rp(t, n, r, i);
  }
}
class Ix extends um {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = ru(n);
      return (r && r.default) || 0;
    }
    return (n = ip.has(n) ? n : Za(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return te();
  }
  scrapeMotionValuesFromProps(t, n) {
    return sp(t, n);
  }
  build(t, n, r, i) {
    Ya(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    op(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Xa(t.tagName)), super.mount(t);
  }
}
const Bx = (e, t) =>
    Ka(e)
      ? new Ix(t, { enableHardwareAcceleration: !1 })
      : new zx(t, { enableHardwareAcceleration: !0 }),
  Ux = { layout: { ProjectionNode: om, MeasureLayout: qp } },
  $x = { ...m1, ...F0, ...xx, ...Ux },
  le = Gy((e, t) => C0(e, t, $x, Bx));
function Hx(e) {
  const t = Qo(() => Xe(e)),
    { isStatic: n } = j.useContext(Ba);
  if (n) {
    const [, r] = j.useState(e);
    j.useEffect(() => t.on("change", r), []);
  }
  return t;
}
const Wx = (e) => typeof e == "object" && e.mix,
  Kx = (e) => (Wx(e) ? e.mix : void 0);
function Gx(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    l = Jo(i, o, { mixer: Kx(o[0]), ...s });
  return t ? l(r) : l;
}
function cm(e, t) {
  const n = Hx(t()),
    r = () => n.set(t());
  return (
    r(),
    $a(() => {
      const i = () => z.update(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), be(r);
      };
    }),
    n
  );
}
function Qx(e) {
  (jr.current = []), e();
  const t = cm(jr.current, e);
  return (jr.current = void 0), t;
}
function Cf(e, t, n, r) {
  if (typeof e == "function") return Qx(e);
  const i = typeof t == "function" ? t : Gx(t, n, r);
  return Array.isArray(e) ? Tf(e, i) : Tf([e], ([o]) => i(o));
}
function Tf(e, t) {
  const n = Qo(() => []);
  return cm(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function Yx(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t && (Zo(!!t.current), (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const Ki = new WeakMap();
let Ct;
function Xx(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function Zx({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Ki.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return Xx(e, n);
        },
      });
    });
}
function Jx(e) {
  e.forEach(Zx);
}
function qx() {
  typeof ResizeObserver > "u" || (Ct = new ResizeObserver(Jx));
}
function bx(e, t) {
  Ct || qx();
  const n = Yx(e);
  return (
    n.forEach((r) => {
      let i = Ki.get(r);
      i || ((i = new Set()), Ki.set(r, i)),
        i.add(t),
        Ct == null || Ct.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = Ki.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Ct == null || Ct.unobserve(r);
      });
    }
  );
}
const Gi = new Set();
let Nr;
function ew() {
  (Nr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Gi.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Nr);
}
function tw(e) {
  return (
    Gi.add(e),
    Nr || ew(),
    () => {
      Gi.delete(e), !Gi.size && Nr && (Nr = void 0);
    }
  );
}
function nw(e, t) {
  return typeof e == "function" ? tw(e) : bx(e, t);
}
const rw = 50,
  Ef = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  iw = () => ({ time: 0, x: Ef(), y: Ef() }),
  ow = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Lf(e, t, n, r) {
  const i = n[t],
    { length: o, position: s } = ow[t],
    l = i.current,
    a = n.time;
  (i.current = e["scroll" + s]),
    (i.scrollLength = e["scroll" + o] - e["client" + o]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Jn(0, i.scrollLength, i.current));
  const u = r - a;
  i.velocity = u > rw ? 0 : nu(i.current - l, u);
}
function sw(e, t, n) {
  Lf(e, "x", t, n), Lf(e, "y", t, n), (t.time = n);
}
function lw(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        l = r.parentNode;
      for (; !s; ) l.tagName === "svg" && (s = l), (l = r.parentNode);
      r = s;
    } else break;
  return n;
}
const aw = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Wl = { start: 0, center: 0.5, end: 1 };
function Vf(e, t, n = 0) {
  let r = 0;
  if ((Wl[e] !== void 0 && (e = Wl[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const uw = [0, 0];
function cw(e, t, n, r) {
  let i = Array.isArray(e) ? e : uw,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Wl[e] ? e : "0"])),
    (o = Vf(i[0], n, r)),
    (s = Vf(i[1], t)),
    o - s
  );
}
const fw = { x: 0, y: 0 };
function dw(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function hw(e, t, n) {
  let { offset: r = aw.All } = n;
  const { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    l = i !== e ? lw(i, e) : fw,
    a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : dw(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let c = !t[o].interpolate;
  const f = r.length;
  for (let d = 0; d < f; d++) {
    const m = cw(r[d], u[s], a[s], l[o]);
    !c && m !== t[o].interpolatorOffsets[d] && (c = !0), (t[o].offset[d] = m);
  }
  c &&
    ((t[o].interpolate = Jo(t[o].offset, Op(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function pw(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function mw(e, t, n, r = {}) {
  return {
    measure: () => pw(e, r.target, n),
    update: (i) => {
      sw(e, n, i), (r.offset || r.target) && hw(e, n, r);
    },
    notify: () => t(n),
  };
}
const dr = new WeakMap(),
  Mf = new WeakMap(),
  Fs = new WeakMap(),
  jf = (e) => (e === document.documentElement ? window : e);
function gw(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Fs.get(t);
  r || ((r = new Set()), Fs.set(t, r));
  const i = iw(),
    o = mw(t, e, i, n);
  if ((r.add(o), !dr.has(t))) {
    const l = () => {
        for (const d of r) d.measure();
      },
      a = () => {
        for (const d of r) d.update(re.timestamp);
      },
      u = () => {
        for (const d of r) d.notify();
      },
      c = () => {
        z.read(l, !1, !0), z.update(a, !1, !0), z.update(u, !1, !0);
      };
    dr.set(t, c);
    const f = jf(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && Mf.set(t, nw(t, c)),
      f.addEventListener("scroll", c, { passive: !0 });
  }
  const s = dr.get(t);
  return (
    z.read(s, !1, !0),
    () => {
      var l;
      be(s);
      const a = Fs.get(t);
      if (!a || (a.delete(o), a.size)) return;
      const u = dr.get(t);
      dr.delete(t),
        u &&
          (jf(t).removeEventListener("scroll", u),
          (l = Mf.get(t)) === null || l === void 0 || l(),
          window.removeEventListener("resize", u));
    }
  );
}
function Af(e, t) {
  pp(!!(!t || t.current));
}
const yw = () => ({
  scrollX: Xe(0),
  scrollY: Xe(0),
  scrollXProgress: Xe(0),
  scrollYProgress: Xe(0),
});
function vw({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = Qo(yw);
  return (
    (n ? $a : j.useEffect)(
      () => (
        Af("target", t),
        Af("container", e),
        gw(
          ({ x: s, y: l }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
const hr = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: { duration: 2, repeat: 1 / 0 },
    },
  },
  xw = {
    initial: { x: 0 },
    animate: {
      x: "-220%",
      transition: { repeat: 1 / 0, repeatType: "mirror", duration: 20 },
    },
  },
  ww = () =>
    w.jsxs("div", {
      className: "hero",
      children: [
        w.jsx("div", {
          className: "wrapper",
          children: w.jsxs(le.div, {
            className: "textContainer",
            variants: hr,
            initial: "initial",
            animate: "animate",
            children: [
              w.jsx(le.h2, { variants: hr, children: "VITALY MAKSIMCHUK" }),
              w.jsx(le.h1, { variants: hr, children: "Web Developer" }),
              w.jsx(le.div, { variants: hr, className: "buttons" }),
              w.jsx(le.img, {
                variants: hr,
                animate: "scrollButton",
                src: "/animated-portfolio/scroll.png",
                alt: "",
              }),
            ],
          }),
        }),
        w.jsx(le.div, {
          className: "slidingTextContainer",
          variants: xw,
          initial: "initial",
          animate: "animate",
          children: "Looking for Work",
        }),
        w.jsx("div", {
          className: "imageContainer",
          children: w.jsx("img", { src: "/animated-portfolio/hero.png", alt: "" }),
        }),
      ],
    }),
  Sw = {
    open: { transition: { staggerChildren: 0.1 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  },
  kw = { open: { y: 0, opacity: 1 }, closed: { y: 50, opacity: 0 } },
  Pw = () => {
    const e = ["Homepage", "About", "Skills", "Portfolio", "Contact"];
    return w.jsx(le.div, {
      className: "links",
      variants: Sw,
      children: e.map((t) =>
        w.jsx(
          le.a,
          {
            href: `#${t}`,
            variants: kw,
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 },
            children: t,
          },
          t
        )
      ),
    });
  };
const Cw = ({ setOpen: e }) =>
    w.jsx("button", {
      onClick: () => e((t) => !t),
      children: w.jsxs("svg", {
        width: "50",
        height: "23",
        viewBox: "0 0 23 23",
        children: [
          w.jsx(le.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            variants: {
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            },
          }),
          w.jsx(le.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            d: "M 2 9.423 L 20 9.423",
            variants: { closed: { opacity: 1 }, open: { opacity: 0 } },
          }),
          w.jsx(le.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            variants: {
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            },
          }),
        ],
      }),
    }),
  Tw = () => {
    const [e, t] = j.useState(!1),
      n = {
        open: {
          clipPath: "circle(1200px at 50px 50px)",
          transition: { type: "spring", stiffness: 20 },
        },
        closed: {
          clipPath: "circle(30px at 50px 50px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
      };
    return w.jsxs(le.div, {
      className: "sidebar",
      animate: e ? "open" : "closed",
      children: [
        w.jsx(le.div, {
          className: "bg",
          variants: n,
          children: w.jsx(Pw, {}),
        }),
        w.jsx(Cw, { setOpen: t }),
      ],
    });
  };
const Ew = () =>
  w.jsxs("div", {
    className: "navbar",
    children: [
      w.jsx(Tw, {}),
      w.jsxs("div", {
        className: "wrapper",
        children: [
          w.jsx(le.span, {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5 },
            children: "VM",
          }),
          w.jsxs("div", {
            className: "social",
            children: [
              w.jsx("a", {
                href: "https://www.linkedin.com/in/vitaly-maksimchuk-2b30012b2/",
                children: w.jsx("img", { src: "/animated-portfolio/linkedin.png", alt: "" }),
              }),
              w.jsx("a", {
                href: "https://github.com/Protacik",
                children: w.jsx("img", {
                  src: "/animated-portfolio/github-mark-white.png",
                  alt: "",
                }),
              }),
              w.jsx("a", {
                href: "https://www.instagram.com/protacik/",
                children: w.jsx("img", { src: "/animated-portfolio/instagram.png", alt: "" }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
const ji = ({ type: e }) => {
    const t = j.useRef(),
      { scrollYProgress: n } = vw({
        target: t,
        offset: ["start start", "end start"],
      }),
      r = Cf(n, [0, 1], ["0%", "500%"]),
      i = Cf(n, [0, 1], ["0%", "100%"]);
    return w.jsxs("div", {
      className: "parallax",
      ref: t,
      style: {
        background:
          e === "about"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      },
      children: [
        w.jsx(le.h1, {
          style: { y: r },
          children: e === "about" ? "Just Keep Scrolling" : "",
        }),
        w.jsx(le.div, { className: "skyline" }),
        w.jsx(le.div, {
          className: "planets",
          style: {
            y: i,
            backgroundImage: `url(${
              e === "about" ? "/animated-portfolio/planets.png" : "/animated-portfolio/sun.png"
            })`,
          },
        }),
        w.jsx(le.div, { style: { x: i }, className: "stars" }),
      ],
    });
  },
  Lw = () =>
    w.jsx("div", {
      name: "about",
      className: "w-full h-screen bg-[#111132] text-gray-300",
      children: w.jsxs("div", {
        className: "flex flex-col justify-center items-center w-full h-full",
        children: [
          w.jsxs("div", {
            className: "max-w-[1000px] w-full grid grid-cols-2 gap-8",
            children: [
              w.jsx("div", {
                className: "sm:text-right pb-8 pl-4",
                children: w.jsx("p", {
                  className:
                    "text-4xl font-bold inline border-b-4 border-green-600",
                  children: "About",
                }),
              }),
              w.jsx("div", {}),
            ],
          }),
          w.jsxs("div", {
            className: "max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4",
            children: [
              w.jsx("div", {
                className: "sm:text-right text-4xl font-bold",
                children: w.jsx("p", {
                  children:
                    "Hi. I'm Vitaly, nice to meet you. Please take a look around.",
                }),
              }),
              w.jsx("div", {
                children: w.jsx("p", {
                  children:
                    "Despite being relatively new to web development, I am dedicated and determined to excel in the field. My enthusiasm and commitment drive me to continuously learn and improve, ensuring I deliver my best work with each project I undertake.",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  Vw = () =>
    w.jsx("div", {
      name: "skills",
      className: "w-full h-screen bg-[#111132] text-gray-300",
      children: w.jsxs("div", {
        className:
          "max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full",
        children: [
          w.jsxs("div", {
            children: [
              w.jsx("p", {
                className:
                  "text-4xl font-bold inline border-b-4 border-green-600",
                children: "Skills",
              }),
              w.jsx("p", {
                className: "py-4",
                children: "These are the technologies I've worked with",
              }),
            ],
          }),
          w.jsxs("div", {
            className:
              "w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8",
            children: [
              w.jsxs("div", {
                className:
                  "shadow-md shadow-[#040c16] hover:scale-110 duration-500",
                children: [
                  w.jsx("img", {
                    className: "w-20 mx-auto",
                    src: "/animated-portfolio/html.png",
                    alt: "HTML icon",
                  }),
                  w.jsx("p", { className: "my-4", children: "HTML" }),
                ],
              }),
              w.jsxs("div", {
                className:
                  "shadow-md shadow-[#040c16] hover:scale-110 duration-500",
                children: [
                  w.jsx("img", {
                    className: "w-20 mx-auto",
                    src: "/animated-portfolio/css.png",
                    alt: "HTML icon",
                  }),
                  w.jsx("p", { className: "my-4", children: "CSS" }),
                ],
              }),
              w.jsxs("div", {
                className:
                  "shadow-md shadow-[#040c16] hover:scale-110 duration-500",
                children: [
                  w.jsx("img", {
                    className: "w-20 mx-auto",
                    src: "/animated-portfolio/javascript.png",
                    alt: "HTML icon",
                  }),
                  w.jsx("p", { className: "my-4", children: "JavaScript" }),
                ],
              }),
              w.jsxs("div", {
                className:
                  "shadow-md shadow-[#040c16] hover:scale-110 duration-500",
                children: [
                  w.jsx("img", {
                    className: "w-20 mx-auto",
                    src: "/animated-portfolio/react.png",
                    alt: "HTML icon",
                  }),
                  w.jsx("p", { className: "my-4", children: "React" }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Mw = () =>
    w.jsx("div", {
      name: "work",
      className: "w-full md:h-screen text-gray-300 bg-[#111132]",
      children: w.jsxs("div", {
        className:
          "max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full",
        children: [
          w.jsxs("div", {
            className: "pb-8",
            children: [
              w.jsx("p", {
                className:
                  "text-4xl font-bold inline border-b-4 text-gray-300 border-green-600",
                children: "Work",
              }),
              w.jsx("p", {
                className: "py-6",
                children: "Check out some of my recent work",
              }),
            ],
          }),
          w.jsxs("div", {
            className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4",
            children: [
              w.jsx("div", {
                style: { backgroundImage: "url(/animated-portfolio/todolistnew.png)" },
                className:
                  "shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div",
                children: w.jsxs("div", {
                  className: "opacity-0 group-hover:opacity-100",
                  children: [
                    w.jsx("span", {
                      className: "text-2xl font-bold text-white tracking-wider",
                      children: "React JS Application",
                    }),
                    w.jsxs("div", {
                      className: "pt-8 text-center",
                      children: [
                        w.jsx("a", {
                          href: "https://protacik.github.io/todolist/",
                          children: w.jsx("button", {
                            className:
                              "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
                            children: "Demo",
                          }),
                        }),
                        w.jsx("a", {
                          href: "https://github.com/Protacik/todolist",
                          children: w.jsx("button", {
                            className:
                              "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
                            children: "Code",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              w.jsx("div", {
                style: { backgroundImage: "url(/animated-portfolio/weather.png)" },
                className:
                  "shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div",
                children: w.jsxs("div", {
                  className: "opacity-0 group-hover:opacity-100",
                  children: [
                    w.jsx("span", {
                      className: "text-2xl font-bold text-white tracking-wider",
                      children: "React JS Application",
                    }),
                    w.jsxs("div", {
                      className: "pt-8 text-center",
                      children: [
                        w.jsx("a", {
                          href: "https://protacik.github.io/Weather/",
                          children: w.jsx("button", {
                            className:
                              "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
                            children: "Demo",
                          }),
                        }),
                        w.jsx("a", {
                          href: "https://github.com/Protacik/Weather",
                          children: w.jsx("button", {
                            className:
                              "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
                            children: "Code",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              w.jsx("div", {
                style: { backgroundImage: "url(/animated-portfolio/calculator.png)" },
                className:
                  "shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div",
                children: w.jsxs("div", {
                  className: "opacity-0 group-hover:opacity-100",
                  children: [
                    w.jsx("span", {
                      className: "text-2xl font-bold text-white tracking-wider",
                      children: "React JS Application",
                    }),
                    w.jsxs("div", {
                      className: "pt-8 text-center",
                      children: [
                        w.jsx("a", {
                          href: "https://protacik.github.io/Calculator/",
                          children: w.jsx("button", {
                            className:
                              "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
                            children: "Demo",
                          }),
                        }),
                        w.jsx("a", {
                          href: "https://github.com/Protacik/Calculator",
                          children: w.jsx("button", {
                            className:
                              "text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg",
                            children: "Code",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  jw = () =>
    w.jsx("div", {
      name: "contact",
      className:
        "w-full h-screen bg-[#111132] flex justify-center items-center p-4",
      children: w.jsxs("form", {
        method: "POST",
        action: "https://getform.io/f/zbzoklma",
        className: "flex flex-col max-w-[600px] w-full",
        children: [
          w.jsxs("div", {
            className: "pb-8",
            children: [
              w.jsx("p", {
                className:
                  "text-4xl font-bold inline border-b-4 border-green-600 text-gray-300",
                children: "Contact",
              }),
              w.jsx("p", {
                className: "text-gray-300 py-4",
                children:
                  "Submit the form below or shoot me an email - protacik@gmail.com",
              }),
            ],
          }),
          w.jsx("input", {
            className: "bg-[#ccd6f6] p-2 text-black",
            type: "text",
            placeholder: "Name",
            name: "name",
          }),
          w.jsx("input", {
            className: "my-4 p-2 bg-[#ccd6f6] text-black",
            type: "email",
            placeholder: "Email",
            name: "email",
          }),
          w.jsx("textarea", {
            className: "bg-[#ccd6f6] p-2 text-black",
            name: "message",
            rows: "10",
            placeholder: "Message",
          }),
          w.jsx("button", {
            className:
              "text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center",
            children: "Let's Collaborate",
          }),
        ],
      }),
    }),
  Aw = () =>
    w.jsxs("div", {
      children: [
        w.jsxs("section", {
          id: "Homepage",
          children: [w.jsx(Ew, {}), w.jsx(ww, {})],
        }),
        w.jsx("section", { children: w.jsx(ji, { type: "about" }) }),
        w.jsx("section", { id: "About", children: w.jsx(Lw, {}) }),
        w.jsx("section", { children: w.jsx(ji, { type: "portfolio" }) }),
        w.jsx("section", { id: "Skills", children: w.jsx(Vw, {}) }),
        w.jsx("section", { children: w.jsx(ji, { type: "about" }) }),
        w.jsx("section", { id: "Portfolio", children: w.jsx(Mw, {}) }),
        w.jsx("section", { children: w.jsx(ji, { type: "portfolio" }) }),
        w.jsx("section", { id: "Contact", children: w.jsx(jw, {}) }),
      ],
    });
zs.createRoot(document.getElementById("root")).render(
  w.jsx(Xl.StrictMode, { children: w.jsx(Aw, {}) })
);
