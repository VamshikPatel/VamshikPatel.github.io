---
author: Vamshik Patel
pubDatetime: 2025-11-08T00:00:00+05:30
modDatetime: 2026-11-28T00:03:00+05:30
title: "Building ResearchPlex: From Idea to Deployment"
featured: true
draft: false
tags:
  - projects
  - web-dev
description: "The simple story of how I built and deployed my first AI search project, the mistakes I ran into, and why I'm swapping its API keys next."
---

This is my first blog post, and I wanted to share how I built **[ResearchPlex](https://researchplex.vercel.app/)**—a small weekend project that taught me how real websites actually go from my laptop to the internet.

Before this, I thought using an AI API was as simple as copying a link into my code. Instead, I learned the hard way why things break when you put an app online for the first time.

## Why I Built It

Whenever I worked on college assignments, I ended up with twenty browser tabs open and kept losing track of what I was reading. I wanted one quiet page with a search bar, clean answers with sources, and a dark mode that wouldn't hurt my eyes at 2 AM.

I built the page with **React** (since I already knew it) and **Vite** (because it loads super fast while coding), and used **Perplexity's API** for answers with citations. Within an hour, the page looked great on my laptop. That's when things started breaking.

## The First Big Roadblock

At first, I tried calling Perplexity's API straight from my React frontend. The moment I tested it, the browser blocked the request with a red **CORS error**.

I spent two days confused before realizing why: **browsers block websites from calling certain APIs directly** to protect user security—and besides, putting my secret API key in frontend code means anyone could view it.

The fix was adding a small **Node.js and Express server** in the middle:

1. My React page sends the search question to my own backend server.
2. My backend safely attaches the secret API key (stored in environment variables, not hardcoded in files) and talks to Perplexity.
3. The server sends the clean answer back to the page.

Once that clicked, everything worked locally.

## Putting It Online (and One Silly Typo)

Deploying to **Vercel** failed twice at first because Vercel didn't know how to route requests between my frontend and backend. Adding a small `vercel.json` config file fixed that, and ResearchPlex finally went live.

Right after that, another deploy failed with a vague error and no clue what went wrong. After two hours of checking everything, I spotted it: I had typed an underscore instead of a hyphen in one environment variable name in Vercel's dashboard. Two hours for one character.

I also learned not to trust that an API will always reply cleanly. The first time a search returned nothing, the page crashed—so I added basic checks and friendly fallback messages whenever something goes wrong.

## What I Learned & What's Next

Looking back, a few simple habits would have saved me days:

- Never hardcode secret API keys—put them in environment variables on day one.
- Test your backend endpoints separately (using a tool like Postman) before connecting them to the UI.
- Read deployment logs slowly—they usually tell you what broke once you know where to look.

**Quick update:** Perplexity's student API credits were recently rolled back, so I'm currently replacing the old keys with another provider (like OpenRouter, Gemini, or a free search + AI combo) to keep ResearchPlex running smoothly. Next up, I also want to polish the UI and add search history and bookmarks.

You can check out the project on [GitHub](https://github.com/VamshikPatel/researchplex-ai-assistant) or try it at [researchplex.vercel.app](https://researchplex.vercel.app/). Thanks for reading my first post!
