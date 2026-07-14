# Where to put your images

Each project has its own folder under `images/`. Drop files in using these
exact names and they'll appear automatically — no code editing needed.

For every project folder (e.g. `images/dzone/`) you can add up to 6 files:

| Filename          | Used for                                      | Recommended size |
|--------------------|-----------------------------------------------|-------------------|
| `thumb.jpg`        | Card thumbnail on the home & projects grid    | 800×600px         |
| `banner.jpg`       | Large banner at the top of the case study     | 1600×800px        |
| `gallery-1.jpg`    | Gallery screen 1                              | 1200×900px        |
| `gallery-2.jpg`    | Gallery screen 2                              | 1200×900px        |
| `gallery-3.jpg`    | Gallery screen 3                              | 1200×900px        |
| `gallery-4.jpg`    | Gallery screen 4                              | 1200×900px        |

Each slot is independent — changing `banner.jpg` will never affect the
gallery images or the thumbnail, and vice versa.

If a file is missing, that spot just shows the purple/pink gradient with
the project title instead — nothing breaks.

## Project folders

- `images/dzone/` — DZONE, Ed-Tech Website
- `images/emp2ortal/` — EMP2ORTAL
- `images/aahardarshan/` — Aahardarshan, Healthcare Website
- `images/domain-portal/` — Domain Management Portal
- `images/oystr/` — OYSTR, Digital Menu Service
- `images/banners/` — Banners, Campaign Graphics
- `images/social-post/` — Social Media Post Series

## Using a different file type or name?

If you'd rather use `.png` or `.webp`, or different filenames, just tell me
and I'll update the code — or you can edit the `<img src="...">` paths
directly in `project-detail.html` and `main.js`.
