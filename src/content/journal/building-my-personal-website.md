---
title: "Building My Personal Website with Astro"
description: "Notes from designing and developing a fast, minimal personal website using Astro, Tailwind CSS, GitHub, and Cloudflare Pages."
category: "Development"
publishedAt: 2026-08-04
featured: true
draft: false
tags:
  - Astro
  - Tailwind CSS
  - TypeScript
  - GitHub
  - Cloudflare Pages
---

For a long time, I wanted a personal website that could hold everything I create in one place.

Not only design projects, but also software experiments, data explorations, and notes from things I learn along the way. I wanted it to feel more personal than a social media profile and more flexible than a portfolio hosted on a third-party platform.

This website is my attempt to build that space.

## Why I Built It

My work and interests sit across three areas:

- visual design
- software development
- data science

These areas may look separate, but they often overlap.

Design helps me communicate ideas clearly. Software development allows me to turn those ideas into working products. Data helps me understand problems, patterns, and decisions more objectively.

I wanted a website that could represent all three without feeling like a crowded agency landing page.

The goal was simple:

> Build a quiet, useful, and maintainable digital home.

## Choosing the Technology

I chose Astro as the main framework because this website is mostly content-driven.

It does not need a large client-side application or complicated state management. Most pages are static, which makes Astro a natural fit.

The current stack includes:

- Astro for the website framework
- Tailwind CSS for styling
- TypeScript for safer and clearer code
- GitHub for version control
- Cloudflare Pages for deployment

This setup is lightweight and available without paid infrastructure.

Every time I push a new commit to GitHub, Cloudflare Pages automatically rebuilds and publishes the website. That workflow keeps the process simple:

```text
Edit
→ Commit
→ Push
→ Deploy