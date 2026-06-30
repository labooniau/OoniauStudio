# Ooniau Studio Website

This folder is separate from the Flutter app. It can be deployed as a static website for app store support, privacy policy, and product marketing pages.

## Files

- `index.html`: product website.
- `twusstockpro.html`: TWUS StockPro product detail page.
- `about.html`: studio/about page, separated from the homepage hero.
- `privacy.html`: privacy policy URL for store review.
- `support.html`: support URL for store review.
- `site.js`: product carousel data, feature screenshots, and language switching.
- `styles.css`: shared visual design.
- `assets/`: Ooniau Studio logo and app screenshots.

## Add Another App

1. Add the new app screenshots under `assets/screenshots/<product-id>/`.
2. Add another object to `products` in `site.js`; it will appear in the homepage carousel.
3. Add the product page link to the Products -> Apps menu in `index.html` and product pages.
3. Add product-specific privacy notes to `privacy.html` if needed.
4. Replace the support contact placeholder in `support.html` before publishing.
