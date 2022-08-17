use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "John Smith",
        email: "johnsmith@email.com",
        checked_in: false
    },
    {
        name: "John Cena",
        email: "youcantseeme@email.com",
        checked_in: true
    },
    {
        name: "Dave Grohl",
        email: "musiciscool@email.com",
        checked_in: false
    }
])