"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeepOutlets = exports.KeepAliveContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
exports.KeepAliveContext = (0, react_1.createContext)({
    keepalive: [],
    keepElements: {},
});
const isKeepPath = (aliveList, path) => {
    let isKeep = false;
    aliveList.map((item) => {
        if (item === path) {
            isKeep = true;
        }
        if (item instanceof RegExp && item.test(path)) {
            isKeep = true;
        }
        if (typeof item === "string" && item.toLowerCase() === path) {
            isKeep = true;
        }
    });
    return isKeep;
};
function useKeepOutlets() {
    const location = (0, react_router_dom_1.useLocation)();
    const element = (0, react_router_dom_1.useOutlet)();
    const { keepElements, keepalive } = (0, react_1.useContext)(exports.KeepAliveContext);
    const isKeep = isKeepPath(keepalive, location.pathname);
    if (isKeep) {
        keepElements.current[location.pathname] = element;
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [Object.entries(keepElements.current).map(([pathname, element]) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden auto",
                }, className: "rumtime-keep-alive-layout", hidden: !(0, react_router_dom_1.matchPath)(location.pathname, pathname) }, { children: element }), pathname))), (0, jsx_runtime_1.jsx)("div", Object.assign({ hidden: isKeep, style: {
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden auto",
                }, className: "rumtime-keep-alive-layout-no" }, { children: !isKeep && element }))] }));
}
exports.useKeepOutlets = useKeepOutlets;
const KeepAliveLayout = (props) => {
    const { keepalive } = props, other = __rest(props, ["keepalive"]);
    const keepElements = (0, react_1.useRef)({});
    function dropByCacheKey(path) {
        keepElements.current[path] = null;
    }
    return ((0, jsx_runtime_1.jsx)(exports.KeepAliveContext.Provider, Object.assign({ value: { keepalive, keepElements, dropByCacheKey } }, other)));
};
exports.default = KeepAliveLayout;
