---
author: Vamshik Patel
pubDatetime: 2025-11-08T00:00:00+05:30
title: "Building ResearchPlex: From Idea to Deployment"
featured: true
draft: false
tags:
  - projects
  - react
  - nodejs
  - web-dev
description: "How a weekend React + Perplexity API idea turned into a crash course in CORS, Express proxies, environment variables, and deploying to Vercel."
---

Three weeks ago, I genuinely thought integrating an API meant copying an endpoint URL, pasting it into `fetch()`, and calling it a day. Today, [ResearchPlex](https://researchplex.vercel.app/) is live in production, and I have the battle scars from every CORS error and deployment quirk imaginable to show for it.

ResearchPlex started as a weekend project: I wanted a cleaner research interface powered by the Perplexity API. Instead, it turned into an intensive crash course in full-stack development, production debugging, and why environment variables exist in the first place.

If you're a student developer who has built plenty of React apps on `localhost` but never pushed one live, consider this the roadmap I wish I had—mistake by mistake.

## Why Build Another Research Tool?

Whenever I researched college projects, I'd end up with twenty open tabs, jumping back and forth and constantly losing my train of thought. I wanted something minimal: a search bar, clean answers, and a dark mode that didn't blind me at 2 AM. No clutter, no distractions.

Choosing the stack was straightforward. I went with **React** because I was already comfortable with it, and **Vite** because its dev server is ridiculously fast. On the API side, **Perplexity** gave me exactly what I wanted: thorough search answers backed by proper citations.

I initialized the project, wired up basic routing, and had a minimal UI running in about an hour. Naturally, that's right when the real problems began.

## The Development Journey

### Phase 1: A UI That Looked Great Locally

I kept the layout focused: a full-screen view, a centered search bar, and results that fade in cleanly. I also added a theme toggle—partly for late-night use, partly because no developer project feels complete without one.

The component tree stayed simple:

- `SearchBar`
- `ResultsDisplay`
- `ThemeToggle`

Everything looked sharp on `localhost`. Time to plug in the API, right?

### Phase 2: Running Straight Into a CORS Wall

My first attempt was embarrassingly naive: I called the Perplexity API straight from the frontend with `fetch()`. I hit enter, opened DevTools, and was greeted by angry red text:

> `Access to fetch has been blocked by CORS policy.`

I lost two days fighting this. I tweaked headers, changed request options, and briefly questioned my life choices. Nothing worked.

Here's the lesson that finally stuck: **you can't call most third-party APIs directly from browser code.** Browsers block those requests for security reasons (and even if they didn't, you'd be exposing your secret API key to anyone opening DevTools). The real fix wasn't a magic header—it was building a backend proxy.

### Phase 3: Adding a Node.js & Express Proxy

I spun up a lightweight Express server to sit between the React frontend and Perplexity's API. Now the frontend talks to my server, and my server talks to Perplexity. CORS problem solved.

Of course, fixing one mistake immediately revealed the next: I had hardcoded my API key right inside the server file. One careless `git push` and anyone on the internet could have grabbed it. Moving secrets into environment variables (`.env` locally, dashboard secrets in production) stopped being "best practice" and became a hard requirement.

## Deployment Battles on Vercel

Once everything worked locally, I connected the GitHub repo to Vercel.

The first deployment failed. So did the second. The error messages felt cryptic, and the docs seemed to assume I already knew things I hadn't learned yet. Things finally clicked when I added a `vercel.json` configuration telling Vercel exactly how to route my frontend and backend endpoints. Suddenly the backend responded, the frontend connected, and ResearchPlex went live.

## Debugging War Stories

### The Phantom Deployment Error

One commit broke everything out of nowhere. Vercel kept failing with a wonderfully vague message: `"Build completed but deployment failed."` No obvious stack trace, no clear culprit.

After two hours of tearing my config apart, I found it: a single environment variable misspelled in the Vercel dashboard—an underscore where a hyphen belonged. Two hours of debugging for one character.

### Handling Messy API Responses

Perplexity's API didn't always return responses in the exact shape my happy-path code expected. The first time a query came back empty or structured slightly differently, the whole app crashed.

I went back and added proper error handling, null checks, and fallback UI states. The codebase grew by about 100 lines, and the app immediately became a thousand times more stable.

## What Actually Helped (and What I'd Change)

### What Worked

- **Starting with the UI:** Having something visual on screen kept me motivated when the backend and deployment bugs got frustrating.
- **Building in phases:** Splitting the work into frontend first, API proxy second, and deployment last kept me from getting overwhelmed.
- **Living in VS Code's integrated terminal:** Having Git Bash for commits and `npm` for packages in one window saved endless context switching.

### What I'd Do Differently

- **Learn CORS before writing API calls:** Would have saved me two full days of confusion.
- **Set up `.env` on day one:** Not after nearly pushing an API key to GitHub in a panic.
- **Write notes and comments as I go:** Revisiting uncommented code days later just to fix a bug is unnecessarily painful.

### Tools That Saved Me

- **Vercel deployment logs:** Once you slow down and actually read them, almost every failure points straight to the cause.
- **Postman:** Testing endpoints in isolation before wiring them into React made it obvious whether a bug lived in the frontend or the API.
- **Git commit history:** Rolling back when a commit broke production saved me more than once.

## What's Next for ResearchPlex

The core search workflow is solid, and now I'm looking at polishing the experience—exploring `shadcn/ui` components, adding search history and bookmarking, and potentially supporting multiple tabs so you can compare sources side by side.

Building [ResearchPlex](https://researchplex.vercel.app/) ([source on GitHub](https://github.com/VamshikPatel/researchplex-ai-assistant)) taught me more than any tutorial ever could. `localhost` and production are two completely different worlds—and the fastest way to learn the difference is to ship something real and fix everything that breaks along the way.
