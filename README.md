# Deividas (David) Mataciunas

Personal website: https://deividasmat.github.io/

The current website is plain HTML, CSS, and JavaScript in `docs/`. GitHub Pages publishes `/docs` from the `codex/personal-website` branch. No build step or package installation is required.

## Content

- `docs/index.html`: About, research, videos, and press.
- `docs/blog/index.html`: Blog, ready for new posts.
- `docs/links/index.html`: Full public link collection with search.
- `docs/links/collection.json`: Downloadable collection of 58 URLs.
- `docs/styles.css`: Styling.
- `docs/navigation.js`: Navigation and click-to-play video embeds.
- `docs/links/collection.js`: Link search.

Edit these files and push to the publishing branch to update the live site. Photos and videos load from their original external hosts.

The earlier Jekyll website is preserved on the `master` branch.


## Contact form

`docs/contact/index.html` submits to FormSubmit and delivers messages to the owner’s Gmail inbox once the recipient activation link is confirmed. Default CAPTCHA protection and a hidden honeypot are enabled. The confirmation page is `docs/contact/thank-you/index.html`. An activation email is required for the recipient before the service delivers normal submissions. Form service documentation: https://formsubmit.co/documentation .
