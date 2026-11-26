# Thematic Travel

Use Node.js 22.23.5 and install dependencies with `npm ci`.

## Local development

Run `npm run dev` and open <http://localhost:3000/>.

## Static export

Run `npm run lint` and `npm run build`. Next.js writes the site to `out/`.
To preview the project-site URL locally, build with the repository prefix and
mount the export under that directory:

```sh
PAGES_BASE_PATH=/thematic-travel npm run build
preview_dir=$(mktemp -d)
ln -s "$PWD/out" "$preview_dir/thematic-travel"
python3 -m http.server 4173 --bind 127.0.0.1 --directory "$preview_dir"
```

Open <http://127.0.0.1:4173/thematic-travel/>.

## GitHub Pages

In the repository, select **GitHub Actions** under **Settings → Pages →
Build and deployment → Source**. The Pages workflow runs on pushes to `main`
and can also be started from the Actions tab. It uses the base path reported
by GitHub Pages and uploads `out/`.
