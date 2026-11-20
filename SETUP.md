# Andrea's Tamales: putting the app on the tablet

The app is the files in this folder. It runs in the tablet's web browser, works without internet once installed, and saves orders on the tablet itself.

## What's in the folder

| File | What it is |
|---|---|
| `index.html` | The app |
| `xlsx.mini.min.js` | Makes the Excel file (SheetJS, free Apache-2.0 license, see `xlsx-LICENSE.txt`) |
| `sw.js` | Lets the app open with no internet |
| `manifest.webmanifest`, `icon-192.png`, `icon-512.png` | App name and home-screen icon |
| `SETUP.md` | This page |

## Step 1: put the files online (free, one time)

The tablet needs a web address (https) to install the app and use it offline. Pick one of these. Choose carefully, because the orders stay tied to that address: if you move the app to a new address later, the old orders won't show up there (use Backup and Restore to move them).

**Option A: GitHub Pages (recommended, permanent)**
1. Make a free account at github.com.
2. Create a new repository named `tamales` (Public, since free Pages needs a public repo; it contains only the app, never her orders).
3. Click **Add file → Upload files**, drag in everything from this folder, and click **Commit**.
4. Go to **Settings → Pages**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, and Save.
5. After a minute the address appears, like `https://YOURNAME.github.io/tamales/`.

**Option B: Netlify Drop (fastest)**
1. Go to app.netlify.com/drop and drag this whole folder onto the page.
2. Make a free account when it asks so the site isn't deleted after an hour.
3. You get an address like `https://something-random.netlify.app`. You can rename it under Site settings.

Her orders are never uploaded anywhere. Only the empty app is online.

## Step 2: install it on the Samsung tablet

1. Open **Chrome** on the tablet (Samsung Internet also works) and go to the address from Step 1.
2. Tap the **⋮ menu → Add to Home screen → Install**.
3. A red tamale icon called **Tamales** appears on the home screen. Open it from there from now on. It opens full screen and works without Wi-Fi.

## Step 3: how your mom uses it

- **Nuevo**: type the name, pick the day and pickup time (tap a time chip like "12 pm"), tap **+** for each ½ dozen (or **+1** for a full dozen), add notes with the chips ("No picosos", "Arroz"…), tap **Guardar**. The form clears and keeps the same day, so the next order is quick.
- **Pedidos**: the orders for the chosen day, in pickup-time order. Tap **Sin pagar** / **No recogido** to mark paid and picked up. **Editar** fixes an order, 🗑 deletes it. The search box finds a name on any day.
- **Preparar**: how many dozens of each kind to make that day, the total to collect, what's still owed, and a day sheet that looks like her paper list (with an **Imprimir** button).
- **Más**: **Bajar Excel** downloads a spreadsheet with a daily summary, every order, and one sheet per day. **Guardar respaldo** saves a backup file. Price per dozen ($28) can be changed here.
- The **English / Español** button at the top switches the language.

## Keeping the orders safe

- Orders live only on this tablet. **Don't use "Clear browsing data" / "Clear site data" in Chrome**, and don't uninstall Chrome, or the orders are erased.
- Every few days during the busy season, tap **Más → Guardar respaldo** and send the file to yourself (email, WhatsApp, Google Drive). If anything happens, install the app again and use **Restaurar** with that file.
- The Excel download is also a good record to keep.

## Updating the app later

Upload the new files to the same place (Step 1), and change the version line in `sw.js` (for example `tamales-v1` → `tamales-v2`). The tablet picks up the new version the next time it opens with internet. Orders are not affected.

## Possible next step

Automatic backup to a Google Sheet, so orders are saved in the cloud as she enters them. Not built yet.
