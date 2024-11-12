const express = require("express");
require("dotenv").config();
const hallBookingRouter = require("./routers/hallBookingRouter");

const app = express();

app.use(express.json());

app.use("/hall-booking", hallBookingRouter);
app.get("/", (req, res) => {
    res.status(200).send(`
        <h3># hall-booking-api</h3>
<p>Implemented a hall booking API where you can extend available rooms, you can book a room, you can retrive a data like already booked rooms with customer details and customers with number of times rooms booked before and also you can get the customer data with the room booked<\p>

<p>When you run on your local machine: <domain-name> will be http://localhost:8080</p>
<p>Deployed domain name of render server: <\p>

<h3># To-create-a-room<\h3>
 <p>POST API - <domain-name>/hall-booking/create-one<\p>
 <p>Required data as JSON: {seats_available, amenities, price_per_hour}<\p>

 <h3># To-book-a-room<\h3>
<p>POST API - <domain-name>/hall-booking/book-one<\p>
<p>Required data as JSON: {customer_name, date, start_time, end_time}<\p>

<h3># To-get-room-data<\h3>
<p>GET API - <domain-name>/hall-booking/list/rooms<\p>

<h3># To-get-customers-data<\h3>
<p>GET API - <domain-name>/hall-booking/list/customers<\p>

<h3># To-get-how-many-times-each-customer-booked-room<\h3>
<p>GET API - <domain-name>/hall-booking/list/booked-details<\p>
        `)
})

app.listen(process.env.PORT, () => {
    console.log("Server is connected successfully!");
})