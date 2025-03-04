var app = (function () {
    "use strict";
    function t() { }
    function e(t) {
        return t();
    }
    function n() {
        return Object.create(null);
    }
    function r(t) {
        t.forEach(e);
    }
    function o(t) {
        return "function" == typeof t;
    }
    function a(t, e) {
        return t != t ? e == e : t !== e || (t && "object" == typeof t) || "function" == typeof t;
    }
    function l(t, e) {
        t.appendChild(e);
    }
    function i(t, e, n) {
        t.insertBefore(e, n || null);
    }
    function c(t) {
        t.parentNode.removeChild(t);
    }
    function u(t) {
        return document.createElement(t);
    }
    function s(t) {
        return document.createTextNode(t);
    }
    function d() {
        return s(" ");
    }
    function f() {
        return s("");
    }
    function p(t, e, n, r) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
    }
    function g(t, e, n) {
        null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
    }
    function m(t, e) {
        (e = "" + e), t.data !== e && (t.data = e);
    }
    function h(t, e, n) {
        t.classList[n ? "add" : "remove"](e);
    }
    let y;
    function $(t) {
        y = t;
    }
    function b() {
        if (!y) throw new Error("Function called outside component initialization");
        return y;
    }
    function k() {
        const t = b();
        return (e, n) => {
            const r = t.$$.callbacks[e];
            if (r) {
                const o = (function (t, e) {
                    const n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(t, !1, !1, e), n;
                })(e, n);
                r.slice().forEach((e) => {
                    e.call(t, o);
                });
            }
        };
    }
    const v = [],
        w = [],
        x = [],
        M = [],
        _ = Promise.resolve();
    let P = !1;
    function S(t) {
        x.push(t);
    }
    function C() {
        const t = new Set();
        do {
            for (; v.length;) {
                const t = v.shift();
                $(t), E(t.$$);
            }
            for (; w.length;) w.pop()();
            for (let e = 0; e < x.length; e += 1) {
                const n = x[e];
                t.has(n) || (n(), t.add(n));
            }
            x.length = 0;
        } while (v.length);
        for (; M.length;) M.pop()();
        P = !1;
    }
    function E(t) {
        null !== t.fragment && (t.update(t.dirty), r(t.before_update), t.fragment && t.fragment.p(t.dirty, t.ctx), (t.dirty = null), t.after_update.forEach(S));
    }
    const A = new Set();
    let T;
    function G(t, e) {
        t && t.i && (A.delete(t), t.i(e));
    }
    function N(t, e, n, r) {
        if (t && t.o) {
            if (A.has(t)) return;
            A.add(t),
                T.c.push(() => {
                    A.delete(t), r && (n && t.d(1), r());
                }),
                t.o(e);
        }
    }
    function K(t, e) {
        t.d(1), e.delete(t.key);
    }
    function D(t, e, n, r, o, a, l, i, c, u, s, d) {
        let f = t.length,
            p = a.length,
            g = f;
        const m = {};
        for (; g--;) m[t[g].key] = g;
        const h = [],
            y = new Map(),
            $ = new Map();
        for (g = p; g--;) {
            const t = d(o, a, g),
                i = n(t);
            let c = l.get(i);
            c ? r && c.p(e, t) : (c = u(i, t)).c(), y.set(i, (h[g] = c)), i in m && $.set(i, Math.abs(g - m[i]));
        }
        const b = new Set(),
            k = new Set();
        function v(t) {
            G(t, 1), t.m(i, s), l.set(t.key, t), (s = t.first), p--;
        }
        for (; f && p;) {
            const e = h[p - 1],
                n = t[f - 1],
                r = e.key,
                o = n.key;
            e === n ? ((s = e.first), f--, p--) : y.has(o) ? (!l.has(r) || b.has(r) ? v(e) : k.has(o) ? f-- : $.get(r) > $.get(o) ? (k.add(r), v(e)) : (b.add(o), f--)) : (c(n, l), f--);
        }
        for (; f--;) {
            const e = t[f];
            y.has(e.key) || c(e, l);
        }
        for (; p;) v(h[p - 1]);
        return h;
    }
    function z(t) {
        t && t.c();
    }
    function O(t, n, a) {
        const { fragment: l, on_mount: i, on_destroy: c, after_update: u } = t.$$;
        l && l.m(n, a),
            S(() => {
                const n = i.map(e).filter(o);
                c ? c.push(...n) : r(n), (t.$$.on_mount = []);
            }),
            u.forEach(S);
    }
    function V(t, e) {
        const n = t.$$;
        null !== n.fragment && (r(n.on_destroy), n.fragment && n.fragment.d(e), (n.on_destroy = n.fragment = null), (n.ctx = {}));
    }
    function B(t, e) {
        t.$$.dirty || (v.push(t), P || ((P = !0), _.then(C)), (t.$$.dirty = n())), (t.$$.dirty[e] = !0);
    }
    function L(e, o, a, l, i, c) {
        const u = y;
        $(e);
        const s = o.props || {},
            d = (e.$$ = { fragment: null, ctx: null, props: c, update: t, not_equal: i, bound: n(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u ? u.$$.context : []), callbacks: n(), dirty: null });
        let f = !1;
        (d.ctx = a ? a(e, s, (t, n, r = n) => (d.ctx && i(d.ctx[t], (d.ctx[t] = r)) && (d.bound[t] && d.bound[t](r), f && B(e, t)), n)) : s),
            d.update(),
            (f = !0),
            r(d.before_update),
            (d.fragment = !!l && l(d.ctx)),
            o.target &&
            (o.hydrate
                ? d.fragment &&
                d.fragment.l(
                    (function (t) {
                        return Array.from(t.childNodes);
                    })(o.target)
                )
                : d.fragment && d.fragment.c(),
                o.intro && G(e.$$.fragment),
                O(e, o.target, o.anchor),
                C()),
            $(u);
    }
    class R {
        $destroy() {
            V(this, 1), (this.$destroy = t);
        }
        $on(t, e) {
            const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return (
                n.push(e),
                () => {
                    const t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1);
                }
            );
        }
        $set() { }
    }
    function j(t, e, n) {
        const r = Object.create(t);
        return (r.unit = e[n]), (r.i = n), r;
    }
    function H(e) {
        let n;
        return {
            c() {
                n = u("br");
            },
            m(t, e) {
                i(t, n, e);
            },
            p: t,
            d(t) {
                t && c(n);
            },
        };
    }
    function W(t) {
        let e,
            n,
            r,
            o,
            a,
            f = t.unit.value + "";
        return {
            c() {
                (e = u("span")),
                    (n = s(f)),
                    (r = d()),
                    g(e, "aria-hidden", "true"),
                    g(e, "data-key", (o = t.unit.value.charCodeAt(0))),
                    g(e, "style", (a = "animation-delay: " + (0.04 * t.i + 0.15 + t.delay) + "s;'}")),
                    g(e, "class", "svelte-k7v5gb"),
                    h(e, "btn", t.btn),
                    h(e, "correct", t.unit.correct);
            },
            m(t, o) {
                i(t, e, o), l(e, n), l(e, r);
            },
            p(t, r) {
                t.split && f !== (f = r.unit.value + "") && m(n, f),
                    t.split && o !== (o = r.unit.value.charCodeAt(0)) && g(e, "data-key", o),
                    (t.split || t.delay) && a !== (a = "animation-delay: " + (0.04 * r.i + 0.15 + r.delay) + "s;'}") && g(e, "style", a),
                    t.btn && h(e, "btn", r.btn),
                    t.split && h(e, "correct", r.unit.correct);
            },
            d(t) {
                t && c(e);
            },
        };
    }
    function q(t, e) {
        let n, r;
        function o(t, e) {
            return " " !== e.unit.value ? W : H;
        }
        let a = o(0, e),
            l = a(e);
        return {
            key: t,
            first: null,
            c() {
                (n = f()), l.c(), (r = f()), (this.first = n);
            },
            m(t, e) {
                i(t, n, e), l.m(t, e), i(t, r, e);
            },
            p(t, e) {
                a === (a = o(0, e)) && l ? l.p(t, e) : (l.d(1), (l = a(e)) && (l.c(), l.m(r.parentNode, r)));
            },
            d(t) {
                t && c(n), l.d(t), t && c(r);
            },
        };
    }
    function F(e) {
        let n,
            r = [],
            o = new Map(),
            a = e.split;
        const l = (t) => t.unit.id;
        for (let t = 0; t < a.length; t += 1) {
            let n = j(e, a, t),
                i = l(n);
            o.set(i, (r[t] = q(i, n)));
        }
        return {
            c() {
                for (let t = 0; t < r.length; t += 1) r[t].c();
                n = f();
            },
            m(t, e) {
                for (let n = 0; n < r.length; n += 1) r[n].m(t, e);
                i(t, n, e);
            },
            p(t, e) {
                const a = e.split;
                r = D(r, t, l, 1, e, a, o, n.parentNode, K, q, n, j);
            },
            i: t,
            o: t,
            d(t) {
                for (let e = 0; e < r.length; e += 1) r[e].d(t);
                t && c(n);
            },
        };
    }
    function J(t, e, n) {
        let { split: r } = e,
            { btn: o = !1 } = e,
            { delay: a = 0 } = e;
        return (
            (t.$set = (t) => {
                "split" in t && n("split", (r = t.split)), "btn" in t && n("btn", (o = t.btn)), "delay" in t && n("delay", (a = t.delay));
            }),
            (t.$$.update = (t = { split: 1 }) => {
                t.split && "string" == typeof r && n("split", (r = r.split("").map((t) => ({ id: Math.random(), value: t }))));
            }),
            { split: r, btn: o, delay: a }
        );
    }
    class I extends R {
        constructor(t) {
            super(), L(this, t, J, F, a, { split: 0, btn: 0, delay: 0 });
        }
    }
    function Z(e) {
        let n, r, o, a, s, f;
        const m = new I({ props: { split: "Typing Adventure" } }),
            h = new I({ props: { split: "Play", btn: !0, delay: 0.65 } });
        return {
            c() {
                (n = u("section")),
                    (r = u("h1")),
                    z(m.$$.fragment),
                    (o = d()),
                    (a = u("button")),
                    z(h.$$.fragment),
                    g(r, "aria-label", "Typing Adventure"),
                    g(r, "class", "svelte-1x80g19"),
                    g(a, "aria-label", "Play"),
                    g(a, "class", "svelte-1x80g19"),
                    g(n, "class", "svelte-1x80g19"),
                    (f = p(a, "click", e.click_handler));
            },
            m(t, e) {
                i(t, n, e), l(n, r), O(m, r, null), l(n, o), l(n, a), O(h, a, null), (s = !0);
            },
            p: t,
            i(t) {
                s || (G(m.$$.fragment, t), G(h.$$.fragment, t), (s = !0));
            },
            o(t) {
                N(m.$$.fragment, t), N(h.$$.fragment, t), (s = !1);
            },
            d(t) {
                t && c(n), V(m), V(h), f();
            },
        };
    }
    function Q(t) {
        const e = k();
        return {
            dispatch: e,
            click_handler: () => {
                e("play");
            },
        };
    }
    class U extends R {
        constructor(t) {
            super(), L(this, t, Q, Z, a, {});
        }
    }
    const X = [
        "aback",
        "abandon",
        "abashed",
        "abbreviate",
        "abbreviation",
        "abet",
        "abide",
        "ablaze",
        "abnormal",
        "abnormality",
        "aboard",
        "abort",
        "abortion",
        "abortive",
        "abound",
        "abreast",
        "abrupt",
        "absence",
        "absent",
        "absentee",
        "absenteeism",
        "absord",
        "abstract",
        "abundance",
        "abundant",
        "abuse",
        "abusive",
        "academic",
        "academy",
        "accelerate",
        "accelerator",
        "accent",
        "acclaim",
        "accommodate",
        "accommodation",
        "across",
        "activate",
        "activist",
        "acupuncture",
        "acute angle",
        "adapt",
        "adaptable",
        "adaptation",
        "adequate",
        "adjoining",
        "adjust",
        "adjustable",
        "admirable",
        "admire",
        "admirer",
        "admit",
        "admittance",
        "adopt",
        "adorable",
        "adore",
        "adrift",
        "adult",
        "adulthood",
        "advent",
        "adversary",
        "advisable",
        "advisory",
        "aesthetic",
        "afar",
        "affair",
        "affected",
        "affirm",
        "affirmative",
        "afflict",
        "afford",
        "affront",
        "afloat",
        "afterwards",
        "agency",
        "agent",
        "aggression",
        "aggressive",
        "agile",
        "agonize",
        "agonized",
        "agony",
        "agriculture",
        "aid",
        "aim",
        "aimless",
        "aircraft",
        "airless",
        "airport",
        "airy",
        "Nidorina",
        "Nidorino",
        "Ninetales",
        "Oddish",
        "Omanyte",
        "Omastar",
        "Onix",
        "Paras",
        "Parasect",
        "Persian",
        "Pidgeot",
        "Pidgeotto",
        "Pidgey",
        "Pikachu",
        "Pinsir",
        "Poliwag",
        "Poliwhirl",
        "Poliwrath",
        "Ponyta",
        "Porygon",
        "Primeape",
        "Psyduck",
        "Raichu",
        "Rapidash",
        "Raticate",
        "Rattata",
        "Rhydon",
        "Rhyhorn",
        "Sandshrew",
        "Sandslash",
        "Scyther",
        "Seadra",
        "Seaking",
        "Seel",
        "Shellder",
        "Slowbro",
        "Slowpoke",
        "Snorlax",
        "Spearow",
        "Squirtle",
        "Starmie",
        "Staryu",
        "Tangela",
        "Tauros",
        "Tentacool",
        "Tentacruel",
        "Vaporeon",
        "Venomoth",
        "Venonat",
        "Venusaur",
        "Victreebel",
        "Vileplume",
        "Voltorb",
        "Vulpix",
        "Wartortle",
        "Weedle",
        "Weepinbell",
        "Weezing",
        "Wigglytuff",
        "Zapdos",
        "Zubat",
    ],
        Y = () => ((t) => t[Math.floor(Math.random() * t.length)])(X);
    function tt(t, e, n) {
        const r = Object.create(t);
        return (r.key = e[n]), (r.each_value = e), (r.key_index = n), r;
    }
    function et(t, e) {
        let n,
            r,
            o,
            a,
            f = e.key.value + "",
            h = e.key;
        const y = () => e.button_binding(n, h),
            $ = () => e.button_binding(null, h);
        function b(...t) {
            return e.click_handler(e, ...t);
        }
        return {
            key: t,
            first: null,
            c() {
                (n = u("button")), (r = s(f)), (o = d()), g(n, "class", "svelte-18te30r"), (a = p(n, "click", b)), (this.first = n);
            },
            m(t, e) {
                i(t, n, e), l(n, r), l(n, o), y();
            },
            p(t, n) {
                (e = n), t.keys && f !== (f = e.key.value + "") && m(r, f), h !== e.key && ($(), (h = e.key), y());
            },
            d(t) {
                t && c(n), $(), a();
            },
        };
    }
    function nt(t) {
        let e,
            n,
            r,
            o,
            a,
            s,
            f = [],
            m = new Map();
        const h = new I({ props: { split: t.goal } });
        let y = t.keys;
        const $ = (t) => t.key.value;
        for (let e = 0; e < y.length; e += 1) {
            let n = tt(t, y, e),
                r = $(n);
            m.set(r, (f[e] = et(r, n)));
        }
        return {
            c() {
                (e = u("section")), (n = u("h2")), z(h.$$.fragment), (r = d()), (o = u("div"));
                for (let t = 0; t < f.length; t += 1) f[t].c();
                g(n, "aria-label", t.item), g(n, "class", "svelte-18te30r"), g(o, "class", "keyboard svelte-18te30r"), g(e, "class", "svelte-18te30r"), (s = p(window, "keydown", t.handleKeydown));
            },
            m(t, c) {
                i(t, e, c), l(e, n), O(h, n, null), l(e, r), l(e, o);
                for (let t = 0; t < f.length; t += 1) f[t].m(o, null);
                a = !0;
            },
            p(t, e) {
                const r = {};
                t.goal && (r.split = e.goal), h.$set(r), (a && !t.item) || g(n, "aria-label", e.item);
                const l = e.keys;
                f = D(f, t, $, 1, e, l, m, o, K, et, null, tt);
            },
            i(t) {
                a || (G(h.$$.fragment, t), (a = !0));
            },
            o(t) {
                N(h.$$.fragment, t), (a = !1);
            },
            d(t) {
                t && c(e), V(h);
                for (let t = 0; t < f.length; t += 1) f[t].d();
                s();
            },
        };
    }
    function rt(t, e, n) {
        let r = Y();
        function o(t) {
            const e = i.findIndex((t) => !t.correct);
            if ((t === i[e].value.toLowerCase() ? n("goal", (i[e].correct = !0), i) : n("goal", (i = i.map(({ id: t, value: e }) => ({ id: t, value: e, correct: !1 })))), i.every((t) => t.correct))) {
                let t = setTimeout(() => {
                    n("item", (r = Y())), clearTimeout(t);
                }, 200);
            }
        }
        const a = "qwertyuiopasdfghjklzxcvbnm'.".split("").map((t) => ({ value: t, ref: null }));
        var l;
        (l = () => {
            clearTimeout(void 0), clearTimeout(timeoutButton);
        }),
            b().$$.on_destroy.push(l);
        let i;
        return (
            (t.$$.update = (t = { item: 1 }) => {
                t.item && n("goal", (i = r.split("").map((t) => ({ id: Math.random(), value: t, correct: !1 }))));
            }),
            {
                item: r,
                handleKey: o,
                keys: a,
                handleKeydown: function ({ key: t }) {
                    const e = a.find(({ value: e, ref: n }) => e === t.toLowerCase());
                    if (e) {
                        o(e.value), (e.ref.style.background = "hsl(0, 0%, 90%)");
                        let t = setTimeout(() => {
                            (e.ref.style.background = "hsl(0, 0%, 100%)"), clearTimeout(t);
                        }, 150);
                    }
                },
                goal: i,
                button_binding: function (t, e) {
                    e.ref !== t &&
                        w[t ? "unshift" : "push"](() => {
                            (e.ref = t), n("key", e);
                        });
                },
                click_handler: ({ key: t }) => o(t.value),
            }
        );
    }
    class ot extends R {
        constructor(t) {
            super(), L(this, t, rt, nt, a, {});
        }
    }
    function at(e) {
        let n;
        const r = new ot({});
        return {
            c() {
                z(r.$$.fragment);
            },
            m(t, e) {
                O(r, t, e), (n = !0);
            },
            p: t,
            i(t) {
                n || (G(r.$$.fragment, t), (n = !0));
            },
            o(t) {
                N(r.$$.fragment, t), (n = !1);
            },
            d(t) {
                V(r, t);
            },
        };
    }
    function lt(e) {
        let n;
        const r = new U({});
        return (
            r.$on("play", e.play_handler),
            {
                c() {
                    z(r.$$.fragment);
                },
                m(t, e) {
                    O(r, t, e), (n = !0);
                },
                p: t,
                i(t) {
                    n || (G(r.$$.fragment, t), (n = !0));
                },
                o(t) {
                    N(r.$$.fragment, t), (n = !1);
                },
                d(t) {
                    V(r, t);
                },
            }
        );
    }
    function it(t) {
        let e, n, o, a;
        const l = [lt, at],
            u = [];
        function s(t, e) {
            return e.isPlaying ? 1 : 0;
        }
        return (
            (e = s(0, t)),
            (n = u[e] = l[e](t)),
            {
                c() {
                    n.c(), (o = f());
                },
                m(t, n) {
                    u[e].m(t, n), i(t, o, n), (a = !0);
                },
                p(t, a) {
                    let i = e;
                    (e = s(0, a)) === i
                        ? u[e].p(t, a)
                        : ((T = { r: 0, c: [], p: T }),
                            N(u[i], 1, 1, () => {
                                u[i] = null;
                            }),
                            T.r || r(T.c),
                            (T = T.p),
                            (n = u[e]) || (n = u[e] = l[e](a)).c(),
                            G(n, 1),
                            n.m(o.parentNode, o));
                },
                i(t) {
                    a || (G(n), (a = !0));
                },
                o(t) {
                    N(n), (a = !1);
                },
                d(t) {
                    u[e].d(t), t && c(o);
                },
            }
        );
    }
    function ct(t, e, n) {
        let r = !1;
        return {
            isPlaying: r,
            play_handler: () => {
                n("isPlaying", (r = !0));
            },
        };
    }
    return new (class extends R {
        constructor(t) {
            super(), L(this, t, ct, it, a, {});
        }
    })({ target: document.body });
})();