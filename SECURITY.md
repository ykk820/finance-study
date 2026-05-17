# Security Notes

FinanceStudy is currently a public learning site deployed on Cloudflare Workers.

## Current posture

- No password is collected or stored.
- The learner profile, progress, highlights, bookmarks, and wrong-answer data are stored in the user's browser via `localStorage`.
- Security headers are configured in `next.config.ts` and `public/_headers`.
- Cloudflare Workers provides HTTPS, edge isolation, and baseline DDoS protection.

## Important limits

- This is not a cloud account system. Data does not sync across devices.
- Static lectures and questions are bundled into the frontend and should not be treated as protected paid content.
- A production membership or paid-content version should move auth and protected content to a backend.

## Cloudflare dashboard checklist

After attaching a custom domain:

1. Enable WAF managed rules.
2. Enable Bot Fight Mode or equivalent bot protection.
3. Add rate limiting for future API/auth endpoints.
4. Configure alerts for error spikes and unusual traffic.
5. Keep automatic HTTPS enabled.

## Dependency audit note

As of the current build, `npm audit --omit=dev` reports a moderate advisory through Next.js' internal PostCSS dependency. `npm view next version` shows `16.2.6` as the latest available version, and `npm audit fix --force` would downgrade Next.js to an old breaking version. Do not apply the forced downgrade; upgrade Next.js when a patched release is available.
