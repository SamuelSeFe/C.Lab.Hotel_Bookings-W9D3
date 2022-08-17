import BookingItem from "./BookingItem"


const BookingList = ({bookings, removeBooking, checkIn, checkOut}) => {

    const bookingList = bookings.map((booking, index) => {
        return <BookingItem 
        key={booking._id}
        id={index}
        name={booking.name}
        email={booking.email}
        checkedin={booking.checked_in}
        removeBooking={removeBooking}
        checkIn={checkIn}
        checkOut={checkOut}
        />
    })
    
    return(
        <>
        <ul>
            {bookingList}
        </ul>
        </>
    )
}

export default BookingList;