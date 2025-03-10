import { useState } from "react"
import "./style.css"

export default function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
  return <form>
    <div className="input-field">
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
    </div>
    <label htmlFor="res-time">Choose time</label>
    <select id="res-time">
      {availableTimes.map(time => (
        <option key={time}>{time}</option>
      ))}
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" />
    <label htmlFor="occasion">Occasion</label>
    <select id="occasion"> <option>Birthday</option>
      <option>Anniversary</option>
    </select>
    <button type="submit">Make your reservations</button>
  </form>
}
