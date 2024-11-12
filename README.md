# hall-booking-api
Implemented a hall booking API where you can extend available rooms, you can book a room, you can retrive a data like already booked rooms with customer details and customers with number of times rooms booked before and also you can get the customer data with the room booked

When you run on your local machine: <domain-name> will be http://localhost:8080
Deployed domain name of render server: https://hall-booking-api-mwuc.onrender.com

# To-create-a-room
 POST API - <domain-name>/hall-booking/create-one
 Required data as JSON: {seats_available, amenities, price_per_hour}

 # To-book-a-room
POST API - <domain-name>/hall-booking/book-one
Required data as JSON: {customer_name, date, start_time, end_time}

# To-get-room-data
GET API - <domain-name>/hall-booking/list/rooms

# To-get-customers-data
GET API - <domain-name>/hall-booking/list/customers

# To-get-how-many-times-each-customer-booked-room
GET API - <domain-name>/hall-booking/list/booked-details
