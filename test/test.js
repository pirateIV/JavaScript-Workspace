class FlightBooking {
  constructor() {
    this.seats = new Array(100).fill(null);
    this.firstClassSeats = Array.from({ length: 30 }, (_, i) => i + 1);
    this.businessClassSeats = Array.from({ length: 30 }, (_, i) => i + 31);
    this.economyClassSeats = Array.from({ length: 40 }, (_, i) => i + 61);
  }

  bookSeat(classType) {
    let availableSeats;
    if (classType === "FirstClass") {
      availableSeats = this.firstClassSeats;
    } else if (classType === "BusinessClass") {
      availableSeats = this.businessClassSeats;
    } else {
      availableSeats = this.economyClassSeats;
    }

    if (availableSeats.length === 0) {
      console.log(
        "Sorry, no seats available in the seats in the selected class"
      );
    }
    const randomIndex = Math.floor(Math.random() * availableSeats.length);
    console.log(classType)
    const seat = availableSeats.splice(randomIndex, 1, 'B');
    // this.seats[seat - 1] = classType;
    console.log(`Seat ${seat} booked in ${classType}`);
  }

  displaySeats() {
    this.displayClassSeats("firstClassSeats", this.firstClassSeats);
    this.displayClassSeats("businessClassSeats", this.businessClassSeats);
    this.displayClassSeats("economyClassSeats", this.economyClassSeats);
  }

  displayClassSeats(elementId, classSeats) {
    const classElement = document.getElementById(elementId);

    classSeats.forEach(seat => {
      const seatDiv = document.createElement("div");
      seatDiv.classList.add("seat");
      seatDiv.innerText = seat;
      classElement.appendChild(seatDiv);

    
      if(this.seats[seat - 1] !== null){
        seatDiv.style.backgroundColor = 'green'
      } else if (this.seats[seat - 1] == null) {
        seatDiv.style.backgroundColor = 'gray'
      }
      // console.log(this.seats)
    });
  }
}

const flight = new FlightBooking();

flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("FirstClass");
flight.bookSeat("BusinessClass");
flight.bookSeat("BusinessClass");
flight.bookSeat("BusinessClass");
flight.bookSeat("BusinessClass");
flight.bookSeat("BusinessClass");
flight.bookSeat("BusinessClass");
flight.bookSeat("BusinessClass");
flight.bookSeat("BusinessClass");
flight.bookSeat("EconomyClass");
flight.bookSeat("EconomyClass");
flight.bookSeat("EconomyClass");
flight.bookSeat("EconomyClass");
flight.bookSeat("EconomyClass");

setTimeout(() => {
  flight.displaySeats();
}, 50);
