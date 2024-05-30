const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';