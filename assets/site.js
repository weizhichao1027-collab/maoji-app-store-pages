(function () {
  var zh = document.getElementById("lang-zh");
  var en = document.getElementById("lang-en");
  if (!zh || !en) return;

  function apply(lang) {
    var useEn = lang === "en";
    en.checked = useEn;
    zh.checked = !useEn;
    document.documentElement.lang = useEn ? "en" : "zh-Hans";
    document.documentElement.dir = "ltr";
    try {
      localStorage.setItem("maohaizi-lang", useEn ? "en" : "zh");
    } catch (err) {}
  }

  var saved = null;
  try {
    saved = localStorage.getItem("maohaizi-lang");
  } catch (err) {}

  if (saved === "en" || saved === "zh") {
    apply(saved);
  } else if (/^en\b/i.test(navigator.language || "")) {
    apply("en");
  } else {
    apply("zh");
  }

  zh.addEventListener("change", function () {
    if (zh.checked) apply("zh");
  });
  en.addEventListener("change", function () {
    if (en.checked) apply("en");
  });
})();
