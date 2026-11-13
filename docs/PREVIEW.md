# CIA redesign preview

Maintainer: LX Obsidian Labs — https://lxobsidianportal.co.za

Cloudflare accepted the Worker deployment on 13 November 2026 and enabled its subdomain. Preview: https://crane-international-preview.feedpatelmusic.workers.dev/. Independent HTTP and visual verification remain outstanding.

## Architecture
`worker.mjs` serves dependency-free responsive HTML, shared CSS, server-side catalogue search, programme and campus detail routes, admissions guidance, student links, printable prospectus and a 404 page. It uses no application-data collection and sets noindex and security headers.

## Sources
Institutional catalogue: https://www.ciacademy.co.za/; campus directory: https://www.ciacademy.co.za/contact/; official application: https://www.ciacademy.co.za/apply/; accreditation documents: https://www.ciacademy.co.za/accreditations/.

## Before official launch
Confirm programme availability, registration and accreditation, campus contacts, fees, intake dates, logo and photo rights. The temporary mark and palette need approval. Test all routes, external services, mobile accessibility and search. Verify the graduate photo. Add approved prospectus and handbooks, automated tests, CI and secure admissions integration if authorized. No custom domain change, student authentication, payments or automatic deployment pipeline has been implemented.

The existing CIA website remains unchanged. Attribution: LX Obsidian Labs.
