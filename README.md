# LawGyan

Source for [lawgyan.co.in](https://lawgyan.co.in): Monika's law blog.

A fast, elegant blog for an advocate, built with [Jekyll](https://jekyllrb.com) so it can be hosted **free on GitHub Pages** with your own domain. Posts are plain Markdown files, so no coding is needed to write them.

## What's included

- Home page with a featured article, topics, latest writing and an About section
- Article pages with reading time, progress bar, share buttons (WhatsApp, LinkedIn, X) and previous/next links
- Writing page with topic filters, a Topics page, About, Contact and Disclaimer pages
- **Bar Council of India disclaimer** pop-up shown once to each visitor, plus a footer notice (Indian advocates aren't allowed to advertise, and this is the standard safeguard)
- Light and dark mode, mobile-friendly, plus SEO tags, sitemap and RSS feed set up automatically

## 1. Put it online (one time, about 15 minutes)

1. This repository already contains the site.
2. Make sure the repository is **public** (GitHub Pages is free for public repositories).
3. In the repository go to **Settings → Pages**. Under *Source* choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then save.
4. In a minute or two the site is live at `https://<username>.github.io/lawgyan/`.

> GitHub Pages builds Jekyll with its own fixed version, which works with everything here.

## 2. Connect your domain

1. The `CNAME` file already says `lawgyan.co.in`. In **Settings → Pages → Custom domain**, confirm it shows `lawgyan.co.in`.
2. At your domain registrar (GoDaddy, Namecheap, Hostinger and so on), add these DNS records:

   | Type  | Name | Value |
   |-------|------|-------|
   | CNAME | www  | `<username>.github.io` |
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |

3. Wait for DNS to update (up to a few hours), then tick **Enforce HTTPS** in the Pages settings.
4. `_config.yml` already has `url: "https://lawgyan.co.in"`.

> ⚠️ Changing the DNS records replaces whatever is on lawgyan.co.in today. Copy any existing articles into `_posts/` first.

## 3. Personalise it

Edit **`_config.yml`** for your name, title, email, location and LinkedIn. Then:

- **About page:** edit `about.md` (the lines marked ✏️).
- **Photo:** add `assets/img/portrait.jpg`, then in `index.html` change `portrait.svg` to `portrait.jpg`.
- **Topics:** edit `_data/topics.yml`.
- **Sample posts:** the three posts in `_posts/` are starting examples. Review them, then rewrite or delete them before launch.

## 4. Writing a new post

Create a file in `_posts/` named `YYYY-MM-DD-short-title.md`, for example `2026-10-15-rent-agreement-checklist.md`. You can do this directly on github.com with **Add file → Create new file**.

```markdown
---
title: "Signing a rent agreement? Check these 10 things first"
description: "One or two sentences that appear on cards and in Google results."
categories: [Property & Tenancy]   # must match a name in _data/topics.yml
featured: true                     # optional, shows it at the top of the home page
---

Your article starts here. Use ## for headings, **bold**, - for bullet lists,
> for a highlighted "short version" box, and tables like:

| Step | Deadline |
|---|---|
| Send notice | 30 days |
```

Commit the file and the site updates itself within a minute or two. To correct a post later, add `updated: 2026-11-01` to its header.

## Preview on your computer (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```
