const hallBookingRouter =  require("express").Router(); //Createion of Router for hall booking
const rooms = require("../rooms.json"); //Get rooms customers data from the JSON file
const customers = require("../customers.json");
const roomDetals = require("../roomDetails.json");

hallBookingRouter.get("/list/rooms", (req, res) => { //Handle to route list all booked romms with customer data
    console.log(rooms);
    res.status(200).json({
        message: "Data fetched successfully!",
        data: rooms
    })
})

hallBookingRouter.get("/list/customers", (req, res) => { //Handle routers to list all the customers
    console.log(customers);
    res.status(200).json({
        message: "Data fetched successfully!",
        data: customers
    })
})

hallBookingRouter.get("/list/booked-details", (req, res) => { //Handle router to fetch no of rooms booked by each customer
    let roomsBooked ={};
    for(let item of rooms){
        if(roomsBooked[item.customer_name]){
            roomsBooked[item.customer_name] = roomsBooked[item.customer_name] + 1;
        }else{
            roomsBooked[item.customer_name] = 1;
        }
    }
    console.log(roomsBooked);
    res.status(200).json({
        message: "Data fetched successfully!",
        "no-of-rooms-booked-by-each-customer": roomsBooked
    })
})

hallBookingRouter.post("/book-one", (req, res) => { //Handle router to book a room
    const availableRoom = rooms.find(data => data.booked_status === false ? data : null)
    const {customer_name, date, start_time, end_time} = req.body;
    let newRoom;
    if(availableRoom){
        availableRoom.customer_name = customer_name
        availableRoom.date = date,
        availableRoom.start_time = start_time,
        availableRoom.end_time = end_time,
        availableRoom.booked_status = true
    }else{
        newRoom = {
            room_id: rooms.length,
            customer_name,
            date,
            start_time,
            end_time,
            booked_status: true
        }
        rooms.push(newRoom);
    }
    res.status(200).json({
        message: "Room is booked successfully!",
        room_details: availableRoom ? availableRoom : newRoom
    })
})

hallBookingRouter.post("/create-one", (req, res) => {
    const {seats_available, amenities,price_per_hour} = req.body;
    const newRoom = {
        room_id: roomDetals.length,
        seats_available,
        amenities,
        price_per_hour
    }

    roomDetals.push(newRoom);

    res.status(200).json({
        message: "Room is created successfully!",
        created_room_details: newRoom
    })
})



module.exports = hallBookingRouter;