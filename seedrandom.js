const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const merge = [...new Set(a.concat(b))];