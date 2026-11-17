# Planned MongoDB models — 14

These are comment-only model files, not working schemas.

| Model | Fields / purpose |
| --- | --- |
| User | name, email, passwordHash, role, phone, hotelId, preferences, isActive. One model for Guest and Staff. |
| Hotel | name, location, address, contact, images, facilities. |
| RoomType | hotelId, name, capacity, baseRate, amenities, images. |
| Room | hotelId, roomTypeId, roomNumber, floor, occupancyStatus, housekeepingStatus, maintenanceStatus. |
| Booking | guestId optional, guestSnapshot, hotelId, roomId, roomTypeId, checkIn, checkOut, guests, rateSnapshot, status. |
| RoomNight | roomId, date, bookingId; unique compound roomId/date index; concurrent reservation locking. |
| Invoice | bookingId, chargeItems, taxes, discounts, totals, payments array. Calculate totals on backend. |
| Service | hotelId, name, category, price, isActive. |
| ServiceRequest | bookingId, serviceId, quantity, scheduledAt, priceSnapshot, status. |
| HousekeepingTask | roomId, assignedTo, scheduledAt, status, completedAt. |
| MaintenanceRequest | roomId, bookingId, reportedBy, issue, priority, assignedTo, status. |
| Feedback | bookingId, guestId, rating, comment; completed stay eligibility. |
| Notification | recipientId, type, message, reference, isRead. |
| Setting | Hotel taxes, policies, check-in/out times, invoice configuration. |

No separate Guest/Staff collection: User.role handles both. Walk-in booking can store guestSnapshot without compulsory account creation. Payments initially live in Invoice.payments; reports are calculated from existing data and do not need a Reports model.

Booking transactions require MongoDB replica set/Atlas support. RoomNight needs a unique {roomId: 1, date: 1} index. Date overlap is checkIn < requestedCheckOut AND checkOut > requestedCheckIn. Check-out date is excluded from billable nights. Occupancy, cleaning and maintenance are separate room states.

Passwords must be securely hashed when authentication is built. Every future data query must enforce role, hotel scope and ownership/assignment. Do not trust totals, role, hotel assignment or ownership values sent by the frontend.
