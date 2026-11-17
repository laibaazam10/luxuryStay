# LuxuryStay — full frontend/backend folder structure

**Ye ZIP sirf project skeleton hai. Authentication, authorization, bookings ya doosri functionalities ka working code abhi nahi dala gaya.** Har planned file mein uska purpose comment likha hai. Basic setup screen aur health endpoint sirf project start/build check ke liye hain.

## Main folders

- **frontend/** — React/Vite; pages, layouts, reusable components, auth context/hooks, feature APIs, styles, assets and test folders.
- **backend/** — Express/MongoDB; 14 model placeholders, controllers, routes, services, validators, middleware, seeds, jobs, realtime, email templates, utilities and test folders.
- **docs/** — 32 pages/5 roles mapping, 14 models, functionality checklist and later auth implementation order.

Folder names are exactly `frontend` and `backend`, not client/server. Public 8 + auth 2 + Guest 8 + shared staff 14 = **32 planned screens**. Roles: **Admin, Manager, Receptionist, Housekeeping, Guest**. Staff screens are shared; five separate apps are not needed.

## Start the basic setup (optional now)

Install Node.js 22.12+ or Node 24. Open this extracted root folder in VS Code, where this README and package.json live.

```powershell
npm ci
npm run dev
```

Frontend: http://localhost:5173 . Setup API: http://localhost:5000/api/health . `npm run build` builds the setup frontend.

Backend database connection is intentionally not implemented yet. There is no seed command, working login, registered user, password or enabled business API yet. Environment examples are supplied for future modules; when needed copy backend/.env.example to backend/.env. Never commit real secrets.

## How to start your work

1. Read docs/PAGES_AND_ROLES.md and docs/DATABASE_MODELS.md.
2. Read docs/FUNCTIONALITY_CHECKLIST.md for the complete requirements plan.
3. For authentication, follow docs/AUTH_IMPLEMENTATION_ORDER.md; request each file's code one at a time.
4. Implement a module's models/services/controllers/routes, mount its routes in backend/src/app.js, and connect the corresponding frontend page/API.
5. Planned page/model/middleware files are comment-only placeholders; do not import them until their implementations exist.

This replaces the earlier working-auth package as a separate skeleton deliverable; nothing from that package's authentication implementation is copied here. Based on the supplied LuxuryStay_MERN_Project_Guide_Fixed(2).docx.
