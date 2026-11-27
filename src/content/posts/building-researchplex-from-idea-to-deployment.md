---
author: Vamshik Patel
pubDatetime: 2025-11-08T00:00:00+05:30
title: "Building ResearchPlex: From Idea to Deployment"
featured: true
draft: false
tags:
  - projects
  - web-dev
description: "My first project blog: how I built a simple research tool with React and Perplexity's API, and what I learned putting it online."
---

This is my first post here, and I wanted to share the story behind **[ResearchPlex](https://researchplex.vercel.app/)**—a small weekend project I built and put online for the first time.

Before this, I thought connecting an app to an API was as simple as copying a link and pasting it into my code. Actually putting it live taught me a lot more than I expected, mostly through small mistakes along the way.

## Why I Built It

Whenever I had to research something for college, I always ended up with way too many open tabs and kept losing track of what I was reading.

I wanted one quiet page instead: a search bar, clean answers with sources, and dark mode so it wouldn't hurt my eyes late at night. Nothing fancy, just easy to use.

## How I Started

To keep things simple, I picked tools I could move fast with:

- **React and Vite** for the website screen, because I already knew React and Vite loads changes almost instantly.
- **Perplexity's API** for the answers, because it searches the web and includes real source links.

I had a basic page working on my laptop in about an hour—a search box, an answer area, and a light/dark switch. That was the easy part.

## Three Problems I Ran Into

### 1. The browser blocked my request

At first, I tried calling Perplexity directly from my React code. As soon as I tested it, the browser blocked it with a **CORS** error.

In simple terms, browsers stop websites from directly calling outside services like this for safety. To fix it, I added a small **Node.js and Express** server in the middle. Now the website asks my server, and my server talks to Perplexity.

### 2. Keeping my API key private

Right after getting that middle server working, I realized my secret API key was written straight into the code. If I pushed that to GitHub, anyone could see and use it.

So I moved the key into **environment variables**—basically a private settings file that stays hidden from public code.

### 3. Getting it live on Vercel

Getting the app to run on my laptop was one thing; putting it online with **Vercel** was another.

My first two tries failed because Vercel didn't know how to handle both the webpage and the small server together. Adding a `vercel.json` settings file fixed the routing and got the site online.

Later, one small update broke the live site with no clear reason. After two hours of checking, I found a one-letter typo in a setting name on Vercel—an underscore instead of a hyphen. I also learned to add basic error checks so the page shows a friendly message instead of crashing if a search returns nothing.

## What I Learned

Looking back, a few simple habits made the biggest difference:

- **Build the screen first:** Seeing something real on the page kept me going when the setup got frustrating.
- **Hide secret keys from day one:** Never leave passwords or API keys inside normal code files.
- **Read the error logs slowly:** Deployment logs look scary at first, but the answer is usually right there.
- **Test one piece at a time:** Checking my server separately before connecting it to the page saved a lot of guesswork.

## What's Next

The main search works well now, and I plan to keep improving it slowly—cleaning up the design, adding a search history, and letting users save useful results.

You can try [ResearchPlex live](https://researchplex.vercel.app/) or check out the code on [GitHub](https://github.com/VamshikPatel/researchplex-ai-assistant). Thanks for reading my first post!
