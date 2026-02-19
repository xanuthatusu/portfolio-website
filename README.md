# Portfolio Website

Engineering-focused portfolio showcasing backend systems, distributed architecture, and SaaS design.

## Overview

This repository contains the source code for my personal portfolio website.

The site highlights:

- A multi-tenant, event-driven SaaS backend written in Go
- Architecture decisions and system design documentation
- Infrastructure and deployment strategy

The website itself is built with Next.js and deployed via Github Actions and AWS.

## Live Site

https://anthonygeorge.dev

## Tech Stack

- Next.js
- Typescript
- Tailwind CSS
- Github Actions for CI/CD
- AWS

## Project Structure

```
src/
  components/     Reusable UI components
  sections/       Page-level sections
  pages/          Route definitions
  content/        Blog posts & project writeups
  lib/            Utilities
public/           Static assets
```

## Development

Install dependencies:

`npm install`

Run locally:

`npm run dev`

Build for production:

`npm run build`

## License

MIT
