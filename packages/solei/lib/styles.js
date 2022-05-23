var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js
var require_picocolors = __commonJS({
  "../../node_modules/.pnpm/picocolors@1.0.0/node_modules/picocolors/picocolors.js"(exports, module2) {
    var tty = require("tty");
    var isColorSupported = !("NO_COLOR" in process.env || process.argv.includes("--no-color")) && ("FORCE_COLOR" in process.env || process.argv.includes("--color") || process.platform === "win32" || tty.isatty(1) && process.env.TERM !== "dumb" || "CI" in process.env);
    var formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    var replaceClose = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    var createColors = (enabled = isColorSupported) => ({
      isColorSupported: enabled,
      reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
      bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
      dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
      italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
      underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
      inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
      hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
      strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
      black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
      red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
      green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
      yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
      blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
      magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
      cyan: enabled ? formatter("\x1B[36m", "\x1B[39m") : String,
      white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
      gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
      bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
      bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
      bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
      bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
      bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
      bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
      bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
      bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
    });
    module2.exports = createColors();
    module2.exports.createColors = createColors;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/tokenize.js
var require_tokenize = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/tokenize.js"(exports, module2) {
    "use strict";
    var SINGLE_QUOTE = "'".charCodeAt(0);
    var DOUBLE_QUOTE = '"'.charCodeAt(0);
    var BACKSLASH = "\\".charCodeAt(0);
    var SLASH = "/".charCodeAt(0);
    var NEWLINE = "\n".charCodeAt(0);
    var SPACE = " ".charCodeAt(0);
    var FEED = "\f".charCodeAt(0);
    var TAB = "	".charCodeAt(0);
    var CR = "\r".charCodeAt(0);
    var OPEN_SQUARE = "[".charCodeAt(0);
    var CLOSE_SQUARE = "]".charCodeAt(0);
    var OPEN_PARENTHESES = "(".charCodeAt(0);
    var CLOSE_PARENTHESES = ")".charCodeAt(0);
    var OPEN_CURLY = "{".charCodeAt(0);
    var CLOSE_CURLY = "}".charCodeAt(0);
    var SEMICOLON = ";".charCodeAt(0);
    var ASTERISK = "*".charCodeAt(0);
    var COLON = ":".charCodeAt(0);
    var AT = "@".charCodeAt(0);
    var RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g;
    var RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
    var RE_BAD_BRACKET = /.[\n"'(/\\]/;
    var RE_HEX_ESCAPE = /[\da-f]/i;
    module2.exports = function tokenizer(input, options = {}) {
      let css = input.css.valueOf();
      let ignore = options.ignoreErrors;
      let code, next, quote, content, escape;
      let escaped, escapePos, prev, n, currentToken;
      let length = css.length;
      let pos = 0;
      let buffer = [];
      let returned = [];
      function position() {
        return pos;
      }
      function unclosed(what) {
        throw input.error("Unclosed " + what, pos);
      }
      function endOfFile() {
        return returned.length === 0 && pos >= length;
      }
      function nextToken(opts) {
        if (returned.length)
          return returned.pop();
        if (pos >= length)
          return;
        let ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
        code = css.charCodeAt(pos);
        switch (code) {
          case NEWLINE:
          case SPACE:
          case TAB:
          case CR:
          case FEED: {
            next = pos;
            do {
              next += 1;
              code = css.charCodeAt(next);
            } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
            currentToken = ["space", css.slice(pos, next)];
            pos = next - 1;
            break;
          }
          case OPEN_SQUARE:
          case CLOSE_SQUARE:
          case OPEN_CURLY:
          case CLOSE_CURLY:
          case COLON:
          case SEMICOLON:
          case CLOSE_PARENTHESES: {
            let controlChar = String.fromCharCode(code);
            currentToken = [controlChar, controlChar, pos];
            break;
          }
          case OPEN_PARENTHESES: {
            prev = buffer.length ? buffer.pop()[1] : "";
            n = css.charCodeAt(pos + 1);
            if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
              next = pos;
              do {
                escaped = false;
                next = css.indexOf(")", next + 1);
                if (next === -1) {
                  if (ignore || ignoreUnclosed) {
                    next = pos;
                    break;
                  } else {
                    unclosed("bracket");
                  }
                }
                escapePos = next;
                while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                  escapePos -= 1;
                  escaped = !escaped;
                }
              } while (escaped);
              currentToken = ["brackets", css.slice(pos, next + 1), pos, next];
              pos = next;
            } else {
              next = css.indexOf(")", pos + 1);
              content = css.slice(pos, next + 1);
              if (next === -1 || RE_BAD_BRACKET.test(content)) {
                currentToken = ["(", "(", pos];
              } else {
                currentToken = ["brackets", content, pos, next];
                pos = next;
              }
            }
            break;
          }
          case SINGLE_QUOTE:
          case DOUBLE_QUOTE: {
            quote = code === SINGLE_QUOTE ? "'" : '"';
            next = pos;
            do {
              escaped = false;
              next = css.indexOf(quote, next + 1);
              if (next === -1) {
                if (ignore || ignoreUnclosed) {
                  next = pos + 1;
                  break;
                } else {
                  unclosed("string");
                }
              }
              escapePos = next;
              while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);
            currentToken = ["string", css.slice(pos, next + 1), pos, next];
            pos = next;
            break;
          }
          case AT: {
            RE_AT_END.lastIndex = pos + 1;
            RE_AT_END.test(css);
            if (RE_AT_END.lastIndex === 0) {
              next = css.length - 1;
            } else {
              next = RE_AT_END.lastIndex - 2;
            }
            currentToken = ["at-word", css.slice(pos, next + 1), pos, next];
            pos = next;
            break;
          }
          case BACKSLASH: {
            next = pos;
            escape = true;
            while (css.charCodeAt(next + 1) === BACKSLASH) {
              next += 1;
              escape = !escape;
            }
            code = css.charCodeAt(next + 1);
            if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
              next += 1;
              if (RE_HEX_ESCAPE.test(css.charAt(next))) {
                while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
                  next += 1;
                }
                if (css.charCodeAt(next + 1) === SPACE) {
                  next += 1;
                }
              }
            }
            currentToken = ["word", css.slice(pos, next + 1), pos, next];
            pos = next;
            break;
          }
          default: {
            if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
              next = css.indexOf("*/", pos + 2) + 1;
              if (next === 0) {
                if (ignore || ignoreUnclosed) {
                  next = css.length;
                } else {
                  unclosed("comment");
                }
              }
              currentToken = ["comment", css.slice(pos, next + 1), pos, next];
              pos = next;
            } else {
              RE_WORD_END.lastIndex = pos + 1;
              RE_WORD_END.test(css);
              if (RE_WORD_END.lastIndex === 0) {
                next = css.length - 1;
              } else {
                next = RE_WORD_END.lastIndex - 2;
              }
              currentToken = ["word", css.slice(pos, next + 1), pos, next];
              buffer.push(currentToken);
              pos = next;
            }
            break;
          }
        }
        pos++;
        return currentToken;
      }
      function back(token) {
        returned.push(token);
      }
      return {
        back,
        nextToken,
        endOfFile,
        position
      };
    };
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/terminal-highlight.js
var require_terminal_highlight = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/terminal-highlight.js"(exports, module2) {
    "use strict";
    var pico = require_picocolors();
    var tokenizer = require_tokenize();
    var Input2;
    function registerInput(dependant) {
      Input2 = dependant;
    }
    var HIGHLIGHT_THEME = {
      "brackets": pico.cyan,
      "at-word": pico.cyan,
      "comment": pico.gray,
      "string": pico.green,
      "class": pico.yellow,
      "hash": pico.magenta,
      "call": pico.cyan,
      "(": pico.cyan,
      ")": pico.cyan,
      "{": pico.yellow,
      "}": pico.yellow,
      "[": pico.yellow,
      "]": pico.yellow,
      ":": pico.yellow,
      ";": pico.yellow
    };
    function getTokenType([type, value], processor) {
      if (type === "word") {
        if (value[0] === ".") {
          return "class";
        }
        if (value[0] === "#") {
          return "hash";
        }
      }
      if (!processor.endOfFile()) {
        let next = processor.nextToken();
        processor.back(next);
        if (next[0] === "brackets" || next[0] === "(")
          return "call";
      }
      return type;
    }
    function terminalHighlight(css) {
      let processor = tokenizer(new Input2(css), { ignoreErrors: true });
      let result = "";
      while (!processor.endOfFile()) {
        let token = processor.nextToken();
        let color = HIGHLIGHT_THEME[getTokenType(token, processor)];
        if (color) {
          result += token[1].split(/\r?\n/).map((i) => color(i)).join("\n");
        } else {
          result += token[1];
        }
      }
      return result;
    }
    terminalHighlight.registerInput = registerInput;
    module2.exports = terminalHighlight;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/css-syntax-error.js
var require_css_syntax_error = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/css-syntax-error.js"(exports, module2) {
    "use strict";
    var pico = require_picocolors();
    var terminalHighlight = require_terminal_highlight();
    var CssSyntaxError2 = class extends Error {
      constructor(message, line, column, source, file, plugin2) {
        super(message);
        this.name = "CssSyntaxError";
        this.reason = message;
        if (file) {
          this.file = file;
        }
        if (source) {
          this.source = source;
        }
        if (plugin2) {
          this.plugin = plugin2;
        }
        if (typeof line !== "undefined" && typeof column !== "undefined") {
          if (typeof line === "number") {
            this.line = line;
            this.column = column;
          } else {
            this.line = line.line;
            this.column = line.column;
            this.endLine = column.line;
            this.endColumn = column.column;
          }
        }
        this.setMessage();
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, CssSyntaxError2);
        }
      }
      setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "";
        this.message += this.file ? this.file : "<css input>";
        if (typeof this.line !== "undefined") {
          this.message += ":" + this.line + ":" + this.column;
        }
        this.message += ": " + this.reason;
      }
      showSourceCode(color) {
        if (!this.source)
          return "";
        let css = this.source;
        if (color == null)
          color = pico.isColorSupported;
        if (terminalHighlight) {
          if (color)
            css = terminalHighlight(css);
        }
        let lines = css.split(/\r?\n/);
        let start = Math.max(this.line - 3, 0);
        let end = Math.min(this.line + 2, lines.length);
        let maxWidth = String(end).length;
        let mark, aside;
        if (color) {
          let { bold, red, gray } = pico.createColors(true);
          mark = (text) => bold(red(text));
          aside = (text) => gray(text);
        } else {
          mark = aside = (str) => str;
        }
        return lines.slice(start, end).map((line, index) => {
          let number = start + 1 + index;
          let gutter = " " + (" " + number).slice(-maxWidth) + " | ";
          if (number === this.line) {
            let spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, this.column - 1).replace(/[^\t]/g, " ");
            return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
          }
          return " " + aside(gutter) + line;
        }).join("\n");
      }
      toString() {
        let code = this.showSourceCode();
        if (code) {
          code = "\n\n" + code + "\n";
        }
        return this.name + ": " + this.message + code;
      }
    };
    module2.exports = CssSyntaxError2;
    CssSyntaxError2.default = CssSyntaxError2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/symbols.js
var require_symbols = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/symbols.js"(exports, module2) {
    "use strict";
    module2.exports.isClean = Symbol("isClean");
    module2.exports.my = Symbol("my");
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/stringifier.js
var require_stringifier = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/stringifier.js"(exports, module2) {
    "use strict";
    var DEFAULT_RAW = {
      colon: ": ",
      indent: "    ",
      beforeDecl: "\n",
      beforeRule: "\n",
      beforeOpen: " ",
      beforeClose: "\n",
      beforeComment: "\n",
      after: "\n",
      emptyBody: "",
      commentLeft: " ",
      commentRight: " ",
      semicolon: false
    };
    function capitalize(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
    var Stringifier = class {
      constructor(builder) {
        this.builder = builder;
      }
      stringify(node, semicolon) {
        if (!this[node.type]) {
          throw new Error("Unknown AST node type " + node.type + ". Maybe you need to change PostCSS stringifier.");
        }
        this[node.type](node, semicolon);
      }
      document(node) {
        this.body(node);
      }
      root(node) {
        this.body(node);
        if (node.raws.after)
          this.builder(node.raws.after);
      }
      comment(node) {
        let left = this.raw(node, "left", "commentLeft");
        let right = this.raw(node, "right", "commentRight");
        this.builder("/*" + left + node.text + right + "*/", node);
      }
      decl(node, semicolon) {
        let between = this.raw(node, "between", "colon");
        let string = node.prop + between + this.rawValue(node, "value");
        if (node.important) {
          string += node.raws.important || " !important";
        }
        if (semicolon)
          string += ";";
        this.builder(string, node);
      }
      rule(node) {
        this.block(node, this.rawValue(node, "selector"));
        if (node.raws.ownSemicolon) {
          this.builder(node.raws.ownSemicolon, node, "end");
        }
      }
      atrule(node, semicolon) {
        let name = "@" + node.name;
        let params = node.params ? this.rawValue(node, "params") : "";
        if (typeof node.raws.afterName !== "undefined") {
          name += node.raws.afterName;
        } else if (params) {
          name += " ";
        }
        if (node.nodes) {
          this.block(node, name + params);
        } else {
          let end = (node.raws.between || "") + (semicolon ? ";" : "");
          this.builder(name + params + end, node);
        }
      }
      body(node) {
        let last = node.nodes.length - 1;
        while (last > 0) {
          if (node.nodes[last].type !== "comment")
            break;
          last -= 1;
        }
        let semicolon = this.raw(node, "semicolon");
        for (let i = 0; i < node.nodes.length; i++) {
          let child = node.nodes[i];
          let before = this.raw(child, "before");
          if (before)
            this.builder(before);
          this.stringify(child, last !== i || semicolon);
        }
      }
      block(node, start) {
        let between = this.raw(node, "between", "beforeOpen");
        this.builder(start + between + "{", node, "start");
        let after;
        if (node.nodes && node.nodes.length) {
          this.body(node);
          after = this.raw(node, "after");
        } else {
          after = this.raw(node, "after", "emptyBody");
        }
        if (after)
          this.builder(after);
        this.builder("}", node, "end");
      }
      raw(node, own, detect) {
        let value;
        if (!detect)
          detect = own;
        if (own) {
          value = node.raws[own];
          if (typeof value !== "undefined")
            return value;
        }
        let parent = node.parent;
        if (detect === "before") {
          if (!parent || parent.type === "root" && parent.first === node) {
            return "";
          }
          if (parent && parent.type === "document") {
            return "";
          }
        }
        if (!parent)
          return DEFAULT_RAW[detect];
        let root2 = node.root();
        if (!root2.rawCache)
          root2.rawCache = {};
        if (typeof root2.rawCache[detect] !== "undefined") {
          return root2.rawCache[detect];
        }
        if (detect === "before" || detect === "after") {
          return this.beforeAfter(node, detect);
        } else {
          let method = "raw" + capitalize(detect);
          if (this[method]) {
            value = this[method](root2, node);
          } else {
            root2.walk((i) => {
              value = i.raws[own];
              if (typeof value !== "undefined")
                return false;
            });
          }
        }
        if (typeof value === "undefined")
          value = DEFAULT_RAW[detect];
        root2.rawCache[detect] = value;
        return value;
      }
      rawSemicolon(root2) {
        let value;
        root2.walk((i) => {
          if (i.nodes && i.nodes.length && i.last.type === "decl") {
            value = i.raws.semicolon;
            if (typeof value !== "undefined")
              return false;
          }
        });
        return value;
      }
      rawEmptyBody(root2) {
        let value;
        root2.walk((i) => {
          if (i.nodes && i.nodes.length === 0) {
            value = i.raws.after;
            if (typeof value !== "undefined")
              return false;
          }
        });
        return value;
      }
      rawIndent(root2) {
        if (root2.raws.indent)
          return root2.raws.indent;
        let value;
        root2.walk((i) => {
          let p = i.parent;
          if (p && p !== root2 && p.parent && p.parent === root2) {
            if (typeof i.raws.before !== "undefined") {
              let parts = i.raws.before.split("\n");
              value = parts[parts.length - 1];
              value = value.replace(/\S/g, "");
              return false;
            }
          }
        });
        return value;
      }
      rawBeforeComment(root2, node) {
        let value;
        root2.walkComments((i) => {
          if (typeof i.raws.before !== "undefined") {
            value = i.raws.before;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        });
        if (typeof value === "undefined") {
          value = this.raw(node, null, "beforeDecl");
        } else if (value) {
          value = value.replace(/\S/g, "");
        }
        return value;
      }
      rawBeforeDecl(root2, node) {
        let value;
        root2.walkDecls((i) => {
          if (typeof i.raws.before !== "undefined") {
            value = i.raws.before;
            if (value.includes("\n")) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        });
        if (typeof value === "undefined") {
          value = this.raw(node, null, "beforeRule");
        } else if (value) {
          value = value.replace(/\S/g, "");
        }
        return value;
      }
      rawBeforeRule(root2) {
        let value;
        root2.walk((i) => {
          if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
            if (typeof i.raws.before !== "undefined") {
              value = i.raws.before;
              if (value.includes("\n")) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          }
        });
        if (value)
          value = value.replace(/\S/g, "");
        return value;
      }
      rawBeforeClose(root2) {
        let value;
        root2.walk((i) => {
          if (i.nodes && i.nodes.length > 0) {
            if (typeof i.raws.after !== "undefined") {
              value = i.raws.after;
              if (value.includes("\n")) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          }
        });
        if (value)
          value = value.replace(/\S/g, "");
        return value;
      }
      rawBeforeOpen(root2) {
        let value;
        root2.walk((i) => {
          if (i.type !== "decl") {
            value = i.raws.between;
            if (typeof value !== "undefined")
              return false;
          }
        });
        return value;
      }
      rawColon(root2) {
        let value;
        root2.walkDecls((i) => {
          if (typeof i.raws.between !== "undefined") {
            value = i.raws.between.replace(/[^\s:]/g, "");
            return false;
          }
        });
        return value;
      }
      beforeAfter(node, detect) {
        let value;
        if (node.type === "decl") {
          value = this.raw(node, null, "beforeDecl");
        } else if (node.type === "comment") {
          value = this.raw(node, null, "beforeComment");
        } else if (detect === "before") {
          value = this.raw(node, null, "beforeRule");
        } else {
          value = this.raw(node, null, "beforeClose");
        }
        let buf = node.parent;
        let depth = 0;
        while (buf && buf.type !== "root") {
          depth += 1;
          buf = buf.parent;
        }
        if (value.includes("\n")) {
          let indent = this.raw(node, null, "indent");
          if (indent.length) {
            for (let step = 0; step < depth; step++)
              value += indent;
          }
        }
        return value;
      }
      rawValue(node, prop) {
        let value = node[prop];
        let raw = node.raws[prop];
        if (raw && raw.value === value) {
          return raw.raw;
        }
        return value;
      }
    };
    module2.exports = Stringifier;
    Stringifier.default = Stringifier;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/stringify.js
var require_stringify = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/stringify.js"(exports, module2) {
    "use strict";
    var Stringifier = require_stringifier();
    function stringify2(node, builder) {
      let str = new Stringifier(builder);
      str.stringify(node);
    }
    module2.exports = stringify2;
    stringify2.default = stringify2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/node.js
var require_node = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/node.js"(exports, module2) {
    "use strict";
    var { isClean, my } = require_symbols();
    var CssSyntaxError2 = require_css_syntax_error();
    var Stringifier = require_stringifier();
    var stringify2 = require_stringify();
    function cloneNode(obj, parent) {
      let cloned = new obj.constructor();
      for (let i in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, i)) {
          continue;
        }
        if (i === "proxyCache")
          continue;
        let value = obj[i];
        let type = typeof value;
        if (i === "parent" && type === "object") {
          if (parent)
            cloned[i] = parent;
        } else if (i === "source") {
          cloned[i] = value;
        } else if (Array.isArray(value)) {
          cloned[i] = value.map((j) => cloneNode(j, cloned));
        } else {
          if (type === "object" && value !== null)
            value = cloneNode(value);
          cloned[i] = value;
        }
      }
      return cloned;
    }
    var Node2 = class {
      constructor(defaults = {}) {
        this.raws = {};
        this[isClean] = false;
        this[my] = true;
        for (let name in defaults) {
          if (name === "nodes") {
            this.nodes = [];
            for (let node of defaults[name]) {
              if (typeof node.clone === "function") {
                this.append(node.clone());
              } else {
                this.append(node);
              }
            }
          } else {
            this[name] = defaults[name];
          }
        }
      }
      error(message, opts = {}) {
        if (this.source) {
          let { start, end } = this.rangeBy(opts);
          return this.source.input.error(message, { line: start.line, column: start.column }, { line: end.line, column: end.column }, opts);
        }
        return new CssSyntaxError2(message);
      }
      warn(result, text, opts) {
        let data = { node: this };
        for (let i in opts)
          data[i] = opts[i];
        return result.warn(text, data);
      }
      remove() {
        if (this.parent) {
          this.parent.removeChild(this);
        }
        this.parent = void 0;
        return this;
      }
      toString(stringifier = stringify2) {
        if (stringifier.stringify)
          stringifier = stringifier.stringify;
        let result = "";
        stringifier(this, (i) => {
          result += i;
        });
        return result;
      }
      assign(overrides = {}) {
        for (let name in overrides) {
          this[name] = overrides[name];
        }
        return this;
      }
      clone(overrides = {}) {
        let cloned = cloneNode(this);
        for (let name in overrides) {
          cloned[name] = overrides[name];
        }
        return cloned;
      }
      cloneBefore(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
      }
      cloneAfter(overrides = {}) {
        let cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
      }
      replaceWith(...nodes) {
        if (this.parent) {
          let bookmark = this;
          let foundSelf = false;
          for (let node of nodes) {
            if (node === this) {
              foundSelf = true;
            } else if (foundSelf) {
              this.parent.insertAfter(bookmark, node);
              bookmark = node;
            } else {
              this.parent.insertBefore(bookmark, node);
            }
          }
          if (!foundSelf) {
            this.remove();
          }
        }
        return this;
      }
      next() {
        if (!this.parent)
          return void 0;
        let index = this.parent.index(this);
        return this.parent.nodes[index + 1];
      }
      prev() {
        if (!this.parent)
          return void 0;
        let index = this.parent.index(this);
        return this.parent.nodes[index - 1];
      }
      before(add) {
        this.parent.insertBefore(this, add);
        return this;
      }
      after(add) {
        this.parent.insertAfter(this, add);
        return this;
      }
      root() {
        let result = this;
        while (result.parent && result.parent.type !== "document") {
          result = result.parent;
        }
        return result;
      }
      raw(prop, defaultType) {
        let str = new Stringifier();
        return str.raw(this, prop, defaultType);
      }
      cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween)
          delete this.raws.between;
      }
      toJSON(_, inputs) {
        let fixed = {};
        let emitInputs = inputs == null;
        inputs = inputs || /* @__PURE__ */ new Map();
        let inputsNextIndex = 0;
        for (let name in this) {
          if (!Object.prototype.hasOwnProperty.call(this, name)) {
            continue;
          }
          if (name === "parent" || name === "proxyCache")
            continue;
          let value = this[name];
          if (Array.isArray(value)) {
            fixed[name] = value.map((i) => {
              if (typeof i === "object" && i.toJSON) {
                return i.toJSON(null, inputs);
              } else {
                return i;
              }
            });
          } else if (typeof value === "object" && value.toJSON) {
            fixed[name] = value.toJSON(null, inputs);
          } else if (name === "source") {
            let inputId = inputs.get(value.input);
            if (inputId == null) {
              inputId = inputsNextIndex;
              inputs.set(value.input, inputsNextIndex);
              inputsNextIndex++;
            }
            fixed[name] = {
              inputId,
              start: value.start,
              end: value.end
            };
          } else {
            fixed[name] = value;
          }
        }
        if (emitInputs) {
          fixed.inputs = [...inputs.keys()].map((input) => input.toJSON());
        }
        return fixed;
      }
      positionInside(index) {
        let string = this.toString();
        let column = this.source.start.column;
        let line = this.source.start.line;
        for (let i = 0; i < index; i++) {
          if (string[i] === "\n") {
            column = 1;
            line += 1;
          } else {
            column += 1;
          }
        }
        return { line, column };
      }
      positionBy(opts) {
        let pos = this.source.start;
        if (opts.index) {
          pos = this.positionInside(opts.index);
        } else if (opts.word) {
          let index = this.toString().indexOf(opts.word);
          if (index !== -1)
            pos = this.positionInside(index);
        }
        return pos;
      }
      rangeBy(opts) {
        let start = {
          line: this.source.start.line,
          column: this.source.start.column
        };
        let end = this.source.end ? {
          line: this.source.end.line,
          column: this.source.end.column + 1
        } : {
          line: start.line,
          column: start.column + 1
        };
        if (opts.word) {
          let index = this.toString().indexOf(opts.word);
          if (index !== -1) {
            start = this.positionInside(index);
            end = this.positionInside(index + opts.word.length);
          }
        } else {
          if (opts.start) {
            start = {
              line: opts.start.line,
              column: opts.start.column
            };
          } else if (opts.index) {
            start = this.positionInside(opts.index);
          }
          if (opts.end) {
            end = {
              line: opts.end.line,
              column: opts.end.column
            };
          } else if (opts.endIndex) {
            end = this.positionInside(opts.endIndex);
          } else if (opts.index) {
            end = this.positionInside(opts.index + 1);
          }
        }
        if (end.line < start.line || end.line === start.line && end.column <= start.column) {
          end = { line: start.line, column: start.column + 1 };
        }
        return { start, end };
      }
      getProxyProcessor() {
        return {
          set(node, prop, value) {
            if (node[prop] === value)
              return true;
            node[prop] = value;
            if (prop === "prop" || prop === "value" || prop === "name" || prop === "params" || prop === "important" || prop === "text") {
              node.markDirty();
            }
            return true;
          },
          get(node, prop) {
            if (prop === "proxyOf") {
              return node;
            } else if (prop === "root") {
              return () => node.root().toProxy();
            } else {
              return node[prop];
            }
          }
        };
      }
      toProxy() {
        if (!this.proxyCache) {
          this.proxyCache = new Proxy(this, this.getProxyProcessor());
        }
        return this.proxyCache;
      }
      addToError(error) {
        error.postcssNode = this;
        if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
          let s = this.source;
          error.stack = error.stack.replace(/\n\s{4}at /, `$&${s.input.from}:${s.start.line}:${s.start.column}$&`);
        }
        return error;
      }
      markDirty() {
        if (this[isClean]) {
          this[isClean] = false;
          let next = this;
          while (next = next.parent) {
            next[isClean] = false;
          }
        }
      }
      get proxyOf() {
        return this;
      }
    };
    module2.exports = Node2;
    Node2.default = Node2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/declaration.js
var require_declaration = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/declaration.js"(exports, module2) {
    "use strict";
    var Node2 = require_node();
    var Declaration2 = class extends Node2 {
      constructor(defaults) {
        if (defaults && typeof defaults.value !== "undefined" && typeof defaults.value !== "string") {
          defaults = { ...defaults, value: String(defaults.value) };
        }
        super(defaults);
        this.type = "decl";
      }
      get variable() {
        return this.prop.startsWith("--") || this.prop[0] === "$";
      }
    };
    module2.exports = Declaration2;
    Declaration2.default = Declaration2;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64.js
var require_base64 = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64.js"(exports) {
    var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    exports.encode = function(number) {
      if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
      }
      throw new TypeError("Must be between 0 and 63: " + number);
    };
    exports.decode = function(charCode) {
      var bigA = 65;
      var bigZ = 90;
      var littleA = 97;
      var littleZ = 122;
      var zero = 48;
      var nine = 57;
      var plus = 43;
      var slash = 47;
      var littleOffset = 26;
      var numberOffset = 52;
      if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
      }
      if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
      }
      if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
      }
      if (charCode == plus) {
        return 62;
      }
      if (charCode == slash) {
        return 63;
      }
      return -1;
    };
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64-vlq.js
var require_base64_vlq = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/base64-vlq.js"(exports) {
    var base64 = require_base64();
    var VLQ_BASE_SHIFT = 5;
    var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
    var VLQ_BASE_MASK = VLQ_BASE - 1;
    var VLQ_CONTINUATION_BIT = VLQ_BASE;
    function toVLQSigned(aValue) {
      return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
    }
    function fromVLQSigned(aValue) {
      var isNegative = (aValue & 1) === 1;
      var shifted = aValue >> 1;
      return isNegative ? -shifted : shifted;
    }
    exports.encode = function base64VLQ_encode(aValue) {
      var encoded = "";
      var digit;
      var vlq = toVLQSigned(aValue);
      do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
          digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
      } while (vlq > 0);
      return encoded;
    };
    exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
      var strLen = aStr.length;
      var result = 0;
      var shift = 0;
      var continuation, digit;
      do {
        if (aIndex >= strLen) {
          throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
          throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
      } while (continuation);
      aOutParam.value = fromVLQSigned(result);
      aOutParam.rest = aIndex;
    };
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js
var require_util = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/util.js"(exports) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports.urlGenerate = urlGenerate;
    var MAX_CACHED_INPUTS = 32;
    function lruMemoize(f) {
      var cache = [];
      return function(input) {
        for (var i = 0; i < cache.length; i++) {
          if (cache[i].input === input) {
            var temp = cache[0];
            cache[0] = cache[i];
            cache[i] = temp;
            return cache[0].result;
          }
        }
        var result = f(input);
        cache.unshift({
          input,
          result
        });
        if (cache.length > MAX_CACHED_INPUTS) {
          cache.pop();
        }
        return result;
      };
    }
    var normalize = lruMemoize(function normalize2(aPath) {
      var path2 = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path2 = url.path;
      }
      var isAbsolute = exports.isAbsolute(path2);
      var parts = [];
      var start = 0;
      var i = 0;
      while (true) {
        start = i;
        i = path2.indexOf("/", start);
        if (i === -1) {
          parts.push(path2.slice(start));
          break;
        } else {
          parts.push(path2.slice(start, i));
          while (i < path2.length && path2[i] === "/") {
            i++;
          }
        }
      }
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path2 = parts.join("/");
      if (path2 === "") {
        path2 = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path2;
        return urlGenerate(url);
      }
      return path2;
    });
    exports.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports.join = join;
    exports.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports.relative = relative;
    var supportsNullProto = function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByOriginalPositionsNoSource(mappingA, mappingB, onlyCompareOriginal) {
      var cmp;
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByOriginalPositionsNoSource = compareByOriginalPositionsNoSource;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function compareByGeneratedPositionsDeflatedNoLine(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsDeflatedNoLine = compareByGeneratedPositionsDeflatedNoLine;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index = parsed.path.lastIndexOf("/");
          if (index >= 0) {
            parsed.path = parsed.path.substring(0, index + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports.computeSourceURL = computeSourceURL;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/array-set.js
var require_array_set = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/array-set.js"(exports) {
    var util = require_util();
    var has = Object.prototype.hasOwnProperty;
    var hasNativeMap = typeof Map !== "undefined";
    function ArraySet() {
      this._array = [];
      this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
    }
    ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
      var set = new ArraySet();
      for (var i = 0, len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
      }
      return set;
    };
    ArraySet.prototype.size = function ArraySet_size() {
      return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    };
    ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
      var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
      var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
      var idx = this._array.length;
      if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
      }
      if (!isDuplicate) {
        if (hasNativeMap) {
          this._set.set(aStr, idx);
        } else {
          this._set[sStr] = idx;
        }
      }
    };
    ArraySet.prototype.has = function ArraySet_has(aStr) {
      if (hasNativeMap) {
        return this._set.has(aStr);
      } else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
      }
    };
    ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
      if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
          return idx;
        }
      } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) {
          return this._set[sStr];
        }
      }
      throw new Error('"' + aStr + '" is not in the set.');
    };
    ArraySet.prototype.at = function ArraySet_at(aIdx) {
      if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
      }
      throw new Error("No element indexed by " + aIdx);
    };
    ArraySet.prototype.toArray = function ArraySet_toArray() {
      return this._array.slice();
    };
    exports.ArraySet = ArraySet;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/mapping-list.js
var require_mapping_list = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/mapping-list.js"(exports) {
    var util = require_util();
    function generatedPositionAfter(mappingA, mappingB) {
      var lineA = mappingA.generatedLine;
      var lineB = mappingB.generatedLine;
      var columnA = mappingA.generatedColumn;
      var columnB = mappingB.generatedColumn;
      return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
    }
    function MappingList() {
      this._array = [];
      this._sorted = true;
      this._last = { generatedLine: -1, generatedColumn: 0 };
    }
    MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };
    MappingList.prototype.add = function MappingList_add(aMapping) {
      if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
      } else {
        this._sorted = false;
        this._array.push(aMapping);
      }
    };
    MappingList.prototype.toArray = function MappingList_toArray() {
      if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
      }
      return this._array;
    };
    exports.MappingList = MappingList;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-generator.js
var require_source_map_generator = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-generator.js"(exports) {
    var base64VLQ = require_base64_vlq();
    var util = require_util();
    var ArraySet = require_array_set().ArraySet;
    var MappingList = require_mapping_list().MappingList;
    function SourceMapGenerator(aArgs) {
      if (!aArgs) {
        aArgs = {};
      }
      this._file = util.getArg(aArgs, "file", null);
      this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
      this._skipValidation = util.getArg(aArgs, "skipValidation", false);
      this._sources = new ArraySet();
      this._names = new ArraySet();
      this._mappings = new MappingList();
      this._sourcesContents = null;
    }
    SourceMapGenerator.prototype._version = 3;
    SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot
      });
      aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };
        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }
          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };
          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }
        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) {
          sourceRelative = util.relative(sourceRoot, sourceFile);
        }
        if (!generator._sources.has(sourceRelative)) {
          generator._sources.add(sourceRelative);
        }
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };
    SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, "generated");
      var original = util.getArg(aArgs, "original", null);
      var source = util.getArg(aArgs, "source", null);
      var name = util.getArg(aArgs, "name", null);
      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }
      if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
          this._sources.add(source);
        }
      }
      if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
          this._names.add(name);
        }
      }
      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source,
        name
      });
    };
    SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }
      if (aSourceContent != null) {
        if (!this._sourcesContents) {
          this._sourcesContents = /* @__PURE__ */ Object.create(null);
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };
    SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      var newSources = new ArraySet();
      var newNames = new ArraySet();
      this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source);
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }
      }, this);
      this._sources = newSources;
      this._names = newNames;
      aSourceMapConsumer.sources.forEach(function(sourceFile2) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile2 = util.join(aSourceMapPath, sourceFile2);
          }
          if (sourceRoot != null) {
            sourceFile2 = util.relative(sourceRoot, sourceFile2);
          }
          this.setSourceContent(sourceFile2, content);
        }
      }, this);
    };
    SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
      if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
        throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
      }
      if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
      } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
      } else {
        throw new Error("Invalid mapping: " + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };
    SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = "";
      var next;
      var mapping;
      var nameIdx;
      var sourceIdx;
      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            next += ";";
            previousGeneratedLine++;
          }
        } else {
          if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            next += ",";
          }
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
          sourceIdx = this._sources.indexOf(mapping.source);
          next += base64VLQ.encode(sourceIdx - previousSource);
          previousSource = sourceIdx;
          next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;
          next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;
          if (mapping.name != null) {
            nameIdx = this._names.indexOf(mapping.name);
            next += base64VLQ.encode(nameIdx - previousName);
            previousName = nameIdx;
          }
        }
        result += next;
      }
      return result;
    };
    SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function(source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
      }, this);
    };
    SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }
      return map;
    };
    SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };
    exports.SourceMapGenerator = SourceMapGenerator;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/binary-search.js
var require_binary_search = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/binary-search.js"(exports) {
    exports.GREATEST_LOWER_BOUND = 1;
    exports.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/quick-sort.js
var require_quick_sort = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/quick-sort.js"(exports) {
    function SortTemplate(comparator) {
      function swap(ary, x, y) {
        var temp = ary[x];
        ary[x] = ary[y];
        ary[y] = temp;
      }
      function randomIntInRange(low, high) {
        return Math.round(low + Math.random() * (high - low));
      }
      function doQuickSort(ary, comparator2, p, r) {
        if (p < r) {
          var pivotIndex = randomIntInRange(p, r);
          var i = p - 1;
          swap(ary, pivotIndex, r);
          var pivot = ary[r];
          for (var j = p; j < r; j++) {
            if (comparator2(ary[j], pivot, false) <= 0) {
              i += 1;
              swap(ary, i, j);
            }
          }
          swap(ary, i + 1, j);
          var q = i + 1;
          doQuickSort(ary, comparator2, p, q - 1);
          doQuickSort(ary, comparator2, q + 1, r);
        }
      }
      return doQuickSort;
    }
    function cloneSort(comparator) {
      let template = SortTemplate.toString();
      let templateFn = new Function(`return ${template}`)();
      return templateFn(comparator);
    }
    var sortCache = /* @__PURE__ */ new WeakMap();
    exports.quickSort = function(ary, comparator, start = 0) {
      let doQuickSort = sortCache.get(comparator);
      if (doQuickSort === void 0) {
        doQuickSort = cloneSort(comparator);
        sortCache.set(comparator, doQuickSort);
      }
      doQuickSort(ary, comparator, start, ary.length - 1);
    };
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-consumer.js
var require_source_map_consumer = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-map-consumer.js"(exports) {
    var util = require_util();
    var binarySearch = require_binary_search();
    var ArraySet = require_array_set().ArraySet;
    var base64VLQ = require_base64_vlq();
    var quickSort = require_quick_sort().quickSort;
    function SourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
    }
    SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
      return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
    };
    SourceMapConsumer.prototype._version = 3;
    SourceMapConsumer.prototype.__generatedMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__generatedMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
      }
    });
    SourceMapConsumer.prototype.__originalMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__originalMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
      }
    });
    SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
      var c = aStr.charAt(index);
      return c === ";" || c === ",";
    };
    SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };
    SourceMapConsumer.GENERATED_ORDER = 1;
    SourceMapConsumer.ORIGINAL_ORDER = 2;
    SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
    SourceMapConsumer.LEAST_UPPER_BOUND = 2;
    SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
      var mappings;
      switch (order) {
        case SourceMapConsumer.GENERATED_ORDER:
          mappings = this._generatedMappings;
          break;
        case SourceMapConsumer.ORIGINAL_ORDER:
          mappings = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var sourceRoot = this.sourceRoot;
      var boundCallback = aCallback.bind(context);
      var names = this._names;
      var sources = this._sources;
      var sourceMapURL = this._sourceMapURL;
      for (var i = 0, n = mappings.length; i < n; i++) {
        var mapping = mappings[i];
        var source = mapping.source === null ? null : sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, sourceMapURL);
        boundCallback({
          source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : names.at(mapping.name)
        });
      }
    };
    SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util.getArg(aArgs, "line");
      var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
      };
      needle.source = this._findSourceIndex(needle.source);
      if (needle.source < 0) {
        return [];
      }
      var mappings = [];
      var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === void 0) {
          var originalLine = mapping.originalLine;
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        } else {
          var originalColumn = mapping.originalColumn;
          while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        }
      }
      return mappings;
    };
    exports.SourceMapConsumer = SourceMapConsumer;
    function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sources = util.getArg(sourceMap, "sources");
      var names = util.getArg(sourceMap, "names", []);
      var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
      var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
      var mappings = util.getArg(sourceMap, "mappings");
      var file = util.getArg(sourceMap, "file", null);
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      if (sourceRoot) {
        sourceRoot = util.normalize(sourceRoot);
      }
      sources = sources.map(String).map(util.normalize).map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
      });
      this._names = ArraySet.fromArray(names.map(String), true);
      this._sources = ArraySet.fromArray(sources, true);
      this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
      });
      this.sourceRoot = sourceRoot;
      this.sourcesContent = sourcesContent;
      this._mappings = mappings;
      this._sourceMapURL = aSourceMapURL;
      this.file = file;
    }
    BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
    BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      if (this._sources.has(relativeSource)) {
        return this._sources.indexOf(relativeSource);
      }
      var i;
      for (i = 0; i < this._absoluteSources.length; ++i) {
        if (this._absoluteSources[i] == aSource) {
          return i;
        }
      }
      return -1;
    };
    BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);
      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
      smc.file = aSourceMap._file;
      smc._sourceMapURL = aSourceMapURL;
      smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
      });
      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];
      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping();
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;
          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }
          destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
      }
      quickSort(smc.__originalMappings, util.compareByOriginalPositions);
      return smc;
    };
    BasicSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
      get: function() {
        return this._absoluteSources.slice();
      }
    });
    function Mapping() {
      this.generatedLine = 0;
      this.generatedColumn = 0;
      this.source = null;
      this.originalLine = null;
      this.originalColumn = null;
      this.name = null;
    }
    var compareGenerated = util.compareByGeneratedPositionsDeflatedNoLine;
    function sortGenerated(array, start) {
      let l = array.length;
      let n = array.length - start;
      if (n <= 1) {
        return;
      } else if (n == 2) {
        let a = array[start];
        let b = array[start + 1];
        if (compareGenerated(a, b) > 0) {
          array[start] = b;
          array[start + 1] = a;
        }
      } else if (n < 20) {
        for (let i = start; i < l; i++) {
          for (let j = i; j > start; j--) {
            let a = array[j - 1];
            let b = array[j];
            if (compareGenerated(a, b) <= 0) {
              break;
            }
            array[j - 1] = b;
            array[j] = a;
          }
        }
      } else {
        quickSort(array, compareGenerated, start);
      }
    }
    BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;
      let subarrayStart = 0;
      while (index < length) {
        if (aStr.charAt(index) === ";") {
          generatedLine++;
          index++;
          previousGeneratedColumn = 0;
          sortGenerated(generatedMappings, subarrayStart);
          subarrayStart = generatedMappings.length;
        } else if (aStr.charAt(index) === ",") {
          index++;
        } else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;
          for (end = index; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index, end);
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }
          if (segment.length === 2) {
            throw new Error("Found a source, but no line and column");
          }
          if (segment.length === 3) {
            throw new Error("Found a source and line, but no column");
          }
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;
          if (segment.length > 1) {
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            mapping.originalLine += 1;
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;
            if (segment.length > 4) {
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }
          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === "number") {
            let currentSource = mapping.source;
            while (originalMappings.length <= currentSource) {
              originalMappings.push(null);
            }
            if (originalMappings[currentSource] === null) {
              originalMappings[currentSource] = [];
            }
            originalMappings[currentSource].push(mapping);
          }
        }
      }
      sortGenerated(generatedMappings, subarrayStart);
      this.__generatedMappings = generatedMappings;
      for (var i = 0; i < originalMappings.length; i++) {
        if (originalMappings[i] != null) {
          quickSort(originalMappings[i], util.compareByOriginalPositionsNoSource);
        }
      }
      this.__originalMappings = [].concat(...originalMappings);
    };
    BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
      if (aNeedle[aLineName] <= 0) {
        throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
      }
      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };
    BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];
          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }
        mapping.lastGeneratedColumn = Infinity;
      }
    };
    BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
      if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, "source", null);
          if (source !== null) {
            source = this._sources.at(source);
            source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
          }
          var name = util.getArg(mapping, "name", null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source,
            line: util.getArg(mapping, "originalLine", null),
            column: util.getArg(mapping, "originalColumn", null),
            name
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };
    BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
      });
    };
    BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }
      var index = this._findSourceIndex(aSource);
      if (index >= 0) {
        return this.sourcesContent[index];
      }
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      var url;
      if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + relativeSource + '" is not in the SourceMap.');
      }
    };
    BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util.getArg(aArgs, "source");
      source = this._findSourceIndex(source);
      if (source < 0) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      var needle = {
        source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) {
          return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
          };
        }
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };
    exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
    function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sections = util.getArg(sourceMap, "sections");
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      this._sources = new ArraySet();
      this._names = new ArraySet();
      var lastOffset = {
        line: -1,
        column: 0
      };
      this._sections = sections.map(function(s) {
        if (s.url) {
          throw new Error("Support for url field in sections not implemented.");
        }
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
          throw new Error("Section offsets must be ordered and non-overlapping.");
        }
        lastOffset = offset;
        return {
          generatedOffset: {
            generatedLine: offsetLine + 1,
            generatedColumn: offsetColumn + 1
          },
          consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
      });
    }
    IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
    IndexedSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
      get: function() {
        var sources = [];
        for (var i = 0; i < this._sections.length; i++) {
          for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
            sources.push(this._sections[i].consumer.sources[j]);
          }
        }
        return sources;
      }
    });
    IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var sectionIndex = binarySearch.search(needle, this._sections, function(needle2, section2) {
        var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }
        return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
      });
      var section = this._sections[sectionIndex];
      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }
      return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
      });
    };
    IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };
    IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
          };
          return ret;
        }
      }
      return {
        line: null,
        column: null
      };
    };
    IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[j];
          var source = section.consumer._sources.at(mapping.source);
          source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
          this._sources.add(source);
          source = this._sources.indexOf(source);
          var name = null;
          if (mapping.name) {
            name = section.consumer._names.at(mapping.name);
            this._names.add(name);
            name = this._names.indexOf(name);
          }
          var adjustedMapping = {
            source,
            generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name
          };
          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === "number") {
            this.__originalMappings.push(adjustedMapping);
          }
        }
      }
      quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util.compareByOriginalPositions);
    };
    exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-node.js
var require_source_node = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/lib/source-node.js"(exports) {
    var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    var util = require_util();
    var REGEX_NEWLINE = /(\r?\n)/;
    var NEWLINE_CODE = 10;
    var isSourceNode = "$$$isSourceNode$$$";
    function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
      this.children = [];
      this.sourceContents = {};
      this.line = aLine == null ? null : aLine;
      this.column = aColumn == null ? null : aColumn;
      this.source = aSource == null ? null : aSource;
      this.name = aName == null ? null : aName;
      this[isSourceNode] = true;
      if (aChunks != null)
        this.add(aChunks);
    }
    SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      var node = new SourceNode();
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var remainingLinesIndex = 0;
      var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
          return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
        }
      };
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;
      var lastMapping = null;
      aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
          if (lastGeneratedLine < mapping.generatedLine) {
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
          } else {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            lastMapping = mapping;
            return;
          }
        }
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
      }
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });
      return node;
      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === void 0) {
          node.add(code);
        } else {
          var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
          node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
      }
    };
    SourceNode.prototype.add = function SourceNode_add(aChunk) {
      if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
          this.add(chunk);
        }, this);
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
          this.children.push(aChunk);
        }
      } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
      }
      return this;
    };
    SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
      if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
          this.prepend(aChunk[i]);
        }
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
      } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
      }
      return this;
    };
    SourceNode.prototype.walk = function SourceNode_walk(aFn) {
      var chunk;
      for (var i = 0, len = this.children.length; i < len; i++) {
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
          chunk.walk(aFn);
        } else {
          if (chunk !== "") {
            aFn(chunk, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
          }
        }
      }
    };
    SourceNode.prototype.join = function SourceNode_join(aSep) {
      var newChildren;
      var i;
      var len = this.children.length;
      if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
          newChildren.push(this.children[i]);
          newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
      }
      return this;
    };
    SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
      var lastChild = this.children[this.children.length - 1];
      if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
      } else if (typeof lastChild === "string") {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
      } else {
        this.children.push("".replace(aPattern, aReplacement));
      }
      return this;
    };
    SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };
    SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }
      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };
    SourceNode.prototype.toString = function SourceNode_toString() {
      var str = "";
      this.walk(function(chunk) {
        str += chunk;
      });
      return str;
    };
    SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
      var generated = {
        code: "",
        line: 1,
        column: 0
      };
      var map = new SourceMapGenerator(aArgs);
      var sourceMappingActive = false;
      var lastOriginalSource = null;
      var lastOriginalLine = null;
      var lastOriginalColumn = null;
      var lastOriginalName = null;
      this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
          if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
          lastOriginalSource = original.source;
          lastOriginalLine = original.line;
          lastOriginalColumn = original.column;
          lastOriginalName = original.name;
          sourceMappingActive = true;
        } else if (sourceMappingActive) {
          map.addMapping({
            generated: {
              line: generated.line,
              column: generated.column
            }
          });
          lastOriginalSource = null;
          sourceMappingActive = false;
        }
        for (var idx = 0, length = chunk.length; idx < length; idx++) {
          if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            if (idx + 1 === length) {
              lastOriginalSource = null;
              sourceMappingActive = false;
            } else if (sourceMappingActive) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
          } else {
            generated.column++;
          }
        }
      });
      this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
      });
      return { code: generated.code, map };
    };
    exports.SourceNode = SourceNode;
  }
});

// ../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/source-map.js
var require_source_map = __commonJS({
  "../../node_modules/.pnpm/source-map-js@1.0.2/node_modules/source-map-js/source-map.js"(exports) {
    exports.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    exports.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
    exports.SourceNode = require_source_node().SourceNode;
  }
});

// ../../node_modules/.pnpm/nanoid@3.3.4/node_modules/nanoid/non-secure/index.cjs
var require_non_secure = __commonJS({
  "../../node_modules/.pnpm/nanoid@3.3.4/node_modules/nanoid/non-secure/index.cjs"(exports, module2) {
    var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    var customAlphabet = (alphabet, defaultSize = 21) => {
      return (size = defaultSize) => {
        let id = "";
        let i = size;
        while (i--) {
          id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
      };
    };
    var nanoid = (size = 21) => {
      let id = "";
      let i = size;
      while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
      }
      return id;
    };
    module2.exports = { nanoid, customAlphabet };
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/previous-map.js
var require_previous_map = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/previous-map.js"(exports, module2) {
    "use strict";
    var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
    var { existsSync, readFileSync } = require("fs");
    var { dirname, join } = require("path");
    function fromBase64(str) {
      if (Buffer) {
        return Buffer.from(str, "base64").toString();
      } else {
        return window.atob(str);
      }
    }
    var PreviousMap = class {
      constructor(css, opts) {
        if (opts.map === false)
          return;
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, "data:");
        let prev = opts.map ? opts.map.prev : void 0;
        let text = this.loadMap(opts.from, prev);
        if (!this.mapFile && opts.from) {
          this.mapFile = opts.from;
        }
        if (this.mapFile)
          this.root = dirname(this.mapFile);
        if (text)
          this.text = text;
      }
      consumer() {
        if (!this.consumerCache) {
          this.consumerCache = new SourceMapConsumer(this.text);
        }
        return this.consumerCache;
      }
      withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
      }
      startWith(string, start) {
        if (!string)
          return false;
        return string.substr(0, start.length) === start;
      }
      getAnnotationURL(sourceMapString) {
        return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
      }
      loadAnnotation(css) {
        let comments = css.match(/\/\*\s*# sourceMappingURL=/gm);
        if (!comments)
          return;
        let start = css.lastIndexOf(comments.pop());
        let end = css.indexOf("*/", start);
        if (start > -1 && end > -1) {
          this.annotation = this.getAnnotationURL(css.substring(start, end));
        }
      }
      decodeInline(text) {
        let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
        let baseUri = /^data:application\/json;base64,/;
        let charsetUri = /^data:application\/json;charset=utf-?8,/;
        let uri = /^data:application\/json,/;
        if (charsetUri.test(text) || uri.test(text)) {
          return decodeURIComponent(text.substr(RegExp.lastMatch.length));
        }
        if (baseCharsetUri.test(text) || baseUri.test(text)) {
          return fromBase64(text.substr(RegExp.lastMatch.length));
        }
        let encoding = text.match(/data:application\/json;([^,]+),/)[1];
        throw new Error("Unsupported source map encoding " + encoding);
      }
      loadFile(path2) {
        this.root = dirname(path2);
        if (existsSync(path2)) {
          this.mapFile = path2;
          return readFileSync(path2, "utf-8").toString().trim();
        }
      }
      loadMap(file, prev) {
        if (prev === false)
          return false;
        if (prev) {
          if (typeof prev === "string") {
            return prev;
          } else if (typeof prev === "function") {
            let prevPath = prev(file);
            if (prevPath) {
              let map = this.loadFile(prevPath);
              if (!map) {
                throw new Error("Unable to load previous source map: " + prevPath.toString());
              }
              return map;
            }
          } else if (prev instanceof SourceMapConsumer) {
            return SourceMapGenerator.fromSourceMap(prev).toString();
          } else if (prev instanceof SourceMapGenerator) {
            return prev.toString();
          } else if (this.isMap(prev)) {
            return JSON.stringify(prev);
          } else {
            throw new Error("Unsupported previous source map format: " + prev.toString());
          }
        } else if (this.inline) {
          return this.decodeInline(this.annotation);
        } else if (this.annotation) {
          let map = this.annotation;
          if (file)
            map = join(dirname(file), map);
          return this.loadFile(map);
        }
      }
      isMap(map) {
        if (typeof map !== "object")
          return false;
        return typeof map.mappings === "string" || typeof map._mappings === "string" || Array.isArray(map.sections);
      }
    };
    module2.exports = PreviousMap;
    PreviousMap.default = PreviousMap;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/input.js
var require_input = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/input.js"(exports, module2) {
    "use strict";
    var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
    var { fileURLToPath, pathToFileURL } = require("url");
    var { resolve, isAbsolute } = require("path");
    var { nanoid } = require_non_secure();
    var terminalHighlight = require_terminal_highlight();
    var CssSyntaxError2 = require_css_syntax_error();
    var PreviousMap = require_previous_map();
    var fromOffsetCache = Symbol("fromOffsetCache");
    var sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
    var pathAvailable = Boolean(resolve && isAbsolute);
    var Input2 = class {
      constructor(css, opts = {}) {
        if (css === null || typeof css === "undefined" || typeof css === "object" && !css.toString) {
          throw new Error(`PostCSS received ${css} instead of CSS string`);
        }
        this.css = css.toString();
        if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
          this.hasBOM = true;
          this.css = this.css.slice(1);
        } else {
          this.hasBOM = false;
        }
        if (opts.from) {
          if (!pathAvailable || /^\w+:\/\//.test(opts.from) || isAbsolute(opts.from)) {
            this.file = opts.from;
          } else {
            this.file = resolve(opts.from);
          }
        }
        if (pathAvailable && sourceMapAvailable) {
          let map = new PreviousMap(this.css, opts);
          if (map.text) {
            this.map = map;
            let file = map.consumer().file;
            if (!this.file && file)
              this.file = this.mapResolve(file);
          }
        }
        if (!this.file) {
          this.id = "<input css " + nanoid(6) + ">";
        }
        if (this.map)
          this.map.file = this.from;
      }
      fromOffset(offset) {
        let lastLine, lineToIndex;
        if (!this[fromOffsetCache]) {
          let lines = this.css.split("\n");
          lineToIndex = new Array(lines.length);
          let prevIndex = 0;
          for (let i = 0, l = lines.length; i < l; i++) {
            lineToIndex[i] = prevIndex;
            prevIndex += lines[i].length + 1;
          }
          this[fromOffsetCache] = lineToIndex;
        } else {
          lineToIndex = this[fromOffsetCache];
        }
        lastLine = lineToIndex[lineToIndex.length - 1];
        let min = 0;
        if (offset >= lastLine) {
          min = lineToIndex.length - 1;
        } else {
          let max = lineToIndex.length - 2;
          let mid;
          while (min < max) {
            mid = min + (max - min >> 1);
            if (offset < lineToIndex[mid]) {
              max = mid - 1;
            } else if (offset >= lineToIndex[mid + 1]) {
              min = mid + 1;
            } else {
              min = mid;
              break;
            }
          }
        }
        return {
          line: min + 1,
          col: offset - lineToIndex[min] + 1
        };
      }
      error(message, line, column, opts = {}) {
        let result, endLine, endColumn;
        if (line && typeof line === "object") {
          let start = line;
          let end = column;
          if (typeof line.offset === "number") {
            let pos = this.fromOffset(start.offset);
            line = pos.line;
            column = pos.col;
          } else {
            line = start.line;
            column = start.column;
          }
          if (typeof end.offset === "number") {
            let pos = this.fromOffset(end.offset);
            endLine = pos.line;
            endColumn = pos.col;
          } else {
            endLine = end.line;
            endColumn = end.column;
          }
        } else if (!column) {
          let pos = this.fromOffset(line);
          line = pos.line;
          column = pos.col;
        }
        let origin = this.origin(line, column, endLine, endColumn);
        if (origin) {
          result = new CssSyntaxError2(message, origin.endLine === void 0 ? origin.line : { line: origin.line, column: origin.column }, origin.endLine === void 0 ? origin.column : { line: origin.endLine, column: origin.endColumn }, origin.source, origin.file, opts.plugin);
        } else {
          result = new CssSyntaxError2(message, endLine === void 0 ? line : { line, column }, endLine === void 0 ? column : { line: endLine, column: endColumn }, this.css, this.file, opts.plugin);
        }
        result.input = { line, column, endLine, endColumn, source: this.css };
        if (this.file) {
          if (pathToFileURL) {
            result.input.url = pathToFileURL(this.file).toString();
          }
          result.input.file = this.file;
        }
        return result;
      }
      origin(line, column, endLine, endColumn) {
        if (!this.map)
          return false;
        let consumer = this.map.consumer();
        let from = consumer.originalPositionFor({ line, column });
        if (!from.source)
          return false;
        let to;
        if (typeof endLine === "number") {
          to = consumer.originalPositionFor({ line: endLine, column: endColumn });
        }
        let fromUrl;
        if (isAbsolute(from.source)) {
          fromUrl = pathToFileURL(from.source);
        } else {
          fromUrl = new URL(from.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
        }
        let result = {
          url: fromUrl.toString(),
          line: from.line,
          column: from.column,
          endLine: to && to.line,
          endColumn: to && to.column
        };
        if (fromUrl.protocol === "file:") {
          if (fileURLToPath) {
            result.file = fileURLToPath(fromUrl);
          } else {
            throw new Error(`file: protocol is not available in this PostCSS build`);
          }
        }
        let source = consumer.sourceContentFor(from.source);
        if (source)
          result.source = source;
        return result;
      }
      mapResolve(file) {
        if (/^\w+:\/\//.test(file)) {
          return file;
        }
        return resolve(this.map.consumer().sourceRoot || this.map.root || ".", file);
      }
      get from() {
        return this.file || this.id;
      }
      toJSON() {
        let json = {};
        for (let name of ["hasBOM", "css", "file", "id"]) {
          if (this[name] != null) {
            json[name] = this[name];
          }
        }
        if (this.map) {
          json.map = { ...this.map };
          if (json.map.consumerCache) {
            json.map.consumerCache = void 0;
          }
        }
        return json;
      }
    };
    module2.exports = Input2;
    Input2.default = Input2;
    if (terminalHighlight && terminalHighlight.registerInput) {
      terminalHighlight.registerInput(Input2);
    }
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/map-generator.js
var require_map_generator = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/map-generator.js"(exports, module2) {
    "use strict";
    var { SourceMapConsumer, SourceMapGenerator } = require_source_map();
    var { dirname, resolve, relative, sep } = require("path");
    var { pathToFileURL } = require("url");
    var Input2 = require_input();
    var sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator);
    var pathAvailable = Boolean(dirname && resolve && relative && sep);
    var MapGenerator = class {
      constructor(stringify2, root2, opts, cssString) {
        this.stringify = stringify2;
        this.mapOpts = opts.map || {};
        this.root = root2;
        this.opts = opts;
        this.css = cssString;
      }
      isMap() {
        if (typeof this.opts.map !== "undefined") {
          return !!this.opts.map;
        }
        return this.previous().length > 0;
      }
      previous() {
        if (!this.previousMaps) {
          this.previousMaps = [];
          if (this.root) {
            this.root.walk((node) => {
              if (node.source && node.source.input.map) {
                let map = node.source.input.map;
                if (!this.previousMaps.includes(map)) {
                  this.previousMaps.push(map);
                }
              }
            });
          } else {
            let input = new Input2(this.css, this.opts);
            if (input.map)
              this.previousMaps.push(input.map);
          }
        }
        return this.previousMaps;
      }
      isInline() {
        if (typeof this.mapOpts.inline !== "undefined") {
          return this.mapOpts.inline;
        }
        let annotation = this.mapOpts.annotation;
        if (typeof annotation !== "undefined" && annotation !== true) {
          return false;
        }
        if (this.previous().length) {
          return this.previous().some((i) => i.inline);
        }
        return true;
      }
      isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== "undefined") {
          return this.mapOpts.sourcesContent;
        }
        if (this.previous().length) {
          return this.previous().some((i) => i.withContent());
        }
        return true;
      }
      clearAnnotation() {
        if (this.mapOpts.annotation === false)
          return;
        if (this.root) {
          let node;
          for (let i = this.root.nodes.length - 1; i >= 0; i--) {
            node = this.root.nodes[i];
            if (node.type !== "comment")
              continue;
            if (node.text.indexOf("# sourceMappingURL=") === 0) {
              this.root.removeChild(i);
            }
          }
        } else if (this.css) {
          this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, "");
        }
      }
      setSourcesContent() {
        let already = {};
        if (this.root) {
          this.root.walk((node) => {
            if (node.source) {
              let from = node.source.input.from;
              if (from && !already[from]) {
                already[from] = true;
                this.map.setSourceContent(this.toUrl(this.path(from)), node.source.input.css);
              }
            }
          });
        } else if (this.css) {
          let from = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
          this.map.setSourceContent(from, this.css);
        }
      }
      applyPrevMaps() {
        for (let prev of this.previous()) {
          let from = this.toUrl(this.path(prev.file));
          let root2 = prev.root || dirname(prev.file);
          let map;
          if (this.mapOpts.sourcesContent === false) {
            map = new SourceMapConsumer(prev.text);
            if (map.sourcesContent) {
              map.sourcesContent = map.sourcesContent.map(() => null);
            }
          } else {
            map = prev.consumer();
          }
          this.map.applySourceMap(map, from, this.toUrl(this.path(root2)));
        }
      }
      isAnnotation() {
        if (this.isInline()) {
          return true;
        }
        if (typeof this.mapOpts.annotation !== "undefined") {
          return this.mapOpts.annotation;
        }
        if (this.previous().length) {
          return this.previous().some((i) => i.annotation);
        }
        return true;
      }
      toBase64(str) {
        if (Buffer) {
          return Buffer.from(str).toString("base64");
        } else {
          return window.btoa(unescape(encodeURIComponent(str)));
        }
      }
      addAnnotation() {
        let content;
        if (this.isInline()) {
          content = "data:application/json;base64," + this.toBase64(this.map.toString());
        } else if (typeof this.mapOpts.annotation === "string") {
          content = this.mapOpts.annotation;
        } else if (typeof this.mapOpts.annotation === "function") {
          content = this.mapOpts.annotation(this.opts.to, this.root);
        } else {
          content = this.outputFile() + ".map";
        }
        let eol = "\n";
        if (this.css.includes("\r\n"))
          eol = "\r\n";
        this.css += eol + "/*# sourceMappingURL=" + content + " */";
      }
      outputFile() {
        if (this.opts.to) {
          return this.path(this.opts.to);
        } else if (this.opts.from) {
          return this.path(this.opts.from);
        } else {
          return "to.css";
        }
      }
      generateMap() {
        if (this.root) {
          this.generateString();
        } else if (this.previous().length === 1) {
          let prev = this.previous()[0].consumer();
          prev.file = this.outputFile();
          this.map = SourceMapGenerator.fromSourceMap(prev);
        } else {
          this.map = new SourceMapGenerator({ file: this.outputFile() });
          this.map.addMapping({
            source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>",
            generated: { line: 1, column: 0 },
            original: { line: 1, column: 0 }
          });
        }
        if (this.isSourcesContent())
          this.setSourcesContent();
        if (this.root && this.previous().length > 0)
          this.applyPrevMaps();
        if (this.isAnnotation())
          this.addAnnotation();
        if (this.isInline()) {
          return [this.css];
        } else {
          return [this.css, this.map];
        }
      }
      path(file) {
        if (file.indexOf("<") === 0)
          return file;
        if (/^\w+:\/\//.test(file))
          return file;
        if (this.mapOpts.absolute)
          return file;
        let from = this.opts.to ? dirname(this.opts.to) : ".";
        if (typeof this.mapOpts.annotation === "string") {
          from = dirname(resolve(from, this.mapOpts.annotation));
        }
        file = relative(from, file);
        return file;
      }
      toUrl(path2) {
        if (sep === "\\") {
          path2 = path2.replace(/\\/g, "/");
        }
        return encodeURI(path2).replace(/[#?]/g, encodeURIComponent);
      }
      sourcePath(node) {
        if (this.mapOpts.from) {
          return this.toUrl(this.mapOpts.from);
        } else if (this.mapOpts.absolute) {
          if (pathToFileURL) {
            return pathToFileURL(node.source.input.from).toString();
          } else {
            throw new Error("`map.absolute` option is not available in this PostCSS build");
          }
        } else {
          return this.toUrl(this.path(node.source.input.from));
        }
      }
      generateString() {
        this.css = "";
        this.map = new SourceMapGenerator({ file: this.outputFile() });
        let line = 1;
        let column = 1;
        let noSource = "<no source>";
        let mapping = {
          source: "",
          generated: { line: 0, column: 0 },
          original: { line: 0, column: 0 }
        };
        let lines, last;
        this.stringify(this.root, (str, node, type) => {
          this.css += str;
          if (node && type !== "end") {
            mapping.generated.line = line;
            mapping.generated.column = column - 1;
            if (node.source && node.source.start) {
              mapping.source = this.sourcePath(node);
              mapping.original.line = node.source.start.line;
              mapping.original.column = node.source.start.column - 1;
              this.map.addMapping(mapping);
            } else {
              mapping.source = noSource;
              mapping.original.line = 1;
              mapping.original.column = 0;
              this.map.addMapping(mapping);
            }
          }
          lines = str.match(/\n/g);
          if (lines) {
            line += lines.length;
            last = str.lastIndexOf("\n");
            column = str.length - last;
          } else {
            column += str.length;
          }
          if (node && type !== "start") {
            let p = node.parent || { raws: {} };
            if (node.type !== "decl" || node !== p.last || p.raws.semicolon) {
              if (node.source && node.source.end) {
                mapping.source = this.sourcePath(node);
                mapping.original.line = node.source.end.line;
                mapping.original.column = node.source.end.column - 1;
                mapping.generated.line = line;
                mapping.generated.column = column - 2;
                this.map.addMapping(mapping);
              } else {
                mapping.source = noSource;
                mapping.original.line = 1;
                mapping.original.column = 0;
                mapping.generated.line = line;
                mapping.generated.column = column - 1;
                this.map.addMapping(mapping);
              }
            }
          }
        });
      }
      generate() {
        this.clearAnnotation();
        if (pathAvailable && sourceMapAvailable && this.isMap()) {
          return this.generateMap();
        } else {
          let result = "";
          this.stringify(this.root, (i) => {
            result += i;
          });
          return [result];
        }
      }
    };
    module2.exports = MapGenerator;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/comment.js
var require_comment = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/comment.js"(exports, module2) {
    "use strict";
    var Node2 = require_node();
    var Comment2 = class extends Node2 {
      constructor(defaults) {
        super(defaults);
        this.type = "comment";
      }
    };
    module2.exports = Comment2;
    Comment2.default = Comment2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/container.js
var require_container = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/container.js"(exports, module2) {
    "use strict";
    var { isClean, my } = require_symbols();
    var Declaration2 = require_declaration();
    var Comment2 = require_comment();
    var Node2 = require_node();
    var parse2;
    var Rule2;
    var AtRule2;
    function cleanSource(nodes) {
      return nodes.map((i) => {
        if (i.nodes)
          i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
      });
    }
    function markDirtyUp(node) {
      node[isClean] = false;
      if (node.proxyOf.nodes) {
        for (let i of node.proxyOf.nodes) {
          markDirtyUp(i);
        }
      }
    }
    var Container2 = class extends Node2 {
      push(child) {
        child.parent = this;
        this.proxyOf.nodes.push(child);
        return this;
      }
      each(callback) {
        if (!this.proxyOf.nodes)
          return void 0;
        let iterator = this.getIterator();
        let index, result;
        while (this.indexes[iterator] < this.proxyOf.nodes.length) {
          index = this.indexes[iterator];
          result = callback(this.proxyOf.nodes[index], index);
          if (result === false)
            break;
          this.indexes[iterator] += 1;
        }
        delete this.indexes[iterator];
        return result;
      }
      walk(callback) {
        return this.each((child, i) => {
          let result;
          try {
            result = callback(child, i);
          } catch (e) {
            throw child.addToError(e);
          }
          if (result !== false && child.walk) {
            result = child.walk(callback);
          }
          return result;
        });
      }
      walkDecls(prop, callback) {
        if (!callback) {
          callback = prop;
          return this.walk((child, i) => {
            if (child.type === "decl") {
              return callback(child, i);
            }
          });
        }
        if (prop instanceof RegExp) {
          return this.walk((child, i) => {
            if (child.type === "decl" && prop.test(child.prop)) {
              return callback(child, i);
            }
          });
        }
        return this.walk((child, i) => {
          if (child.type === "decl" && child.prop === prop) {
            return callback(child, i);
          }
        });
      }
      walkRules(selector, callback) {
        if (!callback) {
          callback = selector;
          return this.walk((child, i) => {
            if (child.type === "rule") {
              return callback(child, i);
            }
          });
        }
        if (selector instanceof RegExp) {
          return this.walk((child, i) => {
            if (child.type === "rule" && selector.test(child.selector)) {
              return callback(child, i);
            }
          });
        }
        return this.walk((child, i) => {
          if (child.type === "rule" && child.selector === selector) {
            return callback(child, i);
          }
        });
      }
      walkAtRules(name, callback) {
        if (!callback) {
          callback = name;
          return this.walk((child, i) => {
            if (child.type === "atrule") {
              return callback(child, i);
            }
          });
        }
        if (name instanceof RegExp) {
          return this.walk((child, i) => {
            if (child.type === "atrule" && name.test(child.name)) {
              return callback(child, i);
            }
          });
        }
        return this.walk((child, i) => {
          if (child.type === "atrule" && child.name === name) {
            return callback(child, i);
          }
        });
      }
      walkComments(callback) {
        return this.walk((child, i) => {
          if (child.type === "comment") {
            return callback(child, i);
          }
        });
      }
      append(...children) {
        for (let child of children) {
          let nodes = this.normalize(child, this.last);
          for (let node of nodes)
            this.proxyOf.nodes.push(node);
        }
        this.markDirty();
        return this;
      }
      prepend(...children) {
        children = children.reverse();
        for (let child of children) {
          let nodes = this.normalize(child, this.first, "prepend").reverse();
          for (let node of nodes)
            this.proxyOf.nodes.unshift(node);
          for (let id in this.indexes) {
            this.indexes[id] = this.indexes[id] + nodes.length;
          }
        }
        this.markDirty();
        return this;
      }
      cleanRaws(keepBetween) {
        super.cleanRaws(keepBetween);
        if (this.nodes) {
          for (let node of this.nodes)
            node.cleanRaws(keepBetween);
        }
      }
      insertBefore(exist, add) {
        exist = this.index(exist);
        let type = exist === 0 ? "prepend" : false;
        let nodes = this.normalize(add, this.proxyOf.nodes[exist], type).reverse();
        for (let node of nodes)
          this.proxyOf.nodes.splice(exist, 0, node);
        let index;
        for (let id in this.indexes) {
          index = this.indexes[id];
          if (exist <= index) {
            this.indexes[id] = index + nodes.length;
          }
        }
        this.markDirty();
        return this;
      }
      insertAfter(exist, add) {
        exist = this.index(exist);
        let nodes = this.normalize(add, this.proxyOf.nodes[exist]).reverse();
        for (let node of nodes)
          this.proxyOf.nodes.splice(exist + 1, 0, node);
        let index;
        for (let id in this.indexes) {
          index = this.indexes[id];
          if (exist < index) {
            this.indexes[id] = index + nodes.length;
          }
        }
        this.markDirty();
        return this;
      }
      removeChild(child) {
        child = this.index(child);
        this.proxyOf.nodes[child].parent = void 0;
        this.proxyOf.nodes.splice(child, 1);
        let index;
        for (let id in this.indexes) {
          index = this.indexes[id];
          if (index >= child) {
            this.indexes[id] = index - 1;
          }
        }
        this.markDirty();
        return this;
      }
      removeAll() {
        for (let node of this.proxyOf.nodes)
          node.parent = void 0;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
      }
      replaceValues(pattern, opts, callback) {
        if (!callback) {
          callback = opts;
          opts = {};
        }
        this.walkDecls((decl2) => {
          if (opts.props && !opts.props.includes(decl2.prop))
            return;
          if (opts.fast && !decl2.value.includes(opts.fast))
            return;
          decl2.value = decl2.value.replace(pattern, callback);
        });
        this.markDirty();
        return this;
      }
      every(condition) {
        return this.nodes.every(condition);
      }
      some(condition) {
        return this.nodes.some(condition);
      }
      index(child) {
        if (typeof child === "number")
          return child;
        if (child.proxyOf)
          child = child.proxyOf;
        return this.proxyOf.nodes.indexOf(child);
      }
      get first() {
        if (!this.proxyOf.nodes)
          return void 0;
        return this.proxyOf.nodes[0];
      }
      get last() {
        if (!this.proxyOf.nodes)
          return void 0;
        return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
      }
      normalize(nodes, sample) {
        if (typeof nodes === "string") {
          nodes = cleanSource(parse2(nodes).nodes);
        } else if (Array.isArray(nodes)) {
          nodes = nodes.slice(0);
          for (let i of nodes) {
            if (i.parent)
              i.parent.removeChild(i, "ignore");
          }
        } else if (nodes.type === "root" && this.type !== "document") {
          nodes = nodes.nodes.slice(0);
          for (let i of nodes) {
            if (i.parent)
              i.parent.removeChild(i, "ignore");
          }
        } else if (nodes.type) {
          nodes = [nodes];
        } else if (nodes.prop) {
          if (typeof nodes.value === "undefined") {
            throw new Error("Value field is missed in node creation");
          } else if (typeof nodes.value !== "string") {
            nodes.value = String(nodes.value);
          }
          nodes = [new Declaration2(nodes)];
        } else if (nodes.selector) {
          nodes = [new Rule2(nodes)];
        } else if (nodes.name) {
          nodes = [new AtRule2(nodes)];
        } else if (nodes.text) {
          nodes = [new Comment2(nodes)];
        } else {
          throw new Error("Unknown node type in node creation");
        }
        let processed = nodes.map((i) => {
          if (!i[my])
            Container2.rebuild(i);
          i = i.proxyOf;
          if (i.parent)
            i.parent.removeChild(i);
          if (i[isClean])
            markDirtyUp(i);
          if (typeof i.raws.before === "undefined") {
            if (sample && typeof sample.raws.before !== "undefined") {
              i.raws.before = sample.raws.before.replace(/\S/g, "");
            }
          }
          i.parent = this.proxyOf;
          return i;
        });
        return processed;
      }
      getProxyProcessor() {
        return {
          set(node, prop, value) {
            if (node[prop] === value)
              return true;
            node[prop] = value;
            if (prop === "name" || prop === "params" || prop === "selector") {
              node.markDirty();
            }
            return true;
          },
          get(node, prop) {
            if (prop === "proxyOf") {
              return node;
            } else if (!node[prop]) {
              return node[prop];
            } else if (prop === "each" || typeof prop === "string" && prop.startsWith("walk")) {
              return (...args) => {
                return node[prop](...args.map((i) => {
                  if (typeof i === "function") {
                    return (child, index) => i(child.toProxy(), index);
                  } else {
                    return i;
                  }
                }));
              };
            } else if (prop === "every" || prop === "some") {
              return (cb) => {
                return node[prop]((child, ...other) => cb(child.toProxy(), ...other));
              };
            } else if (prop === "root") {
              return () => node.root().toProxy();
            } else if (prop === "nodes") {
              return node.nodes.map((i) => i.toProxy());
            } else if (prop === "first" || prop === "last") {
              return node[prop].toProxy();
            } else {
              return node[prop];
            }
          }
        };
      }
      getIterator() {
        if (!this.lastEach)
          this.lastEach = 0;
        if (!this.indexes)
          this.indexes = {};
        this.lastEach += 1;
        let iterator = this.lastEach;
        this.indexes[iterator] = 0;
        return iterator;
      }
    };
    Container2.registerParse = (dependant) => {
      parse2 = dependant;
    };
    Container2.registerRule = (dependant) => {
      Rule2 = dependant;
    };
    Container2.registerAtRule = (dependant) => {
      AtRule2 = dependant;
    };
    module2.exports = Container2;
    Container2.default = Container2;
    Container2.rebuild = (node) => {
      if (node.type === "atrule") {
        Object.setPrototypeOf(node, AtRule2.prototype);
      } else if (node.type === "rule") {
        Object.setPrototypeOf(node, Rule2.prototype);
      } else if (node.type === "decl") {
        Object.setPrototypeOf(node, Declaration2.prototype);
      } else if (node.type === "comment") {
        Object.setPrototypeOf(node, Comment2.prototype);
      }
      node[my] = true;
      if (node.nodes) {
        node.nodes.forEach((child) => {
          Container2.rebuild(child);
        });
      }
    };
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/document.js
var require_document = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/document.js"(exports, module2) {
    "use strict";
    var Container2 = require_container();
    var LazyResult;
    var Processor2;
    var Document2 = class extends Container2 {
      constructor(defaults) {
        super({ type: "document", ...defaults });
        if (!this.nodes) {
          this.nodes = [];
        }
      }
      toResult(opts = {}) {
        let lazy = new LazyResult(new Processor2(), this, opts);
        return lazy.stringify();
      }
    };
    Document2.registerLazyResult = (dependant) => {
      LazyResult = dependant;
    };
    Document2.registerProcessor = (dependant) => {
      Processor2 = dependant;
    };
    module2.exports = Document2;
    Document2.default = Document2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/warn-once.js
var require_warn_once = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/warn-once.js"(exports, module2) {
    "use strict";
    var printed = {};
    module2.exports = function warnOnce(message) {
      if (printed[message])
        return;
      printed[message] = true;
      if (typeof console !== "undefined" && console.warn) {
        console.warn(message);
      }
    };
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/warning.js
var require_warning = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/warning.js"(exports, module2) {
    "use strict";
    var Warning2 = class {
      constructor(text, opts = {}) {
        this.type = "warning";
        this.text = text;
        if (opts.node && opts.node.source) {
          let range = opts.node.rangeBy(opts);
          this.line = range.start.line;
          this.column = range.start.column;
          this.endLine = range.end.line;
          this.endColumn = range.end.column;
        }
        for (let opt in opts)
          this[opt] = opts[opt];
      }
      toString() {
        if (this.node) {
          return this.node.error(this.text, {
            plugin: this.plugin,
            index: this.index,
            word: this.word
          }).message;
        }
        if (this.plugin) {
          return this.plugin + ": " + this.text;
        }
        return this.text;
      }
    };
    module2.exports = Warning2;
    Warning2.default = Warning2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/result.js
var require_result = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/result.js"(exports, module2) {
    "use strict";
    var Warning2 = require_warning();
    var Result2 = class {
      constructor(processor, root2, opts) {
        this.processor = processor;
        this.messages = [];
        this.root = root2;
        this.opts = opts;
        this.css = void 0;
        this.map = void 0;
      }
      toString() {
        return this.css;
      }
      warn(text, opts = {}) {
        if (!opts.plugin) {
          if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
            opts.plugin = this.lastPlugin.postcssPlugin;
          }
        }
        let warning = new Warning2(text, opts);
        this.messages.push(warning);
        return warning;
      }
      warnings() {
        return this.messages.filter((i) => i.type === "warning");
      }
      get content() {
        return this.css;
      }
    };
    module2.exports = Result2;
    Result2.default = Result2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/at-rule.js
var require_at_rule = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/at-rule.js"(exports, module2) {
    "use strict";
    var Container2 = require_container();
    var AtRule2 = class extends Container2 {
      constructor(defaults) {
        super(defaults);
        this.type = "atrule";
      }
      append(...children) {
        if (!this.proxyOf.nodes)
          this.nodes = [];
        return super.append(...children);
      }
      prepend(...children) {
        if (!this.proxyOf.nodes)
          this.nodes = [];
        return super.prepend(...children);
      }
    };
    module2.exports = AtRule2;
    AtRule2.default = AtRule2;
    Container2.registerAtRule(AtRule2);
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/root.js
var require_root = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/root.js"(exports, module2) {
    "use strict";
    var Container2 = require_container();
    var LazyResult;
    var Processor2;
    var Root2 = class extends Container2 {
      constructor(defaults) {
        super(defaults);
        this.type = "root";
        if (!this.nodes)
          this.nodes = [];
      }
      removeChild(child, ignore) {
        let index = this.index(child);
        if (!ignore && index === 0 && this.nodes.length > 1) {
          this.nodes[1].raws.before = this.nodes[index].raws.before;
        }
        return super.removeChild(child);
      }
      normalize(child, sample, type) {
        let nodes = super.normalize(child);
        if (sample) {
          if (type === "prepend") {
            if (this.nodes.length > 1) {
              sample.raws.before = this.nodes[1].raws.before;
            } else {
              delete sample.raws.before;
            }
          } else if (this.first !== sample) {
            for (let node of nodes) {
              node.raws.before = sample.raws.before;
            }
          }
        }
        return nodes;
      }
      toResult(opts = {}) {
        let lazy = new LazyResult(new Processor2(), this, opts);
        return lazy.stringify();
      }
    };
    Root2.registerLazyResult = (dependant) => {
      LazyResult = dependant;
    };
    Root2.registerProcessor = (dependant) => {
      Processor2 = dependant;
    };
    module2.exports = Root2;
    Root2.default = Root2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/list.js
var require_list = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/list.js"(exports, module2) {
    "use strict";
    var list2 = {
      split(string, separators, last) {
        let array = [];
        let current = "";
        let split = false;
        let func = 0;
        let quote = false;
        let escape = false;
        for (let letter of string) {
          if (escape) {
            escape = false;
          } else if (letter === "\\") {
            escape = true;
          } else if (quote) {
            if (letter === quote) {
              quote = false;
            }
          } else if (letter === '"' || letter === "'") {
            quote = letter;
          } else if (letter === "(") {
            func += 1;
          } else if (letter === ")") {
            if (func > 0)
              func -= 1;
          } else if (func === 0) {
            if (separators.includes(letter))
              split = true;
          }
          if (split) {
            if (current !== "")
              array.push(current.trim());
            current = "";
            split = false;
          } else {
            current += letter;
          }
        }
        if (last || current !== "")
          array.push(current.trim());
        return array;
      },
      space(string) {
        let spaces = [" ", "\n", "	"];
        return list2.split(string, spaces);
      },
      comma(string) {
        return list2.split(string, [","], true);
      }
    };
    module2.exports = list2;
    list2.default = list2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/rule.js
var require_rule = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/rule.js"(exports, module2) {
    "use strict";
    var Container2 = require_container();
    var list2 = require_list();
    var Rule2 = class extends Container2 {
      constructor(defaults) {
        super(defaults);
        this.type = "rule";
        if (!this.nodes)
          this.nodes = [];
      }
      get selectors() {
        return list2.comma(this.selector);
      }
      set selectors(values) {
        let match = this.selector ? this.selector.match(/,\s*/) : null;
        let sep = match ? match[0] : "," + this.raw("between", "beforeOpen");
        this.selector = values.join(sep);
      }
    };
    module2.exports = Rule2;
    Rule2.default = Rule2;
    Container2.registerRule(Rule2);
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/parser.js
var require_parser = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/parser.js"(exports, module2) {
    "use strict";
    var Declaration2 = require_declaration();
    var tokenizer = require_tokenize();
    var Comment2 = require_comment();
    var AtRule2 = require_at_rule();
    var Root2 = require_root();
    var Rule2 = require_rule();
    var SAFE_COMMENT_NEIGHBOR = {
      empty: true,
      space: true
    };
    function findLastWithPosition(tokens) {
      for (let i = tokens.length - 1; i >= 0; i--) {
        let token = tokens[i];
        let pos = token[3] || token[2];
        if (pos)
          return pos;
      }
    }
    var Parser = class {
      constructor(input) {
        this.input = input;
        this.root = new Root2();
        this.current = this.root;
        this.spaces = "";
        this.semicolon = false;
        this.customProperty = false;
        this.createTokenizer();
        this.root.source = { input, start: { offset: 0, line: 1, column: 1 } };
      }
      createTokenizer() {
        this.tokenizer = tokenizer(this.input);
      }
      parse() {
        let token;
        while (!this.tokenizer.endOfFile()) {
          token = this.tokenizer.nextToken();
          switch (token[0]) {
            case "space":
              this.spaces += token[1];
              break;
            case ";":
              this.freeSemicolon(token);
              break;
            case "}":
              this.end(token);
              break;
            case "comment":
              this.comment(token);
              break;
            case "at-word":
              this.atrule(token);
              break;
            case "{":
              this.emptyRule(token);
              break;
            default:
              this.other(token);
              break;
          }
        }
        this.endFile();
      }
      comment(token) {
        let node = new Comment2();
        this.init(node, token[2]);
        node.source.end = this.getPosition(token[3] || token[2]);
        let text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
          node.text = "";
          node.raws.left = text;
          node.raws.right = "";
        } else {
          let match = text.match(/^(\s*)([^]*\S)(\s*)$/);
          node.text = match[2];
          node.raws.left = match[1];
          node.raws.right = match[3];
        }
      }
      emptyRule(token) {
        let node = new Rule2();
        this.init(node, token[2]);
        node.selector = "";
        node.raws.between = "";
        this.current = node;
      }
      other(start) {
        let end = false;
        let type = null;
        let colon = false;
        let bracket = null;
        let brackets = [];
        let customProperty = start[1].startsWith("--");
        let tokens = [];
        let token = start;
        while (token) {
          type = token[0];
          tokens.push(token);
          if (type === "(" || type === "[") {
            if (!bracket)
              bracket = token;
            brackets.push(type === "(" ? ")" : "]");
          } else if (customProperty && colon && type === "{") {
            if (!bracket)
              bracket = token;
            brackets.push("}");
          } else if (brackets.length === 0) {
            if (type === ";") {
              if (colon) {
                this.decl(tokens, customProperty);
                return;
              } else {
                break;
              }
            } else if (type === "{") {
              this.rule(tokens);
              return;
            } else if (type === "}") {
              this.tokenizer.back(tokens.pop());
              end = true;
              break;
            } else if (type === ":") {
              colon = true;
            }
          } else if (type === brackets[brackets.length - 1]) {
            brackets.pop();
            if (brackets.length === 0)
              bracket = null;
          }
          token = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile())
          end = true;
        if (brackets.length > 0)
          this.unclosedBracket(bracket);
        if (end && colon) {
          if (!customProperty) {
            while (tokens.length) {
              token = tokens[tokens.length - 1][0];
              if (token !== "space" && token !== "comment")
                break;
              this.tokenizer.back(tokens.pop());
            }
          }
          this.decl(tokens, customProperty);
        } else {
          this.unknownWord(tokens);
        }
      }
      rule(tokens) {
        tokens.pop();
        let node = new Rule2();
        this.init(node, tokens[0][2]);
        node.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node, "selector", tokens);
        this.current = node;
      }
      decl(tokens, customProperty) {
        let node = new Declaration2();
        this.init(node, tokens[0][2]);
        let last = tokens[tokens.length - 1];
        if (last[0] === ";") {
          this.semicolon = true;
          tokens.pop();
        }
        node.source.end = this.getPosition(last[3] || last[2] || findLastWithPosition(tokens));
        while (tokens[0][0] !== "word") {
          if (tokens.length === 1)
            this.unknownWord(tokens);
          node.raws.before += tokens.shift()[1];
        }
        node.source.start = this.getPosition(tokens[0][2]);
        node.prop = "";
        while (tokens.length) {
          let type = tokens[0][0];
          if (type === ":" || type === "space" || type === "comment") {
            break;
          }
          node.prop += tokens.shift()[1];
        }
        node.raws.between = "";
        let token;
        while (tokens.length) {
          token = tokens.shift();
          if (token[0] === ":") {
            node.raws.between += token[1];
            break;
          } else {
            if (token[0] === "word" && /\w/.test(token[1])) {
              this.unknownWord([token]);
            }
            node.raws.between += token[1];
          }
        }
        if (node.prop[0] === "_" || node.prop[0] === "*") {
          node.raws.before += node.prop[0];
          node.prop = node.prop.slice(1);
        }
        let firstSpaces = [];
        let next;
        while (tokens.length) {
          next = tokens[0][0];
          if (next !== "space" && next !== "comment")
            break;
          firstSpaces.push(tokens.shift());
        }
        this.precheckMissedSemicolon(tokens);
        for (let i = tokens.length - 1; i >= 0; i--) {
          token = tokens[i];
          if (token[1].toLowerCase() === "!important") {
            node.important = true;
            let string = this.stringFrom(tokens, i);
            string = this.spacesFromEnd(tokens) + string;
            if (string !== " !important")
              node.raws.important = string;
            break;
          } else if (token[1].toLowerCase() === "important") {
            let cache = tokens.slice(0);
            let str = "";
            for (let j = i; j > 0; j--) {
              let type = cache[j][0];
              if (str.trim().indexOf("!") === 0 && type !== "space") {
                break;
              }
              str = cache.pop()[1] + str;
            }
            if (str.trim().indexOf("!") === 0) {
              node.important = true;
              node.raws.important = str;
              tokens = cache;
            }
          }
          if (token[0] !== "space" && token[0] !== "comment") {
            break;
          }
        }
        let hasWord = tokens.some((i) => i[0] !== "space" && i[0] !== "comment");
        if (hasWord) {
          node.raws.between += firstSpaces.map((i) => i[1]).join("");
          firstSpaces = [];
        }
        this.raw(node, "value", firstSpaces.concat(tokens), customProperty);
        if (node.value.includes(":") && !customProperty) {
          this.checkMissedSemicolon(tokens);
        }
      }
      atrule(token) {
        let node = new AtRule2();
        node.name = token[1].slice(1);
        if (node.name === "") {
          this.unnamedAtrule(node, token);
        }
        this.init(node, token[2]);
        let type;
        let prev;
        let shift;
        let last = false;
        let open = false;
        let params = [];
        let brackets = [];
        while (!this.tokenizer.endOfFile()) {
          token = this.tokenizer.nextToken();
          type = token[0];
          if (type === "(" || type === "[") {
            brackets.push(type === "(" ? ")" : "]");
          } else if (type === "{" && brackets.length > 0) {
            brackets.push("}");
          } else if (type === brackets[brackets.length - 1]) {
            brackets.pop();
          }
          if (brackets.length === 0) {
            if (type === ";") {
              node.source.end = this.getPosition(token[2]);
              this.semicolon = true;
              break;
            } else if (type === "{") {
              open = true;
              break;
            } else if (type === "}") {
              if (params.length > 0) {
                shift = params.length - 1;
                prev = params[shift];
                while (prev && prev[0] === "space") {
                  prev = params[--shift];
                }
                if (prev) {
                  node.source.end = this.getPosition(prev[3] || prev[2]);
                }
              }
              this.end(token);
              break;
            } else {
              params.push(token);
            }
          } else {
            params.push(token);
          }
          if (this.tokenizer.endOfFile()) {
            last = true;
            break;
          }
        }
        node.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
          node.raws.afterName = this.spacesAndCommentsFromStart(params);
          this.raw(node, "params", params);
          if (last) {
            token = params[params.length - 1];
            node.source.end = this.getPosition(token[3] || token[2]);
            this.spaces = node.raws.between;
            node.raws.between = "";
          }
        } else {
          node.raws.afterName = "";
          node.params = "";
        }
        if (open) {
          node.nodes = [];
          this.current = node;
        }
      }
      end(token) {
        if (this.current.nodes && this.current.nodes.length) {
          this.current.raws.semicolon = this.semicolon;
        }
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.spaces = "";
        if (this.current.parent) {
          this.current.source.end = this.getPosition(token[2]);
          this.current = this.current.parent;
        } else {
          this.unexpectedClose(token);
        }
      }
      endFile() {
        if (this.current.parent)
          this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) {
          this.current.raws.semicolon = this.semicolon;
        }
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
      }
      freeSemicolon(token) {
        this.spaces += token[1];
        if (this.current.nodes) {
          let prev = this.current.nodes[this.current.nodes.length - 1];
          if (prev && prev.type === "rule" && !prev.raws.ownSemicolon) {
            prev.raws.ownSemicolon = this.spaces;
            this.spaces = "";
          }
        }
      }
      getPosition(offset) {
        let pos = this.input.fromOffset(offset);
        return {
          offset,
          line: pos.line,
          column: pos.col
        };
      }
      init(node, offset) {
        this.current.push(node);
        node.source = {
          start: this.getPosition(offset),
          input: this.input
        };
        node.raws.before = this.spaces;
        this.spaces = "";
        if (node.type !== "comment")
          this.semicolon = false;
      }
      raw(node, prop, tokens, customProperty) {
        let token, type;
        let length = tokens.length;
        let value = "";
        let clean = true;
        let next, prev;
        for (let i = 0; i < length; i += 1) {
          token = tokens[i];
          type = token[0];
          if (type === "space" && i === length - 1 && !customProperty) {
            clean = false;
          } else if (type === "comment") {
            prev = tokens[i - 1] ? tokens[i - 1][0] : "empty";
            next = tokens[i + 1] ? tokens[i + 1][0] : "empty";
            if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
              if (value.slice(-1) === ",") {
                clean = false;
              } else {
                value += token[1];
              }
            } else {
              clean = false;
            }
          } else {
            value += token[1];
          }
        }
        if (!clean) {
          let raw = tokens.reduce((all, i) => all + i[1], "");
          node.raws[prop] = { value, raw };
        }
        node[prop] = value;
      }
      spacesAndCommentsFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while (tokens.length) {
          lastTokenType = tokens[tokens.length - 1][0];
          if (lastTokenType !== "space" && lastTokenType !== "comment")
            break;
          spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
      }
      spacesAndCommentsFromStart(tokens) {
        let next;
        let spaces = "";
        while (tokens.length) {
          next = tokens[0][0];
          if (next !== "space" && next !== "comment")
            break;
          spaces += tokens.shift()[1];
        }
        return spaces;
      }
      spacesFromEnd(tokens) {
        let lastTokenType;
        let spaces = "";
        while (tokens.length) {
          lastTokenType = tokens[tokens.length - 1][0];
          if (lastTokenType !== "space")
            break;
          spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
      }
      stringFrom(tokens, from) {
        let result = "";
        for (let i = from; i < tokens.length; i++) {
          result += tokens[i][1];
        }
        tokens.splice(from, tokens.length - from);
        return result;
      }
      colon(tokens) {
        let brackets = 0;
        let token, type, prev;
        for (let [i, element] of tokens.entries()) {
          token = element;
          type = token[0];
          if (type === "(") {
            brackets += 1;
          }
          if (type === ")") {
            brackets -= 1;
          }
          if (brackets === 0 && type === ":") {
            if (!prev) {
              this.doubleColon(token);
            } else if (prev[0] === "word" && prev[1] === "progid") {
              continue;
            } else {
              return i;
            }
          }
          prev = token;
        }
        return false;
      }
      unclosedBracket(bracket) {
        throw this.input.error("Unclosed bracket", { offset: bracket[2] }, { offset: bracket[2] + 1 });
      }
      unknownWord(tokens) {
        throw this.input.error("Unknown word", { offset: tokens[0][2] }, { offset: tokens[0][2] + tokens[0][1].length });
      }
      unexpectedClose(token) {
        throw this.input.error("Unexpected }", { offset: token[2] }, { offset: token[2] + 1 });
      }
      unclosedBlock() {
        let pos = this.current.source.start;
        throw this.input.error("Unclosed block", pos.line, pos.column);
      }
      doubleColon(token) {
        throw this.input.error("Double colon", { offset: token[2] }, { offset: token[2] + token[1].length });
      }
      unnamedAtrule(node, token) {
        throw this.input.error("At-rule without name", { offset: token[2] }, { offset: token[2] + token[1].length });
      }
      precheckMissedSemicolon() {
      }
      checkMissedSemicolon(tokens) {
        let colon = this.colon(tokens);
        if (colon === false)
          return;
        let founded = 0;
        let token;
        for (let j = colon - 1; j >= 0; j--) {
          token = tokens[j];
          if (token[0] !== "space") {
            founded += 1;
            if (founded === 2)
              break;
          }
        }
        throw this.input.error("Missed semicolon", token[0] === "word" ? token[3] + 1 : token[2]);
      }
    };
    module2.exports = Parser;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/parse.js"(exports, module2) {
    "use strict";
    var Container2 = require_container();
    var Parser = require_parser();
    var Input2 = require_input();
    function parse2(css, opts) {
      let input = new Input2(css, opts);
      let parser = new Parser(input);
      try {
        parser.parse();
      } catch (e) {
        if (process.env.NODE_ENV !== "production") {
          if (e.name === "CssSyntaxError" && opts && opts.from) {
            if (/\.scss$/i.test(opts.from)) {
              e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
            } else if (/\.sass/i.test(opts.from)) {
              e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
            } else if (/\.less$/i.test(opts.from)) {
              e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
            }
          }
        }
        throw e;
      }
      return parser.root;
    }
    module2.exports = parse2;
    parse2.default = parse2;
    Container2.registerParse(parse2);
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/lazy-result.js
var require_lazy_result = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/lazy-result.js"(exports, module2) {
    "use strict";
    var { isClean, my } = require_symbols();
    var MapGenerator = require_map_generator();
    var stringify2 = require_stringify();
    var Container2 = require_container();
    var Document2 = require_document();
    var warnOnce = require_warn_once();
    var Result2 = require_result();
    var parse2 = require_parse();
    var Root2 = require_root();
    var TYPE_TO_CLASS_NAME = {
      document: "Document",
      root: "Root",
      atrule: "AtRule",
      rule: "Rule",
      decl: "Declaration",
      comment: "Comment"
    };
    var PLUGIN_PROPS = {
      postcssPlugin: true,
      prepare: true,
      Once: true,
      Document: true,
      Root: true,
      Declaration: true,
      Rule: true,
      AtRule: true,
      Comment: true,
      DeclarationExit: true,
      RuleExit: true,
      AtRuleExit: true,
      CommentExit: true,
      RootExit: true,
      DocumentExit: true,
      OnceExit: true
    };
    var NOT_VISITORS = {
      postcssPlugin: true,
      prepare: true,
      Once: true
    };
    var CHILDREN = 0;
    function isPromise(obj) {
      return typeof obj === "object" && typeof obj.then === "function";
    }
    function getEvents(node) {
      let key = false;
      let type = TYPE_TO_CLASS_NAME[node.type];
      if (node.type === "decl") {
        key = node.prop.toLowerCase();
      } else if (node.type === "atrule") {
        key = node.name.toLowerCase();
      }
      if (key && node.append) {
        return [
          type,
          type + "-" + key,
          CHILDREN,
          type + "Exit",
          type + "Exit-" + key
        ];
      } else if (key) {
        return [type, type + "-" + key, type + "Exit", type + "Exit-" + key];
      } else if (node.append) {
        return [type, CHILDREN, type + "Exit"];
      } else {
        return [type, type + "Exit"];
      }
    }
    function toStack(node) {
      let events;
      if (node.type === "document") {
        events = ["Document", CHILDREN, "DocumentExit"];
      } else if (node.type === "root") {
        events = ["Root", CHILDREN, "RootExit"];
      } else {
        events = getEvents(node);
      }
      return {
        node,
        events,
        eventIndex: 0,
        visitors: [],
        visitorIndex: 0,
        iterator: 0
      };
    }
    function cleanMarks(node) {
      node[isClean] = false;
      if (node.nodes)
        node.nodes.forEach((i) => cleanMarks(i));
      return node;
    }
    var postcss2 = {};
    var LazyResult = class {
      constructor(processor, css, opts) {
        this.stringified = false;
        this.processed = false;
        let root2;
        if (typeof css === "object" && css !== null && (css.type === "root" || css.type === "document")) {
          root2 = cleanMarks(css);
        } else if (css instanceof LazyResult || css instanceof Result2) {
          root2 = cleanMarks(css.root);
          if (css.map) {
            if (typeof opts.map === "undefined")
              opts.map = {};
            if (!opts.map.inline)
              opts.map.inline = false;
            opts.map.prev = css.map;
          }
        } else {
          let parser = parse2;
          if (opts.syntax)
            parser = opts.syntax.parse;
          if (opts.parser)
            parser = opts.parser;
          if (parser.parse)
            parser = parser.parse;
          try {
            root2 = parser(css, opts);
          } catch (error) {
            this.processed = true;
            this.error = error;
          }
          if (root2 && !root2[my]) {
            Container2.rebuild(root2);
          }
        }
        this.result = new Result2(processor, root2, opts);
        this.helpers = { ...postcss2, result: this.result, postcss: postcss2 };
        this.plugins = this.processor.plugins.map((plugin2) => {
          if (typeof plugin2 === "object" && plugin2.prepare) {
            return { ...plugin2, ...plugin2.prepare(this.result) };
          } else {
            return plugin2;
          }
        });
      }
      get [Symbol.toStringTag]() {
        return "LazyResult";
      }
      get processor() {
        return this.result.processor;
      }
      get opts() {
        return this.result.opts;
      }
      get css() {
        return this.stringify().css;
      }
      get content() {
        return this.stringify().content;
      }
      get map() {
        return this.stringify().map;
      }
      get root() {
        return this.sync().root;
      }
      get messages() {
        return this.sync().messages;
      }
      warnings() {
        return this.sync().warnings();
      }
      toString() {
        return this.css;
      }
      then(onFulfilled, onRejected) {
        if (process.env.NODE_ENV !== "production") {
          if (!("from" in this.opts)) {
            warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
          }
        }
        return this.async().then(onFulfilled, onRejected);
      }
      catch(onRejected) {
        return this.async().catch(onRejected);
      }
      finally(onFinally) {
        return this.async().then(onFinally, onFinally);
      }
      async() {
        if (this.error)
          return Promise.reject(this.error);
        if (this.processed)
          return Promise.resolve(this.result);
        if (!this.processing) {
          this.processing = this.runAsync();
        }
        return this.processing;
      }
      sync() {
        if (this.error)
          throw this.error;
        if (this.processed)
          return this.result;
        this.processed = true;
        if (this.processing) {
          throw this.getAsyncError();
        }
        for (let plugin2 of this.plugins) {
          let promise = this.runOnRoot(plugin2);
          if (isPromise(promise)) {
            throw this.getAsyncError();
          }
        }
        this.prepareVisitors();
        if (this.hasListener) {
          let root2 = this.result.root;
          while (!root2[isClean]) {
            root2[isClean] = true;
            this.walkSync(root2);
          }
          if (this.listeners.OnceExit) {
            if (root2.type === "document") {
              for (let subRoot of root2.nodes) {
                this.visitSync(this.listeners.OnceExit, subRoot);
              }
            } else {
              this.visitSync(this.listeners.OnceExit, root2);
            }
          }
        }
        return this.result;
      }
      stringify() {
        if (this.error)
          throw this.error;
        if (this.stringified)
          return this.result;
        this.stringified = true;
        this.sync();
        let opts = this.result.opts;
        let str = stringify2;
        if (opts.syntax)
          str = opts.syntax.stringify;
        if (opts.stringifier)
          str = opts.stringifier;
        if (str.stringify)
          str = str.stringify;
        let map = new MapGenerator(str, this.result.root, this.result.opts);
        let data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
      }
      walkSync(node) {
        node[isClean] = true;
        let events = getEvents(node);
        for (let event of events) {
          if (event === CHILDREN) {
            if (node.nodes) {
              node.each((child) => {
                if (!child[isClean])
                  this.walkSync(child);
              });
            }
          } else {
            let visitors = this.listeners[event];
            if (visitors) {
              if (this.visitSync(visitors, node.toProxy()))
                return;
            }
          }
        }
      }
      visitSync(visitors, node) {
        for (let [plugin2, visitor] of visitors) {
          this.result.lastPlugin = plugin2;
          let promise;
          try {
            promise = visitor(node, this.helpers);
          } catch (e) {
            throw this.handleError(e, node.proxyOf);
          }
          if (node.type !== "root" && node.type !== "document" && !node.parent) {
            return true;
          }
          if (isPromise(promise)) {
            throw this.getAsyncError();
          }
        }
      }
      runOnRoot(plugin2) {
        this.result.lastPlugin = plugin2;
        try {
          if (typeof plugin2 === "object" && plugin2.Once) {
            if (this.result.root.type === "document") {
              let roots = this.result.root.nodes.map((root2) => plugin2.Once(root2, this.helpers));
              if (isPromise(roots[0])) {
                return Promise.all(roots);
              }
              return roots;
            }
            return plugin2.Once(this.result.root, this.helpers);
          } else if (typeof plugin2 === "function") {
            return plugin2(this.result.root, this.result);
          }
        } catch (error) {
          throw this.handleError(error);
        }
      }
      getAsyncError() {
        throw new Error("Use process(css).then(cb) to work with async plugins");
      }
      handleError(error, node) {
        let plugin2 = this.result.lastPlugin;
        try {
          if (node)
            node.addToError(error);
          this.error = error;
          if (error.name === "CssSyntaxError" && !error.plugin) {
            error.plugin = plugin2.postcssPlugin;
            error.setMessage();
          } else if (plugin2.postcssVersion) {
            if (process.env.NODE_ENV !== "production") {
              let pluginName = plugin2.postcssPlugin;
              let pluginVer = plugin2.postcssVersion;
              let runtimeVer = this.result.processor.version;
              let a = pluginVer.split(".");
              let b = runtimeVer.split(".");
              if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
                console.error("Unknown error from PostCSS plugin. Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
              }
            }
          }
        } catch (err) {
          if (console && console.error)
            console.error(err);
        }
        return error;
      }
      async runAsync() {
        this.plugin = 0;
        for (let i = 0; i < this.plugins.length; i++) {
          let plugin2 = this.plugins[i];
          let promise = this.runOnRoot(plugin2);
          if (isPromise(promise)) {
            try {
              await promise;
            } catch (error) {
              throw this.handleError(error);
            }
          }
        }
        this.prepareVisitors();
        if (this.hasListener) {
          let root2 = this.result.root;
          while (!root2[isClean]) {
            root2[isClean] = true;
            let stack = [toStack(root2)];
            while (stack.length > 0) {
              let promise = this.visitTick(stack);
              if (isPromise(promise)) {
                try {
                  await promise;
                } catch (e) {
                  let node = stack[stack.length - 1].node;
                  throw this.handleError(e, node);
                }
              }
            }
          }
          if (this.listeners.OnceExit) {
            for (let [plugin2, visitor] of this.listeners.OnceExit) {
              this.result.lastPlugin = plugin2;
              try {
                if (root2.type === "document") {
                  let roots = root2.nodes.map((subRoot) => visitor(subRoot, this.helpers));
                  await Promise.all(roots);
                } else {
                  await visitor(root2, this.helpers);
                }
              } catch (e) {
                throw this.handleError(e);
              }
            }
          }
        }
        this.processed = true;
        return this.stringify();
      }
      prepareVisitors() {
        this.listeners = {};
        let add = (plugin2, type, cb) => {
          if (!this.listeners[type])
            this.listeners[type] = [];
          this.listeners[type].push([plugin2, cb]);
        };
        for (let plugin2 of this.plugins) {
          if (typeof plugin2 === "object") {
            for (let event in plugin2) {
              if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
                throw new Error(`Unknown event ${event} in ${plugin2.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
              }
              if (!NOT_VISITORS[event]) {
                if (typeof plugin2[event] === "object") {
                  for (let filter in plugin2[event]) {
                    if (filter === "*") {
                      add(plugin2, event, plugin2[event][filter]);
                    } else {
                      add(plugin2, event + "-" + filter.toLowerCase(), plugin2[event][filter]);
                    }
                  }
                } else if (typeof plugin2[event] === "function") {
                  add(plugin2, event, plugin2[event]);
                }
              }
            }
          }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }
      visitTick(stack) {
        let visit = stack[stack.length - 1];
        let { node, visitors } = visit;
        if (node.type !== "root" && node.type !== "document" && !node.parent) {
          stack.pop();
          return;
        }
        if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
          let [plugin2, visitor] = visitors[visit.visitorIndex];
          visit.visitorIndex += 1;
          if (visit.visitorIndex === visitors.length) {
            visit.visitors = [];
            visit.visitorIndex = 0;
          }
          this.result.lastPlugin = plugin2;
          try {
            return visitor(node.toProxy(), this.helpers);
          } catch (e) {
            throw this.handleError(e, node);
          }
        }
        if (visit.iterator !== 0) {
          let iterator = visit.iterator;
          let child;
          while (child = node.nodes[node.indexes[iterator]]) {
            node.indexes[iterator] += 1;
            if (!child[isClean]) {
              child[isClean] = true;
              stack.push(toStack(child));
              return;
            }
          }
          visit.iterator = 0;
          delete node.indexes[iterator];
        }
        let events = visit.events;
        while (visit.eventIndex < events.length) {
          let event = events[visit.eventIndex];
          visit.eventIndex += 1;
          if (event === CHILDREN) {
            if (node.nodes && node.nodes.length) {
              node[isClean] = true;
              visit.iterator = node.getIterator();
            }
            return;
          } else if (this.listeners[event]) {
            visit.visitors = this.listeners[event];
            return;
          }
        }
        stack.pop();
      }
    };
    LazyResult.registerPostcss = (dependant) => {
      postcss2 = dependant;
    };
    module2.exports = LazyResult;
    LazyResult.default = LazyResult;
    Root2.registerLazyResult(LazyResult);
    Document2.registerLazyResult(LazyResult);
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/no-work-result.js
var require_no_work_result = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/no-work-result.js"(exports, module2) {
    "use strict";
    var MapGenerator = require_map_generator();
    var stringify2 = require_stringify();
    var warnOnce = require_warn_once();
    var parse2 = require_parse();
    var Result2 = require_result();
    var NoWorkResult = class {
      constructor(processor, css, opts) {
        css = css.toString();
        this.stringified = false;
        this._processor = processor;
        this._css = css;
        this._opts = opts;
        this._map = void 0;
        let root2;
        let str = stringify2;
        this.result = new Result2(this._processor, root2, this._opts);
        this.result.css = css;
        let self2 = this;
        Object.defineProperty(this.result, "root", {
          get() {
            return self2.root;
          }
        });
        let map = new MapGenerator(str, root2, this._opts, css);
        if (map.isMap()) {
          let [generatedCSS, generatedMap] = map.generate();
          if (generatedCSS) {
            this.result.css = generatedCSS;
          }
          if (generatedMap) {
            this.result.map = generatedMap;
          }
        }
      }
      get [Symbol.toStringTag]() {
        return "NoWorkResult";
      }
      get processor() {
        return this.result.processor;
      }
      get opts() {
        return this.result.opts;
      }
      get css() {
        return this.result.css;
      }
      get content() {
        return this.result.css;
      }
      get map() {
        return this.result.map;
      }
      get root() {
        if (this._root) {
          return this._root;
        }
        let root2;
        let parser = parse2;
        try {
          root2 = parser(this._css, this._opts);
        } catch (error) {
          this.error = error;
        }
        if (this.error) {
          throw this.error;
        } else {
          this._root = root2;
          return root2;
        }
      }
      get messages() {
        return [];
      }
      warnings() {
        return [];
      }
      toString() {
        return this._css;
      }
      then(onFulfilled, onRejected) {
        if (process.env.NODE_ENV !== "production") {
          if (!("from" in this._opts)) {
            warnOnce("Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning.");
          }
        }
        return this.async().then(onFulfilled, onRejected);
      }
      catch(onRejected) {
        return this.async().catch(onRejected);
      }
      finally(onFinally) {
        return this.async().then(onFinally, onFinally);
      }
      async() {
        if (this.error)
          return Promise.reject(this.error);
        return Promise.resolve(this.result);
      }
      sync() {
        if (this.error)
          throw this.error;
        return this.result;
      }
    };
    module2.exports = NoWorkResult;
    NoWorkResult.default = NoWorkResult;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/processor.js
var require_processor = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/processor.js"(exports, module2) {
    "use strict";
    var NoWorkResult = require_no_work_result();
    var LazyResult = require_lazy_result();
    var Document2 = require_document();
    var Root2 = require_root();
    var Processor2 = class {
      constructor(plugins = []) {
        this.version = "8.4.13";
        this.plugins = this.normalize(plugins);
      }
      use(plugin2) {
        this.plugins = this.plugins.concat(this.normalize([plugin2]));
        return this;
      }
      process(css, opts = {}) {
        if (this.plugins.length === 0 && typeof opts.parser === "undefined" && typeof opts.stringifier === "undefined" && typeof opts.syntax === "undefined") {
          return new NoWorkResult(this, css, opts);
        } else {
          return new LazyResult(this, css, opts);
        }
      }
      normalize(plugins) {
        let normalized = [];
        for (let i of plugins) {
          if (i.postcss === true) {
            i = i();
          } else if (i.postcss) {
            i = i.postcss;
          }
          if (typeof i === "object" && Array.isArray(i.plugins)) {
            normalized = normalized.concat(i.plugins);
          } else if (typeof i === "object" && i.postcssPlugin) {
            normalized.push(i);
          } else if (typeof i === "function") {
            normalized.push(i);
          } else if (typeof i === "object" && (i.parse || i.stringify)) {
            if (process.env.NODE_ENV !== "production") {
              throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
            }
          } else {
            throw new Error(i + " is not a PostCSS plugin");
          }
        }
        return normalized;
      }
    };
    module2.exports = Processor2;
    Processor2.default = Processor2;
    Root2.registerProcessor(Processor2);
    Document2.registerProcessor(Processor2);
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/fromJSON.js
var require_fromJSON = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/fromJSON.js"(exports, module2) {
    "use strict";
    var Declaration2 = require_declaration();
    var PreviousMap = require_previous_map();
    var Comment2 = require_comment();
    var AtRule2 = require_at_rule();
    var Input2 = require_input();
    var Root2 = require_root();
    var Rule2 = require_rule();
    function fromJSON2(json, inputs) {
      if (Array.isArray(json))
        return json.map((n) => fromJSON2(n));
      let { inputs: ownInputs, ...defaults } = json;
      if (ownInputs) {
        inputs = [];
        for (let input of ownInputs) {
          let inputHydrated = { ...input, __proto__: Input2.prototype };
          if (inputHydrated.map) {
            inputHydrated.map = {
              ...inputHydrated.map,
              __proto__: PreviousMap.prototype
            };
          }
          inputs.push(inputHydrated);
        }
      }
      if (defaults.nodes) {
        defaults.nodes = json.nodes.map((n) => fromJSON2(n, inputs));
      }
      if (defaults.source) {
        let { inputId, ...source } = defaults.source;
        defaults.source = source;
        if (inputId != null) {
          defaults.source.input = inputs[inputId];
        }
      }
      if (defaults.type === "root") {
        return new Root2(defaults);
      } else if (defaults.type === "decl") {
        return new Declaration2(defaults);
      } else if (defaults.type === "rule") {
        return new Rule2(defaults);
      } else if (defaults.type === "comment") {
        return new Comment2(defaults);
      } else if (defaults.type === "atrule") {
        return new AtRule2(defaults);
      } else {
        throw new Error("Unknown node type: " + json.type);
      }
    }
    module2.exports = fromJSON2;
    fromJSON2.default = fromJSON2;
  }
});

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/postcss.js
var require_postcss = __commonJS({
  "../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/postcss.js"(exports, module2) {
    "use strict";
    var CssSyntaxError2 = require_css_syntax_error();
    var Declaration2 = require_declaration();
    var LazyResult = require_lazy_result();
    var Container2 = require_container();
    var Processor2 = require_processor();
    var stringify2 = require_stringify();
    var fromJSON2 = require_fromJSON();
    var Document2 = require_document();
    var Warning2 = require_warning();
    var Comment2 = require_comment();
    var AtRule2 = require_at_rule();
    var Result2 = require_result();
    var Input2 = require_input();
    var parse2 = require_parse();
    var list2 = require_list();
    var Rule2 = require_rule();
    var Root2 = require_root();
    var Node2 = require_node();
    function postcss2(...plugins) {
      if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
      }
      return new Processor2(plugins);
    }
    postcss2.plugin = function plugin2(name, initializer) {
      if (console && console.warn) {
        console.warn(name + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration");
        if (process.env.LANG && process.env.LANG.startsWith("cn")) {
          console.warn(name + ": \u91CC\u9762 postcss.plugin \u88AB\u5F03\u7528. \u8FC1\u79FB\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226");
        }
      }
      function creator(...args) {
        let transformer = initializer(...args);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new Processor2().version;
        return transformer;
      }
      let cache;
      Object.defineProperty(creator, "postcss", {
        get() {
          if (!cache)
            cache = creator();
          return cache;
        }
      });
      creator.process = function(css, processOpts, pluginOpts) {
        return postcss2([creator(pluginOpts)]).process(css, processOpts);
      };
      return creator;
    };
    postcss2.stringify = stringify2;
    postcss2.parse = parse2;
    postcss2.fromJSON = fromJSON2;
    postcss2.list = list2;
    postcss2.comment = (defaults) => new Comment2(defaults);
    postcss2.atRule = (defaults) => new AtRule2(defaults);
    postcss2.decl = (defaults) => new Declaration2(defaults);
    postcss2.rule = (defaults) => new Rule2(defaults);
    postcss2.root = (defaults) => new Root2(defaults);
    postcss2.document = (defaults) => new Document2(defaults);
    postcss2.CssSyntaxError = CssSyntaxError2;
    postcss2.Declaration = Declaration2;
    postcss2.Container = Container2;
    postcss2.Processor = Processor2;
    postcss2.Document = Document2;
    postcss2.Comment = Comment2;
    postcss2.Warning = Warning2;
    postcss2.AtRule = AtRule2;
    postcss2.Result = Result2;
    postcss2.Input = Input2;
    postcss2.Rule = Rule2;
    postcss2.Root = Root2;
    postcss2.Node = Node2;
    LazyResult.registerPostcss(postcss2);
    module2.exports = postcss2;
    postcss2.default = postcss2;
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/warn-once.js
var require_warn_once2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/warn-once.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports.default = warnOnce;
    var printed = {};
    function warnOnce(message) {
      if (printed[message])
        return;
      printed[message] = true;
      if (typeof console !== "undefined" && console.warn)
        console.warn(message);
    }
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/has-flag@1.0.0/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "../../node_modules/.pnpm/has-flag@1.0.0/node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(flag, argv) {
      argv = argv || process.argv;
      var terminatorPos = argv.indexOf("--");
      var prefix = /^--/.test(flag) ? "" : "--";
      var pos = argv.indexOf(prefix + flag);
      return pos !== -1 && (terminatorPos !== -1 ? pos < terminatorPos : true);
    };
  }
});

// ../../node_modules/.pnpm/supports-color@3.2.3/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "../../node_modules/.pnpm/supports-color@3.2.3/node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var hasFlag = require_has_flag();
    var support = function(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    };
    var supportLevel = function() {
      if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
        return 1;
      }
      if (process.stdout && !process.stdout.isTTY) {
        return 0;
      }
      if (process.platform === "win32") {
        return 1;
      }
      if ("CI" in process.env) {
        if ("TRAVIS" in process.env || process.env.CI === "Travis") {
          return 1;
        }
        return 0;
      }
      if ("TEAMCITY_VERSION" in process.env) {
        return process.env.TEAMCITY_VERSION.match(/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/) === null ? 0 : 1;
      }
      if (/^(screen|xterm)-256(?:color)?/.test(process.env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in process.env) {
        return 1;
      }
      if (process.env.TERM === "dumb") {
        return 0;
      }
      return 0;
    }();
    if (supportLevel === 0 && "FORCE_COLOR" in process.env) {
      supportLevel = 1;
    }
    module2.exports = process && support(supportLevel);
  }
});

// ../../node_modules/.pnpm/escape-string-regexp@1.0.5/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "../../node_modules/.pnpm/escape-string-regexp@1.0.5/node_modules/escape-string-regexp/index.js"(exports, module2) {
    "use strict";
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module2.exports = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
  }
});

// ../../node_modules/.pnpm/ansi-styles@2.2.1/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "../../node_modules/.pnpm/ansi-styles@2.2.1/node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    function assembleStyles() {
      var styles = {
        modifiers: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        colors: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          gray: [90, 39]
        },
        bgColors: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49]
        }
      };
      styles.colors.grey = styles.colors.gray;
      Object.keys(styles).forEach(function(groupName) {
        var group = styles[groupName];
        Object.keys(group).forEach(function(styleName) {
          var style2 = group[styleName];
          styles[styleName] = group[styleName] = {
            open: "\x1B[" + style2[0] + "m",
            close: "\x1B[" + style2[1] + "m"
          };
        });
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      });
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// ../../node_modules/.pnpm/ansi-regex@2.1.1/node_modules/ansi-regex/index.js
var require_ansi_regex = __commonJS({
  "../../node_modules/.pnpm/ansi-regex@2.1.1/node_modules/ansi-regex/index.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
    };
  }
});

// ../../node_modules/.pnpm/strip-ansi@3.0.1/node_modules/strip-ansi/index.js
var require_strip_ansi = __commonJS({
  "../../node_modules/.pnpm/strip-ansi@3.0.1/node_modules/strip-ansi/index.js"(exports, module2) {
    "use strict";
    var ansiRegex = require_ansi_regex()();
    module2.exports = function(str) {
      return typeof str === "string" ? str.replace(ansiRegex, "") : str;
    };
  }
});

// ../../node_modules/.pnpm/has-ansi@2.0.0/node_modules/has-ansi/index.js
var require_has_ansi = __commonJS({
  "../../node_modules/.pnpm/has-ansi@2.0.0/node_modules/has-ansi/index.js"(exports, module2) {
    "use strict";
    var ansiRegex = require_ansi_regex();
    var re = new RegExp(ansiRegex().source);
    module2.exports = re.test.bind(re);
  }
});

// ../../node_modules/.pnpm/supports-color@2.0.0/node_modules/supports-color/index.js
var require_supports_color2 = __commonJS({
  "../../node_modules/.pnpm/supports-color@2.0.0/node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var argv = process.argv;
    var terminator = argv.indexOf("--");
    var hasFlag = function(flag) {
      flag = "--" + flag;
      var pos = argv.indexOf(flag);
      return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
    };
    module2.exports = function() {
      if ("FORCE_COLOR" in process.env) {
        return true;
      }
      if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
        return false;
      }
      if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
        return true;
      }
      if (process.stdout && !process.stdout.isTTY) {
        return false;
      }
      if (process.platform === "win32") {
        return true;
      }
      if ("COLORTERM" in process.env) {
        return true;
      }
      if (process.env.TERM === "dumb") {
        return false;
      }
      if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
        return true;
      }
      return false;
    }();
  }
});

// ../../node_modules/.pnpm/chalk@1.1.3/node_modules/chalk/index.js
var require_chalk = __commonJS({
  "../../node_modules/.pnpm/chalk@1.1.3/node_modules/chalk/index.js"(exports, module2) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var ansiStyles = require_ansi_styles();
    var stripAnsi = require_strip_ansi();
    var hasAnsi = require_has_ansi();
    var supportsColor = require_supports_color2();
    var defineProps = Object.defineProperties;
    var isSimpleWindowsTerm = process.platform === "win32" && !/^xterm/i.test(process.env.TERM);
    function Chalk(options) {
      this.enabled = !options || options.enabled === void 0 ? supportsColor : options.enabled;
    }
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = "\x1B[94m";
    }
    var styles = function() {
      var ret = {};
      Object.keys(ansiStyles).forEach(function(key) {
        ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
        ret[key] = {
          get: function() {
            return build.call(this, this._styles.concat(key));
          }
        };
      });
      return ret;
    }();
    var proto = defineProps(function chalk() {
    }, styles);
    function build(_styles) {
      var builder = function() {
        return applyStyle.apply(builder, arguments);
      };
      builder._styles = _styles;
      builder.enabled = this.enabled;
      builder.__proto__ = proto;
      return builder;
    }
    function applyStyle() {
      var args = arguments;
      var argsLen = args.length;
      var str = argsLen !== 0 && String(arguments[0]);
      if (argsLen > 1) {
        for (var a = 1; a < argsLen; a++) {
          str += " " + args[a];
        }
      }
      if (!this.enabled || !str) {
        return str;
      }
      var nestedStyles = this._styles;
      var i = nestedStyles.length;
      var originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && (nestedStyles.indexOf("gray") !== -1 || nestedStyles.indexOf("grey") !== -1)) {
        ansiStyles.dim.open = "";
      }
      while (i--) {
        var code = ansiStyles[nestedStyles[i]];
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    function init() {
      var ret = {};
      Object.keys(styles).forEach(function(name) {
        ret[name] = {
          get: function() {
            return build.call(this, [name]);
          }
        };
      });
      return ret;
    }
    defineProps(Chalk.prototype, init());
    module2.exports = new Chalk();
    module2.exports.styles = ansiStyles;
    module2.exports.hasColor = hasAnsi;
    module2.exports.stripColor = stripAnsi;
    module2.exports.supportsColor = supportsColor;
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/tokenize.js
var require_tokenize2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/tokenize.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports.default = tokenize;
    var SINGLE_QUOTE = 39;
    var DOUBLE_QUOTE = 34;
    var BACKSLASH = 92;
    var SLASH = 47;
    var NEWLINE = 10;
    var SPACE = 32;
    var FEED = 12;
    var TAB = 9;
    var CR = 13;
    var OPEN_SQUARE = 91;
    var CLOSE_SQUARE = 93;
    var OPEN_PARENTHESES = 40;
    var CLOSE_PARENTHESES = 41;
    var OPEN_CURLY = 123;
    var CLOSE_CURLY = 125;
    var SEMICOLON = 59;
    var ASTERISK = 42;
    var COLON = 58;
    var AT = 64;
    var RE_AT_END = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
    var RE_WORD_END = /[ \n\t\r\f\(\)\{\}:;@!'"\\\]\[#]|\/(?=\*)/g;
    var RE_BAD_BRACKET = /.[\\\/\("'\n]/;
    function tokenize(input) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var tokens = [];
      var css = input.css.valueOf();
      var ignore = options.ignoreErrors;
      var code = void 0, next = void 0, quote = void 0, lines = void 0, last = void 0, content = void 0, escape = void 0, nextLine = void 0, nextOffset = void 0, escaped = void 0, escapePos = void 0, prev = void 0, n = void 0;
      var length = css.length;
      var offset = -1;
      var line = 1;
      var pos = 0;
      function unclosed(what) {
        throw input.error("Unclosed " + what, line, pos - offset);
      }
      while (pos < length) {
        code = css.charCodeAt(pos);
        if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
          offset = pos;
          line += 1;
        }
        switch (code) {
          case NEWLINE:
          case SPACE:
          case TAB:
          case CR:
          case FEED:
            next = pos;
            do {
              next += 1;
              code = css.charCodeAt(next);
              if (code === NEWLINE) {
                offset = next;
                line += 1;
              }
            } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);
            tokens.push(["space", css.slice(pos, next)]);
            pos = next - 1;
            break;
          case OPEN_SQUARE:
            tokens.push(["[", "[", line, pos - offset]);
            break;
          case CLOSE_SQUARE:
            tokens.push(["]", "]", line, pos - offset]);
            break;
          case OPEN_CURLY:
            tokens.push(["{", "{", line, pos - offset]);
            break;
          case CLOSE_CURLY:
            tokens.push(["}", "}", line, pos - offset]);
            break;
          case COLON:
            tokens.push([":", ":", line, pos - offset]);
            break;
          case SEMICOLON:
            tokens.push([";", ";", line, pos - offset]);
            break;
          case OPEN_PARENTHESES:
            prev = tokens.length ? tokens[tokens.length - 1][1] : "";
            n = css.charCodeAt(pos + 1);
            if (prev === "url" && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
              next = pos;
              do {
                escaped = false;
                next = css.indexOf(")", next + 1);
                if (next === -1) {
                  if (ignore) {
                    next = pos;
                    break;
                  } else {
                    unclosed("bracket");
                  }
                }
                escapePos = next;
                while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                  escapePos -= 1;
                  escaped = !escaped;
                }
              } while (escaped);
              tokens.push(["brackets", css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
              pos = next;
            } else {
              next = css.indexOf(")", pos + 1);
              content = css.slice(pos, next + 1);
              if (next === -1 || RE_BAD_BRACKET.test(content)) {
                tokens.push(["(", "(", line, pos - offset]);
              } else {
                tokens.push(["brackets", content, line, pos - offset, line, next - offset]);
                pos = next;
              }
            }
            break;
          case CLOSE_PARENTHESES:
            tokens.push([")", ")", line, pos - offset]);
            break;
          case SINGLE_QUOTE:
          case DOUBLE_QUOTE:
            quote = code === SINGLE_QUOTE ? "'" : '"';
            next = pos;
            do {
              escaped = false;
              next = css.indexOf(quote, next + 1);
              if (next === -1) {
                if (ignore) {
                  next = pos + 1;
                  break;
                } else {
                  unclosed("string");
                }
              }
              escapePos = next;
              while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
                escapePos -= 1;
                escaped = !escaped;
              }
            } while (escaped);
            content = css.slice(pos, next + 1);
            lines = content.split("\n");
            last = lines.length - 1;
            if (last > 0) {
              nextLine = line + last;
              nextOffset = next - lines[last].length;
            } else {
              nextLine = line;
              nextOffset = offset;
            }
            tokens.push(["string", css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset]);
            offset = nextOffset;
            line = nextLine;
            pos = next;
            break;
          case AT:
            RE_AT_END.lastIndex = pos + 1;
            RE_AT_END.test(css);
            if (RE_AT_END.lastIndex === 0) {
              next = css.length - 1;
            } else {
              next = RE_AT_END.lastIndex - 2;
            }
            tokens.push(["at-word", css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
            pos = next;
            break;
          case BACKSLASH:
            next = pos;
            escape = true;
            while (css.charCodeAt(next + 1) === BACKSLASH) {
              next += 1;
              escape = !escape;
            }
            code = css.charCodeAt(next + 1);
            if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
              next += 1;
            }
            tokens.push(["word", css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
            pos = next;
            break;
          default:
            if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
              next = css.indexOf("*/", pos + 2) + 1;
              if (next === 0) {
                if (ignore) {
                  next = css.length;
                } else {
                  unclosed("comment");
                }
              }
              content = css.slice(pos, next + 1);
              lines = content.split("\n");
              last = lines.length - 1;
              if (last > 0) {
                nextLine = line + last;
                nextOffset = next - lines[last].length;
              } else {
                nextLine = line;
                nextOffset = offset;
              }
              tokens.push(["comment", content, line, pos - offset, nextLine, next - nextOffset]);
              offset = nextOffset;
              line = nextLine;
              pos = next;
            } else {
              RE_WORD_END.lastIndex = pos + 1;
              RE_WORD_END.test(css);
              if (RE_WORD_END.lastIndex === 0) {
                next = css.length - 1;
              } else {
                next = RE_WORD_END.lastIndex - 2;
              }
              tokens.push(["word", css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
              pos = next;
            }
            break;
        }
        pos++;
      }
      return tokens;
    }
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/js-base64@2.6.4/node_modules/js-base64/base64.js
var require_base642 = __commonJS({
  "../../node_modules/.pnpm/js-base64@2.6.4/node_modules/js-base64/base64.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory(global2) : typeof define === "function" && define.amd ? define(factory) : factory(global2);
    })(typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : exports, function(global2) {
      "use strict";
      global2 = global2 || {};
      var _Base64 = global2.Base64;
      var version = "2.6.4";
      var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++)
          t[bin.charAt(i)] = i;
        return t;
      }(b64chars);
      var fromCharCode = String.fromCharCode;
      var cb_utob = function(c) {
        if (c.length < 2) {
          var cc = c.charCodeAt(0);
          return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
        } else {
          var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
          return fromCharCode(240 | cc >>> 18 & 7) + fromCharCode(128 | cc >>> 12 & 63) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
        }
      };
      var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
      var utob = function(u) {
        return u.replace(re_utob, cb_utob);
      };
      var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3], ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0), chars = [
          b64chars.charAt(ord >>> 18),
          b64chars.charAt(ord >>> 12 & 63),
          padlen >= 2 ? "=" : b64chars.charAt(ord >>> 6 & 63),
          padlen >= 1 ? "=" : b64chars.charAt(ord & 63)
        ];
        return chars.join("");
      };
      var btoa = global2.btoa && typeof global2.btoa == "function" ? function(b) {
        return global2.btoa(b);
      } : function(b) {
        if (b.match(/[^\x00-\xFF]/))
          throw new RangeError("The string contains invalid characters.");
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
      };
      var _encode = function(u) {
        return btoa(utob(String(u)));
      };
      var mkUriSafe = function(b64) {
        return b64.replace(/[+\/]/g, function(m0) {
          return m0 == "+" ? "-" : "_";
        }).replace(/=/g, "");
      };
      var encode = function(u, urisafe) {
        return urisafe ? mkUriSafe(_encode(u)) : _encode(u);
      };
      var encodeURI2 = function(u) {
        return encode(u, true);
      };
      var fromUint8Array;
      if (global2.Uint8Array)
        fromUint8Array = function(a, urisafe) {
          var b64 = "";
          for (var i = 0, l = a.length; i < l; i += 3) {
            var a0 = a[i], a1 = a[i + 1], a2 = a[i + 2];
            var ord = a0 << 16 | a1 << 8 | a2;
            b64 += b64chars.charAt(ord >>> 18) + b64chars.charAt(ord >>> 12 & 63) + (typeof a1 != "undefined" ? b64chars.charAt(ord >>> 6 & 63) : "=") + (typeof a2 != "undefined" ? b64chars.charAt(ord & 63) : "=");
          }
          return urisafe ? mkUriSafe(b64) : b64;
        };
      var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
      var cb_btou = function(cccc) {
        switch (cccc.length) {
          case 4:
            var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
            return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);
          case 3:
            return fromCharCode((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
          default:
            return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
        }
      };
      var btou = function(b) {
        return b.replace(re_btou, cb_btou);
      };
      var cb_decode = function(cccc) {
        var len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [
          fromCharCode(n >>> 16),
          fromCharCode(n >>> 8 & 255),
          fromCharCode(n & 255)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join("");
      };
      var _atob = global2.atob && typeof global2.atob == "function" ? function(a) {
        return global2.atob(a);
      } : function(a) {
        return a.replace(/\S{1,4}/g, cb_decode);
      };
      var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ""));
      };
      var _decode = function(a) {
        return btou(_atob(a));
      };
      var _fromURI = function(a) {
        return String(a).replace(/[-_]/g, function(m0) {
          return m0 == "-" ? "+" : "/";
        }).replace(/[^A-Za-z0-9\+\/]/g, "");
      };
      var decode = function(a) {
        return _decode(_fromURI(a));
      };
      var toUint8Array;
      if (global2.Uint8Array)
        toUint8Array = function(a) {
          return Uint8Array.from(atob(_fromURI(a)), function(c) {
            return c.charCodeAt(0);
          });
        };
      var noConflict = function() {
        var Base642 = global2.Base64;
        global2.Base64 = _Base64;
        return Base642;
      };
      global2.Base64 = {
        VERSION: version,
        atob,
        btoa,
        fromBase64: decode,
        toBase64: encode,
        utob,
        encode,
        encodeURI: encodeURI2,
        btou,
        decode,
        noConflict,
        fromUint8Array,
        toUint8Array
      };
      if (typeof Object.defineProperty === "function") {
        var noEnum = function(v) {
          return { value: v, enumerable: false, writable: true, configurable: true };
        };
        global2.Base64.extendString = function() {
          Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
            return decode(this);
          }));
          Object.defineProperty(String.prototype, "toBase64", noEnum(function(urisafe) {
            return encode(this, urisafe);
          }));
          Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
            return encode(this, true);
          }));
        };
      }
      if (global2["Meteor"]) {
        Base64 = global2.Base64;
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        module2.exports.Base64 = global2.Base64;
      } else if (typeof define === "function" && define.amd) {
        define([], function() {
          return global2.Base64;
        });
      }
      return { Base64: global2.Base64 };
    });
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/base64.js
var require_base643 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/base64.js"(exports) {
    var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    exports.encode = function(number) {
      if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
      }
      throw new TypeError("Must be between 0 and 63: " + number);
    };
    exports.decode = function(charCode) {
      var bigA = 65;
      var bigZ = 90;
      var littleA = 97;
      var littleZ = 122;
      var zero = 48;
      var nine = 57;
      var plus = 43;
      var slash = 47;
      var littleOffset = 26;
      var numberOffset = 52;
      if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
      }
      if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
      }
      if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
      }
      if (charCode == plus) {
        return 62;
      }
      if (charCode == slash) {
        return 63;
      }
      return -1;
    };
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/base64-vlq.js
var require_base64_vlq2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/base64-vlq.js"(exports) {
    var base64 = require_base643();
    var VLQ_BASE_SHIFT = 5;
    var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
    var VLQ_BASE_MASK = VLQ_BASE - 1;
    var VLQ_CONTINUATION_BIT = VLQ_BASE;
    function toVLQSigned(aValue) {
      return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
    }
    function fromVLQSigned(aValue) {
      var isNegative = (aValue & 1) === 1;
      var shifted = aValue >> 1;
      return isNegative ? -shifted : shifted;
    }
    exports.encode = function base64VLQ_encode(aValue) {
      var encoded = "";
      var digit;
      var vlq = toVLQSigned(aValue);
      do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
          digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
      } while (vlq > 0);
      return encoded;
    };
    exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
      var strLen = aStr.length;
      var result = 0;
      var shift = 0;
      var continuation, digit;
      do {
        if (aIndex >= strLen) {
          throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
          throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
      } while (continuation);
      aOutParam.value = fromVLQSigned(result);
      aOutParam.rest = aIndex;
    };
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/util.js
var require_util2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/util.js"(exports) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path2 = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path2 = url.path;
      }
      var isAbsolute = exports.isAbsolute(path2);
      var parts = path2.split(/\/+/);
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path2 = parts.join("/");
      if (path2 === "") {
        path2 = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path2;
        return urlGenerate(url);
      }
      return path2;
    }
    exports.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports.join = join;
    exports.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || !!aPath.match(urlRegexp);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports.relative = relative;
    var supportsNullProto = function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = mappingA.source - mappingB.source;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return mappingA.name - mappingB.name;
    }
    exports.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = mappingA.source - mappingB.source;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return mappingA.name - mappingB.name;
    }
    exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/array-set.js
var require_array_set2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/array-set.js"(exports) {
    var util = require_util2();
    var has = Object.prototype.hasOwnProperty;
    var hasNativeMap = typeof Map !== "undefined";
    function ArraySet() {
      this._array = [];
      this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
    }
    ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
      var set = new ArraySet();
      for (var i = 0, len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
      }
      return set;
    };
    ArraySet.prototype.size = function ArraySet_size() {
      return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    };
    ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
      var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
      var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
      var idx = this._array.length;
      if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
      }
      if (!isDuplicate) {
        if (hasNativeMap) {
          this._set.set(aStr, idx);
        } else {
          this._set[sStr] = idx;
        }
      }
    };
    ArraySet.prototype.has = function ArraySet_has(aStr) {
      if (hasNativeMap) {
        return this._set.has(aStr);
      } else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
      }
    };
    ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
      if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
          return idx;
        }
      } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) {
          return this._set[sStr];
        }
      }
      throw new Error('"' + aStr + '" is not in the set.');
    };
    ArraySet.prototype.at = function ArraySet_at(aIdx) {
      if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
      }
      throw new Error("No element indexed by " + aIdx);
    };
    ArraySet.prototype.toArray = function ArraySet_toArray() {
      return this._array.slice();
    };
    exports.ArraySet = ArraySet;
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/mapping-list.js
var require_mapping_list2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/mapping-list.js"(exports) {
    var util = require_util2();
    function generatedPositionAfter(mappingA, mappingB) {
      var lineA = mappingA.generatedLine;
      var lineB = mappingB.generatedLine;
      var columnA = mappingA.generatedColumn;
      var columnB = mappingB.generatedColumn;
      return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
    }
    function MappingList() {
      this._array = [];
      this._sorted = true;
      this._last = { generatedLine: -1, generatedColumn: 0 };
    }
    MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };
    MappingList.prototype.add = function MappingList_add(aMapping) {
      if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
      } else {
        this._sorted = false;
        this._array.push(aMapping);
      }
    };
    MappingList.prototype.toArray = function MappingList_toArray() {
      if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
      }
      return this._array;
    };
    exports.MappingList = MappingList;
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/source-map-generator.js
var require_source_map_generator2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/source-map-generator.js"(exports) {
    var base64VLQ = require_base64_vlq2();
    var util = require_util2();
    var ArraySet = require_array_set2().ArraySet;
    var MappingList = require_mapping_list2().MappingList;
    function SourceMapGenerator(aArgs) {
      if (!aArgs) {
        aArgs = {};
      }
      this._file = util.getArg(aArgs, "file", null);
      this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
      this._skipValidation = util.getArg(aArgs, "skipValidation", false);
      this._sources = new ArraySet();
      this._names = new ArraySet();
      this._mappings = new MappingList();
      this._sourcesContents = null;
    }
    SourceMapGenerator.prototype._version = 3;
    SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot
      });
      aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };
        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }
          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };
          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }
        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };
    SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, "generated");
      var original = util.getArg(aArgs, "original", null);
      var source = util.getArg(aArgs, "source", null);
      var name = util.getArg(aArgs, "name", null);
      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }
      if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
          this._sources.add(source);
        }
      }
      if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
          this._names.add(name);
        }
      }
      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source,
        name
      });
    };
    SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }
      if (aSourceContent != null) {
        if (!this._sourcesContents) {
          this._sourcesContents = /* @__PURE__ */ Object.create(null);
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };
    SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      var newSources = new ArraySet();
      var newNames = new ArraySet();
      this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source);
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }
      }, this);
      this._sources = newSources;
      this._names = newNames;
      aSourceMapConsumer.sources.forEach(function(sourceFile2) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile2 = util.join(aSourceMapPath, sourceFile2);
          }
          if (sourceRoot != null) {
            sourceFile2 = util.relative(sourceRoot, sourceFile2);
          }
          this.setSourceContent(sourceFile2, content);
        }
      }, this);
    };
    SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
      if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
        throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
      }
      if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
      } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
      } else {
        throw new Error("Invalid mapping: " + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };
    SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = "";
      var next;
      var mapping;
      var nameIdx;
      var sourceIdx;
      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            next += ";";
            previousGeneratedLine++;
          }
        } else {
          if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            next += ",";
          }
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
          sourceIdx = this._sources.indexOf(mapping.source);
          next += base64VLQ.encode(sourceIdx - previousSource);
          previousSource = sourceIdx;
          next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;
          next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;
          if (mapping.name != null) {
            nameIdx = this._names.indexOf(mapping.name);
            next += base64VLQ.encode(nameIdx - previousName);
            previousName = nameIdx;
          }
        }
        result += next;
      }
      return result;
    };
    SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function(source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
      }, this);
    };
    SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }
      return map;
    };
    SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };
    exports.SourceMapGenerator = SourceMapGenerator;
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/binary-search.js
var require_binary_search2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/binary-search.js"(exports) {
    exports.GREATEST_LOWER_BOUND = 1;
    exports.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/quick-sort.js
var require_quick_sort2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/quick-sort.js"(exports) {
    function swap(ary, x, y) {
      var temp = ary[x];
      ary[x] = ary[y];
      ary[y] = temp;
    }
    function randomIntInRange(low, high) {
      return Math.round(low + Math.random() * (high - low));
    }
    function doQuickSort(ary, comparator, p, r) {
      if (p < r) {
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        for (var j = p; j < r; j++) {
          if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
          }
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
      }
    }
    exports.quickSort = function(ary, comparator) {
      doQuickSort(ary, comparator, 0, ary.length - 1);
    };
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/source-map-consumer.js
var require_source_map_consumer2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/source-map-consumer.js"(exports) {
    var util = require_util2();
    var binarySearch = require_binary_search2();
    var ArraySet = require_array_set2().ArraySet;
    var base64VLQ = require_base64_vlq2();
    var quickSort = require_quick_sort2().quickSort;
    function SourceMapConsumer(aSourceMap) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
      }
      return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
    }
    SourceMapConsumer.fromSourceMap = function(aSourceMap) {
      return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
    };
    SourceMapConsumer.prototype._version = 3;
    SourceMapConsumer.prototype.__generatedMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
      get: function() {
        if (!this.__generatedMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
      }
    });
    SourceMapConsumer.prototype.__originalMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
      get: function() {
        if (!this.__originalMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
      }
    });
    SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
      var c = aStr.charAt(index);
      return c === ";" || c === ",";
    };
    SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };
    SourceMapConsumer.GENERATED_ORDER = 1;
    SourceMapConsumer.ORIGINAL_ORDER = 2;
    SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
    SourceMapConsumer.LEAST_UPPER_BOUND = 2;
    SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
      var mappings;
      switch (order) {
        case SourceMapConsumer.GENERATED_ORDER:
          mappings = this._generatedMappings;
          break;
        case SourceMapConsumer.ORIGINAL_ORDER:
          mappings = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var sourceRoot = this.sourceRoot;
      mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        if (source != null && sourceRoot != null) {
          source = util.join(sourceRoot, source);
        }
        return {
          source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : this._names.at(mapping.name)
        };
      }, this).forEach(aCallback, context);
    };
    SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util.getArg(aArgs, "line");
      var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
      };
      if (this.sourceRoot != null) {
        needle.source = util.relative(this.sourceRoot, needle.source);
      }
      if (!this._sources.has(needle.source)) {
        return [];
      }
      needle.source = this._sources.indexOf(needle.source);
      var mappings = [];
      var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === void 0) {
          var originalLine = mapping.originalLine;
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        } else {
          var originalColumn = mapping.originalColumn;
          while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        }
      }
      return mappings;
    };
    exports.SourceMapConsumer = SourceMapConsumer;
    function BasicSourceMapConsumer(aSourceMap) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
      }
      var version = util.getArg(sourceMap, "version");
      var sources = util.getArg(sourceMap, "sources");
      var names = util.getArg(sourceMap, "names", []);
      var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
      var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
      var mappings = util.getArg(sourceMap, "mappings");
      var file = util.getArg(sourceMap, "file", null);
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      sources = sources.map(String).map(util.normalize).map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
      });
      this._names = ArraySet.fromArray(names.map(String), true);
      this._sources = ArraySet.fromArray(sources, true);
      this.sourceRoot = sourceRoot;
      this.sourcesContent = sourcesContent;
      this._mappings = mappings;
      this.file = file;
    }
    BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
    BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);
      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
      smc.file = aSourceMap._file;
      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];
      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping();
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;
          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }
          destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
      }
      quickSort(smc.__originalMappings, util.compareByOriginalPositions);
      return smc;
    };
    BasicSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
      get: function() {
        return this._sources.toArray().map(function(s) {
          return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
        }, this);
      }
    });
    function Mapping() {
      this.generatedLine = 0;
      this.generatedColumn = 0;
      this.source = null;
      this.originalLine = null;
      this.originalColumn = null;
      this.name = null;
    }
    BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;
      while (index < length) {
        if (aStr.charAt(index) === ";") {
          generatedLine++;
          index++;
          previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") {
          index++;
        } else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;
          for (end = index; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index, end);
          segment = cachedSegments[str];
          if (segment) {
            index += str.length;
          } else {
            segment = [];
            while (index < end) {
              base64VLQ.decode(aStr, index, temp);
              value = temp.value;
              index = temp.rest;
              segment.push(value);
            }
            if (segment.length === 2) {
              throw new Error("Found a source, but no line and column");
            }
            if (segment.length === 3) {
              throw new Error("Found a source and line, but no column");
            }
            cachedSegments[str] = segment;
          }
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;
          if (segment.length > 1) {
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            mapping.originalLine += 1;
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;
            if (segment.length > 4) {
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }
          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === "number") {
            originalMappings.push(mapping);
          }
        }
      }
      quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
      this.__generatedMappings = generatedMappings;
      quickSort(originalMappings, util.compareByOriginalPositions);
      this.__originalMappings = originalMappings;
    };
    BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
      if (aNeedle[aLineName] <= 0) {
        throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
      }
      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };
    BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];
          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }
        mapping.lastGeneratedColumn = Infinity;
      }
    };
    BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
      if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, "source", null);
          if (source !== null) {
            source = this._sources.at(source);
            if (this.sourceRoot != null) {
              source = util.join(this.sourceRoot, source);
            }
          }
          var name = util.getArg(mapping, "name", null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source,
            line: util.getArg(mapping, "originalLine", null),
            column: util.getArg(mapping, "originalColumn", null),
            name
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };
    BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
      });
    };
    BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }
      if (this.sourceRoot != null) {
        aSource = util.relative(this.sourceRoot, aSource);
      }
      if (this._sources.has(aSource)) {
        return this.sourcesContent[this._sources.indexOf(aSource)];
      }
      var url;
      if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + aSource)];
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util.getArg(aArgs, "source");
      if (this.sourceRoot != null) {
        source = util.relative(this.sourceRoot, source);
      }
      if (!this._sources.has(source)) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      source = this._sources.indexOf(source);
      var needle = {
        source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) {
          return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
          };
        }
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };
    exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
    function IndexedSourceMapConsumer(aSourceMap) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
      }
      var version = util.getArg(sourceMap, "version");
      var sections = util.getArg(sourceMap, "sections");
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      this._sources = new ArraySet();
      this._names = new ArraySet();
      var lastOffset = {
        line: -1,
        column: 0
      };
      this._sections = sections.map(function(s) {
        if (s.url) {
          throw new Error("Support for url field in sections not implemented.");
        }
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
          throw new Error("Section offsets must be ordered and non-overlapping.");
        }
        lastOffset = offset;
        return {
          generatedOffset: {
            generatedLine: offsetLine + 1,
            generatedColumn: offsetColumn + 1
          },
          consumer: new SourceMapConsumer(util.getArg(s, "map"))
        };
      });
    }
    IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
    IndexedSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
      get: function() {
        var sources = [];
        for (var i = 0; i < this._sections.length; i++) {
          for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
            sources.push(this._sections[i].consumer.sources[j]);
          }
        }
        return sources;
      }
    });
    IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var sectionIndex = binarySearch.search(needle, this._sections, function(needle2, section2) {
        var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }
        return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
      });
      var section = this._sections[sectionIndex];
      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }
      return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
      });
    };
    IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };
    IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        if (section.consumer.sources.indexOf(util.getArg(aArgs, "source")) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
          };
          return ret;
        }
      }
      return {
        line: null,
        column: null
      };
    };
    IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[j];
          var source = section.consumer._sources.at(mapping.source);
          if (section.consumer.sourceRoot !== null) {
            source = util.join(section.consumer.sourceRoot, source);
          }
          this._sources.add(source);
          source = this._sources.indexOf(source);
          var name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
          var adjustedMapping = {
            source,
            generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name
          };
          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === "number") {
            this.__originalMappings.push(adjustedMapping);
          }
        }
      }
      quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util.compareByOriginalPositions);
    };
    exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/source-node.js
var require_source_node2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/lib/source-node.js"(exports) {
    var SourceMapGenerator = require_source_map_generator2().SourceMapGenerator;
    var util = require_util2();
    var REGEX_NEWLINE = /(\r?\n)/;
    var NEWLINE_CODE = 10;
    var isSourceNode = "$$$isSourceNode$$$";
    function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
      this.children = [];
      this.sourceContents = {};
      this.line = aLine == null ? null : aLine;
      this.column = aColumn == null ? null : aColumn;
      this.source = aSource == null ? null : aSource;
      this.name = aName == null ? null : aName;
      this[isSourceNode] = true;
      if (aChunks != null)
        this.add(aChunks);
    }
    SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      var node = new SourceNode();
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var remainingLinesIndex = 0;
      var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
          return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
        }
      };
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;
      var lastMapping = null;
      aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
          if (lastGeneratedLine < mapping.generatedLine) {
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
          } else {
            var nextLine = remainingLines[remainingLinesIndex];
            var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            lastMapping = mapping;
            return;
          }
        }
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[remainingLinesIndex];
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
      }
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });
      return node;
      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === void 0) {
          node.add(code);
        } else {
          var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
          node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
        }
      }
    };
    SourceNode.prototype.add = function SourceNode_add(aChunk) {
      if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
          this.add(chunk);
        }, this);
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
          this.children.push(aChunk);
        }
      } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
      }
      return this;
    };
    SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
      if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
          this.prepend(aChunk[i]);
        }
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
      } else {
        throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
      }
      return this;
    };
    SourceNode.prototype.walk = function SourceNode_walk(aFn) {
      var chunk;
      for (var i = 0, len = this.children.length; i < len; i++) {
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
          chunk.walk(aFn);
        } else {
          if (chunk !== "") {
            aFn(chunk, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
          }
        }
      }
    };
    SourceNode.prototype.join = function SourceNode_join(aSep) {
      var newChildren;
      var i;
      var len = this.children.length;
      if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
          newChildren.push(this.children[i]);
          newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
      }
      return this;
    };
    SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
      var lastChild = this.children[this.children.length - 1];
      if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
      } else if (typeof lastChild === "string") {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
      } else {
        this.children.push("".replace(aPattern, aReplacement));
      }
      return this;
    };
    SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };
    SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }
      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };
    SourceNode.prototype.toString = function SourceNode_toString() {
      var str = "";
      this.walk(function(chunk) {
        str += chunk;
      });
      return str;
    };
    SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
      var generated = {
        code: "",
        line: 1,
        column: 0
      };
      var map = new SourceMapGenerator(aArgs);
      var sourceMappingActive = false;
      var lastOriginalSource = null;
      var lastOriginalLine = null;
      var lastOriginalColumn = null;
      var lastOriginalName = null;
      this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
          if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
          lastOriginalSource = original.source;
          lastOriginalLine = original.line;
          lastOriginalColumn = original.column;
          lastOriginalName = original.name;
          sourceMappingActive = true;
        } else if (sourceMappingActive) {
          map.addMapping({
            generated: {
              line: generated.line,
              column: generated.column
            }
          });
          lastOriginalSource = null;
          sourceMappingActive = false;
        }
        for (var idx = 0, length = chunk.length; idx < length; idx++) {
          if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            if (idx + 1 === length) {
              lastOriginalSource = null;
              sourceMappingActive = false;
            } else if (sourceMappingActive) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
          } else {
            generated.column++;
          }
        }
      });
      this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
      });
      return { code: generated.code, map };
    };
    exports.SourceNode = SourceNode;
  }
});

// ../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/source-map.js
var require_source_map2 = __commonJS({
  "../../node_modules/.pnpm/source-map@0.5.7/node_modules/source-map/source-map.js"(exports) {
    exports.SourceMapGenerator = require_source_map_generator2().SourceMapGenerator;
    exports.SourceMapConsumer = require_source_map_consumer2().SourceMapConsumer;
    exports.SourceNode = require_source_node2().SourceNode;
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/previous-map.js
var require_previous_map2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/previous-map.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _jsBase = require_base642();
    var _sourceMap = require_source_map2();
    var _sourceMap2 = _interopRequireDefault(_sourceMap);
    var _path = require("path");
    var _path2 = _interopRequireDefault(_path);
    var _fs = require("fs");
    var _fs2 = _interopRequireDefault(_fs);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var PreviousMap = function() {
      function PreviousMap2(css, opts) {
        _classCallCheck(this, PreviousMap2);
        this.loadAnnotation(css);
        this.inline = this.startWith(this.annotation, "data:");
        var prev = opts.map ? opts.map.prev : void 0;
        var text = this.loadMap(opts.from, prev);
        if (text)
          this.text = text;
      }
      PreviousMap2.prototype.consumer = function consumer() {
        if (!this.consumerCache) {
          this.consumerCache = new _sourceMap2.default.SourceMapConsumer(this.text);
        }
        return this.consumerCache;
      };
      PreviousMap2.prototype.withContent = function withContent() {
        return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
      };
      PreviousMap2.prototype.startWith = function startWith(string, start) {
        if (!string)
          return false;
        return string.substr(0, start.length) === start;
      };
      PreviousMap2.prototype.loadAnnotation = function loadAnnotation(css) {
        var match = css.match(/\/\*\s*# sourceMappingURL=(.*)\s*\*\//);
        if (match)
          this.annotation = match[1].trim();
      };
      PreviousMap2.prototype.decodeInline = function decodeInline(text) {
        var utfd64 = "data:application/json;charset=utf-8;base64,";
        var utf64 = "data:application/json;charset=utf8;base64,";
        var b64 = "data:application/json;base64,";
        var uri = "data:application/json,";
        if (this.startWith(text, uri)) {
          return decodeURIComponent(text.substr(uri.length));
        } else if (this.startWith(text, b64)) {
          return _jsBase.Base64.decode(text.substr(b64.length));
        } else if (this.startWith(text, utf64)) {
          return _jsBase.Base64.decode(text.substr(utf64.length));
        } else if (this.startWith(text, utfd64)) {
          return _jsBase.Base64.decode(text.substr(utfd64.length));
        } else {
          var encoding = text.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + encoding);
        }
      };
      PreviousMap2.prototype.loadMap = function loadMap(file, prev) {
        if (prev === false)
          return false;
        if (prev) {
          if (typeof prev === "string") {
            return prev;
          } else if (typeof prev === "function") {
            var prevPath = prev(file);
            if (prevPath && _fs2.default.existsSync && _fs2.default.existsSync(prevPath)) {
              return _fs2.default.readFileSync(prevPath, "utf-8").toString().trim();
            } else {
              throw new Error("Unable to load previous source map: " + prevPath.toString());
            }
          } else if (prev instanceof _sourceMap2.default.SourceMapConsumer) {
            return _sourceMap2.default.SourceMapGenerator.fromSourceMap(prev).toString();
          } else if (prev instanceof _sourceMap2.default.SourceMapGenerator) {
            return prev.toString();
          } else if (this.isMap(prev)) {
            return JSON.stringify(prev);
          } else {
            throw new Error("Unsupported previous source map format: " + prev.toString());
          }
        } else if (this.inline) {
          return this.decodeInline(this.annotation);
        } else if (this.annotation) {
          var map = this.annotation;
          if (file)
            map = _path2.default.join(_path2.default.dirname(file), map);
          this.root = _path2.default.dirname(map);
          if (_fs2.default.existsSync && _fs2.default.existsSync(map)) {
            return _fs2.default.readFileSync(map, "utf-8").toString().trim();
          } else {
            return false;
          }
        }
      };
      PreviousMap2.prototype.isMap = function isMap(map) {
        if ((typeof map === "undefined" ? "undefined" : _typeof(map)) !== "object")
          return false;
        return typeof map.mappings === "string" || typeof map._mappings === "string";
      };
      return PreviousMap2;
    }();
    exports.default = PreviousMap;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/input.js
var require_input2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/input.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _cssSyntaxError = require_css_syntax_error2();
    var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);
    var _previousMap = require_previous_map2();
    var _previousMap2 = _interopRequireDefault(_previousMap);
    var _path = require("path");
    var _path2 = _interopRequireDefault(_path);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var sequence = 0;
    var Input2 = function() {
      function Input3(css) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, Input3);
        this.css = css.toString();
        if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
          this.css = this.css.slice(1);
        }
        if (opts.from) {
          if (/^\w+:\/\//.test(opts.from)) {
            this.file = opts.from;
          } else {
            this.file = _path2.default.resolve(opts.from);
          }
        }
        var map = new _previousMap2.default(this.css, opts);
        if (map.text) {
          this.map = map;
          var file = map.consumer().file;
          if (!this.file && file)
            this.file = this.mapResolve(file);
        }
        if (!this.file) {
          sequence += 1;
          this.id = "<input css " + sequence + ">";
        }
        if (this.map)
          this.map.file = this.from;
      }
      Input3.prototype.error = function error(message, line, column) {
        var opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        var result = void 0;
        var origin = this.origin(line, column);
        if (origin) {
          result = new _cssSyntaxError2.default(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
        } else {
          result = new _cssSyntaxError2.default(message, line, column, this.css, this.file, opts.plugin);
        }
        result.input = { line, column, source: this.css };
        if (this.file)
          result.input.file = this.file;
        return result;
      };
      Input3.prototype.origin = function origin(line, column) {
        if (!this.map)
          return false;
        var consumer = this.map.consumer();
        var from = consumer.originalPositionFor({ line, column });
        if (!from.source)
          return false;
        var result = {
          file: this.mapResolve(from.source),
          line: from.line,
          column: from.column
        };
        var source = consumer.sourceContentFor(from.source);
        if (source)
          result.source = source;
        return result;
      };
      Input3.prototype.mapResolve = function mapResolve(file) {
        if (/^\w+:\/\//.test(file)) {
          return file;
        } else {
          return _path2.default.resolve(this.map.consumer().sourceRoot || ".", file);
        }
      };
      _createClass(Input3, [{
        key: "from",
        get: function get() {
          return this.file || this.id;
        }
      }]);
      return Input3;
    }();
    exports.default = Input2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/terminal-highlight.js
var require_terminal_highlight2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/terminal-highlight.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _chalk = require_chalk();
    var _chalk2 = _interopRequireDefault(_chalk);
    var _tokenize = require_tokenize2();
    var _tokenize2 = _interopRequireDefault(_tokenize);
    var _input = require_input2();
    var _input2 = _interopRequireDefault(_input);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var colors = new _chalk2.default.constructor({ enabled: true });
    var HIGHLIGHT_THEME = {
      "brackets": colors.cyan,
      "at-word": colors.cyan,
      "call": colors.cyan,
      "comment": colors.gray,
      "string": colors.green,
      "class": colors.yellow,
      "hash": colors.magenta,
      "(": colors.cyan,
      ")": colors.cyan,
      "{": colors.yellow,
      "}": colors.yellow,
      "[": colors.yellow,
      "]": colors.yellow,
      ":": colors.yellow,
      ";": colors.yellow
    };
    function getTokenType(_ref, index, tokens) {
      var type = _ref[0], value = _ref[1];
      if (type === "word") {
        if (value[0] === ".") {
          return "class";
        }
        if (value[0] === "#") {
          return "hash";
        }
      }
      var nextToken = tokens[index + 1];
      if (nextToken && (nextToken[0] === "brackets" || nextToken[0] === "(")) {
        return "call";
      }
      return type;
    }
    function terminalHighlight(css) {
      var tokens = (0, _tokenize2.default)(new _input2.default(css), { ignoreErrors: true });
      return tokens.map(function(token, index) {
        var color = HIGHLIGHT_THEME[getTokenType(token, index, tokens)];
        if (color) {
          return token[1].split(/\r?\n/).map(function(i) {
            return color(i);
          }).join("\n");
        } else {
          return token[1];
        }
      }).join("");
    }
    exports.default = terminalHighlight;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/css-syntax-error.js
var require_css_syntax_error2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/css-syntax-error.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _supportsColor = require_supports_color();
    var _supportsColor2 = _interopRequireDefault(_supportsColor);
    var _chalk = require_chalk();
    var _chalk2 = _interopRequireDefault(_chalk);
    var _terminalHighlight = require_terminal_highlight2();
    var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var CssSyntaxError2 = function() {
      function CssSyntaxError3(message, line, column, source, file, plugin2) {
        _classCallCheck(this, CssSyntaxError3);
        this.name = "CssSyntaxError";
        this.reason = message;
        if (file) {
          this.file = file;
        }
        if (source) {
          this.source = source;
        }
        if (plugin2) {
          this.plugin = plugin2;
        }
        if (typeof line !== "undefined" && typeof column !== "undefined") {
          this.line = line;
          this.column = column;
        }
        this.setMessage();
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, CssSyntaxError3);
        }
      }
      CssSyntaxError3.prototype.setMessage = function setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "";
        this.message += this.file ? this.file : "<css input>";
        if (typeof this.line !== "undefined") {
          this.message += ":" + this.line + ":" + this.column;
        }
        this.message += ": " + this.reason;
      };
      CssSyntaxError3.prototype.showSourceCode = function showSourceCode(color) {
        var _this = this;
        if (!this.source)
          return "";
        var css = this.source;
        if (typeof color === "undefined")
          color = _supportsColor2.default;
        if (color)
          css = (0, _terminalHighlight2.default)(css);
        var lines = css.split(/\r?\n/);
        var start = Math.max(this.line - 3, 0);
        var end = Math.min(this.line + 2, lines.length);
        var maxWidth = String(end).length;
        var colors = new _chalk2.default.constructor({ enabled: true });
        function mark(text) {
          if (color) {
            return colors.red.bold(text);
          } else {
            return text;
          }
        }
        function aside(text) {
          if (color) {
            return colors.gray(text);
          } else {
            return text;
          }
        }
        return lines.slice(start, end).map(function(line, index) {
          var number = start + 1 + index;
          var gutter = " " + (" " + number).slice(-maxWidth) + " | ";
          if (number === _this.line) {
            var spacing = aside(gutter.replace(/\d/g, " ")) + line.slice(0, _this.column - 1).replace(/[^\t]/g, " ");
            return mark(">") + aside(gutter) + line + "\n " + spacing + mark("^");
          } else {
            return " " + aside(gutter) + line;
          }
        }).join("\n");
      };
      CssSyntaxError3.prototype.toString = function toString() {
        var code = this.showSourceCode();
        if (code) {
          code = "\n\n" + code + "\n";
        }
        return this.name + ": " + this.message + code;
      };
      _createClass(CssSyntaxError3, [{
        key: "generated",
        get: function get() {
          (0, _warnOnce2.default)("CssSyntaxError#generated is deprecated. Use input instead.");
          return this.input;
        }
      }]);
      return CssSyntaxError3;
    }();
    exports.default = CssSyntaxError2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/stringifier.js
var require_stringifier2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/stringifier.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var defaultRaw = {
      colon: ": ",
      indent: "    ",
      beforeDecl: "\n",
      beforeRule: "\n",
      beforeOpen: " ",
      beforeClose: "\n",
      beforeComment: "\n",
      after: "\n",
      emptyBody: "",
      commentLeft: " ",
      commentRight: " "
    };
    function capitalize(str) {
      return str[0].toUpperCase() + str.slice(1);
    }
    var Stringifier = function() {
      function Stringifier2(builder) {
        _classCallCheck(this, Stringifier2);
        this.builder = builder;
      }
      Stringifier2.prototype.stringify = function stringify2(node, semicolon) {
        this[node.type](node, semicolon);
      };
      Stringifier2.prototype.root = function root2(node) {
        this.body(node);
        if (node.raws.after)
          this.builder(node.raws.after);
      };
      Stringifier2.prototype.comment = function comment2(node) {
        var left = this.raw(node, "left", "commentLeft");
        var right = this.raw(node, "right", "commentRight");
        this.builder("/*" + left + node.text + right + "*/", node);
      };
      Stringifier2.prototype.decl = function decl2(node, semicolon) {
        var between = this.raw(node, "between", "colon");
        var string = node.prop + between + this.rawValue(node, "value");
        if (node.important) {
          string += node.raws.important || " !important";
        }
        if (semicolon)
          string += ";";
        this.builder(string, node);
      };
      Stringifier2.prototype.rule = function rule2(node) {
        this.block(node, this.rawValue(node, "selector"));
      };
      Stringifier2.prototype.atrule = function atrule(node, semicolon) {
        var name = "@" + node.name;
        var params = node.params ? this.rawValue(node, "params") : "";
        if (typeof node.raws.afterName !== "undefined") {
          name += node.raws.afterName;
        } else if (params) {
          name += " ";
        }
        if (node.nodes) {
          this.block(node, name + params);
        } else {
          var end = (node.raws.between || "") + (semicolon ? ";" : "");
          this.builder(name + params + end, node);
        }
      };
      Stringifier2.prototype.body = function body(node) {
        var last = node.nodes.length - 1;
        while (last > 0) {
          if (node.nodes[last].type !== "comment")
            break;
          last -= 1;
        }
        var semicolon = this.raw(node, "semicolon");
        for (var i = 0; i < node.nodes.length; i++) {
          var child = node.nodes[i];
          var before = this.raw(child, "before");
          if (before)
            this.builder(before);
          this.stringify(child, last !== i || semicolon);
        }
      };
      Stringifier2.prototype.block = function block(node, start) {
        var between = this.raw(node, "between", "beforeOpen");
        this.builder(start + between + "{", node, "start");
        var after = void 0;
        if (node.nodes && node.nodes.length) {
          this.body(node);
          after = this.raw(node, "after");
        } else {
          after = this.raw(node, "after", "emptyBody");
        }
        if (after)
          this.builder(after);
        this.builder("}", node, "end");
      };
      Stringifier2.prototype.raw = function raw(node, own, detect) {
        var value = void 0;
        if (!detect)
          detect = own;
        if (own) {
          value = node.raws[own];
          if (typeof value !== "undefined")
            return value;
        }
        var parent = node.parent;
        if (detect === "before") {
          if (!parent || parent.type === "root" && parent.first === node) {
            return "";
          }
        }
        if (!parent)
          return defaultRaw[detect];
        var root2 = node.root();
        if (!root2.rawCache)
          root2.rawCache = {};
        if (typeof root2.rawCache[detect] !== "undefined") {
          return root2.rawCache[detect];
        }
        if (detect === "before" || detect === "after") {
          return this.beforeAfter(node, detect);
        } else {
          var method = "raw" + capitalize(detect);
          if (this[method]) {
            value = this[method](root2, node);
          } else {
            root2.walk(function(i) {
              value = i.raws[own];
              if (typeof value !== "undefined")
                return false;
            });
          }
        }
        if (typeof value === "undefined")
          value = defaultRaw[detect];
        root2.rawCache[detect] = value;
        return value;
      };
      Stringifier2.prototype.rawSemicolon = function rawSemicolon(root2) {
        var value = void 0;
        root2.walk(function(i) {
          if (i.nodes && i.nodes.length && i.last.type === "decl") {
            value = i.raws.semicolon;
            if (typeof value !== "undefined")
              return false;
          }
        });
        return value;
      };
      Stringifier2.prototype.rawEmptyBody = function rawEmptyBody(root2) {
        var value = void 0;
        root2.walk(function(i) {
          if (i.nodes && i.nodes.length === 0) {
            value = i.raws.after;
            if (typeof value !== "undefined")
              return false;
          }
        });
        return value;
      };
      Stringifier2.prototype.rawIndent = function rawIndent(root2) {
        if (root2.raws.indent)
          return root2.raws.indent;
        var value = void 0;
        root2.walk(function(i) {
          var p = i.parent;
          if (p && p !== root2 && p.parent && p.parent === root2) {
            if (typeof i.raws.before !== "undefined") {
              var parts = i.raws.before.split("\n");
              value = parts[parts.length - 1];
              value = value.replace(/[^\s]/g, "");
              return false;
            }
          }
        });
        return value;
      };
      Stringifier2.prototype.rawBeforeComment = function rawBeforeComment(root2, node) {
        var value = void 0;
        root2.walkComments(function(i) {
          if (typeof i.raws.before !== "undefined") {
            value = i.raws.before;
            if (value.indexOf("\n") !== -1) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        });
        if (typeof value === "undefined") {
          value = this.raw(node, null, "beforeDecl");
        }
        return value;
      };
      Stringifier2.prototype.rawBeforeDecl = function rawBeforeDecl(root2, node) {
        var value = void 0;
        root2.walkDecls(function(i) {
          if (typeof i.raws.before !== "undefined") {
            value = i.raws.before;
            if (value.indexOf("\n") !== -1) {
              value = value.replace(/[^\n]+$/, "");
            }
            return false;
          }
        });
        if (typeof value === "undefined") {
          value = this.raw(node, null, "beforeRule");
        }
        return value;
      };
      Stringifier2.prototype.rawBeforeRule = function rawBeforeRule(root2) {
        var value = void 0;
        root2.walk(function(i) {
          if (i.nodes && (i.parent !== root2 || root2.first !== i)) {
            if (typeof i.raws.before !== "undefined") {
              value = i.raws.before;
              if (value.indexOf("\n") !== -1) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          }
        });
        return value;
      };
      Stringifier2.prototype.rawBeforeClose = function rawBeforeClose(root2) {
        var value = void 0;
        root2.walk(function(i) {
          if (i.nodes && i.nodes.length > 0) {
            if (typeof i.raws.after !== "undefined") {
              value = i.raws.after;
              if (value.indexOf("\n") !== -1) {
                value = value.replace(/[^\n]+$/, "");
              }
              return false;
            }
          }
        });
        return value;
      };
      Stringifier2.prototype.rawBeforeOpen = function rawBeforeOpen(root2) {
        var value = void 0;
        root2.walk(function(i) {
          if (i.type !== "decl") {
            value = i.raws.between;
            if (typeof value !== "undefined")
              return false;
          }
        });
        return value;
      };
      Stringifier2.prototype.rawColon = function rawColon(root2) {
        var value = void 0;
        root2.walkDecls(function(i) {
          if (typeof i.raws.between !== "undefined") {
            value = i.raws.between.replace(/[^\s:]/g, "");
            return false;
          }
        });
        return value;
      };
      Stringifier2.prototype.beforeAfter = function beforeAfter(node, detect) {
        var value = void 0;
        if (node.type === "decl") {
          value = this.raw(node, null, "beforeDecl");
        } else if (node.type === "comment") {
          value = this.raw(node, null, "beforeComment");
        } else if (detect === "before") {
          value = this.raw(node, null, "beforeRule");
        } else {
          value = this.raw(node, null, "beforeClose");
        }
        var buf = node.parent;
        var depth = 0;
        while (buf && buf.type !== "root") {
          depth += 1;
          buf = buf.parent;
        }
        if (value.indexOf("\n") !== -1) {
          var indent = this.raw(node, null, "indent");
          if (indent.length) {
            for (var step = 0; step < depth; step++) {
              value += indent;
            }
          }
        }
        return value;
      };
      Stringifier2.prototype.rawValue = function rawValue(node, prop) {
        var value = node[prop];
        var raw = node.raws[prop];
        if (raw && raw.value === value) {
          return raw.raw;
        } else {
          return value;
        }
      };
      return Stringifier2;
    }();
    exports.default = Stringifier;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/stringify.js
var require_stringify2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/stringify.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports.default = stringify2;
    var _stringifier = require_stringifier2();
    var _stringifier2 = _interopRequireDefault(_stringifier);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function stringify2(node, builder) {
      var str = new _stringifier2.default(builder);
      str.stringify(node);
    }
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/node.js
var require_node2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/node.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _cssSyntaxError = require_css_syntax_error2();
    var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);
    var _stringifier = require_stringifier2();
    var _stringifier2 = _interopRequireDefault(_stringifier);
    var _stringify = require_stringify2();
    var _stringify2 = _interopRequireDefault(_stringify);
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var cloneNode = function cloneNode2(obj, parent) {
      var cloned = new obj.constructor();
      for (var i in obj) {
        if (!obj.hasOwnProperty(i))
          continue;
        var value = obj[i];
        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
        if (i === "parent" && type === "object") {
          if (parent)
            cloned[i] = parent;
        } else if (i === "source") {
          cloned[i] = value;
        } else if (value instanceof Array) {
          cloned[i] = value.map(function(j) {
            return cloneNode2(j, cloned);
          });
        } else if (i !== "before" && i !== "after" && i !== "between" && i !== "semicolon") {
          if (type === "object" && value !== null)
            value = cloneNode2(value);
          cloned[i] = value;
        }
      }
      return cloned;
    };
    var Node2 = function() {
      function Node3() {
        var defaults = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        _classCallCheck(this, Node3);
        this.raws = {};
        if ((typeof defaults === "undefined" ? "undefined" : _typeof(defaults)) !== "object" && typeof defaults !== "undefined") {
          throw new Error("PostCSS nodes constructor accepts object, not " + JSON.stringify(defaults));
        }
        for (var name in defaults) {
          this[name] = defaults[name];
        }
      }
      Node3.prototype.error = function error(message) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.source) {
          var pos = this.positionBy(opts);
          return this.source.input.error(message, pos.line, pos.column, opts);
        } else {
          return new _cssSyntaxError2.default(message);
        }
      };
      Node3.prototype.warn = function warn(result, text, opts) {
        var data = { node: this };
        for (var i in opts) {
          data[i] = opts[i];
        }
        return result.warn(text, data);
      };
      Node3.prototype.remove = function remove() {
        if (this.parent) {
          this.parent.removeChild(this);
        }
        this.parent = void 0;
        return this;
      };
      Node3.prototype.toString = function toString() {
        var stringifier = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _stringify2.default;
        if (stringifier.stringify)
          stringifier = stringifier.stringify;
        var result = "";
        stringifier(this, function(i) {
          result += i;
        });
        return result;
      };
      Node3.prototype.clone = function clone() {
        var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var cloned = cloneNode(this);
        for (var name in overrides) {
          cloned[name] = overrides[name];
        }
        return cloned;
      };
      Node3.prototype.cloneBefore = function cloneBefore() {
        var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var cloned = this.clone(overrides);
        this.parent.insertBefore(this, cloned);
        return cloned;
      };
      Node3.prototype.cloneAfter = function cloneAfter() {
        var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var cloned = this.clone(overrides);
        this.parent.insertAfter(this, cloned);
        return cloned;
      };
      Node3.prototype.replaceWith = function replaceWith() {
        if (this.parent) {
          for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
            nodes[_key] = arguments[_key];
          }
          for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
            var _ref;
            if (_isArray) {
              if (_i >= _iterator.length)
                break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done)
                break;
              _ref = _i.value;
            }
            var node = _ref;
            this.parent.insertBefore(this, node);
          }
          this.remove();
        }
        return this;
      };
      Node3.prototype.moveTo = function moveTo(newParent) {
        this.cleanRaws(this.root() === newParent.root());
        this.remove();
        newParent.append(this);
        return this;
      };
      Node3.prototype.moveBefore = function moveBefore(otherNode) {
        this.cleanRaws(this.root() === otherNode.root());
        this.remove();
        otherNode.parent.insertBefore(otherNode, this);
        return this;
      };
      Node3.prototype.moveAfter = function moveAfter(otherNode) {
        this.cleanRaws(this.root() === otherNode.root());
        this.remove();
        otherNode.parent.insertAfter(otherNode, this);
        return this;
      };
      Node3.prototype.next = function next() {
        var index = this.parent.index(this);
        return this.parent.nodes[index + 1];
      };
      Node3.prototype.prev = function prev() {
        var index = this.parent.index(this);
        return this.parent.nodes[index - 1];
      };
      Node3.prototype.toJSON = function toJSON() {
        var fixed = {};
        for (var name in this) {
          if (!this.hasOwnProperty(name))
            continue;
          if (name === "parent")
            continue;
          var value = this[name];
          if (value instanceof Array) {
            fixed[name] = value.map(function(i) {
              if ((typeof i === "undefined" ? "undefined" : _typeof(i)) === "object" && i.toJSON) {
                return i.toJSON();
              } else {
                return i;
              }
            });
          } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value.toJSON) {
            fixed[name] = value.toJSON();
          } else {
            fixed[name] = value;
          }
        }
        return fixed;
      };
      Node3.prototype.raw = function raw(prop, defaultType) {
        var str = new _stringifier2.default();
        return str.raw(this, prop, defaultType);
      };
      Node3.prototype.root = function root2() {
        var result = this;
        while (result.parent) {
          result = result.parent;
        }
        return result;
      };
      Node3.prototype.cleanRaws = function cleanRaws(keepBetween) {
        delete this.raws.before;
        delete this.raws.after;
        if (!keepBetween)
          delete this.raws.between;
      };
      Node3.prototype.positionInside = function positionInside(index) {
        var string = this.toString();
        var column = this.source.start.column;
        var line = this.source.start.line;
        for (var i = 0; i < index; i++) {
          if (string[i] === "\n") {
            column = 1;
            line += 1;
          } else {
            column += 1;
          }
        }
        return { line, column };
      };
      Node3.prototype.positionBy = function positionBy(opts) {
        var pos = this.source.start;
        if (opts.index) {
          pos = this.positionInside(opts.index);
        } else if (opts.word) {
          var index = this.toString().indexOf(opts.word);
          if (index !== -1)
            pos = this.positionInside(index);
        }
        return pos;
      };
      Node3.prototype.removeSelf = function removeSelf() {
        (0, _warnOnce2.default)("Node#removeSelf is deprecated. Use Node#remove.");
        return this.remove();
      };
      Node3.prototype.replace = function replace(nodes) {
        (0, _warnOnce2.default)("Node#replace is deprecated. Use Node#replaceWith");
        return this.replaceWith(nodes);
      };
      Node3.prototype.style = function style2(own, detect) {
        (0, _warnOnce2.default)("Node#style() is deprecated. Use Node#raw()");
        return this.raw(own, detect);
      };
      Node3.prototype.cleanStyles = function cleanStyles(keepBetween) {
        (0, _warnOnce2.default)("Node#cleanStyles() is deprecated. Use Node#cleanRaws()");
        return this.cleanRaws(keepBetween);
      };
      _createClass(Node3, [{
        key: "before",
        get: function get() {
          (0, _warnOnce2.default)("Node#before is deprecated. Use Node#raws.before");
          return this.raws.before;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Node#before is deprecated. Use Node#raws.before");
          this.raws.before = val;
        }
      }, {
        key: "between",
        get: function get() {
          (0, _warnOnce2.default)("Node#between is deprecated. Use Node#raws.between");
          return this.raws.between;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Node#between is deprecated. Use Node#raws.between");
          this.raws.between = val;
        }
      }]);
      return Node3;
    }();
    exports.default = Node2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/declaration.js
var require_declaration2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/declaration.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    var _node = require_node2();
    var _node2 = _interopRequireDefault(_node);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Declaration2 = function(_Node) {
      _inherits(Declaration3, _Node);
      function Declaration3(defaults) {
        _classCallCheck(this, Declaration3);
        var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));
        _this.type = "decl";
        return _this;
      }
      _createClass(Declaration3, [{
        key: "_value",
        get: function get() {
          (0, _warnOnce2.default)("Node#_value was deprecated. Use Node#raws.value");
          return this.raws.value;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Node#_value was deprecated. Use Node#raws.value");
          this.raws.value = val;
        }
      }, {
        key: "_important",
        get: function get() {
          (0, _warnOnce2.default)("Node#_important was deprecated. Use Node#raws.important");
          return this.raws.important;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Node#_important was deprecated. Use Node#raws.important");
          this.raws.important = val;
        }
      }]);
      return Declaration3;
    }(_node2.default);
    exports.default = Declaration2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/map-generator.js
var require_map_generator2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/map-generator.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _jsBase = require_base642();
    var _sourceMap = require_source_map2();
    var _sourceMap2 = _interopRequireDefault(_sourceMap);
    var _path = require("path");
    var _path2 = _interopRequireDefault(_path);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var MapGenerator = function() {
      function MapGenerator2(stringify2, root2, opts) {
        _classCallCheck(this, MapGenerator2);
        this.stringify = stringify2;
        this.mapOpts = opts.map || {};
        this.root = root2;
        this.opts = opts;
      }
      MapGenerator2.prototype.isMap = function isMap() {
        if (typeof this.opts.map !== "undefined") {
          return !!this.opts.map;
        } else {
          return this.previous().length > 0;
        }
      };
      MapGenerator2.prototype.previous = function previous() {
        var _this = this;
        if (!this.previousMaps) {
          this.previousMaps = [];
          this.root.walk(function(node) {
            if (node.source && node.source.input.map) {
              var map = node.source.input.map;
              if (_this.previousMaps.indexOf(map) === -1) {
                _this.previousMaps.push(map);
              }
            }
          });
        }
        return this.previousMaps;
      };
      MapGenerator2.prototype.isInline = function isInline() {
        if (typeof this.mapOpts.inline !== "undefined") {
          return this.mapOpts.inline;
        }
        var annotation = this.mapOpts.annotation;
        if (typeof annotation !== "undefined" && annotation !== true) {
          return false;
        }
        if (this.previous().length) {
          return this.previous().some(function(i) {
            return i.inline;
          });
        } else {
          return true;
        }
      };
      MapGenerator2.prototype.isSourcesContent = function isSourcesContent() {
        if (typeof this.mapOpts.sourcesContent !== "undefined") {
          return this.mapOpts.sourcesContent;
        }
        if (this.previous().length) {
          return this.previous().some(function(i) {
            return i.withContent();
          });
        } else {
          return true;
        }
      };
      MapGenerator2.prototype.clearAnnotation = function clearAnnotation() {
        if (this.mapOpts.annotation === false)
          return;
        var node = void 0;
        for (var i = this.root.nodes.length - 1; i >= 0; i--) {
          node = this.root.nodes[i];
          if (node.type !== "comment")
            continue;
          if (node.text.indexOf("# sourceMappingURL=") === 0) {
            this.root.removeChild(i);
          }
        }
      };
      MapGenerator2.prototype.setSourcesContent = function setSourcesContent() {
        var _this2 = this;
        var already = {};
        this.root.walk(function(node) {
          if (node.source) {
            var from = node.source.input.from;
            if (from && !already[from]) {
              already[from] = true;
              var relative = _this2.relative(from);
              _this2.map.setSourceContent(relative, node.source.input.css);
            }
          }
        });
      };
      MapGenerator2.prototype.applyPrevMaps = function applyPrevMaps() {
        for (var _iterator = this.previous(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var prev = _ref;
          var from = this.relative(prev.file);
          var root2 = prev.root || _path2.default.dirname(prev.file);
          var map = void 0;
          if (this.mapOpts.sourcesContent === false) {
            map = new _sourceMap2.default.SourceMapConsumer(prev.text);
            if (map.sourcesContent) {
              map.sourcesContent = map.sourcesContent.map(function() {
                return null;
              });
            }
          } else {
            map = prev.consumer();
          }
          this.map.applySourceMap(map, from, this.relative(root2));
        }
      };
      MapGenerator2.prototype.isAnnotation = function isAnnotation() {
        if (this.isInline()) {
          return true;
        } else if (typeof this.mapOpts.annotation !== "undefined") {
          return this.mapOpts.annotation;
        } else if (this.previous().length) {
          return this.previous().some(function(i) {
            return i.annotation;
          });
        } else {
          return true;
        }
      };
      MapGenerator2.prototype.addAnnotation = function addAnnotation() {
        var content = void 0;
        if (this.isInline()) {
          content = "data:application/json;base64," + _jsBase.Base64.encode(this.map.toString());
        } else if (typeof this.mapOpts.annotation === "string") {
          content = this.mapOpts.annotation;
        } else {
          content = this.outputFile() + ".map";
        }
        var eol = "\n";
        if (this.css.indexOf("\r\n") !== -1)
          eol = "\r\n";
        this.css += eol + "/*# sourceMappingURL=" + content + " */";
      };
      MapGenerator2.prototype.outputFile = function outputFile() {
        if (this.opts.to) {
          return this.relative(this.opts.to);
        } else if (this.opts.from) {
          return this.relative(this.opts.from);
        } else {
          return "to.css";
        }
      };
      MapGenerator2.prototype.generateMap = function generateMap() {
        this.generateString();
        if (this.isSourcesContent())
          this.setSourcesContent();
        if (this.previous().length > 0)
          this.applyPrevMaps();
        if (this.isAnnotation())
          this.addAnnotation();
        if (this.isInline()) {
          return [this.css];
        } else {
          return [this.css, this.map];
        }
      };
      MapGenerator2.prototype.relative = function relative(file) {
        if (file.indexOf("<") === 0)
          return file;
        if (/^\w+:\/\//.test(file))
          return file;
        var from = this.opts.to ? _path2.default.dirname(this.opts.to) : ".";
        if (typeof this.mapOpts.annotation === "string") {
          from = _path2.default.dirname(_path2.default.resolve(from, this.mapOpts.annotation));
        }
        file = _path2.default.relative(from, file);
        if (_path2.default.sep === "\\") {
          return file.replace(/\\/g, "/");
        } else {
          return file;
        }
      };
      MapGenerator2.prototype.sourcePath = function sourcePath(node) {
        if (this.mapOpts.from) {
          return this.mapOpts.from;
        } else {
          return this.relative(node.source.input.from);
        }
      };
      MapGenerator2.prototype.generateString = function generateString() {
        var _this3 = this;
        this.css = "";
        this.map = new _sourceMap2.default.SourceMapGenerator({ file: this.outputFile() });
        var line = 1;
        var column = 1;
        var lines = void 0, last = void 0;
        this.stringify(this.root, function(str, node, type) {
          _this3.css += str;
          if (node && type !== "end") {
            if (node.source && node.source.start) {
              _this3.map.addMapping({
                source: _this3.sourcePath(node),
                generated: { line, column: column - 1 },
                original: {
                  line: node.source.start.line,
                  column: node.source.start.column - 1
                }
              });
            } else {
              _this3.map.addMapping({
                source: "<no source>",
                original: { line: 1, column: 0 },
                generated: { line, column: column - 1 }
              });
            }
          }
          lines = str.match(/\n/g);
          if (lines) {
            line += lines.length;
            last = str.lastIndexOf("\n");
            column = str.length - last;
          } else {
            column += str.length;
          }
          if (node && type !== "start") {
            if (node.source && node.source.end) {
              _this3.map.addMapping({
                source: _this3.sourcePath(node),
                generated: { line, column: column - 1 },
                original: {
                  line: node.source.end.line,
                  column: node.source.end.column
                }
              });
            } else {
              _this3.map.addMapping({
                source: "<no source>",
                original: { line: 1, column: 0 },
                generated: { line, column: column - 1 }
              });
            }
          }
        });
      };
      MapGenerator2.prototype.generate = function generate() {
        this.clearAnnotation();
        if (this.isMap()) {
          return this.generateMap();
        } else {
          var result = "";
          this.stringify(this.root, function(i) {
            result += i;
          });
          return [result];
        }
      };
      return MapGenerator2;
    }();
    exports.default = MapGenerator;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/warning.js
var require_warning2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/warning.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Warning2 = function() {
      function Warning3(text) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, Warning3);
        this.type = "warning";
        this.text = text;
        if (opts.node && opts.node.source) {
          var pos = opts.node.positionBy(opts);
          this.line = pos.line;
          this.column = pos.column;
        }
        for (var opt in opts) {
          this[opt] = opts[opt];
        }
      }
      Warning3.prototype.toString = function toString() {
        if (this.node) {
          return this.node.error(this.text, {
            plugin: this.plugin,
            index: this.index,
            word: this.word
          }).message;
        } else if (this.plugin) {
          return this.plugin + ": " + this.text;
        } else {
          return this.text;
        }
      };
      return Warning3;
    }();
    exports.default = Warning2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/result.js
var require_result2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/result.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _warning = require_warning2();
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Result2 = function() {
      function Result3(processor, root2, opts) {
        _classCallCheck(this, Result3);
        this.processor = processor;
        this.messages = [];
        this.root = root2;
        this.opts = opts;
        this.css = void 0;
        this.map = void 0;
      }
      Result3.prototype.toString = function toString() {
        return this.css;
      };
      Result3.prototype.warn = function warn(text) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!opts.plugin) {
          if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
            opts.plugin = this.lastPlugin.postcssPlugin;
          }
        }
        var warning = new _warning2.default(text, opts);
        this.messages.push(warning);
        return warning;
      };
      Result3.prototype.warnings = function warnings() {
        return this.messages.filter(function(i) {
          return i.type === "warning";
        });
      };
      _createClass(Result3, [{
        key: "content",
        get: function get() {
          return this.css;
        }
      }]);
      return Result3;
    }();
    exports.default = Result2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/comment.js
var require_comment2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/comment.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    var _node = require_node2();
    var _node2 = _interopRequireDefault(_node);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Comment2 = function(_Node) {
      _inherits(Comment3, _Node);
      function Comment3(defaults) {
        _classCallCheck(this, Comment3);
        var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));
        _this.type = "comment";
        return _this;
      }
      _createClass(Comment3, [{
        key: "left",
        get: function get() {
          (0, _warnOnce2.default)("Comment#left was deprecated. Use Comment#raws.left");
          return this.raws.left;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Comment#left was deprecated. Use Comment#raws.left");
          this.raws.left = val;
        }
      }, {
        key: "right",
        get: function get() {
          (0, _warnOnce2.default)("Comment#right was deprecated. Use Comment#raws.right");
          return this.raws.right;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Comment#right was deprecated. Use Comment#raws.right");
          this.raws.right = val;
        }
      }]);
      return Comment3;
    }(_node2.default);
    exports.default = Comment2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/list.js
var require_list2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/list.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var list2 = {
      split: function split(string, separators, last) {
        var array = [];
        var current = "";
        var split2 = false;
        var func = 0;
        var quote = false;
        var escape = false;
        for (var i = 0; i < string.length; i++) {
          var letter = string[i];
          if (quote) {
            if (escape) {
              escape = false;
            } else if (letter === "\\") {
              escape = true;
            } else if (letter === quote) {
              quote = false;
            }
          } else if (letter === '"' || letter === "'") {
            quote = letter;
          } else if (letter === "(") {
            func += 1;
          } else if (letter === ")") {
            if (func > 0)
              func -= 1;
          } else if (func === 0) {
            if (separators.indexOf(letter) !== -1)
              split2 = true;
          }
          if (split2) {
            if (current !== "")
              array.push(current.trim());
            current = "";
            split2 = false;
          } else {
            current += letter;
          }
        }
        if (last || current !== "")
          array.push(current.trim());
        return array;
      },
      space: function space(string) {
        var spaces = [" ", "\n", "	"];
        return list2.split(string, spaces);
      },
      comma: function comma(string) {
        var comma2 = ",";
        return list2.split(string, [comma2], true);
      }
    };
    exports.default = list2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/rule.js
var require_rule2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/rule.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _container = require_container2();
    var _container2 = _interopRequireDefault(_container);
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    var _list = require_list2();
    var _list2 = _interopRequireDefault(_list);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Rule2 = function(_Container) {
      _inherits(Rule3, _Container);
      function Rule3(defaults) {
        _classCallCheck(this, Rule3);
        var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));
        _this.type = "rule";
        if (!_this.nodes)
          _this.nodes = [];
        return _this;
      }
      _createClass(Rule3, [{
        key: "selectors",
        get: function get() {
          return _list2.default.comma(this.selector);
        },
        set: function set(values) {
          var match = this.selector ? this.selector.match(/,\s*/) : null;
          var sep = match ? match[0] : "," + this.raw("between", "beforeOpen");
          this.selector = values.join(sep);
        }
      }, {
        key: "_selector",
        get: function get() {
          (0, _warnOnce2.default)("Rule#_selector is deprecated. Use Rule#raws.selector");
          return this.raws.selector;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Rule#_selector is deprecated. Use Rule#raws.selector");
          this.raws.selector = val;
        }
      }]);
      return Rule3;
    }(_container2.default);
    exports.default = Rule2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/root.js
var require_root2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/root.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _container = require_container2();
    var _container2 = _interopRequireDefault(_container);
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var Root2 = function(_Container) {
      _inherits(Root3, _Container);
      function Root3(defaults) {
        _classCallCheck(this, Root3);
        var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));
        _this.type = "root";
        if (!_this.nodes)
          _this.nodes = [];
        return _this;
      }
      Root3.prototype.removeChild = function removeChild(child) {
        child = this.index(child);
        if (child === 0 && this.nodes.length > 1) {
          this.nodes[1].raws.before = this.nodes[child].raws.before;
        }
        return _Container.prototype.removeChild.call(this, child);
      };
      Root3.prototype.normalize = function normalize(child, sample, type) {
        var nodes = _Container.prototype.normalize.call(this, child);
        if (sample) {
          if (type === "prepend") {
            if (this.nodes.length > 1) {
              sample.raws.before = this.nodes[1].raws.before;
            } else {
              delete sample.raws.before;
            }
          } else if (this.first !== sample) {
            for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
              var _ref;
              if (_isArray) {
                if (_i >= _iterator.length)
                  break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done)
                  break;
                _ref = _i.value;
              }
              var node = _ref;
              node.raws.before = sample.raws.before;
            }
          }
        }
        return nodes;
      };
      Root3.prototype.toResult = function toResult() {
        var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var LazyResult = require_lazy_result2();
        var Processor2 = require_processor2();
        var lazy = new LazyResult(new Processor2(), this, opts);
        return lazy.stringify();
      };
      Root3.prototype.remove = function remove(child) {
        (0, _warnOnce2.default)("Root#remove is deprecated. Use Root#removeChild");
        this.removeChild(child);
      };
      Root3.prototype.prevMap = function prevMap() {
        (0, _warnOnce2.default)("Root#prevMap is deprecated. Use Root#source.input.map");
        return this.source.input.map;
      };
      return Root3;
    }(_container2.default);
    exports.default = Root2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/container.js
var require_container2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/container.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _declaration = require_declaration2();
    var _declaration2 = _interopRequireDefault(_declaration);
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    var _comment = require_comment2();
    var _comment2 = _interopRequireDefault(_comment);
    var _node = require_node2();
    var _node2 = _interopRequireDefault(_node);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    function cleanSource(nodes) {
      return nodes.map(function(i) {
        if (i.nodes)
          i.nodes = cleanSource(i.nodes);
        delete i.source;
        return i;
      });
    }
    var Container2 = function(_Node) {
      _inherits(Container3, _Node);
      function Container3() {
        _classCallCheck(this, Container3);
        return _possibleConstructorReturn(this, _Node.apply(this, arguments));
      }
      Container3.prototype.push = function push(child) {
        child.parent = this;
        this.nodes.push(child);
        return this;
      };
      Container3.prototype.each = function each(callback) {
        if (!this.lastEach)
          this.lastEach = 0;
        if (!this.indexes)
          this.indexes = {};
        this.lastEach += 1;
        var id = this.lastEach;
        this.indexes[id] = 0;
        if (!this.nodes)
          return void 0;
        var index = void 0, result = void 0;
        while (this.indexes[id] < this.nodes.length) {
          index = this.indexes[id];
          result = callback(this.nodes[index], index);
          if (result === false)
            break;
          this.indexes[id] += 1;
        }
        delete this.indexes[id];
        return result;
      };
      Container3.prototype.walk = function walk(callback) {
        return this.each(function(child, i) {
          var result = callback(child, i);
          if (result !== false && child.walk) {
            result = child.walk(callback);
          }
          return result;
        });
      };
      Container3.prototype.walkDecls = function walkDecls(prop, callback) {
        if (!callback) {
          callback = prop;
          return this.walk(function(child, i) {
            if (child.type === "decl") {
              return callback(child, i);
            }
          });
        } else if (prop instanceof RegExp) {
          return this.walk(function(child, i) {
            if (child.type === "decl" && prop.test(child.prop)) {
              return callback(child, i);
            }
          });
        } else {
          return this.walk(function(child, i) {
            if (child.type === "decl" && child.prop === prop) {
              return callback(child, i);
            }
          });
        }
      };
      Container3.prototype.walkRules = function walkRules(selector, callback) {
        if (!callback) {
          callback = selector;
          return this.walk(function(child, i) {
            if (child.type === "rule") {
              return callback(child, i);
            }
          });
        } else if (selector instanceof RegExp) {
          return this.walk(function(child, i) {
            if (child.type === "rule" && selector.test(child.selector)) {
              return callback(child, i);
            }
          });
        } else {
          return this.walk(function(child, i) {
            if (child.type === "rule" && child.selector === selector) {
              return callback(child, i);
            }
          });
        }
      };
      Container3.prototype.walkAtRules = function walkAtRules(name, callback) {
        if (!callback) {
          callback = name;
          return this.walk(function(child, i) {
            if (child.type === "atrule") {
              return callback(child, i);
            }
          });
        } else if (name instanceof RegExp) {
          return this.walk(function(child, i) {
            if (child.type === "atrule" && name.test(child.name)) {
              return callback(child, i);
            }
          });
        } else {
          return this.walk(function(child, i) {
            if (child.type === "atrule" && child.name === name) {
              return callback(child, i);
            }
          });
        }
      };
      Container3.prototype.walkComments = function walkComments(callback) {
        return this.walk(function(child, i) {
          if (child.type === "comment") {
            return callback(child, i);
          }
        });
      };
      Container3.prototype.append = function append() {
        for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
          children[_key] = arguments[_key];
        }
        for (var _iterator = children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var child = _ref;
          var nodes = this.normalize(child, this.last);
          for (var _iterator2 = nodes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ; ) {
            var _ref2;
            if (_isArray2) {
              if (_i2 >= _iterator2.length)
                break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done)
                break;
              _ref2 = _i2.value;
            }
            var node = _ref2;
            this.nodes.push(node);
          }
        }
        return this;
      };
      Container3.prototype.prepend = function prepend() {
        for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          children[_key2] = arguments[_key2];
        }
        children = children.reverse();
        for (var _iterator3 = children, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ; ) {
          var _ref3;
          if (_isArray3) {
            if (_i3 >= _iterator3.length)
              break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done)
              break;
            _ref3 = _i3.value;
          }
          var child = _ref3;
          var nodes = this.normalize(child, this.first, "prepend").reverse();
          for (var _iterator4 = nodes, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ; ) {
            var _ref4;
            if (_isArray4) {
              if (_i4 >= _iterator4.length)
                break;
              _ref4 = _iterator4[_i4++];
            } else {
              _i4 = _iterator4.next();
              if (_i4.done)
                break;
              _ref4 = _i4.value;
            }
            var node = _ref4;
            this.nodes.unshift(node);
          }
          for (var id in this.indexes) {
            this.indexes[id] = this.indexes[id] + nodes.length;
          }
        }
        return this;
      };
      Container3.prototype.cleanRaws = function cleanRaws(keepBetween) {
        _Node.prototype.cleanRaws.call(this, keepBetween);
        if (this.nodes) {
          for (var _iterator5 = this.nodes, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ; ) {
            var _ref5;
            if (_isArray5) {
              if (_i5 >= _iterator5.length)
                break;
              _ref5 = _iterator5[_i5++];
            } else {
              _i5 = _iterator5.next();
              if (_i5.done)
                break;
              _ref5 = _i5.value;
            }
            var node = _ref5;
            node.cleanRaws(keepBetween);
          }
        }
      };
      Container3.prototype.insertBefore = function insertBefore(exist, add) {
        exist = this.index(exist);
        var type = exist === 0 ? "prepend" : false;
        var nodes = this.normalize(add, this.nodes[exist], type).reverse();
        for (var _iterator6 = nodes, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator](); ; ) {
          var _ref6;
          if (_isArray6) {
            if (_i6 >= _iterator6.length)
              break;
            _ref6 = _iterator6[_i6++];
          } else {
            _i6 = _iterator6.next();
            if (_i6.done)
              break;
            _ref6 = _i6.value;
          }
          var node = _ref6;
          this.nodes.splice(exist, 0, node);
        }
        var index = void 0;
        for (var id in this.indexes) {
          index = this.indexes[id];
          if (exist <= index) {
            this.indexes[id] = index + nodes.length;
          }
        }
        return this;
      };
      Container3.prototype.insertAfter = function insertAfter(exist, add) {
        exist = this.index(exist);
        var nodes = this.normalize(add, this.nodes[exist]).reverse();
        for (var _iterator7 = nodes, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator](); ; ) {
          var _ref7;
          if (_isArray7) {
            if (_i7 >= _iterator7.length)
              break;
            _ref7 = _iterator7[_i7++];
          } else {
            _i7 = _iterator7.next();
            if (_i7.done)
              break;
            _ref7 = _i7.value;
          }
          var node = _ref7;
          this.nodes.splice(exist + 1, 0, node);
        }
        var index = void 0;
        for (var id in this.indexes) {
          index = this.indexes[id];
          if (exist < index) {
            this.indexes[id] = index + nodes.length;
          }
        }
        return this;
      };
      Container3.prototype.remove = function remove(child) {
        if (typeof child !== "undefined") {
          (0, _warnOnce2.default)("Container#remove is deprecated. Use Container#removeChild");
          this.removeChild(child);
        } else {
          _Node.prototype.remove.call(this);
        }
        return this;
      };
      Container3.prototype.removeChild = function removeChild(child) {
        child = this.index(child);
        this.nodes[child].parent = void 0;
        this.nodes.splice(child, 1);
        var index = void 0;
        for (var id in this.indexes) {
          index = this.indexes[id];
          if (index >= child) {
            this.indexes[id] = index - 1;
          }
        }
        return this;
      };
      Container3.prototype.removeAll = function removeAll() {
        for (var _iterator8 = this.nodes, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator](); ; ) {
          var _ref8;
          if (_isArray8) {
            if (_i8 >= _iterator8.length)
              break;
            _ref8 = _iterator8[_i8++];
          } else {
            _i8 = _iterator8.next();
            if (_i8.done)
              break;
            _ref8 = _i8.value;
          }
          var node = _ref8;
          node.parent = void 0;
        }
        this.nodes = [];
        return this;
      };
      Container3.prototype.replaceValues = function replaceValues(pattern, opts, callback) {
        if (!callback) {
          callback = opts;
          opts = {};
        }
        this.walkDecls(function(decl2) {
          if (opts.props && opts.props.indexOf(decl2.prop) === -1)
            return;
          if (opts.fast && decl2.value.indexOf(opts.fast) === -1)
            return;
          decl2.value = decl2.value.replace(pattern, callback);
        });
        return this;
      };
      Container3.prototype.every = function every(condition) {
        return this.nodes.every(condition);
      };
      Container3.prototype.some = function some(condition) {
        return this.nodes.some(condition);
      };
      Container3.prototype.index = function index(child) {
        if (typeof child === "number") {
          return child;
        } else {
          return this.nodes.indexOf(child);
        }
      };
      Container3.prototype.normalize = function normalize(nodes, sample) {
        var _this2 = this;
        if (typeof nodes === "string") {
          var parse2 = require_parse2();
          nodes = cleanSource(parse2(nodes).nodes);
        } else if (!Array.isArray(nodes)) {
          if (nodes.type === "root") {
            nodes = nodes.nodes;
          } else if (nodes.type) {
            nodes = [nodes];
          } else if (nodes.prop) {
            if (typeof nodes.value === "undefined") {
              throw new Error("Value field is missed in node creation");
            } else if (typeof nodes.value !== "string") {
              nodes.value = String(nodes.value);
            }
            nodes = [new _declaration2.default(nodes)];
          } else if (nodes.selector) {
            var Rule2 = require_rule2();
            nodes = [new Rule2(nodes)];
          } else if (nodes.name) {
            var AtRule2 = require_at_rule2();
            nodes = [new AtRule2(nodes)];
          } else if (nodes.text) {
            nodes = [new _comment2.default(nodes)];
          } else {
            throw new Error("Unknown node type in node creation");
          }
        }
        var processed = nodes.map(function(i) {
          if (typeof i.raws === "undefined")
            i = _this2.rebuild(i);
          if (i.parent)
            i = i.clone();
          if (typeof i.raws.before === "undefined") {
            if (sample && typeof sample.raws.before !== "undefined") {
              i.raws.before = sample.raws.before.replace(/[^\s]/g, "");
            }
          }
          i.parent = _this2;
          return i;
        });
        return processed;
      };
      Container3.prototype.rebuild = function rebuild(node, parent) {
        var _this3 = this;
        var fix = void 0;
        if (node.type === "root") {
          var Root2 = require_root2();
          fix = new Root2();
        } else if (node.type === "atrule") {
          var AtRule2 = require_at_rule2();
          fix = new AtRule2();
        } else if (node.type === "rule") {
          var Rule2 = require_rule2();
          fix = new Rule2();
        } else if (node.type === "decl") {
          fix = new _declaration2.default();
        } else if (node.type === "comment") {
          fix = new _comment2.default();
        }
        for (var i in node) {
          if (i === "nodes") {
            fix.nodes = node.nodes.map(function(j) {
              return _this3.rebuild(j, fix);
            });
          } else if (i === "parent" && parent) {
            fix.parent = parent;
          } else if (node.hasOwnProperty(i)) {
            fix[i] = node[i];
          }
        }
        return fix;
      };
      Container3.prototype.eachInside = function eachInside(callback) {
        (0, _warnOnce2.default)("Container#eachInside is deprecated. Use Container#walk instead.");
        return this.walk(callback);
      };
      Container3.prototype.eachDecl = function eachDecl(prop, callback) {
        (0, _warnOnce2.default)("Container#eachDecl is deprecated. Use Container#walkDecls instead.");
        return this.walkDecls(prop, callback);
      };
      Container3.prototype.eachRule = function eachRule(selector, callback) {
        (0, _warnOnce2.default)("Container#eachRule is deprecated. Use Container#walkRules instead.");
        return this.walkRules(selector, callback);
      };
      Container3.prototype.eachAtRule = function eachAtRule(name, callback) {
        (0, _warnOnce2.default)("Container#eachAtRule is deprecated. Use Container#walkAtRules instead.");
        return this.walkAtRules(name, callback);
      };
      Container3.prototype.eachComment = function eachComment(callback) {
        (0, _warnOnce2.default)("Container#eachComment is deprecated. Use Container#walkComments instead.");
        return this.walkComments(callback);
      };
      _createClass(Container3, [{
        key: "first",
        get: function get() {
          if (!this.nodes)
            return void 0;
          return this.nodes[0];
        }
      }, {
        key: "last",
        get: function get() {
          if (!this.nodes)
            return void 0;
          return this.nodes[this.nodes.length - 1];
        }
      }, {
        key: "semicolon",
        get: function get() {
          (0, _warnOnce2.default)("Node#semicolon is deprecated. Use Node#raws.semicolon");
          return this.raws.semicolon;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Node#semicolon is deprecated. Use Node#raws.semicolon");
          this.raws.semicolon = val;
        }
      }, {
        key: "after",
        get: function get() {
          (0, _warnOnce2.default)("Node#after is deprecated. Use Node#raws.after");
          return this.raws.after;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("Node#after is deprecated. Use Node#raws.after");
          this.raws.after = val;
        }
      }]);
      return Container3;
    }(_node2.default);
    exports.default = Container2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/at-rule.js
var require_at_rule2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/at-rule.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _container = require_container2();
    var _container2 = _interopRequireDefault(_container);
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var AtRule2 = function(_Container) {
      _inherits(AtRule3, _Container);
      function AtRule3(defaults) {
        _classCallCheck(this, AtRule3);
        var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));
        _this.type = "atrule";
        return _this;
      }
      AtRule3.prototype.append = function append() {
        var _Container$prototype$;
        if (!this.nodes)
          this.nodes = [];
        for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
          children[_key] = arguments[_key];
        }
        return (_Container$prototype$ = _Container.prototype.append).call.apply(_Container$prototype$, [this].concat(children));
      };
      AtRule3.prototype.prepend = function prepend() {
        var _Container$prototype$2;
        if (!this.nodes)
          this.nodes = [];
        for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          children[_key2] = arguments[_key2];
        }
        return (_Container$prototype$2 = _Container.prototype.prepend).call.apply(_Container$prototype$2, [this].concat(children));
      };
      _createClass(AtRule3, [{
        key: "afterName",
        get: function get() {
          (0, _warnOnce2.default)("AtRule#afterName was deprecated. Use AtRule#raws.afterName");
          return this.raws.afterName;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("AtRule#afterName was deprecated. Use AtRule#raws.afterName");
          this.raws.afterName = val;
        }
      }, {
        key: "_params",
        get: function get() {
          (0, _warnOnce2.default)("AtRule#_params was deprecated. Use AtRule#raws.params");
          return this.raws.params;
        },
        set: function set(val) {
          (0, _warnOnce2.default)("AtRule#_params was deprecated. Use AtRule#raws.params");
          this.raws.params = val;
        }
      }]);
      return AtRule3;
    }(_container2.default);
    exports.default = AtRule2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/parser.js
var require_parser2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/parser.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _declaration = require_declaration2();
    var _declaration2 = _interopRequireDefault(_declaration);
    var _tokenize = require_tokenize2();
    var _tokenize2 = _interopRequireDefault(_tokenize);
    var _comment = require_comment2();
    var _comment2 = _interopRequireDefault(_comment);
    var _atRule = require_at_rule2();
    var _atRule2 = _interopRequireDefault(_atRule);
    var _root = require_root2();
    var _root2 = _interopRequireDefault(_root);
    var _rule = require_rule2();
    var _rule2 = _interopRequireDefault(_rule);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Parser = function() {
      function Parser2(input) {
        _classCallCheck(this, Parser2);
        this.input = input;
        this.pos = 0;
        this.root = new _root2.default();
        this.current = this.root;
        this.spaces = "";
        this.semicolon = false;
        this.root.source = { input, start: { line: 1, column: 1 } };
      }
      Parser2.prototype.tokenize = function tokenize() {
        this.tokens = (0, _tokenize2.default)(this.input);
      };
      Parser2.prototype.loop = function loop() {
        var token = void 0;
        while (this.pos < this.tokens.length) {
          token = this.tokens[this.pos];
          switch (token[0]) {
            case "space":
            case ";":
              this.spaces += token[1];
              break;
            case "}":
              this.end(token);
              break;
            case "comment":
              this.comment(token);
              break;
            case "at-word":
              this.atrule(token);
              break;
            case "{":
              this.emptyRule(token);
              break;
            default:
              this.other();
              break;
          }
          this.pos += 1;
        }
        this.endFile();
      };
      Parser2.prototype.comment = function comment2(token) {
        var node = new _comment2.default();
        this.init(node, token[2], token[3]);
        node.source.end = { line: token[4], column: token[5] };
        var text = token[1].slice(2, -2);
        if (/^\s*$/.test(text)) {
          node.text = "";
          node.raws.left = text;
          node.raws.right = "";
        } else {
          var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
          node.text = match[2];
          node.raws.left = match[1];
          node.raws.right = match[3];
        }
      };
      Parser2.prototype.emptyRule = function emptyRule(token) {
        var node = new _rule2.default();
        this.init(node, token[2], token[3]);
        node.selector = "";
        node.raws.between = "";
        this.current = node;
      };
      Parser2.prototype.other = function other() {
        var token = void 0;
        var end = false;
        var type = null;
        var colon = false;
        var bracket = null;
        var brackets = [];
        var start = this.pos;
        while (this.pos < this.tokens.length) {
          token = this.tokens[this.pos];
          type = token[0];
          if (type === "(" || type === "[") {
            if (!bracket)
              bracket = token;
            brackets.push(type === "(" ? ")" : "]");
          } else if (brackets.length === 0) {
            if (type === ";") {
              if (colon) {
                this.decl(this.tokens.slice(start, this.pos + 1));
                return;
              } else {
                break;
              }
            } else if (type === "{") {
              this.rule(this.tokens.slice(start, this.pos + 1));
              return;
            } else if (type === "}") {
              this.pos -= 1;
              end = true;
              break;
            } else if (type === ":") {
              colon = true;
            }
          } else if (type === brackets[brackets.length - 1]) {
            brackets.pop();
            if (brackets.length === 0)
              bracket = null;
          }
          this.pos += 1;
        }
        if (this.pos === this.tokens.length) {
          this.pos -= 1;
          end = true;
        }
        if (brackets.length > 0)
          this.unclosedBracket(bracket);
        if (end && colon) {
          while (this.pos > start) {
            token = this.tokens[this.pos][0];
            if (token !== "space" && token !== "comment")
              break;
            this.pos -= 1;
          }
          this.decl(this.tokens.slice(start, this.pos + 1));
          return;
        }
        this.unknownWord(start);
      };
      Parser2.prototype.rule = function rule2(tokens) {
        tokens.pop();
        var node = new _rule2.default();
        this.init(node, tokens[0][2], tokens[0][3]);
        node.raws.between = this.spacesAndCommentsFromEnd(tokens);
        this.raw(node, "selector", tokens);
        this.current = node;
      };
      Parser2.prototype.decl = function decl2(tokens) {
        var node = new _declaration2.default();
        this.init(node);
        var last = tokens[tokens.length - 1];
        if (last[0] === ";") {
          this.semicolon = true;
          tokens.pop();
        }
        if (last[4]) {
          node.source.end = { line: last[4], column: last[5] };
        } else {
          node.source.end = { line: last[2], column: last[3] };
        }
        while (tokens[0][0] !== "word") {
          node.raws.before += tokens.shift()[1];
        }
        node.source.start = { line: tokens[0][2], column: tokens[0][3] };
        node.prop = "";
        while (tokens.length) {
          var type = tokens[0][0];
          if (type === ":" || type === "space" || type === "comment") {
            break;
          }
          node.prop += tokens.shift()[1];
        }
        node.raws.between = "";
        var token = void 0;
        while (tokens.length) {
          token = tokens.shift();
          if (token[0] === ":") {
            node.raws.between += token[1];
            break;
          } else {
            node.raws.between += token[1];
          }
        }
        if (node.prop[0] === "_" || node.prop[0] === "*") {
          node.raws.before += node.prop[0];
          node.prop = node.prop.slice(1);
        }
        node.raws.between += this.spacesAndCommentsFromStart(tokens);
        this.precheckMissedSemicolon(tokens);
        for (var i = tokens.length - 1; i > 0; i--) {
          token = tokens[i];
          if (token[1] === "!important") {
            node.important = true;
            var string = this.stringFrom(tokens, i);
            string = this.spacesFromEnd(tokens) + string;
            if (string !== " !important")
              node.raws.important = string;
            break;
          } else if (token[1] === "important") {
            var cache = tokens.slice(0);
            var str = "";
            for (var j = i; j > 0; j--) {
              var _type = cache[j][0];
              if (str.trim().indexOf("!") === 0 && _type !== "space") {
                break;
              }
              str = cache.pop()[1] + str;
            }
            if (str.trim().indexOf("!") === 0) {
              node.important = true;
              node.raws.important = str;
              tokens = cache;
            }
          }
          if (token[0] !== "space" && token[0] !== "comment") {
            break;
          }
        }
        this.raw(node, "value", tokens);
        if (node.value.indexOf(":") !== -1)
          this.checkMissedSemicolon(tokens);
      };
      Parser2.prototype.atrule = function atrule(token) {
        var node = new _atRule2.default();
        node.name = token[1].slice(1);
        if (node.name === "") {
          this.unnamedAtrule(node, token);
        }
        this.init(node, token[2], token[3]);
        var last = false;
        var open = false;
        var params = [];
        this.pos += 1;
        while (this.pos < this.tokens.length) {
          token = this.tokens[this.pos];
          if (token[0] === ";") {
            node.source.end = { line: token[2], column: token[3] };
            this.semicolon = true;
            break;
          } else if (token[0] === "{") {
            open = true;
            break;
          } else if (token[0] === "}") {
            this.end(token);
            break;
          } else {
            params.push(token);
          }
          this.pos += 1;
        }
        if (this.pos === this.tokens.length) {
          last = true;
        }
        node.raws.between = this.spacesAndCommentsFromEnd(params);
        if (params.length) {
          node.raws.afterName = this.spacesAndCommentsFromStart(params);
          this.raw(node, "params", params);
          if (last) {
            token = params[params.length - 1];
            node.source.end = { line: token[4], column: token[5] };
            this.spaces = node.raws.between;
            node.raws.between = "";
          }
        } else {
          node.raws.afterName = "";
          node.params = "";
        }
        if (open) {
          node.nodes = [];
          this.current = node;
        }
      };
      Parser2.prototype.end = function end(token) {
        if (this.current.nodes && this.current.nodes.length) {
          this.current.raws.semicolon = this.semicolon;
        }
        this.semicolon = false;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.spaces = "";
        if (this.current.parent) {
          this.current.source.end = { line: token[2], column: token[3] };
          this.current = this.current.parent;
        } else {
          this.unexpectedClose(token);
        }
      };
      Parser2.prototype.endFile = function endFile() {
        if (this.current.parent)
          this.unclosedBlock();
        if (this.current.nodes && this.current.nodes.length) {
          this.current.raws.semicolon = this.semicolon;
        }
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
      };
      Parser2.prototype.init = function init(node, line, column) {
        this.current.push(node);
        node.source = { start: { line, column }, input: this.input };
        node.raws.before = this.spaces;
        this.spaces = "";
        if (node.type !== "comment")
          this.semicolon = false;
      };
      Parser2.prototype.raw = function raw(node, prop, tokens) {
        var token = void 0, type = void 0;
        var length = tokens.length;
        var value = "";
        var clean = true;
        for (var i = 0; i < length; i += 1) {
          token = tokens[i];
          type = token[0];
          if (type === "comment" || type === "space" && i === length - 1) {
            clean = false;
          } else {
            value += token[1];
          }
        }
        if (!clean) {
          var raw2 = tokens.reduce(function(all, i2) {
            return all + i2[1];
          }, "");
          node.raws[prop] = { value, raw: raw2 };
        }
        node[prop] = value;
      };
      Parser2.prototype.spacesAndCommentsFromEnd = function spacesAndCommentsFromEnd(tokens) {
        var lastTokenType = void 0;
        var spaces = "";
        while (tokens.length) {
          lastTokenType = tokens[tokens.length - 1][0];
          if (lastTokenType !== "space" && lastTokenType !== "comment")
            break;
          spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
      };
      Parser2.prototype.spacesAndCommentsFromStart = function spacesAndCommentsFromStart(tokens) {
        var next = void 0;
        var spaces = "";
        while (tokens.length) {
          next = tokens[0][0];
          if (next !== "space" && next !== "comment")
            break;
          spaces += tokens.shift()[1];
        }
        return spaces;
      };
      Parser2.prototype.spacesFromEnd = function spacesFromEnd(tokens) {
        var lastTokenType = void 0;
        var spaces = "";
        while (tokens.length) {
          lastTokenType = tokens[tokens.length - 1][0];
          if (lastTokenType !== "space")
            break;
          spaces = tokens.pop()[1] + spaces;
        }
        return spaces;
      };
      Parser2.prototype.stringFrom = function stringFrom(tokens, from) {
        var result = "";
        for (var i = from; i < tokens.length; i++) {
          result += tokens[i][1];
        }
        tokens.splice(from, tokens.length - from);
        return result;
      };
      Parser2.prototype.colon = function colon(tokens) {
        var brackets = 0;
        var token = void 0, type = void 0, prev = void 0;
        for (var i = 0; i < tokens.length; i++) {
          token = tokens[i];
          type = token[0];
          if (type === "(") {
            brackets += 1;
          } else if (type === ")") {
            brackets -= 1;
          } else if (brackets === 0 && type === ":") {
            if (!prev) {
              this.doubleColon(token);
            } else if (prev[0] === "word" && prev[1] === "progid") {
              continue;
            } else {
              return i;
            }
          }
          prev = token;
        }
        return false;
      };
      Parser2.prototype.unclosedBracket = function unclosedBracket(bracket) {
        throw this.input.error("Unclosed bracket", bracket[2], bracket[3]);
      };
      Parser2.prototype.unknownWord = function unknownWord(start) {
        var token = this.tokens[start];
        throw this.input.error("Unknown word", token[2], token[3]);
      };
      Parser2.prototype.unexpectedClose = function unexpectedClose(token) {
        throw this.input.error("Unexpected }", token[2], token[3]);
      };
      Parser2.prototype.unclosedBlock = function unclosedBlock() {
        var pos = this.current.source.start;
        throw this.input.error("Unclosed block", pos.line, pos.column);
      };
      Parser2.prototype.doubleColon = function doubleColon(token) {
        throw this.input.error("Double colon", token[2], token[3]);
      };
      Parser2.prototype.unnamedAtrule = function unnamedAtrule(node, token) {
        throw this.input.error("At-rule without name", token[2], token[3]);
      };
      Parser2.prototype.precheckMissedSemicolon = function precheckMissedSemicolon(tokens) {
        tokens;
      };
      Parser2.prototype.checkMissedSemicolon = function checkMissedSemicolon(tokens) {
        var colon = this.colon(tokens);
        if (colon === false)
          return;
        var founded = 0;
        var token = void 0;
        for (var j = colon - 1; j >= 0; j--) {
          token = tokens[j];
          if (token[0] !== "space") {
            founded += 1;
            if (founded === 2)
              break;
          }
        }
        throw this.input.error("Missed semicolon", token[2], token[3]);
      };
      return Parser2;
    }();
    exports.default = Parser;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/parse.js
var require_parse2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/parse.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    exports.default = parse2;
    var _parser = require_parser2();
    var _parser2 = _interopRequireDefault(_parser);
    var _input = require_input2();
    var _input2 = _interopRequireDefault(_input);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function parse2(css, opts) {
      if (opts && opts.safe) {
        throw new Error('Option safe was removed. Use parser: require("postcss-safe-parser")');
      }
      var input = new _input2.default(css, opts);
      var parser = new _parser2.default(input);
      try {
        parser.tokenize();
        parser.loop();
      } catch (e) {
        if (e.name === "CssSyntaxError" && opts && opts.from) {
          if (/\.scss$/i.test(opts.from)) {
            e.message += "\nYou tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser";
          } else if (/\.sass/i.test(opts.from)) {
            e.message += "\nYou tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser";
          } else if (/\.less$/i.test(opts.from)) {
            e.message += "\nYou tried to parse Less with the standard CSS parser; try again with the postcss-less parser";
          }
        }
        throw e;
      }
      return parser.root;
    }
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/lazy-result.js
var require_lazy_result2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/lazy-result.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _mapGenerator = require_map_generator2();
    var _mapGenerator2 = _interopRequireDefault(_mapGenerator);
    var _stringify2 = require_stringify2();
    var _stringify3 = _interopRequireDefault(_stringify2);
    var _warnOnce = require_warn_once2();
    var _warnOnce2 = _interopRequireDefault(_warnOnce);
    var _result = require_result2();
    var _result2 = _interopRequireDefault(_result);
    var _parse = require_parse2();
    var _parse2 = _interopRequireDefault(_parse);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isPromise(obj) {
      return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && typeof obj.then === "function";
    }
    var LazyResult = function() {
      function LazyResult2(processor, css, opts) {
        _classCallCheck(this, LazyResult2);
        this.stringified = false;
        this.processed = false;
        var root2 = void 0;
        if ((typeof css === "undefined" ? "undefined" : _typeof(css)) === "object" && css.type === "root") {
          root2 = css;
        } else if (css instanceof LazyResult2 || css instanceof _result2.default) {
          root2 = css.root;
          if (css.map) {
            if (typeof opts.map === "undefined")
              opts.map = {};
            if (!opts.map.inline)
              opts.map.inline = false;
            opts.map.prev = css.map;
          }
        } else {
          var parser = _parse2.default;
          if (opts.syntax)
            parser = opts.syntax.parse;
          if (opts.parser)
            parser = opts.parser;
          if (parser.parse)
            parser = parser.parse;
          try {
            root2 = parser(css, opts);
          } catch (error) {
            this.error = error;
          }
        }
        this.result = new _result2.default(processor, root2, opts);
      }
      LazyResult2.prototype.warnings = function warnings() {
        return this.sync().warnings();
      };
      LazyResult2.prototype.toString = function toString() {
        return this.css;
      };
      LazyResult2.prototype.then = function then(onFulfilled, onRejected) {
        return this.async().then(onFulfilled, onRejected);
      };
      LazyResult2.prototype.catch = function _catch(onRejected) {
        return this.async().catch(onRejected);
      };
      LazyResult2.prototype.handleError = function handleError(error, plugin2) {
        try {
          this.error = error;
          if (error.name === "CssSyntaxError" && !error.plugin) {
            error.plugin = plugin2.postcssPlugin;
            error.setMessage();
          } else if (plugin2.postcssVersion) {
            var pluginName = plugin2.postcssPlugin;
            var pluginVer = plugin2.postcssVersion;
            var runtimeVer = this.result.processor.version;
            var a = pluginVer.split(".");
            var b = runtimeVer.split(".");
            if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
              (0, _warnOnce2.default)("Your current PostCSS version is " + runtimeVer + ", but " + pluginName + " uses " + pluginVer + ". Perhaps this is the source of the error below.");
            }
          }
        } catch (err) {
          if (console && console.error)
            console.error(err);
        }
      };
      LazyResult2.prototype.asyncTick = function asyncTick(resolve, reject) {
        var _this = this;
        if (this.plugin >= this.processor.plugins.length) {
          this.processed = true;
          return resolve();
        }
        try {
          var plugin2 = this.processor.plugins[this.plugin];
          var promise = this.run(plugin2);
          this.plugin += 1;
          if (isPromise(promise)) {
            promise.then(function() {
              _this.asyncTick(resolve, reject);
            }).catch(function(error) {
              _this.handleError(error, plugin2);
              _this.processed = true;
              reject(error);
            });
          } else {
            this.asyncTick(resolve, reject);
          }
        } catch (error) {
          this.processed = true;
          reject(error);
        }
      };
      LazyResult2.prototype.async = function async() {
        var _this2 = this;
        if (this.processed) {
          return new Promise(function(resolve, reject) {
            if (_this2.error) {
              reject(_this2.error);
            } else {
              resolve(_this2.stringify());
            }
          });
        }
        if (this.processing) {
          return this.processing;
        }
        this.processing = new Promise(function(resolve, reject) {
          if (_this2.error)
            return reject(_this2.error);
          _this2.plugin = 0;
          _this2.asyncTick(resolve, reject);
        }).then(function() {
          _this2.processed = true;
          return _this2.stringify();
        });
        return this.processing;
      };
      LazyResult2.prototype.sync = function sync() {
        if (this.processed)
          return this.result;
        this.processed = true;
        if (this.processing) {
          throw new Error("Use process(css).then(cb) to work with async plugins");
        }
        if (this.error)
          throw this.error;
        for (var _iterator = this.result.processor.plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var plugin2 = _ref;
          var promise = this.run(plugin2);
          if (isPromise(promise)) {
            throw new Error("Use process(css).then(cb) to work with async plugins");
          }
        }
        return this.result;
      };
      LazyResult2.prototype.run = function run(plugin2) {
        this.result.lastPlugin = plugin2;
        try {
          return plugin2(this.result.root, this.result);
        } catch (error) {
          this.handleError(error, plugin2);
          throw error;
        }
      };
      LazyResult2.prototype.stringify = function stringify2() {
        if (this.stringified)
          return this.result;
        this.stringified = true;
        this.sync();
        var opts = this.result.opts;
        var str = _stringify3.default;
        if (opts.syntax)
          str = opts.syntax.stringify;
        if (opts.stringifier)
          str = opts.stringifier;
        if (str.stringify)
          str = str.stringify;
        var map = new _mapGenerator2.default(str, this.result.root, this.result.opts);
        var data = map.generate();
        this.result.css = data[0];
        this.result.map = data[1];
        return this.result;
      };
      _createClass(LazyResult2, [{
        key: "processor",
        get: function get() {
          return this.result.processor;
        }
      }, {
        key: "opts",
        get: function get() {
          return this.result.opts;
        }
      }, {
        key: "css",
        get: function get() {
          return this.stringify().css;
        }
      }, {
        key: "content",
        get: function get() {
          return this.stringify().content;
        }
      }, {
        key: "map",
        get: function get() {
          return this.stringify().map;
        }
      }, {
        key: "root",
        get: function get() {
          return this.sync().root;
        }
      }, {
        key: "messages",
        get: function get() {
          return this.sync().messages;
        }
      }]);
      return LazyResult2;
    }();
    exports.default = LazyResult;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/processor.js
var require_processor2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/processor.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _lazyResult = require_lazy_result2();
    var _lazyResult2 = _interopRequireDefault(_lazyResult);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Processor2 = function() {
      function Processor3() {
        var plugins = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        _classCallCheck(this, Processor3);
        this.version = "5.2.18";
        this.plugins = this.normalize(plugins);
      }
      Processor3.prototype.use = function use(plugin2) {
        this.plugins = this.plugins.concat(this.normalize([plugin2]));
        return this;
      };
      Processor3.prototype.process = function process2(css) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return new _lazyResult2.default(this, css, opts);
      };
      Processor3.prototype.normalize = function normalize(plugins) {
        var normalized = [];
        for (var _iterator = plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
          var _ref;
          if (_isArray) {
            if (_i >= _iterator.length)
              break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done)
              break;
            _ref = _i.value;
          }
          var i = _ref;
          if (i.postcss)
            i = i.postcss;
          if ((typeof i === "undefined" ? "undefined" : _typeof(i)) === "object" && Array.isArray(i.plugins)) {
            normalized = normalized.concat(i.plugins);
          } else if (typeof i === "function") {
            normalized.push(i);
          } else if ((typeof i === "undefined" ? "undefined" : _typeof(i)) === "object" && (i.parse || i.stringify)) {
            throw new Error("PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation.");
          } else {
            throw new Error(i + " is not a PostCSS plugin");
          }
        }
        return normalized;
      };
      return Processor3;
    }();
    exports.default = Processor2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/vendor.js
var require_vendor = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/vendor.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var vendor = {
      prefix: function prefix(prop) {
        var match = prop.match(/^(-\w+-)/);
        if (match) {
          return match[0];
        } else {
          return "";
        }
      },
      unprefixed: function unprefixed(prop) {
        return prop.replace(/^-\w+-/, "");
      }
    };
    exports.default = vendor;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/postcss.js
var require_postcss2 = __commonJS({
  "../../node_modules/.pnpm/postcss@5.2.18/node_modules/postcss/lib/postcss.js"(exports, module2) {
    "use strict";
    exports.__esModule = true;
    var _declaration = require_declaration2();
    var _declaration2 = _interopRequireDefault(_declaration);
    var _processor = require_processor2();
    var _processor2 = _interopRequireDefault(_processor);
    var _stringify = require_stringify2();
    var _stringify2 = _interopRequireDefault(_stringify);
    var _comment = require_comment2();
    var _comment2 = _interopRequireDefault(_comment);
    var _atRule = require_at_rule2();
    var _atRule2 = _interopRequireDefault(_atRule);
    var _vendor = require_vendor();
    var _vendor2 = _interopRequireDefault(_vendor);
    var _parse = require_parse2();
    var _parse2 = _interopRequireDefault(_parse);
    var _list = require_list2();
    var _list2 = _interopRequireDefault(_list);
    var _rule = require_rule2();
    var _rule2 = _interopRequireDefault(_rule);
    var _root = require_root2();
    var _root2 = _interopRequireDefault(_root);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function postcss2() {
      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }
      if (plugins.length === 1 && Array.isArray(plugins[0])) {
        plugins = plugins[0];
      }
      return new _processor2.default(plugins);
    }
    postcss2.plugin = function plugin2(name, initializer) {
      var creator = function creator2() {
        var transformer = initializer.apply(void 0, arguments);
        transformer.postcssPlugin = name;
        transformer.postcssVersion = new _processor2.default().version;
        return transformer;
      };
      var cache = void 0;
      Object.defineProperty(creator, "postcss", {
        get: function get() {
          if (!cache)
            cache = creator();
          return cache;
        }
      });
      creator.process = function(root2, opts) {
        return postcss2([creator(opts)]).process(root2, opts);
      };
      return creator;
    };
    postcss2.stringify = _stringify2.default;
    postcss2.parse = _parse2.default;
    postcss2.vendor = _vendor2.default;
    postcss2.list = _list2.default;
    postcss2.comment = function(defaults) {
      return new _comment2.default(defaults);
    };
    postcss2.atRule = function(defaults) {
      return new _atRule2.default(defaults);
    };
    postcss2.decl = function(defaults) {
      return new _declaration2.default(defaults);
    };
    postcss2.rule = function(defaults) {
      return new _rule2.default(defaults);
    };
    postcss2.root = function(defaults) {
      return new _root2.default(defaults);
    };
    exports.default = postcss2;
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss-plugin-px2rem@0.8.1/node_modules/postcss-plugin-px2rem/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/postcss-plugin-px2rem@0.8.1/node_modules/postcss-plugin-px2rem/lib/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
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
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _postcss = require_postcss2();
    var _postcss2 = _interopRequireDefault(_postcss);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var defaultOpts = {
      rootValue: 100,
      unitPrecision: 5,
      selectorBlackList: [],
      propWhiteList: [],
      propBlackList: [],
      ignoreIdentifier: false,
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    };
    var toFixed = function toFixed2(number, precision) {
      var multiplier = Math.pow(10, precision + 1);
      var wholeNumber = Math.floor(number * multiplier);
      return Math.round(wholeNumber / 10) * 10 / multiplier;
    };
    var isObject = function isObject2(o) {
      return (typeof o === "undefined" ? "undefined" : _typeof(o)) === "object" && o !== null;
    };
    var createPxReplace = function createPxReplace2(rootValue, identifier, unitPrecision, minPixelValue) {
      return function(m, $1, $2) {
        if (!$1)
          return m;
        if (identifier && m.indexOf(identifier) === 0)
          return m.replace(identifier, "");
        var pixels = parseFloat($1);
        if (pixels < minPixelValue)
          return m;
        var baseValue = isObject(rootValue) ? rootValue[$2] : rootValue;
        var fixedVal = toFixed(pixels / baseValue, unitPrecision);
        return fixedVal + "rem";
      };
    };
    var declarationExists = function declarationExists2(decls, prop, value) {
      return decls.some(function(decl2) {
        return decl2.prop === prop && decl2.value === value;
      });
    };
    var blacklistedSelector = function blacklistedSelector2(blacklist, selector) {
      if (typeof selector !== "string")
        return false;
      return blacklist.some(function(regex) {
        if (typeof regex === "string")
          return selector.indexOf(regex) !== -1;
        return selector.match(regex);
      });
    };
    var blacklistedProp = function blacklistedProp2(blacklist, prop) {
      if (typeof prop !== "string")
        return false;
      return blacklist.some(function(regex) {
        if (typeof regex === "string")
          return prop.indexOf(regex) !== -1;
        return prop.match(regex);
      });
    };
    var handleIgnoreIdentifierRegx = function handleIgnoreIdentifierRegx2(identifier, unit) {
      var _identifier = identifier;
      var backslashfy = _identifier.split("").join("\\");
      backslashfy = "\\" + backslashfy;
      var pattern = `"[^"]+"|'[^']+'|url\\([^\\)]+\\)|((?:` + backslashfy + "|\\d*)\\.?\\d+)(" + unit + ")";
      return new RegExp(pattern, "ig");
    };
    exports.default = _postcss2.default.plugin("postcss-plugin-px2rem", function(options) {
      var opts = _extends({}, defaultOpts, options);
      var unit = "px";
      if (isObject(opts.rootValue)) {
        unit = Object.keys(opts.rootValue).join("|");
      }
      var regText = `"[^"]+"|'[^']+'|url\\([^\\)]+\\)|(\\d*\\.?\\d+)(` + unit + ")";
      var pxRegex = new RegExp(regText, "ig");
      var identifier = opts.ignoreIdentifier;
      if (identifier && typeof identifier === "string") {
        identifier = identifier.replace(/\s+/g, "");
        opts.replace = true;
        pxRegex = handleIgnoreIdentifierRegx(identifier, unit);
      } else {
        identifier = false;
      }
      var pxReplace = createPxReplace(opts.rootValue, identifier, opts.unitPrecision, opts.minPixelValue);
      return function(css) {
        css.walkDecls(function(decl2, i) {
          var _decl = decl2;
          if (opts.exclude && css.source.input.file && css.source.input.file.match(opts.exclude) !== null)
            return;
          if (_decl.value.indexOf("px") === -1)
            return;
          if (blacklistedProp(opts.propBlackList, _decl.prop))
            return;
          if (opts.propWhiteList.length && opts.propWhiteList.indexOf(_decl.prop) === -1)
            return;
          if (blacklistedSelector(opts.selectorBlackList, _decl.parent.selector))
            return;
          var value = _decl.value.replace(pxRegex, pxReplace);
          if (declarationExists(_decl.parent, _decl.prop, value))
            return;
          if (opts.replace) {
            _decl.value = value;
          } else {
            _decl.parent.insertAfter(i, _decl.clone({
              value
            }));
          }
        });
        if (opts.mediaQuery) {
          css.walkAtRules("media", function(rule2) {
            var _rule = rule2;
            if (_rule.params.indexOf("px") === -1)
              return;
            _rule.params = _rule.params.replace(pxRegex, pxReplace);
          });
        }
      };
    });
    module2.exports = exports["default"];
  }
});

// ../../node_modules/.pnpm/postcss-plugin-px2rem@0.8.1/node_modules/postcss-plugin-px2rem/index.js
var require_postcss_plugin_px2rem = __commonJS({
  "../../node_modules/.pnpm/postcss-plugin-px2rem@0.8.1/node_modules/postcss-plugin-px2rem/index.js"(exports, module2) {
    module2.exports = require_lib();
  }
});

// src/styles.ts
var styles_exports = {};
__export(styles_exports, {
  style: () => style
});
module.exports = __toCommonJS(styles_exports);
var import_esbuild = __toESM(require("esbuild"));
var import_path = __toESM(require("path"));

// ../../node_modules/.pnpm/postcss@8.4.13/node_modules/postcss/lib/postcss.mjs
var import_postcss = __toESM(require_postcss(), 1);
var postcss_default = import_postcss.default;
var stringify = import_postcss.default.stringify;
var fromJSON = import_postcss.default.fromJSON;
var plugin = import_postcss.default.plugin;
var parse = import_postcss.default.parse;
var list = import_postcss.default.list;
var document = import_postcss.default.document;
var comment = import_postcss.default.comment;
var atRule = import_postcss.default.atRule;
var rule = import_postcss.default.rule;
var decl = import_postcss.default.decl;
var root = import_postcss.default.root;
var CssSyntaxError = import_postcss.default.CssSyntaxError;
var Declaration = import_postcss.default.Declaration;
var Container = import_postcss.default.Container;
var Processor = import_postcss.default.Processor;
var Document = import_postcss.default.Document;
var Comment = import_postcss.default.Comment;
var Warning = import_postcss.default.Warning;
var AtRule = import_postcss.default.AtRule;
var Result = import_postcss.default.Result;
var Input = import_postcss.default.Input;
var Rule = import_postcss.default.Rule;
var Root = import_postcss.default.Root;
var Node = import_postcss.default.Node;

// src/styles.ts
var import_postcss_plugin_px2rem = __toESM(require_postcss_plugin_px2rem());
function style() {
  return {
    name: "style",
    setup({ onResolve, onLoad }) {
      onResolve({ filter: /\.css$/, namespace: "file" }, (args) => {
        const absPath = import_path.default.resolve(args.resolveDir, args.path);
        return { path: absPath, namespace: "style-stub" };
      });
      onResolve({ filter: /\.css$/, namespace: "style-stub" }, (args) => {
        return { path: args.path, namespace: "style-content" };
      });
      onResolve({ filter: /^__style_helper__$/, namespace: "style-stub" }, (args) => ({
        path: args.path,
        namespace: "style-helper",
        sideEffects: false
      }));
      onLoad({ filter: /.*/, namespace: "style-helper" }, () => __async(this, null, function* () {
        return {
          contents: `
        export function injectStyle(text) {
          if (typeof document !== 'undefined') {
            var style = document.createElement('style')
            var node = document.createTextNode(text)
            style.appendChild(node)
            document.head.appendChild(style)
          }
        }
        `
        };
      }));
      onLoad({ filter: /.*/, namespace: "style-stub" }, (args) => ({
        contents: `
        import { injectStyle } from "__style_helper__"
        import css from ${JSON.stringify(args.path)}
        injectStyle(css)
        `
      }));
      onLoad({
        filter: /.*/,
        namespace: "style-content"
      }, (args) => __async(this, null, function* () {
        const { errors, warnings, outputFiles } = yield import_esbuild.default.build({
          entryPoints: [args.path],
          logLevel: "silent",
          bundle: true,
          write: false,
          charset: "utf8",
          minify: true,
          loader: {
            ".svg": "dataurl",
            ".ttf": "dataurl"
          }
        });
        if (errors.length > 0) {
          return {
            errors,
            warnings,
            contents: outputFiles[0].text,
            loader: "text"
          };
        }
        try {
          const result = yield postcss_default([
            (0, import_postcss_plugin_px2rem.default)({
              rootValue: 100,
              minPixelValue: 2
            })
          ]).process(outputFiles[0].text, {
            from: args.path,
            to: args.path
          });
          return {
            errors,
            warnings,
            contents: result.css,
            loader: "text"
          };
        } catch (error) {
          return {
            errors,
            warnings,
            contents: outputFiles[0].text,
            loader: "text"
          };
        }
      }));
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  style
});
