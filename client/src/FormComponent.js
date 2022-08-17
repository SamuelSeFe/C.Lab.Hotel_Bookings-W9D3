import { useState } from "react";
import { postBookings } from "./HotelService";

const BookingsForm = ({ addBooking }) => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked_in: false,
    });

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBookings(formData).then((data) => {
            addBooking(data);
        })
        setFormData({
            name: "",
            email: "",
            checked_in: false,
        });
    }

    return (
        <form onSubmit={onSubmit} id="bookings-form">
            <h2>New Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input
                onChange={onChange}
                type='text'
                id='name'
                name='name'
                value={formData.name}
                />
            </div>
            <div className="formWrap">
                <label htmlFor="email">e-mail:</label>
                <input onChange={onChange}
                type="text"
                id="email"
                name="email"
                value={formData.email}/>
            </div>
            <input type='submit' value='Book' id='book'/>
        </form>
        
    );
}

export default BookingsForm;