//"use strict";

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) { /*"use strict";*/ "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function (a, b)
{
    /*"use strict";*/ var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {}; function p(a, b) { b = b || d; var c = b.createElement("script"); c.text = a, b.head.appendChild(c).parentNode.removeChild(c) } var q = "3.2.1", r = function (a, b) { return new r.fn.init(a, b) }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function (a, b) { return b.toUpperCase() }; r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function () { return f.call(this) }, get: function (a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] }, pushStack: function (a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b }, each: function (a) { return r.each(this, a) }, map: function (a) { return this.pushStack(r.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(f.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (a) { var b = this.length, c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--) ; h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a) }, noop: function () { }, isFunction: function (a) { return "function" === r.type(a) }, isWindow: function (a) { return null != a && a === a.window }, isNumeric: function (a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function (a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) }, isEmptyObject: function (a) { var b; for (b in a) return !1; return !0 }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a }, globalEval: function (a) { p(a) }, camelCase: function (a) { return a.replace(t, "ms-").replace(u, v) }, each: function (a, b) { var c, d = 0; if (w(a)) { for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(s, "") }, makeArray: function (a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c }, inArray: function (a, b, c) { return null == b ? -1 : i.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function (a, b, c) { var d, e, f = 0, h = []; if (w(a)) for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e); else for (f in a) e = b(a[f], f, c), null != e && h.push(e); return g.apply([], h) }, guid: 1, proxy: function (a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function () { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { j["[object " + b + "]"] = b.toLowerCase() }); function w(a) { var b = !!a && "length" in a && a.length, c = r.type(a); return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) } var x = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) { return a === b && (l = !0), 0 }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) { for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function (a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }, da = function () { m() }, ea = ta(function (a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" }); try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) { G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)) } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function ga(a, b, d, e) { var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== w && (l = Z.exec(a))) if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length; while (h--) o[h] = "#" + k + " " + sa(o[h]); r = o.join(","), s = $.test(a) && qa(b.parentNode) || b } if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) { } finally { k === u && b.removeAttribute("id") } } } return i(a.replace(P, "$1"), b, d, e) } function ha() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ia(a) { return a[u] = !0, a } function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ka(a, b) { var c = a.split("|"), e = c.length; while (e--) d.attrHandle[c[e]] = b } function la(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function na(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function oa(a) { return function (b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } } function pa(a) { return ia(function (b) { return b = +b, ia(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = ga.support = {}, f = ga.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function (a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { return a.getAttribute("id") === b } }, d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) { var c, d, e, f = b.getElementById(a); if (f) { if (c = f.getAttributeNode("id"), c && c.value === a) return [f]; e = b.getElementsByName(a), d = 0; while (f = e[d++]) if (c = f.getAttributeNode("id"), c && c.value === a) return [f] } return [] } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function (a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function (a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = n.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function (a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function (a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function (a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0; if (e === f) return la(a, b); c = a; while (c = c.parentNode) g.unshift(c); c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, ga.matches = function (a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return ga(b, n, null, [a]).length > 0 }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ga.escape = function (a) { return (a + "").replace(ba, ca) }, ga.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function (a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function (a, b, c) { return function (d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break; return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]) }) : function (a) { return e(a, 0, c) }) : e } }, pseudos: { not: ia(function (a) { var b = [], c = [], d = h(a.replace(P, "$1")); return d[u] ? ia(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function (a) { return function (b) { return ga(a, b).length > 0 } }), contains: ia(function (a) { return a = a.replace(_, aa), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function (a) { return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === o }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: oa(!1), disabled: oa(!0), checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1; return !0 }, parent: function (a) { return !d.pseudos.empty(a) }, header: function (a) { return X.test(a.nodeName) }, input: function (a) { return W.test(a.nodeName) }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: pa(function () { return [0] }), last: pa(function (a, b) { return [b - 1] }), eq: pa(function (a, b, c) { return [c < 0 ? c + b : c] }), even: pa(function (a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }), odd: pa(function (a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }), lt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }), gt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b); function ra() { } ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0) }; function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d } function ta(a, b, c) { var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++; return b.first ? function (b, c, e) { while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e); return !1 } : function (b, c, i) { var j, k, l, m = [w, h]; if (i) { while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0 } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1 } } function ua(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c } function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g } function xa(a, b, c, d, e, f) { return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ya(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) { return a === b }, h, !0), l = ta(function (a) { return I(b, a) > -1 }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++) if (c = d.relative[a[i].type]) m = [ta(ua(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break; return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a)) } m.push(c) } return ua(m) } function za(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length; for (k && (j = g === n || g || k) ; s !== z && null != (l = x[s]) ; s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++]) if (q(l, g || n, h)) { i.push(l); break } k && (w = y) } c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i)); u = wa(u) } G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ia(f) : f } return h = ga.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, za(e, d)), f.selector = a } return f }, i = ga.select = function (a, b, c, e) { var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a); if (c = c || [], 1 === n.length) { if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c; m && (b = b.parentNode), a = a.slice(i.shift().value.length) } f = V.needsContext.test(a) ? 0 : i.length; while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } } } return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function (a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function (a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function (a) { return null == a.getAttribute("disabled") }) || ka(J, function (a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga }(a); r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape; var y = function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && r(a).is(c)) break; d.push(a) } return d }, z = function (a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }, A = r.expr.match.needsContext; function B(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() } var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D = /^.[^:#\[\.,]*$/; function E(a, b, c) { return r.isFunction(b) ? r.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function (a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function (a) { return i.call(b, a) > -1 !== c }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) } r.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) { return 1 === a.nodeType })) }, r.fn.extend({ find: function (a) { var b, c, d = this.length, e = this; if ("string" != typeof a) return this.pushStack(r(a).filter(function () { for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0 })); for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c); return d > 1 ? r.uniqueSort(c) : c }, filter: function (a) { return this.pushStack(E(this, a || [], !1)) }, not: function (a) { return this.pushStack(E(this, a || [], !0)) }, is: function (a) { return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length } }); var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function (a, b, c) { var e, f; if (!a) return this; if (c = c || F, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this) }; H.prototype = r.fn, F = r(d); var I = /^(?:parents|prev(?:Until|All))/, J = { children: !0, contents: !0, next: !0, prev: !0 }; r.fn.extend({ has: function (a) { var b = r(a, this), c = b.length; return this.filter(function () { for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0 }) }, closest: function (a, b) { var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a); if (!A.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f) }, index: function (a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function K(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } r.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function (a) { return y(a, "parentNode") }, parentsUntil: function (a, b, c) { return y(a, "parentNode", c) }, next: function (a) { return K(a, "nextSibling") }, prev: function (a) { return K(a, "previousSibling") }, nextAll: function (a) { return y(a, "nextSibling") }, prevAll: function (a) { return y(a, "previousSibling") }, nextUntil: function (a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return y(a, "previousSibling", c) }, siblings: function (a) { return z((a.parentNode || {}).firstChild, a) }, children: function (a) { return z(a.firstChild) }, contents: function (a) { return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes)) } }, function (a, b) { r.fn[a] = function (c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e) } }); var L = /[^\x20\t\r\n\f]+/g; function M(a) { var b = {}; return r.each(a.match(L) || [], function (a, c) { b[c] = !0 }), b } r.Callbacks = function (a) { a = "string" == typeof a ? M(a) : r.extend({}, a); var b, c, d, e, f = [], g = [], h = -1, i = function () { for (e = e || a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) } a.memory || (c = !1), b = !1, e && (f = c ? [] : "") }, j = { add: function () { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function (b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function () { return r.each(arguments, function (a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function (a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function () { return f && (f = []), this }, disable: function () { return e = g = [], f = c = "", this }, disabled: function () { return !f }, lock: function () { return e = g = [], c || b || (f = c = ""), this }, locked: function () { return !!e }, fireWith: function (a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function () { return j.fireWith(this, arguments), this }, fired: function () { return !!d } }; return j }; function N(a) { return a } function O(a) { throw a } function P(a, b, c, d) { var e; try { a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d)) } catch (a) { c.apply(void 0, [a]) } } r.extend({ Deferred: function (b) { var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d = "pending", e = { state: function () { return d }, always: function () { return f.done(arguments).fail(arguments), this }, "catch": function (a) { return e.then(null, a) }, pipe: function () { var a = arguments; return r.Deferred(function (b) { r.each(c, function (c, d) { var e = r.isFunction(a[d[4]]) && a[d[4]]; f[d[1]](function () { var a = e && e.apply(this, arguments); a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments) }) }), a = null }).promise() }, then: function (b, d, e) { var f = 0; function g(b, c, d, e) { return function () { var h = this, i = arguments, j = function () { var a, j; if (!(b < f)) { if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution"); j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i)) } }, k = e ? j : function () { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i)) } }; b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k)) } } return r.Deferred(function (a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O)) }).promise() }, promise: function (a) { return null != a ? r.extend(a, e) : e } }, f = {}; return r.each(c, function (a, b) { var g = b[2], h = b[5]; e[b[1]] = g.add, h && g.add(function () { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith }), e.promise(f), b && b.call(f, f), f }, when: function (a) { var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function (a) { return function (c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } }; if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then(); while (c--) P(e[c], h(c), g.reject); return g.promise() } }); var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; r.Deferred.exceptionHook = function (b, c) { a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function (b) { a.setTimeout(function () { throw b }) }; var R = r.Deferred(); r.fn.ready = function (a) { return R.then(a)["catch"](function (a) { r.readyException(a) }), this }, r.extend({ isReady: !1, readyWait: 1, ready: function (a) { (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r])) } }), r.ready.then = R.then; function S()
    {
        d.removeEventListener("DOMContentLoaded", S),
        a.removeEventListener("load", S), r.ready()
    } "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S)); var T = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === r.type(c)) { e = !0; for (h in c) T(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(r(a), c) })), b)) for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, U = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; function V() { this.expando = r.expando + V.uid++ } V.uid = 1, V.prototype = { cache: function (a) { var b = a[this.expando]; return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function (a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b) e[r.camelCase(d)] = b[d]; return e }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] }, access: function (a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function (a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length; while (c--) delete d[b[c]] } (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function (a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) } }; var W = new V, X = new V, Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g; function $(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a) } function _(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = $(c) } catch (e) { } X.set(a, b, c) } else c = void 0; return c } r.extend({ hasData: function (a) { return X.hasData(a) || W.hasData(a) }, data: function (a, b, c) { return X.access(a, b, c) }, removeData: function (a, b) { X.remove(a, b) }, _data: function (a, b, c) { return W.access(a, b, c) }, _removeData: function (a, b) { W.remove(a, b) } }), r.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d]))); W.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { X.set(this, a) }) : T(this, function (b) { var c; if (f && void 0 === b) { if (c = X.get(f, a), void 0 !== c) return c; if (c = _(f, a), void 0 !== c) return c } else this.each(function () { X.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function (a) { return this.each(function () { X.remove(this, a) }) } }), r.extend({ queue: function (a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [] }, dequeue: function (a, b) { b = b || "fx"; var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function () { r.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function () { W.remove(a, [b + "queue", c]) }) }) } }), r.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = r.queue(this, a, b); r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { r.dequeue(this, a) }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, b) { var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"), ca = ["Top", "Right", "Bottom", "Left"], da = function (a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") }, ea = function (a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; function fa(a, b, c, d) { var e, f = 1, g = 20, h = d ? function () { return d.cur() } : function () { return r.css(a, b, "") }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1; do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e } var ga = {}; function ha(a) { var b, c = a.ownerDocument, d = a.nodeName, e = ga[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e) } function ia(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a } r.fn.extend({ show: function () { return ia(this, !0) }, hide: function () { return ia(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { da(this) ? r(this).show() : r(this).hide() }) } }); var ja = /^(?:checkbox|radio)$/i, ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la = /^$|\/(?:java|ecma)script/i, ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td; function na(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c } function oa(a, b) { for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval")) } var pa = /<|&#?\w+;/; function qa(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f); else if (pa.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild; r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f)); l.textContent = "", n = 0; while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) { k = 0; while (f = g[k++]) la.test(f.type || "") && c.push(f) } return l } !function () { var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input"); c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }(); var ra = d.documentElement, sa = /^key/, ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ua = /^([^.]*)(?:\.(.+)|)/; function va() { return !0 } function wa() { return !1 } function xa() { try { return d.activeElement } catch (a) { } } function ya(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ya(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa; else if (!e) return a; return 1 === f && (g = e, e = function (a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () { r.event.add(this, b, e, d, c) }) } r.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(L) || [""], j = b.length; while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a); if (q && (i = q.events)) { b = (b || "").match(L) || [""], j = b.length; while (j--) if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]) } else for (n in i) r.event.remove(a, n + b[j], c, d, !0); r.isEmptyObject(i) && W.remove(a, "handle events") } }, dispatch: function (a) { var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (W.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {}; for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c]; if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result } }, handlers: function (a, b) { var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target; if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) { for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d); f.length && h.push({ elem: j, handlers: f }) } return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h }, addProp: function (a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () { if (this.originalEvent) return b(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[a] }, set: function (b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function (a) { return a[r.expando] ? a : new r.Event(a) }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== xa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === xa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1 }, _default: function (a) { return B(a.target, "a") } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, r.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function (a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) { var b = a.button; return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { r.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), r.fn.extend({ on: function (a, b, c, d) { return ya(this, a, b, c, d) }, one: function (a, b, c, d) { return ya(this, a, b, c, d, 1) }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () { r.event.remove(this, a, c, b) }) } }); var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/, Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Ea(a, b) { return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a } function Fa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function Ga(a) { var b = Ca.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Ha(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]) } X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i)) } } function Ia(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } function Ja(a, b, c, d) { b = g.apply([], b); var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q); if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) { var f = a.eq(e); s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d) }); if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) { for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l); if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k)) } return a } function Ka(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]) ; f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d)); return a } r.extend({ htmlPrefilter: function (a) { return a.replace(za, "<$1></$2>") }, clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a); if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]); if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]); else Ha(a, h); return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h }, cleanData: function (a) { for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]) ; f++) if (U(c)) { if (b = c[W.expando]) { if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle); c[W.expando] = void 0 } c[X.expando] && (c[X.expando] = void 0) } } }), r.fn.extend({ detach: function (a) { return Ka(this, a, !0) }, remove: function (a) { return Ka(this, a) }, text: function (a) { return T(this, function (a) { return void 0 === a ? r.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return Ja(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ea(this, a); b.appendChild(a) } }) }, prepend: function () { return Ja(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ea(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function () { return Ja(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return Ja(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () { for (var a, b = 0; null != (a = this[b]) ; b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function () { return r.clone(this, a, b) }) }, html: function (a) { return T(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) { a = r.htmlPrefilter(a); try { for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () { var a = []; return Ja(this, arguments, function (b) { var c = this.parentNode; r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this)) }, a) } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { r.fn[a] = function (a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } }); var La = /^margin/, Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"), Na = function (b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }; !function () { function b() { if (i) { i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h); var b = a.getComputedStyle(i); c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null } } var c, e, f, g, h = d.createElement("div"), i = d.createElement("div"); i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function () { return b(), c }, boxSizingReliable: function () { return b(), e }, pixelMarginRight: function () { return b(), f }, reliableMarginLeft: function () { return b(), g } })) }(); function Oa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g } function Pa(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = { position: "absolute", visibility: "hidden", display: "block" }, Ta = { letterSpacing: "0", fontWeight: "400" }, Ua = ["Webkit", "Moz", "ms"], Va = d.createElement("div").style; function Wa(a) { if (a in Va) return a; var b = a[0].toUpperCase() + a.slice(1), c = Ua.length; while (c--) if (a = Ua[c] + b, a in Va) return a } function Xa(a) { var b = r.cssProps[a]; return b || (b = r.cssProps[a] = Wa(a) || a), b } function Ya(a, b, c) { var d = ba.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b } function Za(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e))); return g } function $a(a, b, c) { var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r.css(a, "boxSizing", !1, e); return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px") } r.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = Oa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = r.camelCase(b), i = Ra.test(b), j = a.style; return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0) } }, css: function (a, b, c, d) { var e, f, g, h = r.camelCase(b), i = Ra.test(b); return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), r.each(["height", "width"], function (a, b) { r.cssHooks[b] = { get: function (a, c, d) { if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () { return $a(a, b, d) }) }, set: function (a, c, d) { var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f); return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g) } } }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) { if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) { r.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, La.test(a) || (r.cssHooks[a + b].set = Ya) }), r.fn.extend({ css: function (a, b) { return T(this, function (a, b, c) { var d, e, f = {}, g = 0; if (Array.isArray(b)) { for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f } return void 0 !== c ? r.style(a, b, c) : r.css(a, b) }, a, b, arguments.length > 1) } }); function _a(a, b, c, d, e) { return new _a.prototype.init(a, b, c, d, e) } r.Tween = _a, _a.prototype = { constructor: _a, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function () { var a = _a.propHooks[this.prop]; return a && a.get ? a.get(this) : _a.propHooks._default.get(this) }, run: function (a) { var b, c = _a.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function (a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function (a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {}; var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/; function eb() { bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick()) } function fb() { return a.setTimeout(function () { ab = void 0 }), ab = r.now() } function gb(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e } function hb(a, b, c) { for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d } function ib(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && da(a), q = W.get(a, "fxshow"); c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () { g.unqueued || h() }), g.unqueued++, m.always(function () { m.always(function () { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) })); for (d in b) if (e = b[d], cb.test(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue; p = !0 } n[d] = q && q[d] || r.style(a, d) } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () { p || ia([a]), W.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) } } function jb(a, b) { var c, d, e, f, g; for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function kb(a, b, c) { var d, e, f = 0, g = kb.prefilters.length, h = r.Deferred().always(function () { delete i.elem }), i = function () { if (e) return !1; for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (jb(k, j.opts.specialEasing) ; f < g; f++) if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d; return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j } r.Animation = r.extend(kb, { tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return fa(c.elem, a, ba.exec(b), c), c }] }, tweener: function (a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b) }, prefilters: [ib], prefilter: function (a, b) { b ? kb.prefilters.unshift(a) : kb.prefilters.push(a) } }), r.speed = function (a, b, c) { var d = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () { r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue) }, d }, r.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function () { var b = kb(this, r.extend({}, a), f); (e || W.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = W.get(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); !b && c || r.dequeue(this, a) }) }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = W.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0; for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), r.each(["toggle", "show", "hide"], function (a, b) { var c = r.fn[b]; r.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e) } }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { r.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function () { var a, b = 0, c = r.timers; for (ab = r.now() ; b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || r.fx.stop(), ab = void 0 }, r.fx.timer = function (a) { r.timers.push(a), r.fx.start() }, r.fx.interval = 13, r.fx.start = function () { bb || (bb = !0, eb()) }, r.fx.stop = function () { bb = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) { return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) { var e = a.setTimeout(c, b); d.stop = function () { a.clearTimeout(e) } }) }, function () { var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option")); a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value }(); var lb, mb = r.expr.attrHandle; r.fn.extend({ attr: function (a, b) { return T(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { r.removeAttr(this, a) }) } }), r.extend({
        attr: function (a, b, c)
        {
            var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
            null == d ? void 0 : d))
        }, attrHooks: { type: { set: function (a, b) { if (!o.radioValue && "radio" === b && B(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function (a, b) { var c, d = 0, e = b && b.match(L); if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c) }
    }), lb = { set: function (a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = mb[b] || r.find.attr; mb[b] = function (a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e } }); var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i; r.fn.extend({ prop: function (a, b) { return T(this, r.prop, a, b, arguments.length > 1) }, removeProp: function (a) { return this.each(function () { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { r.propFix[this.toLowerCase()] = this }); function pb(a) { var b = a.match(L) || []; return b.join(" ") } function qb(a) { return a.getAttribute && a.getAttribute("class") || "" } r.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function (b) { r(this).addClass(a.call(this, b, qb(this))) }); if ("string" == typeof a && a) { b = a.match(L) || []; while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " "); h = pb(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function (b) { r(this).removeClass(a.call(this, b, qb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(L) || []; while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") { g = 0; while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " "); h = pb(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) { r(this).toggleClass(a.call(this, c, qb(this), b), b) }) : this.each(function () { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(L) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || "")) }) }, hasClass: function (a) { var b, c, d = 0; b = " " + a + " "; while (c = this[d++]) if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0; return !1 } }); var rb = /\r/g; r.fn.extend({ val: function (a) { var b, c, d, e = this[0]; { if (arguments.length) return d = r.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c) } } }), r.extend({ valHooks: { option: { get: function (a) { var b = r.find.attr(a, "value"); return null != b ? b : pb(r.text(a)) } }, select: { get: function (a) { var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length; for (d = f < 0 ? i : g ? f : 0; d < i; d++) if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) { if (b = r(c).val(), g) return b; h.push(b) } return h }, set: function (a, b) { var c, d, e = a.options, f = r.makeArray(b), g = e.length; while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), r.each(["radio", "checkbox"], function () { r.valHooks[this] = { set: function (a, b) { if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var sb = /^(?:focusinfocus|focusoutblur)$/; r.extend(r.event, { trigger: function (b, c, e, f) { var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) { if (!f && !n.noBubble && !r.isWindow(e)) { for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode) ; h; h = h.parentNode) o.push(h), i = h; i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a) } g = 0; while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result } }, simulate: function (a, b, c) { var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 }); r.event.trigger(d, null, b) } }), r.fn.extend({ trigger: function (a, b) { return this.each(function () { r.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) { r.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { r.event.simulate(b, a.target, r.event.fix(a)) }; r.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = W.access(d, b); e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1) }, teardown: function () { var d = this.ownerDocument || this, e = W.access(d, b) - 1; e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b)) } } }); var tb = a.location, ub = r.now(), vb = /\?/; r.parseXML = function (b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c }; var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i; function Ab(a, b, c, d) { var e; if (Array.isArray(b)) r.each(b, function (b, e) { c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d) } r.param = function (a, b) { var c, d = [], e = function (a, b) { var c = r.isFunction(b) ? b() : b; d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c) }; if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () { e(this.name, this.value) }); else for (c in a) Ab(c, a[c], b, e); return d.join("&") }, r.fn.extend({ serialize: function () { return r.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function () { var a = this.type; return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a)) }).map(function (a, b) { var c = r(this).val(); return null == c ? null : Array.isArray(c) ? r.map(c, function (a) { return { name: b.name, value: a.replace(xb, "\r\n") } }) : { name: b.name, value: c.replace(xb, "\r\n") } }).get() } }); var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {}, Jb = {}, Kb = "*/".concat("*"), Lb = d.createElement("a"); Lb.href = tb.href; function Mb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(L) || []; if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Nb(a, b, c, d) { var e = {}, f = a === Jb; function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Ob(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a } function Pb(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } if (f) return f !== i[0] && i.unshift(f), c[f] } function Qb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a) }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function (b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = { readyState: 0, getResponseHeader: function (a) { var b; if (k) { if (!h) { h = {}; while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2] } b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return k ? g : null }, setRequestHeader: function (a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this }, overrideMimeType: function (a) { return null == k && (o.mimeType = a), this }, statusCode: function (a) { var b; if (a) if (k) y.always(a[y.status]); else for (b in a) u[b] = [u[b], a[b]]; return this }, abort: function (a) { var b = a || x; return e && e.abort(b), A(0, b), this } }; if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } } if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y; l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers) y.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort(); if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) { if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y; o.async && o.timeout > 0 && (i = a.setTimeout(function () { y.abort("timeout") }, o.timeout)); try { k = !1, e.send(v, A) } catch (z) { if (k) throw z; A(-1, z) } } else A(-1, "No Transport"); function A(b, c, d, h) { var j, m, n, v, w, x = c; k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop"))) } return y }, getJSON: function (a, b, c) { return r.get(a, b, c, "json") }, getScript: function (a, b) { return r.get(a, void 0, b, "script") } }), r.each(["get", "post"], function (a, b) { r[b] = function (a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function (a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({ wrapAll: function (a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this }, wrapInner: function (a) { return r.isFunction(a) ? this.each(function (b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = r(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = r.isFunction(a); return this.each(function (c) { r(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function (a) { return this.parent(a).not("body").each(function () { r(this).replaceWith(this.childNodes) }), this } }), r.expr.pseudos.hidden = function (a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function () { try { return new a.XMLHttpRequest } catch (b) { } }; var Rb = { 0: 200, 1223: 204 }, Sb = r.ajaxSettings.xhr(); o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) { var c, d; if (o.cors || Sb && !b.crossDomain) return { send: function (e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g]; b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]); c = function (a) { return function () { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () { 4 === h.readyState && a.setTimeout(function () { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function () { c && c() } } }), r.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c; return { send: function (e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function () { c && c() } } } }); var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/; r.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Tb.pop() || r.expando + "_" + ub++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments }, d.always(function () { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function () { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function (a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function (a, b, c) { var d, e, f, g = this, h = a.indexOf(" "); return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function (a, b) { g.each(function () { c.apply(this, f || [a.responseText, b, a]) }) }), this }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { r.fn[b] = function (a) { return this.on(b, a) } }), r.expr.pseudos.animated = function (a) { return r.grep(r.timers, function (b) { return a === b.elem }).length }, r.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, r.fn.extend({ offset: function (a) { if (arguments.length) return void 0 === a ? this : this.each(function (b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 } }, position: function () { if (this[0]) { var a, b, c = this[0], d = { top: 0, left: 0 }; return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || ra }) } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = "pageYOffset" === b; r.fn[a] = function (d) { return T(this, function (a, d, e) { var f; return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), r.each(["top", "left"], function (a, b) { r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) { if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function (a, b) { r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { r.fn[d] = function (e, f) { var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border"); return T(this, function (b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g) } }) }), r.fn.extend({ bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.holdReady = function (a) { a ? r.readyWait++ : r.ready(!0) }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function () { return r }); var Vb = a.jQuery, Wb = a.$; return r.noConflict = function (b) { return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r }, b || (a.jQuery = a.$ = r), r
});

/*! jQuery UI - v1.12.1 - 2017-07-24
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) })(function (t)
{
    function e(t) { for (var e = t.css("visibility") ; "inherit" === e;) t = t.parent(), e = t.css("visibility"); return "hidden" !== e } function i(t) { for (var e, i; t.length && t[0] !== document;) { if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i; t = t.parent() } return 0 } function s() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) } function n(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.on("mouseout", i, function () { t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, o) } function o() { t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover")) } function a(e, i) { t.extend(e, i); for (var s in i) null == i[s] && (e[s] = i[s]); return e } function r(t) { return function () { var e = this.element.val(); t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change") } } t.ui = t.ui || {}, t.ui.version = "1.12.1"; var h = 0, l = Array.prototype.slice; t.cleanData = function (e) { return function (i) { var s, n, o; for (o = 0; null != (n = i[o]) ; o++) try { s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove") } catch (a) { } e(i) } }(t.cleanData), t.widget = function (e, i, s) { var n, o, a, r = {}, h = e.split(".")[0]; e = e.split(".")[1]; var l = h + "-" + e; return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function (e) { return !!t.data(e, l) }, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function (t, e) { return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e) }, t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) { return t.isFunction(s) ? (r[e] = function () { function t() { return i.prototype[e].apply(this, arguments) } function n(t) { return i.prototype[e].apply(this, t) } return function () { var e, i = this._super, o = this._superApply; return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e } }(), void 0) : (r[e] = s, void 0) }), o.prototype = t.widget.extend(a, { widgetEventPrefix: n ? a.widgetEventPrefix || e : e }, r, { constructor: o, namespace: h, widgetName: e, widgetFullName: l }), n ? (t.each(n._childConstructors, function (e, i) { var s = i.prototype; t.widget(s.namespace + "." + s.widgetName, o, i._proto) }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o }, t.widget.extend = function (e) { for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++) for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s); return e }, t.widget.bridge = function (e, i) { var s = i.prototype.widgetFullName || e; t.fn[e] = function (n) { var o = "string" == typeof n, a = l.call(arguments, 1), r = this; return o ? this.length || "instance" !== n ? this.each(function () { var i, o = t.data(this, s); return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'") }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () { var e = t.data(this, s); e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this)) })), r } }, t.Widget = function () { }, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function (e, i) { i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function (t) { t.target === i && this.destroy() } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: function () { return {} }, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function () { var e = this; this._destroy(), t.each(this.classesElementLookup, function (t, i) { e._removeClass(i, t) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace) }, _destroy: t.noop, widget: function () { return this.element }, option: function (e, i) { var s, n, o, a = e; if (0 === arguments.length) return t.widget.extend({}, this.options); if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) { for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]]; if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e]; n[e] = i } else { if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e]; a[e] = i } return this._setOptions(a), this }, _setOptions: function (t) { var e; for (e in t) this._setOption(e, t[e]); return this }, _setOption: function (t, e) { return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this }, _setOptionClasses: function (e) { var i, s, n; for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 }))) }, _setOptionDisabled: function (t) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) }, enable: function () { return this._setOptions({ disabled: !1 }) }, disable: function () { return this._setOptions({ disabled: !0 }) }, _classes: function (e) { function i(i, o) { var a, r; for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]) } var s = [], n = this; return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ") }, _untrackClassesElement: function (e) { var i = this; t.each(i.classesElementLookup, function (s, n) { -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get())) }) }, _removeClass: function (t, e, i) { return this._toggleClass(t, e, i, !1) }, _addClass: function (t, e, i) { return this._toggleClass(t, e, i, !0) }, _toggleClass: function (t, e, i, s) { s = "boolean" == typeof s ? s : i; var n = "string" == typeof t || null === t, o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s }; return o.element.toggleClass(this._classes(o), s), this }, _on: function (e, i, s) { var n, o = this; "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) { function r() { return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0 } "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++); var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + o.eventNamespace, c = h[2]; c ? n.on(l, c, r) : i.on(l, r) }) }, _off: function (e, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get()) }, _delay: function (t, e) { function i() { return ("string" == typeof t ? s[t] : t).apply(s, arguments) } var s = this; return setTimeout(i, e || 0) }, _hoverable: function (e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function (e) { this._addClass(t(e.currentTarget), null, "ui-state-hover") }, mouseleave: function (e) { this._removeClass(t(e.currentTarget), null, "ui-state-hover") } }) }, _focusable: function (e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function (e) { this._addClass(t(e.currentTarget), null, "ui-state-focus") }, focusout: function (e) { this._removeClass(t(e.currentTarget), null, "ui-state-focus") } }) }, _trigger: function (e, i, s) { var n, o, a = this.options[e]; if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) n in i || (i[n] = o[n]); return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented()) } }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) { t.Widget.prototype["_" + e] = function (s, n, o) { "string" == typeof n && (n = { effect: n }); var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e; n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) { t(this)[e](), o && o.call(s[0]), i() }) } }), t.widget, function () { function e(t, e, i) { return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)] } function i(e, i) { return parseInt(t.css(e, i), 10) || 0 } function s(e) { var i = e[0]; return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() } } var n, o = Math.max, a = Math.abs, r = /left|center|right/, h = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, u = /%$/, d = t.fn.position; t.position = { scrollbarWidth: function () { if (void 0 !== n) return n; var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0]; return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i }, getScrollInfo: function (e) { var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth, o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight; return { width: o ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 } }, getWithinInfo: function (e) { var i = t(e || window), s = t.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType, o = !s && !n; return { element: i, isWindow: s, isDocument: n, offset: o ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() } } }, t.fn.position = function (n) { if (!n || !n.of) return d.apply(this, arguments); n = t.extend({}, n); var u, p, f, g, m, _, v = t(n.of), b = t.position.getWithinInfo(n.within), y = t.position.getScrollInfo(b), w = (n.collision || "flip").split(" "), k = {}; return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () { var t, e, i = (n[this] || "").split(" "); 1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]] }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () { var s, r, h = t(this), l = h.outerWidth(), c = h.outerHeight(), d = i(this, "marginLeft"), _ = i(this, "marginTop"), x = l + d + i(this, "marginRight") + y.width, C = c + _ + i(this, "marginBottom") + y.height, D = t.extend({}, m), T = e(k.my, h.outerWidth(), h.outerHeight()); "right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += T[0], D.top += T[1], s = { marginLeft: d, marginTop: _ }, t.each(["left", "top"], function (e, i) { t.ui.position[w[e]] && t.ui.position[w[e]][i](D, { targetWidth: p, targetHeight: f, elemWidth: l, elemHeight: c, collisionPosition: s, collisionWidth: x, collisionHeight: C, offset: [u[0] + T[0], u[1] + T[1]], my: n.my, at: n.at, within: b, elem: h }) }), n.using && (r = function (t) { var e = g.left - D.left, i = e + p - l, s = g.top - D.top, r = s + f - c, u = { target: { element: v, left: g.left, top: g.top, width: p, height: f }, element: { element: h, left: D.left, top: D.top, width: l, height: c }, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle" }; l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u) }), h.offset(t.extend(D, { using: r })) }) }, t.ui.position = { fit: { left: function (t, e) { var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, h = n - r, l = r + e.collisionWidth - a - n; e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left) }, top: function (t, e) { var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, h = n - r, l = r + e.collisionHeight - a - n; e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top) } }, flip: { left: function (t, e) { var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width, h = n.isWindow ? n.scrollLeft : n.offset.left, l = t.left - e.collisionPosition.marginLeft, c = l - h, u = l + e.collisionWidth - r - h, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0]; 0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f)) }, top: function (t, e) { var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height, h = n.isWindow ? n.scrollTop : n.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - h, u = l + e.collisionHeight - r - h, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1]; 0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g)) } }, flipfit: { left: function () { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function () { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } } } }(), t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function (e) { return function (i) { return !!t.data(i, e) } }) : function (e, i, s) { return !!t.data(e, s[3]) } }), t.fn.extend({ disableSelection: function () { var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function () { return this.on(t + ".ui-disableSelection", function (t) { t.preventDefault() }) } }(), enableSelection: function () { return this.off(".ui-disableSelection") } }), t.ui.focusable = function (i, s) { var n, o, a, r, h, l = i.nodeName.toLowerCase(); return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i))) }, t.extend(t.expr[":"], { focusable: function (e) { return t.ui.focusable(e, null != t.attr(e, "tabindex")) } }), t.ui.focusable, t.fn.form = function () { return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form) }, t.ui.formResetMixin = { _formResetHandler: function () { var e = t(this); setTimeout(function () { var i = e.data("ui-form-reset-instances"); t.each(i, function () { this.refresh() }) }) }, _bindFormResetHandler: function () { if (this.form = this.element.form(), this.form.length) { var t = this.form.data("ui-form-reset-instances") || []; t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t) } }, _unbindFormResetHandler: function () { if (this.form.length) { var e = this.form.data("ui-form-reset-instances"); e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset") } } }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) { function s(e, i, s, o) { return t.each(n, function () { i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i } var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), a = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight }; t.fn["inner" + i] = function (e) { return void 0 === e ? a["inner" + i].call(this) : this.each(function () { t(this).css(o, s(this, e) + "px") }) }, t.fn["outer" + i] = function (e, n) { return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () { t(this).css(o, s(this, e, !0, n) + "px") }) } }), t.fn.addBack = function (t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = function () { var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g; return function (e) { return e.replace(t, "\\$1") } }(), t.fn.labels = function () { var e, i, s, n, o; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n)) }, t.fn.scrollParent = function (e) { var i = this.css("position"), s = "absolute" === i, n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function () { var e = t(this); return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")) }).eq(0); return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document) }, t.extend(t.expr[":"], { tabbable: function (e) { var i = t.attr(e, "tabindex"), s = null != i; return (!s || i >= 0) && t.ui.focusable(e, s) } }), t.fn.extend({ uniqueId: function () { var t = 0; return function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++t) }) } }(), removeUniqueId: function () { return this.each(function () { /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id") }) } }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()); var c = !1; t(document).on("mouseup", function () { c = !1 }), t.widget("ui.mouse", { version: "1.12.1", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function () { var e = this; this.element.on("mousedown." + this.widgetName, function (t) { return e._mouseDown(t) }).on("click." + this.widgetName, function (i) { return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1 }, _mouseDestroy: function () { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function (e) { if (!c) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e; var i = this, s = 1 === e.which, n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1; return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) { return i._mouseMove(t) }, this._mouseUpDelegate = function (t) { return i._mouseUp(t) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), c = !0, !0)) : !0 } }, _mouseMove: function (e) { if (this._mouseMoved) { if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e); if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e) } return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) }, _mouseUp: function (e) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, c = !1, e.preventDefault() }, _mouseDistanceMet: function (t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return !0 } }), t.ui.plugin = { add: function (e, i, s) { var n, o = t.ui[e].prototype; for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]) }, call: function (t, e, i, s) { var n, o = t.plugins[e]; if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i) } }, t.ui.safeActiveElement = function (t) { var e; try { e = t.activeElement } catch (i) { e = t.body } return e || (e = t.body), e.nodeName || (e = t.body), e }, t.ui.safeBlur = function (e) { e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur") }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null }, _create: function () { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() }, _setOption: function (t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function () { return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0) }, _mouseCapture: function (e) { var i = this.options; return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1) }, _blockFrames: function (e) { this.iframeBlocks = this.document.find(e).map(function () { var e = t(this); return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _blurActiveElement: function (e) { var i = t.ui.safeActiveElement(this.document[0]), s = t(e.target); s.closest(i).length || t.ui.safeBlur(i) }, _mouseStart: function (e) { var i = this.options; return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () { return "fixed" === t(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) }, _refreshOffsets: function (t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } }, _mouseDrag: function (e, i) { if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) { var s = this._uiHash(); if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1; this.position = s.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1 }, _mouseStop: function (e) { var i = this, s = !1; return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { i._trigger("stop", e) !== !1 && i._clear() }) : this._trigger("stop", e) !== !1 && this._clear(), !1 }, _mouseUp: function (e) { return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e) }, cancel: function () { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this }, _getHandle: function (e) { return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0 }, _setHandleClassName: function () { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") }, _removeHandleClassName: function () { this._removeClass(this.handleElement, "ui-draggable-handle") }, _createHelper: function (e) { var i = this.options, s = t.isFunction(i.helper), n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element; return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n }, _setPositionRelative: function () { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") }, _adjustOffsetFromHelper: function (e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) }, _isRootNode: function (t) { return /(html|body)/i.test(t.tagName) || t === this.document[0] }, _getParentOffset: function () { var e = this.offsetParent.offset(), i = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) } }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function ()
        {
            var e, i, s, n = this.options, o = this.document[0]; return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
        }, _convertPositionTo: function (t, e) { e || (e = this.position); var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]); return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i } }, _generatePosition: function (t, e) { var i, s, n, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), h = t.pageX, l = t.pageY; return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) } }, _clear: function () { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() }, _trigger: function (e, i, s) { return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s) }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    }), t.ui.plugin.add("draggable", "connectToSortable", { start: function (e, i, s) { var n = t.extend({}, i, { item: s.element }); s.sortables = [], t(s.options.connectToSortable).each(function () { var i = t(this).sortable("instance"); i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n)) }) }, stop: function (e, i, s) { var n = t.extend({}, i, { item: s.element }); s.cancelHelperRemoval = !1, t.each(s.sortables, function () { var t = this; t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n)) }) }, drag: function (e, i, s) { t.each(s.sortables, function () { var n = !1, o = this; o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () { return i.helper[0] }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () { this.refreshPositions() }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () { this.refreshPositions() })) }) } }), t.ui.plugin.add("draggable", "cursor", { start: function (e, i, s) { var n = t("body"), o = s.options; n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor) }, stop: function (e, i, s) { var n = s.options; n._cursor && t("body").css("cursor", n._cursor) } }), t.ui.plugin.add("draggable", "opacity", { start: function (e, i, s) { var n = t(i.helper), o = s.options; n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity) }, stop: function (e, i, s) { var n = s.options; n._opacity && t(i.helper).css("opacity", n._opacity) } }), t.ui.plugin.add("draggable", "scroll", { start: function (t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) }, drag: function (e, i, s) { var n = s.options, o = !1, a = s.scrollParentNotHidden[0], r = s.document[0]; a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e) } }), t.ui.plugin.add("draggable", "snap", { start: function (e, i, s) { var n = s.options; s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () { var e = t(this), i = e.offset(); this !== s.element[0] && s.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left }) }) }, drag: function (e, i, s) { var n, o, a, r, h, l, c, u, d, p, f = s.options, g = f.snapTolerance, m = i.offset.left, _ = m + s.helperProportions.width, v = i.offset.top, b = v + s.helperProportions.height; for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", { top: c - s.helperProportions.height, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", { top: c, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = n || o || a || r || p) } }), t.ui.plugin.add("draggable", "stack", { start: function (e, i, s) { var n, o = s.options, a = t.makeArray(t(o.stack)).sort(function (e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) }); a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) { t(this).css("zIndex", n + e) }), this.css("zIndex", n + a.length)) } }), t.ui.plugin.add("draggable", "zIndex", { start: function (e, i, s) { var n = t(i.helper), o = s.options; n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex) }, stop: function (e, i, s) { var n = s.options; n._zIndex && t(i.helper).css("zIndex", n._zIndex) } }), t.ui.draggable, t.widget("ui.droppable", { version: "1.12.1", widgetEventPrefix: "drop", options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function () { var e, i = this.options, s = i.accept; this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) { return t.is(s) }, this.proportions = function () { return arguments.length ? (e = arguments[0], void 0) : e ? e : e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable") }, _addToManager: function (e) { t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this) }, _splice: function (t) { for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1) }, _destroy: function () { var e = t.ui.ddmanager.droppables[this.options.scope]; this._splice(e) }, _setOption: function (e, i) { if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) { return t.is(i) }; else if ("scope" === e) { var s = t.ui.ddmanager.droppables[this.options.scope]; this._splice(s), this._addToManager(i) } this._super(e, i) }, _activate: function (e) { var i = t.ui.ddmanager.current; this._addActiveClass(), i && this._trigger("activate", e, this.ui(i)) }, _deactivate: function (e) { var i = t.ui.ddmanager.current; this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i)) }, _over: function (e) { var i = t.ui.ddmanager.current; i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i))) }, _out: function (e) { var i = t.ui.ddmanager.current; i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i))) }, _drop: function (e, i) { var s = i || t.ui.ddmanager.current, n = !1; return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () { var i = t(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && u(s, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e) ? (n = !0, !1) : void 0 }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1 }, ui: function (t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } }, _addHoverClass: function () { this._addClass("ui-droppable-hover") }, _removeHoverClass: function () { this._removeClass("ui-droppable-hover") }, _addActiveClass: function () { this._addClass("ui-droppable-active") }, _removeActiveClass: function () { this._removeClass("ui-droppable-active") } }); var u = t.ui.intersect = function () { function t(t, e, i) { return t >= e && e + i > t } return function (e, i, s, n) { if (!i.offset) return !1; var o = (e.positionAbs || e.position.absolute).left + e.margins.left, a = (e.positionAbs || e.position.absolute).top + e.margins.top, r = o + e.helperProportions.width, h = a + e.helperProportions.height, l = i.offset.left, c = i.offset.top, u = l + i.proportions().width, d = c + i.proportions().height; switch (s) { case "fit": return o >= l && u >= r && a >= c && d >= h; case "intersect": return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2; case "pointer": return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width); case "touch": return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u); default: return !1 } } }(); t.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function (e, i) { var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack(); t: for (s = 0; o.length > s; s++) if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) { for (n = 0; r.length > n; n++) if (r[n] === o[s].element[0]) { o[s].proportions().height = 0; continue t } o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({ width: o[s].element[0].offsetWidth, height: o[s].element[0].offsetHeight })) } }, drop: function (e, i) { var s = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () { this.options && (!this.options.disabled && this.visible && u(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s }, dragStart: function (e, i) { e.element.parentsUntil("body").on("scroll.droppable", function () { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) }, drag: function (e, i) { e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () { if (!this.options.disabled && !this.greedyChild && this.visible) { var s, n, o, a = u(e, this, this.options.tolerance, i), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null; r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () { return t(this).droppable("instance").options.scope === n }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i))) } }) }, dragStop: function (e, i) { e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) } }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function () { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function () { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function () { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function () { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "resize", options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function (t) { return parseFloat(t) || 0 }, _isNumber: function (t) { return !isNaN(parseFloat(t)) }, _hasScroll: function (e, i) { if ("hidden" === t(e).css("overflow")) return !1; var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1; return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n) }, _create: function () { var e, i = this.options, s = this; this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () { i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show()) }).on("mouseleave", function () { i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide()) }), this._mouseInit() }, _destroy: function () { this._mouseDestroy(); var e, i = function (e) { t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this }, _setOption: function (t, e) { switch (this._super(t, e), t) { case "handles": this._removeHandles(), this._setupHandles(); break; default: } }, _setupHandles: function () { var e, i, s, n, o, a = this.options, r = this; if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({ zIndex: a.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o); this._renderAxis = function (e) { var i, s, n, o; e = e || this.element; for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: r._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]) }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () { r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se") }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide")) }, _removeHandles: function () { this._handles.remove() }, _mouseCapture: function (e) { var i, s, n = !1; for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0); return !this.options.disabled && n }, _mouseStart: function (e) { var i, s, n, o = this.options, a = this.element; return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: a.width(), height: a.height() }, this.originalSize = this._helper ? { width: a.outerWidth(), height: a.outerHeight() } : { width: a.width(), height: a.height() }, this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0 }, _mouseDrag: function (e) { var i, s, n = this.originalMousePosition, o = this.axis, a = e.pageX - n.left || 0, r = e.pageY - n.top || 0, h = this._change[o]; return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1 }, _mouseStop: function (e) { this.resizing = !1; var i, s, n, o, a, r, h, l = this.options, c = this; return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = { width: c.helper.width() - o, height: c.helper.height() - n }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, { top: h, left: r })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1 }, _updatePrevProperties: function () { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function () { var t = {}; return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t }, _updateVirtualBoundaries: function (t) { var e, i, s, n, o, a = this.options; o = { minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0, maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0, minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0, maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o }, _updateCache: function (t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) }, _updateRatio: function (t) { var e = this.position, i = this.size, s = this.axis; return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t }, _respectSize: function (t) { var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width, n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height, o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width, a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height, r = this.originalPosition.left + this.originalSize.width, h = this.originalPosition.top + this.originalSize.height, l = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i); return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t }, _getPaddingPlusBorderDimensions: function (t) { for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } }, _proportionallyResize: function () { if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function () { var e = this.element, i = this.options; this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: { e: function (t, e) { return { width: this.originalSize.width + e } }, w: function (t, e) { var i = this.originalSize, s = this.originalPosition; return { left: s.left + e, width: i.width - e } }, n: function (t, e, i) { var s = this.originalSize, n = this.originalPosition; return { top: n.top + i, height: s.height - i } }, s: function (t, e, i) { return { height: this.originalSize.height + i } }, se: function (e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s])) }, sw: function (e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s])) }, ne: function (e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s])) }, nw: function (e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s])) } }, _propagate: function (e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } } }), t.ui.plugin.add("resizable", "animate", { stop: function (e) { var i = t(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements, o = n.length && /textarea/i.test(n[0].nodeName), a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = o ? 0 : i.sizeDiff.width, h = { width: i.size.width - r, height: i.size.height - a }, l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null, c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null; i.element.animate(t.extend(h, c && l ? { top: c, left: l } : {}), { duration: s.animateDuration, easing: s.animateEasing, step: function () { var s = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) }; n && n.length && t(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", e) } }) } }), t.ui.plugin.add("resizable", "containment", { start: function () { var e, i, s, n, o, a, r, h = t(this).resizable("instance"), l = h.options, c = h.element, u = l.containment, d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u; d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) { i[t] = h._num(e.css("padding" + s)) }), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = { element: d, left: s.left, top: s.top, width: a, height: r })) }, resize: function (e) { var i, s, n, o, a = t(this).resizable("instance"), r = a.options, h = a.containerOffset, l = a.position, c = a._aspectRatio || e.shiftKey, u = { top: 0, left: 0 }, d = a.containerElement, p = !0; d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height) }, stop: function () { var e = t(this).resizable("instance"), i = e.options, s = e.containerOffset, n = e.containerPosition, o = e.containerElement, a = t(e.helper), r = a.offset(), h = a.outerWidth() - e.sizeDiff.width, l = a.outerHeight() - e.sizeDiff.height; e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: r.left - n.left - s.left, width: h, height: l }) } }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () { var e = t(this).resizable("instance"), i = e.options; t(i.alsoResize).each(function () { var e = t(this); e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) }) }) }, resize: function (e, i)
        {
            var s = t(this).resizable("instance"), n = s.options, o = s.originalSize, a = s.originalPosition, r = { height: s.size.height - o.height || 0, width: s.size.width - o.width || 0, top: s.position.top - a.top || 0, left: s.position.left - a.left || 0 };
            t(n.alsoResize).each(function () { var e = t(this), s = t(this).data("ui-resizable-alsoresize"), n = {}, o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; t.each(o, function (t, e) { var i = (s[e] || 0) + (r[e] || 0); i && i >= 0 && (n[e] = i || null) }), e.css(n) })
        }, stop: function () { t(this).removeData("ui-resizable-alsoresize") }
    }), t.ui.plugin.add("resizable", "ghost", { start: function () { var e = t(this).resizable("instance"), i = e.size; e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper) }, resize: function () { var e = t(this).resizable("instance"); e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width }) }, stop: function () { var e = t(this).resizable("instance"); e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0)) } }), t.ui.plugin.add("resizable", "grid", { resize: function () { var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize, a = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, l = h[0] || 1, c = h[1] || 1, u = Math.round((n.width - o.width) / l) * l, d = Math.round((n.height - o.height) / c) * c, p = o.width + u, f = o.height + d, g = s.maxWidth && p > s.maxWidth, m = s.maxHeight && f > s.maxHeight, _ = s.minWidth && s.minWidth > p, v = s.minHeight && s.minHeight > f; s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p)) } }), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, { version: "1.12.1", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function () { var e = this; this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () { e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () { var i = t(this), s = i.offset(), n = { left: s.left - e.elementPos.left, top: s.top - e.elementPos.top }; t.data(this, "selectable-item", { element: this, $element: i, left: n.left, top: n.top, right: n.left + i.outerWidth(), bottom: n.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") }) }) }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper") }, _destroy: function () { this.selectees.removeData("selectable-item"), this._mouseDestroy() }, _mouseStart: function (e) { var i = this, s = this.options; this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () { var s = t.data(this, "selectable-item"); s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, { unselecting: s.element })) }), t(e.target).parents().addBack().each(function () { var s, n = t.data(this, "selectable-item"); return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, { selecting: n.element }) : i._trigger("unselecting", e, { unselecting: n.element }), !1) : void 0 })) }, _mouseDrag: function (e) { if (this.dragged = !0, !this.options.disabled) { var i, s = this, n = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, h = e.pageY; return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({ left: o, top: a, width: r - o, height: h - a }), this.selectees.each(function () { var i = t.data(this, "selectable-item"), l = !1, c = {}; i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, { unselecting: i.element }))))) }), !1 } }, _mouseStop: function (e) { var i = this; return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () { var s = t.data(this, "selectable-item"); i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, { unselected: s.element }) }), t(".ui-selecting", this.element[0]).each(function () { var s = t.data(this, "selectable-item"); i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, { selected: s.element }) }), this._trigger("stop", e), this.helper.remove(), !1 } }), t.widget("ui.sortable", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function (t, e, i) { return t >= e && e + i > t }, _isFloating: function (t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) }, _create: function () { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 }, _setOption: function (t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() }, _setHandleClassName: function () { var e = this; this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () { e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") }) }, _destroy: function () { this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item"); return this }, _mouseCapture: function (e, i) { var s = null, n = !1, o = this; return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () { return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0 }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () { this === e.target && (n = !0) }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1) }, _mouseStart: function (e, i, s) { var n, o, a = this.options; if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this)); return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0 }, _mouseDrag: function (e) { var i, s, n, o, a = this.options, r = !1; for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) { if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break; this._rearrange(e, s), this._trigger("change", e, this._uiHash()); break } return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1 }, _mouseStop: function (e, i) { if (e) { if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) { var s = this, n = this.placeholder.offset(), o = this.options.axis, a = {}; o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () { s._clear(e) }) } else this._clear(e, i); return !1 } }, cancel: function () { if (this.dragging) { this._mouseUp(new t.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this }, serialize: function (e) { var i = this._getItemsAsjQuery(e && e.connected), s = []; return e = e || {}, t(i).each(function () { var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/); i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2])) }), !s.length && e.key && s.push(e.key + "="), s.join("&") }, toArray: function (e) { var i = this._getItemsAsjQuery(e && e.connected), s = []; return e = e || {}, i.each(function () { s.push(t(e.item || this).attr(e.attribute || "id") || "") }), s }, _intersectsWith: function (t) { var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + c > o && a > e + c, p = u && d; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2 }, _intersectsWithPointer: function (t) { var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), o = s && n; return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1 }, _intersectsWithSides: function (t) { var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection(); return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e) }, _getDragVerticalDirection: function () { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") }, _getDragHorizontalDirection: function () { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") }, refresh: function (t) { return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this }, _connectWith: function () { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith }, _getItemsAsjQuery: function (e) { function i() { r.push(this) } var s, n, o, a, r = [], h = [], l = this._connectWith(); if (l && e) for (s = l.length - 1; s >= 0; s--) for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]); for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i); return t(r) }, _removeCurrentsFromItems: function () { var e = this.currentItem.find(":data(" + this.widgetName + "-item)"); this.items = t.grep(this.items, function (t) { for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1; return !0 }) }, _refreshItems: function (e) { this.items = [], this.containers = [this]; var i, s, n, o, a, r, h, l, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]], d = this._connectWith(); if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o)); for (i = u.length - 1; i >= 0; i--) for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({ item: h, instance: a, width: 0, height: 0, left: 0, top: 0 }) }, refreshPositions: function (e) { this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); var i, s, n, o; for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); return this }, _createPlaceholder: function (e) { e = e || this; var i, s = e.options; s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = { element: function () { var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]); return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n }, update: function (t, n) { (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10))) } }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder) }, _createTrPlaceholder: function (e, i) { var s = this; e.children().each(function () { t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i) }) }, _contactContainers: function (e) { var i, s, n, o, a, r, h, l, c, u, d = null, p = null; for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) { if (d && t.contains(this.containers[i].element[0], d.element[0])) continue; d = this.containers[i], p = i } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0); if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1); else { for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down")); if (!o && !this.options.dropOnEmpty) return; if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0; o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1 } }, _createHelper: function (e) { var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem; return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s }, _adjustOffsetFromHelper: function (e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) }, _getParentOffset: function () { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } }, _getRelativeOffset: function () { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function () { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () { var e, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) }, _convertPositionTo: function (e, i) { i || (i = this.position); var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(n[0].tagName); return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s } }, _generatePosition: function (e) { var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName); return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) } }, _rearrange: function (t, e, i, s) { i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1; var n = this.counter; this._delay(function () { n === this.counter && this.refreshPositions(!s) }) }, _clear: function (t, e) { function i(t, e, i) { return function (s) { i._trigger(t, s, e._uiHash(e)) } } this.reverting = !1; var s, n = []; if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) { for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = ""); this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper") } else this.currentItem.show(); for (this.fromOutside && !e && n.push(function (t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (n.push(function (t) { this._trigger("remove", t, this._uiHash()) }), n.push(function (t) { return function (e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function (t) { return function (e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0); if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) { for (s = 0; n.length > s; s++) n[s].call(this, t); this._trigger("stop", t, this._uiHash()) } return this.fromOutside = !1, !this.cancelHelperRemoval }, _trigger: function () { t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() }, _uiHash: function (e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } } }), t.widget("ui.accordion", {
        version: "1.12.1", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function () { var e = this.options; this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh() }, _getCreateEventData: function () { return { header: this.active, panel: this.active.length ? this.active.next() : t() } }, _createIcons: function ()
        {
            var e, i, s = this.options.icons; s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        }, _destroyIcons: function () { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() }, _destroy: function () { var t; this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "") }, _setOption: function (t, e) { return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0) }, _setOptionDisabled: function (t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t) }, _keydown: function (e) { if (!e.altKey && !e.ctrlKey) { var i = t.ui.keyCode, s = this.headers.length, n = this.headers.index(e.target), o = !1; switch (e.keyCode) { case i.RIGHT: case i.DOWN: o = this.headers[(n + 1) % s]; break; case i.LEFT: case i.UP: o = this.headers[(n - 1 + s) % s]; break; case i.SPACE: case i.ENTER: this._eventHandler(e); break; case i.HOME: o = this.headers[0]; break; case i.END: o = this.headers[s - 1] } o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault()) } }, _panelKeyDown: function (e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus") }, refresh: function () { var e = this.options; this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh() }, _processPanels: function () { var t = this.headers, e = this.panels; this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels))) }, _refresh: function () { var e, i = this.options, s = i.heightStyle, n = this.element.parent(); this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () { var e = t(this), i = e.uniqueId().attr("id"), s = e.next(), n = s.uniqueId().attr("id"); e.attr("aria-controls", n), s.attr("aria-labelledby", i) }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function () { var i = t(this), s = i.css("position"); "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0)) }), this.headers.each(function () { e -= t(this).outerHeight(!0) }), this.headers.next().each(function () { t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () { var i = t(this).is(":visible"); i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide() }).height(e)) }, _activate: function (e) { var i = this._findActive(e)[0]; i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop })) }, _findActive: function (e) { return "number" == typeof e ? this.headers.eq(e) : t() }, _setupEvents: function (e) { var i = { keydown: "_keydown" }; e && t.each(e.split(" "), function (t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers) }, _eventHandler: function (e) { var i, s, n = this.options, o = this.active, a = t(e.currentTarget), r = a[0] === o[0], h = r && n.collapsible, l = h ? t() : a.next(), c = o.next(), u = { oldHeader: o, oldPanel: c, newHeader: h ? t() : a, newPanel: l }; e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active"))) }, _toggle: function (e) { var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel; this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function () { return 0 === parseInt(t(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _animate: function (t, e, i) { var s, n, o, a = this, r = 0, h = t.css("box-sizing"), l = t.length && (!e.length || t.index() < e.index()), c = this.options.animate || {}, u = l && c.down || c, d = function () { a._toggleComplete(i) }; return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: n, step: function (t, e) { e.now = Math.round(t) } }), t.hide().animate(this.showProps, { duration: o, easing: n, complete: d, step: function (t, i) { i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0) } }), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d) }, _toggleComplete: function (t) { var e = t.oldPanel, i = e.prev(); this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t) }
    }), t.widget("ui.menu", { version: "1.12.1", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function () { this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({ "mousedown .ui-menu-item": function (t) { t.preventDefault() }, "click .ui-menu-item": function (e) { var i = t(e.target), s = t(t.ui.safeActiveElement(this.document[0])); !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) }, "mouseenter .ui-menu-item": function (e) { if (!this.previousFilter) { var i = t(e.target).closest(".ui-menu-item"), s = t(e.currentTarget); i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s)) } }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) { var i = this.active || this.element.find(this.options.items).eq(0); e || this.focus(t, i) }, blur: function (e) { this._delay(function () { var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])); i && this.collapseAll(e) }) }, keydown: "_keydown" }), this.refresh(), this._on(this.document, { click: function (t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } }) }, _destroy: function () { var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"), i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup"); this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () { var e = t(this); e.data("ui-menu-submenu-caret") && e.remove() }) }, _keydown: function (e) { var i, s, n, o, a = !0; switch (e.keyCode) { case t.ui.keyCode.PAGE_UP: this.previousPage(e); break; case t.ui.keyCode.PAGE_DOWN: this.nextPage(e); break; case t.ui.keyCode.HOME: this._move("first", "first", e); break; case t.ui.keyCode.END: this._move("last", "last", e); break; case t.ui.keyCode.UP: this.previous(e); break; case t.ui.keyCode.DOWN: this.next(e); break; case t.ui.keyCode.LEFT: this.collapse(e); break; case t.ui.keyCode.RIGHT: this.active && !this.active.is(".ui-state-disabled") && this.expand(e); break; case t.ui.keyCode.ENTER: case t.ui.keyCode.SPACE: this._activate(e); break; case t.ui.keyCode.ESCAPE: this.collapse(e); break; default: a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () { delete this.previousFilter }, 1e3)) : delete this.previousFilter } a && e.preventDefault() }, _activate: function (t) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) }, refresh: function () { var e, i, s, n, o, a = this, r = this.options.icons.submenu, h = this.element.find(this.options.menus); this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () { var e = t(this), i = e.prev(), s = t("<span>").data("ui-menu-submenu-caret", !0); a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id")) }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () { var e = t(this); a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content") }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur() }, _itemRole: function () { return { menu: "menuitem", listbox: "option" }[this.options.role] }, _setOption: function (t, e) { if ("icons" === t) { var i = this.element.find(".ui-menu-icon"); this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu) } this._super(t, e) }, _setOptionDisabled: function (t) { this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t) }, focus: function (t, e) { var i, s, n; this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () { this._close() }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e }) }, _scrollIntoView: function (e) { var i, s, n, o, a, r; this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r)) }, blur: function (t, e) { e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null) }, _startOpening: function (t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () { this._close(), this._open(t) }, this.delay)) }, _open: function (e) { var i = t.extend({ of: this.active }, this.options.position); clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i) }, collapseAll: function (e, i) { clearTimeout(this.timer), this.timer = this._delay(function () { var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu")); s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s }, this.delay) }, _close: function (t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") }, _closeOnDocumentClick: function (e) { return !t(e.target).closest(".ui-menu").length }, _isDivider: function (t) { return !/[^\-\u2014\u2013\s]/.test(t.text()) }, collapse: function (t) { var e = this.active && this.active.parent().closest(".ui-menu-item", this.element); e && e.length && (this._close(), this.focus(t, e)) }, expand: function (t) { var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first(); e && e.length && (this._open(e.parent()), this._delay(function () { this.focus(t, e) })) }, next: function (t) { this._move("next", "first", t) }, previous: function (t) { this._move("prev", "last", t) }, isFirstItem: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, _move: function (t, e, i) { var s; this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s) }, nextPage: function (e) { var i, s, n; return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () { return i = t(this), 0 > i.offset().top - s - n }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0) }, previousPage: function (e) { var i, s, n; return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () { return i = t(this), i.offset().top - s + n > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0) }, _hasScroll: function () { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function (e) { this.active = this.active || t(e.target).closest(".ui-menu-item"); var i = { item: this.active }; this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i) }, _filterMenuItems: function (e) { var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i"); return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () { return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text())) }) } }), t.widget("ui.autocomplete", { version: "1.12.1", defaultElement: "<input>", options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function () { var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n; this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, { keydown: function (n) { if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0; e = !1, s = !1, i = !1; var o = t.ui.keyCode; switch (n.keyCode) { case o.PAGE_UP: e = !0, this._move("previousPage", n); break; case o.PAGE_DOWN: e = !0, this._move("nextPage", n); break; case o.UP: e = !0, this._keyEvent("previous", n); break; case o.DOWN: e = !0, this._keyEvent("next", n); break; case o.ENTER: this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n)); break; case o.TAB: this.menu.active && this.menu.select(n); break; case o.ESCAPE: this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault()); break; default: i = !0, this._searchTimeout(n) } }, keypress: function (s) { if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0; if (!i) { var n = t.ui.keyCode; switch (s.keyCode) { case n.PAGE_UP: this._move("previousPage", s); break; case n.PAGE_DOWN: this._move("nextPage", s); break; case n.UP: this._keyEvent("previous", s); break; case n.DOWN: this._keyEvent("next", s) } } }, input: function (t) { return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0) }, focus: function () { this.selectedItem = null, this.previous = this._value() }, blur: function (t) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0) } }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, { mousedown: function (e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function () { delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) }, menufocus: function (e, i) { var s, n; return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () { t(e.target).trigger(e.originalEvent) }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: n }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0) }, menuselect: function (e, i) { var s = i.item.data("ui-autocomplete-item"), n = this.previous; this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () { this.previous = n, this.selectedItem = s })), !1 !== this._trigger("select", e, { item: s }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s } }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _destroy: function () { clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() }, _setOption: function (t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() }, _isEventTargetInWidget: function (e) { var i = this.menu.element[0]; return e.target === this.element[0] || e.target === i || t.contains(i, e.target) }, _closeOnClickOutside: function (t) { this._isEventTargetInWidget(t) || this.close() }, _appendTo: function () { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e }, _initSource: function () { var e, i, s = this; t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) { s(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) { s.xhr && s.xhr.abort(), s.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function (t) { n(t) }, error: function () { n([]) } }) }) : this.source = this.options.source }, _searchTimeout: function (t) { clearTimeout(this.searching), this.searching = this._delay(function () { var e = this.term === this._value(), i = this.menu.element.is(":visible"), s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey; (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t)) }, this.options.delay) }, search: function (t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0 }, _search: function (t) { this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) }, _response: function () { var e = ++this.requestIndex; return t.proxy(function (t) { e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading") }, this) }, __response: function (t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() }, close: function (t) { this.cancelSearch = !0, this._close(t) }, _close: function (t) { this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) }, _change: function (t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) }, _normalize: function (e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) { return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label }) }) }, _suggest: function (e) { var i = this.menu.element.empty(); this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" }) }, _resizeMenu: function () { var t = this.menu.element; t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function (e, i) { var s = this; t.each(i, function (t, i) { s._renderItemData(e, i) }) }, _renderItemData: function (t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) }, _renderItem: function (e, i) { return t("<li>").append(t("<div>").text(i.label)).appendTo(e) }, _move: function (t, e) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0) }, widget: function () { return this.menu.element }, _value: function () { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function (t, e) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault()) }, _isContentEditable: function (t) { if (!t.length) return !1; var e = t.prop("contentEditable"); return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e } }), t.extend(t.ui.autocomplete, { escapeRegex: function (t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function (e, i) { var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function (t) { return s.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function (t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function (e) { var i; this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion)) } }), t.ui.autocomplete; var d = /ui-corner-([a-z]){2,6}/g; t.widget("ui.controlgroup", { version: "1.12.1", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function () { this._enhance() }, _enhance: function () { this.element.attr("role", "toolbar"), this.refresh() }, _destroy: function () { this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() }, _initWidgets: function () { var e = this, i = []; t.each(this.options.items, function (s, n) { var o, a = {}; return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function () { var e = t(this); e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>") }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : { classes: {} }, e.element.find(n).each(function () { var n = t(this), o = n[s]("instance"), r = t.widget.extend({}, a); if ("button" !== s || !n.parent(".ui-spinner").length) { o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r); var h = n[s]("widget"); t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0]) } })), void 0) : void 0 }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item") }, _callChildMethod: function (e) { this.childWidgets.each(function () { var i = t(this), s = i.data("ui-controlgroup-data"); s && s[e] && s[e]() }) }, _updateCornerClass: function (t, e) { var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all", s = this._buildSimpleOptions(e, "label").classes.label; this._removeClass(t, null, i), this._addClass(t, null, s) }, _buildSimpleOptions: function (t, e) { var i = "vertical" === this.options.direction, s = { classes: {} }; return s.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], s }, _spinnerOptions: function (t) { var e = this._buildSimpleOptions(t, "ui-spinner"); return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e }, _buttonOptions: function (t) { return this._buildSimpleOptions(t, "ui-button") }, _checkboxradioOptions: function (t) { return this._buildSimpleOptions(t, "ui-checkboxradio-label") }, _selectmenuOptions: function (t) { var e = "vertical" === this.options.direction; return { width: e ? "auto" : !1, classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] } }, _resolveClassesValues: function (e, i) { var s = {}; return t.each(e, function (n) { var o = i.options.classes[n] || ""; o = t.trim(o.replace(d, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ") }), s }, _setOption: function (t, e) { return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0) }, refresh: function () { var e, i = this; this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) { var n = e[s]().data("ui-controlgroup-data"); if (n && i["_" + n.widgetName + "Options"]) { var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s); o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o) } else i._updateCornerClass(e[s](), s) }), this._callChildMethod("refresh")) } }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1", options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function () { var e, i, s = this, n = this._super() || {}; return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () { s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n }, _create: function () { var t = this.element[0].checked; this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function () { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function () { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } }) }, _readType: function () { var e = this.element[0].nodeName.toLowerCase(); this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type) }, _enhance: function () { this._updateIcon(this.element[0].checked) }, widget: function () { return this.label }, _getRadioGroup: function () { var e, i = this.element[0].name, s = "input[name='" + t.ui.escapeSelector(i) + "']"; return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function () { return 0 === t(this).form().length }), e.not(this.element)) : t([]) }, _toggleClasses: function () { var e = this.element[0].checked; this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () { var e = t(this).checkboxradio("instance"); e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active") }) }, _destroy: function () { this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove()) }, _setOption: function (t, e) { return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0 }, _updateIcon: function (e)
        {
            var i = "ui-icon ui-icon-background "; this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        }, _updateLabel: function () { var t = this.label.contents().not(this.element[0]); this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label) }, refresh: function () { var t = this.element[0].checked, e = this.element[0].disabled; this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e }) }
    }]), t.ui.checkboxradio, t.widget("ui.button", { version: "1.12.1", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 }, _getCreateOptions: function () { var t, e = this._super() || {}; return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e }, _create: function () { !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function (e) { e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) }, _enhance: function () { this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) }, _updateTooltip: function () { this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label) }, _updateIcon: function (e, i) { var s = "iconPosition" !== e, n = s ? this.options.iconPosition : i, o = "top" === n || "bottom" === n; this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n)) }, _destroy: function () { this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title") }, _attachIconSpace: function (t) { this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace) }, _attachIcon: function (t) { this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon) }, _setOptions: function (t) { var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel, i = void 0 === t.icon ? this.options.icon : t.icon; e || i || (t.showLabel = !0), this._super(t) }, _setOption: function (t, e) { "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur()) }, refresh: function () { var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled"); t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip() } }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function () { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super() }, _setOption: function (t, e) { return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0) } }), t.fn.button = function (e) { return function () { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(t.fn.button), t.fn.buttonset = function () { return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) }), t.ui.button, t.extend(t.ui, { datepicker: { version: "1.12.1" } }); var p; t.extend(s.prototype, {
        markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (t) { return a(this._defaults, t || {}), this }, _attachDatepicker: function (e, i) { var s, n, o; s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o) }, _newInst: function (e, i) { var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: s, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } }, _connectDatepicker: function (e, i) { var s = t(e); i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e)) }, _attachments: function (e, i) { var s, n, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL"); i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 })) }, _autoSize: function (t) { if (this._get(t, "autoSize") && !t.inline) { var e, i, s, n, o = new Date(2009, 11, 20), a = this._get(t, "dateFormat"); a.match(/[DM]/) && (e = function (t) { for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n); return s }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length) } }, _inlineDatepicker: function (e, i) { var s = t(e); s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block")) }, _dialogDatepicker: function (e, i, s, n, o) { var r, h, l, c, u, d = this._dialogInst; return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this }, _destroyDatepicker: function (e) { var i, s = t(e), n = t.data(e, "datepicker"); s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), p === n && (p = null)) }, _enableDatepicker: function (e) { var i, s, n = t(e), o = t.data(e, "datepicker"); n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) { return t === e ? null : t })) }, _disableDatepicker: function (e) { var i, s, n = t(e), o = t.data(e, "datepicker"); n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e) }, _isDisabledDatepicker: function (t) { if (!t) return !1; for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0; return !1 }, _getInst: function (e) { try { return t.data(e, "datepicker") } catch (i) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function (e, i, s) { var n, o, r, h, l = this._getInst(e); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0) }, _changeDatepicker: function (t, e, i) { this._optionDatepicker(t, e, i) }, _refreshDatepicker: function (t) { var e = this._getInst(t); e && this._updateDatepicker(e) }, _setDateDatepicker: function (t, e) { var i = this._getInst(t); i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i)) }, _getDateDatepicker: function (t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null }, _doKeyDown: function (e) { var i, s, n, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl"); if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) { case 9: t.datepicker._hideDatepicker(), a = !1; break; case 13: return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1; case 27: t.datepicker._hideDatepicker(); break; case 33: t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M"); break; case 34: t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M"); break; case 35: (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey; break; case 36: (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey; break; case 37: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M"); break; case 38: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey; break; case 39: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M"); break; case 40: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey; break; default: a = !1 } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1; a && (e.preventDefault(), e.stopPropagation()) }, _doKeyPress: function (e) { var i, s, n = t.datepicker._getInst(e.target); return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0 }, _doKeyUp: function (e) { var i, s = t.datepicker._getInst(e.target); if (s.input.val() !== s.lastVal) try { i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s)) } catch (n) { } return !0 }, _showDatepicker: function (e) { if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) { var s, n, o, r, h, l, c; s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () { return r |= "fixed" === t(this).css("position"), !r }), h = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: h.left + "px", top: h.top + "px" }), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s)) } }, _updateDatepicker: function (e) { this.maxRows = 4, p = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e); var i, s = this._getNumberOfMonths(e), n = s[1], a = 17, r = e.dpDiv.find("." + this._dayOverClass + " a"); r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0)) }, _shouldFocusInput: function (t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") }, _checkOffset: function (e, i, s) { var n = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() : 0, r = e.input ? e.input.outerHeight() : 0, h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop()); return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i }, _findPos: function (e) { for (var i, s = this._getInst(e), n = this._get(s, "isRTL") ; e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)) ;) e = e[n ? "previousSibling" : "nextSibling"]; return i = t(e).offset(), [i.left, i.top] }, _hideDatepicker: function (e) { var i, s, n, o, a = this._curInst; !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function () { t.datepicker._tidyDialog(a) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) }, _tidyDialog: function (t) { t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") }, _checkExternalClick: function (e) { if (t.datepicker._curInst) { var i = t(e.target), s = t.datepicker._getInst(i[0]); (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker() } }, _adjustDate: function (e, i, s) { var n = t(e), o = this._getInst(n[0]); this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o)) }, _gotoToday: function (e) { var i, s = t(e), n = this._getInst(s[0]); this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s) }, _selectMonthYear: function (e, i, s) { var n = t(e), o = this._getInst(n[0]); o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n) }, _selectDay: function (e, i, s, n) { var o, a = t(e); t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))) }, _clearDate: function (e) { var i = t(e); this._selectDate(i, "") }, _selectDate: function (e, i) { var s, n = t(e), o = this._getInst(n[0]); i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null) }, _updateAlternate: function (e) { var i, s, n, o = this._get(e, "altField"); o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n)) }, noWeekends: function (t) { var e = t.getDay(); return [e > 0 && 6 > e, ""] }, iso8601Week: function (t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 }, parseDate: function (e, i, s) { if (null == e || null == i) throw "Invalid arguments"; if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null; var n, o, a, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10), u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, d = (s ? s.dayNames : null) || this._defaults.dayNames, p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, m = -1, _ = -1, v = -1, b = !1, y = function (t) { var i = e.length > n + 1 && e.charAt(n + 1) === t; return i && n++, i }, w = function (t) { var e = y(t), s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, n = "y" === t ? s : 1, o = RegExp("^\\d{" + n + "," + s + "}"), a = i.substring(h).match(o); if (!a) throw "Missing number at position " + h; return h += a[0].length, parseInt(a[0], 10) }, k = function (e, s, n) { var o = -1, a = t.map(y(e) ? n : s, function (t, e) { return [[e, t]] }).sort(function (t, e) { return -(t[1].length - e[1].length) }); if (t.each(a, function (t, e) { var s = e[1]; return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0 }), -1 !== o) return o + 1; throw "Unknown name at position " + h }, x = function () { if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h; h++ }; for (n = 0; e.length > n; n++) if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1; else switch (e.charAt(n)) { case "d": _ = w("d"); break; case "D": k("D", u, d); break; case "o": v = w("o"); break; case "m": m = w("m"); break; case "M": m = k("M", p, f); break; case "y": g = w("y"); break; case "@": r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate(); break; case "!": r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate(); break; case "'": y("'") ? x() : b = !0; break; default: x() } if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a; if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1) for (m = 1, _ = v; ;) { if (o = this._getDaysInMonth(g, m - 1), o >= _) break; m++, _ -= o } if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date"; return r }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (t, e, i) { if (!e) return ""; var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (e) { var i = t.length > s + 1 && t.charAt(s + 1) === e; return i && s++, i }, l = function (t, e, i) { var s = "" + e; if (h(t)) for (; i > s.length;) s = "0" + s; return s }, c = function (t, e, i, s) { return h(t) ? s[e] : i[e] }, u = "", d = !1; if (e) for (s = 0; t.length > s; s++) if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) { case "d": u += l("d", e.getDate(), 2); break; case "D": u += c("D", e.getDay(), n, o); break; case "o": u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3); break; case "m": u += l("m", e.getMonth() + 1, 2); break; case "M": u += c("M", e.getMonth(), a, r); break; case "y": u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100; break; case "@": u += e.getTime(); break; case "!": u += 1e4 * e.getTime() + this._ticksTo1970; break; case "'": h("'") ? u += "'" : d = !0; break; default: u += t.charAt(s) } return u }, _possibleChars: function (t) { var e, i = "", s = !1, n = function (i) { var s = t.length > e + 1 && t.charAt(e + 1) === i; return s && e++, s }; for (e = 0; t.length > e; e++) if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) { case "d": case "m": case "y": case "@": i += "0123456789"; break; case "D": case "M": return null; case "'": n("'") ? i += "'" : s = !0; break; default: i += t.charAt(e) } return i }, _get: function (t, e) { return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e] }, _setDateFromField: function (t, e) { if (t.input.val() !== t.lastVal) { var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null, n = this._getDefaultDate(t), o = n, a = this._getFormatConfig(t); try { o = this.parseDate(i, s, a) || n } catch (r) { s = e ? "" : s } t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t) } }, _getDefaultDate: function (t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) }, _determineDate: function (e, i, s) { var n = function (t) { var e = new Date; return e.setDate(e.getDate() + t), e }, o = function (i) { try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (s) { } for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i) ; l;) { switch (l[2] || "d") { case "d": case "D": r += parseInt(l[1], 10); break; case "w": case "W": r += 7 * parseInt(l[1], 10); break; case "m": case "M": a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a)); break; case "y": case "Y": o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a)) } l = h.exec(i) } return new Date(o, a, r) }, a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime()); return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a) }, _daylightSavingAdjust: function (t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null }, _setDate: function (t, e, i) { var s = !e, n = t.selectedMonth, o = t.selectedYear, a = this._restrictMinMax(t, this._determineDate(t, e, new Date)); t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t)) }, _getDate: function (t) { var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return e }, _attachHandlers: function (e) { var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\"); e.dpDiv.find("[data-handler]").map(function () { var e = { prev: function () { t.datepicker._adjustDate(s, -i, "M") }, next: function () { t.datepicker._adjustDate(s, +i, "M") }, hide: function () { t.datepicker._hideDatepicker() }, today: function () { t.datepicker._gotoToday(s) }, selectDay: function () { return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function () { return t.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function () { return t.datepicker._selectMonthYear(s, this, "Y"), !1 } }; t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]) }) }, _generateHTML: function (t)
        {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, T, I, M, P, S, N, H, A, z, O, E, W, F, L, R = new Date, Y = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), B = this._get(t, "isRTL"), j = this._get(t, "showButtonPanel"), q = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), X = this._get(t, "stepMonths"), $ = 1 !== U[0] || 1 !== U[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), J = this._getMinMaxDate(t, "min"), Q = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V, te = t.drawYear; if (0 > Z && (Z += 12, te--), Q) for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--); for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : Y, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++)
            {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++)
                {
                    if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", I = "", $)
                    {
                        if (I += "<div class='ui-datepicker-group", U[1] > 1) switch (C)
                        {
                            case 0: I += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                                break; case U[1] - 1: I += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right"); break; default: I += " ui-datepicker-group-middle", T = ""
                        } I += "'>"
                    } for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === k ? B ? o : s : "") + (/all|right/.test(T) && 0 === k ? B ? s : o : "") + this._generateMonthYearHeader(t, Z, te, J, Q, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) P = (w + c) % 7, M += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[P] + "'>" + p[P] + "</span></th>"; for (I += M + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), N = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, H = Math.ceil((N + S) / 7), A = $ ? this.maxRows > H ? this.maxRows : H : H, this.maxRows = A, z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)), O = 0; A > O; O++) { for (I += "<tr>", E = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", w = 0; 7 > w; w++) W = m ? m.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], F = z.getMonth() !== Z, L = F && !v || !W[0] || J && J > z || Q && z > Q, E += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + W[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z); I += E + "</tr>" } Z++, Z > 11 && (Z = 0, te++), I += "</tbody></table>" + ($ ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += I
                } y += x
            } return y += l, t._keyEvent = !1, y
        }, _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) { var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"), _ = this._get(t, "changeYear"), v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = ""; if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else { for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>"); y += "</select>" } if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else { for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>"; t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null } return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>" }, _adjustInstDate: function (t, e, i) { var s = t.selectedYear + ("Y" === i ? e : 0), n = t.selectedMonth + ("M" === i ? e : 0), o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0), a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o))); t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t) }, _restrictMinMax: function (t, e) { var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e; return s && n > s ? s : n }, _notifyChange: function (t) { var e = this._get(t, "onChangeMonthYear"); e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]) }, _getNumberOfMonths: function (t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e }, _getMinMaxDate: function (t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) }, _getDaysInMonth: function (t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() }, _getFirstDayOfMonth: function (t, e) { return new Date(t, e, 1).getDay() }, _canAdjustMonth: function (t, e, i, s) { var n = this._getNumberOfMonths(t), o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1)); return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o) }, _isInRange: function (t, e) { var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, h = this._get(t, "yearRange"); return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear()) }, _getFormatConfig: function (t) { var e = this._get(t, "shortYearCutoff"); return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } }, _formatDate: function (t, e, i, s) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t)) }
    }), t.fn.datepicker = function (e) { if (!this.length) return this; t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) }, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.widget("ui.dialog", { version: "1.12.1", options: { appendTo: "body", autoOpen: !0, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: !0, closeText: "Close", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function (e) { var i = t(this).css(e).offset().top; 0 > i && t(this).css("top", e.top - i) } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function () { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() }, _init: function () { this.options.autoOpen && this.open() }, _appendTo: function () { var e = this.options.appendTo; return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0) }, _destroy: function () { var t, e = this.originalPosition; this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element) }, widget: function () { return this.uiDialog }, disable: t.noop, enable: t.noop, close: function (e) { var i = this; this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () { i._trigger("close", e) })) }, isOpen: function () { return this._isOpen }, moveToTop: function () { this._moveToTop() }, _moveToTop: function (e, i) { var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function () { return +t(this).css("z-index") }).get(), o = Math.max.apply(null, n); return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s }, open: function () { var e = this; return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () { e._focusTabbable(), e._trigger("focus") }), this._makeFocusTarget(), this._trigger("open"), void 0) }, _focusTabbable: function () { var t = this._focusedElement; t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus") }, _keepFocus: function (e) { function i() { var e = t.ui.safeActiveElement(this.document[0]), i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e); i || this._focusTabbable() } e.preventDefault(), i.call(this), this._delay(i) }, _createWrapper: function () { this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, { keydown: function (e) { if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0; if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) { var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last"); e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () { n.trigger("focus") }), e.preventDefault()) : (this._delay(function () { s.trigger("focus") }), e.preventDefault()) } }, mousedown: function (t) { this._moveToTop(t) && this._focusTabbable() } }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") }) }, _createTitlebar: function () { var e; this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function (e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function (t) { t.preventDefault(), this.close(t) } }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") }) }, _title: function (t) { this.options.title ? t.text(this.options.title) : t.html("&#160;") }, _createButtonPane: function () { this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons() }, _createButtons: function () { var e = this, i = this.options.buttons; return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function (i, s) { var n, o; s = t.isFunction(s) ? { click: s, text: i } : s, s = t.extend({ type: "button" }, s), n = s.click, o = { icon: s.icon, iconPosition: s.iconPosition, showLabel: s.showLabel, icons: s.icons, text: s.text }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function () { n.apply(e.element[0], arguments) }) }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0) }, _makeDraggable: function () { function e(t) { return { position: t.position, offset: t.offset } } var i = this, s = this.options; this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (s, n) { i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n)) }, drag: function (t, s) { i._trigger("drag", t, e(s)) }, stop: function (n, o) { var a = o.offset.left - i.document.scrollLeft(), r = o.offset.top - i.document.scrollTop(); s.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r, of: i.window }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o)) } }) }, _makeResizable: function () { function e(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } } var i = this, s = this.options, n = s.resizable, o = this.uiDialog.css("position"), a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw"; this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: s.maxWidth, maxHeight: s.maxHeight, minWidth: s.minWidth, minHeight: this._minHeight(), handles: a, start: function (s, n) { i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n)) }, resize: function (t, s) { i._trigger("resize", t, e(s)) }, stop: function (n, o) { var a = i.uiDialog.offset(), r = a.left - i.document.scrollLeft(), h = a.top - i.document.scrollTop(); s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h, of: i.window }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o)) } }).css("position", o) }, _trackFocus: function () { this._on(this.widget(), { focusin: function (e) { this._makeFocusTarget(), this._focusedElement = t(e.target) } }) }, _makeFocusTarget: function () { this._untrackInstance(), this._trackingInstances().unshift(this) }, _untrackInstance: function () { var e = this._trackingInstances(), i = t.inArray(this, e); -1 !== i && e.splice(i, 1) }, _trackingInstances: function () { var t = this.document.data("ui-dialog-instances"); return t || (t = [], this.document.data("ui-dialog-instances", t)), t }, _minHeight: function () { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) }, _position: function () { var t = this.uiDialog.is(":visible"); t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide() }, _setOptions: function (e) { var i = this, s = !1, n = {}; t.each(e, function (t, e) { i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e) }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n) }, _setOption: function (e, i) { var s, n, o = this.uiDialog; "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) }, _size: function () { var t, e, i, s = this.options; this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight()) }, _blockFrames: function () { this.iframeBlocks = this.document.find("iframe").map(function () { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _allowInteraction: function (e) { return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length }, _createOverlay: function () { if (this.options.modal) { var e = !0; this._delay(function () { e = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function (t) { e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1) } }, _destroyOverlay: function () { if (this.options.modal && this.overlay) { var t = this.document.data("ui-dialog-overlays") - 1; t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null } } }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function () { this._super(), this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function (t, e) { "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments) } }), t.ui.dialog, t.widget("ui.progressbar", { version: "1.12.1", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function () { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() }, _destroy: function () { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() }, value: function (t) { return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0) }, _constrainedValue: function (t) { return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t)) }, _setOptions: function (t) { var e = t.value; delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue() }, _setOption: function (t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) }, _setOptionDisabled: function (t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t) }, _percentage: function () { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function () { var e = this.options.value, i = this._percentage(); this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete") } }), t.widget("ui.selectmenu", [t.ui.formResetMixin, { version: "1.12.1", defaultElement: "<select>", options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null }, _create: function () { var e = this.element.uniqueId().attr("id"); this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t() }, _drawButton: function () { var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex); this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function (t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () { i._rendered || i._refreshMenu() }) }, _drawMenu: function () { var e = this; this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({ classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function (t, i) { t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t) }, focus: function (t, i) { var s = i.item.data("ui-selectmenu-item"); null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, { item: s }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id")) } }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () { return !1 }, this.menuInstance._isDivider = function () { return !1 } }, refresh: function () { this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton() }, _refreshMenu: function () { var t, e = this.element.find("option"); this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled"))) }, open: function (t) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))) }, _position: function () { this.menuWrap.position(t.extend({ of: this.button }, this.options.position)) }, close: function (t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) }, widget: function () { return this.button }, menuWidget: function () { return this.menu }, _renderButtonItem: function (e) { var i = t("<span>"); return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i }, _renderMenu: function (e, i) { var s = this, n = ""; t.each(i, function (i, o) { var a; o.optgroup !== n && (a = t("<li>", { text: o.optgroup }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o) }) }, _renderItemData: function (t, e) { return this._renderItem(t, e).data("ui-selectmenu-item", e) }, _renderItem: function (e, i) { var s = t("<li>"), n = t("<div>", { title: i.element.attr("title") }); return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e) }, _setText: function (t, e) { e ? t.text(e) : t.html("&#160;") }, _move: function (t, e) { var i, s, n = ".ui-menu-item"; this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s) }, _getSelectedItem: function () { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") }, _toggle: function (t) { this[this.isOpen ? "close" : "open"](t) }, _setSelection: function () { var t; this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus()) }, _documentClick: { mousedown: function (e) { this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e)) } }, _buttonEvents: { mousedown: function () { var t; window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange() }, click: function (t) { this._setSelection(), this._toggle(t) }, keydown: function (e) { var i = !0; switch (e.keyCode) { case t.ui.keyCode.TAB: case t.ui.keyCode.ESCAPE: this.close(e), i = !1; break; case t.ui.keyCode.ENTER: this.isOpen && this._selectFocusedItem(e); break; case t.ui.keyCode.UP: e.altKey ? this._toggle(e) : this._move("prev", e); break; case t.ui.keyCode.DOWN: e.altKey ? this._toggle(e) : this._move("next", e); break; case t.ui.keyCode.SPACE: this.isOpen ? this._selectFocusedItem(e) : this._toggle(e); break; case t.ui.keyCode.LEFT: this._move("prev", e); break; case t.ui.keyCode.RIGHT: this._move("next", e); break; case t.ui.keyCode.HOME: case t.ui.keyCode.PAGE_UP: this._move("first", e); break; case t.ui.keyCode.END: case t.ui.keyCode.PAGE_DOWN: this._move("last", e); break; default: this.menu.trigger(e), i = !1 } i && e.preventDefault() } }, _selectFocusedItem: function (t) { var e = this.menuItems.eq(this.focusIndex).parent("li"); e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t) }, _select: function (t, e) { var i = this.element[0].selectedIndex; this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e) }, _setAria: function (t) { var e = this.menuItems.eq(t.index).attr("id"); this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e) }, _setOption: function (t, e) { if ("icons" === t) { var i = this.button.find("span.ui-icon"); this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button) } this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton() }, _setOptionDisabled: function (t) { this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) }, _appendTo: function () { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e }, _toggleAttr: function () { this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) }, _resizeButton: function () { var t = this.options.width; return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0) }, _resizeMenu: function () { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) }, _getCreateOptions: function () { var t = this._super(); return t.disabled = this.element.prop("disabled"), t }, _parseOptions: function (e) { var i = this, s = []; e.each(function (e, n) { s.push(i._parseOption(t(n), e)) }), this.items = s }, _parseOption: function (t, e) { var i = t.parent("optgroup"); return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") } }, _destroy: function () { this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element) } }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1", widgetEventPrefix: "slide", options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function () { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 }, _refresh: function () { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() }, _createHandles: function () { var e, i, s = this.options, n = this.element.find(".ui-slider-handle"), o = "<span tabindex='0'></span>", a = []; for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o); this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) { t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0) }) }, _createRange: function ()
        {
            var e = this.options; e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        }, _setupEvents: function () { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) }, _destroy: function () { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() }, _mouseCapture: function (e) { var i, s, n, o, a, r, h, l, c = this, u = this.options; return u.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) { var i = Math.abs(s - c.values(e)); (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e) }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: e.pageX - h.left - o.width() / 2, top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0)) }, _mouseStart: function () { return !0 }, _mouseDrag: function (t) { var e = { x: t.pageX, y: t.pageY }, i = this._normValueFromMouse(e); return this._slide(t, this._handleIndex, i), !1 }, _mouseStop: function (t) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function () { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function (t) { var e, i, s, n, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o) }, _uiHash: function (t, e, i) { var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() }; return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s }, _hasMultipleValues: function () { return this.options.values && this.options.values.length }, _start: function (t, e) { return this._trigger("start", t, this._uiHash(e)) }, _slide: function (t, e, i) { var s, n, o = this.value(), a = this.values(); this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))) }, _stop: function (t, e) { this._trigger("stop", t, this._uiHash(e)) }, _change: function (t, e) { this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e))) }, value: function (t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value() }, values: function (e, i) { var s, n, o; if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0; if (!arguments.length) return this._values(); if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value(); for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o); this._refreshValue() }, _setOption: function (e, i) { var s, n = 0; switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) { case "orientation": this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", ""); break; case "value": this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break; case "values": for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s); this._animateOff = !1; break; case "step": case "min": case "max": this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1; break; case "range": this._animateOff = !0, this._refresh(), this._animateOff = !1 } }, _setOptionDisabled: function (t) { this._super(t), this._toggleClass(null, "ui-state-disabled", !!t) }, _value: function () { var t = this.options.value; return t = this._trimAlignValue(t) }, _values: function (t) { var e, i, s; if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e); if (this._hasMultipleValues()) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]); return i } return [] }, _trimAlignValue: function (t) { if (this._valueMin() >= t) return this._valueMin(); if (t >= this._valueMax()) return this._valueMax(); var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i; return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5)) }, _calculateNewMax: function () { var t = this.options.max, e = this._valueMin(), i = this.options.step, s = Math.round((t - e) / i) * i; t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision())) }, _precision: function () { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t }, _precisionOf: function (t) { var e = "" + t, i = e.indexOf("."); return -1 === i ? 0 : e.length - i - 1 }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.max }, _refreshRange: function (t) { "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" }) }, _refreshValue: function () { var e, i, s, n, o, a = this.options.range, r = this.options, h = this, l = this._animateOff ? !1 : r.animate, c = {}; this._hasMultipleValues() ? this.handles.each(function (s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate)) }, _handleEvents: { keydown: function (e) { var i, s, n, o, a = t(e.target).data("ui-slider-handle-index"); switch (e.keyCode) { case t.ui.keyCode.HOME: case t.ui.keyCode.END: case t.ui.keyCode.PAGE_UP: case t.ui.keyCode.PAGE_DOWN: case t.ui.keyCode.UP: case t.ui.keyCode.RIGHT: case t.ui.keyCode.DOWN: case t.ui.keyCode.LEFT: if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return } switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) { case t.ui.keyCode.HOME: n = this._valueMin(); break; case t.ui.keyCode.END: n = this._valueMax(); break; case t.ui.keyCode.PAGE_UP: n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages); break; case t.ui.keyCode.PAGE_DOWN: n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages); break; case t.ui.keyCode.UP: case t.ui.keyCode.RIGHT: if (s === this._valueMax()) return; n = this._trimAlignValue(s + o); break; case t.ui.keyCode.DOWN: case t.ui.keyCode.LEFT: if (s === this._valueMin()) return; n = this._trimAlignValue(s - o) } this._slide(e, a, n) }, keyup: function (e) { var i = t(e.target).data("ui-slider-handle-index"); this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active")) } }
    }), t.widget("ui.spinner", { version: "1.12.1", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function () { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _getCreateOptions: function () { var e = this._super(), i = this.element; return t.each(["min", "max", "step"], function (t, s) { var n = i.attr(s); null != n && n.length && (e[s] = n) }), e }, _events: { keydown: function (t) { this._start(t) && this._keydown(t) && t.preventDefault() }, keyup: "_stop", focus: function () { this.previous = this.element.val() }, blur: function (t) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0) }, mousewheel: function (t, e) { if (e) { if (!this.spinning && !this._start(t)) return !1; this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () { this.spinning && this._stop(t) }, 100), t.preventDefault() } }, "mousedown .ui-spinner-button": function (e) { function i() { var e = this.element[0] === t.ui.safeActiveElement(this.document[0]); e || (this.element.trigger("focus"), this.previous = s, this._delay(function () { this.previous = s })) } var s; s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () { delete this.cancelBlur, i.call(this) }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) { return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0 }, "mouseleave .ui-spinner-button": "_stop" }, _enhance: function () { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") }, _draw: function () { this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) }, _keydown: function (e) { var i = this.options, s = t.ui.keyCode; switch (e.keyCode) { case s.UP: return this._repeat(null, 1, e), !0; case s.DOWN: return this._repeat(null, -1, e), !0; case s.PAGE_UP: return this._repeat(null, i.page, e), !0; case s.PAGE_DOWN: return this._repeat(null, -i.page, e), !0 } return !1 }, _start: function (t) { return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1 }, _repeat: function (t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) }, _spin: function (t, e) { var i = this.value() || 0; this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, { value: i }) === !1 || (this._value(i), this.counter++) }, _increment: function (e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 }, _precision: function () { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t }, _precisionOf: function (t) { var e = "" + t, i = e.indexOf("."); return -1 === i ? 0 : e.length - i - 1 }, _adjustValue: function (t) { var e, i, s = this.options; return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t }, _stop: function (t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) }, _setOption: function (t, e) { var i, s, n; return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0) }, _setOptionDisabled: function (t) { this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable") }, _setOptions: r(function (t) { this._super(t) }), _parse: function (t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t }, _format: function (t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t }, _refresh: function () { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, isValid: function () { var t = this.value(); return null === t ? !1 : t === this._adjustValue(t) }, _value: function (t, e) { var i; "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh() }, _destroy: function () { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element) }, stepUp: r(function (t) { this._stepUp(t) }), _stepUp: function (t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) }, stepDown: r(function (t) { this._stepDown(t) }), _stepDown: function (t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) }, pageUp: r(function (t) { this._stepUp((t || 1) * this.options.page) }), pageDown: r(function (t) { this._stepDown((t || 1) * this.options.page) }), value: function (t) { return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val()) }, widget: function () { return this.uiSpinner } }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, { _enhance: function () { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function () { return "<span>" }, _buttonHtml: function () { return "<a></a><a></a>" } }), t.ui.spinner, t.widget("ui.tabs", { version: "1.12.1", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function () { var t = /#.*$/; return function (e) { var i, s; i = e.href.replace(t, ""), s = location.href.replace(t, ""); try { i = decodeURIComponent(i) } catch (n) { } try { s = decodeURIComponent(s) } catch (n) { } return e.hash.length > 1 && i === s } }(), _create: function () { var e = this, i = this.options; this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) { return e.tabs.index(t) }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active) }, _initialActive: function () { var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1); return null === e && (s && this.tabs.each(function (i, n) { return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0 }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e }, _getCreateEventData: function () { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } }, _tabKeydown: function (e) { var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), n = !0; if (!this._handlePageNav(e)) { switch (e.keyCode) { case t.ui.keyCode.RIGHT: case t.ui.keyCode.DOWN: s++; break; case t.ui.keyCode.UP: case t.ui.keyCode.LEFT: n = !1, s--; break; case t.ui.keyCode.END: s = this.anchors.length - 1; break; case t.ui.keyCode.HOME: s = 0; break; case t.ui.keyCode.SPACE: return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0; case t.ui.keyCode.ENTER: return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0; default: return } e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () { this.option("active", s) }, this.delay)) } }, _panelKeydown: function (e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")) }, _handlePageNav: function (e) { return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 }, _findNextTab: function (e, i) { function s() { return e > n && (e = 0), 0 > e && (e = n), e } for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled) ;) e = i ? e + 1 : e - 1; return e }, _focusNextTab: function (t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t }, _setOption: function (t, e) { return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0) }, _sanitizeSelector: function (t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" }, refresh: function () { var e = this.options, i = this.tablist.children(":has(a[href])"); e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) { return i.index(t) }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh() }, _refresh: function () { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) }, _processTabs: function () { var e = this, i = this.tabs, s = this.anchors, n = this.panels; this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () { return t("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) { var n, o, a, r = t(s).uniqueId().attr("id"), h = t(s).closest("li"), l = h.attr("aria-controls"); e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": a, "aria-labelledby": r }), o.attr("aria-labelledby", r) }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels))) }, _getList: function () { return this.tablist || this.element.find("ol, ul").eq(0) }, _createPanel: function (e) { return t("<div>").attr("id", e).data("ui-tabs-destroy", !0) }, _setOptionDisabled: function (e) { var i, s, n; for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled")); this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0) }, _setupEvents: function (e) { var i = {}; e && t.each(e.split(" "), function (t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function (t) { t.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs) }, _setupHeightStyle: function (e) { var i, s = this.element.parent(); "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () { var e = t(this), s = e.css("position"); "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0)) }), this.element.children().not(this.panels).each(function () { i -= t(this).outerHeight(!0) }), this.panels.each(function () { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () { i = Math.max(i, t(this).height("").height()) }).height(i)) }, _eventHandler: function (e) { var i = this.options, s = this.active, n = t(e.currentTarget), o = n.closest("li"), a = o[0] === s[0], r = a && i.collapsible, h = r ? t() : this._getPanelForTab(o), l = s.length ? this._getPanelForTab(s) : t(), c = { oldTab: s, oldPanel: l, newTab: r ? t() : o, newPanel: h }; e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c)) }, _toggle: function (e, i) { function s() { o.running = !1, o._trigger("activate", e, i) } function n() { o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s()) } var o = this, a = i.newPanel, r = i.oldPanel; this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () { o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }) }, _activate: function (e) { var i, s = this._findActive(e); s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop })) }, _findActive: function (e) { return e === !1 ? t() : this.tabs.eq(e) }, _getIndex: function (e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e }, _destroy: function () { this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function () { var e = t(this), i = e.data("ui-tabs-aria-controls"); i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls") }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "") }, enable: function (e) { var i = this.options.disabled; i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) { return t !== e ? t : null }) : t.map(this.tabs, function (t, i) { return i !== e ? i : null })), this._setOptionDisabled(i)) }, disable: function (e) { var i = this.options.disabled; if (i !== !0) { if (void 0 === e) i = !0; else { if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return; i = t.isArray(i) ? t.merge([e], i).sort() : [e] } this._setOptionDisabled(i) } }, load: function (e, i) { e = this._getIndex(e); var s = this, n = this.tabs.eq(e), o = n.find(".ui-tabs-anchor"), a = this._getPanelForTab(n), r = { tab: n, panel: a }, h = function (t, e) { "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr }; this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) { setTimeout(function () { a.html(t), s._trigger("load", i, r), h(n, e) }, 1) }).fail(function (t, e) { setTimeout(function () { h(t, e) }, 1) }))) }, _ajaxSettings: function (e, i, s) { var n = this; return { url: e.attr("href").replace(/#.*$/, ""), beforeSend: function (e, o) { return n._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, s)) } } }, _getPanelForTab: function (e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) } }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function () { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function () { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null }, _addDescribedBy: function (e, i) { var s = (e.attr("aria-describedby") || "").split(/\s+/); s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" "))) }, _removeDescribedBy: function (e) { var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), n = t.inArray(i, s); -1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby") }, _create: function () { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]) }, _setOption: function (e, i) { var s = this; this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) { s._updateContent(e.element) }) }, _setOptionDisabled: function (t) { this[t ? "_disable" : "_enable"]() }, _disable: function () { var e = this; t.each(this.tooltips, function (i, s) { var n = t.Event("blur"); n.target = n.currentTarget = s.element[0], e.close(n, !0) }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () { var e = t(this); return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0 })) }, _enable: function () { this.disabledTitles.each(function () { var e = t(this); e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")) }), this.disabledTitles = t([]) }, open: function (e) { var i = this, s = t(e ? e.target : this.element).closest(this.options.items); s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () { var e, s = t(this); s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", "")) }), this._registerCloseHandlers(e, s), this._updateContent(s, e)) }, _updateContent: function (t, e) { var i, s = this.options.content, n = this, o = e ? e.type : null; return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : (i = s.call(t[0], function (i) { n._delay(function () { t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i)) }) }), i && this._open(e, t, i), void 0) }, _open: function (e, i, s) { function n(t) { l.of = t, a.is(":hidden") || a.position(l) } var o, a, r, h, l = t.extend({}, this.options.position); if (s) { if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0; i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: n }), n(e)) : a.position(t.extend({ of: i }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () { a.is(":visible") && (n(l.of), clearInterval(r)) }, t.fx.interval)), this._trigger("open", e, { tooltip: a }) } }, _registerCloseHandlers: function (e, i) { var s = { keyup: function (e) { if (e.keyCode === t.ui.keyCode.ESCAPE) { var s = t.Event(e); s.currentTarget = i[0], this.close(s, !0) } } }; i[0] !== this.element[0] && (s.remove = function () { this._removeTooltip(this._find(i).tooltip) }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s) }, close: function (e)
        {
            var i, s = this, n = t(e ? e.currentTarget : this.element), o = this._find(n); return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () { s._removeTooltip(t(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i)
            {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
        }, _tooltip: function (e) { var i = t("<div>").attr("role", "tooltip"), s = t("<div>").appendTo(i), n = i.uniqueId().attr("id"); return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = { element: e, tooltip: i } }, _find: function (t) { var e = t.data("ui-tooltip-id"); return e ? this.tooltips[e] : null }, _removeTooltip: function (t) { t.remove(), delete this.tooltips[t.attr("id")] }, _appendTo: function (t) { var e = t.closest(".ui-front, dialog"); return e.length || (e = this.document[0].body), e }, _destroy: function () { var e = this; t.each(this.tooltips, function (i, s) { var n = t.Event("blur"), o = s.element; n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title")) }), this.liveRegion.remove() }
    }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function () { var t = this._superApply(arguments); return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t } }), t.ui.tooltip; var f = "ui-effects-", g = "ui-effects-style", m = "ui-effects-animated", _ = t; t.effects = { effect: {} }, function (t, e) { function i(t, e, i) { var s = u[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t) } function s(i) { var s = l(), n = s._rgba = []; return i = i.toLowerCase(), f(h, function (t, o) { var a, r = o.re.exec(i), h = r && o.parse(r), l = o.space || "rgba"; return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i] } function n(t, e, i) { return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t } var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }], l = t.Color = function (e, i, s, n) { return new t.Color.fn.parse(e, i, s, n) }, c = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, u = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, d = l.support = {}, p = t("<p>")[0], f = t.each; p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = t.extend(l.prototype, { parse: function (n, a, r, h) { if (n === e) return this._rgba = [null, null, null, null], this; (n.jquery || n.nodeType) && (n = t(n).css(a), a = e); var u = this, d = t.type(n), p = this._rgba = []; return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) { p[e.idx] = i(n[e.idx], e) }), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) { n[e.cache] && (u[e.cache] = n[e.cache].slice()) }) : f(c, function (e, s) { var o = s.cache; f(s.props, function (t, e) { if (!u[o] && s.to) { if ("alpha" === t || null == n[t]) return; u[o] = s.to(u._rgba) } u[o][e.idx] = i(n[t], e, !0) }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o]))) }), this) : e }, is: function (t) { var i = l(t), s = !0, n = this; return f(c, function (t, o) { var a, r = i[o.cache]; return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) { return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e })), s }), s }, _space: function () { var t = [], e = this; return f(c, function (i, s) { e[s.cache] && t.push(i) }), t.pop() }, transition: function (t, e) { var s = l(t), n = s._space(), o = c[n], a = 0 === this.alpha() ? l("transparent") : this, r = a[o.cache] || o.to(a._rgba), h = r.slice(); return s = s[o.cache], f(o.props, function (t, n) { var o = n.idx, a = r[o], l = s[o], c = u[n.type] || {}; null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n))) }), this[n](h) }, blend: function (e) { if (1 === this._rgba[3]) return this; var i = this._rgba.slice(), s = i.pop(), n = l(e)._rgba; return l(t.map(i, function (t, e) { return (1 - s) * n[e] + s * t })) }, toRgbaString: function () { var e = "rgba(", i = t.map(this._rgba, function (t, e) { return null == t ? e > 2 ? 1 : 0 : t }); return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")" }, toHslaString: function () { var e = "hsla(", i = t.map(this.hsla(), function (t, e) { return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t }); return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")" }, toHexString: function (e) { var i = this._rgba.slice(), s = i.pop(); return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) { return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t }).join("") }, toString: function () { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), h = Math.min(s, n, o), l = r - h, c = r + h, u = .5 * c; return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a] }, c.hsla.from = function (t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e = t[0] / 360, i = t[1], s = t[2], o = t[3], a = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - a; return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o] }, f(c, function (s, n) { var o = n.props, a = n.cache, h = n.to, c = n.from; l.fn[s] = function (s) { if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice(); var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice(); return f(o, function (t, e) { var s = u["object" === r ? t : e.idx]; null == s && (s = d[e.idx]), d[e.idx] = i(s, e) }), c ? (n = l(c(d)), n[a] = d, n) : l(d) }, f(o, function (e, i) { l.fn[e] || (l.fn[e] = function (n) { var o, a = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), c = l[i.idx]; return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l))) }) }) }), l.hook = function (e) { var i = e.split(" "); f(i, function (e, i) { t.cssHooks[i] = { set: function (e, n) { var o, a, r = ""; if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) { if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) { for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;) try { r = t.css(a, "backgroundColor"), a = a.parentNode } catch (h) { } n = n.blend(r && "transparent" !== r ? r : "_default") } n = n.toRgbaString() } try { e.style[i] = n } catch (h) { } } }, t.fx.step[i] = function (e) { e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) } }) }, l.hook(a), t.cssHooks.borderColor = { expand: function (t) { var e = {}; return f(["Top", "Right", "Bottom", "Left"], function (i, s) { e["border" + s + "Color"] = t }), e } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(_), function () { function e(e) { var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {}; if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (o[i] = n[i]); return o } function i(e, i) { var s, o, a = {}; for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o)); return a } var s = ["add", "remove", "toggle"], n = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) { t.fx.step[i] = function (t) { ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (_.style(t.elem, i, t.end), t.setAttr = !0) } }), t.fn.addBack || (t.fn.addBack = function (t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function (n, o, a, r) { var h = t.speed(o, a, r); return this.queue(function () { var o, a = t(this), r = a.attr("class") || "", l = h.children ? a.find("*").addBack() : a; l = l.map(function () { var i = t(this); return { el: i, start: e(this) } }), o = function () { t.each(s, function (t, e) { n[e] && a[e + "Class"](n[e]) }) }, o(), l = l.map(function () { return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this }), a.attr("class", r), l = l.map(function () { var e = this, i = t.Deferred(), s = t.extend({}, h, { queue: !1, complete: function () { i.resolve(e) } }); return this.el.animate(this.diff, s), i.promise() }), t.when.apply(t, l.get()).done(function () { o(), t.each(arguments, function () { var e = this.el; t.each(this.diff, function (t) { e.css(t, "") }) }), h.complete.call(a[0]) }) }) }, t.fn.extend({ addClass: function (e) { return function (i, s, n, o) { return s ? t.effects.animateClass.call(this, { add: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function (e) { return function (i, s, n, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function (e) { return function (i, s, n, o, a) { return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, s, n, o) } }(t.fn.toggleClass), switchClass: function (e, i, s, n, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, o) } }) }(), function () { function e(e, i, s, n) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e } function i(e) { return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0 } function s(t, e) { var i = e.outerWidth(), s = e.outerHeight(), n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/, o = n.exec(t) || ["", 0, i, s, 0]; return { top: parseFloat(o[1]) || 0, right: "auto" === o[2] ? i : parseFloat(o[2]), bottom: "auto" === o[3] ? s : parseFloat(o[3]), left: parseFloat(o[4]) || 0 } } t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) { return function (i) { return !!t(i).data(m) || e(i) } }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, { save: function (t, e) { for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(f + e[i], t[0].style[e[i]]) }, restore: function (t, e) { for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(f + e[s]), t.css(e[s], i)) }, setMode: function (t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e }, createWrapper: function (e) { if (e.parent().is(".ui-effects-wrapper")) return e.parent(); var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float") }, s = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), n = { width: e.width(), height: e.height() }, o = document.activeElement; try { o.id } catch (a) { o = document.body } return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function (t, s) { i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(n), s.css(i).show() }, removeWrapper: function (e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e } }), t.extend(t.effects, { version: "1.12.1", define: function (e, i, s) { return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s }, scaledDimensions: function (t, e, i) { if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1; return { height: t.height() * n, width: t.width() * s, outerHeight: t.outerHeight() * n, outerWidth: t.outerWidth() * s } }, clipToBox: function (t) { return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top } }, unshift: function (t, e, i) { var s = t.queue(); e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue() }, saveStyle: function (t) { t.data(g, t[0].style.cssText) }, restoreStyle: function (t) { t[0].style.cssText = t.data(g) || "", t.removeData(g) }, mode: function (t, e) { var i = t.is(":hidden"); return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e }, getBaseline: function (t, e) { var i, s; switch (t[0]) { case "top": i = 0; break; case "middle": i = .5; break; case "bottom": i = 1; break; default: i = t[0] / e.height } switch (t[1]) { case "left": s = 0; break; case "center": s = .5; break; case "right": s = 1; break; default: s = t[1] / e.width } return { x: s, y: i } }, createPlaceholder: function (e) { var i, s = e.css("position"), n = e.position(); return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), "float": e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(f + "placeholder", i)), e.css({ position: s, left: n.left, top: n.top }), i }, removePlaceholder: function (t) { var e = f + "placeholder", i = t.data(e); i && (i.remove(), t.removeData(e)) }, cleanUp: function (e) { t.effects.restoreStyle(e), t.effects.removePlaceholder(e) }, setTransition: function (e, i, s, n) { return n = n || {}, t.each(i, function (t, i) { var o = e.cssUnit(i); o[0] > 0 && (n[i] = o[0] * s + o[1]) }), n } }), t.fn.extend({ effect: function () { function i(e) { function i() { r.removeData(m), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a() } function a() { t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e() } var r = t(this); s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a) } var s = e.apply(this, arguments), n = t.effects.effect[s.effect], o = n.mode, a = s.queue, r = a || "fx", h = s.complete, l = s.mode, c = [], u = function (e) { var i = t(this), s = t.effects.mode(i, l) || o; i.data(m, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e() }; return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function () { h && h.call(this) }) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i) }, show: function (t) { return function (s) { if (i(s)) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "show", this.effect.call(this, n) } }(t.fn.show), hide: function (t) { return function (s) { if (i(s)) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "hide", this.effect.call(this, n) } }(t.fn.hide), toggle: function (t) { return function (s) { if (i(s) || "boolean" == typeof s) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) } }(t.fn.toggle), cssUnit: function (e) { var i = this.css(e), s = []; return t.each(["em", "px", "%", "pt"], function (t, e) { i.indexOf(e) > 0 && (s = [parseFloat(i), e]) }), s }, cssClip: function (t) { return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this) }, transfer: function (e, i) { var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), a = t("body"), r = o ? a.scrollTop() : 0, h = o ? a.scrollLeft() : 0, l = n.offset(), c = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() }, u = s.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: u.top - r, left: u.left - h, height: s.innerHeight(), width: s.innerWidth(), position: o ? "fixed" : "absolute" }).animate(c, e.duration, e.easing, function () { d.remove(), t.isFunction(i) && i() }) } }), t.fx.step.clip = function (e) { e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left }) } }(), function () { var e = {}; t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) { e[i] = function (e) { return Math.pow(e, t + 2) } }), t.extend(e, { Sine: function (t) { return 1 - Math.cos(t * Math.PI / 2) }, Circ: function (t) { return 1 - Math.sqrt(1 - t * t) }, Elastic: function (t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) }, Back: function (t) { return t * t * (3 * t - 2) }, Bounce: function (t) { for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2) } }), t.each(e, function (e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function (t) { return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2 } }) }(); var v = t.effects; t.effects.define("blind", "hide", function (e, i) { var s = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] }, n = t(this), o = e.direction || "up", a = n.cssClip(), r = { clip: t.extend({}, a) }, h = t.effects.createPlaceholder(n); r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("bounce", function (e, i) { var s, n, o, a = t(this), r = e.mode, h = "hide" === r, l = "show" === r, c = e.direction || "up", u = e.distance, d = e.times || 5, p = 2 * d + (l || h ? 1 : 0), f = e.duration / p, g = e.easing, m = "up" === c || "down" === c ? "top" : "left", _ = "up" === c || "left" === c, v = 0, b = a.queue().length; for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = { opacity: 1 }, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2; h && (s = { opacity: 0 }, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1) }), t.effects.define("clip", "hide", function (e, i) { var s, n = {}, o = t(this), a = e.direction || "vertical", r = "both" === a, h = r || "horizontal" === a, l = r || "vertical" === a; s = o.cssClip(), n.clip = { top: l ? (s.bottom - s.top) / 2 : s.top, right: h ? (s.right - s.left) / 2 : s.right, bottom: l ? (s.bottom - s.top) / 2 : s.bottom, left: h ? (s.right - s.left) / 2 : s.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("drop", "hide", function (e, i) { var s, n = t(this), o = e.mode, a = "show" === o, r = e.direction || "left", h = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r ? "-=" : "+=", c = "+=" === l ? "-=" : "+=", u = { opacity: 0 }; t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("explode", "hide", function (e, i) { function s() { b.push(this), b.length === u * d && n() } function n() { p.css({ visibility: "visible" }), t(b).remove(), i() } var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = u, p = t(this), f = e.mode, g = "show" === f, m = p.show().css("visibility", "hidden").offset(), _ = Math.ceil(p.outerWidth() / d), v = Math.ceil(p.outerHeight() / u), b = []; for (o = 0; u > o; o++) for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -a * _, top: -o * v }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: _, height: v, left: r + (g ? l * _ : 0), top: h + (g ? c * v : 0), opacity: g ? 0 : 1 }).animate({ left: r + (g ? 0 : l * _), top: h + (g ? 0 : c * v), opacity: g ? 1 : 0 }, e.duration || 500, e.easing, s) }), t.effects.define("fade", "toggle", function (e, i) { var s = "show" === e.mode; t(this).css("opacity", s ? 0 : 1).animate({ opacity: s ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("fold", "hide", function (e, i) { var s = t(this), n = e.mode, o = "show" === n, a = "hide" === n, r = e.size || 15, h = /([0-9]+)%/.exec(r), l = !!e.horizFirst, c = l ? ["right", "bottom"] : ["bottom", "right"], u = e.duration / 2, d = t.effects.createPlaceholder(s), p = s.cssClip(), f = { clip: t.extend({}, p) }, g = { clip: t.extend({}, p) }, m = [p[c[0]], p[c[1]]], _ = s.queue().length; h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function (i) { d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i() }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4) }), t.effects.define("highlight", "show", function (e, i) { var s = t(this), n = { backgroundColor: s.css("backgroundColor") }; "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }), t.effects.define("size", function (e, i) { var s, n, o, a = t(this), r = ["fontSize"], h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], c = e.mode, u = "effect" !== c, d = e.scale || "both", p = e.origin || ["middle", "center"], f = a.css("position"), g = a.position(), m = t.effects.scaledDimensions(a), _ = e.from || m, v = e.to || t.effects.scaledDimensions(a, 0); t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = { from: { y: _.height / m.height, x: _.width / m.width }, to: { y: v.height / m.height, x: v.width / m.width } }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () { var i = t(this), s = t.effects.scaledDimensions(i), o = { height: s.height * n.from.y, width: s.width * n.from.x, outerHeight: s.outerHeight * n.from.y, outerWidth: s.outerWidth * n.from.x }, a = { height: s.height * n.to.y, width: s.width * n.to.x, outerHeight: s.height * n.to.y, outerWidth: s.width * n.to.x }; n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () { u && t.effects.restoreStyle(i) }) })), a.animate(v, { queue: !1, duration: e.duration, easing: e.easing, complete: function () { var e = a.offset(); 0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i() } }) }), t.effects.define("scale", function (e, i) { var s = t(this), n = e.mode, o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100), a = t.extend(!0, { from: t.effects.scaledDimensions(s), to: t.effects.scaledDimensions(s, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e); e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i) }), t.effects.define("puff", "hide", function (e, i) { var s = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 }); t.effects.effect.scale.call(this, s, i) }), t.effects.define("pulsate", "show", function (e, i) { var s = t(this), n = e.mode, o = "show" === n, a = "hide" === n, r = o || a, h = 2 * (e.times || 5) + (r ? 1 : 0), l = e.duration / h, c = 0, u = 1, d = s.queue().length; for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1) ; h > u; u++) s.animate({ opacity: c }, l, e.easing), c = 1 - c; s.animate({ opacity: c }, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1) }), t.effects.define("shake", function (e, i) { var s = 1, n = t(this), o = e.direction || "left", a = e.distance || 20, r = e.times || 3, h = 2 * r + 1, l = Math.round(e.duration / h), c = "up" === o || "down" === o ? "top" : "left", u = "up" === o || "left" === o, d = {}, p = {}, f = {}, g = n.queue().length; for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing) ; r > s; s++) n.animate(p, l, e.easing).animate(f, l, e.easing); n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1) }), t.effects.define("slide", "show", function (e, i) { var s, n, o = t(this), a = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] }, r = e.mode, h = e.direction || "left", l = "up" === h || "down" === h ? "top" : "left", c = "up" === h || "left" === h, u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0), d = {}; t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i }) }); var v; t.uiBackCompat !== !1 && (v = t.effects.define("transfer", function (e, i) { t(this).transfer(e, i) }))
});

/*!
 DataTables 1.10.15
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function (h) { "function" === typeof define && define.amd ? define(["jquery"], function (E) { return h(E, window, document) }) : "object" === typeof exports ? module.exports = function (E, H) { E || (E = window); H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E)); return h(H, E, E.document) } : h(jQuery, window, document) })(function (h, E, H, k)
{
    function Y(a)
    {
        var b, c, d = {}; h.each(a, function (e)
        {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
            d[c] = e, "o" === b[1] && Y(a[e])
        }); a._hungarianMap = d
    } function J(a, b, c) { a._hungarianMap || Y(a); var d; h.each(b, function (e) { d = a._hungarianMap[e]; if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e] }) } function Fa(a)
    {
        var b = m.defaults.oLanguage, c = a.sZeroRecords; !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable"); !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
        a.sInfoThousands && (a.sThousands = a.sInfoThousands); (a = a.sDecimal) && fb(a)
    } function gb(a)
    {
        A(a, "ordering", "bSort"); A(a, "orderMulti", "bSortMulti"); A(a, "orderClasses", "bSortClasses"); A(a, "orderCellsTop", "bSortCellsTop"); A(a, "order", "aaSorting"); A(a, "orderFixed", "aaSortingFixed"); A(a, "paging", "bPaginate"); A(a, "pagingType", "sPaginationType"); A(a, "pageLength", "iDisplayLength"); A(a, "searching", "bFilter"); "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : ""); "boolean" === typeof a.scrollX && (a.scrollX =
        a.scrollX ? "100%" : ""); if (a = a.aoSearchCols) for (var b = 0, c = a.length; b < c; b++) a[b] && J(m.models.oSearch, a[b])
    } function hb(a) { A(a, "orderable", "bSortable"); A(a, "orderData", "aDataSort"); A(a, "orderSequence", "asSorting"); A(a, "orderDataType", "sortDataType"); var b = a.aDataSort; "number" === typeof b && !h.isArray(b) && (a.aDataSort = [b]) } function ib(a)
    {
        if (!m.__browser)
        {
            var b = {}; m.__browser = b; var c = h("<div/>").css({ position: "fixed", top: 0, left: -1 * h(E).scrollLeft(), height: 1, width: 1, overflow: "hidden" }).append(h("<div/>").css({
                position: "absolute",
                top: 1, left: 1, width: 100, overflow: "scroll"
            }).append(h("<div/>").css({ width: "100%", height: 10 }))).appendTo("body"), d = c.children(), e = d.children(); b.barWidth = d[0].offsetWidth - d[0].clientWidth; b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth; b.bScrollbarLeft = 1 !== Math.round(e.offset().left); b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1; c.remove()
        } h.extend(a.oBrowser, m.__browser); a.oScroll.iBarWidth = m.__browser.barWidth
    } function jb(a, b, c, d, e, f)
    {
        var g, j = !1; c !== k && (g = c, j = !0); for (; d !==
        e;) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f); return g
    } function Ga(a, b) { var c = m.defaults.column, d = a.aoColumns.length, c = h.extend({}, m.models.oColumn, c, { nTh: b ? b : H.createElement("th"), sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "", aDataSort: c.aDataSort ? c.aDataSort : [d], mData: c.mData ? c.mData : d, idx: d }); a.aoColumns.push(c); c = a.aoPreSearchCols; c[d] = h.extend({}, m.models.oSearch, c[d]); la(a, d, h(b).data()) } function la(a, b, c)
    {
        var b = a.aoColumns[b], d = a.oClasses, e = h(b.nTh); if (!b.sWidthOrig)
        {
            b.sWidthOrig =
            e.attr("width") || null; var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/); f && (b.sWidthOrig = f[1])
        } c !== k && null !== c && (hb(c), J(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort")); var g = b.mData, j = R(g), i = b.mRender ? R(b.mRender) : null, c = function (a) { return "string" === typeof a && -1 !== a.indexOf("@") };
        b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter)); b._setter = null; b.fnGetData = function (a, b, c) { var d = j(a, b, k, c); return i && b ? i(d, b, a, c) : d }; b.fnSetData = function (a, b, c) { return S(g)(a, b, c) }; "number" !== typeof g && (a._rowReadObject = !0); a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone)); a = -1 !== h.inArray("asc", b.asSorting); c = -1 !== h.inArray("desc", b.asSorting); !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI =
        d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    } function Z(a) { if (!1 !== a.oFeatures.bAutoWidth) { var b = a.aoColumns; Ha(a); for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth } b = a.oScroll; ("" !== b.sY || "" !== b.sX) && ma(a); s(a, null, "column-sizing", [a]) } function $(a, b) { var c = na(a, "bVisible"); return "number" === typeof c[b] ? c[b] : null } function aa(a, b)
    {
        var c = na(a, "bVisible"), c = h.inArray(b,
        c); return -1 !== c ? c : null
    } function ba(a) { var b = 0; h.each(a.aoColumns, function (a, d) { d.bVisible && "none" !== h(d.nTh).css("display") && b++ }); return b } function na(a, b) { var c = []; h.map(a.aoColumns, function (a, e) { a[b] && c.push(e) }); return c } function Ia(a)
    {
        var b = a.aoColumns, c = a.aoData, d = m.ext.type.detect, e, f, g, j, i, h, l, q, r; e = 0; for (f = b.length; e < f; e++) if (l = b[e], r = [], !l.sType && l._sManualType) l.sType = l._sManualType; else if (!l.sType)
        {
            g = 0; for (j = d.length; g < j; g++)
            {
                i = 0; for (h = c.length; i < h; i++)
                {
                    r[i] === k && (r[i] = B(a, i, e, "type"));
                    q = d[g](r[i], a); if (!q && g !== d.length - 1) break; if ("html" === q) break
                } if (q) { l.sType = q; break }
            } l.sType || (l.sType = "string")
        }
    } function kb(a, b, c, d)
    {
        var e, f, g, j, i, n, l = a.aoColumns; if (b) for (e = b.length - 1; 0 <= e; e--)
            {
            n = b[e]; var q = n.targets !== k ? n.targets : n.aTargets; h.isArray(q) || (q = [q]); f = 0; for (g = q.length; f < g; f++) if ("number" === typeof q[f] && 0 <= q[f]) { for (; l.length <= q[f];) Ga(a); d(q[f], n) } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n); else if ("string" === typeof q[f])
            {
                j = 0; for (i = l.length; j < i; j++) ("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) &&
                d(j, n)
            }
        } if (c) { e = 0; for (a = c.length; e < a; e++) d(e, c[e]) }
    } function N(a, b, c, d) { var e = a.aoData.length, f = h.extend(!0, {}, m.models.oRow, { src: c ? "dom" : "data", idx: e }); f._aData = b; a.aoData.push(f); for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null; a.aiDisplayMaster.push(e); b = a.rowIdFn(b); b !== k && (a.aIds[b] = f); (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d); return e } function oa(a, b) { var c; b instanceof h || (b = h(b)); return b.map(function (b, e) { c = Ka(a, e); return N(a, c.data, e, c.cells) }) } function B(a, b, c, d)
    {
        var e = a.iDraw,
        f = a.aoColumns[c], g = a.aoData[b]._aData, j = f.sDefaultContent, i = f.fnGetData(g, d, { settings: a, row: b, col: c }); if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j; if ((i === g || null === i) && null !== j && d !== k) i = j; else if ("function" === typeof i) return i.call(g); return null === i && "display" == d ? "" : i
    } function lb(a, b, c, d) { a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, { settings: a, row: b, col: c }) }
    function La(a) { return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) { return a.replace(/\\\./g, ".") }) } function R(a)
    {
        if (h.isPlainObject(a)) { var b = {}; h.each(a, function (a, c) { c && (b[a] = R(c)) }); return function (a, c, f, g) { var j = b[c] || b._; return j !== k ? j(a, c, f, g) : a } } if (null === a) return function (a) { return a }; if ("function" === typeof a) return function (b, c, f, g) { return a(b, c, f, g) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("(")))
        {
            var c = function (a, b, f)
            {
                var g, j; if ("" !== f)
                {
                    j = La(f);
                    for (var i = 0, n = j.length; i < n; i++) { f = j[i].match(ca); g = j[i].match(V); if (f) { j[i] = j[i].replace(ca, ""); "" !== j[i] && (a = a[j[i]]); g = []; j.splice(0, i + 1); j = j.join("."); if (h.isArray(a)) { i = 0; for (n = a.length; i < n; i++) g.push(c(a[i], b, j)) } a = f[0].substring(1, f[0].length - 1); a = "" === a ? g : g.join(a); break } else if (g) { j[i] = j[i].replace(V, ""); a = a[j[i]](); continue } if (null === a || a[j[i]] === k) return k; a = a[j[i]] }
                } return a
            }; return function (b, e) { return c(b, e, a) }
        } return function (b) { return b[a] }
    } function S(a)
    {
        if (h.isPlainObject(a)) return S(a._);
        if (null === a) return function () { }; if ("function" === typeof a) return function (b, d, e) { a(b, "set", d, e) }; if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("(")))
        {
            var b = function (a, d, e)
            {
                var e = La(e), f; f = e[e.length - 1]; for (var g, j, i = 0, n = e.length - 1; i < n; i++)
                {
                    g = e[i].match(ca); j = e[i].match(V); if (g) { e[i] = e[i].replace(ca, ""); a[e[i]] = []; f = e.slice(); f.splice(0, i + 1); g = f.join("."); if (h.isArray(d)) { j = 0; for (n = d.length; j < n; j++) f = {}, b(f, d[j], g), a[e[i]].push(f) } else a[e[i]] = d; return } j && (e[i] = e[i].replace(V,
                    ""), a = a[e[i]](d)); if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {}; a = a[e[i]]
                } if (f.match(V)) a[f.replace(V, "")](d); else a[f.replace(ca, "")] = d
            }; return function (c, d) { return b(c, d, a) }
        } return function (b, d) { b[a] = d }
    } function Ma(a) { return D(a.aoData, "_aData") } function pa(a) { a.aoData.length = 0; a.aiDisplayMaster.length = 0; a.aiDisplay.length = 0; a.aIds = {} } function qa(a, b, c) { for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; -1 != d && c === k && a.splice(d, 1) } function da(a, b, c, d)
    {
        var e = a.aoData[b], f, g = function (c, d)
        {
            for (; c.childNodes.length;) c.removeChild(c.firstChild);
            c.innerHTML = B(a, b, d, "display")
        }; if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ka(a, e, d, d === k ? k : e._aData).data; else { var j = e.anCells; if (j) if (d !== k) g(j[d], d); else { c = 0; for (f = j.length; c < f; c++) g(j[c], c) } } e._aSortData = null; e._aFilterData = null; g = a.aoColumns; if (d !== k) g[d].sType = null; else { c = 0; for (f = g.length; c < f; c++) g[c].sType = null; Na(a, e) }
    } function Ka(a, b, c, d)
    {
        var e = [], f = b.firstChild, g, j, i = 0, n, l = a.aoColumns, q = a._rowReadObject, d = d !== k ? d : q ? {} : [], r = function (a, b)
        {
            if ("string" === typeof a)
            {
                var c = a.indexOf("@");
                -1 !== c && (c = a.substring(c + 1), S(a)(d, b.getAttribute(c)))
            }
        }, m = function (a) { if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (S(j.mData._)(d, n), r(j.mData.sort, a), r(j.mData.type, a), r(j.mData.filter, a)) : q ? (j._setter || (j._setter = S(j.mData)), j._setter(d, n)) : d[i] = n; i++ }; if (f) for (; f;) { g = f.nodeName.toUpperCase(); if ("TD" == g || "TH" == g) m(f), e.push(f); f = f.nextSibling } else { e = b.anCells; f = 0; for (g = e.length; f < g; f++) m(e[f]) } if (b = b.firstChild ? b : b.nTr) (b = b.getAttribute("id")) && S(a.rowId)(d, b); return { data: d, cells: e }
    }
    function Ja(a, b, c, d)
    {
        var e = a.aoData[b], f = e._aData, g = [], j, i, n, l, q; if (null === e.nTr)
        {
            j = c || H.createElement("tr"); e.nTr = j; e.anCells = g; j._DT_RowIndex = b; Na(a, e); l = 0; for (q = a.aoColumns.length; l < q; l++)
            {
                n = a.aoColumns[l]; i = c ? d[l] : H.createElement(n.sCellType); i._DT_CellIndex = { row: b, column: l }; g.push(i); if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display"); n.sClass && (i.className += " " + n.sClass); n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
                n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
            } s(a, "aoRowCreatedCallback", null, [j, f, b])
        } e.nTr.setAttribute("role", "row")
    } function Na(a, b) { var c = b.nTr, d = b._aData; if (c) { var e = a.rowIdFn(d); e && (c.id = e); d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? sa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass)); d.DT_RowAttr && h(c).attr(d.DT_RowAttr); d.DT_RowData && h(c).data(d.DT_RowData) } } function mb(a)
    {
        var b, c, d, e, f, g = a.nTHead, j = a.nTFoot, i = 0 ===
        h("th, td", g).length, n = a.oClasses, l = a.aoColumns; i && (e = h("<tr/>").appendTo(g)); b = 0; for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, n); i && ea(a.aoHeader, g); h(g).find(">tr").attr("role", "row"); h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH); h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
        if (null !== j) { a = a.aoFooter[0]; b = 0; for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass) }
    } function fa(a, b, c)
    {
        var d, e, f, g = [], j = [], i = a.aoColumns.length, n; if (b)
        {
            c === k && (c = !1); d = 0; for (e = b.length; d < e; d++) { g[d] = b[d].slice(); g[d].nTr = b[d].nTr; for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1); j.push([]) } d = 0; for (e = g.length; d < e; d++)
            {
                if (a = g[d].nTr) for (; f = a.firstChild;) a.removeChild(f); f = 0; for (b = g[d].length; f < b; f++) if (n = i = 1, j[d][f] === k)
                {
                    a.appendChild(g[d][f].cell);
                    for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++; for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) { for (c = 0; c < i; c++) j[d + c][f + n] = 1; n++ } h(g[d][f].cell).attr("rowspan", i).attr("colspan", n)
                }
            }
        }
    } function O(a)
    {
        var b = s(a, "aoPreDrawCallback", "preDraw", [a]); if (-1 !== h.inArray(!1, b)) C(a, !1); else
        {
            var b = [], c = 0, d = a.asStripeClasses, e = d.length, f = a.oLanguage, g = a.iInitDisplayStart, j = "ssp" == y(a), i = a.aiDisplay; a.bDrawing = !0; g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart =
            -1); var g = a._iDisplayStart, n = a.fnDisplayEnd(); if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1); else if (j) { if (!a.bDestroying && !nb(a)) return } else a.iDraw++; if (0 !== i.length) { f = j ? a.aoData.length : n; for (j = j ? 0 : g; j < f; j++) { var l = i[j], q = a.aoData[l]; null === q.nTr && Ja(a, l); l = q.nTr; if (0 !== e) { var r = d[c % e]; q._sRowStripe != r && (h(l).removeClass(q._sRowStripe).addClass(r), q._sRowStripe = r) } s(a, "aoRowCallback", null, [l, q._aData, c, j]); b.push(l); c++ } } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords :
            f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", { "class": e ? d[0] : "" }).append(h("<td />", { valign: "top", colSpan: ba(a), "class": a.oClasses.sRowEmpty }).html(c))[0]; s(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, n, i]); s(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, n, i]); d = h(a.nTBody); d.children().detach(); d.append(h(b)); s(a, "aoDrawCallback", "draw", [a]); a.bSorted = !1; a.bFiltered = !1; a.bDrawing = !1
        }
    } function T(a, b)
    {
        var c = a.oFeatures, d = c.bFilter;
        c.bSort && ob(a); d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice(); !0 !== b && (a._iDisplayStart = 0); a._drawHold = b; O(a); a._drawHold = !1
    } function pb(a)
    {
        var b = a.oClasses, c = h(a.nTable), c = h("<div/>").insertBefore(c), d = a.oFeatures, e = h("<div/>", { id: a.sTableId + "_wrapper", "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter) }); a.nHolding = c[0]; a.nTableWrapper = e[0]; a.nTableReinsertBefore = a.nTable.nextSibling; for (var f = a.sDom.split(""), g, j, i, n, l, q, k = 0; k < f.length; k++)
        {
            g = null; j = f[k]; if ("<" == j)
            {
                i = h("<div/>")[0];
                n = f[k + 1]; if ("'" == n || '"' == n) { l = ""; for (q = 2; f[k + q] != n;) l += f[k + q], q++; "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); -1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l; k += q } e.append(i); e = h(i)
            } else if (">" == j) e = e.parent(); else if ("l" == j && d.bPaginate && d.bLengthChange) g = qb(a); else if ("f" == j && d.bFilter) g = rb(a); else if ("r" == j && d.bProcessing) g = sb(a); else if ("t" == j) g = tb(a); else if ("i" == j && d.bInfo) g = ub(a); else if ("p" ==
            j && d.bPaginate) g = vb(a); else if (0 !== m.ext.feature.length) { i = m.ext.feature; q = 0; for (n = i.length; q < n; q++) if (j == i[q].cFeature) { g = i[q].fnInit(a); break } } g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
        } c.replaceWith(e); a.nHolding = null
    } function ea(a, b)
    {
        var c = h(b).children("tr"), d, e, f, g, j, i, n, l, q, k; a.splice(0, a.length); f = 0; for (i = c.length; f < i; f++) a.push([]); f = 0; for (i = c.length; f < i; f++)
        {
            d = c[f]; for (e = d.firstChild; e;)
            {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase())
                {
                    l = 1 * e.getAttribute("colspan");
                    q = 1 * e.getAttribute("rowspan"); l = !l || 0 === l || 1 === l ? 1 : l; q = !q || 0 === q || 1 === q ? 1 : q; g = 0; for (j = a[f]; j[g];) g++; n = g; k = 1 === l ? !0 : !1; for (j = 0; j < l; j++) for (g = 0; g < q; g++) a[f + g][n + j] = { cell: e, unique: k }, a[f + g].nTr = d
                } e = e.nextSibling
            }
        }
    } function ta(a, b, c) { var d = []; c || (c = a.aoHeader, b && (c = [], ea(c, b))); for (var b = 0, e = c.length; b < e; b++) for (var f = 0, g = c[b].length; f < g; f++) if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell; return d } function ua(a, b, c)
    {
        s(a, "aoServerParams", "serverParams", [b]); if (b && h.isArray(b))
        {
            var d = {},
            e = /(.*?)\[\]$/; h.each(b, function (a, b) { var c = b.name.match(e); c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value }); b = d
        } var f, g = a.ajax, j = a.oInstance, i = function (b) { s(a, null, "xhr", [a, b, a.jqXHR]); c(b) }; if (h.isPlainObject(g) && g.data) { f = g.data; var n = h.isFunction(f) ? f(b, a) : f, b = h.isFunction(f) && n ? n : h.extend(!0, b, n); delete g.data } n = {
            data: b, success: function (b) { var c = b.error || b.sError; c && K(a, 0, c); a.json = b; i(b) }, dataType: "json", cache: !1, type: a.sServerMethod, error: function (b, c)
            {
                var d = s(a, null, "xhr",
                [a, null, a.jqXHR]); -1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7)); C(a, !1)
            }
        }; a.oAjaxData = b; s(a, null, "preXhr", [a, b]); a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) { return { name: b, value: a } }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, { url: g || a.sAjaxSource })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f)
    } function nb(a)
    {
        return a.bAjaxDataGet ? (a.iDraw++, C(a,
        !0), ua(a, wb(a), function (b) { xb(a, b) }), !1) : !0
    } function wb(a)
    {
        var b = a.aoColumns, c = b.length, d = a.oFeatures, e = a.oPreviousSearch, f = a.aoPreSearchCols, g, j = [], i, n, l, k = W(a); g = a._iDisplayStart; i = !1 !== d.bPaginate ? a._iDisplayLength : -1; var r = function (a, b) { j.push({ name: a, value: b }) }; r("sEcho", a.iDraw); r("iColumns", c); r("sColumns", D(b, "sName").join(",")); r("iDisplayStart", g); r("iDisplayLength", i); var ra = { draw: a.iDraw, columns: [], order: [], start: g, length: i, search: { value: e.sSearch, regex: e.bRegex } }; for (g = 0; g < c; g++) n = b[g],
        l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, ra.columns.push({ data: i, name: n.sName, searchable: n.bSearchable, orderable: n.bSortable, search: { value: l.sSearch, regex: l.bRegex } }), r("mDataProp_" + g, i), d.bFilter && (r("sSearch_" + g, l.sSearch), r("bRegex_" + g, l.bRegex), r("bSearchable_" + g, n.bSearchable)), d.bSort && r("bSortable_" + g, n.bSortable); d.bFilter && (r("sSearch", e.sSearch), r("bRegex", e.bRegex)); d.bSort && (h.each(k, function (a, b)
        {
            ra.order.push({ column: b.col, dir: b.dir }); r("iSortCol_" + a, b.col); r("sSortDir_" +
            a, b.dir)
        }), r("iSortingCols", k.length)); b = m.ext.legacy.ajax; return null === b ? a.sAjaxSource ? j : ra : b ? j : ra
    } function xb(a, b)
    {
        var c = va(a, b), d = b.sEcho !== k ? b.sEcho : b.draw, e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal, f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered; if (d) { if (1 * d < a.iDraw) return; a.iDraw = 1 * d } pa(a); a._iRecordsTotal = parseInt(e, 10); a._iRecordsDisplay = parseInt(f, 10); d = 0; for (e = c.length; d < e; d++) N(a, c[d]); a.aiDisplay = a.aiDisplayMaster.slice(); a.bAjaxDataGet = !1; O(a); a._bInitComplete ||
        wa(a, b); a.bAjaxDataGet = !0; C(a, !1)
    } function va(a, b) { var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp; return "data" === c ? b.aaData || b[c] : "" !== c ? R(c)(b) : b } function rb(a)
    {
        var b = a.oClasses, c = a.sTableId, d = a.oLanguage, e = a.oPreviousSearch, f = a.aanFeatures, g = '<input type="search" class="' + b.sFilterInput + '"/>', j = d.sSearch, j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g, b = h("<div/>", { id: !f.f ? c + "_filter" : null, "class": b.sFilter }).append(h("<label/>").append(j)), f = function ()
        {
            var b = !this.value ?
            "" : this.value; b != e.sSearch && (ga(a, { sSearch: b, bRegex: e.bRegex, bSmart: e.bSmart, bCaseInsensitive: e.bCaseInsensitive }), a._iDisplayStart = 0, O(a))
        }, g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0, i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Qa(f, g) : f).on("keypress.DT", function (a) { if (13 == a.keyCode) return !1 }).attr("aria-controls", c); h(a.nTable).on("search.dt.DT", function (b, c) { if (a === c) try { i[0] !== H.activeElement && i.val(e.sSearch) } catch (d) { } });
        return b[0]
    } function ga(a, b, c) { var d = a.oPreviousSearch, e = a.aoPreSearchCols, f = function (a) { d.sSearch = a.sSearch; d.bRegex = a.bRegex; d.bSmart = a.bSmart; d.bCaseInsensitive = a.bCaseInsensitive }; Ia(a); if ("ssp" != y(a)) { yb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive); f(b); for (b = 0; b < e.length; b++) zb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive); Ab(a) } else f(b); a.bFiltered = !0; s(a, null, "search", [a]) } function Ab(a)
    {
        for (var b =
        m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) { for (var j = [], i = 0, n = c.length; i < n; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e); c.length = 0; h.merge(c, j) }
    } function zb(a, b, c, d, e, f) { if ("" !== b) { for (var g = [], j = a.aiDisplay, d = Ra(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]); a.aiDisplay = g } } function yb(a, b, c, d, e, f)
    {
        var d = Ra(b, d, e, f), f = a.oPreviousSearch.sSearch, g = a.aiDisplayMaster, j, e = []; 0 !== m.ext.search.length && (c = !0); j = Bb(a); if (0 >= b.length) a.aiDisplay =
        g.slice(); else { if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice(); b = a.aiDisplay; for (c = 0; c < b.length; c++) d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]); a.aiDisplay = e }
    } function Ra(a, b, c, d) { a = b ? a : Sa(a); c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) { if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/), a = b ? b[1] : a; return a.replace('"', "") }).join(")(?=.*?") + ").*$"); return RegExp(a, d ? "i" : "") } function Bb(a)
    {
        var b = a.aoColumns, c, d, e, f, g, j, i, h, l = m.ext.type.search; c = !1;
        d = 0; for (f = a.aoData.length; d < f; d++) if (h = a.aoData[d], !h._aFilterData) { j = []; e = 0; for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (xa.innerHTML = i, i = $b ? xa.textContent : xa.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i); h._aFilterData = j; h._sFilterRow = j.join("  "); c = !0 } return c
    } function Cb(a)
    {
        return {
            search: a.sSearch, smart: a.bSmart, regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        }
    } function Db(a) { return { sSearch: a.search, bSmart: a.smart, bRegex: a.regex, bCaseInsensitive: a.caseInsensitive } } function ub(a) { var b = a.sTableId, c = a.aanFeatures.i, d = h("<div/>", { "class": a.oClasses.sInfo, id: !c ? b + "_info" : null }); c || (a.aoDrawCallback.push({ fn: Eb, sName: "information" }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info")); return d[0] } function Eb(a)
    {
        var b = a.aanFeatures.i; if (0 !== b.length)
        {
            var c = a.oLanguage, d = a._iDisplayStart +
            1, e = a.fnDisplayEnd(), f = a.fnRecordsTotal(), g = a.fnRecordsDisplay(), j = g ? c.sInfo : c.sInfoEmpty; g !== f && (j += " " + c.sInfoFiltered); j += c.sInfoPostFix; j = Fb(a, j); c = c.fnInfoCallback; null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j)); h(b).html(j)
        }
    } function Fb(a, b)
    {
        var c = a.fnFormatNumber, d = a._iDisplayStart + 1, e = a._iDisplayLength, f = a.fnRecordsDisplay(), g = -1 === e; return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a,
        f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
    } function ha(a)
    {
        var b, c, d = a.iInitDisplayStart, e = a.aoColumns, f; c = a.oFeatures; var g = a.bDeferLoading; if (a.bInitialised)
        {
            pb(a); mb(a); fa(a, a.aoHeader); fa(a, a.aoFooter); C(a, !0); c.bAutoWidth && Ha(a); b = 0; for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth)); s(a, null, "preInit", [a]); T(a); e = y(a); if ("ssp" != e || g) "ajax" == e ? ua(a, [], function (c)
            {
                var f = va(a, c); for (b = 0; b < f.length; b++) N(a, f[b]); a.iInitDisplayStart =
                d; T(a); C(a, !1); wa(a, c)
            }, a) : (C(a, !1), wa(a))
        } else setTimeout(function () { ha(a) }, 200)
    } function wa(a, b) { a._bInitComplete = !0; (b || a.oInit.aaData) && Z(a); s(a, null, "plugin-init", [a, b]); s(a, "aoInitComplete", "init", [a, b]) } function Ta(a, b) { var c = parseInt(b, 10); a._iDisplayLength = c; Ua(a); s(a, null, "length", [a, c]) } function qb(a)
    {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", { name: c + "_length", "aria-controls": c, "class": b.sLengthSelect }), g = 0, j = f.length; g < j; g++) e[0][g] =
        new Option(d[g], f[g]); var i = h("<div><label/></div>").addClass(b.sLength); a.aanFeatures.l || (i[0].id = c + "_length"); i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML)); h("select", i).val(a._iDisplayLength).on("change.DT", function () { Ta(a, h(this).val()); O(a) }); h(a.nTable).on("length.dt.DT", function (b, c, d) { a === c && h("select", i).val(d) }); return i[0]
    } function vb(a)
    {
        var b = a.sPaginationType, c = m.ext.pager[b], d = "function" === typeof c, e = function (a) { O(a) }, b = h("<div/>").addClass(a.oClasses.sPaging +
        b)[0], f = a.aanFeatures; d || c.fnInit(a, b, e); f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({ fn: function (a) { if (d) { var b = a._iDisplayStart, i = a._iDisplayLength, h = a.fnRecordsDisplay(), l = -1 === i, b = l ? 0 : Math.ceil(b / i), i = l ? 1 : Math.ceil(h / i), h = c(b, i), k, l = 0; for (k = f.p.length; l < k; l++) Pa(a, "pageButton")(a, f.p[l], l, h, b, i) } else c.fnUpdate(a, e) }, sName: "pagination" })); return b
    } function Va(a, b, c)
    {
        var d = a._iDisplayStart, e = a._iDisplayLength, f = a.fnRecordsDisplay(); 0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f &&
        (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5); b = a._iDisplayStart !== d; a._iDisplayStart = d; b && (s(a, null, "page", [a]), c && O(a)); return b
    } function sb(a) { return h("<div/>", { id: !a.aanFeatures.r ? a.sTableId + "_processing" : null, "class": a.oClasses.sProcessing }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0] } function C(a, b)
    {
        a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
        s(a, null, "processing", [a, b])
    } function tb(a)
    {
        var b = h(a.nTable); b.attr("role", "grid"); var c = a.oScroll; if ("" === c.sX && "" === c.sY) return a.nTable; var d = c.sX, e = c.sY, f = a.oClasses, g = b.children("caption"), j = g.length ? g[0]._captionSide : null, i = h(b[0].cloneNode(!1)), n = h(b[0].cloneNode(!1)), l = b.children("tfoot"); l.length || (l = null); i = h("<div/>", { "class": f.sScrollWrapper }).append(h("<div/>", { "class": f.sScrollHead }).css({ overflow: "hidden", position: "relative", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>",
        { "class": f.sScrollHeadInner }).css({ "box-sizing": "content-box", width: c.sXInner || "100%" }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", { "class": f.sScrollBody }).css({ position: "relative", overflow: "auto", width: !d ? null : v(d) }).append(b)); l && i.append(h("<div/>", { "class": f.sScrollFoot }).css({ overflow: "hidden", border: 0, width: d ? !d ? null : v(d) : "100%" }).append(h("<div/>", { "class": f.sScrollFootInner }).append(n.removeAttr("id").css("margin-left",
        0).append("bottom" === j ? g : null).append(b.children("tfoot"))))); var b = i.children(), k = b[0], f = b[1], r = l ? b[2] : null; if (d) h(f).on("scroll.DT", function () { var a = this.scrollLeft; k.scrollLeft = a; l && (r.scrollLeft = a) }); h(f).css(e && c.bCollapse ? "max-height" : "height", e); a.nScrollHead = k; a.nScrollBody = f; a.nScrollFoot = r; a.aoDrawCallback.push({ fn: ma, sName: "scrolling" }); return i[0]
    } function ma(a)
    {
        var b = a.oScroll, c = b.sX, d = b.sXInner, e = b.sY, b = b.iBarWidth, f = h(a.nScrollHead), g = f[0].style, j = f.children("div"), i = j[0].style, n = j.children("table"),
        j = a.nScrollBody, l = h(j), q = j.style, r = h(a.nScrollFoot).children("div"), m = r.children("table"), p = h(a.nTHead), o = h(a.nTable), t = o[0], s = t.style, u = a.nTFoot ? h(a.nTFoot) : null, x = a.oBrowser, U = x.bScrollOversize, ac = D(a.aoColumns, "nTh"), P, L, Q, w, Wa = [], y = [], z = [], A = [], B, C = function (a) { a = a.style; a.paddingTop = "0"; a.paddingBottom = "0"; a.borderTopWidth = "0"; a.borderBottomWidth = "0"; a.height = 0 }; L = j.scrollHeight > j.clientHeight; if (a.scrollBarVis !== L && a.scrollBarVis !== k) a.scrollBarVis = L, Z(a); else
        {
            a.scrollBarVis = L; o.children("thead, tfoot").remove();
            u && (Q = u.clone().prependTo(o), P = u.find("tr"), Q = Q.find("tr")); w = p.clone().prependTo(o); p = p.find("tr"); L = w.find("tr"); w.find("th, td").removeAttr("tabindex"); c || (q.width = "100%", f[0].style.width = "100%"); h.each(ta(a, w), function (b, c) { B = $(a, b); c.style.width = a.aoColumns[B].sWidth }); u && I(function (a) { a.style.width = "" }, Q); f = o.outerWidth(); if ("" === c) { s.width = "100%"; if (U && (o.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(o.outerWidth() - b); f = o.outerWidth() } else "" !== d && (s.width =
            v(d), f = o.outerWidth()); I(C, L); I(function (a) { z.push(a.innerHTML); Wa.push(v(h(a).css("width"))) }, L); I(function (a, b) { if (h.inArray(a, ac) !== -1) a.style.width = Wa[b] }, p); h(L).height(0); u && (I(C, Q), I(function (a) { A.push(a.innerHTML); y.push(v(h(a).css("width"))) }, Q), I(function (a, b) { a.style.width = y[b] }, P), h(Q).height(0)); I(function (a, b) { a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[b] + "</div>"; a.style.width = Wa[b] }, L); u && I(function (a, b)
            {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
                A[b] + "</div>"; a.style.width = y[b]
            }, Q); if (o.outerWidth() < f) { P = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f; if (U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(P - b); ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6) } else P = "100%"; q.width = v(P); g.width = v(P); u && (a.nScrollFoot.style.width = v(P)); !e && U && (q.height = v(t.offsetHeight + b)); c = o.outerWidth(); n[0].style.width = v(c); i.width = v(c); d = o.height() > j.clientHeight || "scroll" == l.css("overflow-y"); e = "padding" +
            (x.bScrollbarLeft ? "Left" : "Right"); i[e] = d ? b + "px" : "0px"; u && (m[0].style.width = v(c), r[0].style.width = v(c), r[0].style[e] = d ? b + "px" : "0px"); o.children("colgroup").insertBefore(o.children("thead")); l.scroll(); if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
        }
    } function I(a, b, c) { for (var d = 0, e = 0, f = b.length, g, j; e < f;) { g = b[e].firstChild; for (j = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null; e++ } } function Ha(a)
    {
        var b = a.nTable, c = a.aoColumns, d = a.oScroll,
        e = d.sY, f = d.sX, g = d.sXInner, j = c.length, i = na(a, "bVisible"), n = h("th", a.nTHead), l = b.getAttribute("width"), k = b.parentNode, r = !1, m, p, o = a.oBrowser, d = o.bScrollOversize; (m = b.style.width) && -1 !== m.indexOf("%") && (l = m); for (m = 0; m < i.length; m++) p = c[i[m]], null !== p.sWidth && (p.sWidth = Gb(p.sWidthOrig, k), r = !0); if (d || !r && !f && !e && j == ba(a) && j == n.length) for (m = 0; m < j; m++) i = $(a, m), null !== i && (c[i].sWidth = v(n.eq(m).width())); else
        {
            j = h(b).clone().css("visibility", "hidden").removeAttr("id"); j.find("tbody tr").remove(); var t = h("<tr/>").appendTo(j.find("tbody"));
            j.find("thead, tfoot").remove(); j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone()); j.find("tfoot th, tfoot td").css("width", ""); n = ta(a, j.find("thead")[0]); for (m = 0; m < i.length; m++) p = c[i[m]], n[m].style.width = null !== p.sWidthOrig && "" !== p.sWidthOrig ? v(p.sWidthOrig) : "", p.sWidthOrig && f && h(n[m]).append(h("<div/>").css({ width: p.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 })); if (a.aoData.length) for (m = 0; m < i.length; m++) r = i[m], p = c[r], h(Hb(a, r)).clone(!1).append(p.sContentPadding).appendTo(t); h("[name]",
            j).removeAttr("name"); p = h("<div/>").css(f || e ? { position: "absolute", top: 0, left: 0, height: 1, right: 0, overflow: "hidden" } : {}).append(j).appendTo(k); f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l); for (m = e = 0; m < i.length; m++) k = h(n[m]), g = k.outerWidth() - k.width(), k = o.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = v(k - g); b.style.width = v(e); p.remove()
        } l && (b.style.width =
        v(l)); if ((l || f) && !a._reszEvt) b = function () { h(E).on("resize.DT-" + a.sInstance, Qa(function () { Z(a) })) }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    } function Gb(a, b) { if (!a) return 0; var c = h("<div/>").css("width", v(a)).appendTo(b || H.body), d = c[0].offsetWidth; c.remove(); return d } function Hb(a, b) { var c = Ib(a, b); if (0 > c) return null; var d = a.aoData[c]; return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b] } function Ib(a, b)
    {
        for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace(bc,
        ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f); return e
    } function v(a) { return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a } function W(a)
    {
        var b, c, d = [], e = a.aoColumns, f, g, j, i; b = a.aaSortingFixed; c = h.isPlainObject(b); var n = []; f = function (a) { a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a) }; h.isArray(b) && f(b); c && b.pre && f(b.pre); f(a.aaSorting); c && b.post && f(b.post); for (a = 0; a < n.length; a++)
        {
            i = n[a][0]; f = e[i].aDataSort; b = 0; for (c = f.length; b < c; b++) g = f[b], j = e[g].sType ||
            "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({ src: i, col: g, dir: n[a][1], index: n[a]._idx, type: j, formatter: m.ext.type.order[j + "-pre"] })
        } return d
    } function ob(a)
    {
        var b, c, d = [], e = m.ext.type.order, f = a.aoData, g = 0, j, i = a.aiDisplayMaster, h; Ia(a); h = W(a); b = 0; for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Jb(a, j.col); if ("ssp" != y(a) && 0 !== h.length)
        {
            b = 0; for (c = i.length; b < c; b++) d[i[b]] = b; g === h.length ? i.sort(function (a, b)
            {
                var c, e, g, j, i = h.length, k = f[a]._aSortData, m = f[b]._aSortData; for (g =
                0; g < i; g++) if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c; c = d[a]; e = d[b]; return c < e ? -1 : c > e ? 1 : 0
            }) : i.sort(function (a, b) { var c, g, j, i, k = h.length, m = f[a]._aSortData, p = f[b]._aSortData; for (j = 0; j < k; j++) if (i = h[j], c = m[i.col], g = p[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c; c = d[a]; g = d[b]; return c < g ? -1 : c > g ? 1 : 0 })
        } a.bSorted = !0
    } function Kb(a)
    {
        for (var b, c, d = a.aoColumns, e = W(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++)
        {
            c = d[f]; var j = c.asSorting; b = c.sTitle.replace(/<.*?>/g,
            ""); var i = c.nTh; i.removeAttribute("aria-sort"); c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending); i.setAttribute("aria-label", b)
        }
    } function Xa(a, b, c, d)
    {
        var e = a.aaSorting, f = a.aoColumns[b].asSorting, g = function (a, b) { var c = a._idx; c === k && (c = h.inArray(a[1], f)); return c + 1 < f.length ? c + 1 : b ? null : 0 }; "number" === typeof e[0] && (e = a.aaSorting = [e]); c && a.oFeatures.bSortMulti ? (c = h.inArray(b,
        D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0); T(a); "function" == typeof d && d(a)
    } function Oa(a, b, c, d) { var e = a.aoColumns[c]; Ya(b, {}, function (b) { !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () { Xa(a, c, b.shiftKey, d); "ssp" !== y(a) && C(a, !1) }, 0)) : Xa(a, c, b.shiftKey, d)) }) }
    function ya(a) { var b = a.aLastSort, c = a.oClasses.sSortColumn, d = W(a), e = a.oFeatures, f, g; if (e.bSort && e.bSortClasses) { e = 0; for (f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3)); e = 0; for (f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3)) } a.aLastSort = d } function Jb(a, b)
    {
        var c = a.aoColumns[b], d = m.ext.order[c.sSortDataType], e; d && (e = d.call(a.oInstance, a, b, aa(a, b))); for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++) if (c = a.aoData[j],
        c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
    } function za(a)
    {
        if (a.oFeatures.bStateSave && !a.bDestroying)
        {
            var b = { time: +new Date, start: a._iDisplayStart, length: a._iDisplayLength, order: h.extend(!0, [], a.aaSorting), search: Cb(a.oPreviousSearch), columns: h.map(a.aoColumns, function (b, d) { return { visible: b.bVisible, search: Cb(a.aoPreSearchCols[d]) } }) }; s(a, "aoStateSaveParams", "stateSaveParams", [a, b]); a.oSavedState = b; a.fnStateSaveCallback.call(a.oInstance, a,
            b)
        }
    } function Lb(a, b, c)
    {
        var d, e, f = a.aoColumns, b = function (b)
        {
            if (b && b.time)
            {
                var g = s(a, "aoStateLoadParams", "stateLoadParams", [a, b]); if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date - 1E3 * g) && !(b.columns && f.length !== b.columns.length)))
                {
                    a.oLoadedState = h.extend(!0, {}, b); b.start !== k && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start); b.length !== k && (a._iDisplayLength = b.length); b.order !== k && (a.aaSorting = [], h.each(b.order, function (b, c) { a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c) })); b.search !==
                    k && h.extend(a.oPreviousSearch, Db(b.search)); if (b.columns) { d = 0; for (e = b.columns.length; d < e; d++) g = b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Db(g.search)) } s(a, "aoStateLoaded", "stateLoaded", [a, b])
                }
            } c()
        }; if (a.oFeatures.bStateSave) { var g = a.fnStateLoadCallback.call(a.oInstance, a, b); g !== k && b(g) } else c()
    } function Aa(a) { var b = m.settings, a = h.inArray(a, D(b, "nTable")); return -1 !== a ? b[a] : null } function K(a, b, c, d)
    {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId +
        " - " : "") + c; d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d); if (b) E.console && console.log && console.log(c); else if (b = m.ext, b = b.sErrMode || b.errMode, a && s(a, null, "error", [a, d, c]), "alert" == b) alert(c); else { if ("throw" == b) throw Error(c); "function" == typeof b && b(a, d, c) }
    } function F(a, b, c, d) { h.isArray(c) ? h.each(c, function (c, d) { h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d) }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c])) } function Mb(a, b, c)
    {
        var d, e; for (e in b) b.hasOwnProperty(e) && (d = b[e],
        h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d); return a
    } function Ya(a, b, c) { h(a).on("click.DT", b, function (b) { a.blur(); c(b) }).on("keypress.DT", b, function (a) { 13 === a.which && (a.preventDefault(), c(a)) }).on("selectstart.DT", function () { return !1 }) } function z(a, b, c, d) { c && a[b].push({ fn: c, sName: d }) } function s(a, b, c, d)
    {
        var e = []; b && (e = h.map(a[b].slice().reverse(), function (b) { return b.fn.apply(a.oInstance, d) })); null !== c && (b = h.Event(c +
        ".dt"), h(a.nTable).trigger(b, d), e.push(b.result)); return e
    } function Ua(a) { var b = a._iDisplayStart, c = a.fnDisplayEnd(), d = a._iDisplayLength; b >= c && (b = c - d); b -= b % d; if (-1 === d || 0 > b) b = 0; a._iDisplayStart = b } function Pa(a, b) { var c = a.renderer, d = m.ext.renderer[b]; return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._ } function y(a) { return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom" } function ia(a, b)
    {
        var c = [], c = Nb.numbers_length, d = Math.floor(c / 2); b <= c ? c = X(0, b) : a <= d ? (c = X(0,
        c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = X(b - (c - 2), b) : (c = X(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0)); c.DT_el = "span"; return c
    } function fb(a) { h.each({ num: function (b) { return Ba(b, a) }, "num-fmt": function (b) { return Ba(b, a, Za) }, "html-num": function (b) { return Ba(b, a, Ca) }, "html-num-fmt": function (b) { return Ba(b, a, Ca, Za) } }, function (b, c) { x.type.order[b + a + "-pre"] = c; b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html) }) } function Ob(a)
    {
        return function ()
        {
            var b =
            [Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments)); return m.ext.internal[a].apply(this, b)
        }
    } var m = function (a)
    {
        this.$ = function (a, b) { return this.api(!0).$(a, b) }; this._ = function (a, b) { return this.api(!0).rows(a, b).data() }; this.api = function (a) { return a ? new t(Aa(this[x.iApiIndex])) : new t(this) }; this.fnAddData = function (a, b) { var c = this.api(!0), d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a); (b === k || b) && c.draw(); return d.flatten().toArray() }; this.fnAdjustColumnSizing =
        function (a) { var b = this.api(!0).columns.adjust(), c = b.settings()[0], d = c.oScroll; a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ma(c) }; this.fnClearTable = function (a) { var b = this.api(!0).clear(); (a === k || a) && b.draw() }; this.fnClose = function (a) { this.api(!0).row(a).child.hide() }; this.fnDeleteRow = function (a, b, c) { var d = this.api(!0), a = d.rows(a), e = a.settings()[0], h = e.aoData[a[0][0]]; a.remove(); b && b.call(this, e, h); (c === k || c) && d.draw(); return h }; this.fnDestroy = function (a) { this.api(!0).destroy(a) }; this.fnDraw = function (a) { this.api(!0).draw(a) };
        this.fnFilter = function (a, b, c, d, e, h) { e = this.api(!0); null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h); e.draw() }; this.fnGetData = function (a, b) { var c = this.api(!0); if (a !== k) { var d = a.nodeName ? a.nodeName.toLowerCase() : ""; return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null } return c.data().toArray() }; this.fnGetNodes = function (a) { var b = this.api(!0); return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray() }; this.fnGetPosition = function (a)
        {
            var b = this.api(!0), c = a.nodeName.toUpperCase();
            return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
        }; this.fnIsOpen = function (a) { return this.api(!0).row(a).child.isShown() }; this.fnOpen = function (a, b, c) { return this.api(!0).row(a).child(b, c).show().child()[0] }; this.fnPageChange = function (a, b) { var c = this.api(!0).page(a); (b === k || b) && c.draw(!1) }; this.fnSetColumnVis = function (a, b, c) { a = this.api(!0).column(a).visible(b); (c === k || c) && a.columns.adjust().draw() }; this.fnSettings = function () { return Aa(this[x.iApiIndex]) };
        this.fnSort = function (a) { this.api(!0).order(a).draw() }; this.fnSortListener = function (a, b, c) { this.api(!0).order.listener(a, b, c) }; this.fnUpdate = function (a, b, c, d, e) { var h = this.api(!0); c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a); (e === k || e) && h.columns.adjust(); (d === k || d) && h.draw(); return 0 }; this.fnVersionCheck = x.fnVersionCheck; var b = this, c = a === k, d = this.length; c && (a = {}); this.oApi = this.internal = x.internal; for (var e in m.ext.internal) e && (this[e] = Ob(e)); this.each(function ()
        {
            var e = {}, g = 1 < d ? Mb(e, a, !0) :
            a, j = 0, i, e = this.getAttribute("id"), n = !1, l = m.defaults, q = h(this); if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2); else
            {
                gb(l); hb(l.column); J(l, l, !0); J(l.column, l.column, !0); J(l, h.extend(g, q.data())); var r = m.settings, j = 0; for (i = r.length; j < i; j++)
                {
                    var p = r[j]; if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this)
                    {
                        var t = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve; if (c || t) return p.oInstance; if (g.bDestroy !== k ? g.bDestroy : l.bDestroy)
                        {
                            p.oInstance.fnDestroy();
                            break
                        } else
                        { K(p, 0, "Cannot reinitialise DataTable", 3); return }
                    } if (p.sTableId == this.id) { r.splice(j, 1); break }
                } if (null === e || "" === e) this.id = e = "DataTables_Table_" + m.ext._unique++; var o = h.extend(!0, {}, m.models.oSettings, { sDestroyWidth: q[0].style.width, sInstance: e, sTableId: e }); o.nTable = this; o.oApi = b.internal; o.oInit = g; r.push(o); o.oInstance = 1 === b.length ? b : q.dataTable(); gb(g); g.oLanguage && Fa(g.oLanguage); g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                g = Mb(h.extend(!0, {}, l), g); F(o.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")); F(o, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]); F(o.oScroll, g, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]); F(o.oLanguage, g, "fnInfoCallback"); z(o, "aoDrawCallback", g.fnDrawCallback, "user"); z(o, "aoServerParams", g.fnServerParams, "user"); z(o, "aoStateSaveParams", g.fnStateSaveParams, "user"); z(o, "aoStateLoadParams", g.fnStateLoadParams, "user"); z(o, "aoStateLoaded", g.fnStateLoaded,
                "user"); z(o, "aoRowCallback", g.fnRowCallback, "user"); z(o, "aoRowCreatedCallback", g.fnCreatedRow, "user"); z(o, "aoHeaderCallback", g.fnHeaderCallback, "user"); z(o, "aoFooterCallback", g.fnFooterCallback, "user"); z(o, "aoInitComplete", g.fnInitComplete, "user"); z(o, "aoPreDrawCallback", g.fnPreDrawCallback, "user"); o.rowIdFn = R(g.rowId); ib(o); var u = o.oClasses; g.bJQueryUI ? (h.extend(u, m.ext.oJUIClasses, g.oClasses), g.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? h.isPlainObject(o.renderer) &&
                !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : h.extend(u, m.ext.classes, g.oClasses); q.addClass(u.sTable); o.iInitDisplayStart === k && (o.iInitDisplayStart = g.iDisplayStart, o._iDisplayStart = g.iDisplayStart); null !== g.iDeferLoading && (o.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), o._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, o._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading); var v = o.oLanguage; h.extend(!0, v, g.oLanguage); v.sUrl && (h.ajax({
                    dataType: "json", url: v.sUrl, success: function (a)
                    {
                        Fa(a);
                        J(l.oLanguage, a); h.extend(true, v, a); ha(o)
                    }, error: function () { ha(o) }
                }), n = !0); null === g.asStripeClasses && (o.asStripeClasses = [u.sStripeOdd, u.sStripeEven]); var e = o.asStripeClasses, x = q.children("tbody").find("tr").eq(0); -1 !== h.inArray(!0, h.map(e, function (a) { return x.hasClass(a) })) && (h("tbody tr", this).removeClass(e.join(" ")), o.asDestroyStripes = e.slice()); e = []; r = this.getElementsByTagName("thead"); 0 !== r.length && (ea(o.aoHeader, r[0]), e = ta(o)); if (null === g.aoColumns) { r = []; j = 0; for (i = e.length; j < i; j++) r.push(null) } else r =
                g.aoColumns; j = 0; for (i = r.length; j < i; j++) Ga(o, e ? e[j] : null); kb(o, g.aoColumnDefs, r, function (a, b) { la(o, a, b) }); if (x.length) { var w = function (a, b) { return a.getAttribute("data-" + b) !== null ? b : null }; h(x[0]).children("th, td").each(function (a, b) { var c = o.aoColumns[a]; if (c.mData === a) { var d = w(b, "sort") || w(b, "order"), e = w(b, "filter") || w(b, "search"); if (d !== null || e !== null) { c.mData = { _: a + ".display", sort: d !== null ? a + ".@data-" + d : k, type: d !== null ? a + ".@data-" + d : k, filter: e !== null ? a + ".@data-" + e : k }; la(o, a) } } }) } var U = o.oFeatures,
                e = function ()
                {
                    if (g.aaSorting === k) { var a = o.aaSorting; j = 0; for (i = a.length; j < i; j++) a[j][1] = o.aoColumns[j].asSorting[0] } ya(o); U.bSort && z(o, "aoDrawCallback", function () { if (o.bSorted) { var a = W(o), b = {}; h.each(a, function (a, c) { b[c.src] = c.dir }); s(o, null, "order", [o, a, b]); Kb(o) } }); z(o, "aoDrawCallback", function () { (o.bSorted || y(o) === "ssp" || U.bDeferRender) && ya(o) }, "sc"); var a = q.children("caption").each(function () { this._captionSide = h(this).css("caption-side") }), b = q.children("thead"); b.length === 0 && (b = h("<thead/>").appendTo(q));
                    o.nTHead = b[0]; b = q.children("tbody"); b.length === 0 && (b = h("<tbody/>").appendTo(q)); o.nTBody = b[0]; b = q.children("tfoot"); if (b.length === 0 && a.length > 0 && (o.oScroll.sX !== "" || o.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q); if (b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter); else if (b.length > 0) { o.nTFoot = b[0]; ea(o.aoFooter, o.nTFoot) } if (g.aaData) for (j = 0; j < g.aaData.length; j++) N(o, g.aaData[j]); else (o.bDeferLoading || y(o) == "dom") && oa(o, h(o.nTBody).children("tr")); o.aiDisplay = o.aiDisplayMaster.slice();
                    o.bInitialised = true; n === false && ha(o)
                }; g.bStateSave ? (U.bStateSave = !0, z(o, "aoDrawCallback", za, "state_save"), Lb(o, g, e)) : e()
            }
        }); b = null; return this
    }, x, t, p, u, $a = {}, Pb = /[\r\n]/g, Ca = /<.*?>/g, cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, dc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"), Za = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi, M = function (a) { return !a || !0 === a || "-" === a ? !0 : !1 }, Qb = function (a)
    {
        var b = parseInt(a, 10); return !isNaN(b) &&
        isFinite(a) ? b : null
    }, Rb = function (a, b) { $a[b] || ($a[b] = RegExp(Sa(b), "g")); return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace($a[b], ".") : a }, ab = function (a, b, c) { var d = "string" === typeof a; if (M(a)) return !0; b && d && (a = Rb(a, b)); c && d && (a = a.replace(Za, "")); return !isNaN(parseFloat(a)) && isFinite(a) }, Sb = function (a, b, c) { return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : ab(a.replace(Ca, ""), b, c) ? !0 : null }, D = function (a, b, c)
    {
        var d = [], e = 0, f = a.length; if (c !== k) for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]); else for (; e <
        f; e++) a[e] && d.push(a[e][b]); return d
    }, ja = function (a, b, c, d) { var e = [], f = 0, g = b.length; if (d !== k) for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]); else for (; f < g; f++) e.push(a[b[f]][c]); return e }, X = function (a, b) { var c = [], d; b === k ? (b = 0, d = a) : (d = b, b = a); for (var e = b; e < d; e++) c.push(e); return c }, Tb = function (a) { for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]); return b }, sa = function (a)
    {
        var b; a: { if (!(2 > a.length)) { b = a.slice().sort(); for (var c = b[0], d = 1, e = b.length; d < e; d++) { if (b[d] === c) { b = !1; break a } c = b[d] } } b = !0 } if (b) return a.slice();
        b = []; var e = a.length, f, g = 0, d = 0; a: for (; d < e; d++) { c = a[d]; for (f = 0; f < g; f++) if (b[f] === c) continue a; b.push(c); g++ } return b
    }; m.util = { throttle: function (a, b) { var c = b !== k ? b : 200, d, e; return function () { var b = this, g = +new Date, h = arguments; d && g < d + c ? (clearTimeout(e), e = setTimeout(function () { d = k; a.apply(b, h) }, c)) : (d = g, a.apply(b, h)) } }, escapeRegex: function (a) { return a.replace(dc, "\\$1") } }; var A = function (a, b, c) { a[b] !== k && (a[c] = a[b]) }, ca = /\[.*?\]$/, V = /\(\)$/, Sa = m.util.escapeRegex, xa = h("<div>")[0], $b = xa.textContent !== k, bc =
    /<.*?>/g, Qa = m.util.throttle, Ub = [], w = Array.prototype, ec = function (a) { var b, c, d = m.settings, e = h.map(d, function (a) { return a.nTable }); if (a) { if (a.nTable && a.oApi) return [a]; if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null; if (a && "function" === typeof a.settings) return a.settings().toArray(); "string" === typeof a ? c = h(a) : a instanceof h && (c = a) } else return []; if (c) return c.map(function () { b = h.inArray(this, e); return -1 !== b ? d[b] : null }).toArray() }; t = function (a, b)
    {
        if (!(this instanceof
        t)) return new t(a, b); var c = [], d = function (a) { (a = ec(a)) && (c = c.concat(a)) }; if (h.isArray(a)) for (var e = 0, f = a.length; e < f; e++) d(a[e]); else d(a); this.context = sa(c); b && h.merge(this, b); this.selector = { rows: null, cols: null, opts: null }; t.extend(this, this, Ub)
    }; m.Api = t; h.extend(t.prototype, {
        any: function () { return 0 !== this.count() }, concat: w.concat, context: [], count: function () { return this.flatten().length }, each: function (a) { for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this); return this }, eq: function (a)
        {
            var b =
            this.context; return b.length > a ? new t(b[a], this[a]) : null
        }, filter: function (a) { var b = []; if (w.filter) b = w.filter.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]); return new t(this.context, b) }, flatten: function () { var a = []; return new t(this.context, a.concat.apply(a, this.toArray())) }, join: w.join, indexOf: w.indexOf || function (a, b) { for (var c = b || 0, d = this.length; c < d; c++) if (this[c] === a) return c; return -1 }, iterator: function (a, b, c, d)
        {
            var e = [], f, g, h, i, n, l = this.context,
            m, p, u = this.selector; "string" === typeof a && (d = c, c = b, b = a, a = !1); g = 0; for (h = l.length; g < h; g++) { var s = new t(l[g]); if ("table" === b) f = c.call(s, l[g], g), f !== k && e.push(f); else if ("columns" === b || "rows" === b) f = c.call(s, l[g], this[g], g), f !== k && e.push(f); else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) { p = this[g]; "column-rows" === b && (m = Da(l[g], u.opts)); i = 0; for (n = p.length; i < n; i++) f = p[i], f = "cell" === b ? c.call(s, l[g], f.row, f.column, g, i) : c.call(s, l[g], f, g, i, m), f !== k && e.push(f) } } return e.length || d ? (a = new t(l, a ?
            e.concat.apply([], e) : e), b = a.selector, b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this
        }, lastIndexOf: w.lastIndexOf || function (a, b) { return this.indexOf.apply(this.toArray.reverse(), arguments) }, length: 0, map: function (a) { var b = []; if (w.map) b = w.map.call(this, a, this); else for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c)); return new t(this.context, b) }, pluck: function (a) { return this.map(function (b) { return b[a] }) }, pop: w.pop, push: w.push, reduce: w.reduce || function (a, b)
        {
            return jb(this, a, b, 0, this.length,
            1)
        }, reduceRight: w.reduceRight || function (a, b) { return jb(this, a, b, this.length - 1, -1, -1) }, reverse: w.reverse, selector: null, shift: w.shift, slice: function () { return new t(this.context, this) }, sort: w.sort, splice: w.splice, toArray: function () { return w.slice.call(this) }, to$: function () { return h(this) }, toJQuery: function () { return h(this) }, unique: function () { return new t(this.context, sa(this)) }, unshift: w.unshift
    }); t.extend = function (a, b, c)
    {
        if (c.length && b && (b instanceof t || b.__dt_wrapper))
        {
            var d, e, f, g = function (a, b, c)
            {
                return function ()
                {
                    var d =
                    b.apply(a, arguments); t.extend(d, d, c.methodExt); return d
                }
            }; d = 0; for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, t.extend(a, b[f.name], f.propExt)
        }
    }; t.register = p = function (a, b)
    {
        if (h.isArray(a)) for (var c = 0, d = a.length; c < d; c++) t.register(a[c], b); else for (var e = a.split("."), f = Ub, g, j, c = 0, d = e.length; c < d; c++)
            {
            g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c]; var i; a: {
                i = 0; for (var n = f.length; i < n; i++) if (f[i].name === g)
                {
                    i =
                    f[i]; break a
                } i = null
            } i || (i = { name: g, val: {}, methodExt: [], propExt: [] }, f.push(i)); c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
        }
    }; t.registerPlural = u = function (a, b, c) { t.register(a, c); t.register(b, function () { var a = c.apply(this, arguments); return a === this ? this : a instanceof t ? a.length ? h.isArray(a[0]) ? new t(a.context, a[0]) : a[0] : k : a }) }; p("tables()", function (a)
    {
        var b; if (a)
        {
            b = t; var c = this.context; if ("number" === typeof a) a = [c[a]]; else var d = h.map(c, function (a) { return a.nTable }), a = h(d).filter(a).map(function ()
            {
                var a = h.inArray(this,
                d); return c[a]
            }).toArray(); b = new b(a)
        } else b = this; return b
    }); p("table()", function (a) { var a = this.tables(a), b = a.context; return b.length ? new t(b[0]) : a }); u("tables().nodes()", "table().node()", function () { return this.iterator("table", function (a) { return a.nTable }, 1) }); u("tables().body()", "table().body()", function () { return this.iterator("table", function (a) { return a.nTBody }, 1) }); u("tables().header()", "table().header()", function () { return this.iterator("table", function (a) { return a.nTHead }, 1) }); u("tables().footer()",
    "table().footer()", function () { return this.iterator("table", function (a) { return a.nTFoot }, 1) }); u("tables().containers()", "table().container()", function () { return this.iterator("table", function (a) { return a.nTableWrapper }, 1) }); p("draw()", function (a) { return this.iterator("table", function (b) { "page" === a ? O(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a)) }) }); p("page()", function (a) { return a === k ? this.page.info().page : this.iterator("table", function (b) { Va(b, a) }) }); p("page.info()", function ()
    {
        if (0 ===
        this.context.length) return k; var a = this.context[0], b = a._iDisplayStart, c = a.oFeatures.bPaginate ? a._iDisplayLength : -1, d = a.fnRecordsDisplay(), e = -1 === c; return { page: e ? 0 : Math.floor(b / c), pages: e ? 1 : Math.ceil(d / c), start: b, end: a.fnDisplayEnd(), length: c, recordsTotal: a.fnRecordsTotal(), recordsDisplay: d, serverSide: "ssp" === y(a) }
    }); p("page.len()", function (a) { return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) { Ta(b, a) }) }); var Vb = function (a, b, c)
    {
        if (c)
        {
            var d = new t(a);
            d.one("draw", function () { c(d.ajax.json()) })
        } if ("ssp" == y(a)) T(a, b); else { C(a, !0); var e = a.jqXHR; e && 4 !== e.readyState && e.abort(); ua(a, [], function (c) { pa(a); for (var c = va(a, c), d = 0, e = c.length; d < e; d++) N(a, c[d]); T(a, b); C(a, !1) }) }
    }; p("ajax.json()", function () { var a = this.context; if (0 < a.length) return a[0].json }); p("ajax.params()", function () { var a = this.context; if (0 < a.length) return a[0].oAjaxData }); p("ajax.reload()", function (a, b) { return this.iterator("table", function (c) { Vb(c, !1 === b, a) }) }); p("ajax.url()", function (a)
    {
        var b =
        this.context; if (a === k) { if (0 === b.length) return k; b = b[0]; return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource } return this.iterator("table", function (b) { h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a })
    }); p("ajax.url().load()", function (a, b) { return this.iterator("table", function (c) { Vb(c, !1 === b, a) }) }); var bb = function (a, b, c, d, e)
    {
        var f = [], g, j, i, n, l, m; i = typeof b; if (!b || "string" === i || "function" === i || b.length === k) b = [b]; i = 0; for (n = b.length; i < n; i++)
        {
            j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") :
            [b[i]]; l = 0; for (m = j.length; l < m; l++) (g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g))
        } a = x.selector[a]; if (a.length) { i = 0; for (n = a.length; i < n; i++) f = a[i](d, e, f) } return sa(f)
    }, cb = function (a) { a || (a = {}); a.filter && a.search === k && (a.search = a.filter); return h.extend({ search: "none", order: "current", page: "all" }, a) }, db = function (a) { for (var b = 0, c = a.length; b < c; b++) if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a; a.length = 0; return a }, Da = function (a, b)
    {
        var c,
        d, e, f = [], g = a.aiDisplay; c = a.aiDisplayMaster; var j = b.search; d = b.order; e = b.page; if ("ssp" == y(a)) return "removed" === j ? [] : X(0, c.length); if ("current" == e) { c = a._iDisplayStart; for (d = a.fnDisplayEnd() ; c < d; c++) f.push(g[c]) } else if ("current" == d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function (a) { return -1 === h.inArray(a, g) ? a : null }); else if ("index" == d || "original" == d) { c = 0; for (d = a.aoData.length; c < d; c++) "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c)) } return f
    };
    p("rows()", function (a, b)
    {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = ""); var b = cb(b), c = this.iterator("table", function (c)
        {
            var e = b, f; return bb("row", a, function (a)
            {
                var b = Qb(a); if (b !== null && !e) return [b]; f || (f = Da(c, e)); if (b !== null && h.inArray(b, f) !== -1) return [b]; if (a === null || a === k || a === "") return f; if (typeof a === "function") return h.map(f, function (b) { var e = c.aoData[b]; return a(b, e._aData, e.nTr) ? b : null }); b = Tb(ja(c.aoData, f, "nTr")); if (a.nodeName)
                {
                    if (a._DT_RowIndex !== k) return [a._DT_RowIndex]; if (a._DT_CellIndex) return [a._DT_CellIndex.row];
                    b = h(a).closest("*[data-dt-row]"); return b.length ? [b.data("dt-row")] : []
                } if (typeof a === "string" && a.charAt(0) === "#") { var i = c.aIds[a.replace(/^#/, "")]; if (i !== k) return [i.idx] } return h(b).filter(a).map(function () { return this._DT_RowIndex }).toArray()
            }, c, e)
        }, 1); c.selector.rows = a; c.selector.opts = b; return c
    }); p("rows().nodes()", function () { return this.iterator("row", function (a, b) { return a.aoData[b].nTr || k }, 1) }); p("rows().data()", function ()
    {
        return this.iterator(!0, "rows", function (a, b) { return ja(a.aoData, b, "_aData") },
        1)
    }); u("rows().cache()", "row().cache()", function (a) { return this.iterator("row", function (b, c) { var d = b.aoData[c]; return "search" === a ? d._aFilterData : d._aSortData }, 1) }); u("rows().invalidate()", "row().invalidate()", function (a) { return this.iterator("row", function (b, c) { da(b, c, a) }) }); u("rows().indexes()", "row().index()", function () { return this.iterator("row", function (a, b) { return b }, 1) }); u("rows().ids()", "row().id()", function (a)
    {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++) for (var f = 0, g = this[d].length; f <
        g; f++) { var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData); b.push((!0 === a ? "#" : "") + h) } return new t(c, b)
    }); u("rows().remove()", "row().remove()", function ()
    {
        var a = this; this.iterator("row", function (b, c, d) { var e = b.aoData, f = e[c], g, h, i, n, l; e.splice(c, 1); g = 0; for (h = e.length; g < h; g++) if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) { i = 0; for (n = l.length; i < n; i++) l[i]._DT_CellIndex.row = g } qa(b.aiDisplayMaster, c); qa(b.aiDisplay, c); qa(a[d], c, !1); Ua(b); c = b.rowIdFn(f._aData); c !== k && delete b.aIds[c] });
        this.iterator("table", function (a) { for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c }); return this
    }); p("rows.add()", function (a) { var b = this.iterator("table", function (b) { var c, f, g, h = []; f = 0; for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(oa(b, c)[0]) : h.push(N(b, c)); return h }, 1), c = this.rows(-1); c.pop(); h.merge(c, b); return c }); p("row()", function (a, b) { return db(this.rows(a, b)) }); p("row().data()", function (a)
    {
        var b = this.context; if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData :
        k; b[0].aoData[this[0]]._aData = a; da(b[0], this[0], "data"); return this
    }); p("row().node()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null }); p("row.add()", function (a) { a instanceof h && a.length && (a = a[0]); var b = this.iterator("table", function (b) { return a.nodeName && "TR" === a.nodeName.toUpperCase() ? oa(b, a)[0] : N(b, a) }); return this.row(b[0]) }); var eb = function (a, b)
    {
        var c = a.context; if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow =
        k, c._details = k
    }, Wb = function (a, b)
    {
        var c = a.context; if (c.length && a.length)
        {
            var d = c[0].aoData[a[0]]; if (d._details)
            {
                (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach(); var e = c[0], f = new t(e), g = e.aoData; f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"); 0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) { e === b && f.rows({ page: "current" }).eq(0).each(function (a) { a = g[a]; a._detailsShow && a._details.insertAfter(a.nTr) }) }), f.on("column-visibility.dt.DT_details",
                function (a, b) { if (e === b) for (var c, d = ba(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d) }), f.on("destroy.dt.DT_details", function (a, b) { if (e === b) for (var c = 0, d = g.length; c < d; c++) g[c]._details && eb(f, c) }))
            }
        }
    }; p("row().child()", function (a, b)
    {
        var c = this.context; if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k; if (!0 === a) this.child.show(); else if (!1 === a) eb(this); else if (c.length && this.length)
        {
            var d = c[0], c = c[0].aoData[this[0]], e = [], f = function (a,
            b) { if (h.isArray(a) || a instanceof h) for (var c = 0, k = a.length; c < k; c++) f(a[c], b); else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = ba(d), e.push(c[0])) }; f(a, b); c._details && c._details.detach(); c._details = h(e); c._detailsShow && c._details.insertAfter(c.nTr)
        } return this
    }); p(["row().child.show()", "row().child().show()"], function () { Wb(this, !0); return this }); p(["row().child.hide()", "row().child().hide()"], function ()
    {
        Wb(this, !1);
        return this
    }); p(["row().child.remove()", "row().child().remove()"], function () { eb(this); return this }); p("row().child.isShown()", function () { var a = this.context; return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1 }); var fc = /^([^:]+):(name|visIdx|visible)$/, Xb = function (a, b, c, d, e) { for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b)); return c }; p("columns()", function (a, b)
    {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = ""); var b = cb(b), c = this.iterator("table", function (c)
        {
            var e = a, f = b, g = c.aoColumns,
            j = D(g, "sName"), i = D(g, "nTh"); return bb("column", e, function (a)
            {
                var b = Qb(a); if (a === "") return X(g.length); if (b !== null) return [b >= 0 ? b : g.length + b]; if (typeof a === "function") { var e = Da(c, f); return h.map(g, function (b, f) { return a(f, Xb(c, f, 0, 0, e), i[f]) ? f : null }) } var k = typeof a === "string" ? a.match(fc) : ""; if (k) switch (k[2])
                {
                    case "visIdx": case "visible": b = parseInt(k[1], 10); if (b < 0) { var m = h.map(g, function (a, b) { return a.bVisible ? b : null }); return [m[m.length + b]] } return [$(c, b)]; case "name": return h.map(j, function (a, b)
                    {
                        return a ===
                        k[1] ? b : null
                    }); default: return []
                } if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column]; b = h(i).filter(a).map(function () { return h.inArray(this, i) }).toArray(); if (b.length || !a.nodeName) return b; b = h(a).closest("*[data-dt-column]"); return b.length ? [b.data("dt-column")] : []
            }, c, f)
        }, 1); c.selector.cols = a; c.selector.opts = b; return c
    }); u("columns().header()", "column().header()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTh }, 1) }); u("columns().footer()", "column().footer()",
    function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].nTf }, 1) }); u("columns().data()", "column().data()", function () { return this.iterator("column-rows", Xb, 1) }); u("columns().dataSrc()", "column().dataSrc()", function () { return this.iterator("column", function (a, b) { return a.aoColumns[b].mData }, 1) }); u("columns().cache()", "column().cache()", function (a) { return this.iterator("column-rows", function (b, c, d, e, f) { return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c) }, 1) }); u("columns().nodes()",
    "column().nodes()", function () { return this.iterator("column-rows", function (a, b, c, d, e) { return ja(a.aoData, e, "anCells", b) }, 1) }); u("columns().visible()", "column().visible()", function (a, b)
    {
        var c = this.iterator("column", function (b, c)
        {
            if (a === k) return b.aoColumns[c].bVisible; var f = b.aoColumns, g = f[c], j = b.aoData, i, n, l; if (a !== k && g.bVisible !== a)
            {
                if (a) { var m = h.inArray(!0, D(f, "bVisible"), c + 1); i = 0; for (n = j.length; i < n; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null) } else h(D(b.aoData, "anCells", c)).detach();
                g.bVisible = a; fa(b, b.aoHeader); fa(b, b.aoFooter); za(b)
            }
        }); a !== k && (this.iterator("column", function (c, e) { s(c, null, "column-visibility", [c, e, a, b]) }), (b === k || b) && this.columns.adjust()); return c
    }); u("columns().indexes()", "column().index()", function (a) { return this.iterator("column", function (b, c) { return "visible" === a ? aa(b, c) : c }, 1) }); p("columns.adjust()", function () { return this.iterator("table", function (a) { Z(a) }, 1) }); p("column.index()", function (a, b)
    {
        if (0 !== this.context.length)
        {
            var c = this.context[0]; if ("fromVisible" ===
            a || "toData" === a) return $(c, b); if ("fromData" === a || "toVisible" === a) return aa(c, b)
        }
    }); p("column()", function (a, b) { return db(this.columns(a, b)) }); p("cells()", function (a, b, c)
    {
        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null)); h.isPlainObject(b) && (c = b, b = null); if (null === b || b === k) return this.iterator("table", function (b)
        {
            var d = a, e = cb(c), f = b.aoData, g = Da(b, e), j = Tb(ja(f, g, "anCells")), i = h([].concat.apply([], j)), l, n = b.aoColumns.length, m, p, u, t, s, v; return bb("cell", d, function (a)
            {
                var c = typeof a === "function";
                if (a === null || a === k || c) { m = []; p = 0; for (u = g.length; p < u; p++) { l = g[p]; for (t = 0; t < n; t++) { s = { row: l, column: t }; if (c) { v = f[l]; a(s, B(b, l, t), v.anCells ? v.anCells[t] : null) && m.push(s) } else m.push(s) } } return m } if (h.isPlainObject(a)) return [a]; c = i.filter(a).map(function (a, b) { return { row: b._DT_CellIndex.row, column: b._DT_CellIndex.column } }).toArray(); if (c.length || !a.nodeName) return c; v = h(a).closest("*[data-dt-row]"); return v.length ? [{ row: v.data("dt-row"), column: v.data("dt-column") }] : []
            }, b, e)
        }); var d = this.columns(b, c), e = this.rows(a,
        c), f, g, j, i, n, l = this.iterator("table", function (a, b) { f = []; g = 0; for (j = e[b].length; g < j; g++) { i = 0; for (n = d[b].length; i < n; i++) f.push({ row: e[b][g], column: d[b][i] }) } return f }, 1); h.extend(l.selector, { cols: b, rows: a, opts: c }); return l
    }); u("cells().nodes()", "cell().node()", function () { return this.iterator("cell", function (a, b, c) { return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k }, 1) }); p("cells().data()", function () { return this.iterator("cell", function (a, b, c) { return B(a, b, c) }, 1) }); u("cells().cache()", "cell().cache()", function (a)
    {
        a =
        "search" === a ? "_aFilterData" : "_aSortData"; return this.iterator("cell", function (b, c, d) { return b.aoData[c][a][d] }, 1)
    }); u("cells().render()", "cell().render()", function (a) { return this.iterator("cell", function (b, c, d) { return B(b, c, d, a) }, 1) }); u("cells().indexes()", "cell().index()", function () { return this.iterator("cell", function (a, b, c) { return { row: b, column: c, columnVisible: aa(a, c) } }, 1) }); u("cells().invalidate()", "cell().invalidate()", function (a) { return this.iterator("cell", function (b, c, d) { da(b, c, a, d) }) }); p("cell()",
    function (a, b, c) { return db(this.cells(a, b, c)) }); p("cell().data()", function (a) { var b = this.context, c = this[0]; if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k; lb(b[0], c[0].row, c[0].column, a); da(b[0], c[0].row, "data", c[0].column); return this }); p("order()", function (a, b) { var c = this.context; if (a === k) return 0 !== c.length ? c[0].aaSorting : k; "number" === typeof a ? a = [[a, b]] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments)); return this.iterator("table", function (b) { b.aaSorting = a.slice() }) });
    p("order.listener()", function (a, b, c) { return this.iterator("table", function (d) { Oa(d, a, b, c) }) }); p("order.fixed()", function (a) { if (!a) { var b = this.context, b = b.length ? b[0].aaSortingFixed : k; return h.isArray(b) ? { pre: b } : b } return this.iterator("table", function (b) { b.aaSortingFixed = h.extend(!0, {}, a) }) }); p(["columns().order()", "column().order()"], function (a) { var b = this; return this.iterator("table", function (c, d) { var e = []; h.each(b[d], function (b, c) { e.push([c, a]) }); c.aaSorting = e }) }); p("search()", function (a, b, c, d)
    {
        var e =
        this.context; return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) { e.oFeatures.bFilter && ga(e, h.extend({}, e.oPreviousSearch, { sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ? !0 : c, bCaseInsensitive: null === d ? !0 : d }), 1) })
    }); u("columns().search()", "column().search()", function (a, b, c, d)
    {
        return this.iterator("column", function (e, f)
        {
            var g = e.aoPreSearchCols; if (a === k) return g[f].sSearch; e.oFeatures.bFilter && (h.extend(g[f], {
                sSearch: a + "", bRegex: null === b ? !1 : b, bSmart: null === c ?
                !0 : c, bCaseInsensitive: null === d ? !0 : d
            }), ga(e, e.oPreviousSearch, 1))
        })
    }); p("state()", function () { return this.context.length ? this.context[0].oSavedState : null }); p("state.clear()", function () { return this.iterator("table", function (a) { a.fnStateSaveCallback.call(a.oInstance, a, {}) }) }); p("state.loaded()", function () { return this.context.length ? this.context[0].oLoadedState : null }); p("state.save()", function () { return this.iterator("table", function (a) { za(a) }) }); m.versionCheck = m.fnVersionCheck = function (a)
    {
        for (var b = m.version.split("."),
        a = a.split("."), c, d, e = 0, f = a.length; e < f; e++) if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d; return !0
    }; m.isDataTable = m.fnIsDataTable = function (a) { var b = h(a).get(0), c = !1; if (a instanceof m.Api) return !0; h.each(m.settings, function (a, e) { var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null, g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null; if (e.nTable === b || f === b || g === b) c = !0 }); return c }; m.tables = m.fnTables = function (a)
    {
        var b = !1; h.isPlainObject(a) && (b = a.api, a = a.visible); var c = h.map(m.settings,
        function (b) { if (!a || a && h(b.nTable).is(":visible")) return b.nTable }); return b ? new t(c) : c
    }; m.camelToHungarian = J; p("$()", function (a, b) { var c = this.rows(b).nodes(), c = h(c); return h([].concat(c.filter(a).toArray(), c.find(a).toArray())) }); h.each(["on", "one", "off"], function (a, b) { p(b + "()", function () { var a = Array.prototype.slice.call(arguments); a[0] = h.map(a[0].split(/\s/), function (a) { return !a.match(/\.dt\b/) ? a + ".dt" : a }).join(" "); var d = h(this.tables().nodes()); d[b].apply(d, a); return this }) }); p("clear()", function ()
    {
        return this.iterator("table",
        function (a) { pa(a) })
    }); p("settings()", function () { return new t(this.context, this.context) }); p("init()", function () { var a = this.context; return a.length ? a[0].oInit : null }); p("data()", function () { return this.iterator("table", function (a) { return D(a.aoData, "_aData") }).flatten() }); p("destroy()", function (a)
    {
        a = a || !1; return this.iterator("table", function (b)
        {
            var c = b.nTableWrapper.parentNode, d = b.oClasses, e = b.nTable, f = b.nTBody, g = b.nTHead, j = b.nTFoot, i = h(e), f = h(f), k = h(b.nTableWrapper), l = h.map(b.aoData, function (a) { return a.nTr }),
            p; b.bDestroying = !0; s(b, "aoDestroyCallback", "destroy", [b]); a || (new t(b)).columns().visible(!0); k.off(".DT").find(":not(tbody *)").off(".DT"); h(E).off(".DT-" + b.sInstance); e != g.parentNode && (i.children("thead").detach(), i.append(g)); j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j)); b.aaSorting = []; b.aaSortingFixed = []; ya(b); h(l).removeClass(b.asStripeClasses.join(" ")); h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone); b.bJUI && (h("th span." + d.sSortIcon +
            ", td span." + d.sSortIcon, g).detach(), h("th, td", g).each(function () { var a = h("div." + d.sSortJUIWrapper, this); h(this).append(a.contents()); a.detach() })); f.children().detach(); f.append(l); g = a ? "remove" : "detach"; i[g](); k[g](); !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function (a) { h(this).addClass(b.asDestroyStripes[a % p]) })); c = h.inArray(b, m.settings); -1 !== c && m.settings.splice(c, 1)
        })
    }); h.each(["column",
    "row", "cell"], function (a, b) { p(b + "s().every()", function (a) { var d = this.selector.opts, e = this; return this.iterator(b, function (f, g, h, i, m) { a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m) }) }) }); p("i18n()", function (a, b, c) { var d = this.context[0], a = R(a)(d.oLanguage); a === k && (a = b); c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._); return a.replace("%d", c) }); m.version = "1.10.15"; m.settings = []; m.models = {}; m.models.oSearch = { bCaseInsensitive: !0, sSearch: "", bRegex: !1, bSmart: !0 }; m.models.oRow = {
        nTr: null, anCells: null,
        _aData: [], _aSortData: null, _aFilterData: null, _sFilterRow: null, _sRowStripe: "", src: null, idx: -1
    }; m.models.oColumn = { idx: null, aDataSort: null, asSorting: null, bSearchable: null, bSortable: null, bVisible: null, _sManualType: null, _bAttrSrc: !1, fnCreatedCell: null, fnGetData: null, fnSetData: null, mData: null, mRender: null, nTh: null, nTf: null, sClass: null, sContentPadding: null, sDefaultContent: null, sName: null, sSortDataType: "std", sSortingClass: null, sSortingClassJUI: null, sTitle: null, sType: null, sWidth: null, sWidthOrig: null }; m.defaults =
    {
        aaData: null, aaSorting: [[0, "asc"]], aaSortingFixed: [], ajax: null, aLengthMenu: [10, 25, 50, 100], aoColumns: null, aoColumnDefs: null, aoSearchCols: [], asStripeClasses: null, bAutoWidth: !0, bDeferRender: !1, bDestroy: !1, bFilter: !0, bInfo: !0, bJQueryUI: !1, bLengthChange: !0, bPaginate: !0, bProcessing: !1, bRetrieve: !1, bScrollCollapse: !1, bServerSide: !1, bSort: !0, bSortMulti: !0, bSortCellsTop: !1, bSortClasses: !0, bStateSave: !1, fnCreatedRow: null, fnDrawCallback: null, fnFooterCallback: null, fnFormatNumber: function (a)
        {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
            this.oLanguage.sThousands)
        }, fnHeaderCallback: null, fnInfoCallback: null, fnInitComplete: null, fnPreDrawCallback: null, fnRowCallback: null, fnServerData: null, fnServerParams: null, fnStateLoadCallback: function (a) { try { return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname)) } catch (b) { } }, fnStateLoadParams: null, fnStateLoaded: null, fnStateSaveCallback: function (a, b)
        {
            try
            {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance +
                "_" + location.pathname, JSON.stringify(b))
            } catch (c) { }
        }, fnStateSaveParams: null, iStateDuration: 7200, iDeferLoading: null, iDisplayLength: 10, iDisplayStart: 0, iTabIndex: 0, oClasses: {}, oLanguage: {
            oAria: { sSortAscending: ": activate to sort column ascending", sSortDescending: ": activate to sort column descending" }, oPaginate: { sFirst: "First", sLast: "Last", sNext: "Next", sPrevious: "Previous" }, sEmptyTable: "No data available in table", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries", sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)", sInfoPostFix: "", sDecimal: "", sThousands: ",", sLengthMenu: "Show _MENU_ entries", sLoadingRecords: "Loading...", sProcessing: "Processing...", sSearch: "Search:", sSearchPlaceholder: "", sUrl: "", sZeroRecords: "No matching records found"
        }, oSearch: h.extend({}, m.models.oSearch), sAjaxDataProp: "data", sAjaxSource: null, sDom: "lfrtip", searchDelay: null, sPaginationType: "simple_numbers", sScrollX: "", sScrollXInner: "", sScrollY: "", sServerMethod: "GET", renderer: null, rowId: "DT_RowId"
    };
    Y(m.defaults); m.defaults.column = { aDataSort: null, iDataSort: -1, asSorting: ["asc", "desc"], bSearchable: !0, bSortable: !0, bVisible: !0, fnCreatedCell: null, mData: null, mRender: null, sCellType: "td", sClass: "", sContentPadding: "", sDefaultContent: null, sName: "", sSortDataType: "std", sTitle: null, sType: null, sWidth: null }; Y(m.defaults.column); m.models.oSettings = {
        oFeatures: {
            bAutoWidth: null, bDeferRender: null, bFilter: null, bInfo: null, bLengthChange: null, bPaginate: null, bProcessing: null, bServerSide: null, bSort: null, bSortMulti: null,
            bSortClasses: null, bStateSave: null
        }, oScroll: { bCollapse: null, iBarWidth: 0, sX: null, sXInner: null, sY: null }, oLanguage: { fnInfoCallback: null }, oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1, bBounding: !1, barWidth: 0 }, ajax: null, aanFeatures: [], aoData: [], aiDisplay: [], aiDisplayMaster: [], aIds: {}, aoColumns: [], aoHeader: [], aoFooter: [], oPreviousSearch: {}, aoPreSearchCols: [], aaSorting: null, aaSortingFixed: [], asStripeClasses: null, asDestroyStripes: [], sDestroyWidth: 0, aoRowCallback: [], aoHeaderCallback: [], aoFooterCallback: [],
        aoDrawCallback: [], aoRowCreatedCallback: [], aoPreDrawCallback: [], aoInitComplete: [], aoStateSaveParams: [], aoStateLoadParams: [], aoStateLoaded: [], sTableId: "", nTable: null, nTHead: null, nTFoot: null, nTBody: null, nTableWrapper: null, bDeferLoading: !1, bInitialised: !1, aoOpenRows: [], sDom: null, searchDelay: null, sPaginationType: "two_button", iStateDuration: 0, aoStateSave: [], aoStateLoad: [], oSavedState: null, oLoadedState: null, sAjaxSource: null, sAjaxDataProp: null, bAjaxDataGet: !0, jqXHR: null, json: k, oAjaxData: k, fnServerData: null,
        aoServerParams: [], sServerMethod: null, fnFormatNumber: null, aLengthMenu: null, iDraw: 0, bDrawing: !1, iDrawError: -1, _iDisplayLength: 10, _iDisplayStart: 0, _iRecordsTotal: 0, _iRecordsDisplay: 0, bJUI: null, oClasses: {}, bFiltered: !1, bSorted: !1, bSortCellsTop: null, oInit: null, aoDestroyCallback: [], fnRecordsTotal: function () { return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length }, fnRecordsDisplay: function () { return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length }, fnDisplayEnd: function ()
        {
            var a =
            this._iDisplayLength, b = this._iDisplayStart, c = b + a, d = this.aiDisplay.length, e = this.oFeatures, f = e.bPaginate; return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
        }, oInstance: null, sInstance: null, iTabIndex: 0, nScrollHead: null, nScrollFoot: null, aLastSort: [], oPlugins: {}, rowIdFn: null, rowId: null
    }; m.ext = x = {
        buttons: {}, classes: {}, builder: "-source-", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: {
            pageButton: {},
            header: {}
        }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: m.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: m.version
    }; h.extend(x, { afnFiltering: x.search, aTypes: x.type.detect, ofnSearch: x.type.search, oSort: x.type.order, afnSortData: x.order, aoFeatures: x.feature, oApi: x.internal, oStdClasses: x.classes, oPagination: x.pager }); h.extend(m.ext.classes, {
        sTable: "dataTable", sNoFooter: "no-footer", sPageButton: "paginate_button", sPageButtonActive: "current", sPageButtonDisabled: "disabled", sStripeOdd: "odd",
        sStripeEven: "even", sRowEmpty: "dataTables_empty", sWrapper: "dataTables_wrapper", sFilter: "dataTables_filter", sInfo: "dataTables_info", sPaging: "dataTables_paginate paging_", sLength: "dataTables_length", sProcessing: "dataTables_processing", sSortAsc: "sorting_asc", sSortDesc: "sorting_desc", sSortable: "sorting", sSortableAsc: "sorting_asc_disabled", sSortableDesc: "sorting_desc_disabled", sSortableNone: "sorting_disabled", sSortColumn: "sorting_", sFilterInput: "", sLengthSelect: "", sScrollWrapper: "dataTables_scroll", sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner", sScrollBody: "dataTables_scrollBody", sScrollFoot: "dataTables_scrollFoot", sScrollFootInner: "dataTables_scrollFootInner", sHeaderTH: "", sFooterTH: "", sSortJUIAsc: "", sSortJUIDesc: "", sSortJUI: "", sSortJUIAscAllowed: "", sSortJUIDescAllowed: "", sSortJUIWrapper: "", sSortIcon: "", sJUIHeader: "", sJUIFooter: ""
    }); var Ea = "", Ea = "", G = Ea + "ui-state-default", ka = Ea + "css_right ui-icon ui-icon-", Yb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix"; h.extend(m.ext.oJUIClasses,
    m.ext.classes, {
        sPageButton: "fg-button ui-button " + G, sPageButtonActive: "ui-state-disabled", sPageButtonDisabled: "ui-state-disabled", sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_", sSortAsc: G + " sorting_asc", sSortDesc: G + " sorting_desc", sSortable: G + " sorting", sSortableAsc: G + " sorting_asc_disabled", sSortableDesc: G + " sorting_desc_disabled", sSortableNone: G + " sorting_disabled", sSortJUIAsc: ka + "triangle-1-n", sSortJUIDesc: ka + "triangle-1-s", sSortJUI: ka + "carat-2-n-s",
        sSortJUIAscAllowed: ka + "carat-1-n", sSortJUIDescAllowed: ka + "carat-1-s", sSortJUIWrapper: "DataTables_sort_wrapper", sSortIcon: "DataTables_sort_icon", sScrollHead: "dataTables_scrollHead " + G, sScrollFoot: "dataTables_scrollFoot " + G, sHeaderTH: G, sFooterTH: G, sJUIHeader: Yb + " ui-corner-tl ui-corner-tr", sJUIFooter: Yb + " ui-corner-bl ui-corner-br"
    }); var Nb = m.ext.pager; h.extend(Nb, {
        simple: function () { return ["previous", "next"] }, full: function () { return ["first", "previous", "next", "last"] }, numbers: function (a, b)
        {
            return [ia(a,
            b)]
        }, simple_numbers: function (a, b) { return ["previous", ia(a, b), "next"] }, full_numbers: function (a, b) { return ["first", "previous", ia(a, b), "next", "last"] }, first_last_numbers: function (a, b) { return ["first", ia(a, b), "last"] }, _numbers: ia, numbers_length: 7
    }); h.extend(!0, m.ext.renderer, {
        pageButton: {
            _: function (a, b, c, d, e, f)
            {
                var g = a.oClasses, j = a.oLanguage.oPaginate, i = a.oLanguage.oAria.paginate || {}, m, l, p = 0, r = function (b, d)
                {
                    var k, t, u, s, v = function (b) { Va(a, b.data.action, true) }; k = 0; for (t = d.length; k < t; k++)
                    {
                        s = d[k]; if (h.isArray(s))
                        {
                            u =
                            h("<" + (s.DT_el || "div") + "/>").appendTo(b); r(u, s)
                        } else
                        {
                            m = null; l = ""; switch (s) { case "ellipsis": b.append('<span class="ellipsis">&#x2026;</span>'); break; case "first": m = j.sFirst; l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled); break; case "previous": m = j.sPrevious; l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled); break; case "next": m = j.sNext; l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled); break; case "last": m = j.sLast; l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled); break; default: m = s + 1; l = e === s ? g.sPageButtonActive : "" } if (m !== null)
                            {
                                u = h("<a>", {
                                    "class": g.sPageButton +
                                    " " + l, "aria-controls": a.sTableId, "aria-label": i[s], "data-dt-idx": p, tabindex: a.iTabIndex, id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null
                                }).html(m).appendTo(b); Ya(u, { action: s }, v); p++
                            }
                        }
                    }
                }, t; try { t = h(b).find(H.activeElement).data("dt-idx") } catch (u) { } r(h(b).empty(), d); t !== k && h(b).find("[data-dt-idx=" + t + "]").focus()
            }
        }
    }); h.extend(m.ext.type.detect, [function (a, b) { var c = b.oLanguage.sDecimal; return ab(a, c) ? "num" + c : null }, function (a)
    {
        if (a && !(a instanceof Date) && !cc.test(a)) return null; var b = Date.parse(a);
        return null !== b && !isNaN(b) || M(a) ? "date" : null
    }, function (a, b) { var c = b.oLanguage.sDecimal; return ab(a, c, !0) ? "num-fmt" + c : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Sb(a, c) ? "html-num" + c : null }, function (a, b) { var c = b.oLanguage.sDecimal; return Sb(a, c, !0) ? "html-num-fmt" + c : null }, function (a) { return M(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null }]); h.extend(m.ext.type.search, {
        html: function (a) { return M(a) ? a : "string" === typeof a ? a.replace(Pb, " ").replace(Ca, "") : "" }, string: function (a)
        {
            return M(a) ?
                a : "string" === typeof a ? a.replace(Pb, " ") : a
        }
    }); var Ba = function (a, b, c, d) { if (0 !== a && (!a || "-" === a)) return -Infinity; b && (a = Rb(a, b)); a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, ""))); return 1 * a }; h.extend(x.type.order, {
        "date-pre": function (a) { return Date.parse(a) || -Infinity }, "html-pre": function (a) { return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + "" }, "string-pre": function (a) { return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString() }, "string-asc": function (a, b)
        {
            return a <
            b ? -1 : a > b ? 1 : 0
        }, "string-desc": function (a, b) { return a < b ? 1 : a > b ? -1 : 0 }
    }); fb(""); h.extend(!0, m.ext.renderer, {
        header: {
            _: function (a, b, c, d) { h(a.nTable).on("order.dt.DT", function (e, f, g, h) { if (a === f) { e = c.idx; b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass) } }) }, jqueryui: function (a, b, c, d)
            {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                h(a.nTable).on("order.dt.DT", function (e, f, g, h) { if (a === f) { e = c.idx; b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass); b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI) } })
            }
        }
    }); var Zb = function (a)
    {
        return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,
        "&quot;") : a
    }; m.render = { number: function (a, b, c, d, e) { return { display: function (f) { if ("number" !== typeof f && "string" !== typeof f) return f; var g = 0 > f ? "-" : "", h = parseFloat(f); if (isNaN(h)) return Zb(f); h = h.toFixed(c); f = Math.abs(h); h = parseInt(f, 10); f = c ? b + (f - h).toFixed(c).substring(2) : ""; return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "") } } }, text: function () { return { display: Zb } } }; h.extend(m.ext.internal, {
        _fnExternApiFunc: Ob, _fnBuildAjax: ua, _fnAjaxUpdate: nb, _fnAjaxParameters: wb, _fnAjaxUpdateDraw: xb,
        _fnAjaxDataSrc: va, _fnAddColumn: Ga, _fnColumnOptions: la, _fnAdjustColumnSizing: Z, _fnVisibleToColumnIndex: $, _fnColumnIndexToVisible: aa, _fnVisbleColumns: ba, _fnGetColumns: na, _fnColumnTypes: Ia, _fnApplyColumnDefs: kb, _fnHungarianMap: Y, _fnCamelToHungarian: J, _fnLanguageCompat: Fa, _fnBrowserDetect: ib, _fnAddData: N, _fnAddTr: oa, _fnNodeToDataIndex: function (a, b) { return b._DT_RowIndex !== k ? b._DT_RowIndex : null }, _fnNodeToColumnIndex: function (a, b, c) { return h.inArray(c, a.aoData[b].anCells) }, _fnGetCellData: B, _fnSetCellData: lb,
        _fnSplitObjNotation: La, _fnGetObjectDataFn: R, _fnSetObjectDataFn: S, _fnGetDataMaster: Ma, _fnClearTable: pa, _fnDeleteIndex: qa, _fnInvalidate: da, _fnGetRowElements: Ka, _fnCreateTr: Ja, _fnBuildHead: mb, _fnDrawHead: fa, _fnDraw: O, _fnReDraw: T, _fnAddOptionsHtml: pb, _fnDetectHeader: ea, _fnGetUniqueThs: ta, _fnFeatureHtmlFilter: rb, _fnFilterComplete: ga, _fnFilterCustom: Ab, _fnFilterColumn: zb, _fnFilter: yb, _fnFilterCreateSearch: Ra, _fnEscapeRegex: Sa, _fnFilterData: Bb, _fnFeatureHtmlInfo: ub, _fnUpdateInfo: Eb, _fnInfoMacros: Fb, _fnInitialise: ha,
        _fnInitComplete: wa, _fnLengthChange: Ta, _fnFeatureHtmlLength: qb, _fnFeatureHtmlPaginate: vb, _fnPageChange: Va, _fnFeatureHtmlProcessing: sb, _fnProcessingDisplay: C, _fnFeatureHtmlTable: tb, _fnScrollDraw: ma, _fnApplyToChildren: I, _fnCalculateColumnWidths: Ha, _fnThrottle: Qa, _fnConvertToWidth: Gb, _fnGetWidestNode: Hb, _fnGetMaxLenString: Ib, _fnStringToCss: v, _fnSortFlatten: W, _fnSort: ob, _fnSortAria: Kb, _fnSortListener: Xa, _fnSortAttachListener: Oa, _fnSortingClasses: ya, _fnSortData: Jb, _fnSaveState: za, _fnLoadState: Lb, _fnSettingsFromNode: Aa,
        _fnLog: K, _fnMap: F, _fnBindAction: Ya, _fnCallbackReg: z, _fnCallbackFire: s, _fnLengthOverflow: Ua, _fnRenderer: Pa, _fnDataSource: y, _fnRowAttributes: Na, _fnCalculateEnd: function () { }
    }); h.fn.dataTable = m; m.$ = h; h.fn.dataTableSettings = m.settings; h.fn.dataTableExt = m.ext; h.fn.DataTable = function (a) { return h(this).dataTable(a).api() }; h.each(m, function (a, b) { h.fn.DataTable[a] = b }); return h.fn.dataTable
});

/*!
 DataTables UIkit 3 integration
*/
(function (b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, c) { a || (a = window); if (!c || !c.fn.dataTable) c = require("datatables.net")(a, c).$; return b(c, a, a.document) } : b(jQuery, window, document) })(function (b, a, c)
{
    var g = b.fn.dataTable; b.extend(!0, g.defaults, {
        dom: "<'row uk-grid'<'uk-width-1-2'l><'uk-width-1-2'f>><'row uk-grid dt-merge-grid'<'uk-width-1-1'tr>><'row uk-grid dt-merge-grid'<'uk-width-2-5'i><'uk-width-3-5'p>>",
        renderer: "uikit"
    }); b.extend(g.ext.classes, { sWrapper: "dataTables_wrapper uk-form dt-uikit", sFilterInput: "uk-form-small", sLengthSelect: "uk-form-small", sProcessing: "dataTables_processing uk-panel" }); g.ext.renderer.pageButton.uikit = function (a, h, r, m, j, n)
    {
        var o = new g.Api(a), s = a.oClasses, k = a.oLanguage.oPaginate, t = a.oLanguage.oAria.paginate || {}, f, d, p = 0, q = function (c, g)
        {
            var l, h, i, e, m = function (a) { a.preventDefault(); !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page") };
            l = 0; for (h = g.length; l < h; l++) if (e = g[l], b.isArray(e)) q(c, e); else
            {
                d = f = ""; switch (e)
                {
                    case "ellipsis": f = '<i class="uk-icon-ellipsis-h"></i>'; d = "uk-disabled disabled"; break; case "first": f = '<i class="uk-icon-angle-double-left"></i> ' + k.sFirst; d = 0 < j ? "" : " uk-disabled disabled"; break; case "previous": f = '<i class="uk-icon-angle-left"></i> ' + k.sPrevious; d = 0 < j ? "" : "uk-disabled disabled"; break; case "next": f = k.sNext + ' <i class="uk-icon-angle-right"></i>'; d = j < n - 1 ? "" : "uk-disabled disabled"; break; case "last": f = k.sLast +
                    ' <i class="uk-icon-angle-double-right"></i>'; d = j < n - 1 ? "" : " uk-disabled disabled"; break; default: f = e + 1, d = j === e ? "uk-active" : ""
                } f && (i = b("<li>", { "class": s.sPageButton + " " + d, id: 0 === r && "string" === typeof e ? a.sTableId + "_" + e : null }).append(b(-1 != d.indexOf("disabled") || -1 != d.indexOf("active") ? "<span>" : "<a>", { href: "#", "aria-controls": a.sTableId, "aria-label": t[e], "data-dt-idx": p, tabindex: a.iTabIndex }).html(f)).appendTo(c), a.oApi._fnBindAction(i, { action: e }, m), p++)
            }
        }, i; try { i = b(h).find(c.activeElement).data("dt-idx") } catch (u) { } q(b(h).empty().html('<ul class="uk-pagination uk-pagination-right"/>').children("ul"),
        m); i && b(h).find("[data-dt-idx=" + i + "]").focus()
    }; return g
});

/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function (b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return b(d, a, a.document) } : b(jQuery, window, document) })(function (b, a, d, m)
{
    var e = b.fn.dataTable; b.extend(!0, e.defaults, {
        dom: "<'ui stackable grid'<'row'<'eight wide column'l><'right aligned eight wide column'f>><'row dt-table'<'sixteen wide column'tr>><'row'<'seven wide column'i><'right aligned nine wide column'p>>>",
        renderer: "semanticUI"
    }); b.extend(e.ext.classes, { sWrapper: "dataTables_wrapper dt-semanticUI", sFilter: "dataTables_filter ui input", sProcessing: "dataTables_processing ui segment", sPageButton: "paginate_button item" }); e.ext.renderer.pageButton.semanticUI = function (h, a, r, s, j, n)
    {
        var o = new e.Api(h), t = h.oClasses, k = h.oLanguage.oPaginate, u = h.oLanguage.oAria.paginate || {}, f, g, p = 0, q = function (a, d)
        {
            var e, i, l, c, m = function (a) { a.preventDefault(); !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page") };
            e = 0; for (i = d.length; e < i; e++) if (c = d[e], b.isArray(c)) q(a, c); else
            {
                g = f = ""; switch (c) { case "ellipsis": f = "&#x2026;"; g = "disabled"; break; case "first": f = k.sFirst; g = c + (0 < j ? "" : " disabled"); break; case "previous": f = k.sPrevious; g = c + (0 < j ? "" : " disabled"); break; case "next": f = k.sNext; g = c + (j < n - 1 ? "" : " disabled"); break; case "last": f = k.sLast; g = c + (j < n - 1 ? "" : " disabled"); break; default: f = c + 1, g = j === c ? "active" : "" } l = -1 === g.indexOf("disabled") ? "a" : "div"; f && (l = b("<" + l + ">", {
                    "class": t.sPageButton + " " + g, id: 0 === r && "string" === typeof c ?
                    h.sTableId + "_" + c : null, href: "#", "aria-controls": h.sTableId, "aria-label": u[c], "data-dt-idx": p, tabindex: h.iTabIndex
                }).html(f).appendTo(a), h.oApi._fnBindAction(l, { action: c }, m), p++)
            }
        }, i; try { i = b(a).find(d.activeElement).data("dt-idx") } catch (v) { } q(b(a).empty().html('<div class="ui stackable pagination menu"/>').children(), s); i !== m && b(a).find("[data-dt-idx=" + i + "]").focus()
    }; b(d).on("init.dt", function (a, d)
    {
        if ("dt" === a.namespace && b.fn.dropdown)
        {
            var e = new b.fn.dataTable.Api(d); b("div.dataTables_length select",
            e.table().container()).dropdown()
        }
    }); return e
});

/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function (c) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) { return c(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return c(d, a, a.document) } : c(jQuery, window, document) })(function (c, a, d, r)
{
    var g = c.fn.dataTable; c.extend(!0, g.defaults, {
        dom: "<'mdl-grid'<'mdl-cell mdl-cell--6-col'l><'mdl-cell mdl-cell--6-col'f>><'mdl-grid dt-table'<'mdl-cell mdl-cell--12-col'tr>><'mdl-grid'<'mdl-cell mdl-cell--4-col'i><'mdl-cell mdl-cell--8-col'p>>",
        renderer: "material"
    }); c.extend(g.ext.classes, { sWrapper: "dataTables_wrapper form-inline dt-material", sFilterInput: "form-control input-sm", sLengthSelect: "form-control input-sm", sProcessing: "dataTables_processing panel panel-default" }); g.ext.renderer.pageButton.material = function (a, h, s, t, i, n)
    {
        var o = new g.Api(a), l = a.oLanguage.oPaginate, u = a.oLanguage.oAria.paginate || {}, f, e, p = 0, q = function (d, g)
        {
            var m, h, j, b, k = function (a)
            {
                a.preventDefault(); !c(a.currentTarget).hasClass("disabled") && o.page() != a.data.action &&
                o.page(a.data.action).draw("page")
            }; m = 0; for (h = g.length; m < h; m++) if (b = g[m], c.isArray(b)) q(d, b); else
            {
                f = ""; j = !1; switch (b) { case "ellipsis": f = "&#x2026;"; e = "disabled"; break; case "first": f = l.sFirst; e = b + (0 < i ? "" : " disabled"); break; case "previous": f = l.sPrevious; e = b + (0 < i ? "" : " disabled"); break; case "next": f = l.sNext; e = b + (i < n - 1 ? "" : " disabled"); break; case "last": f = l.sLast; e = b + (i < n - 1 ? "" : " disabled"); break; default: f = b + 1, e = "", j = i === b } j && (e += " mdl-button--raised mdl-button--colored"); f && (j = c("<button>", {
                    "class": "mdl-button " +
                    e, id: 0 === s && "string" === typeof b ? a.sTableId + "_" + b : null, "aria-controls": a.sTableId, "aria-label": u[b], "data-dt-idx": p, tabindex: a.iTabIndex, disabled: -1 !== e.indexOf("disabled")
                }).html(f).appendTo(d), a.oApi._fnBindAction(j, { action: b }, k), p++)
            }
        }, k; try { k = c(h).find(d.activeElement).data("dt-idx") } catch (v) { } q(c(h).empty().html('<div class="pagination"/>').children(), t); k !== r && c(h).find("[data-dt-idx=" + k + "]").focus()
    }; return g
});

/*!
 DataTables jQuery UI integration
 ©2011-2014 SpryMedia Ltd - datatables.net/license
*/
(function (a) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (b) { return a(b, window, document) }) : "object" === typeof exports ? module.exports = function (b, d) { b || (b = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(b, d).$; return a(d, b, b.document) } : a(jQuery, window, document) })(function (a)
{
    var b = a.fn.dataTable; a.extend(!0, b.defaults, {
        dom: '<"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-tl ui-corner-tr"lfr>t<"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-bl ui-corner-br"ip>',
        renderer: "jqueryui"
    }); a.extend(b.ext.classes, {
        sWrapper: "dataTables_wrapper dt-jqueryui", sPageButton: "fg-button ui-button ui-state-default", sPageButtonActive: "ui-state-disabled", sPageButtonDisabled: "ui-state-disabled", sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_", sSortAsc: "ui-state-default sorting_asc", sSortDesc: "ui-state-default sorting_desc", sSortable: "ui-state-default sorting", sSortableAsc: "ui-state-default sorting_asc_disabled", sSortableDesc: "ui-state-default sorting_desc_disabled",
        sSortableNone: "ui-state-default sorting_disabled", sSortIcon: "DataTables_sort_icon", sScrollHead: "dataTables_scrollHead ui-state-default", sScrollFoot: "dataTables_scrollFoot ui-state-default", sHeaderTH: "ui-state-default", sFooterTH: "ui-state-default"
    }); b.ext.renderer.header.jqueryui = function (b, h, e, c)
    {
        var f = "css_right ui-icon ui-icon-carat-2-n-s", g = -1 !== a.inArray("asc", e.asSorting), i = -1 !== a.inArray("desc", e.asSorting); !e.bSortable || !g && !i ? f = "" : g && !i ? f = "css_right ui-icon ui-icon-carat-1-n" : !g && i && (f = "css_right ui-icon ui-icon-carat-1-s");
        a("<div/>").addClass("DataTables_sort_wrapper").append(h.contents()).append(a("<span/>").addClass(c.sSortIcon + " " + f)).appendTo(h); a(b.nTable).on("order.dt", function (a, g, i, j)
        {
            b === g && (a = e.idx, h.removeClass(c.sSortAsc + " " + c.sSortDesc).addClass("asc" == j[a] ? c.sSortAsc : "desc" == j[a] ? c.sSortDesc : e.sSortingClass), h.find("span." + c.sSortIcon).removeClass("css_right ui-icon ui-icon-triangle-1-n css_right ui-icon ui-icon-triangle-1-s css_right ui-icon ui-icon-carat-2-n-s css_right ui-icon ui-icon-carat-1-n css_right ui-icon ui-icon-carat-1-s").addClass("asc" ==
            j[a] ? "css_right ui-icon ui-icon-triangle-1-n" : "desc" == j[a] ? "css_right ui-icon ui-icon-triangle-1-s" : f))
        })
    }; b.TableTools && a.extend(!0, b.TableTools.classes, { container: "DTTT_container ui-buttonset ui-buttonset-multi", buttons: { normal: "DTTT_button ui-button ui-state-default" }, collection: { container: "DTTT_collection ui-buttonset ui-buttonset-multi" } }); return b
});

/*!
 DataTables Foundation integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function (d) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) { return d(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, b) { a || (a = window); if (!b || !b.fn.dataTable) b = require("datatables.net")(a, b).$; return d(b, a, a.document) } : d(jQuery, window, document) })(function (d)
{
    var a = d.fn.dataTable, b = d('<meta class="foundation-mq"/>').appendTo("head"); a.ext.foundationVersion = b.css("font-family").match(/small|medium|large/) ? 6 : 5; b.remove(); d.extend(a.ext.classes,
    { sWrapper: "dataTables_wrapper dt-foundation", sProcessing: "dataTables_processing panel callout" }); d.extend(!0, a.defaults, { dom: "<'row'<'small-6 columns'l><'small-6 columns'f>r>t<'row'<'small-6 columns'i><'small-6 columns'p>>", renderer: "foundation" }); a.ext.renderer.pageButton.foundation = function (b, l, r, s, e, i)
    {
        var m = new a.Api(b), t = b.oClasses, j = b.oLanguage.oPaginate, u = b.oLanguage.oAria.paginate || {}, f, h, g, v = 5 === a.ext.foundationVersion, q = function (a, n)
        {
            var k, o, p, c, l = function (a)
            {
                a.preventDefault(); !d(a.currentTarget).hasClass("unavailable") &&
                m.page() != a.data.action && m.page(a.data.action).draw("page")
            }; k = 0; for (o = n.length; k < o; k++) if (c = n[k], d.isArray(c)) q(a, c); else
            {
                h = f = ""; g = null; switch (c)
                {
                    case "ellipsis": f = "&#x2026;"; h = "unavailable disabled"; g = null; break; case "first": f = j.sFirst; h = c + (0 < e ? "" : " unavailable disabled"); g = 0 < e ? "a" : null; break; case "previous": f = j.sPrevious; h = c + (0 < e ? "" : " unavailable disabled"); g = 0 < e ? "a" : null; break; case "next": f = j.sNext; h = c + (e < i - 1 ? "" : " unavailable disabled"); g = e < i - 1 ? "a" : null; break; case "last": f = j.sLast; h = c + (e < i - 1 ?
                    "" : " unavailable disabled"); g = e < i - 1 ? "a" : null; break; default: f = c + 1, h = e === c ? "current" : "", g = e === c ? null : "a"
                } v && (g = "a"); f && (p = d("<li>", { "class": t.sPageButton + " " + h, "aria-controls": b.sTableId, "aria-label": u[c], tabindex: b.iTabIndex, id: 0 === r && "string" === typeof c ? b.sTableId + "_" + c : null }).append(g ? d("<" + g + "/>", { href: "#" }).html(f) : f).appendTo(a), b.oApi._fnBindAction(p, { action: c }, l))
            }
        }; q(d(l).empty().html('<ul class="pagination"/>').children("ul"), s)
    }; return a
});

/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function (b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return b(d, a, a.document) } : b(jQuery, window, document) })(function (b, a, d, m)
{
    var f = b.fn.dataTable; b.extend(!0, f.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    }); b.extend(f.ext.classes, { sWrapper: "dataTables_wrapper container-fluid dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" }); f.ext.renderer.pageButton.bootstrap = function (a, h, r, s, j, n)
    {
        var o = new f.Api(a), t = a.oClasses, k = a.oLanguage.oPaginate, u = a.oLanguage.oAria.paginate || {}, e, g, p = 0, q = function (d, f)
        {
            var l, h, i, c, m = function (a)
            {
                a.preventDefault(); !b(a.currentTarget).hasClass("disabled") &&
                o.page() != a.data.action && o.page(a.data.action).draw("page")
            }; l = 0; for (h = f.length; l < h; l++) if (c = f[l], b.isArray(c)) q(d, c); else
            {
                g = e = ""; switch (c) { case "ellipsis": e = "&#x2026;"; g = "disabled"; break; case "first": e = k.sFirst; g = c + (0 < j ? "" : " disabled"); break; case "previous": e = k.sPrevious; g = c + (0 < j ? "" : " disabled"); break; case "next": e = k.sNext; g = c + (j < n - 1 ? "" : " disabled"); break; case "last": e = k.sLast; g = c + (j < n - 1 ? "" : " disabled"); break; default: e = c + 1, g = j === c ? "active" : "" } e && (i = b("<li>", {
                    "class": t.sPageButton + " " + g, id: 0 === r &&
                    "string" === typeof c ? a.sTableId + "_" + c : null
                }).append(b("<a>", { href: "#", "aria-controls": a.sTableId, "aria-label": u[c], "data-dt-idx": p, tabindex: a.iTabIndex, "class": "page-link" }).html(e)).appendTo(d), a.oApi._fnBindAction(i, { action: c }, m), p++)
            }
        }, i; try { i = b(h).find(d.activeElement).data("dt-idx") } catch (v) { } q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s); i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    }; return f
});

/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function (b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function (a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return b(d, a, a.document) } : b(jQuery, window, document) })(function (b, a, d, m)
{
    var f = b.fn.dataTable; b.extend(!0, f.defaults, { dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>", renderer: "bootstrap" }); b.extend(f.ext.classes,
    { sWrapper: "dataTables_wrapper form-inline dt-bootstrap", sFilterInput: "form-control input-sm", sLengthSelect: "form-control input-sm", sProcessing: "dataTables_processing panel panel-default" }); f.ext.renderer.pageButton.bootstrap = function (a, h, r, s, j, n)
    {
        var o = new f.Api(a), t = a.oClasses, k = a.oLanguage.oPaginate, u = a.oLanguage.oAria.paginate || {}, e, g, p = 0, q = function (d, f)
        {
            var l, h, i, c, m = function (a) { a.preventDefault(); !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page") };
            l = 0; for (h = f.length; l < h; l++) if (c = f[l], b.isArray(c)) q(d, c); else
            {
                g = e = ""; switch (c) { case "ellipsis": e = "&#x2026;"; g = "disabled"; break; case "first": e = k.sFirst; g = c + (0 < j ? "" : " disabled"); break; case "previous": e = k.sPrevious; g = c + (0 < j ? "" : " disabled"); break; case "next": e = k.sNext; g = c + (j < n - 1 ? "" : " disabled"); break; case "last": e = k.sLast; g = c + (j < n - 1 ? "" : " disabled"); break; default: e = c + 1, g = j === c ? "active" : "" } e && (i = b("<li>", { "class": t.sPageButton + " " + g, id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null }).append(b("<a>", {
                    href: "#",
                    "aria-controls": a.sTableId, "aria-label": u[c], "data-dt-idx": p, tabindex: a.iTabIndex
                }).html(e)).appendTo(d), a.oApi._fnBindAction(i, { action: c }, m), p++)
            }
        }, i; try { i = b(h).find(d.activeElement).data("dt-idx") } catch (v) { } q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s); i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    }; return f
});

//# sourceMappingURL=webcomponents-lite.js.map
(function ()
{/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
    'use strict'; var nb = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    (function ()
    {
        function k() { var a = this; this.s = {}; this.g = document.documentElement; var b = new za; b.rules = []; this.h = t.set(this.g, new t(b)); this.i = !1; this.b = this.a = null; ob(function () { a.c() }) } function H() { this.customStyles = []; this.enqueued = !1 } function pb() { } function ha(a) { this.cache = {}; this.c = void 0 === a ? 100 : a } function p() { } function t(a, b, c, d, e) { this.G = a || null; this.b = b || null; this.sa = c || []; this.P = null; this.Y = e || ""; this.a = this.B = this.K = null } function r() { } function za()
        {
            this.end = this.start = 0; this.rules = this.parent =
            this.previous = null; this.cssText = this.parsedCssText = ""; this.atRule = !1; this.type = 0; this.parsedSelector = this.selector = this.keyframesName = ""
        } function $c(a)
        {
            function b(b, c)
            {
                Object.defineProperty(b, "innerHTML", {
                    enumerable: c.enumerable, configurable: !0, get: c.get, set: function (b)
                    {
                        var d = this, e = void 0; m(this) && (e = [], J(this, function (a) { a !== d && e.push(a) })); c.set.call(this, b); if (e) for (var f = 0; f < e.length; f++) { var g = e[f]; 1 === g.__CE_state && a.disconnectedCallback(g) } this.ownerDocument.__CE_hasRegistry ? a.c(this) : a.j(this);
                        return b
                    }
                })
            } function c(b, c) { u(b, "insertAdjacentElement", function (b, d) { var e = m(d); b = c.call(this, b, d); e && a.a(d); m(b) && a.b(d); return b }) } qb ? u(Element.prototype, "attachShadow", function (a) { return this.__CE_shadowRoot = a = qb.call(this, a) }) : console.warn("Custom Elements: `Element#attachShadow` was not patched."); if (Aa && Aa.get) b(Element.prototype, Aa); else if (Ba && Ba.get) b(HTMLElement.prototype, Ba); else
            {
                var d = Ca.call(document, "div"); a.u(function (a)
                {
                    b(a, {
                        enumerable: !0, configurable: !0, get: function ()
                        {
                            return rb.call(this,
                            !0).innerHTML
                        }, set: function (a) { var b = "template" === this.localName ? this.content : this; for (d.innerHTML = a; 0 < b.childNodes.length;) Da.call(b, b.childNodes[0]); for (; 0 < d.childNodes.length;) ja.call(b, d.childNodes[0]) }
                    })
                })
            } u(Element.prototype, "setAttribute", function (b, c) { if (1 !== this.__CE_state) return sb.call(this, b, c); var d = Ea.call(this, b); sb.call(this, b, c); c = Ea.call(this, b); a.attributeChangedCallback(this, b, d, c, null) }); u(Element.prototype, "setAttributeNS", function (b, c, d)
            {
                if (1 !== this.__CE_state) return tb.call(this,
                b, c, d); var e = ka.call(this, b, c); tb.call(this, b, c, d); d = ka.call(this, b, c); a.attributeChangedCallback(this, c, e, d, b)
            }); u(Element.prototype, "removeAttribute", function (b) { if (1 !== this.__CE_state) return ub.call(this, b); var c = Ea.call(this, b); ub.call(this, b); null !== c && a.attributeChangedCallback(this, b, c, null, null) }); u(Element.prototype, "removeAttributeNS", function (b, c)
            {
                if (1 !== this.__CE_state) return vb.call(this, b, c); var d = ka.call(this, b, c); vb.call(this, b, c); var e = ka.call(this, b, c); d !== e && a.attributeChangedCallback(this,
                c, d, e, b)
            }); wb ? c(HTMLElement.prototype, wb) : xb ? c(Element.prototype, xb) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."); yb(a, Element.prototype, { La: ad, append: bd }); cd(a, { kb: dd, jb: ed, ub: fd, remove: gd })
        } function cd(a, b)
        {
            var c = Element.prototype; c.before = function (c)
            {
                for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f]; f = d.filter(function (a) { return a instanceof Node && m(a) }); b.kb.apply(this, d); for (var g = 0; g < f.length; g++) a.a(f[g]); if (m(this)) for (f = 0; f < d.length; f++) g = d[f],
                g instanceof Element && a.b(g)
            }; c.after = function (c) { for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f]; f = d.filter(function (a) { return a instanceof Node && m(a) }); b.jb.apply(this, d); for (var g = 0; g < f.length; g++) a.a(f[g]); if (m(this)) for (f = 0; f < d.length; f++) g = d[f], g instanceof Element && a.b(g) }; c.replaceWith = function (c)
            {
                for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f]; f = d.filter(function (a) { return a instanceof Node && m(a) }); var g = m(this); b.ub.apply(this, d); for (var h = 0; h < f.length; h++) a.a(f[h]);
                if (g) for (a.a(this), f = 0; f < d.length; f++) g = d[f], g instanceof Element && a.b(g)
            }; c.remove = function () { var c = m(this); b.remove.call(this); c && a.a(this) }
        } function hd(a)
        {
            function b(b, d) { Object.defineProperty(b, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function (b) { if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b); else { var c = void 0; if (this.firstChild) { var e = this.childNodes, h = e.length; if (0 < h && m(this)) { c = Array(h); for (var n = 0; n < h; n++) c[n] = e[n] } } d.set.call(this, b); if (c) for (b = 0; b < c.length; b++) a.a(c[b]) } } }) }
            u(Node.prototype, "insertBefore", function (b, d) { if (b instanceof DocumentFragment) { var c = Array.prototype.slice.apply(b.childNodes); b = zb.call(this, b, d); if (m(this)) for (d = 0; d < c.length; d++) a.b(c[d]); return b } c = m(b); d = zb.call(this, b, d); c && a.a(b); m(this) && a.b(b); return d }); u(Node.prototype, "appendChild", function (b)
            {
                if (b instanceof DocumentFragment) { var c = Array.prototype.slice.apply(b.childNodes); b = ja.call(this, b); if (m(this)) for (var e = 0; e < c.length; e++) a.b(c[e]); return b } c = m(b); e = ja.call(this, b); c && a.a(b); m(this) &&
                a.b(b); return e
            }); u(Node.prototype, "cloneNode", function (b) { b = rb.call(this, b); this.ownerDocument.__CE_hasRegistry ? a.c(b) : a.j(b); return b }); u(Node.prototype, "removeChild", function (b) { var c = m(b), e = Da.call(this, b); c && a.a(b); return e }); u(Node.prototype, "replaceChild", function (b, d)
            {
                if (b instanceof DocumentFragment) { var c = Array.prototype.slice.apply(b.childNodes); b = Ab.call(this, b, d); if (m(this)) for (a.a(d), d = 0; d < c.length; d++) a.b(c[d]); return b } c = m(b); var f = Ab.call(this, b, d), g = m(this); g && a.a(d); c && a.a(b); g &&
                a.b(b); return f
            }); Fa && Fa.get ? b(Node.prototype, Fa) : a.u(function (a) { b(a, { enumerable: !0, configurable: !0, get: function () { for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent); return a.join("") }, set: function (a) { for (; this.firstChild;) Da.call(this, this.firstChild); ja.call(this, document.createTextNode(a)) } }) })
        } function id(a)
        {
            u(Document.prototype, "createElement", function (b) { if (this.__CE_hasRegistry) { var c = a.f(b); if (c) return new c.constructor } b = Ca.call(this, b); a.g(b); return b });
            u(Document.prototype, "importNode", function (b, c) { b = jd.call(this, b, c); this.__CE_hasRegistry ? a.c(b) : a.j(b); return b }); u(Document.prototype, "createElementNS", function (b, c) { if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) { var d = a.f(c); if (d) return new d.constructor } b = kd.call(this, b, c); a.g(b); return b }); yb(a, Document.prototype, { La: ld, append: md })
        } function yb(a, b, c)
        {
            b.prepend = function (b)
            {
                for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f]; f = d.filter(function (a)
                {
                    return a instanceof
                    Node && m(a)
                }); c.La.apply(this, d); for (var g = 0; g < f.length; g++) a.a(f[g]); if (m(this)) for (f = 0; f < d.length; f++) g = d[f], g instanceof Element && a.b(g)
            }; b.append = function (b) { for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f]; f = d.filter(function (a) { return a instanceof Node && m(a) }); c.append.apply(this, d); for (var g = 0; g < f.length; g++) a.a(f[g]); if (m(this)) for (f = 0; f < d.length; f++) g = d[f], g instanceof Element && a.b(g) }
        } function nd(a)
        {
            window.HTMLElement = function ()
            {
                function b()
                {
                    var b = this.constructor, d = a.C(b); if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
                    var e = d.constructionStack; if (!e.length) return e = Ca.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e; d = e.length - 1; var f = e[d]; if (f === Bb) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times."); e[d] = Bb; Object.setPrototypeOf(f, b.prototype); a.g(f); return f
                } b.prototype = od.prototype; return b
            }()
        } function B(a)
        {
            this.f = !1; this.a = a; this.h = new Map; this.g = function (a) { return a() }; this.b = !1; this.c =
            []; this.i = new Ga(a, document)
        } function Cb() { var a = this; this.b = this.a = void 0; this.c = new Promise(function (b) { a.b = b; a.a && b(a.a) }) } function Ga(a, b) { this.b = a; this.a = b; this.N = void 0; this.b.c(this.a); "loading" === this.a.readyState && (this.N = new MutationObserver(this.f.bind(this)), this.N.observe(this.a, { childList: !0, subtree: !0 })) } function A() { this.s = new Map; this.l = new Map; this.i = []; this.h = !1 } function l(a, b, c)
        {
            if (a !== Db) throw new TypeError("Illegal constructor"); a = document.createDocumentFragment(); a.__proto__ =
            l.prototype; a.D(b, c); return a
        } function la(a) { if (!a.__shady || void 0 === a.__shady.firstChild) { a.__shady = a.__shady || {}; a.__shady.firstChild = Ha(a); a.__shady.lastChild = Ia(a); Eb(a); for (var b = a.__shady.childNodes = S(a), c = 0, d; c < b.length && (d = b[c]) ; c++) d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, Fb(d) } } function pd(a) { var b = a && a.N; b && (b.ba.delete(a.ab), b.ba.size || (a.fb.__shady.W = null)) } function qd(a, b)
        {
            a.__shady = a.__shady || {}; a.__shady.W ||
            (a.__shady.W = new ma); a.__shady.W.ba.add(b); var c = a.__shady.W; return { ab: b, N: c, fb: a, takeRecords: function () { return c.takeRecords() } }
        } function ma() { this.a = !1; this.addedNodes = []; this.removedNodes = []; this.ba = new Set } function T(a) { return a.__shady && void 0 !== a.__shady.firstChild } function L(a) { return "ShadyRoot" === a.Wa } function Z(a) { a = a.getRootNode(); if (L(a)) return a } function Ja(a, b)
        {
            if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]) ; d++)
                {
                var f = Object.getOwnPropertyDescriptor(b, e); f &&
                Object.defineProperty(a, e, f)
            }
        } function Ka(a, b) { for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d]; for (d = 0; d < c.length; d++) Ja(a, c[d]); return a } function rd(a, b) { for (var c in b) a[c] = b[c] } function Gb(a) { La.push(a); Ma.textContent = Hb++ } function Ib(a) { Na || (Na = !0, Gb(na)); aa.push(a) } function na() { Na = !1; for (var a = !!aa.length; aa.length;) aa.shift()(); return a } function sd(a, b)
        {
            var c = b.getRootNode(); return a.map(function (a)
            {
                var b = c === a.target.getRootNode(); if (b && a.addedNodes)
                {
                    if (b = Array.from(a.addedNodes).filter(function (a)
                    {
                    return c ===
                    a.getRootNode()
                    }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", { value: b, configurable: !0 }), a
                } else if (b) return a
            }).filter(function (a) { return a })
        } function Jb(a) { switch (a) { case "&": return "&amp;"; case "<": return "&lt;"; case ">": return "&gt;"; case '"': return "&quot;"; case "\u00a0": return "&nbsp;" } } function Kb(a) { for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0; return b } function Oa(a, b)
        {
            "template" === a.localName && (a = a.content); for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g; e < f && (g = d[e]) ; e++)
            {
                a: {
                    var h =
                    g; var n = a; var R = b; switch (h.nodeType) { case Node.ELEMENT_NODE: for (var k = h.localName, ia = "<" + k, l = h.attributes, m = 0; n = l[m]; m++) ia += " " + n.name + '="' + n.value.replace(td, Jb) + '"'; ia += ">"; h = ud[k] ? ia : ia + Oa(h, R) + "</" + k + ">"; break a; case Node.TEXT_NODE: h = h.data; h = n && vd[n.localName] ? h : h.replace(wd, Jb); break a; case Node.COMMENT_NODE: h = "\x3c!--" + h.data + "--\x3e"; break a; default: throw window.console.error(h), Error("not implemented"); }
                } c += h
            } return c
        } function U(a) { F.currentNode = a; return F.parentNode() } function Ha(a)
        {
            F.currentNode =
            a; return F.firstChild()
        } function Ia(a) { F.currentNode = a; return F.lastChild() } function Lb(a) { F.currentNode = a; return F.previousSibling() } function Mb(a) { F.currentNode = a; return F.nextSibling() } function S(a) { var b = []; F.currentNode = a; for (a = F.firstChild() ; a;) b.push(a), a = F.nextSibling(); return b } function Nb(a) { x.currentNode = a; return x.parentNode() } function Ob(a) { x.currentNode = a; return x.firstChild() } function Pb(a) { x.currentNode = a; return x.lastChild() } function Qb(a) { x.currentNode = a; return x.previousSibling() }
        function Rb(a) { x.currentNode = a; return x.nextSibling() } function Sb(a) { var b = []; x.currentNode = a; for (a = x.firstChild() ; a;) b.push(a), a = x.nextSibling(); return b } function Tb(a) { return Oa(a, function (a) { return S(a) }) } function Ub(a) { switch (a.nodeType) { case Node.ELEMENT_NODE: case Node.DOCUMENT_FRAGMENT_NODE: a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1); for (var b = "", c; c = a.nextNode() ;) b += c.nodeValue; return b; default: return a.nodeValue } } function M(a, b, c)
        {
            for (var d in b)
            {
                var e = Object.getOwnPropertyDescriptor(a,
                d); e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a)
            }
        } function N(a) { M(a, Vb); M(a, Pa); M(a, Qa) } function Wb(a, b, c)
        {
            Fb(a); c = c || null; a.__shady = a.__shady || {}; b.__shady = b.__shady || {}; c && (c.__shady = c.__shady || {}); a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild; var d = a.__shady.previousSibling; d && d.__shady && (d.__shady.nextSibling = a); (d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a); a.__shady.parentNode = b; c ? c === b.__shady.firstChild &&
            (b.__shady.firstChild = a) : (b.__shady.lastChild = a, b.__shady.firstChild || (b.__shady.firstChild = a)); b.__shady.childNodes = null
        } function Ra(a, b, c)
        {
            if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent."); if (c) { var d = c.__shady && c.__shady.parentNode; if (void 0 !== d && d !== a || void 0 === d && U(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."); } if (c === b) return b; b.parentNode &&
            Sa(b.parentNode, b); d = Z(a); var e; if (e = d) a: { if (!b.__noInsertionPoint) { var f; "slot" === b.localName ? f = [b] : b.querySelectorAll && (f = b.querySelectorAll("slot")); if (f && f.length) { e = f; break a } } e = void 0 } f = e; d && ("slot" === a.localName || f) && d.M(); if (T(a))
            {
                e = c; Eb(a); a.__shady = a.__shady || {}; void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null); if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                {
                    for (var g = b.childNodes, h = 0; h < g.length; h++) Wb(g[h], a, e); b.__shady = b.__shady || {}; e = void 0 !== b.__shady.firstChild ? null : void 0; b.__shady.firstChild =
                    b.__shady.lastChild = e; b.__shady.childNodes = e
                } else Wb(b, a, e); if (Ta(a)) { a.__shady.root.M(); var n = !0 } else a.__shady.root && (n = !0)
            } n || (n = L(a) ? a.host : a, c ? (c = Xb(c), Ua.call(n, b, c)) : Yb.call(n, b)); Zb(a, b); f && d.$a(f); return b
        } function Sa(a, b)
        {
            if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b); var c = Z(b); if (T(a))
            {
                b.__shady = b.__shady || {}; a.__shady = a.__shady || {}; b === a.__shady.firstChild && (a.__shady.firstChild = b.__shady.nextSibling); b === a.__shady.lastChild && (a.__shady.lastChild =
                b.__shady.previousSibling); var d = b.__shady.previousSibling; var e = b.__shady.nextSibling; d && (d.__shady = d.__shady || {}, d.__shady.nextSibling = e); e && (e.__shady = e.__shady || {}, e.__shady.previousSibling = d); b.__shady.parentNode = b.__shady.previousSibling = b.__shady.nextSibling = void 0; void 0 !== a.__shady.childNodes && (a.__shady.childNodes = null); if (Ta(a)) { a.__shady.root.M(); var f = !0 }
            } $b(b); c && ((e = a && "slot" === a.localName) && (f = !0), ((d = c.gb(b)) || e) && c.M()); f || (f = L(a) ? a.host : a, (!a.__shady.root && "slot" !== b.localName ||
            f === U(b)) && ba.call(f, b)); Zb(a, null, b); return b
        } function $b(a) { if (a.__shady && void 0 !== a.__shady.ta) for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]) ; c++) $b(e); a.__shady && (a.__shady.ta = void 0) } function Xb(a) { var b = a; a && "slot" === a.localName && (b = (b = a.__shady && a.__shady.U) && b.length ? b[0] : Xb(a.nextSibling)); return b } function Ta(a) { return (a = a && a.__shady && a.__shady.root) && a.Ba() } function ac(a, b)
        {
            "slot" === b ? (a = a.parentNode, Ta(a) && a.__shady.root.M()) : "slot" === a.localName && "name" === b && (b = Z(a)) && (b.ib(a),
            b.M())
        } function Zb(a, b, c) { if (a = a.__shady && a.__shady.W) b && a.addedNodes.push(b), c && a.removedNodes.push(c), a.wb() } function bc(a) { if (a && a.nodeType) { a.__shady = a.__shady || {}; var b = a.__shady.ta; void 0 === b && (L(a) ? b = a : b = (b = a.parentNode) ? bc(b) : a, document.documentElement.contains(a) && (a.__shady.ta = b)); return b } } function oa(a, b, c) { var d = []; cc(a.childNodes, b, c, d); return d } function cc(a, b, c, d)
        {
            for (var e = 0, f = a.length, g; e < f && (g = a[e]) ; e++)
            {
                var h; if (h = g.nodeType === Node.ELEMENT_NODE)
                {
                    h = g; var n = b, R = c, k = d, l = n(h); l && k.push(h);
                    R && R(l) ? h = l : (cc(h.childNodes, n, R, k), h = void 0)
                } if (h) break
            }
        } function dc(a) { a = a.getRootNode(); L(a) && a.Ea() } function ec(a, b, c) { pa || (pa = window.ShadyCSS && window.ShadyCSS.ScopingShim); pa && "class" === b ? pa.setElementClass(a, c) : (fc.call(a, b, c), ac(a, b)) } function gc(a, b) { if (a.ownerDocument !== document) return Va.call(document, a, b); var c = Va.call(document, a, !1); if (b) { a = a.childNodes; b = 0; for (var d; b < a.length; b++) d = gc(a[b], !0), c.appendChild(d) } return c } function Wa(a, b)
        {
            var c = [], d = a; for (a = a === window ? window : a.getRootNode() ; d;) c.push(d),
            d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode; c[c.length - 1] === document && c.push(window); return c
        } function hc(a, b) { if (!L) return a; a = Wa(a, !0); for (var c = 0, d, e, f, g; c < b.length; c++) if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (g = a.indexOf(f), e = f), !L(f) || -1 < g) return d } function Xa(a) { function b(b, d) { b = new a(b, d); b.ja = d && !!d.composed; return b } rd(b, a); b.prototype = a.prototype; return b } function ic(a, b, c)
        {
            if (c = b.__handlers && b.__handlers[a.type] &&
            b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.Ua) ; d++);
        } function xd(a)
        {
            var b = a.composedPath(); Object.defineProperty(a, "currentTarget", { get: function () { return d }, configurable: !0 }); for (var c = b.length - 1; 0 <= c; c--) { var d = b[c]; ic(a, d, "capture"); if (a.ka) return } Object.defineProperty(a, "eventPhase", { get: function () { return Event.AT_TARGET } }); var e; for (c = 0; c < b.length; c++)
            {
                d = b[c]; var f = d.__shady && d.__shady.root; if (!c || f && f === e) if (ic(a, d, "bubble"), d !== window && (e = d.getRootNode()),
                a.ka) break
            }
        } function jc(a, b, c, d, e, f) { for (var g = 0; g < a.length; g++) { var h = a[g], n = h.type, R = h.capture, k = h.once, l = h.passive; if (b === h.node && c === n && d === R && e === k && f === l) return g } return -1 } function kc(a, b, c)
        {
            if (b)
            {
                if ("object" === typeof c) { var d = !!c.capture; var e = !!c.once; var f = !!c.passive } else d = !!c, f = e = !1; var g = c && c.la || this, h = b.Z; if (h) { if (-1 < jc(h, g, a, d, e, f)) return } else b.Z = []; h = function (d)
                {
                    e && this.removeEventListener(a, b, c); d.__target || lc(d); if (g !== this)
                    {
                        var f = Object.getOwnPropertyDescriptor(d, "currentTarget");
                        Object.defineProperty(d, "currentTarget", { get: function () { return g }, configurable: !0 })
                    } if (d.composed || -1 < d.composedPath().indexOf(g)) if (d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === g) { var h = "object" === typeof b && b.handleEvent ? b.handleEvent(d) : b.call(g, d); g !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget); return h }
                }; b.Z.push({
                    node: this, type: a, capture: d,
                    once: e, passive: f, zb: h
                }); Ya[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][d ? "capture" : "bubble"].push(h)) : (this instanceof Window ? mc : nc).call(this, a, h, c)
            }
        } function oc(a, b, c)
        {
            if (b)
            {
                if ("object" === typeof c) { var d = !!c.capture; var e = !!c.once; var f = !!c.passive } else d = !!c, f = e = !1; var g = c && c.la || this, h = void 0; var n = null; try { n = b.Z } catch (R) { } n && (e = jc(n, g, a, d, e, f), -1 < e && (h = n.splice(e, 1)[0].zb, n.length || (b.Z = void 0))); (this instanceof Window ?
                    pc : qc).call(this, a, h || b, c); h && Ya[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], h = a.indexOf(h), -1 < h && a.splice(h, 1))
            }
        } function yd() { for (var a in Ya) window.addEventListener(a, function (a) { a.__target || (lc(a), xd(a)) }, !0) } function lc(a) { a.__target = a.target; a.za = a.relatedTarget; if (C.V) { var b = rc, c = Object.getPrototypeOf(a); if (!c.hasOwnProperty("__patchProto")) { var d = Object.create(c); d.Bb = c; Ja(d, b); c.__patchProto = d } a.__proto__ = c.__patchProto } else Ja(a, rc) } function ca(a,
        b) { return { index: a, X: [], aa: b } } function zd(a, b, c, d)
        {
            var e = 0, f = 0, g = 0, h = 0, n = Math.min(b - e, d - f); if (0 == e && 0 == f) a: { for (g = 0; g < n; g++) if (a[g] !== c[g]) break a; g = n } if (b == a.length && d == c.length) { h = a.length; for (var k = c.length, l = 0; l < n - g && Ad(a[--h], c[--k]) ;) l++; h = l } e += g; f += g; b -= h; d -= h; if (!(b - e || d - f)) return []; if (e == b) { for (b = ca(e, 0) ; f < d;) b.X.push(c[f++]); return [b] } if (f == d) return [ca(e, b - e)]; n = e; g = f; d = d - g + 1; h = b - n + 1; b = Array(d); for (k = 0; k < d; k++) b[k] = Array(h), b[k][0] = k; for (k = 0; k < h; k++) b[0][k] = k; for (k = 1; k < d; k++) for (l = 1; l < h; l++) if (a[n +
            l - 1] === c[g + k - 1]) b[k][l] = b[k - 1][l - 1]; else { var m = b[k - 1][l] + 1, p = b[k][l - 1] + 1; b[k][l] = m < p ? m : p } n = b.length - 1; g = b[0].length - 1; d = b[n][g]; for (a = []; 0 < n || 0 < g;) n ? g ? (h = b[n - 1][g - 1], k = b[n - 1][g], l = b[n][g - 1], m = k < l ? k < h ? k : h : l < h ? l : h, m == h ? (h == d ? a.push(0) : (a.push(1), d = h), n--, g--) : m == k ? (a.push(3), n--, d = k) : (a.push(2), g--, d = l)) : (a.push(3), n--) : (a.push(2), g--); a.reverse(); b = void 0; n = []; for (g = 0; g < a.length; g++) switch (a[g])
                {
                case 0: b && (n.push(b), b = void 0); e++; f++; break; case 1: b || (b = ca(e, 0)); b.aa++; e++; b.X.push(c[f]); f++; break;
                case 2: b || (b = ca(e, 0)); b.aa++; e++; break; case 3: b || (b = ca(e, 0)), b.X.push(c[f]), f++
            } b && n.push(b); return n
        } function Ad(a, b) { return a === b } function sc(a) { var b = []; do b.unshift(a); while (a = a.parentNode); return b } function tc(a) { dc(a); return a.__shady && a.__shady.assignedSlot || null } function I(a, b) { for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) { var e = c[d], f = Object.getOwnPropertyDescriptor(b, e); f.value ? a[e] = f.value : Object.defineProperty(a, e, f) } } function Bd()
        {
            var a = window.customElements && window.customElements.nativeHTMLElement ||
            HTMLElement; I(window.Node.prototype, Cd); I(window.Window.prototype, Dd); I(window.Text.prototype, Ed); I(window.DocumentFragment.prototype, Za); I(window.Element.prototype, uc); I(window.Document.prototype, vc); window.HTMLSlotElement && I(window.HTMLSlotElement.prototype, wc); I(a.prototype, Fd); C.V && (N(window.Node.prototype), N(window.Text.prototype), N(window.DocumentFragment.prototype), N(window.Element.prototype), N(a.prototype), N(window.Document.prototype), window.HTMLSlotElement && N(window.HTMLSlotElement.prototype))
        }
        function xc(a) { var b = Gd.has(a); a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a); return !b && a } function m(a) { var b = a.isConnected; if (void 0 !== b) return b; for (; a && !(a.__CE_isImportDocument || a instanceof Document) ;) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0); return !(!a || !(a.__CE_isImportDocument || a instanceof Document)) } function $a(a, b) { for (; b && b !== a && !b.nextSibling;) b = b.parentNode; return b && b !== a ? b.nextSibling : null } function J(a, b, c)
        {
            c = c ? c : new Set; for (var d = a; d;)
            {
                if (d.nodeType ===
                Node.ELEMENT_NODE) { var e = d; b(e); var f = e.localName; if ("link" === f && "import" === e.getAttribute("rel")) { d = e.import; if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) J(d, b, c); d = $a(a, e); continue } else if ("template" === f) { d = $a(a, e); continue } if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) J(e, b, c) } d = d.firstChild ? d.firstChild : $a(a, d)
            }
        } function u(a, b, c) { a[b] = c } function ab(a)
        {
            a = a.replace(G.mb, "").replace(G.port, ""); var b = yc, c = a, d = new za; d.start = 0; d.end = c.length; for (var e =
            d, f = 0, g = c.length; f < g; f++) if ("{" === c[f]) { e.rules || (e.rules = []); var h = e, n = h.rules[h.rules.length - 1] || null; e = new za; e.start = f + 1; e.parent = h; e.previous = n; h.rules.push(e) } else "}" === c[f] && (e.end = f + 1, e = e.parent || d); return b(d, a)
        } function yc(a, b)
        {
            var c = b.substring(a.start, a.end - 1); a.parsedCssText = a.cssText = c.trim(); a.parent && ((c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Hd(c), c = c.replace(G.Ka, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = !c.indexOf("@"),
            a.atRule) ? c.indexOf("@media") ? c.match(G.rb) && (a.type = O.ia, a.keyframesName = a.selector.split(G.Ka).pop()) : a.type = O.MEDIA_RULE : a.type = c.indexOf("--") ? O.STYLE_RULE : O.va); if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]) ; d++) yc(f, b); return a
        } function Hd(a) { return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) { a = c; for (c = 6 - a.length; c--;) a = "0" + a; return "\\" + a }) } function zc(a, b, c)
        {
            c = void 0 === c ? "" : c; var d = ""; if (a.cssText || a.rules)
            {
                var e = a.rules, f; if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
                if (f) { f = 0; for (var g = e.length, h; f < g && (h = e[f]) ; f++) d = zc(h, b, d) } else b ? b = a.cssText : (b = a.cssText, b = b.replace(G.Fa, "").replace(G.Ja, ""), b = b.replace(G.sb, "").replace(G.yb, "")), (d = b.trim()) && (d = "  " + d + "\n")
            } d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n")); return c
        } function Ac(a) { q = a && a.shimcssproperties ? !1 : w || !(navigator.userAgent.match("AppleWebKit/601") || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)")) } function V(a, b)
        {
            if (!a) return ""; "string" === typeof a &&
            (a = ab(a)); b && W(a, b); return zc(a, q)
        } function qa(a) { !a.__cssRules && a.textContent && (a.__cssRules = ab(a.textContent)); return a.__cssRules || null } function Bc(a) { return !!a.parent && a.parent.type === O.ia } function W(a, b, c, d) { if (a) { var e = !1, f = a.type; if (d && f === O.MEDIA_RULE) { var g = a.selector.match(Id); g && (window.matchMedia(g[1]).matches || (e = !0)) } f === O.STYLE_RULE ? b(a) : c && f === O.ia ? c(a) : f === O.va && (e = !0); if ((a = a.rules) && !e) { e = 0; f = a.length; for (var h; e < f && (h = a[e]) ; e++) W(h, b, c, d) } } } function bb(a, b, c, d)
        {
            var e = document.createElement("style");
            b && e.setAttribute("scope", b); e.textContent = a; Cc(e, c, d); return e
        } function Cc(a, b, c) { b = b || document.head; b.insertBefore(a, c && c.nextSibling || b.firstChild); P ? a.compareDocumentPosition(P) === Node.DOCUMENT_POSITION_PRECEDING && (P = a) : P = a } function Dc(a, b)
        {
            var c = a.indexOf("var("); if (-1 === c) return b(a, "", "", ""); a: { var d = 0; var e = c + 3; for (var f = a.length; e < f; e++) if ("(" === a[e]) d++; else if (")" === a[e] && !--d) break a; e = -1 } d = a.substring(c + 4, e); c = a.substring(0, c); a = Dc(a.substring(e + 1), b); e = d.indexOf(","); return -1 === e ? b(c,
            d.trim(), "", a) : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a)
        } function ra(a, b) { w ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b) } function Q(a) { var b = a.localName, c = ""; b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends); return { is: b, Y: c } } function Ec(a)
        {
            for (var b = 0; b < a.length; b++)
            {
                var c = a[b]; if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++)
                    {
                    var e = c.addedNodes[d];
                    if (e.nodeType === Node.ELEMENT_NODE) { var f = e.getRootNode(); var g = e; var h = []; g.classList ? h = Array.from(g.classList) : g instanceof window.SVGElement && g.hasAttribute("class") && (h = g.getAttribute("class").split(/\s+/)); g = h; h = g.indexOf(v.c); (g = -1 < h ? g[h + 1] : "") && f === e.ownerDocument ? v.a(e, g, !0) : f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host) && (f = Q(f).is, g !== f && (g && v.a(e, g, !0), v.a(e, f))) }
                }
            }
        } function Jd(a)
        {
            if (a = sa[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion ||
            0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1
        } function Fc(a) { return a._applyShimCurrentVersion === a._applyShimNextVersion } function Kd(a) { a._applyShimValidatingVersion = a._applyShimNextVersion; a.b || (a.b = !0, Ld.then(function () { a._applyShimCurrentVersion = a._applyShimNextVersion; a.b = !1 })) } function ob(a)
        {
            requestAnimationFrame(function ()
            {
                Gc ? Gc(a) : (cb || (cb = new Promise(function (a) { db = a }), "complete" === document.readyState ? db() : document.addEventListener("readystatechange", function ()
                {
                    "complete" === document.readyState &&
                    db()
                })), cb.then(function () { a && a() }))
            })
        } (function ()
        {
            if (!function () { var a = document.createEvent("Event"); a.initEvent("foo", !0, !0); a.preventDefault(); return a.defaultPrevented }()) { var a = Event.prototype.preventDefault; Event.prototype.preventDefault = function () { this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented", { get: function () { return !0 }, configurable: !0 })) } } var b = /Trident/.test(navigator.userAgent); if (!window.CustomEvent || b && "function" !== typeof window.CustomEvent) window.CustomEvent =
            function (a, b) { b = b || {}; var c = document.createEvent("CustomEvent"); c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail); return c }, window.CustomEvent.prototype = window.Event.prototype; if (!window.Event || b && "function" !== typeof window.Event) { var c = window.Event; window.Event = function (a, b) { b = b || {}; var c = document.createEvent("Event"); c.initEvent(a, !!b.bubbles, !!b.cancelable); return c }; if (c) for (var d in c) window.Event[d] = c[d]; window.Event.prototype = c.prototype } if (!window.MouseEvent || b && "function" !== typeof window.MouseEvent)
            {
                b =
                window.MouseEvent; window.MouseEvent = function (a, b) { b = b || {}; var c = document.createEvent("MouseEvent"); c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget); return c }; if (b) for (d in b) window.MouseEvent[d] = b[d]; window.MouseEvent.prototype = b.prototype
            } Array.from || (Array.from = function (a) { return [].slice.call(a) }); Object.assign || (Object.assign = function (a, b)
            {
                for (var c = [].slice.call(arguments,
                1), d = 0, e; d < c.length; d++) if (e = c[d]) for (var f = a, k = e, l = Object.getOwnPropertyNames(k), m = 0; m < l.length; m++) e = l[m], f[e] = k[e]; return a
            })
        })(window.WebComponents); (function ()
        {
            function a() { } var b = "undefined" === typeof HTMLTemplateElement; /Trident/.test(navigator.userAgent) && function () { var a = Document.prototype.importNode; Document.prototype.importNode = function () { var b = a.apply(this, arguments); if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) { var c = this.createDocumentFragment(); c.appendChild(b); return c } return b } }();
            var c = Node.prototype.cloneNode, d = Document.prototype.createElement, e = Document.prototype.importNode, f = function () { if (!b) { var a = document.createElement("template"), c = document.createElement("template"); c.content.appendChild(document.createElement("div")); a.content.appendChild(c); a = a.cloneNode(!0); return 0 === a.content.childNodes.length || 0 === a.content.firstChild.content.childNodes.length || !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment) } }(); if (b)
            {
                var g = function (a)
                {
                    switch (a)
                    {
                        case "&": return "&amp;";
                        case "<": return "&lt;"; case ">": return "&gt;"; case "\u00a0": return "&nbsp;"
                    }
                }, h = function (b) { Object.defineProperty(b, "innerHTML", { get: function () { for (var a = "", b = this.content.firstChild; b; b = b.nextSibling) a += b.outerHTML || b.data.replace(t, g); return a }, set: function (b) { k.body.innerHTML = b; for (a.b(k) ; this.content.firstChild;) this.content.removeChild(this.content.firstChild); for (; k.body.firstChild;) this.content.appendChild(k.body.firstChild) }, configurable: !0 }) }, k = document.implementation.createHTMLDocument("template"),
                l = !0, m = document.createElement("style"); m.textContent = "template{display:none;}"; var p = document.head; p.insertBefore(m, p.firstElementChild); a.prototype = Object.create(HTMLElement.prototype); var r = !document.createElement("div").hasOwnProperty("innerHTML"); a.O = function (b) { if (!b.content) { b.content = k.createDocumentFragment(); for (var c; c = b.firstChild;) b.content.appendChild(c); if (r) b.__proto__ = a.prototype; else if (b.cloneNode = function (b) { return a.a(this, b) }, l) try { h(b) } catch (y) { l = !1 } a.b(b.content) } }; h(a.prototype);
                a.b = function (b) { b = b.querySelectorAll("template"); for (var c = 0, d = b.length, e; c < d && (e = b[c]) ; c++) a.O(e) }; document.addEventListener("DOMContentLoaded", function () { a.b(document) }); Document.prototype.createElement = function () { var b = d.apply(this, arguments); "template" === b.localName && a.O(b); return b }; var t = /[&\u00A0<>]/g
            } if (b || f) a.a = function (a, b) { var d = c.call(a, !1); this.O && this.O(d); b && (d.content.appendChild(c.call(a.content, !0)), this.ra(d.content, a.content)); return d }, a.prototype.cloneNode = function (b)
            {
                return a.a(this,
                b)
            }, a.ra = function (a, b) { if (b.querySelectorAll) { b = b.querySelectorAll("template"); a = a.querySelectorAll("template"); for (var c = 0, d = a.length, e, f; c < d; c++) f = b[c], e = a[c], this.O && this.O(f), e.parentNode.replaceChild(f.cloneNode(!0), e) } }, Node.prototype.cloneNode = function (b) { if (this instanceof DocumentFragment) if (b) var d = this.ownerDocument.importNode(this, !0); else return this.ownerDocument.createDocumentFragment(); else d = c.call(this, b); b && a.ra(d, this); return d }, Document.prototype.importNode = function (b, c)
            {
                if ("template" ===
                b.localName) return a.a(b, c); var d = e.call(this, b, c); c && a.ra(d, b); return d
            }, f && (window.HTMLTemplateElement.prototype.cloneNode = function (b) { return a.a(this, b) }); b && (window.HTMLTemplateElement = a)
        })(); !function (a, b) { "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.Eb ? define(b) : a.ES6Promise = b() }(window, function ()
        {
            function a(a, b) { E[x] = a; E[x + 1] = b; x += 2; 2 === x && (H ? H(g) : O()) } function b() { return function () { return process.Hb(g) } } function c()
            {
                return "undefined" !=
                typeof C ? function () { C(g) } : f()
            } function d() { var a = 0, b = new L(g), c = document.createTextNode(""); return b.observe(c, { characterData: !0 }), function () { c.data = a = ++a % 2 } } function e() { var a = new MessageChannel; return a.port1.onmessage = g, function () { return a.port2.postMessage(0) } } function f() { var a = setTimeout; return function () { return a(g, 1) } } function g() { for (var a = 0; a < x; a += 2) (0, E[a])(E[a + 1]), E[a] = void 0, E[a + 1] = void 0; x = 0 } function h() { try { var a = require("vertx"); return C = a.Jb || a.Ib, c() } catch (Hc) { return f() } } function k(b,
            c) { var d = arguments, e = this, f = new this.constructor(m); void 0 === f[M] && Ic(f); var g = e.o; return g ? !function () { var b = d[g - 1]; a(function () { return Jc(g, f, b, e.m) }) }() : u(e, f, b, c), f } function l(a) { if (a && "object" == typeof a && a.constructor === this) return a; var b = new this(m); return y(b, a), b } function m() { } function p(a) { try { return a.then } catch (Hc) { return N.error = Hc, N } } function r(a, b, c, d) { try { a.call(b, c, d) } catch (Od) { return Od } } function t(b, c, d)
            {
                a(function (a)
                {
                    var b = !1, e = r(d, c, function (d) { b || (b = !0, c !== d ? y(a, d) : q(a, d)) },
                    function (c) { b || (b = !0, z(a, c)) }); !b && e && (b = !0, z(a, e))
                }, b)
            } function v(a, b) { b.o === K ? q(a, b.m) : b.o === J ? z(a, b.m) : u(b, void 0, function (b) { return y(a, b) }, function (b) { return z(a, b) }) } function w(a, b, c) { b.constructor === a.constructor && c === k && b.constructor.resolve === l ? v(a, b) : c === N ? (z(a, N.error), N.error = null) : void 0 === c ? q(a, b) : "function" == typeof c ? t(a, b, c) : q(a, b) } function y(a, b)
            {
                if (a === b) z(a, new TypeError("You cannot resolve a promise with itself")); else
                {
                    var c = typeof b; null === b || "object" !== c && "function" !== c ? q(a,
                    b) : w(a, b, p(b))
                }
            } function B(a) { a.Ca && a.Ca(a.m); X(a) } function q(b, c) { b.o === I && (b.m = c, b.o = K, 0 !== b.T.length && a(X, b)) } function z(b, c) { b.o === I && (b.o = J, b.m = c, a(B, b)) } function u(b, c, d, e) { var f = b.T, g = f.length; b.Ca = null; f[g] = c; f[g + K] = d; f[g + J] = e; 0 === g && b.o && a(X, b) } function X(a) { var b = a.T, c = a.o; if (0 !== b.length) { for (var d, e, f = a.m, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? Jc(c, d, e, f) : e(f); a.T.length = 0 } } function Kc() { this.error = null } function Jc(a, b, c, d)
            {
                var e = "function" == typeof c, f = void 0, g = void 0, h = void 0, X = void 0;
                if (e) { try { var k = c(d) } catch (Pd) { k = (P.error = Pd, P) } if (f = k, f === P ? (X = !0, g = f.error, f.error = null) : h = !0, b === f) return void z(b, new TypeError("A promises callback cannot return that same promise.")) } else f = d, h = !0; b.o !== I || (e && h ? y(b, f) : X ? z(b, g) : a === K ? q(b, f) : a === J && z(b, f))
            } function Lc(a, b) { try { b(function (b) { y(a, b) }, function (b) { z(a, b) }) } catch (Md) { z(a, Md) } } function Ic(a) { a[M] = Q++; a.o = void 0; a.m = void 0; a.T = [] } function da(a, b)
            {
                this.eb = a; this.J = new a(m); this.J[M] || Ic(this.J); F(b) ? (this.length = b.length, this.$ = b.length,
                this.m = Array(this.length), 0 === this.length ? q(this.J, this.m) : (this.length = this.length || 0, this.cb(b), 0 === this.$ && q(this.J, this.m))) : z(this.J, Error("Array Methods must be provided an Array"))
            } function D(a)
            {
                this[M] = Q++; this.m = this.o = void 0; this.T = []; if (m !== a)
                {
                    if ("function" != typeof a) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor"); if (this instanceof D) Lc(this, a); else throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
            } var A = void 0, F = A = Array.isArray ? Array.isArray : function (a) { return "[object Array]" === Object.prototype.toString.call(a) }, x = 0, C = void 0, H = void 0, G = (A = "undefined" != typeof window ? window : void 0) || {}, L = G.MutationObserver || G.WebKitMutationObserver; G = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel; var E = Array(1E3), O = void 0; O = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? b() : L ? d() : G ? e() : A || "function" !=
            typeof require ? f() : h(); var M = Math.random().toString(36).substring(16), I = void 0, K = 1, J = 2, N = new Kc, P = new Kc, Q = 0; return da.prototype.cb = function (a) { for (var b = 0; this.o === I && b < a.length; b++) this.bb(a[b], b) }, da.prototype.bb = function (a, b) { var c = this.eb, d = c.resolve; d === l ? (d = p(a), d === k && a.o !== I ? this.oa(a.o, b, a.m) : "function" != typeof d ? (this.$--, this.m[b] = a) : c === D ? (c = new c(m), w(c, a, d), this.pa(c, b)) : this.pa(new c(function (b) { return b(a) }), b)) : this.pa(d(a), b) }, da.prototype.oa = function (a, b, c)
            {
                var d = this.J; d.o ===
                I && (this.$--, a === J ? z(d, c) : this.m[b] = c); 0 === this.$ && q(d, this.m)
            }, da.prototype.pa = function (a, b) { var c = this; u(a, void 0, function (a) { return c.oa(K, b, a) }, function (a) { return c.oa(J, b, a) }) }, D.g = function (a) { return (new da(this, a)).J }, D.h = function (a) { var b = this; return new b(F(a) ? function (c, d) { for (var e = a.length, f = 0; f < e; f++) b.resolve(a[f]).then(c, d) } : function (a, b) { return b(new TypeError("You must pass an array to race.")) }) }, D.resolve = l, D.i = function (a) { var b = new this(m); return z(b, a), b }, D.f = function (a) { H = a },
            D.c = function (b) { a = b }, D.b = a, D.prototype = { constructor: D, then: k, "catch": function (a) { return this.then(null, a) } }, D.a = function () { var a = void 0; if ("undefined" != typeof global) a = global; else if ("undefined" != typeof self) a = self; else try { a = Function("return this")() } catch (Nd) { throw Error("polyfill failed because global object is unavailable in this environment"); } var b = a.Promise; if (b) { var c = null; try { c = Object.prototype.toString.call(b.resolve()) } catch (Nd) { } if ("[object Promise]" === c && !b.Fb) return } a.Promise = D }, D.Promise =
            D, D.a(), D
        }); (function (a)
        {
            function b(a, b) { if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b); var c = document.createEvent("CustomEvent"); c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail); return c } function c(a) { if (m) return a.ownerDocument !== document ? a.ownerDocument : null; var b = a.__importDoc; if (!b && a.parentNode) { b = a.parentNode; if ("function" === typeof b.closest) b = b.closest("link[rel=import]"); else for (; !h(b) && (b = b.parentNode) ;); a.__importDoc = b } return b } function d(a)
            {
                var b = document.querySelectorAll("link[rel=import]:not(import-dependency)"),
                c = b.length; c ? l(b, function (b) { return g(b, function () { --c || a() }) }) : a()
            } function e(a) { function b() { "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a()) } document.addEventListener("readystatechange", b); b() } function f(a) { e(function () { return d(function () { return a && a() }) }) } function g(a, b)
            {
                if (a.__loaded) b && b(); else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b(); else
                {
                    var c = function (d)
                    {
                        a.removeEventListener(d.type,
                        c); a.__loaded = !0; b && b()
                    }; a.addEventListener("load", c); v && "style" === a.localName || a.addEventListener("error", c)
                }
            } function h(a) { return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel } function k() { var a = this; this.a = {}; this.b = 0; this.f = new MutationObserver(function (b) { return a.l(b) }); this.f.observe(document.head, { childList: !0, subtree: !0 }); this.c(document) } function l(a, b, c) { var d = a ? a.length : 0, e = c ? -1 : 1; for (c = c ? d - 1 : 0; c < d && 0 <= c; c += e) b(a[c], c) } var m = "import" in document.createElement("link"),
            p = null; !1 === "currentScript" in document && Object.defineProperty(document, "currentScript", { get: function () { return p || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null) }, configurable: !0 }); var q = /(^\/)|(^#)|(^[\w-\d]*:)/, r = /(url\()([^)]*)(\))/g, t = /(@import[\s]+(?!url\())([^;]*)(;)/g, x = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g, y = {
                nb: function (a, b)
                {
                    a.href && a.setAttribute("href", y.ua(a.getAttribute("href"), b)); a.src && a.setAttribute("src", y.ua(a.getAttribute("src"), b));
                    if ("style" === a.localName) { var c = y.Ma(a.textContent, b, r); a.textContent = y.Ma(c, b, t) }
                }, Ma: function (a, b, c) { return a.replace(c, function (a, c, d, e) { a = d.replace(/["']/g, ""); b && (a = y.Na(a, b)); return c + "'" + a + "'" + e }) }, ua: function (a, b) { return a && q.test(a) ? a : y.Na(a, b) }, Na: function (a, b)
                {
                    if (void 0 === y.ma) { y.ma = !1; try { var c = new URL("b", "http://a"); c.pathname = "c%20d"; y.ma = "http://a/c%20d" === c.href } catch (Lc) { } } if (y.ma) return (new URL(a, b)).href; c = y.Za; c || (c = document.implementation.createHTMLDocument("temp"), y.Za = c, c.xa =
                    c.createElement("base"), c.head.appendChild(c.xa), c.wa = c.createElement("a")); c.xa.href = b; c.wa.href = a; return c.wa.href || a
                }
            }, w = {
                async: !0, load: function (a, b, c)
                {
                    if (a) if (a.match(/^data:/)) { a = a.split(","); var d = a[1]; d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d); b(d) } else {
                        var e = new XMLHttpRequest; e.open("GET", a, w.async); e.onload = function ()
                        {
                            var a = e.responseURL || e.getResponseHeader("Location"); a && !a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a); var d = e.response || e.responseText;
                            304 === e.status || !e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d)
                        }; e.send()
                    } else c("error: href must be specified")
                }
            }, v = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent); k.prototype.c = function (a) { var b = this; a = a.querySelectorAll("link[rel=import]"); l(a, function (a) { return b.h(a) }) }; k.prototype.h = function (a)
            {
                var b = this, c = a.href; if (void 0 !== this.a[c]) { var d = this.a[c]; d && d.__loaded && (a.import = d, this.g(a)) } else this.b++, this.a[c] = "pending", w.load(c, function (a, d)
                {
                    a = b.s(a, d || c);
                    b.a[c] = a; b.b--; b.c(a); b.i()
                }, function () { b.a[c] = null; b.b--; b.i() })
            }; k.prototype.s = function (a, b)
            {
                if (!a) return document.createDocumentFragment(); v && (a = a.replace(x, function (a, b, c) { return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a })); var c = document.createElement("template"); c.innerHTML = a; if (c.content) a = c.content; else for (a = document.createDocumentFragment() ; c.firstChild;) a.appendChild(c.firstChild); if (c = a.querySelector("base")) b = y.ua(c.getAttribute("href"), b), c.removeAttribute("href"); c = a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]');
                var d = 0; l(c, function (a) { g(a); y.nb(a, b); a.setAttribute("import-dependency", ""); "script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), a.textContent = "", d++) }); return a
            }; k.prototype.i = function ()
            {
                var a = this; if (!this.b)
                {
                    this.f.disconnect(); this.flatten(document); var b = !1, c = !1, d = function () { c && b && (a.c(document), a.b || (a.f.observe(document.head, { childList: !0, subtree: !0 }), a.j())) };
                    this.v(function () { c = !0; d() }); this.u(function () { b = !0; d() })
                }
            }; k.prototype.flatten = function (a) { var b = this; a = a.querySelectorAll("link[rel=import]"); l(a, function (a) { var c = b.a[a.href]; (a.import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.import = a, b.flatten(c), a.appendChild(c)) }) }; k.prototype.u = function (a)
            {
                function b(e)
                {
                    if (e < d)
                    {
                        var f = c[e], h = document.createElement("script"); f.removeAttribute("import-dependency"); l(f.attributes, function (a)
                        {
                            return h.setAttribute(a.name,
                            a.value)
                        }); p = h; f.parentNode.replaceChild(h, f); g(h, function () { p = null; b(e + 1) })
                    } else a()
                } var c = document.querySelectorAll("script[import-dependency]"), d = c.length; b(0)
            }; k.prototype.v = function (a)
            {
                var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"), d = b.length; if (d)
                {
                    var e = v && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]"); l(b, function (b)
                    {
                        g(b, function () { b.removeAttribute("import-dependency"); --d || a() }); if (e && b.parentNode !== document.head)
                        {
                            var f =
                            document.createElement(b.localName); f.__appliedElement = b; f.setAttribute("type", "import-placeholder"); b.parentNode.insertBefore(f, b.nextSibling); for (f = c(b) ; f && c(f) ;) f = c(f); f.parentNode !== document.head && (f = null); document.head.insertBefore(b, f); b.removeAttribute("type")
                        }
                    })
                } else a()
            }; k.prototype.j = function () { var a = this, b = document.querySelectorAll("link[rel=import]"); l(b, function (b) { return a.g(b) }, !0) }; k.prototype.g = function (a)
            {
                a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), a.dispatchEvent(b(a.import ?
                "load" : "error", { bubbles: !1, cancelable: !1, detail: void 0 })))
            }; k.prototype.l = function (a) { var b = this; l(a, function (a) { return l(a.addedNodes, function (a) { a && a.nodeType === Node.ELEMENT_NODE && (h(a) ? b.h(a) : b.c(a)) }) }) }; if (m) { var z = document.querySelectorAll("link[rel=import]"); l(z, function (a) { a.import && "loading" === a.import.readyState || (a.__loaded = !0) }); z = function (a) { a = a.target; h(a) && (a.__loaded = !0) }; document.addEventListener("load", z, !0); document.addEventListener("error", z, !0) } else {
                var u = Object.getOwnPropertyDescriptor(Node.prototype,
                "baseURI"); Object.defineProperty((!u || u.configurable ? Node : Element).prototype, "baseURI", { get: function () { var a = h(this) ? this : c(this); return a ? a.href : u && u.get ? u.get.call(this) : (document.querySelector("base") || window.location).href }, configurable: !0, enumerable: !0 }); e(function () { return new k })
            } f(function () { return document.dispatchEvent(b("HTMLImportsLoaded", { cancelable: !0, bubbles: !0, detail: void 0 })) }); a.useNative = m; a.whenReady = f; a.importForElement = c
        })(window.HTMLImports = window.HTMLImports || {}); (function ()
        {
            window.WebComponents =
            window.WebComponents || { flags: {} }; var a = document.querySelector('script[src*="webcomponents-lite.js"]'), b = /wc-(.+)/, c = {}; if (!c.noOpts) { location.search.slice(1).split("&").forEach(function (a) { a = a.split("="); var d; a[0] && (d = a[0].match(b)) && (c[d[1]] = a[1] || !0) }); if (a) for (var d = 0, e; e = a.attributes[d]; d++) "src" !== e.name && (c[e.name] = e.value || !0); c.log && c.log.split ? (a = c.log.split(","), c.log = {}, a.forEach(function (a) { c.log[a] = !0 })) : c.log = {} } window.WebComponents.flags = c; if (a = c.shadydom) window.ShadyDOM = window.ShadyDOM ||
            {}, window.ShadyDOM.force = a; (a = c.register || c.ce) && window.customElements && (window.customElements.forcePolyfill = a)
        })(); var C = window.ShadyDOM || {}; C.ob = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode); var eb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild"); C.V = !!(eb && eb.configurable && eb.get); C.Ia = C.force || !C.ob; var Y = Element.prototype, Mc = Y.matches || Y.matchesSelector || Y.mozMatchesSelector || Y.msMatchesSelector || Y.oMatchesSelector || Y.webkitMatchesSelector, Ma = document.createTextNode(""),
        Hb = 0, La = []; (new MutationObserver(function () { for (; La.length;) try { La.shift()() } catch (a) { throw Ma.textContent = Hb++, a; } })).observe(Ma, { characterData: !0 }); var aa = [], Na; na.list = aa; ma.prototype.wb = function () { var a = this; this.a || (this.a = !0, Gb(function () { a.b() })) }; ma.prototype.b = function () { if (this.a) { this.a = !1; var a = this.takeRecords(); a.length && this.ba.forEach(function (b) { b(a) }) } }; ma.prototype.takeRecords = function ()
        {
            if (this.addedNodes.length || this.removedNodes.length)
            {
                var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
                this.addedNodes = []; this.removedNodes = []; return a
            } return []
        }; var Yb = Element.prototype.appendChild, Ua = Element.prototype.insertBefore, ba = Element.prototype.removeChild, fc = Element.prototype.setAttribute, Nc = Element.prototype.removeAttribute, fb = Element.prototype.cloneNode, Va = Document.prototype.importNode, nc = Element.prototype.addEventListener, qc = Element.prototype.removeEventListener, mc = Window.prototype.addEventListener, pc = Window.prototype.removeEventListener, gb = Element.prototype.dispatchEvent, Qd = Object.freeze({
            appendChild: Yb,
            insertBefore: Ua, removeChild: ba, setAttribute: fc, removeAttribute: Nc, cloneNode: fb, importNode: Va, addEventListener: nc, removeEventListener: qc, Kb: mc, Lb: pc, dispatchEvent: gb, querySelector: Element.prototype.querySelector, querySelectorAll: Element.prototype.querySelectorAll
        }), td = /[&\u00A0"]/g, wd = /[&\u00A0<>]/g, ud = Kb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), vd = Kb("style script xmp iframe noembed noframes plaintext noscript".split(" ")), F = document.createTreeWalker(document,
        NodeFilter.SHOW_ALL, null, !1), x = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1), Rd = Object.freeze({ parentNode: U, firstChild: Ha, lastChild: Ia, previousSibling: Lb, nextSibling: Mb, childNodes: S, parentElement: Nb, firstElementChild: Ob, lastElementChild: Pb, previousElementSibling: Qb, nextElementSibling: Rb, children: Sb, innerHTML: Tb, textContent: Ub }), hb = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"), ta = document.implementation.createHTMLDocument("inert").createElement("div"),
        ib = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), Vb = {
            parentElement: { get: function () { var a = this.__shady && this.__shady.parentNode; a && a.nodeType !== Node.ELEMENT_NODE && (a = null); return void 0 !== a ? a : Nb(this) }, configurable: !0 }, parentNode: { get: function () { var a = this.__shady && this.__shady.parentNode; return void 0 !== a ? a : U(this) }, configurable: !0 }, nextSibling: { get: function () { var a = this.__shady && this.__shady.nextSibling; return void 0 !== a ? a : Mb(this) }, configurable: !0 }, previousSibling: {
                get: function ()
                {
                    var a =
                    this.__shady && this.__shady.previousSibling; return void 0 !== a ? a : Lb(this)
                }, configurable: !0
            }, className: { get: function () { return this.getAttribute("class") || "" }, set: function (a) { this.setAttribute("class", a) }, configurable: !0 }, nextElementSibling: { get: function () { if (this.__shady && void 0 !== this.__shady.nextSibling) { for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling; return a } return Rb(this) }, configurable: !0 }, previousElementSibling: {
                get: function ()
                {
                    if (this.__shady && void 0 !== this.__shady.previousSibling)
                    {
                        for (var a =
                        this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling; return a
                    } return Qb(this)
                }, configurable: !0
            }
        }, Pa = {
            childNodes: { get: function () { if (T(this)) { if (!this.__shady.childNodes) { this.__shady.childNodes = []; for (var a = this.firstChild; a; a = a.nextSibling) this.__shady.childNodes.push(a) } var b = this.__shady.childNodes } else b = S(this); b.item = function (a) { return b[a] }; return b }, configurable: !0 }, childElementCount: { get: function () { return this.children.length }, configurable: !0 }, firstChild: {
                get: function ()
                {
                    var a =
                    this.__shady && this.__shady.firstChild; return void 0 !== a ? a : Ha(this)
                }, configurable: !0
            }, lastChild: { get: function () { var a = this.__shady && this.__shady.lastChild; return void 0 !== a ? a : Ia(this) }, configurable: !0 }, textContent: {
                get: function () { if (T(this)) { for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent); return a.join("") } return Ub(this) }, set: function (a)
                {
                    switch (this.nodeType)
                    {
                        case Node.ELEMENT_NODE: case Node.DOCUMENT_FRAGMENT_NODE: for (; this.firstChild;) this.removeChild(this.firstChild);
                            this.appendChild(document.createTextNode(a)); break; default: this.nodeValue = a
                    }
                }, configurable: !0
            }, firstElementChild: { get: function () { if (this.__shady && void 0 !== this.__shady.firstChild) { for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling; return a } return Ob(this) }, configurable: !0 }, lastElementChild: { get: function () { if (this.__shady && void 0 !== this.__shady.lastChild) { for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling; return a } return Pb(this) }, configurable: !0 },
            children: { get: function () { var a; T(this) ? a = Array.prototype.filter.call(this.childNodes, function (a) { return a.nodeType === Node.ELEMENT_NODE }) : a = Sb(this); a.item = function (b) { return a[b] }; return a }, configurable: !0 }, innerHTML: {
                get: function () { var a = "template" === this.localName ? this.content : this; return T(this) ? Oa(a) : Tb(a) }, set: function (a) { for (var b = "template" === this.localName ? this.content : this; b.firstChild;) b.removeChild(b.firstChild); for (hb && hb.set ? hb.set.call(ta, a) : ta.innerHTML = a; ta.firstChild;) b.appendChild(ta.firstChild) },
                configurable: !0
            }
        }, Oc = { shadowRoot: { get: function () { return this.__shady && this.__shady.tb || null }, configurable: !0 } }, Qa = { activeElement: { get: function () { var a = ib && ib.get ? ib.get.call(document) : C.V ? void 0 : document.activeElement; if (a && a.nodeType) { var b = !!L(this); if (this === document || b && this.host !== a && this.host.contains(a)) { for (b = Z(a) ; b && b !== this;) a = b.host, b = Z(a); a = this === document ? b ? null : a : b === this ? a : null } else a = null } else a = null; return a }, set: function () { }, configurable: !0 } }, Fb = C.V ? function () { } : function (a)
        {
            a.__shady &&
            a.__shady.Xa || (a.__shady = a.__shady || {}, a.__shady.Xa = !0, M(a, Vb, !0))
        }, Eb = C.V ? function () { } : function (a) { a.__shady && a.__shady.Va || (a.__shady = a.__shady || {}, a.__shady.Va = !0, M(a, Pa, !0), M(a, Oc, !0)) }, pa = null, Sd = {
            blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0,
            touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0, drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0
        }, rc = {
            get composed() { !1 !== this.isTrusted && void 0 === this.ja && (this.ja = Sd[this.type]); return this.ja || !1 }, composedPath: function () { this.ya || (this.ya = Wa(this.__target, this.composed)); return this.ya },
            get target() { return hc(this.currentTarget, this.composedPath()) }, get relatedTarget() { if (!this.za) return null; this.Aa || (this.Aa = Wa(this.za, !0)); return hc(this.currentTarget, this.Aa) }, stopPropagation: function () { Event.prototype.stopPropagation.call(this); this.ka = !0 }, stopImmediatePropagation: function () { Event.prototype.stopImmediatePropagation.call(this); this.ka = this.Ua = !0 }
        }, Ya = { focus: !0, blur: !0 }, Td = Xa(window.Event), Ud = Xa(window.CustomEvent), Vd = Xa(window.MouseEvent), Db = {}; l.prototype = Object.create(DocumentFragment.prototype);
        l.prototype.D = function (a, b) { this.Wa = "ShadyRoot"; la(a); la(this); this.host = a; this.L = b && b.mode; a.__shady = a.__shady || {}; a.__shady.root = this; a.__shady.tb = "closed" !== this.L ? this : null; this.S = !1; this.b = []; this.a = null; b = S(a); for (var c = 0, d = b.length; c < d; c++) ba.call(a, b[c]) }; l.prototype.M = function () { var a = this; this.S || (this.S = !0, Ib(function () { return a.Ea() })) }; l.prototype.C = function () { for (var a = this, b = this; b;) b.S && (a = b), b = b.hb(); return a }; l.prototype.hb = function ()
        {
            var a = this.host.getRootNode(); if (L(a)) for (var b =
            this.host.childNodes, c = 0, d; c < b.length; c++) if (d = b[c], this.h(d)) return a
        }; l.prototype.Ea = function () { this.S && this.C()._renderRoot() }; l.prototype._renderRoot = function () { this.S = !1; this.v(); this.s() }; l.prototype.v = function ()
        {
            for (var a = 0, b; a < this.b.length; a++) b = this.b[a], this.l(b); for (b = this.host.firstChild; b; b = b.nextSibling) this.f(b); for (a = 0; a < this.b.length; a++)
            {
                b = this.b[a]; if (!b.__shady.assignedNodes.length) for (var c = b.firstChild; c; c = c.nextSibling) this.f(c, b); c = b.parentNode; (c = c.__shady && c.__shady.root) &&
                c.Ba() && c._renderRoot(); this.c(b.__shady.U, b.__shady.assignedNodes); if (c = b.__shady.Da) { for (var d = 0; d < c.length; d++) c[d].__shady.na = null; b.__shady.Da = null; c.length > b.__shady.assignedNodes.length && (b.__shady.qa = !0) } b.__shady.qa && (b.__shady.qa = !1, this.g(b))
            }
        }; l.prototype.f = function (a, b)
        {
            a.__shady = a.__shady || {}; var c = a.__shady.na; a.__shady.na = null; b || (b = (b = this.a[a.slot || "__catchall"]) && b[0]); b ? (b.__shady.assignedNodes.push(a), a.__shady.assignedSlot = b) : a.__shady.assignedSlot = void 0; c !== a.__shady.assignedSlot &&
            a.__shady.assignedSlot && (a.__shady.assignedSlot.__shady.qa = !0)
        }; l.prototype.l = function (a) { var b = a.__shady.assignedNodes; a.__shady.assignedNodes = []; a.__shady.U = []; if (a.__shady.Da = b) for (var c = 0; c < b.length; c++) { var d = b[c]; d.__shady.na = d.__shady.assignedSlot; d.__shady.assignedSlot === a && (d.__shady.assignedSlot = null) } }; l.prototype.c = function (a, b) { for (var c = 0, d; c < b.length && (d = b[c]) ; c++) "slot" == d.localName ? this.c(a, d.__shady.assignedNodes) : a.push(b[c]) }; l.prototype.g = function (a)
        {
            gb.call(a, new Event("slotchange"));
            a.__shady.assignedSlot && this.g(a.__shady.assignedSlot)
        }; l.prototype.s = function () { for (var a = this.b, b = [], c = 0; c < a.length; c++) { var d = a[c].parentNode; d.__shady && d.__shady.root || !(0 > b.indexOf(d)) || b.push(d) } for (a = 0; a < b.length; a++) c = b[a], this.I(c === this ? this.host : c, this.u(c)) }; l.prototype.u = function (a) { var b = []; a = a.childNodes; for (var c = 0; c < a.length; c++) { var d = a[c]; if (this.h(d)) { d = d.__shady.U; for (var e = 0; e < d.length; e++) b.push(d[e]) } else b.push(d) } return b }; l.prototype.h = function (a) { return "slot" == a.localName };
        l.prototype.I = function (a, b) { for (var c = S(a), d = zd(b, b.length, c, c.length), e = 0, f = 0, g; e < d.length && (g = d[e]) ; e++) { for (var h = 0, k; h < g.X.length && (k = g.X[h]) ; h++) U(k) === a && ba.call(a, k), c.splice(g.index + f, 1); f -= g.aa } for (e = 0; e < d.length && (g = d[e]) ; e++) for (f = c[g.index], h = g.index; h < g.index + g.aa; h++) k = b[h], Ua.call(a, k, f), c.splice(h, 0, k) }; l.prototype.$a = function (a)
        {
            this.a = this.a || {}; this.b = this.b || []; for (var b = 0; b < a.length; b++)
            {
                var c = a[b]; c.__shady = c.__shady || {}; la(c); la(c.parentNode); var d = this.i(c); if (this.a[d])
                {
                    var e =
                    e || {}; e[d] = !0; this.a[d].push(c)
                } else this.a[d] = [c]; this.b.push(c)
            } if (e) for (var f in e) this.a[f] = this.j(this.a[f])
        }; l.prototype.i = function (a) { var b = a.name || a.getAttribute("name") || "__catchall"; return a.Ya = b }; l.prototype.j = function (a) { return a.sort(function (a, c) { a = sc(a); for (var b = sc(c), e = 0; e < a.length; e++) { c = a[e]; var f = b[e]; if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f) } }) }; l.prototype.gb = function (a)
        {
            this.a = this.a || {}; this.b = this.b || []; var b = this.a, c; for (c in b) for (var d =
            b[c], e = 0; e < d.length; e++) { var f = d[e], g; a: { for (g = f; g;) { if (g == a) { g = !0; break a } g = g.parentNode } g = void 0 } if (g) { d.splice(e, 1); var h = this.b.indexOf(f); 0 <= h && this.b.splice(h, 1); e--; this.H(f); h = !0 } } return h
        }; l.prototype.ib = function (a) { var b = a.Ya, c = this.i(a); if (c !== b) { b = this.a[b]; var d = b.indexOf(a); 0 <= d && b.splice(d, 1); b = this.a[c] || (this.a[c] = []); b.push(a); 1 < b.length && (this.a[c] = this.j(b)) } }; l.prototype.H = function (a) { if (a = a.__shady.U) for (var b = 0; b < a.length; b++) { var c = a[b], d = U(c); d && ba.call(d, c) } }; l.prototype.Ba =
        function () { return !!this.b.length }; l.prototype.addEventListener = function (a, b, c) { "object" !== typeof c && (c = { capture: !!c }); c.la = this; this.host.addEventListener(a, b, c) }; l.prototype.removeEventListener = function (a, b, c) { "object" !== typeof c && (c = { capture: !!c }); c.la = this; this.host.removeEventListener(a, b, c) }; l.prototype.getElementById = function (a) { return oa(this, function (b) { return b.id == a }, function (a) { return !!a })[0] || null }; (function (a) { M(a, Pa, !0); M(a, Qa, !0) })(l.prototype); var Dd = {
            addEventListener: kc.bind(window),
            removeEventListener: oc.bind(window)
        }, Cd = {
            addEventListener: kc, removeEventListener: oc, appendChild: function (a) { return Ra(this, a) }, insertBefore: function (a, b) { return Ra(this, a, b) }, removeChild: function (a) { return Sa(this, a) }, replaceChild: function (a, b) { Ra(this, a, b); Sa(this, b); return a }, cloneNode: function (a) { if ("template" == this.localName) var b = fb.call(this, a); else if (b = fb.call(this, !1), a) { a = this.childNodes; for (var c = 0, d; c < a.length; c++) d = a[c].cloneNode(!0), b.appendChild(d) } return b }, getRootNode: function () { return bc(this) },
            get isConnected() { var a = this.ownerDocument; if (a && a.contains && a.contains(this) || (a = a.documentElement) && a.contains && a.contains(this)) return !0; for (a = this; a && !(a instanceof Document) ;) a = a.parentNode || (a instanceof l ? a.host : void 0); return !!(a && a instanceof Document) }, dispatchEvent: function (a) { na(); return gb.call(this, a) }
        }, Ed = { get assignedSlot() { return tc(this) } }, Za = {
            querySelector: function (a) { return oa(this, function (b) { return Mc.call(b, a) }, function (a) { return !!a })[0] || null }, querySelectorAll: function (a)
            {
                return oa(this,
                function (b) { return Mc.call(b, a) })
            }
        }, wc = { assignedNodes: function (a) { if ("slot" === this.localName) return dc(this), this.__shady ? (a && a.flatten ? this.__shady.U : this.__shady.assignedNodes) || [] : [] } }, uc = Ka({ setAttribute: function (a, b) { ec(this, a, b) }, removeAttribute: function (a) { Nc.call(this, a); ac(this, a) }, attachShadow: function (a) { if (!this) throw "Must provide a host."; if (!a) throw "Not enough arguments."; return new l(Db, this, a) }, get slot() { return this.getAttribute("slot") }, set slot(a) { ec(this, "slot", a) }, get assignedSlot() { return tc(this) } },
        Za, wc); Object.defineProperties(uc, Oc); var vc = Ka({ importNode: function (a, b) { return gc(a, b) }, getElementById: function (a) { return oa(this, function (b) { return b.id == a }, function (a) { return !!a })[0] || null } }, Za); Object.defineProperties(vc, { _activeElement: Qa.activeElement }); var Wd = HTMLElement.prototype.blur, Fd = Ka({ blur: function () { var a = this.__shady && this.__shady.root; (a = a && a.activeElement) ? a.blur() : Wd.call(this) } }); C.Ia && (window.ShadyDOM = {
            inUse: C.Ia, patch: function (a) { return a }, isShadyRoot: L, enqueue: Ib, flush: na,
            settings: C, filterMutations: sd, observeChildren: qd, unobserveChildren: pd, nativeMethods: Qd, nativeTree: Rd
        }, window.Event = Td, window.CustomEvent = Ud, window.MouseEvent = Vd, yd(), Bd(), window.ShadowRoot = l); var Gd = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ")); A.prototype.D = function (a, b) { this.s.set(a, b); this.l.set(b.constructor, b) }; A.prototype.f = function (a) { return this.s.get(a) }; A.prototype.C = function (a) { return this.l.get(a) };
        A.prototype.u = function (a) { this.h = !0; this.i.push(a) }; A.prototype.j = function (a) { var b = this; this.h && J(a, function (a) { return b.g(a) }) }; A.prototype.g = function (a) { if (this.h && !a.__CE_patched) { a.__CE_patched = !0; for (var b = 0; b < this.i.length; b++) this.i[b](a) } }; A.prototype.b = function (a) { var b = []; J(a, function (a) { return b.push(a) }); for (a = 0; a < b.length; a++) { var c = b[a]; 1 === c.__CE_state ? this.connectedCallback(c) : this.v(c) } }; A.prototype.a = function (a)
        {
            var b = []; J(a, function (a) { return b.push(a) }); for (a = 0; a < b.length; a++)
            {
                var c =
                b[a]; 1 === c.__CE_state && this.disconnectedCallback(c)
            }
        }; A.prototype.c = function (a, b)
        {
            var c = this; b = b ? b : new Set; var d = []; J(a, function (a) { if ("link" === a.localName && "import" === a.getAttribute("rel")) { var e = a.import; e instanceof Node && "complete" === e.readyState ? (e.__CE_isImportDocument = !0, e.__CE_hasRegistry = !0) : a.addEventListener("load", function () { var d = a.import; d.__CE_documentLoadHandled || (d.__CE_documentLoadHandled = !0, d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0, b.delete(d), c.c(d, b)) }) } else d.push(a) },
            b); if (this.h) for (a = 0; a < d.length; a++) this.g(d[a]); for (a = 0; a < d.length; a++) this.v(d[a])
        }; A.prototype.v = function (a)
        {
            if (void 0 === a.__CE_state)
            {
                var b = this.f(a.localName); if (b)
                {
                    b.constructionStack.push(a); var c = b.constructor; try { try { if (new c !== a) throw Error("The custom element constructor did not produce the element being upgraded."); } finally { b.constructionStack.pop() } } catch (f) { throw a.__CE_state = 2, f; } a.__CE_state = 1; a.__CE_definition = b; if (b.attributeChangedCallback) for (b = b.observedAttributes, c = 0; c < b.length; c++)
                        {
                        var d =
                        b[c], e = a.getAttribute(d); null !== e && this.attributeChangedCallback(a, d, null, e, null)
                    } m(a) && this.connectedCallback(a)
                }
            }
        }; A.prototype.connectedCallback = function (a) { var b = a.__CE_definition; b.connectedCallback && b.connectedCallback.call(a) }; A.prototype.disconnectedCallback = function (a) { var b = a.__CE_definition; b.disconnectedCallback && b.disconnectedCallback.call(a) }; A.prototype.attributeChangedCallback = function (a, b, c, d, e)
        {
            var f = a.__CE_definition; f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) &&
            f.attributeChangedCallback.call(a, b, c, d, e)
        }; Ga.prototype.c = function () { this.N && this.N.disconnect() }; Ga.prototype.f = function (a) { var b = this.a.readyState; "interactive" !== b && "complete" !== b || this.c(); for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) this.b.c(c[d]) }; Cb.prototype.resolve = function (a) { if (this.a) throw Error("Already resolved."); this.a = a; this.b && this.b(a) }; B.prototype.define = function (a, b)
        {
            var c = this; if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
            if (!xc(a)) throw new SyntaxError("The element name '" + a + "' is not valid."); if (this.a.f(a)) throw Error("A custom element with name '" + a + "' has already been defined."); if (this.f) throw Error("A custom element is already being defined."); this.f = !0; try
            {
                var d = function (a) { var b = e[a]; if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function."); return b }, e = b.prototype; if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                var f = d("connectedCallback"); var g = d("disconnectedCallback"); var h = d("adoptedCallback"); var k = d("attributeChangedCallback"); var l = b.observedAttributes || []
            } catch (le) { return } finally { this.f = !1 } this.a.D(a, { localName: a, constructor: b, connectedCallback: f, disconnectedCallback: g, adoptedCallback: h, attributeChangedCallback: k, observedAttributes: l, constructionStack: [] }); this.c.push(a); this.b || (this.b = !0, this.g(function () { return c.j() }))
        }; B.prototype.j = function ()
        {
            if (!1 !== this.b) for (this.b = !1, this.a.c(document) ; 0 <
            this.c.length;) { var a = this.c.shift(); (a = this.h.get(a)) && a.resolve(void 0) }
        }; B.prototype.get = function (a) { if (a = this.a.f(a)) return a.constructor }; B.prototype.whenDefined = function (a) { if (!xc(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name.")); var b = this.h.get(a); if (b) return b.c; b = new Cb; this.h.set(a, b); this.a.f(a) && -1 === this.c.indexOf(a) && b.resolve(void 0); return b.c }; B.prototype.l = function (a) { this.i.c(); var b = this.g; this.g = function (c) { return a(function () { return b(c) }) } };
        window.CustomElementRegistry = B; B.prototype.define = B.prototype.define; B.prototype.get = B.prototype.get; B.prototype.whenDefined = B.prototype.whenDefined; B.prototype.polyfillWrapFlushCallback = B.prototype.l; var Ca = window.Document.prototype.createElement, kd = window.Document.prototype.createElementNS, jd = window.Document.prototype.importNode, ld = window.Document.prototype.prepend, md = window.Document.prototype.append, rb = window.Node.prototype.cloneNode, ja = window.Node.prototype.appendChild, zb = window.Node.prototype.insertBefore,
        Da = window.Node.prototype.removeChild, Ab = window.Node.prototype.replaceChild, Fa = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), qb = window.Element.prototype.attachShadow, Aa = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), Ea = window.Element.prototype.getAttribute, sb = window.Element.prototype.setAttribute, ub = window.Element.prototype.removeAttribute, ka = window.Element.prototype.getAttributeNS, tb = window.Element.prototype.setAttributeNS, vb = window.Element.prototype.removeAttributeNS,
        xb = window.Element.prototype.insertAdjacentElement, ad = window.Element.prototype.prepend, bd = window.Element.prototype.append, dd = window.Element.prototype.before, ed = window.Element.prototype.after, fd = window.Element.prototype.replaceWith, gd = window.Element.prototype.remove, od = window.HTMLElement, Ba = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), wb = window.HTMLElement.prototype.insertAdjacentElement, Bb = new function () { }, ua = window.customElements; if (!ua || ua.forcePolyfill || "function" !=
        typeof ua.define || "function" != typeof ua.get) { var ea = new A; nd(ea); id(ea); hd(ea); $c(ea); document.__CE_hasRegistry = !0; var Xd = new B(ea); Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: Xd }) } var O = { STYLE_RULE: 1, ia: 7, MEDIA_RULE: 4, va: 1E3 }, G = {
            mb: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, port: /@import[^;]*;/gim, Fa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, Ja: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, sb: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, yb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
            rb: /^@[^\s]*keyframes/, Ka: /\s+/g
        }, w = !(window.ShadyDOM && window.ShadyDOM.inUse); if (window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss) var q = window.ShadyCSS.nativeCss; else window.ShadyCSS ? (Ac(window.ShadyCSS), window.ShadyCSS = void 0) : Ac(window.WebComponents && window.WebComponents.flags); var va = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi, wa = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, Yd = /(--[\w-]+)\s*([:,;)]|$)/gi, Zd = /(animation\s*:)|(animation-name\s*:)/,
        Id = /@media\s(.*)/, $d = /\{[^}]*\}/g, P = null; r.prototype.a = function (a, b, c) { a.__styleScoped ? a.__styleScoped = null : this.i(a, b || "", c) }; r.prototype.i = function (a, b, c) { a.nodeType === Node.ELEMENT_NODE && this.v(a, b, c); if (a = "template" === a.localName ? (a.content || a.Cb).childNodes : a.children || a.childNodes) for (var d = 0; d < a.length; d++) this.i(a[d], b, c) }; r.prototype.v = function (a, b, c)
        {
            if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute)
            {
                var d =
                a.getAttribute(ae); c ? d && (b = d.replace("style-scope", "").replace(b, ""), ra(a, b)) : ra(a, (d ? d + " " : "") + "style-scope " + b)
            }
        }; r.prototype.b = function (a, b, c) { var d = a.__cssBuild; w || "shady" === d ? b = V(b, c) : (a = Q(a), b = this.H(b, a.is, a.Y, c) + "\n\n"); return b.trim() }; r.prototype.H = function (a, b, c, d) { var e = this.f(b, c); b = this.h(b); var f = this; return V(a, function (a) { a.c || (f.R(a, b, e), a.c = !0); d && d(a, b, e) }) }; r.prototype.h = function (a) { return a ? be + a : "" }; r.prototype.f = function (a, b) { return b ? "[is=" + a + "]" : a }; r.prototype.R = function (a,
        b, c) { this.j(a, this.g, b, c) }; r.prototype.j = function (a, b, c, d) { a.selector = a.A = this.l(a, b, c, d) }; r.prototype.l = function (a, b, c, d) { var e = a.selector.split(Pc); if (!Bc(a)) { a = 0; for (var f = e.length, g; a < f && (g = e[a]) ; a++) e[a] = b.call(this, g, c, d) } return e.join(Pc) }; r.prototype.g = function (a, b, c) { var d = this, e = !1; a = a.trim(); a = a.replace(ce, function (a, b, c) { return ":" + b + "(" + c.replace(/\s/g, "") + ")" }); a = a.replace(de, jb + " $1"); return a = a.replace(ee, function (a, g, h) { e || (a = d.C(h, g, b, c), e = e || a.stop, g = a.lb, h = a.value); return g + h }) };
        r.prototype.C = function (a, b, c, d) { var e = a.indexOf(kb); 0 <= a.indexOf(jb) ? a = this.L(a, d) : 0 !== e && (a = c ? this.s(a, c) : a); c = !1; 0 <= e && (b = "", c = !0); if (c) { var f = !0; c && (a = a.replace(fe, function (a, b) { return " > " + b })) } a = a.replace(ge, function (a, b, c) { return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]' }); return { value: a, lb: b, stop: f } }; r.prototype.s = function (a, b) { a = a.split(Qc); a[0] += b; return a.join(Qc) }; r.prototype.L = function (a, b)
        {
            var c = a.match(Rc); return (c = c && c[2].trim() || "") ? c[0].match(Sc) ? a.replace(Rc, function (a, c, f)
            {
                return b +
                f
            }) : c.split(Sc)[0] === b ? c : he : a.replace(jb, b)
        }; r.prototype.I = function (a) { a.selector = a.parsedSelector; this.u(a); this.j(a, this.D) }; r.prototype.u = function (a) { a.selector === ie && (a.selector = "html") }; r.prototype.D = function (a) { return a.match(kb) ? this.g(a, Tc) : this.s(a.trim(), Tc) }; nb.Object.defineProperties(r.prototype, { c: { configurable: !0, enumerable: !0, get: function () { return "style-scope" } } }); var ce = /:(nth[-\w]+)\(([^)]+)\)/, Tc = ":not(.style-scope)", Pc = ",", ee = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Sc = /[[.:#*]/,
        jb = ":host", ie = ":root", kb = "::slotted", de = new RegExp("^(" + kb + ")"), Rc = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, fe = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, ge = /(.*):dir\((?:(ltr|rtl))\)/, be = ".", Qc = ":", ae = "class", he = "should_not_match", v = new r; t.get = function (a) { return a ? a.__styleInfo : null }; t.set = function (a, b) { return a.__styleInfo = b }; t.prototype.c = function () { return this.G }; t.prototype._getStyleRules = t.prototype.c; var Uc = function (a)
        {
            return a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector ||
            a.oMatchesSelector || a.webkitMatchesSelector
        }(window.Element.prototype), je = navigator.userAgent.match("Trident"); p.prototype.R = function (a) { var b = this, c = {}, d = [], e = 0; W(a, function (a) { b.c(a); a.index = e++; b.I(a.w.cssText, c) }, function (a) { d.push(a) }); a.b = d; a = []; for (var f in c) a.push(f); return a }; p.prototype.c = function (a) { if (!a.w) { var b = {}, c = {}; this.b(a, c) && (b.F = c, a.rules = null); b.cssText = this.H(a); a.w = b } }; p.prototype.b = function (a, b)
        {
            var c = a.w; if (c) { if (c.F) return Object.assign(b, c.F), !0 } else {
                c = a.parsedCssText;
                for (var d; a = va.exec(c) ;) { d = (a[2] || a[3]).trim(); if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d; d = !0 } return d
            }
        }; p.prototype.H = function (a) { return this.L(a.parsedCssText) }; p.prototype.L = function (a) { return a.replace($d, "").replace(va, "") }; p.prototype.I = function (a, b) { for (var c; c = Yd.exec(a) ;) { var d = c[1]; ":" !== c[2] && (b[d] = !0) } }; p.prototype.fa = function (a) { for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++) d = b[c], a[d] = this.a(a[d], a) }; p.prototype.a = function (a, b)
        {
            if (a) if (0 <= a.indexOf(";")) a = this.f(a,
            b); else { var c = this; a = Dc(a, function (a, e, f, g) { if (!e) return a + g; (e = c.a(b[e], b)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = c.a(b[f] || f, b) || f; return a + (e || "") + g }) } return a && a.trim() || ""
        }; p.prototype.f = function (a, b) { a = a.split(";"); for (var c = 0, d, e; c < a.length; c++) if (d = a[c]) { wa.lastIndex = 0; if (e = wa.exec(d)) d = this.a(b[e[1]], b); else if (e = d.indexOf(":"), -1 !== e) { var f = d.substring(e); f = f.trim(); f = this.a(f, b) || f; d = d.substring(0, e) + f } a[c] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || "" } return a.join(";") };
        p.prototype.D = function (a, b) { var c = ""; a.w || this.c(a); a.w.cssText && (c = this.f(a.w.cssText, b)); a.cssText = c }; p.prototype.C = function (a, b) { var c = a.cssText, d = a.cssText; null == a.Ha && (a.Ha = Zd.test(c)); if (a.Ha) if (null == a.ca) { a.ca = []; for (var e in b) d = b[e], d = d(c), c !== d && (c = d, a.ca.push(e)) } else { for (e = 0; e < a.ca.length; ++e) d = b[a.ca[e]], c = d(c); d = c } a.cssText = d }; p.prototype.ea = function (a, b)
        {
            var c = {}, d = this, e = []; W(a, function (a)
            {
                a.w || d.c(a); var f = a.A || a.parsedSelector; b && a.w.F && f && Uc.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a /
                32, 10), e[f] = (e[f] || 0) | 1 << a % 32)
            }, null, !0); return { F: c, key: e }
        }; p.prototype.ha = function (a, b, c, d) { b.w || this.c(b); if (b.w.F) { var e = Q(a); a = e.is; e = e.Y; e = a ? v.f(a, e) : "html"; var f = b.parsedSelector, g = ":host > *" === f || "html" === f, h = 0 === f.indexOf(":host") && !g; "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e)); "shadow" === c && (g = ":host > *" === f || "html" === f, h = h && !g); if (g || h) c = e, h && (w && !b.A && (b.A = v.l(b, v.g, v.h(a), e)), c = b.A || e), d({ xb: c, qb: h, Gb: g }) } }; p.prototype.da = function (a, b)
        {
            var c = {}, d =
            {}, e = this, f = b && b.__cssBuild; W(b, function (b) { e.ha(a, b, f, function (f) { Uc.call(a.Db || a, f.xb) && (f.qb ? e.b(b, c) : e.b(b, d)) }) }, null, !0); return { vb: d, pb: c }
        }; p.prototype.ga = function (a, b, c) { var d = this, e = Q(a), f = v.f(e.is, e.Y), g = new RegExp("(?:^|[^.#[:])" + (a.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"); e = t.get(a).G; var h = this.h(e, c); return v.b(a, e, function (a) { d.D(a, b); w || Bc(a) || !a.cssText || (d.C(a, h), d.l(a, g, f, c)) }) }; p.prototype.h = function (a, b)
        {
            a = a.b; var c = {}; if (!w && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) this.j(e,
            b), c[e.keyframesName] = this.i(e); return c
        }; p.prototype.i = function (a) { return function (b) { return b.replace(a.f, a.a) } }; p.prototype.j = function (a, b) { a.f = new RegExp(a.keyframesName, "g"); a.a = a.keyframesName + "-" + b; a.A = a.A || a.selector; a.selector = a.A.replace(a.keyframesName, a.a) }; p.prototype.l = function (a, b, c, d) { a.A = a.A || a.selector; d = "." + d; for (var e = a.A.split(","), f = 0, g = e.length, h; f < g && (h = e[f]) ; f++) e[f] = h.match(b) ? h.replace(c, d) : d + " " + h; a.selector = e.join(",") }; p.prototype.u = function (a, b, c)
        {
            var d = a.getAttribute("class") ||
            "", e = d; c && (e = d.replace(new RegExp("\\s*x-scope\\s*" + c + "\\s*", "g"), " ")); e += (e ? " " : "") + "x-scope " + b; d !== e && ra(a, e)
        }; p.prototype.v = function (a, b, c, d)
        {
            b = d ? d.textContent || "" : this.ga(a, b, c); var e = t.get(a), f = e.a; f && !w && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f)); w ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = bb(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || (je && -1 < b.indexOf("@media") && (d.textContent = b), Cc(d, null, e.b)) : b && (d = bb(b, c, null, e.b)); d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++,
            e.a = d); return d
        }; p.prototype.s = function (a, b) { var c = qa(a), d = this; a.textContent = V(c, function (a) { var c = a.cssText = a.parsedCssText; a.w && a.w.cssText && (c = c.replace(G.Fa, "").replace(G.Ja, ""), a.cssText = d.f(c, b)) }) }; nb.Object.defineProperties(p.prototype, { g: { configurable: !0, enumerable: !0, get: function () { return "x-scope" } } }); var K = new p, lb = {}, xa = window.customElements; if (xa && !w)
        {
            var ke = xa.define; xa.define = function (a, b, c)
            {
                var d = document.createComment(" Shady DOM styles for " + a + " "), e = document.head; e.insertBefore(d,
                (P ? P.nextSibling : null) || e.firstChild); P = d; lb[a] = d; return ke.call(xa, a, b, c)
            }
        } ha.prototype.a = function (a, b, c) { for (var d = 0; d < c.length; d++) { var e = c[d]; if (a.F[e] !== b[e]) return !1 } return !0 }; ha.prototype.b = function (a, b, c, d) { var e = this.cache[a] || []; e.push({ F: b, styleElement: c, B: d }); e.length > this.c && e.shift(); this.cache[a] = e }; ha.prototype.fetch = function (a, b, c) { if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) { var e = a[d]; if (this.a(e, b, c)) return e } }; if (!w)
        {
            var Vc = new MutationObserver(Ec), Wc = function (a)
            {
                Vc.observe(a,
                { childList: !0, subtree: !0 })
            }; if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Wc(document); else { var mb = function () { Wc(document.body) }; window.HTMLImports ? window.HTMLImports.whenReady(mb) : requestAnimationFrame(function () { if ("loading" === document.readyState) { var a = function () { mb(); document.removeEventListener("readystatechange", a) }; document.addEventListener("readystatechange", a) } else mb() }) } pb = function () { Ec(Vc.takeRecords()) }
        } var sa = {}, Ld = Promise.resolve(), cb = null, Gc = window.HTMLImports &&
        window.HTMLImports.whenReady || null, db, ya = null, fa = null; H.prototype.Ga = function () { !this.enqueued && fa && (this.enqueued = !0, ob(fa)) }; H.prototype.b = function (a) { a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.Ga()) }; H.prototype.a = function (a) { return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a }; H.prototype.c = function ()
        {
            for (var a = this.customStyles, b = 0; b < a.length; b++)
            {
                var c = a[b]; if (!c.__shadyCSSCachedStyle)
                {
                    var d = this.a(c); d && (d = d.__appliedElement || d, ya &&
                    ya(d), c.__shadyCSSCachedStyle = d)
                }
            } return a
        }; H.prototype.addCustomStyle = H.prototype.b; H.prototype.getStyleForCustomStyle = H.prototype.a; H.prototype.processStyles = H.prototype.c; Object.defineProperties(H.prototype, { transformCallback: { get: function () { return ya }, set: function (a) { ya = a } }, validateCallback: { get: function () { return fa }, set: function (a) { var b = !1; fa || (b = !0); fa = a; b && this.Ga() } } }); var Xc = new ha; k.prototype.C = function () { pb() }; k.prototype.da = function (a) { var b = this.s[a] = (this.s[a] || 0) + 1; return a + "-" + b };
        k.prototype.Ra = function (a) { return qa(a) }; k.prototype.Ta = function (a) { return V(a) }; k.prototype.R = function (a) { a = a.content.querySelectorAll("style"); for (var b = [], c = 0; c < a.length; c++) { var d = a[c]; b.push(d.textContent); d.parentNode.removeChild(d) } return b.join("").trim() }; k.prototype.fa = function (a) { return (a = a.content.querySelector("style")) ? a.getAttribute("css-build") || "" : "" }; k.prototype.prepareTemplate = function (a, b, c)
        {
            if (!a.f)
            {
                a.f = !0; a.name = b; a.extends = c; sa[b] = a; var d = this.fa(a), e = this.R(a); c = {
                    is: b, extends: c,
                    Ab: d
                }; w || v.a(a.content, b); this.c(); var f = wa.test(e) || va.test(e); wa.lastIndex = 0; va.lastIndex = 0; e = ab(e); f && q && this.a && this.a.transformRules(e, b); a._styleAst = e; a.g = d; d = []; q || (d = K.R(a._styleAst)); if (!d.length || q) b = this.ea(c, a._styleAst, w ? a.content : null, lb[b]), a.a = b; a.c = d
            }
        }; k.prototype.ea = function (a, b, c, d) { b = v.b(a, b); if (b.length) return bb(b, a.is, c, d) }; k.prototype.ha = function (a) { var b = Q(a), c = b.is; b = b.Y; var d = lb[c]; c = sa[c]; if (c) { var e = c._styleAst; var f = c.c } return t.set(a, new t(e, d, f, 0, b)) }; k.prototype.H =
        function () { !this.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (this.a = window.ShadyCSS.ApplyShim, this.a.invalidCallback = Jd) }; k.prototype.I = function () { var a = this; !this.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.b = window.ShadyCSS.CustomStyleInterface, this.b.transformCallback = function (b) { a.v(b) }, this.b.validateCallback = function () { requestAnimationFrame(function () { (a.b.enqueued || a.i) && a.f() }) }) }; k.prototype.c = function () { this.H(); this.I() }; k.prototype.f = function ()
        {
            this.c(); if (this.b)
            {
                var a =
                this.b.processStyles(); this.b.enqueued && (q ? this.Pa(a) : (this.u(this.g, this.h), this.D(a)), this.b.enqueued = !1, this.i && !q && this.styleDocument())
            }
        }; k.prototype.styleElement = function (a, b)
        {
            var c = Q(a).is, d = t.get(a); d || (d = this.ha(a)); this.j(a) || (this.i = !0); b && (d.P = d.P || {}, Object.assign(d.P, b)); if (q)
            {
                if (d.P) { b = d.P; for (var e in b) null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e]) } if (((e = sa[c]) || this.j(a)) && e && e.a && !Fc(e))
                {
                    if (Fc(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) this.c(),
                    this.a && this.a.transformRules(e._styleAst, c), e.a.textContent = v.b(a, d.G), Kd(e); w && (c = a.shadowRoot) && (c.querySelector("style").textContent = v.b(a, d.G)); d.G = e._styleAst
                }
            } else this.u(a, d), d.sa && d.sa.length && this.L(a, d)
        }; k.prototype.l = function (a) { return (a = a.getRootNode().host) ? t.get(a) ? a : this.l(a) : this.g }; k.prototype.j = function (a) { return a === this.g }; k.prototype.L = function (a, b)
        {
            var c = Q(a).is, d = Xc.fetch(c, b.K, b.sa), e = d ? d.styleElement : null, f = b.B; b.B = d && d.B || this.da(c); e = K.v(a, b.K, b.B, e); w || K.u(a, b.B, f); d ||
            Xc.b(c, b.K, e, b.B)
        }; k.prototype.u = function (a, b) { var c = this.l(a), d = t.get(c); c = Object.create(d.K || null); var e = K.da(a, b.G); a = K.ea(d.G, a).F; Object.assign(c, e.pb, a, e.vb); this.ga(c, b.P); K.fa(c); b.K = c }; k.prototype.ga = function (a, b) { for (var c in b) { var d = b[c]; if (d || 0 === d) a[c] = d } }; k.prototype.styleDocument = function (a) { this.styleSubtree(this.g, a) }; k.prototype.styleSubtree = function (a, b)
        {
            var c = a.shadowRoot; (c || this.j(a)) && this.styleElement(a, b); if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) this.styleSubtree(b[a]);
            else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) this.styleSubtree(a[b])
        }; k.prototype.Pa = function (a) { for (var b = 0; b < a.length; b++) { var c = this.b.getStyleForCustomStyle(a[b]); c && this.Oa(c) } }; k.prototype.D = function (a) { for (var b = 0; b < a.length; b++) { var c = this.b.getStyleForCustomStyle(a[b]); c && K.s(c, this.h.K) } }; k.prototype.v = function (a) { var b = this, c = qa(a); W(c, function (a) { w ? v.u(a) : v.I(a); q && (b.c(), b.a && b.a.transformRule(a)) }); q ? a.textContent = V(c) : this.h.G.rules.push(c) }; k.prototype.Oa = function (a)
        {
            if (q &&
            this.a) { var b = qa(a); this.c(); this.a.transformRules(b); a.textContent = V(b) }
        }; k.prototype.getComputedStyleValue = function (a, b) { var c; q || (c = (t.get(a) || t.get(this.l(a))).K[b]); return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "" }; k.prototype.Sa = function (a, b)
        {
            var c = a.getRootNode(); b = b ? b.split(/\s/) : []; c = c.host && c.host.localName; if (!c) { var d = a.getAttribute("class"); if (d) { d = d.split(/\s/); for (var e = 0; e < d.length; e++) if (d[e] === v.c) { c = d[e + 1]; break } } } c && b.push(v.c, c); q || (c = t.get(a)) && c.B && b.push(K.g,
            c.B); ra(a, b.join(" "))
        }; k.prototype.Qa = function (a) { return t.get(a) }; k.prototype.flush = k.prototype.C; k.prototype.prepareTemplate = k.prototype.prepareTemplate; k.prototype.styleElement = k.prototype.styleElement; k.prototype.styleDocument = k.prototype.styleDocument; k.prototype.styleSubtree = k.prototype.styleSubtree; k.prototype.getComputedStyleValue = k.prototype.getComputedStyleValue; k.prototype.setElementClass = k.prototype.Sa; k.prototype._styleInfoForNode = k.prototype.Qa; k.prototype.transformCustomStyleForDocument =
        k.prototype.v; k.prototype.getStyleAst = k.prototype.Ra; k.prototype.styleAstToString = k.prototype.Ta; k.prototype.flushCustomStyles = k.prototype.f; Object.defineProperties(k.prototype, { nativeShadow: { get: function () { return w } }, nativeCss: { get: function () { return q } } }); var E = new k; if (window.ShadyCSS) { var Yc = window.ShadyCSS.ApplyShim; var Zc = window.ShadyCSS.CustomStyleInterface } window.ShadyCSS = {
            ScopingShim: E, prepareTemplate: function (a, b, c) { E.f(); E.prepareTemplate(a, b, c) }, styleSubtree: function (a, b)
            {
                E.f(); E.styleSubtree(a,
                b)
            }, styleElement: function (a) { E.f(); E.styleElement(a) }, styleDocument: function (a) { E.f(); E.styleDocument(a) }, getComputedStyleValue: function (a, b) { return E.getComputedStyleValue(a, b) }, nativeCss: q, nativeShadow: w
        }; Yc && (window.ShadyCSS.ApplyShim = Yc); Zc && (window.ShadyCSS.CustomStyleInterface = Zc); (function ()
        {
            var a = window.customElements, b = window.HTMLImports; window.WebComponents = window.WebComponents || {}; if (a && a.polyfillWrapFlushCallback)
            {
                var c, d = function () { if (c) { var a = c; c = null; a(); return !0 } }, e = b.whenReady; a.polyfillWrapFlushCallback(function (a)
                {
                    c =
                    a; e(d)
                }); b.whenReady = function (a) { e(function () { d() ? b.whenReady(a) : a() }) }
            } b.whenReady(function () { requestAnimationFrame(function () { window.WebComponents.ready = !0; document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: !0 })) }) })
        })(); (function () { var a = document.createElement("style"); a.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n"; var b = document.querySelector("head"); b.insertBefore(a, b.firstChild) })()
    })();
}).call(this);

(function ()
{
    'use strict';

    (() =>{ 'use strict'; if (!window.customElements) return; const a = window.HTMLElement, b = window.customElements.define, c = window.customElements.get, d = new Map, e = new Map; let f = !1, g = !1; window.HTMLElement = function () { if (!f) { const a = d.get(this.constructor), b = c.call(window.customElements, a); g = !0; const e = new b; return e } f = !1; }, window.HTMLElement.prototype = a.prototype; Object.defineProperty(window, 'customElements', { value: window.customElements, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'define', { value: (c, h) =>{ const i = h.prototype, j = class extends a{ constructor() { super(), Object.setPrototypeOf(this, i), g || (f = !0, h.call(this)), g = !1; } }, k = j.prototype; j.observedAttributes = h.observedAttributes, k.connectedCallback = i.connectedCallback, k.disconnectedCallback = i.disconnectedCallback, k.attributeChangedCallback = i.attributeChangedCallback, k.adoptedCallback = i.adoptedCallback, d.set(h, c), e.set(c, h), b.call(window.customElements, c, j); }, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'get', { value: (a) =>e.get(a), configurable: !0, writable: !0 }); })();

    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
}());

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function ()
{
    'use strict';
    // global for (1) existence means `WebComponentsReady` will file,
    // (2) WebComponents.ready == true means event has fired.
    window.WebComponents = window.WebComponents || {};
    var name = 'webcomponents-loader.js';
    // Feature detect which polyfill needs to be imported.
    var polyfills = [];
    if (!('import' in document.createElement('link')))
    {
        polyfills.push('hi');
    }
    if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) ||
      (window.ShadyDOM && window.ShadyDOM.force))
    {
        polyfills.push('sd');
    }
    if (!window.customElements || window.customElements.forcePolyfill)
    {
        polyfills.push('ce');
    }
    // NOTE: any browser that does not have template or ES6 features
    // must load the full suite (called `lite` for legacy reasons) of polyfills.
    if (!('content' in document.createElement('template')) || !window.Promise || !Array.from ||
        // Edge has broken fragment cloning which means you cannot clone template.content
      !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment))
    {
        polyfills = ['lite'];
    }

    if (polyfills.length)
    {
        var script = document.querySelector('script[src*="' + name + '"]');
        var newScript = document.createElement('script');
        // Load it from the right place.
        var replacement = 'webcomponents-' + polyfills.join('-') + '.js';
        var url = script.src.replace(name, replacement);
        newScript.src = url;
        // NOTE: this is required to ensure the polyfills are loaded before
        // *native* html imports load on older Chrome versions. This *is* CSP
        // compliant since CSP rules must have allowed this script to run.
        // In all other cases, this can be async.
        if (document.readyState === 'loading' && ('import' in document.createElement('link')))
        {
            document.write(newScript.outerHTML);
        } else
        {
            document.head.appendChild(newScript);
        }
    } else
    {
        // Ensure `WebComponentsReady` is fired also when there are no polyfills loaded.
        // however, we have to wait for the document to be in 'interactive' state,
        // otherwise a rAF may fire before scripts in <body>

        var fire = function ()
        {
            requestAnimationFrame(function ()
            {
                window.WebComponents.ready = true;
                document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: true }));
            });
        };

        if (document.readyState !== 'loading')
        {
            fire();
        } else
        {
            document.addEventListener('readystatechange', function wait()
            {
                fire();
                document.removeEventListener('readystatechange', wait);
            });
        }
    }
})();

NodeList.prototype.forEach = Array.prototype.forEach;

/*property
    Augment, Chainify, DateRangeFiltering, Debounce, DynamicSort,
    DynamicSortMultiple, FilterByQuery, FindRegex, GenerateGUID,
    GetAttributeSelector, GetId, GetKeyValuePairs, GetProperty,
    GetViewportDimensions, Mix, SortNumber, TextareaMouseUp, TextareaResize,
    TransformAllMatches, apply, clientHeight, clientWidth, dataset,
    documentElement, exec, findRegex, forEach, getAttribute, height, id,
    indexOf, innerHeight, innerWidth, keys, length, log, max, offsetHeight,
    offsetWidth, parentElement, prototype, push, query, random, replace,
    scrollHeight, search, style, substr, test, toLowerCase, toString, trim,
    value, width
*/
var Helper =
{
    /*
    Adds a function to execute during every function within window.
    Functions created after this executes are not affected.

    @param {function} withFn - apply this function to all functions in window
    */
    augment: function (withFn)
    {
        var name,
            fn;

        for (name in window)
        {
            fn = window[name];

            if (typeof fn === "function")
            {
                window[name] = (function (name, fn)
                {
                    var args = arguments;

                    return function ()
                    {
                        withFn.apply(this, args);
                        return fn.apply(this, arguments);
                    };
                })(name, fn);
            }
        }
    },

    /**
    * Alters the prototype of an object to make each function
    * @param {object} obj will have its prototype altered
    */
    chainify: function (obj)
    {
        Object.keys(obj).forEach(function (key)
        {
            var member = obj[key];
            if (typeof member === "function" && !(/\breturn\b/).test(member))
            {
                obj[key] = function ()
                {
                    member.apply(this, arguments);
                    return this;
                };
            }
        });
    },

    cssManipulation:
    {
        /*
        This adds some CSS to the page
        */
        AddStyleSheet: function (content)
        {
            //for cross browser compatibility, use the following commented statement
            //var cssRuleCode = document.all ? 'rules' : 'cssRules'; //account for IE and FF

            document.querySelector("head").appendChild(this.CreateStyleSheet(content));
        },

        /*
        This function creates a style sheet and returns it.
        */
        CreateStyleSheet: function (content)
        {
            var style = document.createElement("style");
            var styleSheet = style.styleSheet;

            if (styleSheet)
            {
                stylesheet.cssText = content;
            }
            else
            {
                style.appendChild(document.createTextNode(content));
            }

            style.type = "text/css";
            return style;
        }
    },

    /*
    I copy source's prototype to destination's prototype!
    source is an object
    destination is an object
    */
    debounce: function (func, threshold, execAsap)
    {
        var timeout;

        return function debounced()
        {
            var obj = this,
                args = arguments;

            function delayed()
            {
                if (!execAsap)
                {
                    func.apply(obj, args);
                }

                timeout = null;
            }

            if (timeout)
            {
                clearTimeout(timeout);
            }
            else if (execAsap)
            {
                func.apply(obj, args);
            }

            timeout = setTimeout(delayed, threshold || 100);
        };
    },

    events: {
        // addEventListener wrapper:,
        $on: function (target, type, callback, useCapture)
        {
            console.log("Helper.&on");
            if (target !== null)
            {
                // if the browser is old
                if (!target.addEventListener)
                {
                    target.attachEvent(type, callback);
                }
                else
                {
                    target.addEventListener(type, callback, !!useCapture);
                }
            }
        },

        // Attach a handler to event for all elements that match the selector,
        // now or in the future, based on a root element
        $delegate: function (target, selector, type, handler)
        {
            console.log("Helper.&delegate");
            var that = this;

            function dispatchEvent(event)
            {
                var targetElement = event.target;
                var potentialElements = that.qsa(selector, target);
                var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

                if (hasMatch)
                {
                    handler.call(targetElement, event);
                }
            }

            // https://developer.mozilla.org/en-US/docs/Web/Events/blur
            var useCapture = type === 'blur' || type === 'focus';

            this.$on(target, type, dispatchEvent, useCapture);
            //window.$on(target, type, dispatchEvent, useCapture);
        },
    },

    /**
    * Filters items based on the given query
    * @param {object} query is an object with the desired key/value
    * @param {object} item is to be compared to query
    * @returns {bool}
    */
    filterByQuery: function (query, item)
    {
        console.log("Helper.filterByQuery");

        Object.keys(query).forEach(function (key)
        {
            if (item[key] !== undefined)
            {
                if (String(item[key]).toLowerCase().indexOf(query[key].toLowerCase()) === -1)
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        });
        return true;
    },

    formatting: {
        /**
        * Formats money
        * @param {number} price is a numeric value without notation
        * @returns {string} a formatted monetary value
        */
        money: function (price)
        {
            var p = parseFloat(price).toFixed(2).split(".");
            return "$" + p[0].split("").reverse().reduce(function (acc, num, i, orig)
            {
                return num + (i && !(i % 3) ? "," : "") + acc;
            }, "") + "." + p[1];
        },
        /**
        * Adjusts precision to 2 places, then strips out invalid values
        * @param {number} price
        * @returns {number/string}
        */
        price: function (price)
        {
            var val = parseFloat(Math.round(price * 100) / 100).toFixed(2);
            return val == 'NaN' ? '' : val == 'Infinity' ? '' : val;
        },
        /**
        * Formats the date with the given separator
        * @param {string} date
        * @param {string} separator defaults to /
        * @returns {string}
        */
        date: function (date, separator/* separator = "/" */)
        {
            if ((typeof date === "string") || (typeof date === "number"))
            {
                date = new Date(date);
            }
            if (!separator)
            {
                separator = "/";
            }
            if (date == undefined)
            {
                date = new Date();
            }

            return (date.getMonth() + 1) + separator + date.getDate() + separator + date.getFullYear();
        },
        //formatDate: function (value) {
        //    var monthNames = [
        //        "Jan",
        //        "Feb",
        //        "Mar",
        //        "Apr",
        //        "May",
        //        "Jun",
        //        "Jul",
        //        "Aug",
        //        "Sep",
        //        "Oct",
        //        "Nov",
        //        "Dec"
        //    ];
        //
        //    var date = new Date(value);
        //    var day = date.getDate();
        //    var monthIndex = date.getMonth();
        //    var year = date.getFullYear();
        //
        //    return day + " " + monthNames[monthIndex] + " " + year;
        //},

        /**
        * Gives the time portion of a DateTime
        * @param {string} date
        * @returns {string}
        */
        time: function (date)
        {
            if (typeof date === "string")
            {
                date = new Date(date);
            }

            return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }
    },

    /**
    * @returns {string} a randomly generated guid
    */
    generateGuid: function ()
    {
        var template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        var returnMe = template.replace(/[xy]/g, function (c)
        {
            var r = Math.random() * 16 | 0,
                v = c == "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

        return returnMe;
    },

    /*
     * Generates an id for an HTML element based on the guid generator, 
     * it removes the dashes because the DOM doesn't like them.
     * @return {string}
     */
    generateHTMLElementId: function ()
    {
        return "id" + this.generateGuid().split("-").join("");
    },

    //from viewrfq.js
    //getGuid: function () {
    //    console.log("getGuid");
    //    var d = new Date().getTime();
    //    var template = "xxxxxxxxxxxxyxxxyxxxxxxxxxxxxxxx";
    //    var uuid = template
    //        .replace(/[xy]/g, function (c) {
    //            var r = (d + Math.random() * 16) % 16 | 0;
    //            d = Math.floor(d / 16);
    //            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    //        });
    //    return uuid;
    //},

    /**
    * Gets the requested property from a list of objects and returns an array with each value
    * @param {array} items is the list of objects to search
    * @param {string} property is the property to search for
    * @returns {array} a list of the values found
    */
    getProperty: function (items, property)
    {
        console.log("Helper.getProperty");
        var returnMe = [];

        items.forEach(function (item)
        {
            returnMe.push(item[property]);
        });

        return returnMe;
    },

    /**
    * get viewport dimensions,
    * @param {}
    * @returns {object} {width: x, height: y}
    */
    getViewportDimensions: function ()
    {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return { width: w, height: h };
    },

    html: {
        /**
        * Concatenates an attribute selector based on inputs
        * @param {string} attr
        * @param {string} value
        * @returns {string}
        */
        getAttributeSelector: function (attr, value)
        {
            var template = "[{{0}}=\"{{1}}\"]";
            return template
                .replace("{{0}}", attr)
                .replace("{{1}}", value);
        },

        // Get the key/value pairs from HTML controls and put them into a returned object
        // expects the control to have a key attribute
        /**
        * Iterate over a list of DOM elements, extracting their "key" attributes and their values,
        * and returning the result as an array.
        * @param {array} list
        * @param {bool} replaceEmpty
        * @returns {array}
        */
        getKeyValuePairs: function (list, replaceEmpty)
        {
            var returnMe = {};

            list.forEach(function (item)
            {
                var key = item.getAttribute("key");
                var value = item.value;

                if ((value !== "") && (value !== undefined))
                {
                    returnMe[key] = value.trim();
                }
                else if (replaceEmpty)
                {
                    returnMe[key] = key;
                }
            });

            return returnMe;
        },

        /**
        * Return the id for the given element, supporting older versions of IE
        * @param {object} element
        */
        getId: function (element)
        {
            console.log("Helper.getId");
            var returnMe = undefined;

            if (element.dataset)
            {
                returnMe = element.dataset.id;
            }
            else
            {
                returnMe = element.getAttribute("data-id");
            }

            return returnMe;
        },

        /**
        * Resize textareas to fit the text they contain
        * @param {object} el
        */
        textareaResize: function resize(el)
        {
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
        },

        /**
        * Prevent textareas from being bigger than their container
        * @param {object} sender
        */
        textareaMouseUp: function (sender)
        {
            var parent = sender.parentElement;
            var width = parent.offsetWidth + "px";
            var height = parent.offsetHeight + "px";

            sender.style.height = sender.style.height > height ?
                height : sender.style.height;

            sender.style.width = sender.style.width > width ?
                width : sender.style.width;
        },

        qs: function (selector, scope)
        {
            console.log("Helper.qs");
            var temp = scope || document;
            return temp.querySelector(selector);
        },

        qsa: function (selector, scope)
        {
            console.log("Helper.qsa");
            var temp = scope || document;
            return temp.querySelectorAll(selector);
        },
    },

    /**
    * concatenate arrays and delete duplicates
    * @param {array} source
    * @param {array} destination
    * @returns {array}
    */
    join: function (source, destination)
    {
        //console.log("join", source, destination);
        return destination.concat(source.filter(function (item)
        {
            return destination.indexOf(item) < 0;
        }));
    },

    json: {
        /**
         * determines whether or not the data is in a parseable format
         * and returns a parsed object if possible
         *
         * @param {string} data is JSON or an object
         * @returns {object} parsed data
         */
        tryParse: function (data)
        {
            if (typeof (data) === "string")
            {
                return JSON.parse(data);
            } else
            {
                return data;
            }
        }
    },

    math: {
        /*
        I try to parse an argument through math.js
        I return a parsed string
        */
        // todo this should probably move into a controller
        doMath: function (thing)
        {
            try
            {
                return math.eval(thing);
            }
            catch (e)
            {
                return thing;
            }
        },
    },

    /**
    * Mix one objects prototype into another's
    * @param {object} source
    * @param {object} destination
    */
    mix: function (source, destination)
    {
        console.log("Helper.mix");
        if ((source.prototype !== undefined) && (source.prototype.length > 0))
        {
            source.prototype.forEach(function (prop)
            {
                if (destination.prototype[prop] === undefined)
                {
                    destination.prototype[prop] = prop;
                }
            });
        }
        else
        {
            return;
        }
    },

    mvc: {
        getModelPrefix: function (guid)
        {
            return "Model." + guid + ".";
        },
        getControllerPrefix: function (guid)
        {
            return "Controller." + guid + ".";
        },
        getViewPrefix: function (guid)
        {
            return "View." + guid + ".";
        },
    },

    regex: {
        /**
        * Escapes a regex
        * @param {string} str is a regex
        */
        escape: function (str)
        {
            return str.replace(/([.*+?\^=!:${}()\|\[\]\/\\])/g, "\\$1");
        },

        /**
        * Uses a regex to search a string
        * @param {string} value
        * @param {string} regex
        * @returns {array} the original string and the first match
        */
        find: function (value, regex)
        {
            console.log("Helper.findRegex");

            if (!value || value === "")
            {
                return;
            }

            if (!value.indexOf)
            {
                return;
            }

            if (value.search(regex) !== -1)
            {
                return regex.exec(value);
            }
        },

        /**
        * I iterate through all matches of regex in value and run callback on each match
        * @param {string} value
        * @param {string} regex is what you're looking for
        * @param {function} callback is a thing you want to do.  it should return a string
        * @returns {string}
        */
        transformAllMatches: function (value, regex, callback)
        {
            console.log("Helper.transformAllMatches");
            var match = "";
            var returnMe = value;

            if (value)
            {
                match = Helper.findRegex(value, regex);

                while (match)
                {
                    returnMe = callback(returnMe, match, regex);
                    match = Helper.findRegex(returnMe, regex);
                }

                return returnMe;
            }
            else
            {
                return value;
            }
        },

        validDate: "(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])"
    },

    /**
    * Sets up infinite scrolling on the target,
    * using the callback
    * @param {object} scope is an object or a selector that constrains the find function.  
    * I added this to deal with shadow DOM.
    * @param {string} selector identifies the element that has scrolling enabled
    * @param {number} buffer a number of pixels in which the scroll bar can trigger the effect
    * @param {number} offset a number of pixels to use to account for margins
    * @param {function} callback is executed while the scroll position is within the buffer
    */
    setupInfiniteScroll: function (scope, selector, buffer, offset, callback)
    {
        if (!scope) { scope = document; }

        $(scope).find(selector).parent().scroll(
            //Helper.debounce(
            function ()
            {
                if ($(scope).find(selector).parent().scrollTop() >= $(scope).find(selector).height() - 200 + offset)
                {
                    callback();
                }
            });
        //}, 500, false));
    },

    sorting: {
        /**
        * Sort based on the given property
        * @param {string} property
        * @returns {function}
        */
        dynamicSort: function (property)
        {
            console.log("Helper.dynamicSort");
            var sortOrder = 1;

            if (!property)
            {
                return;
            }

            if (property[0] === "-")
            {
                sortOrder = -1;
                property = property.substr(1);
            }

            return function (a, b)
            {
                var first = a[property];
                var second = b[property];

                if (first.toLowerCase)
                {
                    first = first.toLowerCase();
                }

                if (second.toLowerCase)
                {
                    second = second.toLowerCase();
                }

                var result = (first < second) ?
                    -1 : (first > second) ?
                        1 : 0;

                return result * sortOrder;
            };
        },

        /**
        * Sort based on multiple properties
        * @returns {function}
        */
        dynamicSortMultiple: function ()
        {
            /*
             * save the arguments object as it will be overwritten
             * note that arguments object is an array-like object
             * consisting of the names of the properties to sort by
             */
            var props = arguments;

            return function (obj1, obj2)
            {
                var i = 0,
                    result = 0,
                    numberOfProperties = props.length;

                /* try getting a different result from 0 (equal)
                 * as long as we have extra properties to compare
                 */
                while (result === 0 && i < numberOfProperties)
                {
                    result = dynamicSort(props[i])(obj1, obj2);
                    i += 1;
                }

                return result;
            };
        },

        /**
        * Returns true if the value is between the min and max values
        * @param {object} min
        * @param {object} max
        * @param {object} value
        * @returns {bool}
        */
        between: function (min, max, value)
        {
            if (min === "" && max === "")
            {
                return true;
            }
            else if (min <= value && max === "")
            {
                return true;
            }
            else if (max >= value && min === "")
            {
                return true;
            }
            else if (min <= value && max >= value)
            {
                return true;
            }
            return false;
        },

        numeric: function (a, b)
        {
            return a - b;
        }
    },

    stringManipulation: {
        /**
        * Cleans JSON of extra escape characters
        * @param {string} json
        * @returns {string}
        */
        cleanJSON: function (json)
        {
            var returnMe = json;
            return replaceAll(returnMe, "/\r|\n|\\/g", "");
        },
        /**
        * Replace all instances of a string within a context with another string
        * @param {string} str
        * @param {string} find
        * @param {string} replace
        * @returns {string}
        */
        replaceAll: function (str, find, replace)
        {
            console.log("replaceAll", str, find, replace);
            return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
        }
    },

    webStorage: {
        /*
        Determine which data store to access based on browser support
        */
        /**
        *
        * @param {object} sender
        */
        getDataFromStore: function (key, callback)
        {
            console.log("getDataFromStore");

            if (WebStorage.local)
            {
                if (!WebStorage.local[key])
                {
                    WebStorage.local[key] = [];
                    callback(WebStorage.local[key]);
                }
                callback(WebStorage.local[key]);
            }
            else
            {
                data.read(callback(data));
            }
        },

        /*
        fold the items in the parameter into the data store
        data is an object or an array of objects
        */
        /**
        *
        * @param {object} sender
        */
        saveDataToStore: function (saveMe, key)
        {
            console.log("saveToDataStore", saveMe, key);
            if (WebStorage.local)
            {
                if (!WebStorage.local[key])
                {
                    WebStorage.local[key] = [];
                }
                console.log("storing in localStorage");
                WebStorage.local[key] = this.join(saveMe, WebStorage.local[key]);
            }
            else
            {
                console.log("storing in Collection");

                saveMe.forEach(function (me)
                {
                    data.create(me, function () { });
                });
            }
        }
    }
};

/*jQuery dataTables helpers*/
function DataTablesHelper()
{
    // Instance stores a reference to the Singleton
    var instance;

    function init()
    {
        //this is a template for markup.  it has the attributes that dataTables supports
        //<td data-sort="" data-filter="" data-search="21st November 2016 21/11/2016" data-order="1479686400">21st November 2016</td>

        // Singleton
        // Private methods and variables

        var dateRangeFiltering = false,
                numberRangeFiltering = false,
                webComponentSetup = false;

        /**
        * adds a date picker to a column header in a DataTable and then returns a reference to it
        * @param {string} column identifies the column in which to create the date picker
        * @returns {object} a date picker control
        */
        function addDatePickerFilter(column)
        {
            console.log("AddDatePickerFilter", title, column);
            var markup = '<input type="text" class="datepicker"/>';
            var changeEvent = function ()
            {
                var val = $.fn.dataTable.util.escapeRegex(
                    $(this).val()
                );

                column
                    .search(val ? "^" + val + "$" : "", true, false)
                    .draw();
            };
            var clickEvent = function (e)
            {
                e.stopPropagation();
            };

            return addFilter(column, markup, changeEvent, function () { }, clickEvent);
        }

        /**
        * adds two date pickers to a column header in a DataTable and then returns a reference to them
        * @param {string} column identifies the column in which to create the date pickers
        * @returns {object} a date picker control
        */
        function addDateRangeFilter(column)
        {
            console.log("AddDateRangeFilter", column);
            var beginDate = '<div><label>Min</label><input type="text" class="datepicker" data-key="beginDate" placeholder="Start Date mm/dd/yyyy"/></div>';
            var endDate = '<div><label>Max</label><input type="text" class="datepicker" data-key="endDate" placeholder="End Date mm/dd/yyyy"/></div>';
            var markup = beginDate + endDate;

            //don't want to push a bunch of the same function into the dataTables prototype,
            //so we gate it with a switch
            if (!dateRangeFiltering)
            {
                setupDateRangeFiltering();
            }

            var changeEvent = function ()
            {
                //var beginDateValue = $(this).parent().children('[data-key="beginDate"]').val();
                //var endDateValue = $(this).parent().children('[data-key="endDate"]').val();
                //var val = $.fn.dataTable.util.escapeRegex(
                //    $(this).val()
                //);

                column
                //    .search($.fn.dataTable.util.escapeRegex(Helper.GetDateRangeRegex(beginDateValue, endDateValue)), true, false)
                    .draw();
            };
            var clickEvent = function (e)
            {
                e.stopPropagation();
            };

            return addFilter(column, markup, changeEvent, function () { }, clickEvent);
        }

        /**
        * adds two text fields to a column header in a DataTable and then returns a reference to them
        * @param {string} column identifies the column in which to create the text fields
        * @returns {object} a text field
        */
        function addNumberRangeFilter(column)
        {
            console.log("addNumberRangeFilter", column);
            var minValue = '<div><label>Min</label><input type="text" class="minRange" data-key="minValue" placeholder="Type to filter.  Press enter to query."/></div>';
            var maxValue = '<div><label>Max</label><input type="text" class="maxRange" data-key="maxValue" placeholder="Type to filter.  Press enter to query."/></div>';
            var markup = minValue + maxValue;

            //don't want to push a bunch of the same function into the dataTables prototype,
            //so we gate it with a switch
            if (!numberRangeFiltering)
            {
                setupNumberRangeFiltering();
            }

            var changeEvent = function ()
            {
                column.draw();
            };
            var clickEvent = function (e)
            {
                e.stopPropagation();
            };

            return addFilter(column, markup, changeEvent, function () { }, clickEvent);
        }

        /**
        * adds a select control to a column header in a DataTable and then returns a reference to it
        * @param {string} column identifies the column in which to create the date pickers
        * @returns {object} a select control
        */
        function addSelectFilter(column)
        {
            console.log("addSelectFilter", column);
            var markup = '<select><option value=""></option></select>';
            var keyupEvent = function () { };
            var changeEvent = function ()
            {
                var val = $.fn.dataTable.util.escapeRegex(
                    $(this).val()
                );

                column
                    .search(val ? "^" + val + "$" : "", true, false)
                    .draw();
            };
            var clickEvent = function (e)
            {
                e.stopPropagation();
            };

            return addFilter(column, markup, changeEvent, keyupEvent, clickEvent);
        }

        /**
        * adds an input type control text to a column header in a DataTable and then returns a reference to it
        * @param {string} title is used in the placeholder to alert the user what the field is used for
        * @param {string} column identifies the column in which to create the date pickers
        * @returns {object} an input type text control
        */
        function addTextFilter(title, column)
        {
            console.log("addTextFilter", title, column);
            var markup = '<input type="text" placeholder="Type to filter.  Press enter to query. ' + title + '" />';
            var keyupEvent = function ()
            {
                if (column.search() !== this.value)
                {
                    column
                        .search(this.value)
                        .draw();
                }
            };
            var clickEvent = function (e)
            {
                e.stopPropagation();
            };

            return addFilter(column, markup, function () { }, keyupEvent, clickEvent);
        }

        /**
        * adds a control to a column header in a DataTable and then returns a reference to it
        * @param {string} column identifies the column in which to create the date pickers
        * @param {string} markup will be inserted into the header
        * @param {function} changeEvent will be setup on the added control
        * @param {function} keyupEvent will be setup on the added control
        * @param {function} clickEvent will be setup on the added control
        * @returns {object} a control
        */
        function addFilter(column, markup, changeEvent, keyupEvent, clickEvent)
        {
            console.log("addFilter");//, column, markup, changeEvent, keyupEvent, clickEvent);
            var control = $(markup)
                .appendTo($(column.header()))
                .on("change", changeEvent)
                .on("keyup", keyupEvent)
                .on("click", clickEvent);

            return control;
        }

        /*
        jQuery Data Tables doesn't support footers, so this will add them directly into the DOM

        @param {DataTable} context - the JQuery DataTable that needs a footer added
        @param {int} numColumns - the number of columns in the table
        */
        function addFooter(selector, numColumns)
        {
            console.log("addFooter", selector, numColumns);
            var footStr = "<tfoot>" +
                "<tr>";

            for (i = 0; i < numColumns; i++)
            {
                footStr += "<th></th>";
            }

            footStr += "</tr>" +
            "</tfoot>";

            $(selector).html($(selector).html() + footStr);
        }

        /**
        * Queries a given object array for objects with [filter] matching query
        * @param {string} query is compared against all items in columns
        * @param {array} columns is the list of objects used to initialise the DataTable
        * @returns {array} indexes of all matching columns
        */
        function getColumnIndex(query, columns)
        {
            console.log("GetColumnIndex(query, columns)", query, columns);
            var matches = columns.filter(function (x) { return x.filter === query; });
            var returnMe = [];

            matches.forEach(function (x)
            {
                returnMe.push(columns.indexOf(x));
            });

            return returnMe;
        }

        /*
        * Sets up a filtering event that occurs each time the DataTable is drawn
        */
        function setupNumberRangeFiltering()
        {
            $.fn.dataTableExt.afnFiltering.push(
                function (oSettings, aData, iDataIndex)
                {
                    var returnMe = true;

                    oSettings.aoColumns.forEach(function (column)
                    {
                        if (column.filter === "numberRange")
                        {
                            var minValue = parseFloat($(column.nTh).find('[data-key="minValue"]').val()) || "";
                            var maxValue = parseFloat($(column.nTh).find('[data-key="maxValue"]').val()) || "";
                            var currentValue = parseFloat(aData[column.idx]);

                            if (!Helper.sorting.between(minValue, maxValue, currentValue))
                            {
                                returnMe = false;
                            }
                        }
                    });

                    return returnMe;
                });

            numberRangeFiltering = true;
        }

        /**
        * Sets up a filtering event that occurs each time the DataTable is drawn
        * must be done this way because using the column.search() function requires regex
        * and date range regex is a pain
        */
        function setupDateRangeFiltering()
        {
            console.log("setupDateRangeFiltering");
            //this function will run every time the table is rendered, once per row I believe,
            //sending table info into oSettings and row data into aData
            $.fn.dataTableExt.afnFiltering.push(
                function (oSettings, aData, iDataIndex)
                {
                    var returnMe = true;

                    oSettings.aoColumns.forEach(function (column)
                    {
                        if (column.filter === "dateRange")
                        {
                            //need to find the input fields for the dates.
                            //they are in the header, so nTh should point there
                            var beginDateValue = $(column.nTh).find('[data-key="beginDate"]').val() || "";
                            var endDateValue = $(column.nTh).find('[data-key="endDate"]').val() || "";

                            beginDateValue = beginDateValue.substring(6, 10) + beginDateValue.substring(0, 2) + beginDateValue.substring(3, 5);
                            endDateValue = endDateValue.substring(6, 10) + endDateValue.substring(0, 2) + endDateValue.substring(3, 5);

                            //formatter yyyymmdd
                            var temp = aData[column.idx].toString()
                                //truncate the time
                                .split(" ")[0]
                                .split("T")[0]
                                .split("/")
                                .reverse();
                            var a = temp[2];
                            temp[2] = temp[1];
                            temp[1] = a;

                            var date = [];

                            temp.forEach(function (datePart)
                            {
                                if (datePart && datePart.length === 1)
                                {
                                    date.push("0" + datePart);
                                }
                                else
                                {
                                    date.push(datePart);
                                }
                            });

                            date = date.join("");

                            if (!Helper.sorting.between(beginDateValue, endDateValue, date))
                            {
                                returnMe = false;
                            }
                        }
                    });

                    return returnMe;
                }
            );
            dateRangeFiltering = true;
        }

        /*
         * Defines the custom control for jQueryDataTables
         * @param {string} id - the id to apply to the instance of the template that will be added to the DOM
         */
        function setupCustomControl(id)
        {
            //Create an id for the data table instance
            //so we don't get our wires crossed
            //when there is more than one data table in the DOM
            document.body.insertAdjacentHTML("beforeend", getJQueryDataTableTemplate());

            // See https://html.spec.whatwg.org/multipage/indices.html#element-interfaces
            // for the list of other DOM interfaces.
            class jQueryDataTable extends HTMLElement
            {
                constructor()
                {
                    console.log("jQueryDataTable constructor");
                    // always call super() first in the ctor.
                    super();

                    //todo probably need to move this into a library and pass in the context to make it reusable
                    //setup shadow DOM
                    let shadowRoot = this.attachShadow({ mode: "open" });
                    this.id = id;
                    const t = document.querySelector("#jQuery-DataTable-Template");
                    const instance = t.content.cloneNode(true);
                    shadowRoot.appendChild(instance);
                }

                static get observedAttributes()
                {
                    return ["width", "height"];
                }

                connectedCallback()
                {
                    console.log("connectedCallback");
                    console.log("this", this);
                }
                disconnectedCallback()
                {
                    console.log("disconnectedCallback");
                }
                attributeChangedCallback(attrName, oldVal, newVal)
                {
                    console.log("attributeChangedCallback");

                    //height changed
                    if (attrName == "height")
                    {
                        //adjust the height of the scrollable area
                        $('div.dataTables_scrollBody').height(newVal);
                    }
                }
                adoptedCallback()
                {
                    console.log("adoptedCallback");
                }
            }

            customElements.define(getCustomControlName(), jQueryDataTable);
            return customElements.whenDefined(getCustomControlName());
        }

        /*
         * This returns the HTML template for the data table
         */
        function getJQueryDataTableTemplate()
        {
            console.log("getJQueryDataTableTemplate");

            return "<template id=\"jQuery-DataTable-Template\">"
            + "<style>"
            + "p { color: orange; }"
            + "</style>"
            + "<p>I'm in Shadow DOM. My markup was stamped from a &lt;template&gt;.</p>"
            + "<table></table>"
            + "</template>";
        }

        function getCustomControlName()
        {
            return "jquery-datatable";
        }

        /*
        this is not ready for use yet.  It probably needs to take a function for the ajax parameter
        selector gets the table
        dataSource is the result of an ajax request

        @param {string} selector - targets the table
        @param {array<object>} dataSource - is an array of objects that have properties that map to the columns parameter
        @param {array<string>} columns - determines which properties from the dataSource to load into columns
        */
        function loadFromAjax(selector, dataSource, columns)
        {
            console.log("loadFromAjax", selector, dataSource, columns);
            throw "loadFromAjax is not implemented";

            //$(selector).DataTable({
            //
            //    "ajax": function (data, callback, settings) {
            //        saveToDataStore(WebStorage.GetAll(), 'data');
            //    },
            //
            //    //add a link for each item
            //    "dataSrc": function (json) {
            //        for (var i = 0, ien = json.length ; i < ien ; i++) {
            //            json[i][0] = '<a href="/message/' + json[i][0] + '>View message</a>';
            //        }
            //        return json;
            //    },
            //
            //    "columns": columns,
            //
            //    //to render links
            //    "render": function (data, type, full, meta) {
            //        return '<a href="' + data + '">Download</a>';
            //    }
            //});
        }

        /*
        this is not ready for use
        @param {string} selector - targets the table
        @param {array<object>} dataSource - is an array of objects that have properties that map to the columns parameter
        @param {array<string>} columns - determines which properties from the dataSource to load into columns
                //{ title: "Name" },
        */
        function loadFromArray(selector, dataSource, columns)
        {
            console.log("loadFromArray", selector, dataSource, columns);
            throw "loadFromArray is not implemented";

            //$(selector).DataTable({
            //    data: datasource,
            //    "columns": columns,
            //});
        }

        /*
        @param {string} selector - targets the table
        @param {array<object>} dataSource - is an array of objects that have properties that map to the columns parameter
        @param {array<string>} columns - determines which properties from the dataSource to load into columns

        @param {function} dataSrcCallback - runs for every row
        example
            //add a link for each item
            function (json) {
                for (var i = 0, ien = json.length ; i < ien ; i++) {
                    json[i][0] = '<a href="/message/' + json[i][0] + '>View message</a>';
                }
                return json;
            },

        @param {function} renderCallback - runs at render time
        example
            //add a link for each item
            function (data, type, full, meta) {
                return '<a href="' + data + '">Download</a>';
            }
        */
        function loadFromObjectArray(scope, selector, dataSource, columns, dataSrcCallback, renderCallback, columnReorderEnabled, pagingEnabled, height)
        {
            console.log("loadFromObjectArray", scope, selector, dataSource, columns, dataSrcCallback, renderCallback);

            if (!scope) { scope = document; }

            console.log("target tables", $(scope).find(selector));

            return $(scope).find(selector).DataTable({
                "data": dataSource,
                //"" makes this point to the root of the object rather than the data property
                "dataSrc": "",//dataSrcCallback === undefined ? "" : dataSrcCallback,
                "columns": columns,
                "colReorder": columnReorderEnabled,
                //"render": renderCallback === undefined ? null : renderCallback
                //for some reason this causes column alignment issues
                scrollCollapse: true,
                paging: pagingEnabled,

                //im not sure why the extra s needs to be there.  the documentation wasn't clear
                //scrollY: 'calc(50vh - 3em)',
                "sScrollY": height,
                //"fnDrawCallback": adjust(selector)
                initComplete: function ()
                {
                    //I use the columns data to determine what kind of controls to use for filtering
                    var textIndexes = getColumnIndex("text", columns),
                    dropdownIndexes = getColumnIndex("dropdown", columns),
                    datePickerIndexes = getColumnIndex("datePicker", columns),
                    dateRangeIndexes = getColumnIndex("dateRange", columns),
                    numberRangeIndexes = getColumnIndex("numberRange", columns);

                    this.api().columns().every(function ()
                    {
                        var column = this;
                        var title = $(this).text();

                        if (textIndexes.indexOf(column[0][0]) !== -1)
                        {
                            addTextFilter(title, column);
                        }

                        if (dropdownIndexes.indexOf(column[0][0]) !== -1)
                        {
                            var select = addSelectFilter(column);

                            column.data().unique().sort().each(function (d, j)
                            {
                                select.append('<option data-id="' + j + '" value="' + d + '">' + d + '</option>');
                            });
                        }

                        if (datePickerIndexes.indexOf(column[0][0]) !== -1)
                        {
                            addDatePickerFilter(column);
                        }

                        if (dateRangeIndexes.indexOf(column[0][0]) !== -1)
                        {
                            addDateRangeFilter(column);
                        }

                        if (numberRangeIndexes.indexOf(column[0][0]) !== -1)
                        {
                            addNumberRangeFilter(column);
                        }
                    });
                }
            });
        }

        return {
            /*
            * Configure a custom control and append an instance of it to the target scope
            *
            * @param {guid} id - will be used as the id attr for the custom element created in the template
            * @param {string} scopeSelector - defines the element that will receive a new child
            * @returns {promise} resolves when the custom control is finished being defined
            */
            getCustomControl: function (id, scopeSelector)
            {
                var ctor;

                //we only need to do the setup once per page
                if (!this.webComponentSetup)
                {
                    setupCustomControl(id);
                }

                ctor = customElements.get(getCustomControlName());
                return new ctor();
            },

            loadFromAjax: function (selector, dataSource, columns)
            {
                loadFromAjax(selector, dataSource, columns);
            },

            loadFromArray: function (selector, dataSource, columns)
            {
                loadFromArray(selector, dataSource, columns);
            },

            loadFromObjectArray: function (scope, selector, dataSource, columns, dataSrcCallback, renderCallback, columnReorderEnabled, pagingEnabled, height)
            {
                loadFromObjectArray(scope, selector, dataSource, columns, dataSrcCallback, renderCallback, columnReorderEnabled, pagingEnabled, height);
            },

            /*
            This sets up the rendering and the subscriptions for a basic data table.

            @param {function} renderCallback - runs at render time

            @param {string} targetSelector - references the html element to contain the data table
            @param {string} queryUrl - contains a reference to a controller that will return data
            @param {function} queryCallback - will execute on a successful query
            @param {array(object)} columns - is used to configure the data table

                [
                    {
                        // the value of "data" corresponds to an object key
                        "data": "cell0",

                        // the value of "title" determines the column header
                        "title": "Pri",

                        // the render function should return some markup to render the value of "data"
                        render: $.fn.dataTable.render.text() ||
                        render: function (data, type, row)
                        {
                            return "<a href=\"" + encodeURI("ipeWorkloadStatusDisplay.asp?wonum=" + data) + "\" class=\"link\">" + data + "</a>";
                        },

                        // filter is a string which indicates what kind of control to render in the column header for filtering
                        "filter": "datePicker" || "dateRange" || "dropdown" || "numberRange" || "text"
                    }
                ];

            */
            setupViewModel: function (scope, targetSelector, queryUrl, query, columns, columnReorderEnabled, pagingEnabled, height)
            {
                var viewModel = {
                    //data defines the CRUD for the view
                    data: (function ()
                    {
                        var _all = [];

                        return {
                            get: function ()
                            {
                                return _all;
                            },
                            set: function (value)
                            {
                                console.log("data.set", value);
                                _all = value;
                                PubSub.publish("data" + scope + ".change", this);
                            },
                            add: function (value)
                            {
                                _all.push(value);
                                PubSub.publish("data" + scope + ".change", this);
                            },
                            /**
                             * accessor
                             * @returns {array}
                             */
                            get subset()
                            {
                                return _all.filter(function (x)
                                {
                                    // a predicate goes here
                                    return false;
                                });
                            },
                            /**
                             * make an ajax request for the data at the given url
                             *
                             * @param {string} url
                             * @param {function} successCallback - logic to be performed upon success
                             *     function(object data, string textStatus, jqXHR jqXHR)
                             * @param {string || object} data - to be sent to the server with the request
                             *
                             * @returns {array} a collection of records that should have
                             * the appropriate columns to fit into the table
                             */
                            search: function (queryUrl, data, successCallback)
                            {
                                console.log("search", callback, data);
                                queryCallback(queryUrl, data, successCallback);
                            },
                            /**
                             * Generate test data
                             * @returns {object} with all keys containing randomly generated values
                             */
                            generateRow: function ()
                            {
                                console.log("generateRow");

                                var returnMe = {};

                                columns.forEach(function (columns)
                                {
                                    returnMe[column.data] = Helper.generateGuid();
                                });

                                return returnMe;
                            }
                        };
                    })(),
                    // ui level data goes here. and functions too.
                    ui:
                    {
                        //selectors: { tableSelector: "#jqdt" },
                        //references to DataTables, needed for redrawing
                        table: null,
                        /**
                         * Sets up subscriptions
                         */
                        bind: function ()
                        {
                            PubSub.subscribe("data" + scope + ".change", this.redraw, this);
                        },
                        events: {},
                        /**
                         * Hides the tabs that contain the tables
                         */
                        hide: function ()
                        {
                            $(scope).find(targetSelector).hide();
                        },
                        /**
                        * redraws a dataTable, saving the current scroll position and maintaining focus
                        */
                        redraw: function ()
                        {
                            console.log("ui.redraw");
                            redrawTable(viewModel.data.get(), this.table, scope, targetSelector);

                            /*
                            * @param {array} data is an array with each index representing a row of data
                            * @param {object} table is a jQuery DataTable to be redrawn
                            * @param {string} selector identifies the html table that corresponds to the jQuery DataTable
                            */
                            function redrawTable(data, table, scope, selector)
                            {
                                if (table)
                                {
                                    var scroll = $(scope).find(selector).parent().scrollTop();
                                    table.clear().rows.add(data).draw(false);
                                    $(scope).find(selector).focus();
                                    $(scope).find(selector).parent().scrollTop(scroll).focus();
                                }
                            }
                        },
                        /**
                         * Sets up the DataTable and populates it with data
                         * @param {object}
                         */
                        render: function (data)
                        {
                            console.log("ui.render");
                            var that = this;

                            this.show();
                            load(viewModel.data.get());

                            function load(data)
                            {
                                console.log("ui.load", data);

                                if (data.length > 0)
                                {
                                    that.table = loadFromObjectArray(scope, targetSelector, data, columns, function () { }, function () { }, columnReorderEnabled, pagingEnabled, height);
                                }

                                Helper.setupInfiniteScroll(scope, targetSelector, 200, -400, function ()
                                {
                                    //query for more data
                                    //data.add(data.generate());
                                });
                            }
                        },
                        /**
                         * Displays the tab and the tables it contains
                         */
                        show: function ()
                        {
                            console.log("ui.show");
                            $(scope).find(targetSelector).show().height("auto").addClass("display");
                        }
                    },
                    /**
                    * Sets up bindings,
                    * Gets data,
                    * Renders table
                    */
                    init: function ()
                    {
                        console.log("vm.init");
                        var promises = [];
                        var printMe = "";
                        var self = this;

                        self.ui.bind();

                        //put all the promises from the ajax into an array for processing
                        promises.push(query(function (data)
                        {
                            self.data.set(Helper.json.tryParse(data));
                        }));

                        //process the promises
                        $.when.apply($, promises).then(function ()
                        {
                            // returned data is in arguments[0][0], arguments[1][0], ... arguments[9][0]
                            // setup the tables
                            self.ui.render(self.data);
                        }, function ()
                        {
                            console.log("Error during rendering");
                        });
                    }
                };
                viewModel.init();
                return viewModel;
            }
        };
    }

    return {
        getInstance: function ()
        {
            if (!instance)
            {
                instance = init();
            }
            return instance;
        }
    };
};

var PubSub = (function ()
{
    var queue = [];
    var that = {};

    /*
    I invoke the callbacks that subscribed to the given eventname
    eventName is the event whose callbacks we want to run
    data is whatever object will be sent into the callback for processing
    */
    that.publishAsync = function (eventName, data)
    {
        var context, intervalId, idx = 0;
        if (queue[eventName])
        {
            // I use setInterval here so the callbacks are executed async
            // that way you have no idea when they finish
            intervalId = setInterval(function ()
            {
                if (queue[eventName][idx])
                {
                    context = queue[eventName][idx].context || this;
                    queue[eventName][idx].callback.call(context, data);
                    idx += 1;
                }
                else
                {
                    clearInterval(intervalId);
                }
            }, 0);
        }
    };

    that.publish = function (/* String */eventName, /* Array? */data)
    {
        var context, intervalId, idx = 0;

        if (queue[eventName])
        {
            if (queue[eventName][idx])
            {
                context = queue[eventName][idx].context || this;
                queue[eventName][idx].callback.call(context, data);
                idx += 1;
            }
            else
            {
                clearInterval(intervalId);
            }
        }

        //try
        //{
        //    d.each(cache[eventName], function ()
        //    {
        //        this.apply(d, data || []);
        //    });
        //} catch (err)
        //{
        //    // handle this error
        //    console.log(err);
        //}
    };

    /*
    I allow objects to subscribe to an event identified by a string
    eventName is a string that identifies the event
    callback is a function to call when the event is published
    context is the context that executes the callback
    */
    that.subscribe = function (eventName, callback, context)
    {
        if (!queue[eventName])
        {
            queue[eventName] = [];
        }
        queue[eventName].push({ callback: callback, context: context });
    };

    /*
    I allow objects to unsubscribe from the given event
    eventName is the event from which to unsubscribe
    callback is the callback to remove from the subscription
    context is the context to remove from the subscription
    */
    that.unsubscribe = function (eventName, callback, context)
    {
        if (queue[eventName])
        {
            for (i = 0; i

< queue[eventName].length; i++)
            {
                if ((queue[eventName][i].callback === callback) && (queue[eventName][i].context === context))
                {
                    queue[eventName].splice(i);
                }
            }
        }
    };
    return that;
})();

/**
 * Gets the list of records that the current user is authorised to view,
 * one page at a time
 * @param {function} doneCallback is executed after the data is retrieved
 * @returns {object} a promise
 */

$(function ()
{
    console.log("starting script");
    const supportsCustomElementsV1 = 'customElements' in window;
    console.log("supportsCustomElementsV1", supportsCustomElementsV1);

    var dataSource =
    {
        /*
            * there should be a reference to a controller in here
            * but this function will have to do for now
            */
        getList: function (doneCallback)
        {
            console.log("data.getList");

            var t = document.querySelector("#Table2");
            var data = getRowValues(t);
            console.log("data getList returns", data);
            doneCallback(data);
            return data;

            //get row values
            function getRowValues(scope)
            {
                console.log("getRowValues", scope);

                var returnMe = [];
                var i, j;

                for (i = 2; i < scope.rows.length; i++)
                {
                    var addMe = {};

                    for (j = 0; j < scope.rows[i].cells.length; j++)
                    {
                        addMe["cell" + j] = scope.rows[i].cells[j].textContent.trim();
                    }

                    returnMe.push(addMe);
                }

                return returnMe;
            }
        }
    },
    dataTablesHelper = DataTablesHelper().getInstance();
    id = Helper.generateHTMLElementId(),
    queryUrl = "",
    queryCallback = function (url, data, successCallback)
    {
        $.get(url, data, successCallback /*, string datatype*/);
    },
    scopeSelector = "#Table1 > tbody > tr > td",
    //table = document.createElement("table"),
    viewModel = null;

    setupCSS();

    //table.id = id;
    //document.querySelector(scopeSelector).appendChild(table);

    document.querySelector(scopeSelector).appendChild(dataTablesHelper.getCustomControl(id, scopeSelector));
    console.log("instance added to DOM");

    viewModel = dataTablesHelper.setupViewModel(document.querySelector("#" + id).shadowRoot, "table", queryUrl, dataSource.getList, getColumnsToolSearch(), true, true, "100%");

    document.body.appendChild(document.createElement("jquery-datatable"));

    //since we're injecting this script into the page,
    //we also need to make a place to put the data table
    function setupTable()
    {
        console.log("setupTable");
        var div = document.createElement("div");
        var newTable = document.createElement("table");
        newTable.id = "jqdt";

        div.appendChild(newTable);
        document.querySelector("#frmWorkload").appendChild(div);
    }

    /*
    This injects the jQuery, jQueryUI, and DataTables CSS into the page
    since we're injecting this script into the console, we have to add the styles to the DOM
    */
    function setupCSS()
    {
        console.log("setupCSS");
        var jQueryUICSS = '.ui-draggable-handle{-ms-touch-action:none;touch-action:none}.ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ui-helper-reset{margin:0;padding:0;border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none}.ui-helper-clearfix:before,.ui-helper-clearfix:after{content:"";display:table;border-collapse:collapse}.ui-helper-clearfix:after{clear:both}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabled{cursor:default!important;pointer-events:none}.ui-icon{display:inline-block;vertical-align:middle;margin-top:-.25em;position:relative;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat}.ui-widget-icon-block{left:50%;margin-left:-8px;display:block}.ui-widget-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ui-resizable{position:relative}.ui-resizable-handle{position:absolute;font-size:0.1px;display:block;-ms-touch-action:none;touch-action:none}.ui-resizable-disabled .ui-resizable-handle,.ui-resizable-autohide .ui-resizable-handle{display:none}.ui-resizable-n{cursor:n-resize;height:7px;width:100%;top:-5px;left:0}.ui-resizable-s{cursor:s-resize;height:7px;width:100%;bottom:-5px;left:0}.ui-resizable-e{cursor:e-resize;width:7px;right:-5px;top:0;height:100%}.ui-resizable-w{cursor:w-resize;width:7px;left:-5px;top:0;height:100%}.ui-resizable-se{cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.ui-resizable-sw{cursor:sw-resize;width:9px;height:9px;left:-5px;bottom:-5px}.ui-resizable-nw{cursor:nw-resize;width:9px;height:9px;left:-5px;top:-5px}.ui-resizable-ne{cursor:ne-resize;width:9px;height:9px;right:-5px;top:-5px}.ui-selectable{-ms-touch-action:none;touch-action:none}.ui-selectable-helper{position:absolute;z-index:100;border:1px dotted black}.ui-sortable-handle{-ms-touch-action:none;touch-action:none}.ui-accordion .ui-accordion-header{display:block;cursor:pointer;position:relative;margin:2px 0 0 0;padding:.5em .5em .5em .7em;font-size:100%}.ui-accordion .ui-accordion-content{padding:1em 2.2em;border-top:0;overflow:auto}.ui-autocomplete{position:absolute;top:0;left:0;cursor:default}.ui-menu{list-style:none;padding:0;margin:0;display:block;outline:0}.ui-menu .ui-menu{position:absolute}.ui-menu .ui-menu-item{margin:0;cursor:pointer;list-style-image:url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}.ui-menu .ui-menu-item-wrapper{position:relative;padding:3px 1em 3px .4em}.ui-menu .ui-menu-divider{margin:5px 0;height:0;font-size:0;line-height:0;border-width:1px 0 0 0}.ui-menu .ui-state-focus,.ui-menu .ui-state-active{margin:-1px}.ui-menu-icons{position:relative}.ui-menu-icons .ui-menu-item-wrapper{padding-left:2em}.ui-menu .ui-icon{position:absolute;top:0;bottom:0;left:.2em;margin:auto 0}.ui-menu .ui-menu-icon{left:auto;right:0}.ui-button{padding:.4em 1em;display:inline-block;position:relative;line-height:normal;margin-right:.1em;cursor:pointer;vertical-align:middle;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:visible}.ui-button,.ui-button:link,.ui-button:visited,.ui-button:hover,.ui-button:active{text-decoration:none}.ui-button-icon-only{width:2em;box-sizing:border-box;text-indent:-9999px;white-space:nowrap}input.ui-button.ui-button-icon-only{text-indent:0}.ui-button-icon-only .ui-icon{position:absolute;top:50%;left:50%;margin-top:-8px;margin-left:-8px}.ui-button.ui-icon-notext .ui-icon{padding:0;width:2.1em;height:2.1em;text-indent:-9999px;white-space:nowrap}input.ui-button.ui-icon-notext .ui-icon{width:auto;height:auto;text-indent:0;white-space:normal;padding:.4em 1em}input.ui-button::-moz-focus-inner,button.ui-button::-moz-focus-inner{border:0;padding:0}.ui-controlgroup{vertical-align:middle;display:inline-block}.ui-controlgroup > .ui-controlgroup-item{float:left;margin-left:0;margin-right:0}.ui-controlgroup > .ui-controlgroup-item:focus,.ui-controlgroup > .ui-controlgroup-item.ui-visual-focus{z-index:9999}.ui-controlgroup-vertical > .ui-controlgroup-item{display:block;float:none;width:100%;margin-top:0;margin-bottom:0;text-align:left}.ui-controlgroup-vertical .ui-controlgroup-item{box-sizing:border-box}.ui-controlgroup .ui-controlgroup-label{padding:.4em 1em}.ui-controlgroup .ui-controlgroup-label span{font-size:80%}.ui-controlgroup-horizontal .ui-controlgroup-label + .ui-controlgroup-item{border-left:none}.ui-controlgroup-vertical .ui-controlgroup-label + .ui-controlgroup-item{border-top:none}.ui-controlgroup-horizontal .ui-controlgroup-label.ui-widget-content{border-right:none}.ui-controlgroup-vertical .ui-controlgroup-label.ui-widget-content{border-bottom:none}.ui-controlgroup-vertical .ui-spinner-input{width:75%;width:calc( 100% - 2.4em )}.ui-controlgroup-vertical .ui-spinner .ui-spinner-up{border-top-style:solid}.ui-checkboxradio-label .ui-icon-background{box-shadow:inset 1px 1px 1px #ccc;border-radius:.12em;border:none}.ui-checkboxradio-radio-label .ui-icon-background{width:16px;height:16px;border-radius:1em;overflow:visible;border:none}.ui-checkboxradio-radio-label.ui-checkboxradio-checked .ui-icon,.ui-checkboxradio-radio-label.ui-checkboxradio-checked:hover .ui-icon{background-image:none;width:8px;height:8px;border-width:4px;border-style:solid}.ui-checkboxradio-disabled{pointer-events:none}.ui-datepicker{width:17em;padding:.2em .2em 0;display:none}.ui-datepicker .ui-datepicker-header{position:relative;padding:.2em 0}.ui-datepicker .ui-datepicker-prev,.ui-datepicker .ui-datepicker-next{position:absolute;top:2px;width:1.8em;height:1.8em}.ui-datepicker .ui-datepicker-prev-hover,.ui-datepicker .ui-datepicker-next-hover{top:1px}.ui-datepicker .ui-datepicker-prev{left:2px}.ui-datepicker .ui-datepicker-next{right:2px}.ui-datepicker .ui-datepicker-prev-hover{left:1px}.ui-datepicker .ui-datepicker-next-hover{right:1px}.ui-datepicker .ui-datepicker-prev span,.ui-datepicker .ui-datepicker-next span{display:block;position:absolute;left:50%;margin-left:-8px;top:50%;margin-top:-8px}.ui-datepicker .ui-datepicker-title{margin:0 2.3em;line-height:1.8em;text-align:center}.ui-datepicker .ui-datepicker-title select{font-size:1em;margin:1px 0}.ui-datepicker select.ui-datepicker-month,.ui-datepicker select.ui-datepicker-year{width:45%}.ui-datepicker table{width:100%;font-size:.9em;border-collapse:collapse;margin:0 0 .4em}.ui-datepicker th{padding:.7em .3em;text-align:center;font-weight:bold;border:0}.ui-datepicker td{border:0;padding:1px}.ui-datepicker td span,.ui-datepicker td a{display:block;padding:.2em;text-align:right;text-decoration:none}.ui-datepicker .ui-datepicker-buttonpane{background-image:none;margin:.7em 0 0 0;padding:0 .2em;border-left:0;border-right:0;border-bottom:0}.ui-datepicker .ui-datepicker-buttonpane button{float:right;margin:.5em .2em .4em;cursor:pointer;padding:.2em .6em .3em .6em;width:auto;overflow:visible}.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current{float:left}.ui-datepicker.ui-datepicker-multi{width:auto}.ui-datepicker-multi .ui-datepicker-group{float:left}.ui-datepicker-multi .ui-datepicker-group table{width:95%;margin:0 auto .4em}.ui-datepicker-multi-2 .ui-datepicker-group{width:50%}.ui-datepicker-multi-3 .ui-datepicker-group{width:33.3%}.ui-datepicker-multi-4 .ui-datepicker-group{width:25%}.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header{border-left-width:0}.ui-datepicker-multi .ui-datepicker-buttonpane{clear:left}.ui-datepicker-row-break{clear:both;width:100%;font-size:0}.ui-datepicker-rtl{direction:rtl}.ui-datepicker-rtl .ui-datepicker-prev{right:2px;left:auto}.ui-datepicker-rtl .ui-datepicker-next{left:2px;right:auto}.ui-datepicker-rtl .ui-datepicker-prev:hover{right:1px;left:auto}.ui-datepicker-rtl .ui-datepicker-next:hover{left:1px;right:auto}.ui-datepicker-rtl .ui-datepicker-buttonpane{clear:right}.ui-datepicker-rtl .ui-datepicker-buttonpane button{float:left}.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,.ui-datepicker-rtl .ui-datepicker-group{float:right}.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header{border-right-width:0;border-left-width:1px}.ui-datepicker .ui-icon{display:block;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat;left:.5em;top:.3em}.ui-dialog{position:absolute;top:0;left:0;padding:.2em;outline:0}.ui-dialog .ui-dialog-titlebar{padding:.4em 1em;position:relative}.ui-dialog .ui-dialog-title{float:left;margin:.1em 0;white-space:nowrap;width:90%;overflow:hidden;text-overflow:ellipsis}.ui-dialog .ui-dialog-titlebar-close{position:absolute;right:.3em;top:50%;width:20px;margin:-10px 0 0 0;padding:1px;height:20px}.ui-dialog .ui-dialog-content{position:relative;border:0;padding:.5em 1em;background:none;overflow:auto}.ui-dialog .ui-dialog-buttonpane{text-align:left;border-width:1px 0 0 0;background-image:none;margin-top:.5em;padding:.3em 1em .5em .4em}.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset{float:right}.ui-dialog .ui-dialog-buttonpane button{margin:.5em .4em .5em 0;cursor:pointer}.ui-dialog .ui-resizable-n{height:2px;top:0}.ui-dialog .ui-resizable-e{width:2px;right:0}.ui-dialog .ui-resizable-s{height:2px;bottom:0}.ui-dialog .ui-resizable-w{width:2px;left:0}.ui-dialog .ui-resizable-se,.ui-dialog .ui-resizable-sw,.ui-dialog .ui-resizable-ne,.ui-dialog .ui-resizable-nw{width:7px;height:7px}.ui-dialog .ui-resizable-se{right:0;bottom:0}.ui-dialog .ui-resizable-sw{left:0;bottom:0}.ui-dialog .ui-resizable-ne{right:0;top:0}.ui-dialog .ui-resizable-nw{left:0;top:0}.ui-draggable .ui-dialog-titlebar{cursor:move}.ui-progressbar{height:2em;text-align:left;overflow:hidden}.ui-progressbar .ui-progressbar-value{margin:-1px;height:100%}.ui-progressbar .ui-progressbar-overlay{background:url("data:image/gif;base64,R0lGODlhKAAoAIABAAAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQABACwAAAAAKAAoAAACkYwNqXrdC52DS06a7MFZI+4FHBCKoDeWKXqymPqGqxvJrXZbMx7Ttc+w9XgU2FB3lOyQRWET2IFGiU9m1frDVpxZZc6bfHwv4c1YXP6k1Vdy292Fb6UkuvFtXpvWSzA+HycXJHUXiGYIiMg2R6W459gnWGfHNdjIqDWVqemH2ekpObkpOlppWUqZiqr6edqqWQAAIfkECQEAAQAsAAAAACgAKAAAApSMgZnGfaqcg1E2uuzDmmHUBR8Qil95hiPKqWn3aqtLsS18y7G1SzNeowWBENtQd+T1JktP05nzPTdJZlR6vUxNWWjV+vUWhWNkWFwxl9VpZRedYcflIOLafaa28XdsH/ynlcc1uPVDZxQIR0K25+cICCmoqCe5mGhZOfeYSUh5yJcJyrkZWWpaR8doJ2o4NYq62lAAACH5BAkBAAEALAAAAAAoACgAAAKVDI4Yy22ZnINRNqosw0Bv7i1gyHUkFj7oSaWlu3ovC8GxNso5fluz3qLVhBVeT/Lz7ZTHyxL5dDalQWPVOsQWtRnuwXaFTj9jVVh8pma9JjZ4zYSj5ZOyma7uuolffh+IR5aW97cHuBUXKGKXlKjn+DiHWMcYJah4N0lYCMlJOXipGRr5qdgoSTrqWSq6WFl2ypoaUAAAIfkECQEAAQAsAAAAACgAKAAAApaEb6HLgd/iO7FNWtcFWe+ufODGjRfoiJ2akShbueb0wtI50zm02pbvwfWEMWBQ1zKGlLIhskiEPm9R6vRXxV4ZzWT2yHOGpWMyorblKlNp8HmHEb/lCXjcW7bmtXP8Xt229OVWR1fod2eWqNfHuMjXCPkIGNileOiImVmCOEmoSfn3yXlJWmoHGhqp6ilYuWYpmTqKUgAAIfkECQEAAQAsAAAAACgAKAAAApiEH6kb58biQ3FNWtMFWW3eNVcojuFGfqnZqSebuS06w5V80/X02pKe8zFwP6EFWOT1lDFk8rGERh1TTNOocQ61Hm4Xm2VexUHpzjymViHrFbiELsefVrn6XKfnt2Q9G/+Xdie499XHd2g4h7ioOGhXGJboGAnXSBnoBwKYyfioubZJ2Hn0RuRZaflZOil56Zp6iioKSXpUAAAh+QQJAQABACwAAAAAKAAoAAACkoQRqRvnxuI7kU1a1UU5bd5tnSeOZXhmn5lWK3qNTWvRdQxP8qvaC+/yaYQzXO7BMvaUEmJRd3TsiMAgswmNYrSgZdYrTX6tSHGZO73ezuAw2uxuQ+BbeZfMxsexY35+/Qe4J1inV0g4x3WHuMhIl2jXOKT2Q+VU5fgoSUI52VfZyfkJGkha6jmY+aaYdirq+lQAACH5BAkBAAEALAAAAAAoACgAAAKWBIKpYe0L3YNKToqswUlvznigd4wiR4KhZrKt9Upqip61i9E3vMvxRdHlbEFiEXfk9YARYxOZZD6VQ2pUunBmtRXo1Lf8hMVVcNl8JafV38aM2/Fu5V16Bn63r6xt97j09+MXSFi4BniGFae3hzbH9+hYBzkpuUh5aZmHuanZOZgIuvbGiNeomCnaxxap2upaCZsq+1kAACH5BAkBAAEALAAAAAAoACgAAAKXjI8By5zf4kOxTVrXNVlv1X0d8IGZGKLnNpYtm8Lr9cqVeuOSvfOW79D9aDHizNhDJidFZhNydEahOaDH6nomtJjp1tutKoNWkvA6JqfRVLHU/QUfau9l2x7G54d1fl995xcIGAdXqMfBNadoYrhH+Mg2KBlpVpbluCiXmMnZ2Sh4GBqJ+ckIOqqJ6LmKSllZmsoq6wpQAAAh+QQJAQABACwAAAAAKAAoAAAClYx/oLvoxuJDkU1a1YUZbJ59nSd2ZXhWqbRa2/gF8Gu2DY3iqs7yrq+xBYEkYvFSM8aSSObE+ZgRl1BHFZNr7pRCavZ5BW2142hY3AN/zWtsmf12p9XxxFl2lpLn1rseztfXZjdIWIf2s5dItwjYKBgo9yg5pHgzJXTEeGlZuenpyPmpGQoKOWkYmSpaSnqKileI2FAAACH5BAkBAAEALAAAAAAoACgAAAKVjB+gu+jG4kORTVrVhRlsnn2dJ3ZleFaptFrb+CXmO9OozeL5VfP99HvAWhpiUdcwkpBH3825AwYdU8xTqlLGhtCosArKMpvfa1mMRae9VvWZfeB2XfPkeLmm18lUcBj+p5dnN8jXZ3YIGEhYuOUn45aoCDkp16hl5IjYJvjWKcnoGQpqyPlpOhr3aElaqrq56Bq7VAAAOw==");height:100%;filter:alpha(opacity=25);opacity:0.25}.ui-progressbar-indeterminate .ui-progressbar-value{background-image:none}.ui-selectmenu-menu{padding:0;margin:0;position:absolute;top:0;left:0;display:none}.ui-selectmenu-menu .ui-menu{overflow:auto;overflow-x:hidden;padding-bottom:1px}.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup{font-size:1em;font-weight:bold;line-height:1.5;padding:2px 0.4em;margin:0.5em 0 0 0;height:auto;border:0}.ui-selectmenu-open{display:block}.ui-selectmenu-text{display:block;margin-right:20px;overflow:hidden;text-overflow:ellipsis}.ui-selectmenu-button.ui-button{text-align:left;white-space:nowrap;width:14em}.ui-selectmenu-icon.ui-icon{float:right;margin-top:0}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:1.2em;height:1.2em;cursor:default;-ms-touch-action:none;touch-action:none}.ui-slider .ui-slider-range{position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider.ui-state-disabled .ui-slider-handle,.ui-slider.ui-state-disabled .ui-slider-range{filter:inherit}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:-.3em;margin-left:-.6em}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{width:.8em;height:100px}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-left:0;margin-bottom:-.6em}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}.ui-spinner{position:relative;display:inline-block;overflow:hidden;padding:0;vertical-align:middle}.ui-spinner-input{border:none;background:none;color:inherit;padding:.222em 0;margin:.2em 0;vertical-align:middle;margin-left:.4em;margin-right:2em}.ui-spinner-button{width:1.6em;height:50%;font-size:.5em;padding:0;margin:0;text-align:center;position:absolute;cursor:default;display:block;overflow:hidden;right:0}.ui-spinner a.ui-spinner-button{border-top-style:none;border-bottom-style:none;border-right-style:none}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-tabs{position:relative;padding:.2em}.ui-tabs .ui-tabs-nav{margin:0;padding:.2em .2em 0}.ui-tabs .ui-tabs-nav li{list-style:none;float:left;position:relative;top:0;margin:1px .2em 0 0;border-bottom-width:0;padding:0;white-space:nowrap}.ui-tabs .ui-tabs-nav .ui-tabs-anchor{float:left;padding:.5em 1em;text-decoration:none}.ui-tabs .ui-tabs-nav li.ui-tabs-active{margin-bottom:-1px;padding-bottom:1px}.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor{cursor:text}.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor{cursor:pointer}.ui-tabs .ui-tabs-panel{display:block;border-width:0;padding:1em 1.4em;background:none}.ui-tooltip{padding:8px;position:absolute;z-index:9999;max-width:300px}body .ui-tooltip{border-width:2px}',
        jQueryUIStructureCSS = '.ui-draggable-handle{-ms-touch-action:none;touch-action:none}.ui-helper-hidden{display:none}.ui-helper-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.ui-helper-reset{margin:0;padding:0;border:0;outline:0;line-height:1.3;text-decoration:none;font-size:100%;list-style:none}.ui-helper-clearfix:before,.ui-helper-clearfix:after{content:"";display:table;border-collapse:collapse}.ui-helper-clearfix:after{clear:both}.ui-helper-zfix{width:100%;height:100%;top:0;left:0;position:absolute;opacity:0;filter:Alpha(Opacity=0)}.ui-front{z-index:100}.ui-state-disabled{cursor:default!important;pointer-events:none}.ui-icon{display:inline-block;vertical-align:middle;margin-top:-.25em;position:relative;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat}.ui-widget-icon-block{left:50%;margin-left:-8px;display:block}.ui-widget-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ui-resizable{position:relative}.ui-resizable-handle{position:absolute;font-size:0.1px;display:block;-ms-touch-action:none;touch-action:none}.ui-resizable-disabled .ui-resizable-handle,.ui-resizable-autohide .ui-resizable-handle{display:none}.ui-resizable-n{cursor:n-resize;height:7px;width:100%;top:-5px;left:0}.ui-resizable-s{cursor:s-resize;height:7px;width:100%;bottom:-5px;left:0}.ui-resizable-e{cursor:e-resize;width:7px;right:-5px;top:0;height:100%}.ui-resizable-w{cursor:w-resize;width:7px;left:-5px;top:0;height:100%}.ui-resizable-se{cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.ui-resizable-sw{cursor:sw-resize;width:9px;height:9px;left:-5px;bottom:-5px}.ui-resizable-nw{cursor:nw-resize;width:9px;height:9px;left:-5px;top:-5px}.ui-resizable-ne{cursor:ne-resize;width:9px;height:9px;right:-5px;top:-5px}.ui-selectable{-ms-touch-action:none;touch-action:none}.ui-selectable-helper{position:absolute;z-index:100;border:1px dotted black}.ui-sortable-handle{-ms-touch-action:none;touch-action:none}.ui-accordion .ui-accordion-header{display:block;cursor:pointer;position:relative;margin:2px 0 0 0;padding:.5em .5em .5em .7em;font-size:100%}.ui-accordion .ui-accordion-content{padding:1em 2.2em;border-top:0;overflow:auto}.ui-autocomplete{position:absolute;top:0;left:0;cursor:default}.ui-menu{list-style:none;padding:0;margin:0;display:block;outline:0}.ui-menu .ui-menu{position:absolute}.ui-menu .ui-menu-item{margin:0;cursor:pointer;list-style-image:url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}.ui-menu .ui-menu-item-wrapper{position:relative;padding:3px 1em 3px .4em}.ui-menu .ui-menu-divider{margin:5px 0;height:0;font-size:0;line-height:0;border-width:1px 0 0 0}.ui-menu .ui-state-focus,.ui-menu .ui-state-active{margin:-1px}.ui-menu-icons{position:relative}.ui-menu-icons .ui-menu-item-wrapper{padding-left:2em}.ui-menu .ui-icon{position:absolute;top:0;bottom:0;left:.2em;margin:auto 0}.ui-menu .ui-menu-icon{left:auto;right:0}.ui-button{padding:.4em 1em;display:inline-block;position:relative;line-height:normal;margin-right:.1em;cursor:pointer;vertical-align:middle;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:visible}.ui-button,.ui-button:link,.ui-button:visited,.ui-button:hover,.ui-button:active{text-decoration:none}.ui-button-icon-only{width:2em;box-sizing:border-box;text-indent:-9999px;white-space:nowrap}input.ui-button.ui-button-icon-only{text-indent:0}.ui-button-icon-only .ui-icon{position:absolute;top:50%;left:50%;margin-top:-8px;margin-left:-8px}.ui-button.ui-icon-notext .ui-icon{padding:0;width:2.1em;height:2.1em;text-indent:-9999px;white-space:nowrap}input.ui-button.ui-icon-notext .ui-icon{width:auto;height:auto;text-indent:0;white-space:normal;padding:.4em 1em}input.ui-button::-moz-focus-inner,button.ui-button::-moz-focus-inner{border:0;padding:0}.ui-controlgroup{vertical-align:middle;display:inline-block}.ui-controlgroup > .ui-controlgroup-item{float:left;margin-left:0;margin-right:0}.ui-controlgroup > .ui-controlgroup-item:focus,.ui-controlgroup > .ui-controlgroup-item.ui-visual-focus{z-index:9999}.ui-controlgroup-vertical > .ui-controlgroup-item{display:block;float:none;width:100%;margin-top:0;margin-bottom:0;text-align:left}.ui-controlgroup-vertical .ui-controlgroup-item{box-sizing:border-box}.ui-controlgroup .ui-controlgroup-label{padding:.4em 1em}.ui-controlgroup .ui-controlgroup-label span{font-size:80%}.ui-controlgroup-horizontal .ui-controlgroup-label + .ui-controlgroup-item{border-left:none}.ui-controlgroup-vertical .ui-controlgroup-label + .ui-controlgroup-item{border-top:none}.ui-controlgroup-horizontal .ui-controlgroup-label.ui-widget-content{border-right:none}.ui-controlgroup-vertical .ui-controlgroup-label.ui-widget-content{border-bottom:none}.ui-controlgroup-vertical .ui-spinner-input{width:75%;width:calc( 100% - 2.4em )}.ui-controlgroup-vertical .ui-spinner .ui-spinner-up{border-top-style:solid}.ui-checkboxradio-label .ui-icon-background{box-shadow:inset 1px 1px 1px #ccc;border-radius:.12em;border:none}.ui-checkboxradio-radio-label .ui-icon-background{width:16px;height:16px;border-radius:1em;overflow:visible;border:none}.ui-checkboxradio-radio-label.ui-checkboxradio-checked .ui-icon,.ui-checkboxradio-radio-label.ui-checkboxradio-checked:hover .ui-icon{background-image:none;width:8px;height:8px;border-width:4px;border-style:solid}.ui-checkboxradio-disabled{pointer-events:none}.ui-datepicker{width:17em;padding:.2em .2em 0;display:none}.ui-datepicker .ui-datepicker-header{position:relative;padding:.2em 0}.ui-datepicker .ui-datepicker-prev,.ui-datepicker .ui-datepicker-next{position:absolute;top:2px;width:1.8em;height:1.8em}.ui-datepicker .ui-datepicker-prev-hover,.ui-datepicker .ui-datepicker-next-hover{top:1px}.ui-datepicker .ui-datepicker-prev{left:2px}.ui-datepicker .ui-datepicker-next{right:2px}.ui-datepicker .ui-datepicker-prev-hover{left:1px}.ui-datepicker .ui-datepicker-next-hover{right:1px}.ui-datepicker .ui-datepicker-prev span,.ui-datepicker .ui-datepicker-next span{display:block;position:absolute;left:50%;margin-left:-8px;top:50%;margin-top:-8px}.ui-datepicker .ui-datepicker-title{margin:0 2.3em;line-height:1.8em;text-align:center}.ui-datepicker .ui-datepicker-title select{font-size:1em;margin:1px 0}.ui-datepicker select.ui-datepicker-month,.ui-datepicker select.ui-datepicker-year{width:45%}.ui-datepicker table{width:100%;font-size:.9em;border-collapse:collapse;margin:0 0 .4em}.ui-datepicker th{padding:.7em .3em;text-align:center;font-weight:bold;border:0}.ui-datepicker td{border:0;padding:1px}.ui-datepicker td span,.ui-datepicker td a{display:block;padding:.2em;text-align:right;text-decoration:none}.ui-datepicker .ui-datepicker-buttonpane{background-image:none;margin:.7em 0 0 0;padding:0 .2em;border-left:0;border-right:0;border-bottom:0}.ui-datepicker .ui-datepicker-buttonpane button{float:right;margin:.5em .2em .4em;cursor:pointer;padding:.2em .6em .3em .6em;width:auto;overflow:visible}.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current{float:left}.ui-datepicker.ui-datepicker-multi{width:auto}.ui-datepicker-multi .ui-datepicker-group{float:left}.ui-datepicker-multi .ui-datepicker-group table{width:95%;margin:0 auto .4em}.ui-datepicker-multi-2 .ui-datepicker-group{width:50%}.ui-datepicker-multi-3 .ui-datepicker-group{width:33.3%}.ui-datepicker-multi-4 .ui-datepicker-group{width:25%}.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header{border-left-width:0}.ui-datepicker-multi .ui-datepicker-buttonpane{clear:left}.ui-datepicker-row-break{clear:both;width:100%;font-size:0}.ui-datepicker-rtl{direction:rtl}.ui-datepicker-rtl .ui-datepicker-prev{right:2px;left:auto}.ui-datepicker-rtl .ui-datepicker-next{left:2px;right:auto}.ui-datepicker-rtl .ui-datepicker-prev:hover{right:1px;left:auto}.ui-datepicker-rtl .ui-datepicker-next:hover{left:1px;right:auto}.ui-datepicker-rtl .ui-datepicker-buttonpane{clear:right}.ui-datepicker-rtl .ui-datepicker-buttonpane button{float:left}.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,.ui-datepicker-rtl .ui-datepicker-group{float:right}.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header{border-right-width:0;border-left-width:1px}.ui-datepicker .ui-icon{display:block;text-indent:-99999px;overflow:hidden;background-repeat:no-repeat;left:.5em;top:.3em}.ui-dialog{position:absolute;top:0;left:0;padding:.2em;outline:0}.ui-dialog .ui-dialog-titlebar{padding:.4em 1em;position:relative}.ui-dialog .ui-dialog-title{float:left;margin:.1em 0;white-space:nowrap;width:90%;overflow:hidden;text-overflow:ellipsis}.ui-dialog .ui-dialog-titlebar-close{position:absolute;right:.3em;top:50%;width:20px;margin:-10px 0 0 0;padding:1px;height:20px}.ui-dialog .ui-dialog-content{position:relative;border:0;padding:.5em 1em;background:none;overflow:auto}.ui-dialog .ui-dialog-buttonpane{text-align:left;border-width:1px 0 0 0;background-image:none;margin-top:.5em;padding:.3em 1em .5em .4em}.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset{float:right}.ui-dialog .ui-dialog-buttonpane button{margin:.5em .4em .5em 0;cursor:pointer}.ui-dialog .ui-resizable-n{height:2px;top:0}.ui-dialog .ui-resizable-e{width:2px;right:0}.ui-dialog .ui-resizable-s{height:2px;bottom:0}.ui-dialog .ui-resizable-w{width:2px;left:0}.ui-dialog .ui-resizable-se,.ui-dialog .ui-resizable-sw,.ui-dialog .ui-resizable-ne,.ui-dialog .ui-resizable-nw{width:7px;height:7px}.ui-dialog .ui-resizable-se{right:0;bottom:0}.ui-dialog .ui-resizable-sw{left:0;bottom:0}.ui-dialog .ui-resizable-ne{right:0;top:0}.ui-dialog .ui-resizable-nw{left:0;top:0}.ui-draggable .ui-dialog-titlebar{cursor:move}.ui-progressbar{height:2em;text-align:left;overflow:hidden}.ui-progressbar .ui-progressbar-value{margin:-1px;height:100%}.ui-progressbar .ui-progressbar-overlay{background:url("data:image/gif;base64,R0lGODlhKAAoAIABAAAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQABACwAAAAAKAAoAAACkYwNqXrdC52DS06a7MFZI+4FHBCKoDeWKXqymPqGqxvJrXZbMx7Ttc+w9XgU2FB3lOyQRWET2IFGiU9m1frDVpxZZc6bfHwv4c1YXP6k1Vdy292Fb6UkuvFtXpvWSzA+HycXJHUXiGYIiMg2R6W459gnWGfHNdjIqDWVqemH2ekpObkpOlppWUqZiqr6edqqWQAAIfkECQEAAQAsAAAAACgAKAAAApSMgZnGfaqcg1E2uuzDmmHUBR8Qil95hiPKqWn3aqtLsS18y7G1SzNeowWBENtQd+T1JktP05nzPTdJZlR6vUxNWWjV+vUWhWNkWFwxl9VpZRedYcflIOLafaa28XdsH/ynlcc1uPVDZxQIR0K25+cICCmoqCe5mGhZOfeYSUh5yJcJyrkZWWpaR8doJ2o4NYq62lAAACH5BAkBAAEALAAAAAAoACgAAAKVDI4Yy22ZnINRNqosw0Bv7i1gyHUkFj7oSaWlu3ovC8GxNso5fluz3qLVhBVeT/Lz7ZTHyxL5dDalQWPVOsQWtRnuwXaFTj9jVVh8pma9JjZ4zYSj5ZOyma7uuolffh+IR5aW97cHuBUXKGKXlKjn+DiHWMcYJah4N0lYCMlJOXipGRr5qdgoSTrqWSq6WFl2ypoaUAAAIfkECQEAAQAsAAAAACgAKAAAApaEb6HLgd/iO7FNWtcFWe+ufODGjRfoiJ2akShbueb0wtI50zm02pbvwfWEMWBQ1zKGlLIhskiEPm9R6vRXxV4ZzWT2yHOGpWMyorblKlNp8HmHEb/lCXjcW7bmtXP8Xt229OVWR1fod2eWqNfHuMjXCPkIGNileOiImVmCOEmoSfn3yXlJWmoHGhqp6ilYuWYpmTqKUgAAIfkECQEAAQAsAAAAACgAKAAAApiEH6kb58biQ3FNWtMFWW3eNVcojuFGfqnZqSebuS06w5V80/X02pKe8zFwP6EFWOT1lDFk8rGERh1TTNOocQ61Hm4Xm2VexUHpzjymViHrFbiELsefVrn6XKfnt2Q9G/+Xdie499XHd2g4h7ioOGhXGJboGAnXSBnoBwKYyfioubZJ2Hn0RuRZaflZOil56Zp6iioKSXpUAAAh+QQJAQABACwAAAAAKAAoAAACkoQRqRvnxuI7kU1a1UU5bd5tnSeOZXhmn5lWK3qNTWvRdQxP8qvaC+/yaYQzXO7BMvaUEmJRd3TsiMAgswmNYrSgZdYrTX6tSHGZO73ezuAw2uxuQ+BbeZfMxsexY35+/Qe4J1inV0g4x3WHuMhIl2jXOKT2Q+VU5fgoSUI52VfZyfkJGkha6jmY+aaYdirq+lQAACH5BAkBAAEALAAAAAAoACgAAAKWBIKpYe0L3YNKToqswUlvznigd4wiR4KhZrKt9Upqip61i9E3vMvxRdHlbEFiEXfk9YARYxOZZD6VQ2pUunBmtRXo1Lf8hMVVcNl8JafV38aM2/Fu5V16Bn63r6xt97j09+MXSFi4BniGFae3hzbH9+hYBzkpuUh5aZmHuanZOZgIuvbGiNeomCnaxxap2upaCZsq+1kAACH5BAkBAAEALAAAAAAoACgAAAKXjI8By5zf4kOxTVrXNVlv1X0d8IGZGKLnNpYtm8Lr9cqVeuOSvfOW79D9aDHizNhDJidFZhNydEahOaDH6nomtJjp1tutKoNWkvA6JqfRVLHU/QUfau9l2x7G54d1fl995xcIGAdXqMfBNadoYrhH+Mg2KBlpVpbluCiXmMnZ2Sh4GBqJ+ckIOqqJ6LmKSllZmsoq6wpQAAAh+QQJAQABACwAAAAAKAAoAAAClYx/oLvoxuJDkU1a1YUZbJ59nSd2ZXhWqbRa2/gF8Gu2DY3iqs7yrq+xBYEkYvFSM8aSSObE+ZgRl1BHFZNr7pRCavZ5BW2142hY3AN/zWtsmf12p9XxxFl2lpLn1rseztfXZjdIWIf2s5dItwjYKBgo9yg5pHgzJXTEeGlZuenpyPmpGQoKOWkYmSpaSnqKileI2FAAACH5BAkBAAEALAAAAAAoACgAAAKVjB+gu+jG4kORTVrVhRlsnn2dJ3ZleFaptFrb+CXmO9OozeL5VfP99HvAWhpiUdcwkpBH3825AwYdU8xTqlLGhtCosArKMpvfa1mMRae9VvWZfeB2XfPkeLmm18lUcBj+p5dnN8jXZ3YIGEhYuOUn45aoCDkp16hl5IjYJvjWKcnoGQpqyPlpOhr3aElaqrq56Bq7VAAAOw==");height:100%;filter:alpha(opacity=25);opacity:0.25}.ui-progressbar-indeterminate .ui-progressbar-value{background-image:none}.ui-selectmenu-menu{padding:0;margin:0;position:absolute;top:0;left:0;display:none}.ui-selectmenu-menu .ui-menu{overflow:auto;overflow-x:hidden;padding-bottom:1px}.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup{font-size:1em;font-weight:bold;line-height:1.5;padding:2px 0.4em;margin:0.5em 0 0 0;height:auto;border:0}.ui-selectmenu-open{display:block}.ui-selectmenu-text{display:block;margin-right:20px;overflow:hidden;text-overflow:ellipsis}.ui-selectmenu-button.ui-button{text-align:left;white-space:nowrap;width:14em}.ui-selectmenu-icon.ui-icon{float:right;margin-top:0}.ui-slider{position:relative;text-align:left}.ui-slider .ui-slider-handle{position:absolute;z-index:2;width:1.2em;height:1.2em;cursor:default;-ms-touch-action:none;touch-action:none}.ui-slider .ui-slider-range{position:absolute;z-index:1;font-size:.7em;display:block;border:0;background-position:0 0}.ui-slider.ui-state-disabled .ui-slider-handle,.ui-slider.ui-state-disabled .ui-slider-range{filter:inherit}.ui-slider-horizontal{height:.8em}.ui-slider-horizontal .ui-slider-handle{top:-.3em;margin-left:-.6em}.ui-slider-horizontal .ui-slider-range{top:0;height:100%}.ui-slider-horizontal .ui-slider-range-min{left:0}.ui-slider-horizontal .ui-slider-range-max{right:0}.ui-slider-vertical{width:.8em;height:100px}.ui-slider-vertical .ui-slider-handle{left:-.3em;margin-left:0;margin-bottom:-.6em}.ui-slider-vertical .ui-slider-range{left:0;width:100%}.ui-slider-vertical .ui-slider-range-min{bottom:0}.ui-slider-vertical .ui-slider-range-max{top:0}.ui-spinner{position:relative;display:inline-block;overflow:hidden;padding:0;vertical-align:middle}.ui-spinner-input{border:none;background:none;color:inherit;padding:.222em 0;margin:.2em 0;vertical-align:middle;margin-left:.4em;margin-right:2em}.ui-spinner-button{width:1.6em;height:50%;font-size:.5em;padding:0;margin:0;text-align:center;position:absolute;cursor:default;display:block;overflow:hidden;right:0}.ui-spinner a.ui-spinner-button{border-top-style:none;border-bottom-style:none;border-right-style:none}.ui-spinner-up{top:0}.ui-spinner-down{bottom:0}.ui-tabs{position:relative;padding:.2em}.ui-tabs .ui-tabs-nav{margin:0;padding:.2em .2em 0}.ui-tabs .ui-tabs-nav li{list-style:none;float:left;position:relative;top:0;margin:1px .2em 0 0;border-bottom-width:0;padding:0;white-space:nowrap}.ui-tabs .ui-tabs-nav .ui-tabs-anchor{float:left;padding:.5em 1em;text-decoration:none}.ui-tabs .ui-tabs-nav li.ui-tabs-active{margin-bottom:-1px;padding-bottom:1px}.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor{cursor:text}.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor{cursor:pointer}.ui-tabs .ui-tabs-panel{display:block;border-width:0;padding:1em 1.4em;background:none}.ui-tooltip{padding:8px;position:absolute;z-index:9999;max-width:300px}body .ui-tooltip{border-width:2px}',
        dataTablesCSS = 'table.dataTable{width:100%;margin:0 auto;clear:both;border-collapse:separate;border-spacing:0}table.dataTable thead th,table.dataTable tfoot th{font-weight:bold}table.dataTable thead th,table.dataTable thead td{padding:10px 18px;border-bottom:1px solid #111}table.dataTable thead th:active,table.dataTable thead td:active{outline:none}table.dataTable tfoot th,table.dataTable tfoot td{padding:10px 18px 6px 18px;border-top:1px solid #111}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;*cursor:hand}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{background-repeat:no-repeat;background-position:center right}table.dataTable thead .sorting{background-image:url("../images/sort_both.png")}table.dataTable thead .sorting_asc{background-image:url("../images/sort_asc.png")}table.dataTable thead .sorting_desc{background-image:url("../images/sort_desc.png")}table.dataTable thead .sorting_asc_disabled{background-image:url("../images/sort_asc_disabled.png")}table.dataTable thead .sorting_desc_disabled{background-image:url("../images/sort_desc_disabled.png")}table.dataTable tbody tr{background-color:#ffffff}table.dataTable tbody tr.selected{background-color:#B0BED9}table.dataTable tbody th,table.dataTable tbody td{padding:8px 10px}table.dataTable.row-border tbody th,table.dataTable.row-border tbody td,table.dataTable.display tbody th,table.dataTable.display tbody td{border-top:1px solid #ddd}table.dataTable.row-border tbody tr:first-child th,table.dataTable.row-border tbody tr:first-child td,table.dataTable.display tbody tr:first-child th,table.dataTable.display tbody tr:first-child td{border-top:none}table.dataTable.cell-border tbody th,table.dataTable.cell-border tbody td{border-top:1px solid #ddd;border-right:1px solid #ddd}table.dataTable.cell-border tbody tr th:first-child,table.dataTable.cell-border tbody tr td:first-child{border-left:1px solid #ddd}table.dataTable.cell-border tbody tr:first-child th,table.dataTable.cell-border tbody tr:first-child td{border-top:none}table.dataTable.stripe tbody tr.odd,table.dataTable.display tbody tr.odd{background-color:#f9f9f9}table.dataTable.stripe tbody tr.odd.selected,table.dataTable.display tbody tr.odd.selected{background-color:#acbad4}table.dataTable.hover tbody tr:hover,table.dataTable.display tbody tr:hover{background-color:#f6f6f6}table.dataTable.hover tbody tr:hover.selected,table.dataTable.display tbody tr:hover.selected{background-color:#aab7d1}table.dataTable.order-column tbody tr>.sorting_1,table.dataTable.order-column tbody tr>.sorting_2,table.dataTable.order-column tbody tr>.sorting_3,table.dataTable.display tbody tr>.sorting_1,table.dataTable.display tbody tr>.sorting_2,table.dataTable.display tbody tr>.sorting_3{background-color:#fafafa}table.dataTable.order-column tbody tr.selected>.sorting_1,table.dataTable.order-column tbody tr.selected>.sorting_2,table.dataTable.order-column tbody tr.selected>.sorting_3,table.dataTable.display tbody tr.selected>.sorting_1,table.dataTable.display tbody tr.selected>.sorting_2,table.dataTable.display tbody tr.selected>.sorting_3{background-color:#acbad5}table.dataTable.display tbody tr.odd>.sorting_1,table.dataTable.order-column.stripe tbody tr.odd>.sorting_1{background-color:#f1f1f1}table.dataTable.display tbody tr.odd>.sorting_2,table.dataTable.order-column.stripe tbody tr.odd>.sorting_2{background-color:#f3f3f3}table.dataTable.display tbody tr.odd>.sorting_3,table.dataTable.order-column.stripe tbody tr.odd>.sorting_3{background-color:whitesmoke}table.dataTable.display tbody tr.odd.selected>.sorting_1,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_1{background-color:#a6b4cd}table.dataTable.display tbody tr.odd.selected>.sorting_2,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_2{background-color:#a8b5cf}table.dataTable.display tbody tr.odd.selected>.sorting_3,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_3{background-color:#a9b7d1}table.dataTable.display tbody tr.even>.sorting_1,table.dataTable.order-column.stripe tbody tr.even>.sorting_1{background-color:#fafafa}table.dataTable.display tbody tr.even>.sorting_2,table.dataTable.order-column.stripe tbody tr.even>.sorting_2{background-color:#fcfcfc}table.dataTable.display tbody tr.even>.sorting_3,table.dataTable.order-column.stripe tbody tr.even>.sorting_3{background-color:#fefefe}table.dataTable.display tbody tr.even.selected>.sorting_1,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_1{background-color:#acbad5}table.dataTable.display tbody tr.even.selected>.sorting_2,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_2{background-color:#aebcd6}table.dataTable.display tbody tr.even.selected>.sorting_3,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_3{background-color:#afbdd8}table.dataTable.display tbody tr:hover>.sorting_1,table.dataTable.order-column.hover tbody tr:hover>.sorting_1{background-color:#eaeaea}table.dataTable.display tbody tr:hover>.sorting_2,table.dataTable.order-column.hover tbody tr:hover>.sorting_2{background-color:#ececec}table.dataTable.display tbody tr:hover>.sorting_3,table.dataTable.order-column.hover tbody tr:hover>.sorting_3{background-color:#efefef}table.dataTable.display tbody tr:hover.selected>.sorting_1,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_1{background-color:#a2aec7}table.dataTable.display tbody tr:hover.selected>.sorting_2,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_2{background-color:#a3b0c9}table.dataTable.display tbody tr:hover.selected>.sorting_3,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_3{background-color:#a5b2cb}table.dataTable.no-footer{border-bottom:1px solid #111}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}table.dataTable.compact thead th,table.dataTable.compact thead td{padding:4px 17px 4px 4px}table.dataTable.compact tfoot th,table.dataTable.compact tfoot td{padding:4px}table.dataTable.compact tbody th,table.dataTable.compact tbody td{padding:4px}table.dataTable th.dt-left,table.dataTable td.dt-left{text-align:left}table.dataTable th.dt-center,table.dataTable td.dt-center,table.dataTable td.dataTables_empty{text-align:center}table.dataTable th.dt-right,table.dataTable td.dt-right{text-align:right}table.dataTable th.dt-justify,table.dataTable td.dt-justify{text-align:justify}table.dataTable th.dt-nowrap,table.dataTable td.dt-nowrap{white-space:nowrap}table.dataTable thead th.dt-head-left,table.dataTable thead td.dt-head-left,table.dataTable tfoot th.dt-head-left,table.dataTable tfoot td.dt-head-left{text-align:left}table.dataTable thead th.dt-head-center,table.dataTable thead td.dt-head-center,table.dataTable tfoot th.dt-head-center,table.dataTable tfoot td.dt-head-center{text-align:center}table.dataTable thead th.dt-head-right,table.dataTable thead td.dt-head-right,table.dataTable tfoot th.dt-head-right,table.dataTable tfoot td.dt-head-right{text-align:right}table.dataTable thead th.dt-head-justify,table.dataTable thead td.dt-head-justify,table.dataTable tfoot th.dt-head-justify,table.dataTable tfoot td.dt-head-justify{text-align:justify}table.dataTable thead th.dt-head-nowrap,table.dataTable thead td.dt-head-nowrap,table.dataTable tfoot th.dt-head-nowrap,table.dataTable tfoot td.dt-head-nowrap{white-space:nowrap}table.dataTable tbody th.dt-body-left,table.dataTable tbody td.dt-body-left{text-align:left}table.dataTable tbody th.dt-body-center,table.dataTable tbody td.dt-body-center{text-align:center}table.dataTable tbody th.dt-body-right,table.dataTable tbody td.dt-body-right{text-align:right}table.dataTable tbody th.dt-body-justify,table.dataTable tbody td.dt-body-justify{text-align:justify}table.dataTable tbody th.dt-body-nowrap,table.dataTable tbody td.dt-body-nowrap{white-space:nowrap}table.dataTable,table.dataTable th,table.dataTable td{-webkit-box-sizing:content-box;box-sizing:content-box}.dataTables_wrapper{position:relative;clear:both;*zoom:1;zoom:1}.dataTables_wrapper .dataTables_length{float:left}.dataTables_wrapper .dataTables_filter{float:right;text-align:right}.dataTables_wrapper .dataTables_filter input{margin-left:0.5em}.dataTables_wrapper .dataTables_info{clear:both;float:left;padding-top:0.755em}.dataTables_wrapper .dataTables_paginate{float:right;text-align:right;padding-top:0.25em}.dataTables_wrapper .dataTables_paginate .paginate_button{box-sizing:border-box;display:inline-block;min-width:1.5em;padding:0.5em 1em;margin-left:2px;text-align:center;text-decoration:none !important;cursor:pointer;*cursor:hand;color:#333 !important;border:1px solid transparent;border-radius:2px}.dataTables_wrapper .dataTables_paginate .paginate_button.current,.dataTables_wrapper .dataTables_paginate .paginate_button.current:hover{color:#333 !important;border:1px solid #979797;background-color:white;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #fff), color-stop(100%, #dcdcdc));background:-webkit-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-moz-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-ms-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-o-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)}.dataTables_wrapper .dataTables_paginate .paginate_button.disabled,.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active{cursor:default;color:#666 !important;border:1px solid transparent;background:transparent;box-shadow:none}.dataTables_wrapper .dataTables_paginate .paginate_button:hover{color:white !important;border:1px solid #111;background-color:#585858;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111));background:-webkit-linear-gradient(top, #585858 0%, #111 100%);background:-moz-linear-gradient(top, #585858 0%, #111 100%);background:-ms-linear-gradient(top, #585858 0%, #111 100%);background:-o-linear-gradient(top, #585858 0%, #111 100%);background:linear-gradient(to bottom, #585858 0%, #111 100%)}.dataTables_wrapper .dataTables_paginate .paginate_button:active{outline:none;background-color:#2b2b2b;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));background:-webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);box-shadow:inset 0 0 3px #111}.dataTables_wrapper .dataTables_paginate .ellipsis{padding:0 1em}.dataTables_wrapper .dataTables_processing{position:absolute;top:50%;left:50%;width:100%;height:40px;margin-left:-50%;margin-top:-25px;padding-top:20px;text-align:center;font-size:1.2em;background-color:white;background:-webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,255,255,0)), color-stop(25%, rgba(255,255,255,0.9)), color-stop(75%, rgba(255,255,255,0.9)), color-stop(100%, rgba(255,255,255,0)));background:-webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-ms-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%)}.dataTables_wrapper .dataTables_length,.dataTables_wrapper .dataTables_filter,.dataTables_wrapper .dataTables_info,.dataTables_wrapper .dataTables_processing,.dataTables_wrapper .dataTables_paginate{color:#333}.dataTables_wrapper .dataTables_scroll{clear:both}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody{*margin-top:-1px;-webkit-overflow-scrolling:touch}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>th,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>td,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>th,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td{vertical-align:middle}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>th>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>td>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>th>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td>div.dataTables_sizing{height:0;overflow:hidden;margin:0 !important;padding:0 !important}.dataTables_wrapper.no-footer .dataTables_scrollBody{border-bottom:1px solid #111}.dataTables_wrapper.no-footer div.dataTables_scrollHead>table,.dataTables_wrapper.no-footer div.dataTables_scrollBody>table{border-bottom:none}.dataTables_wrapper:after{visibility:hidden;display:block;content:"";clear:both;height:0}@media screen and (max-width: 767px){.dataTables_wrapper .dataTables_info,.dataTables_wrapper .dataTables_paginate{float:none;text-align:center}.dataTables_wrapper .dataTables_paginate{margin-top:0.5em}}@media screen and (max-width: 640px){.dataTables_wrapper .dataTables_length,.dataTables_wrapper .dataTables_filter{float:none;text-align:center}.dataTables_wrapper .dataTables_filter{margin-top:0.5em}}'
        + 'table.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important}table.dataTable td,table.dataTable th{-webkit-box-sizing:content-box;box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.row.uk-grid.dt-merge-grid{margin-top:5px}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th,table.dataTable thead>tr>td{position:relative}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th.sorting:after,table.dataTable thead>tr>th.sorting_asc:after,table.dataTable thead>tr>th.sorting_desc:after,table.dataTable thead>tr>td.sorting:after,table.dataTable thead>tr>td.sorting_asc:after,table.dataTable thead>tr>td.sorting_desc:after{position:absolute;top:7px;right:8px;display:block;font-family:"FontAwesome"}table.dataTable thead>tr>th.sorting:after,table.dataTable thead>tr>td.sorting:after{content:"\f0dc";color:#ddd;font-size:0.8em;padding-top:0.12em}table.dataTable thead>tr>th.sorting_asc:after,table.dataTable thead>tr>td.sorting_asc:after{content:"\f0de"}table.dataTable thead>tr>th.sorting_desc:after,table.dataTable thead>tr>td.sorting_desc:after{content:"\f0dd"}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.uk-table-condensed>thead>tr>th{padding-right:20px}table.dataTable.uk-table-condensed .sorting:after,table.dataTable.uk-table-condensed .sorting_asc:after,table.dataTable.uk-table-condensed .sorting_desc:after{top:6px;right:6px}'
        + 'table.dataTable.table{margin:0}table.dataTable.table thead th,table.dataTable.table thead td{position:relative}table.dataTable.table thead th.sorting,table.dataTable.table thead th.sorting_asc,table.dataTable.table thead th.sorting_desc,table.dataTable.table thead td.sorting,table.dataTable.table thead td.sorting_asc,table.dataTable.table thead td.sorting_desc{padding-right:20px}table.dataTable.table thead th.sorting:after,table.dataTable.table thead th.sorting_asc:after,table.dataTable.table thead th.sorting_desc:after,table.dataTable.table thead td.sorting:after,table.dataTable.table thead td.sorting_asc:after,table.dataTable.table thead td.sorting_desc:after{position:absolute;top:12px;right:8px;display:block;font-family:Icons}table.dataTable.table thead th.sorting:after,table.dataTable.table thead td.sorting:after{content:"\f0dc";color:#ddd;font-size:0.8em}table.dataTable.table thead th.sorting_asc:after,table.dataTable.table thead td.sorting_asc:after{content:"\f0de"}table.dataTable.table thead th.sorting_desc:after,table.dataTable.table thead td.sorting_desc:after{content:"\f0dd"}table.dataTable.table td,table.dataTable.table th{-webkit-box-sizing:content-box;box-sizing:content-box}table.dataTable.table td.dataTables_empty,table.dataTable.table th.dataTables_empty{text-align:center}table.dataTable.table.nowrap th,table.dataTable.table.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{vertical-align:middle;min-height:2.7142em}div.dataTables_wrapper div.dataTables_length .ui.selection.dropdown{min-width:0}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em}div.dataTables_wrapper div.dataTables_info{padding-top:13px;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;text-align:center}div.dataTables_wrapper div.row.dt-table{padding:0}div.dataTables_wrapper div.dataTables_scrollHead table.dataTable{border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom:none}div.dataTables_wrapper div.dataTables_scrollBody thead .sorting:after,div.dataTables_wrapper div.dataTables_scrollBody thead .sorting_asc:after,div.dataTables_wrapper div.dataTables_scrollBody thead .sorting_desc:after{display:none}div.dataTables_wrapper div.dataTables_scrollBody table.dataTable{border-radius:0;border-top:none;border-bottom-width:0}div.dataTables_wrapper div.dataTables_scrollBody table.dataTable.no-footer{border-bottom-width:1px}div.dataTables_wrapper div.dataTables_scrollFoot table.dataTable{border-top-right-radius:0;border-top-left-radius:0;border-top:none}'
        + 'div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em}div.dataTables_wrapper div.dataTables_info{padding-top:10px;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;text-align:center}div.dataTables_wrapper div.dataTables_paginate{text-align:right}div.dataTables_wrapper div.mdl-grid.dt-table{padding-top:0;padding-bottom:0}div.dataTables_wrapper div.mdl-grid.dt-table>div.mdl-cell{margin-top:0;margin-bottom:0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:before,table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:11px;display:block;opacity:0.3;font-size:1.3em}table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:before{right:1em;content:"\2191"}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{right:0.5em;content:"\2193"}table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:after{opacity:1}table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{opacity:0}'
        + 'table.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}table.dataTable td,table.dataTable th{-webkit-box-sizing:content-box;box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:0.85em;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap;justify-content:flex-end}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:before,table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:0.9em;display:block;opacity:0.3}table.dataTable thead .sorting:before,table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:before,table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:before{right:1em;content:"\2191"}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{right:0.5em;content:"\2193"}table.dataTable thead .sorting_asc:before,table.dataTable thead .sorting_desc:after{opacity:1}table.dataTable thead .sorting_asc_disabled:before,table.dataTable thead .sorting_desc_disabled:after{opacity:0}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.table-condensed>thead>tr>th{padding-right:20px}table.dataTable.table-condensed .sorting:after,table.dataTable.table-condensed .sorting_asc:after,table.dataTable.table-condensed .sorting_desc:after{top:6px;right:6px}table.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}table.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}div.dataTables_scrollHead table.table-bordered{border-bottom-width:0}div.table-responsive>div.dataTables_wrapper>div.row{margin:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^="col-"]:first-child{padding-left:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^="col-"]:last-child{padding-right:0}'
        + 'table.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}table.dataTable td,table.dataTable th{-webkit-box-sizing:content-box;box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:8px;right:8px;display:block;font-family:"Glyphicons Halflings";opacity:0.5}table.dataTable thead .sorting:after{opacity:0.2;content:"\e150"}table.dataTable thead .sorting_asc:after{content:"\e155"}table.dataTable thead .sorting_desc:after{content:"\e156"}table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{color:#eee}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody>table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody>table>thead .sorting:after,div.dataTables_scrollBody>table>thead .sorting_asc:after,div.dataTables_scrollBody>table>thead .sorting_desc:after{display:none}div.dataTables_scrollBody>table>tbody>tr:first-child>th,div.dataTables_scrollBody>table>tbody>tr:first-child>td{border-top:none}div.dataTables_scrollFoot>table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.table-condensed>thead>tr>th{padding-right:20px}table.dataTable.table-condensed .sorting:after,table.dataTable.table-condensed .sorting_asc:after,table.dataTable.table-condensed .sorting_desc:after{top:6px;right:6px}table.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}table.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}div.dataTables_scrollHead table.table-bordered{border-bottom-width:0}div.table-responsive>div.dataTables_wrapper>div.row{margin:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^="col-"]:first-child{padding-left:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^="col-"]:last-child{padding-right:0}'
        + 'table.dataTable{clear:both;margin:0.5em 0 !important;max-width:none !important;width:100%}table.dataTable td,table.dataTable th{-webkit-box-sizing:content-box;box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper{position:relative}div.dataTables_wrapper div.dataTables_length label{float:left;text-align:left;margin-bottom:0}div.dataTables_wrapper div.dataTables_length select{width:75px;margin-bottom:0}div.dataTables_wrapper div.dataTables_filter label{float:right;margin-bottom:0}div.dataTables_wrapper div.dataTables_filter input{display:inline-block !important;width:auto !important;margin-bottom:0;margin-left:0.5em}div.dataTables_wrapper div.dataTables_info{padding-top:2px}div.dataTables_wrapper div.dataTables_paginate{float:right;margin:0}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1rem 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:1.5rem}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{background-repeat:no-repeat;background-position:center right}table.dataTable thead .sorting{background-image:url("../images/sort_both.png")}table.dataTable thead .sorting_asc{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADi4uLx8fHm5ubv7+/6+vr19fX39/fr6+vT09PIyMjFxcXOzs4rKysTExNTU1MjIyMKCgqNjY2/v78aGhqrq6sdHR0vLy9ycnJ+fn5kZGTc3NwICAhaWlqQkJA7OzuwsLBLS0uXl5d7e3ufn584ODh2O61gAAADm0lEQVR4nO3dC1IaQRSF4RlAUGIE0SAIKqjJ/peYNlVWfEC/7rOp8y/gMp93AGdU7DqEEEIIIYQQQgghhBBCCCGEEEIIIYQQQggh5LPhfr3qQ1fr/dD6WCQabPoPPW6tj4e91/5Lm3PrQ2Lt4vorMDS1PirGBgd8oVvr42LrCPB0iEeBp0KMAE+DGAWeAjEBbJ+YBLZOzAC2TcwCtkzMBLZLzAa2SiwAtkksArZILAS2RywGtkasALZFrAK2RKwEtkOsBrZCJADbIJKAfX9pffzJiED/WyQDvW+RAeh7iyxAz1tkAvolsgG9EhmBPomsQI9EZmDf/7AWfYkd6G2LAkBfRBGgJ6IQ0A9RDOiFKAj0QRQFenjTEAbaE8WB1kQFoC1RBWhJVALaEdWAVkRFoA1RFWhBVAb2/c9TB2pv0QCou0UToOYWjYB6WzQDam3REKizRVOgBpEKnF05J5I3OBpSJ8gS6cCuc03kAHbdmV8iD9DxFrmAbol8wEBcOCRyAl0SeYEOidxAd0R+IAOR8+8XJYBdN/GzRRmgoy1KAd1sUQ4YtjgjzubYoiQwbJFKpG9RFshApG5RGmhOJAMv0o9hStQAmhJ1gIZELaAZUQ/YdecWRE2gyRZ1gQZb1AaGLf5SJeoDlYkWQFWiDVCRODIChpcbHeLEDMiwxazH/mMHpG/xLuMxflsC6Vu8SX8RbYH0LSYP4MUYGIh3pCO4T81/sAaSiYnpW9LwMw4glZi4N7V0ACQSX+Kz7z0AA/HQ5yxmtomP3qQnKABJW3yOT577AHbduJq4iw9+dAIknKgJ4bpu6gM7sJ44j499qpsqAKwmvsan3voBhudiFXEZH1pz6SRxihKIg8TQihdTMWDVibpKzbwsnbgQBNZscZ+cuSucKAos3+IiPbLsNtRC/NPVC7eY85vgRd98K3x8fNEWk1eH/8p/T5Tf4FsFW3zMHHnjChiIub8bnvh25kN5xJnafzjIJOYD84h6wExiCTCHqAnMIpYB00RdYAaxFJgiar3I/C9BLAfGibMJuyBZlFgDjBEXBsBAXDEDjxMtNvjWUWIt8BjRCniUWA88/FOMKzNgIB668lmTRn6/XKTNI/f9lnX6gjDe+POZujP/Bz/b508H9MpwRp0v32+irm7MfW8Nnt7P1fmS7Rkz3E6nozHXNHrj0XS6Fb67gBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgihg/0F2NpBKUDJ3a8AAAAASUVORK5CYII=")}table.dataTable thead .sorting_desc{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAD39/dUVFTBwcEXFxfT09MUFBTo6OhVVVXY2NipqanGxsb7+/tHR0dtbW06OjolJSXu7u5OTk7k5OR8fHynp6ehoaEdHR2wsLCXl5cyMjK2trZ0dHSLi4tcXFwqKiqKsqgLAAADdklEQVR4nO3da3LaMBSGYURCQrmHBAotKdn/Kssf2lKwJZ27PN+7gIOeQUY4TGA0QgghhBBCCCGEEEIIIYQQQgghhBBCCCGEWmu6OO6Pp5n3Mv42e74saPEhNO1ll66t5kIzWR3f/yxoveCPm23STT/4I3ntb9fzxTXu0v8dpPYGqe3PuwWtOfPG9/MuCewMarNH65lsyfPGj+ZdehZcc1UvHQuaEueNXzsGehG7gFRiN9CJ2A2kEceTnoEexD4ghbg89A60J/YD64k5oDkxB6wlLt+yA22JeWAl8atgoCWxBFhFLAIaEsuAFcSH72QciaXAYuImP8mUWA5MaVky8LNioAWxBphWBQMXNQMNiFXAlAruYOsGqhMrgQX79FQ7UZdYDczfole8zBgQ64EpZUZuCSP1iBRgyvzBrH6TKhJJwLTvH/qLNFSHSAOmz/6pa9pUDSIRmN77x34jjpUnUoFpoySUJpKBOSF1l0oT6cDcLiW+0kgTGcDcKw3ttJAmcoDpe//sKWe2FJEFzJ345Xe/ekQeMPeubXTkjRcgMoH5D8d48/lEJrDgLr/yDliayAWWfIZ7/5GhIZELfCp6lCc/Ihd4KHwcNyIXOBmXPpIT0Q7IeQPOIFoCXYi2QIeNag00J9oDjYkeQFOiD9CQyAW+EoFmRK9n0IzoCTQh+gINjn5voPqz6A9UJkYAqhJjABWJfuegETEOUIkYCahCjHINqhGjAcWP/nhA4WcxIlCUGBMoSIwKFCPGOiYUiJGBIsTYQD5x8fCfsyrSuwaliOGBzkQLoCvRBuhItAK6Ee2ATkTtY8KdaAt0IFoDzYmW16AL0QNoSvQBGhK9gGZEP6AR0RNoQrQ/JoyJ3kB1oj9Qmeh7DV5TJMYAKhKjANWIcYBKxEhAFWIsoAIxwjFxmzAxHlCYGBEoSox2DV4TI0YFihHjAoWIkYEixNhAAWJ0IJsY85i4jUVsAcgitgFkEONfg9eIxHaARGJLQBKxLSCB2BqwmtgesJLYyjFxWwWxTWAFsVVgMbFdYCGxZWARsW1gAbF1YJbYPjBDHAKwlzgMYA9xKMBO4nCAHcS3AQEffr3W2XtNwt19SdrJe0Xyzf/5RYlD5usbW+3juDuvVufd3PUnoxBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhNDA+w0cMTiKnbHnbwAAAABJRU5ErkJggg==")}table.dataTable thead .sorting_asc_disabled{background-image:url("../images/sort_asc_disabled.png")}table.dataTable thead .sorting_desc_disabled{background-image:url("../images/sort_desc_disabled.png")}div.dataTables_scrollHead table{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot table{margin-top:0 !important;border-top:none}'
        + 'table.dataTable{width:100%;margin:0 auto;clear:both;border-collapse:separate;border-spacing:0}table.dataTable thead th,table.dataTable tfoot th{font-weight:bold}table.dataTable thead th,table.dataTable thead td{padding:10px 18px}table.dataTable thead th:active,table.dataTable thead td:active{outline:none}table.dataTable tfoot th,table.dataTable tfoot td{padding:10px 18px 6px 18px}table.dataTable tbody tr{background-color:#ffffff}table.dataTable tbody tr.selected{background-color:#B0BED9}table.dataTable tbody th,table.dataTable tbody td{padding:8px 10px}table.dataTable.row-border tbody th,table.dataTable.row-border tbody td,table.dataTable.display tbody th,table.dataTable.display tbody td{border-top:1px solid #ddd}table.dataTable.row-border tbody tr:first-child th,table.dataTable.row-border tbody tr:first-child td,table.dataTable.display tbody tr:first-child th,table.dataTable.display tbody tr:first-child td{border-top:none}table.dataTable.cell-border tbody th,table.dataTable.cell-border tbody td{border-top:1px solid #ddd;border-right:1px solid #ddd}table.dataTable.cell-border tbody tr th:first-child,table.dataTable.cell-border tbody tr td:first-child{border-left:1px solid #ddd}table.dataTable.cell-border tbody tr:first-child th,table.dataTable.cell-border tbody tr:first-child td{border-top:none}table.dataTable.stripe tbody tr.odd,table.dataTable.display tbody tr.odd{background-color:#f9f9f9}table.dataTable.stripe tbody tr.odd.selected,table.dataTable.display tbody tr.odd.selected{background-color:#acbad4}table.dataTable.hover tbody tr:hover,table.dataTable.display tbody tr:hover{background-color:#f6f6f6}table.dataTable.hover tbody tr:hover.selected,table.dataTable.display tbody tr:hover.selected{background-color:#aab7d1}table.dataTable.order-column tbody tr>.sorting_1,table.dataTable.order-column tbody tr>.sorting_2,table.dataTable.order-column tbody tr>.sorting_3,table.dataTable.display tbody tr>.sorting_1,table.dataTable.display tbody tr>.sorting_2,table.dataTable.display tbody tr>.sorting_3{background-color:#fafafa}table.dataTable.order-column tbody tr.selected>.sorting_1,table.dataTable.order-column tbody tr.selected>.sorting_2,table.dataTable.order-column tbody tr.selected>.sorting_3,table.dataTable.display tbody tr.selected>.sorting_1,table.dataTable.display tbody tr.selected>.sorting_2,table.dataTable.display tbody tr.selected>.sorting_3{background-color:#acbad5}table.dataTable.display tbody tr.odd>.sorting_1,table.dataTable.order-column.stripe tbody tr.odd>.sorting_1{background-color:#f1f1f1}table.dataTable.display tbody tr.odd>.sorting_2,table.dataTable.order-column.stripe tbody tr.odd>.sorting_2{background-color:#f3f3f3}table.dataTable.display tbody tr.odd>.sorting_3,table.dataTable.order-column.stripe tbody tr.odd>.sorting_3{background-color:whitesmoke}table.dataTable.display tbody tr.odd.selected>.sorting_1,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_1{background-color:#a6b4cd}table.dataTable.display tbody tr.odd.selected>.sorting_2,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_2{background-color:#a8b5cf}table.dataTable.display tbody tr.odd.selected>.sorting_3,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_3{background-color:#a9b7d1}table.dataTable.display tbody tr.even>.sorting_1,table.dataTable.order-column.stripe tbody tr.even>.sorting_1{background-color:#fafafa}table.dataTable.display tbody tr.even>.sorting_2,table.dataTable.order-column.stripe tbody tr.even>.sorting_2{background-color:#fcfcfc}table.dataTable.display tbody tr.even>.sorting_3,table.dataTable.order-column.stripe tbody tr.even>.sorting_3{background-color:#fefefe}table.dataTable.display tbody tr.even.selected>.sorting_1,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_1{background-color:#acbad5}table.dataTable.display tbody tr.even.selected>.sorting_2,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_2{background-color:#aebcd6}table.dataTable.display tbody tr.even.selected>.sorting_3,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_3{background-color:#afbdd8}table.dataTable.display tbody tr:hover>.sorting_1,table.dataTable.order-column.hover tbody tr:hover>.sorting_1{background-color:#eaeaea}table.dataTable.display tbody tr:hover>.sorting_2,table.dataTable.order-column.hover tbody tr:hover>.sorting_2{background-color:#ececec}table.dataTable.display tbody tr:hover>.sorting_3,table.dataTable.order-column.hover tbody tr:hover>.sorting_3{background-color:#efefef}table.dataTable.display tbody tr:hover.selected>.sorting_1,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_1{background-color:#a2aec7}table.dataTable.display tbody tr:hover.selected>.sorting_2,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_2{background-color:#a3b0c9}table.dataTable.display tbody tr:hover.selected>.sorting_3,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_3{background-color:#a5b2cb}table.dataTable.no-footer{border-bottom:1px solid #111}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}table.dataTable.compact thead th,table.dataTable.compact thead td{padding:4px 17px 4px 4px}table.dataTable.compact tfoot th,table.dataTable.compact tfoot td{padding:4px}table.dataTable.compact tbody th,table.dataTable.compact tbody td{padding:4px}table.dataTable th.dt-left,table.dataTable td.dt-left{text-align:left}table.dataTable th.dt-center,table.dataTable td.dt-center,table.dataTable td.dataTables_empty{text-align:center}table.dataTable th.dt-right,table.dataTable td.dt-right{text-align:right}table.dataTable th.dt-justify,table.dataTable td.dt-justify{text-align:justify}table.dataTable th.dt-nowrap,table.dataTable td.dt-nowrap{white-space:nowrap}table.dataTable thead th.dt-head-left,table.dataTable thead td.dt-head-left,table.dataTable tfoot th.dt-head-left,table.dataTable tfoot td.dt-head-left{text-align:left}table.dataTable thead th.dt-head-center,table.dataTable thead td.dt-head-center,table.dataTable tfoot th.dt-head-center,table.dataTable tfoot td.dt-head-center{text-align:center}table.dataTable thead th.dt-head-right,table.dataTable thead td.dt-head-right,table.dataTable tfoot th.dt-head-right,table.dataTable tfoot td.dt-head-right{text-align:right}table.dataTable thead th.dt-head-justify,table.dataTable thead td.dt-head-justify,table.dataTable tfoot th.dt-head-justify,table.dataTable tfoot td.dt-head-justify{text-align:justify}table.dataTable thead th.dt-head-nowrap,table.dataTable thead td.dt-head-nowrap,table.dataTable tfoot th.dt-head-nowrap,table.dataTable tfoot td.dt-head-nowrap{white-space:nowrap}table.dataTable tbody th.dt-body-left,table.dataTable tbody td.dt-body-left{text-align:left}table.dataTable tbody th.dt-body-center,table.dataTable tbody td.dt-body-center{text-align:center}table.dataTable tbody th.dt-body-right,table.dataTable tbody td.dt-body-right{text-align:right}table.dataTable tbody th.dt-body-justify,table.dataTable tbody td.dt-body-justify{text-align:justify}table.dataTable tbody th.dt-body-nowrap,table.dataTable tbody td.dt-body-nowrap{white-space:nowrap}table.dataTable,table.dataTable th,table.dataTable td{-webkit-box-sizing:content-box;box-sizing:content-box}.dataTables_wrapper{position:relative;clear:both;*zoom:1;zoom:1}.dataTables_wrapper .dataTables_length{float:left}.dataTables_wrapper .dataTables_filter{float:right;text-align:right}.dataTables_wrapper .dataTables_filter input{margin-left:0.5em}.dataTables_wrapper .dataTables_info{clear:both;float:left;padding-top:0.755em}.dataTables_wrapper .dataTables_paginate{float:right;text-align:right;padding-top:0.25em}.dataTables_wrapper .dataTables_paginate .paginate_button{box-sizing:border-box;display:inline-block;min-width:1.5em;padding:0.5em 1em;margin-left:2px;text-align:center;text-decoration:none !important;cursor:pointer;*cursor:hand;color:#333 !important;border:1px solid transparent;border-radius:2px}.dataTables_wrapper .dataTables_paginate .paginate_button.current,.dataTables_wrapper .dataTables_paginate .paginate_button.current:hover{color:#333 !important;border:1px solid #979797;background-color:white;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #fff), color-stop(100%, #dcdcdc));background:-webkit-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-moz-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-ms-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-o-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)}.dataTables_wrapper .dataTables_paginate .paginate_button.disabled,.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active{cursor:default;color:#666 !important;border:1px solid transparent;background:transparent;box-shadow:none}.dataTables_wrapper .dataTables_paginate .paginate_button:hover{color:white !important;border:1px solid #111;background-color:#585858;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111));background:-webkit-linear-gradient(top, #585858 0%, #111 100%);background:-moz-linear-gradient(top, #585858 0%, #111 100%);background:-ms-linear-gradient(top, #585858 0%, #111 100%);background:-o-linear-gradient(top, #585858 0%, #111 100%);background:linear-gradient(to bottom, #585858 0%, #111 100%)}.dataTables_wrapper .dataTables_paginate .paginate_button:active{outline:none;background-color:#2b2b2b;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));background:-webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);box-shadow:inset 0 0 3px #111}.dataTables_wrapper .dataTables_paginate .ellipsis{padding:0 1em}.dataTables_wrapper .dataTables_processing{position:absolute;top:50%;left:50%;width:100%;height:40px;margin-left:-50%;margin-top:-25px;padding-top:20px;text-align:center;font-size:1.2em;background-color:white;background:-webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,255,255,0)), color-stop(25%, rgba(255,255,255,0.9)), color-stop(75%, rgba(255,255,255,0.9)), color-stop(100%, rgba(255,255,255,0)));background:-webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-ms-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%)}.dataTables_wrapper .dataTables_length,.dataTables_wrapper .dataTables_filter,.dataTables_wrapper .dataTables_info,.dataTables_wrapper .dataTables_processing,.dataTables_wrapper .dataTables_paginate{color:#333}.dataTables_wrapper .dataTables_scroll{clear:both}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody{*margin-top:-1px;-webkit-overflow-scrolling:touch}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>th,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>td,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>th,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td{vertical-align:middle}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>th>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>td>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>th>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td>div.dataTables_sizing{height:0;overflow:hidden;margin:0 !important;padding:0 !important}.dataTables_wrapper.no-footer .dataTables_scrollBody{border-bottom:1px solid #111}.dataTables_wrapper.no-footer div.dataTables_scrollHead>table,.dataTables_wrapper.no-footer div.dataTables_scrollBody>table{border-bottom:none}.dataTables_wrapper:after{visibility:hidden;display:block;content:"";clear:both;height:0}@media screen and (max-width: 767px){.dataTables_wrapper .dataTables_info,.dataTables_wrapper .dataTables_paginate{float:none;text-align:center}.dataTables_wrapper .dataTables_paginate{margin-top:0.5em}}@media screen and (max-width: 640px){.dataTables_wrapper .dataTables_length,.dataTables_wrapper .dataTables_filter{float:none;text-align:center}.dataTables_wrapper .dataTables_filter{margin-top:0.5em}}table.dataTable thead th div.DataTables_sort_wrapper{position:relative}table.dataTable thead th div.DataTables_sort_wrapper span{position:absolute;top:50%;margin-top:-8px;right:-18px}table.dataTable thead th.ui-state-default,table.dataTable tfoot th.ui-state-default{border-left-width:0}table.dataTable thead th.ui-state-default:first-child,table.dataTable tfoot th.ui-state-default:first-child{border-left-width:1px}.dataTables_wrapper .dataTables_paginate .fg-button{box-sizing:border-box;display:inline-block;min-width:1.5em;padding:0.5em;margin-left:2px;text-align:center;text-decoration:none !important;cursor:pointer;*cursor:hand;border:1px solid transparent}.dataTables_wrapper .dataTables_paginate .fg-button:active{outline:none}.dataTables_wrapper .dataTables_paginate .fg-button:first-child{border-top-left-radius:3px;border-bottom-left-radius:3px}.dataTables_wrapper .dataTables_paginate .fg-button:last-child{border-top-right-radius:3px;border-bottom-right-radius:3px}.dataTables_wrapper .ui-widget-header{font-weight:normal}.dataTables_wrapper .ui-toolbar{padding:8px}.dataTables_wrapper.no-footer .dataTables_scrollBody{border-bottom:none}.dataTables_wrapper .dataTables_length,.dataTables_wrapper .dataTables_filter,.dataTables_wrapper .dataTables_info,.dataTables_wrapper .dataTables_processing,.dataTables_wrapper .dataTables_paginate{color:inherit}';

        Helper.cssManipulation.AddStyleSheet(jQueryUICSS);
        Helper.cssManipulation.AddStyleSheet(jQueryUIStructureCSS);
        Helper.cssManipulation.AddStyleSheet(dataTablesCSS);
    }

    /*
     * Returns column data for the following columns
     *
     * Pri.
     * WO#
     * Status
     * Eq.#
     * Eq. Pri.
     * Eq. Desc.
     * WO Desc.
     * Shop
     * Skill
     * Loc.
     * Rpt. Date
     * Age(Days)
     */
    function getColumnsWorkloadPriority()
    {
        console.log("getColumnsWorkloadPriority");
        var returnMe =
        [
            {
                "data": "cell0",
                "title": "Pri",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            },
            {
                "data": "cell1",
                "title": "WO#",
                render: function (data, type, row)
                {
                    return "<a href=\"" + encodeURI("ipeWorkloadStatusDisplay.asp?wonum=" + data) + "\" class=\"link\">" + data + "</a>";
                },
                "filter": "text"
            },
            {
                "data": "cell2",
                //render: function (data, type, row) {
                //    return "<td><span data-id=\"" + row.status.id + "\">" + row.status.name + "</span></td>";
                //},
                "title": "Status",
                "filter": "dropdown"
            },
            {
                "data": "cell3",
                "title": "EQ#",
                "filter": "text"
            },
            {
                "data": "cell4",
                "title": "Eq Pri",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            },
            {
                "data": "cell5",
                "title": "Eq Desc",
                "filter": "text"
            },
            {
                "data": "cell6",
                "title": "WO Desc",
                "filter": "text"
            },
            {
                "data": "cell7",
                "title": "Shop",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            },
            {
                "data": "cell8",
                "title": "Skill",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            },
            {
                "data": "cell9",
                "title": "Loc",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            },
            {
                "data": "cell10",
                "title": "Rpt Date",
                "filter": "dateRange"
            },
            {
                "data": "cell11",
                "title": "Age(Days)",
                render: $.fn.dataTable.render.text(),
                "filter": "numberRange"
            },

        ];

        return returnMe;
    }

    /*
     * Returns column data for the following columns
     *
     * Tool #
     * Description
     * Part Number
     * NSN
     * Category
     * Tool Type
     * Toolroom
     * Available Balance
     * Broken Balance
     * Tool Status
     *
     *
     * just in case we decide to link something
     * render: function (data, type, row)
     * {
     *     return "<a href=\"" + encodeURI("ipeWorkloadStatusDisplay.asp?wonum=" + data) + "\" class=\"link\">" + data + "</a>";
     * },
     *
     */
    function getColumnsToolSearch()
    {
        console.log("getColumnsToolSearch");
        var returnMe =
        [
            {
                "data": "cell0",
                "title": "Tool #",
                render: $.fn.dataTable.render.text(),
                "filter": "text"
            },
            {
                "data": "cell1",
                "title": "Description",
                render: $.fn.dataTable.render.text(),
                "filter": "text"
            },
            {
                "data": "cell2",
                "title": "Part Number",
                render: $.fn.dataTable.render.text(),
                "filter": "text"
            },
            {
                "data": "cell3",
                "title": "NSN",
                render: $.fn.dataTable.render.text(),
                "filter": "text"
            },
            {
                "data": "cell4",
                "title": "Category",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            },
            {
                "data": "cell5",
                "title": "Tool Type",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            },
            {
                "data": "cell6",
                "title": "Toolroom",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            },
            {
                "data": "cell7",
                "title": "Available Balance",
                render: $.fn.dataTable.render.text(),
                "filter": "numberRange"
            },
            {
                "data": "cell8",
                "title": "Broken Balance",
                render: $.fn.dataTable.render.text(),
                "filter": "numberRange"
            },
            {
                "data": "cell9",
                "title": "Tool Status",
                render: $.fn.dataTable.render.text(),
                "filter": "dropdown"
            }
        ];

        return returnMe;
    }

    //function polyfill()
    //{
    //    /*
    //     * web components polyfill
    //     *
    //     */
    //    function loadScript(src)
    //    {
    //        return new Promise(function (resolve, reject)
    //        {
    //            const script = document.createElement('script');
    //            script.src = src;
    //            script.onload = resolve;
    //            script.onerror = reject;
    //            document.head.appendChild(script);
    //        });
    //    }
    //
    //    // Lazy load the polyfill if necessary.
    //    if (!supportsCustomElementsV1)
    //    {
    //        loadScript('/bower_components/custom-elements/custom-elements.min.js').then(e =>
    //        {
    //            // Polyfill loaded.
    //        });
    //    } else
    //    {
    //        // Native support. Good to go.
    //    }
    //}
});
