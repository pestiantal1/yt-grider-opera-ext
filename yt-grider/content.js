const DEFAULT_COUNT = 5;

chrome.storage.sync.get({ videosPerRow: DEFAULT_COUNT }, ({ videosPerRow }) => {
  applyGridSetting(videosPerRow);
});

function applyGridSetting(count) {
  const style = document.createElement("style");
  style.textContent = `
    ytd-rich-grid-renderer {
      --ytd-rich-grid-items-per-row: ${count} !important;
    }
  `;
  document.head.appendChild(style);
}