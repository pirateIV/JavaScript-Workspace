class FlightBooking {
  constructor() {
    this.seats = new Array(100).fill(null);
    this.firstClassSeats = Array.from({ length: 30 }, (_, i) => i + 1);
    this.busClassSeats = Array.from({ length: 30 }, (_, i) => i + 31);
    this.econClassSeats = Array.from({ length: 40 }, (_, i) => i + 61);

    // this.seats = [...this.firstClassSeats, ...this.busClassSeats, ...this.econClassSeats]
  }

  bookSeat(classType) {
    let availableSeats;
    if (classType === "FirstClass") {
      availableSeats = this.firstClassSeats;
    } else if (classType === "BusinessClass") {
      availableSeats = this.busClassSeats;
    } else {
      availableSeats = this.econClassSeats;
    }

    if(availableSeats.length === 0) {
      console.log('Sorry there are no available seats for this class')
    }

    const randomSeats = Math.floor(Math.random() * availableSeats.length)
    const seat = availableSeats.splice(randomSeats, 1, 'B')

    console.log(`Seat ${seat} is booked in ${classType}`)
  }

  displaySeat() {
    if(this.seats[se]){}
  }
  
    // console.log(this.firstClassSeats);
    // console.log(this.secClassSeats)
}
const flight = new FlightBooking();
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
