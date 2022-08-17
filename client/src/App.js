import './App.css';
import React, { useState, useEffect } from 'react'
import { getBookings } from './HotelService';
import { updateBookings } from './HotelService';
import BookingsForm from './FormComponent';
import BookingList from './BookingList';

function App() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    getBookings().then((allBookings)=> {
      setBookings(allBookings);
    })
    updateBookings().then((allBookings)=> {
      setBookings(allBookings)
    })
  }, []);

  const checkIn = (index) => {
    const copyBookings = [...bookings];
    copyBookings[index].checked_in = true;
    setBookings(copyBookings);
  };

  const checkOut = (index) => {
    const copyBookings = [...bookings];
    copyBookings[index].checked_in = false;
    setBookings(copyBookings);
  };

  const addBooking = (booking) =>{
    const temp = bookings.map(book => book);
    temp.push(booking);
    setBookings(temp);
  }

  const removeBooking = (id) => {
    const temp = bookings.map(book => book);
    const indexToDel = temp.map(book => book._id).indexOf(id);
    console.log(indexToDel)

    temp.splice(indexToDel, 1);
    setBookings(temp);
  }
    return (
    <>
      <BookingsForm addBooking={addBooking}/>
      <BookingList bookings={bookings} removeBooking={removeBooking} checkOut={checkOut} checkIn={checkIn}/>
    </>
  );
};

export default App;