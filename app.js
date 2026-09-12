(() => {
  const PRESETS = {
    morandi: { top: "#C46B6B", left: "#6B8FA8", right: "#D4C07A" },
    standard: { top: "#FF0000", left: "#0000FF", right: "#FFFF00" },
    pastel: { top: "#E8A4A1", left: "#9BB8D4", right: "#E6D18A" },
    ukiyo: { top: "#C44536", left: "#2F4A78", right: "#E2B13C" },
    sunset: { top: "#E85D4C", left: "#4A5D8A", right: "#F0B429" },
    pop: { top: "#F03A47", left: "#2D5BE3", right: "#FFD23F" },
    tea: { top: "#B85C38", left: "#4F7A8C", right: "#C9B56A" },
    candy: { top: "#FF6B9D", left: "#6EC6FF", right: "#FFE566" },
  };

  const SAMPLE = {
    zh: {
      top: "快",
      left: "便宜",
      right: "好",
      ab: "差",
      ac: "贵",
      bc: "慢",
      center: "不可能",
    },
    en: {
      top: "Fast",
      left: "Cheap",
      right: "Good",
      ab: "Shoddy",
      ac: "Pricey",
      bc: "Slow",
      center: "Impossible",
    },
  };

  const I18N = {
    zh: {
      title: "不可能三角生成器",
      titleAlt: "Impossible Triangle",
      documentTitle: "不可能三角生成器｜三圆叠色梗图",
      metaDescription: "免费在线不可能三角生成器：把快、好、便宜那种三圆维恩图做成颜料叠色梗图，改文字换配色，导出透明底 PNG。",
      ogDescription: "三个圆按颜料叠色，红蓝成紫、黄蓝成绿。改文字、换配色，导出透明底 PNG。",
      ogImageAlt: "快、便宜、好三圆叠色，中间写着不可能",
      ogSiteName: "不可能三角生成器",
      ogImage: "https://tri.ryanstarfox.top/og.png",
      eyebrow: "颜料 · 红黄蓝叠色",
      lede: "三个愿望叠在一起，中间那个就是梗。按颜料混合，导出 PNG。",
      download: "下载 PNG",
      lineBreak: "Shift+Enter 换行",
      exportHint: "预览即成图。透明底会保留圆外的透明像素。",
      copyLegend: "文字",
      labelTop: "上圆",
      labelLeft: "左圆",
      labelRight: "右圆",
      labelAB: "上 ∩ 左",
      labelAC: "上 ∩ 右",
      labelBC: "左 ∩ 右",
      labelCenter: "三圆交汇",
      fontSize: "字号",
      overlapDist: "重叠文字到中心",
      exclusiveRatio: "独占文字到中心",
      labelColor: "文字颜色",
      autoContrast: "按叠色自动黑白字",
      inkLegend: "油墨",
      presetMorandi: "莫兰迪",
      presetStandard: "标准红黄蓝",
      presetPastel: "马卡龙",
      presetUkiyo: "浮世绘",
      presetSunset: "晚霞",
      presetPop: "波普",
      presetTea: "草木",
      presetCandy: "糖果",
      colorTop: "上圆颜色",
      colorLeft: "左圆颜色",
      colorRight: "右圆颜色",
      plateLegend: "印版",
      strokeEnabled: "圆圈描边",
      strokeColor: "描边颜色",
      strokeWidth: "描边粗细",
      stockLegend: "纸张",
      bgWhite: "白底",
      bgTransparent: "透明底",
      bgCustom: "自定义",
      bgColor: "背景颜色",
      footer: "叠色方式：颜料混合。红+蓝=紫，蓝+黄=绿，黄+红=橙。",
      repoLink: "GitHub 源码",
      filename: "不可能三角",
    },
    en: {
      title: "Impossible Triangle",
      titleAlt: "不可能三角生成器",
      documentTitle: "Impossible Triangle Generator",
      metaDescription: "Make an impossible-triangle meme in the browser. Three circles mix like paint — edit labels, pick colors, export a transparent PNG.",
      ogDescription: "Three circles mix like paint: red+blue=purple, blue+yellow=green, yellow+red=orange. Edit labels and export a transparent PNG.",
      ogImageAlt: "Fast, cheap, and good overlapping; the center says Impossible",
      ogSiteName: "Impossible Triangle",
      ogImage: "https://tri.ryanstarfox.top/og-en.png",
      eyebrow: "Pigment · RYB mixing",
      lede: "Three wishes, stacked. The overlap is the joke. Paint mixing, export PNG.",
      download: "Download PNG",
      lineBreak: "Shift+Enter for a new line",
      exportHint: "What you see is what exports. Transparent keeps pixels outside the circles.",
      copyLegend: "Copy",
      labelTop: "Top",
      labelLeft: "Left",
      labelRight: "Right",
      labelAB: "Top ∩ Left",
      labelAC: "Top ∩ Right",
      labelBC: "Left ∩ Right",
      labelCenter: "All three",
      fontSize: "Type size",
      overlapDist: "Overlap to center",
      exclusiveRatio: "Exclusive to center",
      labelColor: "Label color",
      autoContrast: "Auto black / white labels",
      inkLegend: "Ink",
      presetMorandi: "Morandi",
      presetStandard: "Pure RYB",
      presetPastel: "Pastel",
      presetUkiyo: "Ukiyo-e",
      presetSunset: "Sunset",
      presetPop: "Pop",
      presetTea: "Botanic",
      presetCandy: "Candy",
      colorTop: "Top color",
      colorLeft: "Left color",
      colorRight: "Right color",
      plateLegend: "Plate",
      strokeEnabled: "Circle stroke",
      strokeColor: "Stroke color",
      strokeWidth: "Stroke width",
      stockLegend: "Stock",
      bgWhite: "White",
      bgTransparent: "Transparent",
      bgCustom: "Custom",
      bgColor: "Background",
      footer: "Pigment mixing: red+blue=purple, blue+yellow=green, yellow+red=orange.",
      repoLink: "Source on GitHub",
      filename: "impossible-triangle",
    },
  };

  const KEYS = ["top", "left", "right", "ab", "ac", "bc", "center"];

  const els = {
    html: document.documentElement,
    canvas: document.getElementById("venn"),
    sheet: document.querySelector(".sheet"),
    download: document.getElementById("download"),
    autoContrast: document.getElementById("auto-contrast"),
    fontSize: document.getElementById("font-size"),
    overlapDist: document.getElementById("overlap-dist"),
    exclusiveRatio: document.getElementById("exclusive-ratio"),
    strokeEnabled: document.getElementById("stroke-enabled"),
    strokeWidth: document.getElementById("stroke-width"),
    strokeControls: document.querySelector(".stroke-controls"),
    bgCustomField: document.querySelector(".bg-custom-field"),
    texts: Object.fromEntries(KEYS.map((k) => [k, document.getElementById(`text-${k}`)])),
    colors: {
      top: document.getElementById("color-top"),
      left: document.getElementById("color-left"),
      right: document.getElementById("color-right"),
      label: document.getElementById("label-color"),
      stroke: document.getElementById("stroke-color"),
      bg: document.getElementById("bg-color"),
    },
    hex: {
      top: document.getElementById("color-top-hex"),
      left: document.getElementById("color-left-hex"),
      right: document.getElementById("color-right-hex"),
      label: document.getElementById("label-color-hex"),
      stroke: document.getElementById("stroke-color-hex"),
      bg: document.getElementById("bg-color-hex"),
    },
  };

  function detectSystemLang() {
    return (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function langFromUrl() {
    const v = new URLSearchParams(location.search).get("lang");
    return v === "zh" || v === "en" ? v : null;
  }

  const stored = safeParse(localStorage.getItem("impossible-triangle"));
  const urlLang = langFromUrl();
  const savedLang = stored?.langMode;
  const langMode = urlLang || (savedLang === "zh" || savedLang === "en" ? savedLang : "system");
  const initialLang = langMode === "system" ? detectSystemLang() : langMode;

  const state = {
    langMode,
    lang: initialLang,
    texts: stored?.textsTouched
      ? { ...SAMPLE[initialLang], ...(stored.texts || {}) }
      : { ...SAMPLE[initialLang] },
    colors: { ...PRESETS.morandi, ...(stored?.colors || {}) },
    labelColor: stored?.labelColor || "#1C1714",
    autoContrast: stored?.autoContrast ?? true,
    fontSize: stored?.fontSize || 32,
    overlapDist: stored?.overlapDist ?? 0.46,
    exclusiveRatio: stored?.exclusiveRatio ?? 0.66,
    strokeEnabled: stored?.strokeEnabled ?? false,
    strokeColor: stored?.strokeColor || "#1C1714",
    strokeWidth: stored?.strokeWidth || 4,
    bgMode: stored?.bgMode || "transparent",
    bgColor: stored?.bgColor || "#FFFFFF",
    preset: stored?.preset || "morandi",
    textsTouched: stored?.textsTouched ?? false,
  };

  function safeParse(raw) {
    try {
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function persist() {
    localStorage.setItem(
      "impossible-triangle",
      JSON.stringify({
        langMode: state.langMode,
        lang: state.lang,
        texts: state.texts,
        colors: state.colors,
        labelColor: state.labelColor,
        autoContrast: state.autoContrast,
        fontSize: state.fontSize,
        overlapDist: state.overlapDist,
        exclusiveRatio: state.exclusiveRatio,
        strokeEnabled: state.strokeEnabled,
        strokeColor: state.strokeColor,
        strokeWidth: state.strokeWidth,
        bgMode: state.bgMode,
        bgColor: state.bgColor,
        preset: state.preset,
        textsTouched: state.textsTouched,
      })
    );
  }

  function hexToRgb(hex) {
    const h = hex.replace("#", "");
    return {
      r: parseInt(h.slice(0, 2), 16),
      g: parseInt(h.slice(2, 4), 16),
      b: parseInt(h.slice(4, 6), 16),
    };
  }

  function clamp01(v) {
    return Math.min(1, Math.max(0, v));
  }

  function rgbToHex({ r, g, b }) {
    const ch = [r, g, b].map((n) =>
      Math.max(0, Math.min(255, Math.round(n)))
        .toString(16)
        .padStart(2, "0")
    );
    return `#${ch.join("")}`;
  }

  function rgbToRyb(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const w = Math.min(r, g, b);
    r -= w;
    g -= w;
    b -= w;
    const maxG = Math.max(r, g, b);
    let y = Math.min(r, g);
    r -= y;
    g -= y;
    if (b > 0 && g > 0) {
      b *= 0.5;
      g *= 0.5;
    }
    y += g;
    b += g;
    const maxY = Math.max(r, y, b);
    if (maxY > 0) {
      const n = maxG / maxY;
      r *= n;
      y *= n;
      b *= n;
    }
    return { r: r + w, y: y + w, b: b + w };
  }

  function rybToRgb(r, y, b, normalize = true) {
    const w = Math.min(r, y, b);
    r -= w;
    y -= w;
    b -= w;
    const maxY = Math.max(r, y, b);
    let g = Math.min(y, b);
    y -= g;
    b -= g;
    if (b > 0 && g > 0) {
      b *= 2;
      g *= 2;
    }
    r += y;
    g += y;
    const maxG = Math.max(r, g, b);
    if (normalize && maxG > 0) {
      const n = maxY / maxG;
      r *= n;
      g *= n;
      b *= n;
    }
    return {
      r: clamp01(r + w) * 255,
      g: clamp01(g + w) * 255,
      b: clamp01(b + w) * 255,
    };
  }

  function mixPaints(...hexes) {
    const rybs = hexes.map((hex) => {
      const c = hexToRgb(hex);
      return rgbToRyb(c.r, c.g, c.b);
    });
    const n = rybs.length;
    const avg = {
      r: rybs.reduce((s, c) => s + c.r, 0) / n,
      y: rybs.reduce((s, c) => s + c.y, 0) / n,
      b: rybs.reduce((s, c) => s + c.b, 0) / n,
    };
    let rgb = rybToRgb(avg.r, avg.y, avg.b, false);
    const shade = n === 2 ? 0.92 : n >= 3 ? 0.7 : 1;
    rgb = { r: rgb.r * shade, g: rgb.g * shade, b: rgb.b * shade };
    if (n >= 3) {
      rgb = {
        r: rgb.r * 0.85 + 55,
        g: rgb.g * 0.62 + 22,
        b: rgb.b * 0.38 + 8,
      };
    }
    return rgbToHex(rgb);
  }

  function luminance(hex) {
    const { r, g, b } = hexToRgb(hex);
    const srgb = [r, g, b].map((v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  }

  function inkOn(bg) {
    return luminance(bg) > 0.42 ? "#1C1714" : "#F6F1E8";
  }

  function normalizeHex(value) {
    const v = value.trim().replace(/^#/, "").toUpperCase();
    if (/^[0-9A-F]{6}$/.test(v)) return `#${v}`;
    if (/^[0-9A-F]{3}$/.test(v)) {
      return `#${v[0]}${v[0]}${v[1]}${v[1]}${v[2]}${v[2]}`;
    }
    return null;
  }

  function geometry(size) {
    const R = size * 0.3;
    const D = R * 1.04;
    const cx = size / 2;
    const cy = size / 2 + size * 0.03;
    const lift = D / Math.sqrt(3);
    const top = { x: cx, y: cy - lift };
    const left = { x: cx - D / 2, y: cy + lift / 2 };
    const right = { x: cx + D / 2, y: cy + lift / 2 };
    const centroid = {
      x: (top.x + left.x + right.x) / 3,
      y: (top.y + left.y + right.y) / 3,
    };
    const lerp = (a, b, t) => ({
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
    });
    const along = (from, toward, dist) => {
      const dx = toward.x - from.x;
      const dy = toward.y - from.y;
      const len = Math.hypot(dx, dy) || 1;
      return { x: from.x + (dx / len) * dist, y: from.y + (dy / len) * dist };
    };
    const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
    const rim = (circle) => along(centroid, circle, Math.hypot(circle.x - centroid.x, circle.y - centroid.y) + R);
    return {
      R,
      circles: { top, left, right },
      labels: {
        top: lerp(centroid, rim(top), state.exclusiveRatio),
        left: lerp(centroid, rim(left), state.exclusiveRatio),
        right: lerp(centroid, rim(right), state.exclusiveRatio),
        ab: along(centroid, mid(top, left), R * state.overlapDist),
        ac: along(centroid, mid(top, right), R * state.overlapDist),
        bc: along(centroid, mid(left, right), R * state.overlapDist),
        center: centroid,
      },
    };
  }

  function wrapText(ctx, text, maxWidth) {
    const lines = [];
    for (const para of String(text || "").split("\n")) {
      if (!para) {
        lines.push("");
        continue;
      }
      if (/\s/.test(para) && !/[\u4e00-\u9fff]/.test(para)) {
        let line = "";
        for (const word of para.split(/\s+/)) {
          const next = line ? `${line} ${word}` : word;
          if (ctx.measureText(next).width > maxWidth && line) {
            lines.push(line);
            line = word;
          } else {
            line = next;
          }
        }
        if (line) lines.push(line);
      } else {
        let line = "";
        for (const ch of [...para]) {
          const next = line + ch;
          if (ctx.measureText(next).width > maxWidth && line) {
            lines.push(line);
            line = ch;
          } else {
            line = next;
          }
        }
        if (line) lines.push(line);
      }
    }
    return lines.slice(0, 4);
  }

  function drawStrokedCircle(ctx, c, r, color, width) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }

  function drawLabel(ctx, text, pos, fill, size, maxWidth) {
    ctx.font = `700 ${size}px "Noto Sans SC", "Bricolage Grotesque", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const lines = wrapText(ctx, text, maxWidth);
    const lh = size * 1.22;
    const startY = pos.y - ((lines.length - 1) * lh) / 2;
    ctx.fillStyle = fill;
    lines.forEach((line, i) => {
      ctx.fillText(line, pos.x, startY + i * lh);
    });
  }

  function regionColors() {
    const { top, left, right } = state.colors;
    return {
      top,
      left,
      right,
      ab: mixPaints(top, left),
      ac: mixPaints(top, right),
      bc: mixPaints(left, right),
      center: mixPaints(top, left, right),
    };
  }

  let paintLayer = null;
  function getPaintLayer(size) {
    if (!paintLayer || paintLayer.width !== size) {
      paintLayer = document.createElement("canvas");
      paintLayer.width = size;
      paintLayer.height = size;
    }
    return paintLayer;
  }

  function paintRegion(ctx, size, includes, excludes, color, radius) {
    const layer = getPaintLayer(size);
    const o = layer.getContext("2d");
    o.clearRect(0, 0, size, size);
    o.globalCompositeOperation = "source-over";
    o.fillStyle = color;
    o.beginPath();
    o.arc(includes[0].x, includes[0].y, radius, 0, Math.PI * 2);
    o.fill();
    o.globalCompositeOperation = "destination-in";
    for (let i = 1; i < includes.length; i += 1) {
      o.beginPath();
      o.arc(includes[i].x, includes[i].y, radius, 0, Math.PI * 2);
      o.fill();
    }
    o.globalCompositeOperation = "destination-out";
    excludes.forEach((c) => {
      o.beginPath();
      o.arc(c.x, c.y, radius, 0, Math.PI * 2);
      o.fill();
    });
    o.globalCompositeOperation = "source-over";
    ctx.drawImage(layer, 0, 0);
  }

  function renderToCanvas(canvas, pixelSize) {
    const ctx = canvas.getContext("2d");
    canvas.width = pixelSize;
    canvas.height = pixelSize;
    const size = pixelSize;
    const { R, circles, labels } = geometry(size);
    const fills = regionColors();

    ctx.clearRect(0, 0, size, size);
    if (state.bgMode === "white") {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, size, size);
    } else if (state.bgMode === "custom") {
      ctx.fillStyle = state.bgColor;
      ctx.fillRect(0, 0, size, size);
    }

    const { top, left, right } = circles;
    paintRegion(ctx, size, [top], [left, right], fills.top, R);
    paintRegion(ctx, size, [left], [top, right], fills.left, R);
    paintRegion(ctx, size, [right], [top, left], fills.right, R);
    paintRegion(ctx, size, [top, left], [right], fills.ab, R);
    paintRegion(ctx, size, [top, right], [left], fills.ac, R);
    paintRegion(ctx, size, [left, right], [top], fills.bc, R);
    paintRegion(ctx, size, [top, left, right], [], fills.center, R);

    if (state.strokeEnabled) {
      const sw = (state.strokeWidth / 1000) * size;
      drawStrokedCircle(ctx, circles.top, R, state.strokeColor, sw);
      drawStrokedCircle(ctx, circles.left, R, state.strokeColor, sw);
      drawStrokedCircle(ctx, circles.right, R, state.strokeColor, sw);
    }

    const fontPx = (state.fontSize / 1000) * size;
    const maxW = R * 0.92;
    KEYS.forEach((key) => {
      const fill = state.autoContrast ? inkOn(fills[key]) : state.labelColor;
      drawLabel(ctx, state.texts[key], labels[key], fill, fontPx, maxW);
    });
  }

  function preview() {
    const css = Math.min(1000, Math.round(els.canvas.clientWidth || 640));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderToCanvas(els.canvas, Math.round(css * dpr));
    els.sheet.dataset.bg = state.bgMode === "transparent" ? "transparent" : "solid";
    if (state.bgMode === "custom") {
      els.sheet.style.background = state.bgColor;
    } else if (state.bgMode === "white") {
      els.sheet.style.background = "";
    } else {
      els.sheet.style.background = "";
    }
  }

  function effectiveLang() {
    return state.langMode === "system" ? detectSystemLang() : state.langMode;
  }

  function setMeta(selector, attr, value) {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute(attr, value);
  }

  function applySeo(pack) {
    const locale = state.lang === "zh" ? "zh_CN" : "en_US";
    const alternate = state.lang === "zh" ? "en_US" : "zh_CN";
    const seoEn = state.langMode === "en" || langFromUrl() === "en";
    const pageUrl = seoEn ? "https://tri.ryanstarfox.top/?lang=en" : "https://tri.ryanstarfox.top/";
    document.title = pack.documentTitle;
    setMeta('meta[name="description"]', "content", pack.metaDescription);
    setMeta('meta[property="og:locale"]', "content", locale);
    setMeta('meta[property="og:locale:alternate"]', "content", alternate);
    setMeta('meta[property="og:site_name"]', "content", pack.ogSiteName);
    setMeta('meta[property="og:title"]', "content", pack.documentTitle);
    setMeta('meta[property="og:description"]', "content", pack.ogDescription);
    setMeta('meta[property="og:url"]', "content", pageUrl);
    setMeta('meta[property="og:image"]', "content", pack.ogImage);
    setMeta('meta[property="og:image:alt"]', "content", pack.ogImageAlt);
    setMeta('meta[name="twitter:title"]', "content", pack.documentTitle);
    setMeta('meta[name="twitter:description"]', "content", pack.ogDescription);
    setMeta('meta[name="twitter:image"]', "content", pack.ogImage);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", pageUrl);
    const ld = document.querySelector('script[type="application/ld+json"]');
    if (ld) {
      try {
        const data = JSON.parse(ld.textContent);
        data.name = pack.ogSiteName;
        data.alternateName = pack.titleAlt;
        data.description = pack.metaDescription;
        data.inLanguage = ["zh-CN", "en"];
        data.image = pack.ogImage;
        data.url = pageUrl;
        ld.textContent = JSON.stringify(data);
      } catch {
        /* keep the static JSON-LD if it cannot be parsed */
      }
    }
  }

  function syncLangUrl() {
    const url = new URL(location.href);
    if (state.langMode === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    const next = `${url.pathname}${url.search}${url.hash}`;
    const cur = `${location.pathname}${location.search}${location.hash}`;
    if (next !== cur) history.replaceState(null, "", next);
  }

  function applyI18n() {
    const next = effectiveLang();
    const prev = state.lang;
    if (next !== prev) {
      const wasSample = KEYS.every((k) => (state.texts[k] ?? "") === (SAMPLE[prev]?.[k] ?? ""));
      state.lang = next;
      if (wasSample || !state.textsTouched) {
        state.texts = { ...SAMPLE[next] };
        state.textsTouched = false;
      }
    }
    const pack = I18N[state.lang];
    els.html.lang = state.lang === "zh" ? "zh-CN" : "en";
    applySeo(pack);
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (pack[key]) node.textContent = pack[key];
    });
    KEYS.forEach((k) => {
      els.texts[k].title = pack.lineBreak;
    });
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang));
    });
  }

  function applyTheme() {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    els.html.dataset.theme = dark ? "dark" : "light";
  }

  function syncForm() {
    KEYS.forEach((k) => {
      els.texts[k].value = state.texts[k] ?? "";
      autosize(els.texts[k]);
    });
    els.colors.top.value = state.colors.top;
    els.colors.left.value = state.colors.left;
    els.colors.right.value = state.colors.right;
    els.hex.top.value = state.colors.top;
    els.hex.left.value = state.colors.left;
    els.hex.right.value = state.colors.right;
    els.colors.label.value = state.labelColor;
    els.hex.label.value = state.labelColor;
    els.autoContrast.checked = state.autoContrast;
    els.fontSize.value = String(state.fontSize);
    els.overlapDist.value = String(Math.round(state.overlapDist * 100));
    els.exclusiveRatio.value = String(Math.round(state.exclusiveRatio * 100));
    els.strokeEnabled.checked = state.strokeEnabled;
    els.strokeControls.hidden = !state.strokeEnabled;
    els.colors.stroke.value = state.strokeColor;
    els.hex.stroke.value = state.strokeColor;
    els.strokeWidth.value = String(state.strokeWidth);
    document.querySelectorAll("input[name='bg-mode']").forEach((input) => {
      input.checked = input.value === state.bgMode;
    });
    els.bgCustomField.hidden = state.bgMode !== "custom";
    els.colors.bg.value = state.bgColor;
    els.hex.bg.value = state.bgColor;
    document.querySelectorAll("[data-preset]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.preset === state.preset);
    });
  }

  function bindColorPair(colorEl, hexEl, onChange) {
    colorEl.addEventListener("input", () => {
      hexEl.value = colorEl.value.toUpperCase();
      onChange(colorEl.value.toUpperCase());
    });
    hexEl.addEventListener("change", () => {
      const hex = normalizeHex(hexEl.value);
      if (!hex) {
        hexEl.value = colorEl.value.toUpperCase();
        return;
      }
      colorEl.value = hex;
      hexEl.value = hex;
      onChange(hex);
    });
  }

  function detectPreset() {
    const match = Object.entries(PRESETS).find(([, colors]) =>
      ["top", "left", "right"].every((k) => colors[k].toUpperCase() === state.colors[k].toUpperCase())
    );
    state.preset = match ? match[0] : "custom";
  }

  function autosize(el) {
    el.style.height = "auto";
    el.style.height = `${Math.max(32, el.scrollHeight)}px`;
  }

  KEYS.forEach((k) => {
    const el = els.texts[k];
    el.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      if (e.shiftKey) return;
      e.preventDefault();
    });
    el.addEventListener("input", () => {
      state.texts[k] = el.value;
      state.textsTouched = true;
      autosize(el);
      persist();
      preview();
    });
  });

  bindColorPair(els.colors.top, els.hex.top, (hex) => {
    state.colors.top = hex;
    detectPreset();
    syncForm();
    persist();
    preview();
  });
  bindColorPair(els.colors.left, els.hex.left, (hex) => {
    state.colors.left = hex;
    detectPreset();
    syncForm();
    persist();
    preview();
  });
  bindColorPair(els.colors.right, els.hex.right, (hex) => {
    state.colors.right = hex;
    detectPreset();
    syncForm();
    persist();
    preview();
  });
  bindColorPair(els.colors.label, els.hex.label, (hex) => {
    state.labelColor = hex;
    persist();
    preview();
  });
  bindColorPair(els.colors.stroke, els.hex.stroke, (hex) => {
    state.strokeColor = hex;
    persist();
    preview();
  });
  bindColorPair(els.colors.bg, els.hex.bg, (hex) => {
    state.bgColor = hex;
    persist();
    preview();
  });

  els.autoContrast.addEventListener("change", () => {
    state.autoContrast = els.autoContrast.checked;
    persist();
    preview();
  });
  els.fontSize.addEventListener("input", () => {
    state.fontSize = Number(els.fontSize.value);
    persist();
    preview();
  });
  els.overlapDist.addEventListener("input", () => {
    state.overlapDist = Number(els.overlapDist.value) / 100;
    persist();
    preview();
  });
  els.exclusiveRatio.addEventListener("input", () => {
    state.exclusiveRatio = Number(els.exclusiveRatio.value) / 100;
    persist();
    preview();
  });
  els.strokeEnabled.addEventListener("change", () => {
    state.strokeEnabled = els.strokeEnabled.checked;
    els.strokeControls.hidden = !state.strokeEnabled;
    persist();
    preview();
  });
  els.strokeWidth.addEventListener("input", () => {
    state.strokeWidth = Number(els.strokeWidth.value);
    persist();
    preview();
  });

  document.querySelectorAll("input[name='bg-mode']").forEach((input) => {
    input.addEventListener("change", () => {
      if (!input.checked) return;
      state.bgMode = input.value;
      els.bgCustomField.hidden = state.bgMode !== "custom";
      persist();
      preview();
    });
  });

  document.querySelectorAll("[data-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const preset = PRESETS[btn.dataset.preset];
      if (!preset) return;
      state.colors = { ...preset };
      state.preset = btn.dataset.preset;
      syncForm();
      persist();
      preview();
    });
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.lang;
      if (next === state.langMode) return;
      state.langMode = next;
      syncLangUrl();
      applyI18n();
      syncForm();
      persist();
      preview();
    });
  });

  els.download.addEventListener("click", () => {
    const exportCanvas = document.createElement("canvas");
    renderToCanvas(exportCanvas, 1600);
    exportCanvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      const stamp = new Date().toISOString().slice(0, 10);
      a.href = URL.createObjectURL(blob);
      a.download = `${I18N[state.lang].filename}-${stamp}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    }, "image/png");
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
  window.addEventListener("languagechange", () => {
    if (state.langMode !== "system") return;
    applyI18n();
    syncForm();
    persist();
    preview();
  });
  window.addEventListener("resize", () => preview());

  applyI18n();
  applyTheme();
  syncForm();

  const start = () => preview();
  if (document.fonts?.ready) {
    document.fonts.ready.then(start);
  } else {
    start();
  }
})();
