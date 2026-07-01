<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Abriès Hôtel Autopilot Brief

Tu es en mode autonome total.

Je ne vais rien te fournir au départ : pas de contenu, pas de photos, pas de logo, pas d’accès, pas de texte complémentaire.

Tu dois tout récupérer seul à partir de https://www.abrieshotel.fr et des sources publiques accessibles sans compte.

Ta mission : recréer le site Abriès Hôtel en version ultra premium.

Objectif créatif :
- refuge contemporain du Queyras ;
- hôtel de montagne premium ;
- Liquid Glass subtil ;
- animations élégantes ;
- grandes images immersives ;
- expérience mobile impeccable ;
- site rapide ;
- SEO propre ;
- tunnel de réservation/contact élégant.

Objectif technique :
- Next.js App Router ;
- TypeScript ;
- Tailwind CSS ;
- shadcn/ui ;
- Motion ;
- GSAP ScrollTrigger ;
- Lenis ;
- next/image ;
- Zod ;
- React Hook Form ;
- Playwright.

Tu dois commencer par lire `AGENTS.md` et le brief autopilot.

Ensuite, fais d’abord un audit autonome :
1. crawl du site actuel ;
2. récupération des pages importantes ;
3. extraction des contenus ;
4. extraction des images publiques ;
5. création des fichiers `/content` ;
6. création de la liste des anciennes URLs ;
7. création de la liste des redirections ;
8. création de la liste des inconnues.

Très important :
- Ne bloque jamais parce qu’une info manque.
- Si une donnée n’est pas publique, crée une variable TODO ou un placeholder premium.
- N’invente pas de tarifs, surfaces, horaires, capacités ou menus précis.
- Ne fais pas un template hôtel générique.
- Le rendu doit être très premium dès le premier écran.
- Travaille par petites étapes.
- Lance `npm run lint` et `npm run build` avant de dire qu’une étape est terminée.

## Repo Conventions

- Keep source content in `content/` as structured Markdown or JSON.
- Keep crawler notes, URL inventories, redirects, and unknowns in `content/audit/`.
- Use placeholders only for non-public facts, with a clear `TODO_PUBLIC_DATA` marker.
- Do not commit copied private assets or anything requiring an account.
