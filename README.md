# Abriès Hôtel Premium

Refonte ultra premium du site Abriès Hôtel, construite avec Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Motion, GSAP ScrollTrigger, Lenis, Zod, React Hook Form et Playwright.

## Mission

Créer un site hôtelier premium pour Abriès Hôtel à partir des informations publiques disponibles sur https://www.abrieshotel.fr et autres sources publiques sans compte.

La première étape du projet est un audit autonome :
- crawl du site actuel ;
- extraction des pages importantes ;
- extraction des contenus et images publiques ;
- création des fichiers `content/` ;
- inventaire des anciennes URLs ;
- proposition de redirections ;
- liste des inconnues.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible primitives
- Motion
- GSAP ScrollTrigger
- Lenis
- next/image
- Zod
- React Hook Form
- Playwright

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run test:e2e
```

## Content Rules

- Do not invent exact prices, surfaces, schedules, capacities or menus.
- Use `TODO_PUBLIC_DATA` placeholders when a fact is not public.
- Keep audit output in `content/audit/`.
- Run lint and build before marking implementation steps complete.

## Current Status

Repository scaffolded. Next step: autonomous public audit of the current Abriès Hôtel website.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
