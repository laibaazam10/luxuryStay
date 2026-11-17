# Planned pages and roles

Based on the attached LuxuryStay project guide: **5 roles, 32 main screens, 14 MongoDB collections**. The counts are the guide's proposed implementation design. This ZIP contains structure and comment-only page placeholders, not finished pages.

## Page inventory (32)

Public: 8; Authentication: 2; Guest: 8; shared staff panel: 14. Staff pages are reused with permissions, not copied into five separate applications. Feedback is a form on completed Booking Details; invoice preview can be a modal. Create/edit forms can be drawers/modals rather than extra pages.

| Area | Page file | Purpose |
| --- | --- | --- |
| public | HomePage.jsx | Introduction, featured rooms, dates/guests search |
| public | HotelsPage.jsx | Hotel/location listing |
| public | HotelDetailsPage.jsx | Facilities, photos, contact and location |
| public | RoomsPage.jsx | Date availability, capacity/type/price filters |
| public | RoomDetailsPage.jsx | Photos, amenities, rate and Book Now |
| public | AboutPage.jsx | Brand introduction |
| public | ContactPage.jsx | Contact/enquiry details |
| public | PoliciesFaqPage.jsx | Cancellation, check-in/out, privacy and FAQs |
| auth | LoginPage.jsx | Common sign-in for all five roles |
| auth | RegisterPage.jsx | Guest self-registration only; no role dropdown |
| guest | GuestDashboardPage.jsx | Own upcoming/current booking summary |
| guest | NewBookingPage.jsx | Dates, guests, room, price summary and confirm |
| guest | MyBookingsPage.jsx | Own upcoming/completed/cancelled bookings |
| guest | BookingDetailsPage.jsx | Own booking details, cancellation and completed-stay feedback form |
| guest | ServiceRequestsPage.jsx | Own food/laundry/transport/wake-up requests |
| guest | MaintenanceRequestsPage.jsx | Own issues and resolution status |
| guest | MyInvoicesPage.jsx | Own invoice charges/balance/print/download |
| guest | MyProfilePage.jsx | Own personal details/preferences/password |
| staff | StaffDashboardPage.jsx | Shared dashboard filtered by role |
| staff | HotelsManagementPage.jsx | Admin hotels; Manager assigned hotel |
| staff | StaffUsersPage.jsx | Admin staff/user create/edit/deactivate |
| staff | RoomTypesPage.jsx | Admin/Manager room types, capacity and rates |
| staff | RoomsManagementPage.jsx | Room inventory, availability, allocation and readiness |
| staff | BookingsManagementPage.jsx | Staff bookings/check-in/out/key reference |
| staff | GuestsManagementPage.jsx | Walk-in guest snapshots and guest records |
| staff | BillingInvoicesPage.jsx | Stay/service charges, tax, discounts, payments and invoice |
| staff | HousekeepingPage.jsx | Schedule/assign cleaning, own tasks and completion |
| staff | MaintenancePage.jsx | Report/assign/resolve issues |
| staff | ServicesManagementPage.jsx | Services and requests with booked price snapshots |
| staff | ReportsAnalyticsPage.jsx | Occupancy/revenue/feedback/filter/export/forecast insights |
| staff | SettingsPage.jsx | Admin policies/taxes/invoice/system settings |
| staff | NotificationsPage.jsx | Relevant-recipient alerts/read status |

## Staff page access plan

| Shared staff page | Admin | Manager | Receptionist | Housekeeping |
| --- | --- | --- | --- | --- |
| Dashboard | All hotels | Assigned hotel | Front desk | Own tasks |
| Hotels | Manage | Own hotel | No | No |
| Staff and Users | Manage | No | No | No |
| Room Types | Manage | Own hotel | No | No |
| Rooms | Manage | Manage | Availability/allocation | No |
| Bookings | Manage | Manage | Book/check-in/out | No |
| Guests | Manage | View/edit | Create/view/edit | No |
| Billing and Invoices | All | Own hotel | Bill/payment | No |
| Housekeeping | Manage | Assign | Read/request | Own tasks |
| Maintenance | Manage | Assign/resolve | Report/track | Report/assigned work |
| Services and Requests | Manage | Manage | Requests/charges | No |
| Reports and Analytics | All hotels | Own hotel | No | No |
| Settings | Manage | No | No | No |
| Notifications | Relevant | Relevant | Relevant | Relevant |

Admin: 14 staff screens; Manager: 12; Receptionist: 9; Housekeeping: 4. Do not add these counts together; screens are shared. Guest has its own 8 portal screens. Public visitors have no database role. Guest registers independently; Admin creates staff accounts. Manager and staff must be limited to their assigned hotel; Guest to own records; Housekeeping additionally to assigned tasks.

No authorization logic in this ZIP has been implemented. This matrix is the agreed plan for later code.
