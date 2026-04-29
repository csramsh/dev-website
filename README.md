# CSRA Mesh — Website Guide

This is the source code for the CSRA Mesh community website. It's a static site, meaning it's just files — no database, no server. When changes are pushed to GitHub, the site automatically builds and publishes to GitHub Pages within a couple of minutes.

---

## How It Works (The Big Picture)

- **Pages** live in `src/pages/` — each file is a URL on the site
- **Blog posts** live in `src/content/blog/` — add a file, get a post
- **Site-wide settings** (name, colors, nav links, socials) live in `theme.config.ts`
- **Push to `main`** → GitHub builds and deploys automatically

You don't need to run anything locally to make changes. Edit files on GitHub directly, commit, and the site updates.

---

## Pages

### Your pages and where to find them

| Page | File |
|------|------|
| Home | `src/pages/index.astro` |
| FAQs & Guides (index) | `src/pages/faqs/index.mdx` |
| Quick Start Guide | `src/pages/faqs/quickstart.mdx` |
| MQTT Setup Guide | `src/pages/faqs/mqtt.mdx` |
| OTA Firmware Update | `src/pages/faqs/ota.mdx` |
| EmComm | `src/pages/emcomm.mdx` |
| Events | `src/pages/events/index.mdx` |
| Friday Nets | `src/pages/events/nets/index.mdx` |
| Links & Resources | `src/pages/links.mdx` |
| Blog | `src/pages/blog/` (auto-generated from `src/content/blog/`) |
| 404 | `src/pages/404.astro` |

### Page types

Most pages are **MDX files** (`.mdx`) — these are Markdown with a little extra power. If you know how to write Markdown (headings with `#`, bold with `**text**`, links with `[text](url)`), you can edit these pages.

The home page (`index.astro`) is more complex — it's best to ask a developer before editing it.

---

## Editing a Page

Open the `.mdx` file for the page you want to edit. At the top you'll see a block between `---` lines called **frontmatter** — this controls the page title and description:

```
---
layout: '../../layouts/MarkdownLayout.astro'
title: Quick Start Guide
description: Step-by-step instructions to set up your first node.
pageHeader:
  title: Quick Start Guide
  subtitle: Set up your first node and join the CSRA Mesh.
  bgType: bordered
---
```

- **`title`** — used in the browser tab and search results
- **`description`** — used in search results and social sharing previews
- **`pageHeader.title` / `pageHeader.subtitle`** — the big heading shown at the top of the page

Below the frontmatter is the page content written in Markdown.

### Common Markdown formatting

```markdown
# Big heading
## Section heading
### Subsection heading

Regular paragraph text.

**Bold text** and *italic text*

- Bullet point
- Another bullet point

1. Numbered step
2. Another step

[Link text](https://example.com)
```

---

## Adding a New FAQ / Guide

1. Create a new `.mdx` file in `src/pages/faqs/` — e.g. `src/pages/faqs/channel-setup.mdx`
2. Add frontmatter at the top:

```
---
layout: '../../layouts/MarkdownLayout.astro'
title: Channel Setup Guide
description: How to configure your Meshtastic channels for the CSRA Mesh.
pageHeader:
  title: Channel Setup Guide
  subtitle: Get your channels set up correctly.
  bgType: bordered
---
```

3. Write your content below in Markdown
4. Add a link to it in `src/pages/faqs/index.mdx` so people can find it

The page will be live at `/faqs/channel-setup` once deployed.

---

## Blog Posts

Blog posts live in `src/content/blog/`. Each `.mdx` file is one post.

### Adding a blog post

Create a new file like `src/content/blog/my-post-title.mdx` with this frontmatter:

```
---
title: My Post Title
description: A short summary shown in the blog listing.
pubDate: 2025-06-01
author: Your Name
tags: [community, update]
---
```

Then write your post content below in Markdown. The filename (e.g. `my-post-title`) becomes the URL: `/blog/my-post-title`.

### Tips

- `pubDate` controls sort order — newer dates appear first
- `tags` are optional but useful for organizing posts
- The `description` appears as the card preview on the blog listing page

---

## Navigation & Site Settings

Everything in `theme.config.ts` controls the site-wide settings:

- **`name`** — site name used in the header
- **`seo.title` / `seo.description`** — default meta tags for search engines
- **`colors.primary` / `colors.secondary`** — brand colors (hex values)
- **`navigation.items`** — the links shown in the top nav bar
- **`socials`** — the social icons shown in the footer

### Adding a nav link

In `theme.config.ts`, find the `navigation.items` array and add an entry:

```ts
{
  type: 'link',
  label: 'New Page',
  href: '/new-page',
},
```

For external links, add `external: true`:

```ts
{
  type: 'link',
  label: 'Discord',
  href: 'https://discord.gg/mgzj2PmhKf',
  external: true,
},
```

---

## Footer Links

Footer links are in `src/components/Footer.astro`. Look for the "Pages" section — it's a short list of `<Link>` tags. Add or remove entries to match the pages you want listed.

---

## Images & Files

Static files (images, PDFs, etc.) go in the `public/` folder at the root of the project. A file at `public/images/my-photo.jpg` is accessible at `/images/my-photo.jpg` in the site.

To use an image in a page:

```markdown
![Description of the image](/images/my-photo.jpg)
```

---

## Deploying

Push any change to the `main` branch and GitHub Actions will automatically build and deploy the site. You can watch the progress at:

**https://github.com/csramsh/dev-website/actions**

The live site is at: **https://csramsh.github.io/dev-website/**

---

## Getting Help

- Join the Discord and ask in the dev channel
- For larger changes, open a GitHub issue describing what you want
- The original template documentation is in `ORIGINAL-README.md`
