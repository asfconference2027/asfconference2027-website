# ASF Conference 2027 Website

Custom React website for the ASF Conference in 2027.

## Stack

- React + Vite

## Running locally

Install dependencies:

```bash
npm install
```

Start the dev server (with hot reload):

```bash
npm run dev
```

Then open the URL it prints (usually [http://localhost:5173](http://localhost:5173)).

To view as a different device (eg, phone or tablet) use `Cmd+Option+I` to open DevTools, then `Cmd+Shift+M` to toggle the device toolbar. Select the device type from the dropdown at the top. 

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`. `npm run preview` serves that build locally so you can check it before deploying.
