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

  const FONT_PRESETS = ["Noto Sans SC", "Noto Serif SC"];

  const SYSTEM_FONT_CANDIDATES = [
    "PingFang SC",
    "PingFang TC",
    "Hiragino Sans GB",
    "Hiragino Sans",
    "Heiti SC",
    "Songti SC",
    "STHeiti",
    "STSong",
    "STKaiti",
    "STFangsong",
    "Apple LiGothic",
    "Microsoft YaHei",
    "Microsoft JhengHei",
    "SimSun",
    "SimHei",
    "KaiTi",
    "FangSong",
    "DengXian",
    "Source Han Sans SC",
    "Source Han Serif SC",
    "WenQuanYi Micro Hei",
    "Noto Sans CJK SC",
    "Noto Serif CJK SC",
    "Arial",
    "Helvetica",
    "Helvetica Neue",
    "Avenir",
    "Avenir Next",
    "Times New Roman",
    "Georgia",
    "Palatino",
    "Menlo",
    "Monaco",
    "Consolas",
    "Courier New",
    "SF Pro Text",
    "Segoe UI",
    "Tahoma",
    "Verdana",
  ];

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
      tabBasic: "基础设置",
      tabAdvanced: "高级设置",
      titleLegend: "标题",
      titleEnabled: "显示标题",
      titleLine1: "标题第 1 行",
      titleLine2: "标题第 2 行（可选）",
      copyLegend: "文字",
      labelTop: "上圆",
      labelLeft: "左圆",
      labelRight: "右圆",
      labelTopOne: "上圆",
      labelLeftOne: "左圆",
      labelRightOne: "右圆",
      labelTopTwo: "下圆",
      labelLeftTwo: "左上",
      labelRightTwo: "右上",
      labelAB: "上 ∩ 左",
      labelAC: "上 ∩ 右",
      labelBC: "左 ∩ 右",
      labelABOne: "上 ∩ 左",
      labelACOne: "上 ∩ 右",
      labelBCOne: "左 ∩ 右",
      labelABTwo: "下 ∩ 左",
      labelACTwo: "下 ∩ 右",
      labelBCTwo: "左 ∩ 右",
      labelCenter: "三圆交汇",
      autoContrast: "按叠色自动黑白字",
      layoutLegend: "布局",
      layoutOneTop: "上一下二",
      layoutTwoTop: "上二下一",
      rotateColors: "颜色顺时针",
      flipColors: "颜色左右翻",
      rotateTexts: "文字顺时针",
      flipTexts: "文字左右翻",
      rearrangeHint: "只重排槽位，不旋转画面。",
      inkLegend: "油墨",
      inkCustomLegend: "图片颜色",
      styleLegend: "文字样式",
      styleTitle: "标题",
      styleExclusive: "一重叠",
      styleOverlap: "二重叠",
      styleCenter: "三重叠",
      styleColor: "颜色",
      styleFont: "字体",
      styleSize: "字号",
      titleGap: "离图距离",
      titleFont1: "第 1 行字体",
      titleFont2: "第 2 行字体",
      titleSize1: "第 1 行字号",
      titleSize2: "第 2 行字号",
      overlapDist: "到中心距离",
      exclusiveRatio: "到中心距离",
      fontPresetGroup: "预设字体",
      fontSystemGroup: "系统字体",
      fontSystemEmpty: "未检测到常用系统字体",
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
      colorTopOne: "上圆颜色",
      colorLeftOne: "左圆颜色",
      colorRightOne: "右圆颜色",
      colorTopTwo: "下圆颜色",
      colorLeftTwo: "左上颜色",
      colorRightTwo: "右上颜色",
      plateLegend: "印版",
      strokeEnabled: "圆圈描边",
      strokeColor: "描边颜色",
      strokeWidth: "描边粗细",
      stockLegend: "纸张",
      bgWhite: "白底",
      bgTransparent: "透明底",
      bgCustom: "自定义",
      bgColor: "背景颜色",
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
      tabBasic: "Basic",
      tabAdvanced: "Advanced",
      titleLegend: "Title",
      titleEnabled: "Show title",
      titleLine1: "Title line 1",
      titleLine2: "Title line 2 (optional)",
      copyLegend: "Copy",
      labelTop: "Top",
      labelLeft: "Left",
      labelRight: "Right",
      labelTopOne: "Top",
      labelLeftOne: "Left",
      labelRightOne: "Right",
      labelTopTwo: "Bottom",
      labelLeftTwo: "Top left",
      labelRightTwo: "Top right",
      labelAB: "Top ∩ Left",
      labelAC: "Top ∩ Right",
      labelBC: "Left ∩ Right",
      labelABOne: "Top ∩ Left",
      labelACOne: "Top ∩ Right",
      labelBCOne: "Left ∩ Right",
      labelABTwo: "Bottom ∩ Left",
      labelACTwo: "Bottom ∩ Right",
      labelBCTwo: "Left ∩ Right",
      labelCenter: "All three",
      autoContrast: "Auto black / white labels",
      layoutLegend: "Layout",
      layoutOneTop: "1 up · 2 down",
      layoutTwoTop: "2 up · 1 down",
      rotateColors: "Rotate colors",
      flipColors: "Flip colors",
      rotateTexts: "Rotate copy",
      flipTexts: "Flip copy",
      rearrangeHint: "Remaps slots only — no visual rotate.",
      inkLegend: "Ink",
      inkCustomLegend: "Circle colors",
      styleLegend: "Type styles",
      styleTitle: "Title",
      styleExclusive: "Exclusive",
      styleOverlap: "Double",
      styleCenter: "Triple",
      styleColor: "Color",
      styleFont: "Font",
      styleSize: "Size",
      titleGap: "Gap to diagram",
      titleFont1: "Line 1 font",
      titleFont2: "Line 2 font",
      titleSize1: "Line 1 size",
      titleSize2: "Line 2 size",
      overlapDist: "Distance to center",
      exclusiveRatio: "Distance to center",
      fontPresetGroup: "Presets",
      fontSystemGroup: "System fonts",
      fontSystemEmpty: "No common system fonts found",
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
      colorTopOne: "Top color",
      colorLeftOne: "Left color",
      colorRightOne: "Right color",
      colorTopTwo: "Bottom color",
      colorLeftTwo: "Top-left color",
      colorRightTwo: "Top-right color",
      plateLegend: "Plate",
      strokeEnabled: "Circle stroke",
      strokeColor: "Stroke color",
      strokeWidth: "Stroke width",
      stockLegend: "Stock",
      bgWhite: "White",
      bgTransparent: "Transparent",
      bgCustom: "Custom",
      bgColor: "Background",
      filename: "impossible-triangle",
    },
  };

  const KEYS = ["top", "left", "right", "ab", "ac", "bc", "center"];
  const FONT_KEYS = ["exclusive", "overlap", "center", "title1", "title2"];
  const FONT_STATE_KEYS = {
    exclusive: "fontExclusive",
    overlap: "fontOverlap",
    center: "fontCenter",
    title1: "titleFont1",
    title2: "titleFont2",
  };

  const els = {
    html: document.documentElement,
    canvas: document.getElementById("venn"),
    sheet: document.querySelector(".sheet"),
    download: document.getElementById("download"),
    autoContrast: document.getElementById("auto-contrast"),
    titleEnabled: document.getElementById("title-enabled"),
    titleFields: document.getElementById("title-fields"),
    titleLine1: document.getElementById("title-line1"),
    titleLine2: document.getElementById("title-line2"),
    titleGap: document.getElementById("title-gap"),
    titleSize1: document.getElementById("title-size1"),
    titleSize2: document.getElementById("title-size2"),
    fontSizeCenter: document.getElementById("font-size-center"),
    fontSizeOverlap: document.getElementById("font-size-overlap"),
    fontSizeExclusive: document.getElementById("font-size-exclusive"),
    overlapDist: document.getElementById("overlap-dist"),
    exclusiveRatio: document.getElementById("exclusive-ratio"),
    strokeEnabled: document.getElementById("stroke-enabled"),
    strokeWidth: document.getElementById("stroke-width"),
    strokeControls: document.querySelector(".stroke-controls"),
    bgCustomField: document.querySelector(".bg-custom-field"),
    panelBasic: document.getElementById("panel-basic"),
    panelAdvanced: document.getElementById("panel-advanced"),
    vennFields: document.querySelector(".venn-fields"),
    rotateColors: document.getElementById("rotate-colors"),
    flipColors: document.getElementById("flip-colors"),
    rotateTexts: document.getElementById("rotate-texts"),
    flipTexts: document.getElementById("flip-texts"),
    texts: Object.fromEntries(KEYS.map((k) => [k, document.getElementById(`text-${k}`)])),
    colors: {
      top: document.getElementById("color-top"),
      left: document.getElementById("color-left"),
      right: document.getElementById("color-right"),
      exclusive: document.getElementById("color-exclusive"),
      overlap: document.getElementById("color-overlap"),
      center: document.getElementById("color-center"),
      title: document.getElementById("title-color"),
      stroke: document.getElementById("stroke-color"),
      bg: document.getElementById("bg-color"),
    },
    hex: {
      top: document.getElementById("color-top-hex"),
      left: document.getElementById("color-left-hex"),
      right: document.getElementById("color-right-hex"),
      exclusive: document.getElementById("color-exclusive-hex"),
      overlap: document.getElementById("color-overlap-hex"),
      center: document.getElementById("color-center-hex"),
      title: document.getElementById("title-color-hex"),
      stroke: document.getElementById("stroke-color-hex"),
      bg: document.getElementById("bg-color-hex"),
    },
    fonts: {
      exclusive: document.getElementById("font-exclusive"),
      overlap: document.getElementById("font-overlap"),
      center: document.getElementById("font-center"),
      title1: document.getElementById("title-font1"),
      title2: document.getElementById("title-font2"),
    },
  };

  function detectSystemLang() {
    return (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  function langFromUrl() {
    const v = new URLSearchParams(location.search).get("lang");
    return v === "zh" || v === "en" ? v : null;
  }

  function safeParse(raw) {
    try {
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  const stored = safeParse(localStorage.getItem("impossible-triangle"));
  const urlLang = langFromUrl();
  const savedLang = stored?.langMode;
  const langMode = urlLang || (savedLang === "zh" || savedLang === "en" ? savedLang : "system");
  const initialLang = langMode === "system" ? detectSystemLang() : langMode;
  const legacyLabel = stored?.labelColor || "#1C1714";

  const state = {
    langMode,
    lang: initialLang,
    texts: stored?.textsTouched
      ? { ...SAMPLE[initialLang], ...(stored.texts || {}) }
      : { ...SAMPLE[initialLang] },
    colors: { ...PRESETS.morandi, ...(stored?.colors || {}) },
    autoContrast: stored?.autoContrast ?? true,
    colorExclusive: stored?.colorExclusive || legacyLabel,
    colorOverlap: stored?.colorOverlap || legacyLabel,
    colorCenter: stored?.colorCenter || legacyLabel,
    fontExclusive: stored?.fontExclusive || "Noto Sans SC",
    fontOverlap: stored?.fontOverlap || "Noto Sans SC",
    fontCenter: stored?.fontCenter || "Noto Sans SC",
    fontSizeCenter: stored?.fontSizeCenter ?? stored?.fontSize ?? 32,
    fontSizeOverlap: stored?.fontSizeOverlap ?? stored?.fontSize ?? 32,
    fontSizeExclusive: stored?.fontSizeExclusive ?? stored?.fontSize ?? 32,
    overlapDist: stored?.overlapDist ?? 0.46,
    exclusiveRatio: stored?.exclusiveRatio ?? 0.66,
    layout: stored?.layout === "two-top" ? "two-top" : "one-top",
    titleEnabled: stored?.titleEnabled ?? false,
    titleLine1: stored?.titleLine1 || "",
    titleLine2: stored?.titleLine2 || "",
    titleColor: stored?.titleColor || "#1C1714",
    titleGap: stored?.titleGap ?? 0.08,
    titleFont1: stored?.titleFont1 || "Noto Sans SC",
    titleFont2: stored?.titleFont2 || "Noto Sans SC",
    titleSize1: stored?.titleSize1 ?? 42,
    titleSize2: stored?.titleSize2 ?? 28,
    strokeEnabled: stored?.strokeEnabled ?? false,
    strokeColor: stored?.strokeColor || "#1C1714",
    strokeWidth: stored?.strokeWidth || 4,
    bgMode: stored?.bgMode || "transparent",
    bgColor: stored?.bgColor || "#FFFFFF",
    preset: stored?.preset || "morandi",
    textsTouched: stored?.textsTouched ?? false,
    activeTab: stored?.activeTab === "advanced" ? "advanced" : "basic",
  };

  function persist() {
    localStorage.setItem(
      "impossible-triangle",
      JSON.stringify({
        langMode: state.langMode,
        lang: state.lang,
        texts: state.texts,
        colors: state.colors,
        autoContrast: state.autoContrast,
        colorExclusive: state.colorExclusive,
        colorOverlap: state.colorOverlap,
        colorCenter: state.colorCenter,
        fontExclusive: state.fontExclusive,
        fontOverlap: state.fontOverlap,
        fontCenter: state.fontCenter,
        fontSizeCenter: state.fontSizeCenter,
        fontSizeOverlap: state.fontSizeOverlap,
        fontSizeExclusive: state.fontSizeExclusive,
        overlapDist: state.overlapDist,
        exclusiveRatio: state.exclusiveRatio,
        layout: state.layout,
        titleEnabled: state.titleEnabled,
        titleLine1: state.titleLine1,
        titleLine2: state.titleLine2,
        titleColor: state.titleColor,
        titleGap: state.titleGap,
        titleFont1: state.titleFont1,
        titleFont2: state.titleFont2,
        titleSize1: state.titleSize1,
        titleSize2: state.titleSize2,
        strokeEnabled: state.strokeEnabled,
        strokeColor: state.strokeColor,
        strokeWidth: state.strokeWidth,
        bgMode: state.bgMode,
        bgColor: state.bgColor,
        preset: state.preset,
        textsTouched: state.textsTouched,
        activeTab: state.activeTab,
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

  function quoteFont(name) {
    const cleaned = String(name || "Noto Sans SC").replace(/["']/g, "").trim() || "Noto Sans SC";
    return `"${cleaned}", "Noto Sans SC", "Bricolage Grotesque", sans-serif`;
  }

  function titleActive() {
    return state.titleEnabled && Boolean(state.titleLine1.trim() || state.titleLine2.trim());
  }

  function geometry(canvasSize, diagramSize, originY = 0) {
    const R = diagramSize * 0.3;
    const D = R * 1.04;
    const cx = canvasSize / 2;
    const cy =
      originY + diagramSize / 2 + diagramSize * 0.03 * (state.layout === "one-top" ? 1 : -1);
    const lift = D / Math.sqrt(3);
    let top;
    let left;
    let right;
    if (state.layout === "one-top") {
      top = { x: cx, y: cy - lift };
      left = { x: cx - D / 2, y: cy + lift / 2 };
      right = { x: cx + D / 2, y: cy + lift / 2 };
    } else {
      top = { x: cx, y: cy + lift };
      left = { x: cx - D / 2, y: cy - lift / 2 };
      right = { x: cx + D / 2, y: cy - lift / 2 };
    }
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
    const rim = (circle) =>
      along(centroid, circle, Math.hypot(circle.x - centroid.x, circle.y - centroid.y) + R);
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

  function drawLabel(ctx, text, pos, fill, size, maxWidth, fontFamily) {
    ctx.font = `700 ${size}px ${quoteFont(fontFamily)}`;
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

  function drawTitle(ctx, size, diagramTop) {
    if (!titleActive()) return;
    const lines = [];
    if (state.titleLine1.trim()) {
      lines.push({
        text: state.titleLine1,
        size: (state.titleSize1 / 1000) * size,
        font: state.titleFont1,
      });
    }
    if (state.titleLine2.trim()) {
      lines.push({
        text: state.titleLine2,
        size: (state.titleSize2 / 1000) * size,
        font: state.titleFont2,
      });
    }
    if (!lines.length) return;
    const gap = state.titleGap * size;
    const blockHeight = lines.reduce((h, line, i) => h + line.size * (i ? 1.28 : 1), 0);
    let y = diagramTop - gap - blockHeight;
    if (y < size * 0.02) y = size * 0.02;
    ctx.fillStyle = state.titleColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    lines.forEach((line) => {
      ctx.font = `700 ${line.size}px ${quoteFont(line.font)}`;
      const wrapped = wrapText(ctx, line.text, size * 0.9);
      const lh = line.size * 1.2;
      wrapped.forEach((w, i) => {
        ctx.fillText(w, size / 2, y + i * lh);
      });
      y += wrapped.length * lh + line.size * 0.12;
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
    const hasTitle = titleActive();
    const diagramSize = hasTitle ? size * 0.78 : size;
    const originY = hasTitle ? size - diagramSize : 0;
    const { R, circles, labels } = geometry(size, diagramSize, originY);
    const fills = regionColors();

    ctx.clearRect(0, 0, size, size);
    if (state.bgMode === "white") {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, size, size);
    } else if (state.bgMode === "custom") {
      ctx.fillStyle = state.bgColor;
      ctx.fillRect(0, 0, size, size);
    }

    drawTitle(ctx, size, originY);

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

    const styleByKey = {
      top: { size: state.fontSizeExclusive, font: state.fontExclusive, color: state.colorExclusive },
      left: { size: state.fontSizeExclusive, font: state.fontExclusive, color: state.colorExclusive },
      right: { size: state.fontSizeExclusive, font: state.fontExclusive, color: state.colorExclusive },
      ab: { size: state.fontSizeOverlap, font: state.fontOverlap, color: state.colorOverlap },
      ac: { size: state.fontSizeOverlap, font: state.fontOverlap, color: state.colorOverlap },
      bc: { size: state.fontSizeOverlap, font: state.fontOverlap, color: state.colorOverlap },
      center: { size: state.fontSizeCenter, font: state.fontCenter, color: state.colorCenter },
    };
    const maxW = R * 0.92;
    KEYS.forEach((key) => {
      const style = styleByKey[key];
      const fontPx = (style.size / 1000) * size;
      const fill = state.autoContrast ? inkOn(fills[key]) : style.color;
      drawLabel(ctx, state.texts[key], labels[key], fill, fontPx, maxW, style.font);
    });
  }

  let previewRaf = 0;
  let lastPreviewSize = 0;

  function preview({ fromResize = false } = {}) {
    const css = Math.min(1000, Math.round(els.canvas.clientWidth || 640));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pixelSize = Math.round(css * dpr);
    if (fromResize && pixelSize === lastPreviewSize) return;
    lastPreviewSize = pixelSize;
    renderToCanvas(els.canvas, pixelSize);
    els.sheet.dataset.bg = state.bgMode === "transparent" ? "transparent" : "solid";
    if (state.bgMode === "custom") {
      els.sheet.style.background = state.bgColor;
    } else {
      els.sheet.style.background = "";
    }
  }

  function schedulePreview() {
    if (previewRaf) return;
    previewRaf = requestAnimationFrame(() => {
      previewRaf = 0;
      if (document.hidden) return;
      preview({ fromResize: true });
    });
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

  function layoutSuffix() {
    return state.layout === "two-top" ? "Two" : "One";
  }

  function applyLayoutLabels(pack) {
    const suffix = layoutSuffix();
    const map = {
      labelTop: pack[`labelTop${suffix}`] || pack.labelTop,
      labelLeft: pack[`labelLeft${suffix}`] || pack.labelLeft,
      labelRight: pack[`labelRight${suffix}`] || pack.labelRight,
      labelAB: pack[`labelAB${suffix}`] || pack.labelAB,
      labelAC: pack[`labelAC${suffix}`] || pack.labelAC,
      labelBC: pack[`labelBC${suffix}`] || pack.labelBC,
      colorTop: pack[`colorTop${suffix}`] || pack.colorTop,
      colorLeft: pack[`colorLeft${suffix}`] || pack.colorLeft,
      colorRight: pack[`colorRight${suffix}`] || pack.colorRight,
    };
    Object.entries(map).forEach(([key, value]) => {
      document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
        node.textContent = value;
      });
    });
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
    applyLayoutLabels(pack);
    KEYS.forEach((k) => {
      els.texts[k].title = pack.lineBreak;
    });
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang));
    });
    refreshFontSelectLabels();
  }

  function applyTheme() {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    els.html.dataset.theme = dark ? "dark" : "light";
  }

  let systemFonts = [];

  function detectInstalledFonts(candidates) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return [];
    const size = 72;
    const probe = "mmmmmmmmmmlli汉字字体测试";
    const baselines = ["monospace", "serif", "sans-serif", "cursive"];
    const baseWidths = {};
    baselines.forEach((b) => {
      ctx.font = `${size}px ${b}`;
      baseWidths[b] = ctx.measureText(probe).width;
    });
    return candidates.filter((name) => {
      if (FONT_PRESETS.includes(name)) return false;
      return baselines.some((b) => {
        ctx.font = `${size}px "${name}", ${b}`;
        return ctx.measureText(probe).width !== baseWidths[b];
      });
    });
  }

  async function resolveSystemFonts() {
    const probed = detectInstalledFonts(SYSTEM_FONT_CANDIDATES);
    let local = [];
    if (typeof window.queryLocalFonts === "function" && navigator.permissions?.query) {
      try {
        const status = await navigator.permissions.query({ name: "local-fonts" });
        if (status.state === "granted") {
          const fonts = await window.queryLocalFonts();
          local = [...new Set(fonts.map((f) => f.family).filter(Boolean))].filter(
            (name) => !FONT_PRESETS.includes(name)
          );
        }
      } catch {
        /* ignore unsupported permission name / denied */
      }
    }
    systemFonts = [...new Set([...probed, ...local])].sort((a, b) =>
      a.localeCompare(b, state.lang === "zh" ? "zh" : "en")
    );
    return systemFonts;
  }

  function populateFontSelect(select, selectedValue) {
    const pack = I18N[state.lang];
    const previous = selectedValue || select.value;
    select.innerHTML = "";

    const presetGroup = document.createElement("optgroup");
    presetGroup.label = pack.fontPresetGroup;
    presetGroup.dataset.i18nFontGroup = "preset";
    FONT_PRESETS.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      presetGroup.appendChild(opt);
    });
    select.appendChild(presetGroup);

    const systemGroup = document.createElement("optgroup");
    systemGroup.label = pack.fontSystemGroup;
    systemGroup.dataset.i18nFontGroup = "system";
    if (systemFonts.length) {
      systemFonts.forEach((name) => {
        const opt = document.createElement("option");
        opt.value = name;
        opt.textContent = name;
        systemGroup.appendChild(opt);
      });
    } else {
      const empty = document.createElement("option");
      empty.disabled = true;
      empty.value = "";
      empty.dataset.i18nFontEmpty = "1";
      empty.textContent = pack.fontSystemEmpty;
      systemGroup.appendChild(empty);
    }
    select.appendChild(systemGroup);

    const available = new Set([...FONT_PRESETS, ...systemFonts]);
    if (previous && available.has(previous)) {
      select.value = previous;
    } else if (previous && !available.has(previous)) {
      const orphan = document.createElement("option");
      orphan.value = previous;
      orphan.textContent = previous;
      systemGroup.appendChild(orphan);
      select.value = previous;
    } else {
      select.value = FONT_PRESETS[0];
    }
  }

  function refreshFontSelectLabels() {
    const pack = I18N[state.lang];
    document.querySelectorAll("optgroup[data-i18n-font-group='preset']").forEach((g) => {
      g.label = pack.fontPresetGroup;
    });
    document.querySelectorAll("optgroup[data-i18n-font-group='system']").forEach((g) => {
      g.label = pack.fontSystemGroup;
    });
    document.querySelectorAll("option[data-i18n-font-empty]").forEach((opt) => {
      opt.textContent = pack.fontSystemEmpty;
    });
  }

  function syncFontControl(key, value) {
    const select = els.fonts[key];
    const available = new Set([...FONT_PRESETS, ...systemFonts, value].filter(Boolean));
    if (value && !available.has(value)) {
      populateFontSelect(select, value);
      return;
    }
    if (![...select.options].some((o) => o.value === value)) {
      populateFontSelect(select, value);
      return;
    }
    select.value = value || FONT_PRESETS[0];
  }

  function rebuildAllFontSelects() {
    FONT_KEYS.forEach((key) => {
      populateFontSelect(els.fonts[key], state[FONT_STATE_KEYS[key]]);
    });
  }

  function applyVennFieldsLayout() {
    if (els.vennFields) els.vennFields.dataset.layout = state.layout;
  }

  function setTab(tab) {
    state.activeTab = tab;
    const basic = tab === "basic";
    els.panelBasic.hidden = !basic;
    els.panelAdvanced.hidden = basic;
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      const on = btn.dataset.tab === tab;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", String(on));
    });
  }

  function syncForm() {
    KEYS.forEach((k) => {
      els.texts[k].value = state.texts[k] ?? "";
      autosize(els.texts[k]);
    });
    els.titleEnabled.checked = state.titleEnabled;
    els.titleFields.hidden = !state.titleEnabled;
    els.titleLine1.value = state.titleLine1;
    els.titleLine2.value = state.titleLine2;
    autosize(els.titleLine1);
    autosize(els.titleLine2);
    els.titleGap.value = String(Math.round(state.titleGap * 100));
    els.titleSize1.value = String(state.titleSize1);
    els.titleSize2.value = String(state.titleSize2);
    els.colors.top.value = state.colors.top;
    els.colors.left.value = state.colors.left;
    els.colors.right.value = state.colors.right;
    els.hex.top.value = state.colors.top;
    els.hex.left.value = state.colors.left;
    els.hex.right.value = state.colors.right;
    els.colors.exclusive.value = state.colorExclusive;
    els.colors.overlap.value = state.colorOverlap;
    els.colors.center.value = state.colorCenter;
    els.colors.title.value = state.titleColor;
    els.hex.exclusive.value = state.colorExclusive;
    els.hex.overlap.value = state.colorOverlap;
    els.hex.center.value = state.colorCenter;
    els.hex.title.value = state.titleColor;
    els.autoContrast.checked = state.autoContrast;
    els.fontSizeCenter.value = String(state.fontSizeCenter);
    els.fontSizeOverlap.value = String(state.fontSizeOverlap);
    els.fontSizeExclusive.value = String(state.fontSizeExclusive);
    els.overlapDist.value = String(Math.round(state.overlapDist * 100));
    els.exclusiveRatio.value = String(Math.round(state.exclusiveRatio * 100));
    syncFontControl("exclusive", state.fontExclusive);
    syncFontControl("overlap", state.fontOverlap);
    syncFontControl("center", state.fontCenter);
    syncFontControl("title1", state.titleFont1);
    syncFontControl("title2", state.titleFont2);
    document.querySelectorAll("input[name='layout-mode']").forEach((input) => {
      input.checked = input.value === state.layout;
    });
    applyVennFieldsLayout();
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
    setTab(state.activeTab);
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

  function rotateColorsClockwise() {
    const { top, left, right } = state.colors;
    state.colors = { top: left, right: top, left: right };
    detectPreset();
  }

  function flipColorsLR() {
    const { top, left, right } = state.colors;
    state.colors = { top, left: right, right: left };
    detectPreset();
  }

  function rotateTextsClockwise() {
    const t = state.texts;
    state.texts = {
      top: t.left,
      right: t.top,
      left: t.right,
      ab: t.bc,
      ac: t.ab,
      bc: t.ac,
      center: t.center,
    };
    state.textsTouched = true;
  }

  function flipTextsLR() {
    const t = state.texts;
    state.texts = {
      top: t.top,
      left: t.right,
      right: t.left,
      ab: t.ac,
      ac: t.ab,
      bc: t.bc,
      center: t.center,
    };
    state.textsTouched = true;
  }

  function bindFontControl(key, stateKey) {
    const select = els.fonts[key];
    select.addEventListener("change", () => {
      if (!select.value) return;
      state[stateKey] = select.value;
      persist();
      preview();
    });
  }

  FONT_KEYS.forEach((key) => populateFontSelect(els.fonts[key], state[FONT_STATE_KEYS[key]]));
  resolveSystemFonts().then(() => {
    rebuildAllFontSelects();
  });

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

  ["titleLine1", "titleLine2"].forEach((key) => {
    const el = els[key];
    el.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      if (e.shiftKey) return;
      e.preventDefault();
    });
    el.addEventListener("input", () => {
      state[key] = el.value;
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
  bindColorPair(els.colors.exclusive, els.hex.exclusive, (hex) => {
    state.colorExclusive = hex;
    persist();
    preview();
  });
  bindColorPair(els.colors.overlap, els.hex.overlap, (hex) => {
    state.colorOverlap = hex;
    persist();
    preview();
  });
  bindColorPair(els.colors.center, els.hex.center, (hex) => {
    state.colorCenter = hex;
    persist();
    preview();
  });
  bindColorPair(els.colors.title, els.hex.title, (hex) => {
    state.titleColor = hex;
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

  bindFontControl("exclusive", "fontExclusive");
  bindFontControl("overlap", "fontOverlap");
  bindFontControl("center", "fontCenter");
  bindFontControl("title1", "titleFont1");
  bindFontControl("title2", "titleFont2");

  els.autoContrast.addEventListener("change", () => {
    state.autoContrast = els.autoContrast.checked;
    persist();
    preview();
  });
  els.titleEnabled.addEventListener("change", () => {
    state.titleEnabled = els.titleEnabled.checked;
    els.titleFields.hidden = !state.titleEnabled;
    persist();
    preview();
  });
  els.fontSizeCenter.addEventListener("input", () => {
    state.fontSizeCenter = Number(els.fontSizeCenter.value);
    persist();
    preview();
  });
  els.fontSizeOverlap.addEventListener("input", () => {
    state.fontSizeOverlap = Number(els.fontSizeOverlap.value);
    persist();
    preview();
  });
  els.fontSizeExclusive.addEventListener("input", () => {
    state.fontSizeExclusive = Number(els.fontSizeExclusive.value);
    persist();
    preview();
  });
  els.titleSize1.addEventListener("input", () => {
    state.titleSize1 = Number(els.titleSize1.value);
    persist();
    preview();
  });
  els.titleSize2.addEventListener("input", () => {
    state.titleSize2 = Number(els.titleSize2.value);
    persist();
    preview();
  });
  els.titleGap.addEventListener("input", () => {
    state.titleGap = Number(els.titleGap.value) / 100;
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

  document.querySelectorAll("input[name='layout-mode']").forEach((input) => {
    input.addEventListener("change", () => {
      if (!input.checked) return;
      state.layout = input.value;
      applyVennFieldsLayout();
      applyLayoutLabels(I18N[state.lang]);
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

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTab(btn.dataset.tab);
      persist();
    });
  });

  els.rotateColors.addEventListener("click", () => {
    rotateColorsClockwise();
    syncForm();
    persist();
    preview();
  });
  els.flipColors.addEventListener("click", () => {
    flipColorsLR();
    syncForm();
    persist();
    preview();
  });
  els.rotateTexts.addEventListener("click", () => {
    rotateTextsClockwise();
    syncForm();
    persist();
    preview();
  });
  els.flipTexts.addEventListener("click", () => {
    flipTextsLR();
    syncForm();
    persist();
    preview();
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
  window.addEventListener("resize", schedulePreview);

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
