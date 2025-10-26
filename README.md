# yt-grider — YouTube grid extension (Opera)

Small extension that changes the number of videos shown per row on YouTube.

## Features
- Adjust how many video thumbnails appear per row on YouTube.
- Simple options page to set the number of videos per row.

## Files
- Options UI and saving logic: [yt-grider/options.js](yt-grider/options.js)

## Installation (Opera)
1. Open Opera and go to opera://extensions.
2. Enable "Developer mode".
3. Click "Load unpacked" and select this repository's `yt-grider` folder:
   - Example path on Windows:
     ```
     C:\Users\<you>\Documents\GitHub\yt-grider-opera-ext\yt-grider
     ```
4. The extension will appear in the toolbar. Ensure it is enabled.

## Usage
- Open YouTube. The extension adjusts the grid layout according to the saved setting.
- To change how many videos per row:
  1. Right-click the extension icon → "Options" (or open the extension's options via the extensions page).
  2. Change the number and click Save.
- Default value is 5 (see default in [yt-grider/options.js](yt-grider/options.js)).

## Developer notes
- The options page script reads/writes the setting `videosPerRow` via `chrome.storage.sync`.
  - Default value is defined here: [`yt-grider/options.js`](yt-grider/options.js).
- To change the hard-coded default, edit the default in that file:
  - Search for `{ videosPerRow: 5 }`.

## Contributing
- Open a PR with changes. Keep modifications small and focused.

## License
- No license file included. Add one if you plan to publish.
