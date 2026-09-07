# Design Orbit — static edition

Pure Vite + React static site. No server, database, Cloudflare Worker, or environment variable is required.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages

1. Replace the contents of the `imsso-bmed/DesignOrbit` repository with this project.
2. Commit and push to `main`.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow builds and publishes the site automatically.

The initial URL will be `https://imsso-bmed.github.io/DesignOrbit/`.

Navigation uses hash routes so direct links continue to work on GitHub Pages:

- `#/`
- `#/journal`
- `#/journal/click-to-focus`

## Custom domain

Enter the domain under **Settings → Pages → Custom domain**, then add the DNS records GitHub displays at your domain registrar. Enable **Enforce HTTPS** after verification completes.
