const input = document.getElementById("count");
const status = document.getElementById("status");

chrome.storage.sync.get({ videosPerRow: 5 }, ({ videosPerRow }) => {
  input.value = videosPerRow;
});

document.getElementById("save").addEventListener("click", () => {
  const count = parseInt(input.value, 10);
  chrome.storage.sync.set({ videosPerRow: count }, () => {
    status.textContent = "Saved!";
    setTimeout(() => (status.textContent = ""), 1500);
  });
});
