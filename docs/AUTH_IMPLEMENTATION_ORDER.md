# Later: authentication and authorization, one file at a time

No auth implementation is included now. When requested, build and test in this order:

1. backend/src/config/database.js and backend/src/models/User.js — database and user structure.
2. backend/src/config/roles.js and permissions.js — exact five roles/action mapping.
3. backend/src/utils/password.js and tokens.js — choose secure password/session strategy.
4. backend/src/validators/authValidator.js — strict register/login inputs; registration is Guest-only.
5. backend/src/services/authService.js and controllers/authController.js — authentication logic.
6. backend/src/middleware/authenticate.js, authorize.js, hotelScope.js, ownership.js — access checks.
7. backend/src/routes/authRoutes.js, validation/errors/rate-limiting/CSRF and app.js wiring.
8. frontend/src/api/http.js and features/auth/authApi.js — API connection.
9. frontend/src/context/AuthContext.jsx and hooks/useAuth.js — current user/session state.
10. frontend/src/pages/auth/RegisterPage.jsx — Guest registration form.
11. frontend/src/pages/auth/LoginPage.jsx — common role-aware login.
12. frontend/src/components/common/ProtectedRoute.jsx and PermissionGate.jsx — route/button access UI.
13. frontend/src/layouts/GuestLayout.jsx and StaffLayout.jsx, app/router.jsx — portal navigation.
14. GuestDashboardPage.jsx, StaffDashboardPage.jsx and MyProfilePage.jsx — connected account views.
15. users backend files and StaffUsersPage.jsx — Admin staff creation/role/scope/deactivation.
16. Auth API/component tests — role escalation, anonymous access, hotel boundaries, deactivation and own-data checks.

Page-by-page frontend work still needs the matching backend model/API/middleware files. Hiding buttons alone is not authorization.
