# Security

This repository holds the source for a **static marketing website**. It contains
no server code, no databases, and no credentials.

## What is intentionally public

- Site copy, layout, styles, and the DJ's own promotional photos / logo.
- The public booking contact: `bookings@thisisovertime.com` and a booking phone number.
  These are business contact details meant to be seen.

## What must never be committed

- API keys, tokens, passwords, private keys, `.env` files (see `.gitignore`).
- Personal email addresses or phone numbers that are not the public booking contact.
- The `assets-inbox/` folder (raw client uploads).

Form submissions are handled by **Netlify Forms** — there is no backend to attack, and
no submission data is stored in this repo.

## Reporting

Found something sensitive committed, or a vulnerability? Email
`bookings@thisisovertime.com` (subject: SECURITY) rather than opening a public issue.
