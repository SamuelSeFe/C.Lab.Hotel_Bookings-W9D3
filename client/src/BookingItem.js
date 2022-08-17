import React from 'react'

const BookingItem = ({id, name, email, checkedin, removeBooking, checkOut, checkIn}) => {
    return (
    <li key={name}>
        {name} &nbsp;
        {email}
        { checkedin ? <button onClick={() => checkOut(id)}>Check Out</button> : <button onClick={() => checkIn(id)}>Check In</button>}
    </li>
  )
}

export default BookingItem

// const  = () => {
//     deleteaBooking(booking._id).then (() => {
//         removeBooking(booking._id);
//     })
// }