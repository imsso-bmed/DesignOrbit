# Design Orbit Journal

A mobile-friendly bilingual editorial site for Design Orbit. It includes:

- Design Orbit landing page
- Purple Journal index
- Korean / English article switcher
- Long-form editorial article layout
- Interactive click-to-focus visual demo
- Responsive desktop and mobile styling

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Publish through GitHub

1. Create a new GitHub repository.
2. Upload the extracted files, including the `.openai` directory.
3. Commit to the default branch.
4. Connect the repository to your preferred hosting provider.

The main routes are:

- `/` — Design Orbit home
- `/journal` — Journal index
- `/journal/click-to-focus` — First bilingual article

## Customize

- Edit global colors and typography in `app/globals.css`.
- Edit the home page in `app/page.tsx`.
- Add article cards in `app/journal/page.tsx`.
- Duplicate the `app/journal/click-to-focus` folder for the next article.

The built-in demo uses abstract CSS forms so the starter has no model-license or patient-data dependency. Replace it later with a public GLB and React Three Fiber when the final model is ready.
