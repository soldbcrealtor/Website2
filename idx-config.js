/**
 * IDX / DDF provider configuration
 *
 * MODE OPTIONS:
 * 1. "iframe" — simplest for approved hosted search pages/widgets.
 * 2. "script" — for a provider that gives you an external JavaScript URL.
 * 3. "html"   — for a provider that gives you a safe embed snippet.
 * 4. "pending" — shows the professional fallback screen.
 *
 * Do not place CREA DDF API usernames, passwords, bearer tokens, or secret keys here.
 * Browser code is public. A direct DDF API integration requires a secure backend.
 */
window.IDX_CONFIG = {
  mode: "pending",

  // Example: "https://your-approved-provider.com/search/your-account"
  iframeUrl: "",
  iframeTitle: "Search Nanaimo and Vancouver Island MLS listings",

  // Example: "https://provider.example.com/widget.js"
  scriptUrl: "",
  scriptAttributes: {
    // "data-account": "YOUR_PUBLIC_ACCOUNT_ID"
  },

  // Paste only an approved provider's public embed markup.
  htmlEmbed: ""
};
