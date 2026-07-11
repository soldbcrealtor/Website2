# Gary Ahuja PREC. — IDX/DDF-Ready Website

## Open the website
Open `index.html` in a browser. The MLS search page is `idx-search.html`.

## What “IDX compatible” means here
The site now includes a provider-neutral MLS search container that supports:

- an approved hosted search page through an iframe;
- an approved provider JavaScript widget;
- an approved public embed snippet.

The design is responsive on desktop, tablet, and mobile.

## Activate live MLS listings
1. Obtain access through REALTOR.ca DDF® or an approved IDX/DDF technology provider.
2. Ask the provider for an iframe URL, widget script, or embed snippet.
3. Open `idx-config.js`.
4. Change `mode` from `pending` to `iframe`, `script`, or `html`.
5. Add the public provider value in the matching field.
6. Upload the website again.

## Important security rule
Never paste DDF API usernames, passwords, secret keys, or bearer tokens into `idx-config.js`. Anything in browser files is public. A direct CREA DDF Web API integration needs a secure server-side backend and provider/member authorization.

## Cheapest implementation
Keep the main site on free static hosting and use an approved provider's hosted iframe/widget. A fully custom DDF API search requires paid backend hosting, ongoing data-sync work, compliance updates, and feed authorization.

## Contact forms
The current forms use `mailto:`. For dependable form delivery, connect Formspree, Basin, Netlify Forms, or your CRM form endpoint.
