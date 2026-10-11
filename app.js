(() => {
  "use strict";
  const form = document.getElementById("link-form");
  const input = document.getElementById("media-url");
  const result = document.getElementById("result");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const sources = [
    { name: "Instagram", hosts: ["instagram.com", "www.instagram.com"], help: "https://help.instagram.com/" , note: "Use Instagram’s in-app options where available, or ask the creator for the original file. Availability depends on the post and account settings." },
    { name: "TikTok", hosts: ["tiktok.com", "www.tiktok.com", "vm.tiktok.com", "vt.tiktok.com"], help: "https://support.tiktok.com/" , note: "Open the post in TikTok and use Save video if the creator has enabled it. If the option is missing, respect the creator’s choice." },
    { name: "Facebook", hosts: ["facebook.com", "www.facebook.com", "m.facebook.com", "fb.watch"], help: "https://www.facebook.com/help/" , note: "Use Facebook’s built-in features or request permission to download the original media. This site does not extract Facebook video files." },
    { name: "YouTube", hosts: ["youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"], help: "https://support.google.com/youtube/answer/56100" , note: "YouTube Studio offers downloads for your own uploads. This site does not download other users’ videos or bypass YouTube restrictions." }
  ];

  function classify(raw) {
    let parsed;
    try {
      parsed = new URL(raw);
    } catch (_) {
      return { error: "Enter a complete URL, including https://." };
    }
    if (!["https:", "http:"].includes(parsed.protocol)) return { error: "Only http and https links are accepted." };
    const host = parsed.hostname.toLowerCase().replace(/\.$/, "");
    if (parsed.username || parsed.password) return { error: "For safety, links containing embedded usernames or passwords are not accepted." };
    const source = sources.find(item => item.hosts.includes(host) || item.hosts.some(h => host.endsWith("." + h)));
    if (!source) return { error: "This link is not from one of the four currently supported platforms. Try Instagram, TikTok, Facebook, or YouTube." };
    return { source, url: parsed.href };
  }

  function safeLink(href, label) {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = label;
    return a;
  }

  function showError(message) {
    result.replaceChildren();
    const heading = document.createElement("h3");
    heading.textContent = "Check your link";
    const p = document.createElement("p");
    p.textContent = message;
    result.append(heading, p);
    result.hidden = false;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    const found = classify(input.value.trim());
    if (found.error) {
      showError(found.error);
      return;
    }
    const { source, url } = found;
    result.replaceChildren();
    const heading = document.createElement("h3");
    heading.textContent = source.name + " link recognized";
    const p = document.createElement("p");
    p.textContent = source.note + " The URL is checked locally; this site does not upload or store it.";
    const actions = document.createElement("div");
    actions.className = "result-actions";
    actions.append(safeLink(url, "Open original post ↗"), safeLink(source.help, "Official help ↗"));
    result.append(heading, p, actions);
    result.hidden = false;
    result.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
  });
})();