(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ../../node_modules/.pnpm/react@18.1.0/node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "../../node_modules/.pnpm/react@18.1.0/node_modules/react/cjs/react.development.js"(exports, module) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
          }
          var ReactVersion = "18.1.0";
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            current: null
          };
          var ReactCurrentBatchConfig = {
            transition: null
          };
          var ReactCurrentActQueue = {
            current: null,
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
          };
          var ReactCurrentOwner = {
            current: null
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning("warn", format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            isMounted: function(publicInstance) {
              return false;
            },
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
              throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type,
              key,
              ref,
              props,
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = key.replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, "$&/");
          }
          function getElementKey(element, index) {
            if (typeof element === "object" && element !== null && element.key != null) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape("" + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                }
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                  return c;
                });
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(mappedChild, escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
              } else if (type === "object") {
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, "", "", function(child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
              forEachFunc.apply(this, arguments);
            }, forEachContext);
          }
          function toArray(children) {
            return mapChildren(children, function(child) {
              return child;
            }) || [];
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error("React.Children.only expected to receive a single React element child.");
            }
            return children;
          }
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                },
                displayName: {
                  get: function() {
                    return context.displayName;
                  },
                  set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(function(moduleObject2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var resolved = payload;
                  resolved._status = Resolved;
                  resolved._result = moduleObject2;
                }
              }, function(error2) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                  var rejected = payload;
                  rejected._status = Rejected;
                  rejected._result = error2;
                }
              });
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                }
              }
              {
                if (!("default" in moduleObject)) {
                  error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              _status: Uninitialized,
              _result: ctor
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
            {
              var ownName;
              Object.defineProperty(elementType, "displayName", {
                enumerable: false,
                configurable: true,
                get: function() {
                  return ownName;
                },
                set: function(name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                }
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext2(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState3(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (prevTransition === null && currentTransition._updatedFibers) {
                  var updatedFibersCount = currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ("require" + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function(callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === "undefined") {
                        error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (result !== null && typeof result === "object" && typeof result.then === "function") {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue2) {
                      popActScope(prevActScopeDepth);
                      if (actScopeDepth === 0) {
                        recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                      } else {
                        resolve(returnValue2);
                      }
                    }, function(error2) {
                      popActScope(prevActScopeDepth);
                      reject(error2);
                    });
                  }
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                    Promise.resolve().then(function() {
                    }).then(function() {
                      if (!wasAwaited) {
                        didWarnNoAwaitAct = true;
                        error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                      }
                    });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function(resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                      } else {
                        resolve(returnValue);
                      }
                    }
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function(resolve, reject) {
                      resolve(returnValue);
                    }
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function() {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext2;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState3;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
          }
        })();
      }
    }
  });

  // ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
  var require_react = __commonJS({
    "../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // ../../node_modules/.pnpm/history@5.3.0/node_modules/history/umd/history.development.js
  var require_history_development = __commonJS({
    "../../node_modules/.pnpm/history@5.3.0/node_modules/history/umd/history.development.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.HistoryLibrary = {}));
      })(exports, function(exports2) {
        "use strict";
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        exports2.Action = void 0;
        (function(Action) {
          Action["Pop"] = "POP";
          Action["Push"] = "PUSH";
          Action["Replace"] = "REPLACE";
        })(exports2.Action || (exports2.Action = {}));
        var readOnly = function(obj) {
          return Object.freeze(obj);
        };
        function warning(cond, message) {
          if (!cond) {
            if (typeof console !== "undefined")
              console.warn(message);
            try {
              throw new Error(message);
            } catch (e) {
            }
          }
        }
        var BeforeUnloadEventType = "beforeunload";
        var HashChangeEventType = "hashchange";
        var PopStateEventType = "popstate";
        function createBrowserHistory(options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options, _options$window = _options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
          var globalHistory = window.history;
          function getIndexAndLocation() {
            var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
            var state = globalHistory.state || {};
            return [state.idx, readOnly({
              pathname,
              search,
              hash,
              state: state.usr || null,
              key: state.key || "default"
            })];
          }
          var blockedPopTx = null;
          function handlePop() {
            if (blockedPopTx) {
              blockers.call(blockedPopTx);
              blockedPopTx = null;
            } else {
              var nextAction = exports2.Action.Pop;
              var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
              if (blockers.length) {
                if (nextIndex != null) {
                  var delta = index - nextIndex;
                  if (delta) {
                    blockedPopTx = {
                      action: nextAction,
                      location: nextLocation,
                      retry: function retry() {
                        go(delta * -1);
                      }
                    };
                    go(delta);
                  }
                } else {
                  warning(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
                }
              } else {
                applyTx(nextAction);
              }
            }
          }
          window.addEventListener(PopStateEventType, handlePop);
          var action = exports2.Action.Pop;
          var _getIndexAndLocation2 = getIndexAndLocation(), index = _getIndexAndLocation2[0], location = _getIndexAndLocation2[1];
          var listeners = createEvents();
          var blockers = createEvents();
          if (index == null) {
            index = 0;
            globalHistory.replaceState(_extends({}, globalHistory.state, {
              idx: index
            }), "");
          }
          function createHref(to) {
            return typeof to === "string" ? to : createPath(to);
          }
          function getNextLocation(to, state) {
            if (state === void 0) {
              state = null;
            }
            return readOnly(_extends({
              pathname: location.pathname,
              hash: "",
              search: ""
            }, typeof to === "string" ? parsePath(to) : to, {
              state,
              key: createKey()
            }));
          }
          function getHistoryStateAndUrl(nextLocation, index2) {
            return [{
              usr: nextLocation.state,
              key: nextLocation.key,
              idx: index2
            }, createHref(nextLocation)];
          }
          function allowTx(action2, location2, retry) {
            return !blockers.length || (blockers.call({
              action: action2,
              location: location2,
              retry
            }), false);
          }
          function applyTx(nextAction) {
            action = nextAction;
            var _getIndexAndLocation3 = getIndexAndLocation();
            index = _getIndexAndLocation3[0];
            location = _getIndexAndLocation3[1];
            listeners.call({
              action,
              location
            });
          }
          function push(to, state) {
            var nextAction = exports2.Action.Push;
            var nextLocation = getNextLocation(to, state);
            function retry() {
              push(to, state);
            }
            if (allowTx(nextAction, nextLocation, retry)) {
              var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
              try {
                globalHistory.pushState(historyState, "", url);
              } catch (error) {
                window.location.assign(url);
              }
              applyTx(nextAction);
            }
          }
          function replace(to, state) {
            var nextAction = exports2.Action.Replace;
            var nextLocation = getNextLocation(to, state);
            function retry() {
              replace(to, state);
            }
            if (allowTx(nextAction, nextLocation, retry)) {
              var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
              globalHistory.replaceState(historyState, "", url);
              applyTx(nextAction);
            }
          }
          function go(delta) {
            globalHistory.go(delta);
          }
          var history = {
            get action() {
              return action;
            },
            get location() {
              return location;
            },
            createHref,
            push,
            replace,
            go,
            back: function back() {
              go(-1);
            },
            forward: function forward() {
              go(1);
            },
            listen: function listen(listener) {
              return listeners.push(listener);
            },
            block: function block(blocker) {
              var unblock = blockers.push(blocker);
              if (blockers.length === 1) {
                window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
              }
              return function() {
                unblock();
                if (!blockers.length) {
                  window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
                }
              };
            }
          };
          return history;
        }
        function createHashHistory(options) {
          if (options === void 0) {
            options = {};
          }
          var _options2 = options, _options2$window = _options2.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
          var globalHistory = window.history;
          function getIndexAndLocation() {
            var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? "" : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
            var state = globalHistory.state || {};
            return [state.idx, readOnly({
              pathname,
              search,
              hash,
              state: state.usr || null,
              key: state.key || "default"
            })];
          }
          var blockedPopTx = null;
          function handlePop() {
            if (blockedPopTx) {
              blockers.call(blockedPopTx);
              blockedPopTx = null;
            } else {
              var nextAction = exports2.Action.Pop;
              var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
              if (blockers.length) {
                if (nextIndex != null) {
                  var delta = index - nextIndex;
                  if (delta) {
                    blockedPopTx = {
                      action: nextAction,
                      location: nextLocation,
                      retry: function retry() {
                        go(delta * -1);
                      }
                    };
                    go(delta);
                  }
                } else {
                  warning(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
                }
              } else {
                applyTx(nextAction);
              }
            }
          }
          window.addEventListener(PopStateEventType, handlePop);
          window.addEventListener(HashChangeEventType, function() {
            var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1];
            if (createPath(nextLocation) !== createPath(location)) {
              handlePop();
            }
          });
          var action = exports2.Action.Pop;
          var _getIndexAndLocation6 = getIndexAndLocation(), index = _getIndexAndLocation6[0], location = _getIndexAndLocation6[1];
          var listeners = createEvents();
          var blockers = createEvents();
          if (index == null) {
            index = 0;
            globalHistory.replaceState(_extends({}, globalHistory.state, {
              idx: index
            }), "");
          }
          function getBaseHref() {
            var base = document.querySelector("base");
            var href = "";
            if (base && base.getAttribute("href")) {
              var url = window.location.href;
              var hashIndex = url.indexOf("#");
              href = hashIndex === -1 ? url : url.slice(0, hashIndex);
            }
            return href;
          }
          function createHref(to) {
            return getBaseHref() + "#" + (typeof to === "string" ? to : createPath(to));
          }
          function getNextLocation(to, state) {
            if (state === void 0) {
              state = null;
            }
            return readOnly(_extends({
              pathname: location.pathname,
              hash: "",
              search: ""
            }, typeof to === "string" ? parsePath(to) : to, {
              state,
              key: createKey()
            }));
          }
          function getHistoryStateAndUrl(nextLocation, index2) {
            return [{
              usr: nextLocation.state,
              key: nextLocation.key,
              idx: index2
            }, createHref(nextLocation)];
          }
          function allowTx(action2, location2, retry) {
            return !blockers.length || (blockers.call({
              action: action2,
              location: location2,
              retry
            }), false);
          }
          function applyTx(nextAction) {
            action = nextAction;
            var _getIndexAndLocation7 = getIndexAndLocation();
            index = _getIndexAndLocation7[0];
            location = _getIndexAndLocation7[1];
            listeners.call({
              action,
              location
            });
          }
          function push(to, state) {
            var nextAction = exports2.Action.Push;
            var nextLocation = getNextLocation(to, state);
            function retry() {
              push(to, state);
            }
            warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
            if (allowTx(nextAction, nextLocation, retry)) {
              var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1];
              try {
                globalHistory.pushState(historyState, "", url);
              } catch (error) {
                window.location.assign(url);
              }
              applyTx(nextAction);
            }
          }
          function replace(to, state) {
            var nextAction = exports2.Action.Replace;
            var nextLocation = getNextLocation(to, state);
            function retry() {
              replace(to, state);
            }
            warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")");
            if (allowTx(nextAction, nextLocation, retry)) {
              var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1];
              globalHistory.replaceState(historyState, "", url);
              applyTx(nextAction);
            }
          }
          function go(delta) {
            globalHistory.go(delta);
          }
          var history = {
            get action() {
              return action;
            },
            get location() {
              return location;
            },
            createHref,
            push,
            replace,
            go,
            back: function back() {
              go(-1);
            },
            forward: function forward() {
              go(1);
            },
            listen: function listen(listener) {
              return listeners.push(listener);
            },
            block: function block(blocker) {
              var unblock = blockers.push(blocker);
              if (blockers.length === 1) {
                window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
              }
              return function() {
                unblock();
                if (!blockers.length) {
                  window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
                }
              };
            }
          };
          return history;
        }
        function createMemoryHistory(options) {
          if (options === void 0) {
            options = {};
          }
          var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? ["/"] : _options3$initialEntr, initialIndex = _options3.initialIndex;
          var entries = initialEntries.map(function(entry) {
            var location2 = readOnly(_extends({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: createKey()
            }, typeof entry === "string" ? parsePath(entry) : entry));
            warning(location2.pathname.charAt(0) === "/", "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")");
            return location2;
          });
          var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
          var action = exports2.Action.Pop;
          var location = entries[index];
          var listeners = createEvents();
          var blockers = createEvents();
          function createHref(to) {
            return typeof to === "string" ? to : createPath(to);
          }
          function getNextLocation(to, state) {
            if (state === void 0) {
              state = null;
            }
            return readOnly(_extends({
              pathname: location.pathname,
              search: "",
              hash: ""
            }, typeof to === "string" ? parsePath(to) : to, {
              state,
              key: createKey()
            }));
          }
          function allowTx(action2, location2, retry) {
            return !blockers.length || (blockers.call({
              action: action2,
              location: location2,
              retry
            }), false);
          }
          function applyTx(nextAction, nextLocation) {
            action = nextAction;
            location = nextLocation;
            listeners.call({
              action,
              location
            });
          }
          function push(to, state) {
            var nextAction = exports2.Action.Push;
            var nextLocation = getNextLocation(to, state);
            function retry() {
              push(to, state);
            }
            warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")");
            if (allowTx(nextAction, nextLocation, retry)) {
              index += 1;
              entries.splice(index, entries.length, nextLocation);
              applyTx(nextAction, nextLocation);
            }
          }
          function replace(to, state) {
            var nextAction = exports2.Action.Replace;
            var nextLocation = getNextLocation(to, state);
            function retry() {
              replace(to, state);
            }
            warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")");
            if (allowTx(nextAction, nextLocation, retry)) {
              entries[index] = nextLocation;
              applyTx(nextAction, nextLocation);
            }
          }
          function go(delta) {
            var nextIndex = clamp(index + delta, 0, entries.length - 1);
            var nextAction = exports2.Action.Pop;
            var nextLocation = entries[nextIndex];
            function retry() {
              go(delta);
            }
            if (allowTx(nextAction, nextLocation, retry)) {
              index = nextIndex;
              applyTx(nextAction, nextLocation);
            }
          }
          var history = {
            get index() {
              return index;
            },
            get action() {
              return action;
            },
            get location() {
              return location;
            },
            createHref,
            push,
            replace,
            go,
            back: function back() {
              go(-1);
            },
            forward: function forward() {
              go(1);
            },
            listen: function listen(listener) {
              return listeners.push(listener);
            },
            block: function block(blocker) {
              return blockers.push(blocker);
            }
          };
          return history;
        }
        function clamp(n, lowerBound, upperBound) {
          return Math.min(Math.max(n, lowerBound), upperBound);
        }
        function promptBeforeUnload(event) {
          event.preventDefault();
          event.returnValue = "";
        }
        function createEvents() {
          var handlers = [];
          return {
            get length() {
              return handlers.length;
            },
            push: function push(fn) {
              handlers.push(fn);
              return function() {
                handlers = handlers.filter(function(handler) {
                  return handler !== fn;
                });
              };
            },
            call: function call(arg) {
              handlers.forEach(function(fn) {
                return fn && fn(arg);
              });
            }
          };
        }
        function createKey() {
          return Math.random().toString(36).substr(2, 8);
        }
        function createPath(_ref) {
          var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
          if (search && search !== "?")
            pathname += search.charAt(0) === "?" ? search : "?" + search;
          if (hash && hash !== "#")
            pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
          return pathname;
        }
        function parsePath(path) {
          var parsedPath = {};
          if (path) {
            var hashIndex = path.indexOf("#");
            if (hashIndex >= 0) {
              parsedPath.hash = path.substr(hashIndex);
              path = path.substr(0, hashIndex);
            }
            var searchIndex = path.indexOf("?");
            if (searchIndex >= 0) {
              parsedPath.search = path.substr(searchIndex);
              path = path.substr(0, searchIndex);
            }
            if (path) {
              parsedPath.pathname = path;
            }
          }
          return parsedPath;
        }
        exports2.createBrowserHistory = createBrowserHistory;
        exports2.createHashHistory = createHashHistory;
        exports2.createMemoryHistory = createMemoryHistory;
        exports2.createPath = createPath;
        exports2.parsePath = parsePath;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // ../../node_modules/.pnpm/history@5.3.0/node_modules/history/main.js
  var require_main = __commonJS({
    "../../node_modules/.pnpm/history@5.3.0/node_modules/history/main.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_history_development();
      }
    }
  });

  // ../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/umd/react-router.development.js
  var require_react_router_development = __commonJS({
    "../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/umd/react-router.development.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_main(), require_react()) : typeof define === "function" && define.amd ? define(["exports", "history", "react"], factory) : (global = global || self, factory(global.ReactRouter = {}, global.HistoryLibrary, global.React));
      })(exports, function(exports2, history, React4) {
        "use strict";
        const NavigationContext = /* @__PURE__ */ React4.createContext(null);
        {
          NavigationContext.displayName = "Navigation";
        }
        const LocationContext = /* @__PURE__ */ React4.createContext(null);
        {
          LocationContext.displayName = "Location";
        }
        const RouteContext = /* @__PURE__ */ React4.createContext({
          outlet: null,
          matches: []
        });
        {
          RouteContext.displayName = "Route";
        }
        function invariant(cond, message) {
          if (!cond)
            throw new Error(message);
        }
        function warning(cond, message) {
          if (!cond) {
            if (typeof console !== "undefined")
              console.warn(message);
            try {
              throw new Error(message);
            } catch (e) {
            }
          }
        }
        const alreadyWarned = {};
        function warningOnce(key, cond, message) {
          if (!cond && !alreadyWarned[key]) {
            alreadyWarned[key] = true;
            warning(false, message);
          }
        }
        function generatePath(path, params) {
          if (params === void 0) {
            params = {};
          }
          return path.replace(/:(\w+)/g, (_, key) => {
            !(params[key] != null) ? invariant(false, 'Missing ":' + key + '" param') : void 0;
            return params[key];
          }).replace(/\/*\*$/, (_) => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
        }
        function matchRoutes(routes, locationArg, basename) {
          if (basename === void 0) {
            basename = "/";
          }
          let location = typeof locationArg === "string" ? history.parsePath(locationArg) : locationArg;
          let pathname = stripBasename(location.pathname || "/", basename);
          if (pathname == null) {
            return null;
          }
          let branches = flattenRoutes(routes);
          rankRouteBranches(branches);
          let matches = null;
          for (let i = 0; matches == null && i < branches.length; ++i) {
            matches = matchRouteBranch(branches[i], pathname);
          }
          return matches;
        }
        function flattenRoutes(routes, branches, parentsMeta, parentPath) {
          if (branches === void 0) {
            branches = [];
          }
          if (parentsMeta === void 0) {
            parentsMeta = [];
          }
          if (parentPath === void 0) {
            parentPath = "";
          }
          routes.forEach((route, index) => {
            let meta = {
              relativePath: route.path || "",
              caseSensitive: route.caseSensitive === true,
              childrenIndex: index,
              route
            };
            if (meta.relativePath.startsWith("/")) {
              !meta.relativePath.startsWith(parentPath) ? invariant(false, 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : void 0;
              meta.relativePath = meta.relativePath.slice(parentPath.length);
            }
            let path = joinPaths([parentPath, meta.relativePath]);
            let routesMeta = parentsMeta.concat(meta);
            if (route.children && route.children.length > 0) {
              !(route.index !== true) ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : void 0;
              flattenRoutes(route.children, branches, routesMeta, path);
            }
            if (route.path == null && !route.index) {
              return;
            }
            branches.push({
              path,
              score: computeScore(path, route.index),
              routesMeta
            });
          });
          return branches;
        }
        function rankRouteBranches(branches) {
          branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
        }
        const paramRe = /^:\w+$/;
        const dynamicSegmentValue = 3;
        const indexRouteValue = 2;
        const emptySegmentValue = 1;
        const staticSegmentValue = 10;
        const splatPenalty = -2;
        const isSplat = (s) => s === "*";
        function computeScore(path, index) {
          let segments = path.split("/");
          let initialScore = segments.length;
          if (segments.some(isSplat)) {
            initialScore += splatPenalty;
          }
          if (index) {
            initialScore += indexRouteValue;
          }
          return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
        }
        function compareIndexes(a, b) {
          let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
          return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
        }
        function matchRouteBranch(branch, pathname) {
          let {
            routesMeta
          } = branch;
          let matchedParams = {};
          let matchedPathname = "/";
          let matches = [];
          for (let i = 0; i < routesMeta.length; ++i) {
            let meta = routesMeta[i];
            let end = i === routesMeta.length - 1;
            let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
            let match = matchPath({
              path: meta.relativePath,
              caseSensitive: meta.caseSensitive,
              end
            }, remainingPathname);
            if (!match)
              return null;
            Object.assign(matchedParams, match.params);
            let route = meta.route;
            matches.push({
              params: matchedParams,
              pathname: joinPaths([matchedPathname, match.pathname]),
              pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
              route
            });
            if (match.pathnameBase !== "/") {
              matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
            }
          }
          return matches;
        }
        function matchPath(pattern, pathname) {
          if (typeof pattern === "string") {
            pattern = {
              path: pattern,
              caseSensitive: false,
              end: true
            };
          }
          let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
          let match = pathname.match(matcher);
          if (!match)
            return null;
          let matchedPathname = match[0];
          let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
          let captureGroups = match.slice(1);
          let params = paramNames.reduce((memo, paramName, index) => {
            if (paramName === "*") {
              let splatValue = captureGroups[index] || "";
              pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
            }
            memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
            return memo;
          }, {});
          return {
            params,
            pathname: matchedPathname,
            pathnameBase,
            pattern
          };
        }
        function compilePath(path, caseSensitive, end) {
          if (caseSensitive === void 0) {
            caseSensitive = false;
          }
          if (end === void 0) {
            end = true;
          }
          warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
          let paramNames = [];
          let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
            paramNames.push(paramName);
            return "([^\\/]+)";
          });
          if (path.endsWith("*")) {
            paramNames.push("*");
            regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
          } else {
            regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
          }
          let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
          return [matcher, paramNames];
        }
        function safelyDecodeURIComponent(value, paramName) {
          try {
            return decodeURIComponent(value);
          } catch (error) {
            warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
            return value;
          }
        }
        function resolvePath(to, fromPathname) {
          if (fromPathname === void 0) {
            fromPathname = "/";
          }
          let {
            pathname: toPathname,
            search = "",
            hash = ""
          } = typeof to === "string" ? history.parsePath(to) : to;
          let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
          return {
            pathname,
            search: normalizeSearch(search),
            hash: normalizeHash(hash)
          };
        }
        function resolvePathname(relativePath, fromPathname) {
          let segments = fromPathname.replace(/\/+$/, "").split("/");
          let relativeSegments = relativePath.split("/");
          relativeSegments.forEach((segment) => {
            if (segment === "..") {
              if (segments.length > 1)
                segments.pop();
            } else if (segment !== ".") {
              segments.push(segment);
            }
          });
          return segments.length > 1 ? segments.join("/") : "/";
        }
        function resolveTo(toArg, routePathnames, locationPathname) {
          let to = typeof toArg === "string" ? history.parsePath(toArg) : toArg;
          let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
          let from;
          if (toPathname == null) {
            from = locationPathname;
          } else {
            let routePathnameIndex = routePathnames.length - 1;
            if (toPathname.startsWith("..")) {
              let toSegments = toPathname.split("/");
              while (toSegments[0] === "..") {
                toSegments.shift();
                routePathnameIndex -= 1;
              }
              to.pathname = toSegments.join("/");
            }
            from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
          }
          let path = resolvePath(to, from);
          if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
            path.pathname += "/";
          }
          return path;
        }
        function getToPathname(to) {
          return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? history.parsePath(to).pathname : to.pathname;
        }
        function stripBasename(pathname, basename) {
          if (basename === "/")
            return pathname;
          if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
            return null;
          }
          let nextChar = pathname.charAt(basename.length);
          if (nextChar && nextChar !== "/") {
            return null;
          }
          return pathname.slice(basename.length) || "/";
        }
        const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
        const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
        const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
        const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
        function useHref(to) {
          !useInRouterContext() ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : void 0;
          let {
            basename,
            navigator
          } = React4.useContext(NavigationContext);
          let {
            hash,
            pathname,
            search
          } = useResolvedPath(to);
          let joinedPathname = pathname;
          if (basename !== "/") {
            let toPathname = getToPathname(to);
            let endsWithSlash = toPathname != null && toPathname.endsWith("/");
            joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
          }
          return navigator.createHref({
            pathname: joinedPathname,
            search,
            hash
          });
        }
        function useInRouterContext() {
          return React4.useContext(LocationContext) != null;
        }
        function useLocation2() {
          !useInRouterContext() ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : void 0;
          return React4.useContext(LocationContext).location;
        }
        function useNavigationType() {
          return React4.useContext(LocationContext).navigationType;
        }
        function useMatch(pattern) {
          !useInRouterContext() ? invariant(false, "useMatch() may be used only in the context of a <Router> component.") : void 0;
          let {
            pathname
          } = useLocation2();
          return React4.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
        }
        function useNavigate() {
          !useInRouterContext() ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : void 0;
          let {
            basename,
            navigator
          } = React4.useContext(NavigationContext);
          let {
            matches
          } = React4.useContext(RouteContext);
          let {
            pathname: locationPathname
          } = useLocation2();
          let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
          let activeRef = React4.useRef(false);
          React4.useEffect(() => {
            activeRef.current = true;
          });
          let navigate = React4.useCallback(function(to, options) {
            if (options === void 0) {
              options = {};
            }
            warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.");
            if (!activeRef.current)
              return;
            if (typeof to === "number") {
              navigator.go(to);
              return;
            }
            let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
            if (basename !== "/") {
              path.pathname = joinPaths([basename, path.pathname]);
            }
            (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
          }, [basename, navigator, routePathnamesJson, locationPathname]);
          return navigate;
        }
        const OutletContext = /* @__PURE__ */ React4.createContext(null);
        function useOutletContext() {
          return React4.useContext(OutletContext);
        }
        function useOutlet(context) {
          let outlet = React4.useContext(RouteContext).outlet;
          if (outlet) {
            return /* @__PURE__ */ React4.createElement(OutletContext.Provider, {
              value: context
            }, outlet);
          }
          return outlet;
        }
        function useParams() {
          let {
            matches
          } = React4.useContext(RouteContext);
          let routeMatch = matches[matches.length - 1];
          return routeMatch ? routeMatch.params : {};
        }
        function useResolvedPath(to) {
          let {
            matches
          } = React4.useContext(RouteContext);
          let {
            pathname: locationPathname
          } = useLocation2();
          let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
          return React4.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
        }
        function useRoutes(routes, locationArg) {
          !useInRouterContext() ? invariant(false, "useRoutes() may be used only in the context of a <Router> component.") : void 0;
          let {
            matches: parentMatches
          } = React4.useContext(RouteContext);
          let routeMatch = parentMatches[parentMatches.length - 1];
          let parentParams = routeMatch ? routeMatch.params : {};
          let parentPathname = routeMatch ? routeMatch.pathname : "/";
          let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
          let parentRoute = routeMatch && routeMatch.route;
          {
            let parentPath = parentRoute && parentRoute.path || "";
            warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
          }
          let locationFromContext = useLocation2();
          let location;
          if (locationArg) {
            var _parsedLocationArg$pa;
            let parsedLocationArg = typeof locationArg === "string" ? history.parsePath(locationArg) : locationArg;
            !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : void 0;
            location = parsedLocationArg;
          } else {
            location = locationFromContext;
          }
          let pathname = location.pathname || "/";
          let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
          let matches = matchRoutes(routes, {
            pathname: remainingPathname
          });
          {
            warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ');
            warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
          }
          return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: joinPaths([parentPathnameBase, match.pathname]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
          })), parentMatches);
        }
        function _renderMatches(matches, parentMatches) {
          if (parentMatches === void 0) {
            parentMatches = [];
          }
          if (matches == null)
            return null;
          return matches.reduceRight((outlet, match, index) => {
            return /* @__PURE__ */ React4.createElement(RouteContext.Provider, {
              children: match.route.element !== void 0 ? match.route.element : outlet,
              value: {
                outlet,
                matches: parentMatches.concat(matches.slice(0, index + 1))
              }
            });
          }, null);
        }
        function MemoryRouter(_ref) {
          let {
            basename,
            children,
            initialEntries,
            initialIndex
          } = _ref;
          let historyRef = React4.useRef();
          if (historyRef.current == null) {
            historyRef.current = history.createMemoryHistory({
              initialEntries,
              initialIndex
            });
          }
          let history$1 = historyRef.current;
          let [state, setState] = React4.useState({
            action: history$1.action,
            location: history$1.location
          });
          React4.useLayoutEffect(() => history$1.listen(setState), [history$1]);
          return /* @__PURE__ */ React4.createElement(Router, {
            basename,
            children,
            location: state.location,
            navigationType: state.action,
            navigator: history$1
          });
        }
        function Navigate(_ref2) {
          let {
            to,
            replace,
            state
          } = _ref2;
          !useInRouterContext() ? invariant(false, "<Navigate> may be used only in the context of a <Router> component.") : void 0;
          warning(!React4.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
          let navigate = useNavigate();
          React4.useEffect(() => {
            navigate(to, {
              replace,
              state
            });
          });
          return null;
        }
        function Outlet(props) {
          return useOutlet(props.context);
        }
        function Route2(_props) {
          invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
        }
        function Router(_ref3) {
          let {
            basename: basenameProp = "/",
            children = null,
            location: locationProp,
            navigationType = history.Action.Pop,
            navigator,
            static: staticProp = false
          } = _ref3;
          !!useInRouterContext() ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : void 0;
          let basename = normalizePathname(basenameProp);
          let navigationContext = React4.useMemo(() => ({
            basename,
            navigator,
            static: staticProp
          }), [basename, navigator, staticProp]);
          if (typeof locationProp === "string") {
            locationProp = history.parsePath(locationProp);
          }
          let {
            pathname = "/",
            search = "",
            hash = "",
            state = null,
            key = "default"
          } = locationProp;
          let location = React4.useMemo(() => {
            let trailingPathname = stripBasename(pathname, basename);
            if (trailingPathname == null) {
              return null;
            }
            return {
              pathname: trailingPathname,
              search,
              hash,
              state,
              key
            };
          }, [basename, pathname, search, hash, state, key]);
          warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.");
          if (location == null) {
            return null;
          }
          return /* @__PURE__ */ React4.createElement(NavigationContext.Provider, {
            value: navigationContext
          }, /* @__PURE__ */ React4.createElement(LocationContext.Provider, {
            children,
            value: {
              location,
              navigationType
            }
          }));
        }
        function Routes2(_ref4) {
          let {
            children,
            location
          } = _ref4;
          return useRoutes(createRoutesFromChildren(children), location);
        }
        function createRoutesFromChildren(children) {
          let routes = [];
          React4.Children.forEach(children, (element) => {
            if (!/* @__PURE__ */ React4.isValidElement(element)) {
              return;
            }
            if (element.type === React4.Fragment) {
              routes.push.apply(routes, createRoutesFromChildren(element.props.children));
              return;
            }
            !(element.type === Route2) ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : void 0;
            let route = {
              caseSensitive: element.props.caseSensitive,
              element: element.props.element,
              index: element.props.index,
              path: element.props.path
            };
            if (element.props.children) {
              route.children = createRoutesFromChildren(element.props.children);
            }
            routes.push(route);
          });
          return routes;
        }
        function renderMatches(matches) {
          return _renderMatches(matches);
        }
        Object.defineProperty(exports2, "NavigationType", {
          enumerable: true,
          get: function() {
            return history.Action;
          }
        });
        Object.defineProperty(exports2, "createPath", {
          enumerable: true,
          get: function() {
            return history.createPath;
          }
        });
        Object.defineProperty(exports2, "parsePath", {
          enumerable: true,
          get: function() {
            return history.parsePath;
          }
        });
        exports2.MemoryRouter = MemoryRouter;
        exports2.Navigate = Navigate;
        exports2.Outlet = Outlet;
        exports2.Route = Route2;
        exports2.Router = Router;
        exports2.Routes = Routes2;
        exports2.UNSAFE_LocationContext = LocationContext;
        exports2.UNSAFE_NavigationContext = NavigationContext;
        exports2.UNSAFE_RouteContext = RouteContext;
        exports2.createRoutesFromChildren = createRoutesFromChildren;
        exports2.generatePath = generatePath;
        exports2.matchPath = matchPath;
        exports2.matchRoutes = matchRoutes;
        exports2.renderMatches = renderMatches;
        exports2.resolvePath = resolvePath;
        exports2.useHref = useHref;
        exports2.useInRouterContext = useInRouterContext;
        exports2.useLocation = useLocation2;
        exports2.useMatch = useMatch;
        exports2.useNavigate = useNavigate;
        exports2.useNavigationType = useNavigationType;
        exports2.useOutlet = useOutlet;
        exports2.useOutletContext = useOutletContext;
        exports2.useParams = useParams;
        exports2.useResolvedPath = useResolvedPath;
        exports2.useRoutes = useRoutes;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // ../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/main.js
  var require_main2 = __commonJS({
    "../../node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/main.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_router_development();
      }
    }
  });

  // ../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/umd/react-router-dom.development.js
  var require_react_router_dom_development = __commonJS({
    "../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/umd/react-router-dom.development.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react(), require_main(), require_main2()) : typeof define === "function" && define.amd ? define(["exports", "react", "history", "react-router"], factory) : (global = global || self, factory(global.ReactRouterDOM = {}, global.React, global.HistoryLibrary, global.ReactRouter));
      })(exports, function(exports2, React4, history, reactRouter) {
        "use strict";
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null)
            return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0)
              continue;
            target[key] = source[key];
          }
          return target;
        }
        const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
        function warning(cond, message) {
          if (!cond) {
            if (typeof console !== "undefined")
              console.warn(message);
            try {
              throw new Error(message);
            } catch (e) {
            }
          }
        }
        function BrowserRouter(_ref) {
          let {
            basename,
            children,
            window
          } = _ref;
          let historyRef = React4.useRef();
          if (historyRef.current == null) {
            historyRef.current = history.createBrowserHistory({
              window
            });
          }
          let history$1 = historyRef.current;
          let [state, setState] = React4.useState({
            action: history$1.action,
            location: history$1.location
          });
          React4.useLayoutEffect(() => history$1.listen(setState), [history$1]);
          return /* @__PURE__ */ React4.createElement(reactRouter.Router, {
            basename,
            children,
            location: state.location,
            navigationType: state.action,
            navigator: history$1
          });
        }
        function HashRouter2(_ref2) {
          let {
            basename,
            children,
            window
          } = _ref2;
          let historyRef = React4.useRef();
          if (historyRef.current == null) {
            historyRef.current = history.createHashHistory({
              window
            });
          }
          let history$1 = historyRef.current;
          let [state, setState] = React4.useState({
            action: history$1.action,
            location: history$1.location
          });
          React4.useLayoutEffect(() => history$1.listen(setState), [history$1]);
          return /* @__PURE__ */ React4.createElement(reactRouter.Router, {
            basename,
            children,
            location: state.location,
            navigationType: state.action,
            navigator: history$1
          });
        }
        function HistoryRouter(_ref3) {
          let {
            basename,
            children,
            history: history2
          } = _ref3;
          const [state, setState] = React4.useState({
            action: history2.action,
            location: history2.location
          });
          React4.useLayoutEffect(() => history2.listen(setState), [history2]);
          return /* @__PURE__ */ React4.createElement(reactRouter.Router, {
            basename,
            children,
            location: state.location,
            navigationType: state.action,
            navigator: history2
          });
        }
        {
          HistoryRouter.displayName = "unstable_HistoryRouter";
        }
        function isModifiedEvent(event) {
          return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
        }
        const Link3 = /* @__PURE__ */ React4.forwardRef(function LinkWithRef(_ref4, ref) {
          let {
            onClick,
            reloadDocument,
            replace = false,
            state,
            target,
            to
          } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
          let href = reactRouter.useHref(to);
          let internalOnClick = useLinkClickHandler(to, {
            replace,
            state,
            target
          });
          function handleClick(event) {
            if (onClick)
              onClick(event);
            if (!event.defaultPrevented && !reloadDocument) {
              internalOnClick(event);
            }
          }
          return /* @__PURE__ */ React4.createElement("a", _extends({}, rest, {
            href,
            onClick: handleClick,
            ref,
            target
          }));
        });
        {
          Link3.displayName = "Link";
        }
        const NavLink = /* @__PURE__ */ React4.forwardRef(function NavLinkWithRef(_ref5, ref) {
          let {
            "aria-current": ariaCurrentProp = "page",
            caseSensitive = false,
            className: classNameProp = "",
            end = false,
            style: styleProp,
            to,
            children
          } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
          let location = reactRouter.useLocation();
          let path = reactRouter.useResolvedPath(to);
          let locationPathname = location.pathname;
          let toPathname = path.pathname;
          if (!caseSensitive) {
            locationPathname = locationPathname.toLowerCase();
            toPathname = toPathname.toLowerCase();
          }
          let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
          let ariaCurrent = isActive ? ariaCurrentProp : void 0;
          let className;
          if (typeof classNameProp === "function") {
            className = classNameProp({
              isActive
            });
          } else {
            className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
          }
          let style = typeof styleProp === "function" ? styleProp({
            isActive
          }) : styleProp;
          return /* @__PURE__ */ React4.createElement(Link3, _extends({}, rest, {
            "aria-current": ariaCurrent,
            className,
            ref,
            style,
            to
          }), typeof children === "function" ? children({
            isActive
          }) : children);
        });
        {
          NavLink.displayName = "NavLink";
        }
        function useLinkClickHandler(to, _temp) {
          let {
            target,
            replace: replaceProp,
            state
          } = _temp === void 0 ? {} : _temp;
          let navigate = reactRouter.useNavigate();
          let location = reactRouter.useLocation();
          let path = reactRouter.useResolvedPath(to);
          return React4.useCallback((event) => {
            if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
              event.preventDefault();
              let replace = !!replaceProp || reactRouter.createPath(location) === reactRouter.createPath(path);
              navigate(to, {
                replace,
                state
              });
            }
          }, [location, navigate, path, replaceProp, state, target, to]);
        }
        function useSearchParams(defaultInit) {
          warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
          let defaultSearchParamsRef = React4.useRef(createSearchParams(defaultInit));
          let location = reactRouter.useLocation();
          let searchParams = React4.useMemo(() => {
            let searchParams2 = createSearchParams(location.search);
            for (let key of defaultSearchParamsRef.current.keys()) {
              if (!searchParams2.has(key)) {
                defaultSearchParamsRef.current.getAll(key).forEach((value) => {
                  searchParams2.append(key, value);
                });
              }
            }
            return searchParams2;
          }, [location.search]);
          let navigate = reactRouter.useNavigate();
          let setSearchParams = React4.useCallback((nextInit, navigateOptions) => {
            navigate("?" + createSearchParams(nextInit), navigateOptions);
          }, [navigate]);
          return [searchParams, setSearchParams];
        }
        function createSearchParams(init) {
          if (init === void 0) {
            init = "";
          }
          return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
            let value = init[key];
            return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
          }, []));
        }
        Object.defineProperty(exports2, "MemoryRouter", {
          enumerable: true,
          get: function() {
            return reactRouter.MemoryRouter;
          }
        });
        Object.defineProperty(exports2, "Navigate", {
          enumerable: true,
          get: function() {
            return reactRouter.Navigate;
          }
        });
        Object.defineProperty(exports2, "NavigationType", {
          enumerable: true,
          get: function() {
            return reactRouter.NavigationType;
          }
        });
        Object.defineProperty(exports2, "Outlet", {
          enumerable: true,
          get: function() {
            return reactRouter.Outlet;
          }
        });
        Object.defineProperty(exports2, "Route", {
          enumerable: true,
          get: function() {
            return reactRouter.Route;
          }
        });
        Object.defineProperty(exports2, "Router", {
          enumerable: true,
          get: function() {
            return reactRouter.Router;
          }
        });
        Object.defineProperty(exports2, "Routes", {
          enumerable: true,
          get: function() {
            return reactRouter.Routes;
          }
        });
        Object.defineProperty(exports2, "UNSAFE_LocationContext", {
          enumerable: true,
          get: function() {
            return reactRouter.UNSAFE_LocationContext;
          }
        });
        Object.defineProperty(exports2, "UNSAFE_NavigationContext", {
          enumerable: true,
          get: function() {
            return reactRouter.UNSAFE_NavigationContext;
          }
        });
        Object.defineProperty(exports2, "UNSAFE_RouteContext", {
          enumerable: true,
          get: function() {
            return reactRouter.UNSAFE_RouteContext;
          }
        });
        Object.defineProperty(exports2, "createPath", {
          enumerable: true,
          get: function() {
            return reactRouter.createPath;
          }
        });
        Object.defineProperty(exports2, "createRoutesFromChildren", {
          enumerable: true,
          get: function() {
            return reactRouter.createRoutesFromChildren;
          }
        });
        Object.defineProperty(exports2, "generatePath", {
          enumerable: true,
          get: function() {
            return reactRouter.generatePath;
          }
        });
        Object.defineProperty(exports2, "matchPath", {
          enumerable: true,
          get: function() {
            return reactRouter.matchPath;
          }
        });
        Object.defineProperty(exports2, "matchRoutes", {
          enumerable: true,
          get: function() {
            return reactRouter.matchRoutes;
          }
        });
        Object.defineProperty(exports2, "parsePath", {
          enumerable: true,
          get: function() {
            return reactRouter.parsePath;
          }
        });
        Object.defineProperty(exports2, "renderMatches", {
          enumerable: true,
          get: function() {
            return reactRouter.renderMatches;
          }
        });
        Object.defineProperty(exports2, "resolvePath", {
          enumerable: true,
          get: function() {
            return reactRouter.resolvePath;
          }
        });
        Object.defineProperty(exports2, "useHref", {
          enumerable: true,
          get: function() {
            return reactRouter.useHref;
          }
        });
        Object.defineProperty(exports2, "useInRouterContext", {
          enumerable: true,
          get: function() {
            return reactRouter.useInRouterContext;
          }
        });
        Object.defineProperty(exports2, "useLocation", {
          enumerable: true,
          get: function() {
            return reactRouter.useLocation;
          }
        });
        Object.defineProperty(exports2, "useMatch", {
          enumerable: true,
          get: function() {
            return reactRouter.useMatch;
          }
        });
        Object.defineProperty(exports2, "useNavigate", {
          enumerable: true,
          get: function() {
            return reactRouter.useNavigate;
          }
        });
        Object.defineProperty(exports2, "useNavigationType", {
          enumerable: true,
          get: function() {
            return reactRouter.useNavigationType;
          }
        });
        Object.defineProperty(exports2, "useOutlet", {
          enumerable: true,
          get: function() {
            return reactRouter.useOutlet;
          }
        });
        Object.defineProperty(exports2, "useOutletContext", {
          enumerable: true,
          get: function() {
            return reactRouter.useOutletContext;
          }
        });
        Object.defineProperty(exports2, "useParams", {
          enumerable: true,
          get: function() {
            return reactRouter.useParams;
          }
        });
        Object.defineProperty(exports2, "useResolvedPath", {
          enumerable: true,
          get: function() {
            return reactRouter.useResolvedPath;
          }
        });
        Object.defineProperty(exports2, "useRoutes", {
          enumerable: true,
          get: function() {
            return reactRouter.useRoutes;
          }
        });
        exports2.BrowserRouter = BrowserRouter;
        exports2.HashRouter = HashRouter2;
        exports2.Link = Link3;
        exports2.NavLink = NavLink;
        exports2.createSearchParams = createSearchParams;
        exports2.unstable_HistoryRouter = HistoryRouter;
        exports2.useLinkClickHandler = useLinkClickHandler;
        exports2.useSearchParams = useSearchParams;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // ../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/main.js
  var require_main3 = __commonJS({
    "../../node_modules/.pnpm/react-router-dom@6.3.0_react-dom@18.1.0+react@18.1.0/node_modules/react-router-dom/main.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_router_dom_development();
      }
    }
  });

  // ../../node_modules/.pnpm/react@18.1.0/node_modules/react/cjs/react-jsx-runtime.development.js
  var require_react_jsx_runtime_development = __commonJS({
    "../../node_modules/.pnpm/react@18.1.0/node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var React4 = require_react();
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var REACT_ELEMENT_TYPE = Symbol.for("react.element");
          var REACT_PORTAL_TYPE = Symbol.for("react.portal");
          var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
          var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
          var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
          var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
          var REACT_CONTEXT_TYPE = Symbol.for("react.context");
          var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
          var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
          var REACT_MEMO_TYPE = Symbol.for("react.memo");
          var REACT_LAZY_TYPE = Symbol.for("react.lazy");
          var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactSharedInternals = React4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function error(format) {
            {
              {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning("error", format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function(item) {
                return String(item);
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
          }
          function isValidElementType(type) {
            if (typeof type === "string" || typeof type === "function") {
              return true;
            }
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
              return true;
            }
            if (typeof type === "object" && type !== null) {
              if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                return true;
              }
            }
            return false;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || "";
            return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || "Context";
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + ".Consumer";
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + ".Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || "Memo";
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var assign = Object.assign;
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {
          }
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog
                  }),
                  info: assign({}, props, {
                    value: prevInfo
                  }),
                  warn: assign({}, props, {
                    value: prevWarn
                  }),
                  error: assign({}, props, {
                    value: prevError
                  }),
                  group: assign({}, props, {
                    value: prevGroup
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd
                  })
                });
              }
              if (disabledDepth < 0) {
                error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
              }
            }
          }
          var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = match && match[1] || "";
                }
              }
              return "\n" + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return "";
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher.current;
              ReactCurrentDispatcher.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function() {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === "string") {
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                          if (fn.displayName && _frame.includes("<anonymous>")) {
                            _frame = _frame.replace("<anonymous>", fn.displayName);
                          }
                          {
                            if (typeof fn === "function") {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : "";
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
            {
              if (typeof fn === "function") {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return "";
            }
            if (typeof type === "function") {
              {
                return describeNativeComponentFrame(type, shouldConstruct(type));
              }
            }
            if (typeof type === "string") {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {
                  }
                }
              }
            }
            return "";
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== "function") {
                      var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                      err.name = "Invariant Violation";
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                    setCurrentlyValidatingElement(null);
                  }
                  if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error("Failed %s type: %s", location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
              var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return "" + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                return testStringCoercion(value);
              }
            }
          }
          var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown;
          var specialPropRefWarningShown;
          var didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function warnIfStringRefCannotBeAutoConverted(config, self2) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
                var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          function defineKeyPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingKey = function() {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingKey.isReactWarning = true;
              Object.defineProperty(props, "key", {
                get: warnAboutAccessingKey,
                configurable: true
              });
            }
          }
          function defineRefPropWarningGetter(props, displayName) {
            {
              var warnAboutAccessingRef = function() {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                }
              };
              warnAboutAccessingRef.isReactWarning = true;
              Object.defineProperty(props, "ref", {
                get: warnAboutAccessingRef,
                configurable: true
              });
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props) {
            var element = {
              $$typeof: REACT_ELEMENT_TYPE,
              type,
              key,
              ref,
              props,
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function jsxDEV(type, config, maybeKey, source, self2) {
            {
              var propName;
              var props = {};
              var key = null;
              var ref = null;
              if (maybeKey !== void 0) {
                {
                  checkKeyStringCoercion(maybeKey);
                }
                key = "" + maybeKey;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = "" + config.key;
              }
              if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config, self2);
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
              if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for (propName in defaultProps) {
                  if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                  }
                }
              }
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
              return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
            }
          }
          var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
          var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function isValidElement(object) {
            {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
          }
          function getDeclarationErrorAddendum() {
            {
              if (ReactCurrentOwner$1.current) {
                var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
                if (name) {
                  return "\n\nCheck the render method of `" + name + "`.";
                }
              }
              return "";
            }
          }
          function getSourceInfoErrorAddendum(source) {
            {
              if (source !== void 0) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                var lineNumber = source.lineNumber;
                return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
              }
              return "";
            }
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            {
              var info = getDeclarationErrorAddendum();
              if (!info) {
                var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                  info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
              }
              return info;
            }
          }
          function validateExplicitKey(element, parentType) {
            {
              if (!element._store || element._store.validated || element.key != null) {
                return;
              }
              element._store.validated = true;
              var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
              if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
              }
              ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
              var childOwner = "";
              if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
              }
              setCurrentlyValidatingElement$1(element);
              error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            {
              if (typeof node !== "object") {
                return;
              }
              if (isArray(node)) {
                for (var i = 0; i < node.length; i++) {
                  var child = node[i];
                  if (isValidElement(child)) {
                    validateExplicitKey(child, parentType);
                  }
                }
              } else if (isValidElement(node)) {
                if (node._store) {
                  node._store.validated = true;
                }
              } else if (node) {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === "function") {
                  if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while (!(step = iterator.next()).done) {
                      if (isValidElement(step.value)) {
                        validateExplicitKey(step.value, parentType);
                      }
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, "prop", name, element);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  setCurrentlyValidatingElement$1(fragment);
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
            {
              var validType = isValidElementType(type);
              if (!validType) {
                var info = "";
                if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                  info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendum(source);
                if (sourceInfo) {
                  info += sourceInfo;
                } else {
                  info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                  typeString = "null";
                } else if (isArray(type)) {
                  typeString = "array";
                } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                  typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                  info = " Did you accidentally export a JSX literal instead of a component?";
                } else {
                  typeString = typeof type;
                }
                error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
              var element = jsxDEV(type, props, key, source, self2);
              if (element == null) {
                return element;
              }
              if (validType) {
                var children = props.children;
                if (children !== void 0) {
                  if (isStaticChildren) {
                    if (isArray(children)) {
                      for (var i = 0; i < children.length; i++) {
                        validateChildKeys(children[i], type);
                      }
                      if (Object.freeze) {
                        Object.freeze(children);
                      }
                    } else {
                      error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    }
                  } else {
                    validateChildKeys(children, type);
                  }
                }
              }
              if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
              } else {
                validatePropTypes(element);
              }
              return element;
            }
          }
          function jsxWithValidationStatic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, true);
            }
          }
          function jsxWithValidationDynamic(type, props, key) {
            {
              return jsxWithValidation(type, props, key, false);
            }
          }
          var jsx = jsxWithValidationDynamic;
          var jsxs = jsxWithValidationStatic;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.jsx = jsx;
          exports.jsxs = jsxs;
        })();
      }
    }
  });

  // ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_jsx_runtime_development();
      }
    }
  });

  // ../../packages/keepalive/lib/index.js
  var require_lib = __commonJS({
    "../../packages/keepalive/lib/index.js"(exports) {
      "use strict";
      var __rest = exports && exports.__rest || function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
      var jsx_runtime_1 = require_jsx_runtime();
      var react_1 = require_react();
      var react_router_dom_1 = require_main3();
      exports.KeepAliveContext = (0, react_1.createContext)({
        keepalive: [],
        keepElements: {}
      });
      var isKeepPath = (aliveList, path) => {
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
        return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [Object.entries(keepElements.current).map(([pathname, element2]) => (0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden auto"
        }, className: "rumtime-keep-alive-layout", hidden: !(0, react_router_dom_1.matchPath)(location.pathname, pathname) }, { children: element2 }), pathname)), (0, jsx_runtime_1.jsx)("div", Object.assign({ hidden: isKeep, style: {
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden auto"
        }, className: "rumtime-keep-alive-layout-no" }, { children: !isKeep && element }))] });
      }
      exports.useKeepOutlets = useKeepOutlets;
      var KeepAliveLayout2 = (props) => {
        const { keepalive } = props, other = __rest(props, ["keepalive"]);
        const keepElements = (0, react_1.useRef)({});
        function dropByCacheKey(path) {
          keepElements.current[path] = null;
        }
        return (0, jsx_runtime_1.jsx)(exports.KeepAliveContext.Provider, Object.assign({ value: { keepalive, keepElements, dropByCacheKey } }, other));
      };
      exports.default = KeepAliveLayout2;
    }
  });

  // node_modules/.solei/src/index.tsx
  var import_react3 = __toESM(require_react());
  var import_react_router_dom3 = __toESM(require_main3());
  var import_keepalive2 = __toESM(require_lib());

  // src/pages/home.tsx
  var import_react = __toESM(require_react());
  var import_react_router_dom = __toESM(require_main3());

  // style-helper:__style_helper__
  function injectStyle(text) {
    if (typeof document !== "undefined") {
      var style = document.createElement("style");
      var node = document.createTextNode(text);
      style.appendChild(node);
      document.head.appendChild(style);
    }
  }

  // style-content:/Users/qitianhang/Desktop/mianshi/21days/soleicli/examples/app/src/pages/home.css
  var home_default = ".solei-home{font-size:24px}\n";

  // style-stub:/Users/qitianhang/Desktop/mianshi/21days/soleicli/examples/app/src/pages/home.css
  injectStyle(home_default);

  // src/pages/home.tsx
  var Hello = () => {
    const [text, setText] = (0, import_react.useState)("Hello");
    const [count, setCount] = (0, import_react.useState)(0);
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("p", {
      onClick: () => {
        setText("Hi!");
      }
    }, text), /* @__PURE__ */ import_react.default.createElement("p", {
      className: "solei-home"
    }, count), /* @__PURE__ */ import_react.default.createElement("p", null, /* @__PURE__ */ import_react.default.createElement("button", {
      onClick: () => setCount((count2) => count2 + 1)
    }, "Click Me! Add!")), /* @__PURE__ */ import_react.default.createElement(import_react_router_dom.Link, {
      to: "/users"
    }, "go to Users"));
  };
  var home_default2 = Hello;

  // src/pages/users.tsx
  var import_react2 = __toESM(require_react());
  var import_react_router_dom2 = __toESM(require_main3());
  var import_keepalive = __toESM(require_lib());
  var Users = () => {
    const [count, setCount] = (0, import_react2.useState)(0);
    const { pathname } = (0, import_react_router_dom2.useLocation)();
    const { dropByCacheKey } = (0, import_react2.useContext)(import_keepalive.KeepAliveContext);
    return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, /* @__PURE__ */ import_react2.default.createElement("p", null, " Users "), /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "malita-users"
    }, count), /* @__PURE__ */ import_react2.default.createElement("p", null, /* @__PURE__ */ import_react2.default.createElement("button", {
      onClick: () => setCount((count2) => count2 + 1)
    }, "Click Me! Add!")), /* @__PURE__ */ import_react2.default.createElement("p", null, /* @__PURE__ */ import_react2.default.createElement("button", {
      onClick: () => dropByCacheKey(pathname)
    }, "Click Me! Clear Cache!")), /* @__PURE__ */ import_react2.default.createElement(import_react_router_dom2.Link, {
      to: "/"
    }, "go Home"));
  };
  var users_default = Users;

  // node_modules/.solei/src/index.tsx
  var App = () => {
    return /* @__PURE__ */ import_react3.default.createElement(import_keepalive2.default, {
      keepalive: [/./]
    }, /* @__PURE__ */ import_react3.default.createElement(import_react_router_dom3.HashRouter, null, /* @__PURE__ */ import_react3.default.createElement(import_react_router_dom3.Routes, null, /* @__PURE__ */ import_react3.default.createElement(import_react_router_dom3.Route, {
      path: "/",
      element: /* @__PURE__ */ import_react3.default.createElement(home_default2, null)
    }), /* @__PURE__ */ import_react3.default.createElement(import_react_router_dom3.Route, {
      path: "/users",
      element: /* @__PURE__ */ import_react3.default.createElement(users_default, null)
    }))));
  };
  var root = ReactDOM.createRoot(document.getElementById("malita"));
  root.render(import_react3.default.createElement(App));
})();
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
