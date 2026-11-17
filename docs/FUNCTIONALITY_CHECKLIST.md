# Functionality plan — implementation pending

- User management: Guest registration, common login/logout, secure credentials, roles, profiles/password updates, Admin staff create/edit/deactivate.
- Multi-hotel: Hotel/location data and assigned-hotel scope.
- Room types/rooms: Rates, capacity, amenities, inventory and availability. Separate occupancy/housekeeping/maintenance states.
- Booking: Online and walk-in reservations; guest snapshot; server rate snapshot; transaction/unique RoomNight locks; cancellation releases eligible nights.
- Check-in/out: Valid allocation/reassignment, clean operational vacant room check, key/card reference, bill settlement and room release.
- Billing: Nights × booked rate + billable services + tax − discount; payment recording and balance; no duplicate charges; invoice preview/print/email.
- Housekeeping: Schedule/assign/complete tasks, own assigned-task access, room clean/readiness update.
- Maintenance: Guest/staff reports, priority, assignments, tracking and resolution.
- Services: Food, laundry, transport, wake-up calls and other requests; booked price snapshots and invoice linking.
- Feedback: Own eligible completed booking rating/comment.
- Notifications/realtime: Relevant recipient alerts and authorized room/task status updates.
- Reports: Hotel/date filters, occupancy/revenue/feedback charts and CSV export.
- Analytics: Historical moving-average demand forecast; insufficient-data state; rate/service recommendations for Manager review.
- Settings: Taxes, check-in/out times, cancellation/operating policies and invoice configuration.
- Quality: Responsive UI, keyboard/labels/contrast, privacy/consent, validation, safe logging, tests, backups/restore, deployment monitoring.
- Submission: API/database/user/developer documentation and a working demo video.

Suggested order: setup → authentication/authorization → hotels/room types/rooms/public browsing → booking/availability → check-in/out/billing → housekeeping/maintenance/services → notifications/feedback/reports/settings → forecasting/email/testing/documentation.

No payment gateway, smart-door-lock hardware or separate maintenance role is required by the supplied guide for the first version. The target of 1–2 second responses, concurrent users and uptime must be measured after implementation, not assumed from this skeleton.
