# Pre-Deploy Checklist

Use this before merging or pushing the website revamp to the live GitHub Pages branch.

## Content Review

- [ ] Read the English homepage end to end.
- [ ] Read the German homepage end to end.
- [ ] Read the Spanish homepage end to end.
- [ ] Read the English case studies page.
- [ ] Read the German case studies page.
- [ ] Read the Spanish case studies page.
- [ ] Decide whether the current English-only blog articles are strong enough to publish.
- [ ] Confirm the AI Use-Case Scorecard lead magnet exists and Kit delivers the correct asset.
- [ ] Confirm the scorecard delivery/copy works for English, German, and Spanish visitors.

## Technical QA

- [ ] Check desktop homepage at `/`, `/en/`, `/de/`, and `/es/`.
- [ ] Check mobile homepage at `/`, `/en/`, `/de/`, and `/es/`.
- [ ] Check language switcher from homepage, localized pages, case studies, and blog.
- [ ] Check `/blog/` and all blog article URLs.
- [ ] Check old blog URLs redirect to the new `/blog/` URLs.
- [ ] Check `/case-studies.html`, `/de/case-studies.html`, and `/es/case-studies.html`.
- [ ] Check Calendly CTAs.
- [ ] Check protected email links after JavaScript loads.
- [ ] Check Kit scorecard form submission.
- [ ] Check keynote lightbox opens and closes.
- [ ] Check testimonial carousel loops.
- [ ] Check Cloudflare Web Analytics beacon appears in production.

## SEO / GEO

- [ ] Confirm `robots.txt` is reachable at `/robots.txt`.
- [ ] Confirm `sitemap.xml` is reachable at `/sitemap.xml`.
- [ ] Confirm `llms.txt` is reachable at `/llms.txt`.
- [ ] Submit or inspect the sitemap in Google Search Console.
- [ ] Submit or inspect the site in Bing Webmaster Tools.
- [ ] Confirm canonical URLs match final deployed URLs.
- [ ] Confirm hreflang tags for EN / DE / ES routes.
- [ ] Confirm important content is rendered as text, not only images.

## Deployment

- [ ] Commit final changes.
- [ ] Push `website-revamp`.
- [ ] Merge into the GitHub Pages deployment branch.
- [ ] Visit `https://danielpanea.com` after deploy.
- [ ] Check Cloudflare analytics after the first real visit.
