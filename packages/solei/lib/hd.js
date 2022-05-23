// src/hd.ts
if (typeof document !== "undefined") {
  const win = window;
  const baseFontSize = win.alitaBaseFontSize || 100;
  const psdWidth = win.alitaPsdWidth || 750;
  const _baseFontSize = baseFontSize || 100;
  const _psdWidth = psdWidth || 750;
  const doc = win.document;
  const docEl = doc.documentElement;
  let lastWidth = docEl.clientWidth;
  let lastHeight = docEl.clientHeight;
  let rate = 1;
  let scale = 1;
  let timeoutNum;
  docEl.style.fontSize = `${_baseFontSize}px`;
  const div = doc.createElement("div");
  div.setAttribute("style", "width: 1rem;display:none");
  docEl.appendChild(div);
  const trueWidth = win.getComputedStyle(div).width;
  docEl.removeChild(div);
  if (trueWidth !== docEl.style.fontSize) {
    const trueWidthVal = parseInt(trueWidth, 10);
    rate = _baseFontSize / trueWidthVal;
    scale = scale * rate;
  }
  const getViewPort = (str) => {
    if (!str)
      return {};
    const arr = str.split(",");
    const hashArr = {};
    arr.forEach((s) => {
      const ss = s.split("=");
      hashArr[ss[0].replace(/(^\s*)|(\s*$)/g, "")] = ss[1];
    });
    return hashArr;
  };
  let metaEl = doc.querySelector('meta[name="viewport"]');
  if (!metaEl) {
    metaEl = doc.createElement("meta");
    metaEl.setAttribute("name", "viewport");
    doc.head.appendChild(metaEl);
  }
  if (window != top) {
    const metaStr = (metaEl == null ? void 0 : metaEl.getAttribute("content")) || "";
    const viewport = getViewPort(metaStr);
    const initScale = viewport["initial-scale"] || "1.0";
    const initScaleNum = parseInt(`${parseFloat(initScale) * 10}`, 10);
    scale = initScaleNum / 10;
  }
  metaEl.setAttribute("content", `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},viewport-fit=cover`);
  const setFontSize = () => {
    if (timeoutNum)
      clearTimeout(timeoutNum);
    timeoutNum = setTimeout(() => {
      const currentWidth = docEl.clientWidth;
      const currentHeight = docEl.clientHeight;
      if (currentWidth === lastWidth && currentHeight !== lastHeight) {
        lastWidth = currentWidth;
        lastHeight = currentHeight;
        return;
      }
      lastWidth = currentWidth;
      lastHeight = currentHeight;
      const trueClient2 = currentHeight > currentWidth ? currentWidth : currentHeight;
      const newFontSize2 = `${_baseFontSize / _psdWidth * trueClient2 * rate}px`;
      if (newFontSize2 === docEl.style.fontSize)
        return;
      docEl.style.fontSize = newFontSize2;
    }, 300);
  };
  const trueClient = docEl.clientHeight > docEl.clientWidth ? docEl.clientWidth : docEl.clientHeight;
  const newFontSize = `${_baseFontSize / _psdWidth * trueClient * rate}px`;
  docEl.style.fontSize = newFontSize;
  win.addEventListener("resize", setFontSize);
  document.documentElement.setAttribute("data-scale", true);
}
