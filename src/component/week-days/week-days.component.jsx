import React, { useState } from 'react'
import { StyledWeekDays } from './week-days.style'

const WeekDays = () => {

    const [day, setDay] = useState('')

    return (
        <StyledWeekDays>
            <label>Monday: <input type="number" onChange={e => setDay(e.target.value)} value={day}/></label>
            <label>Tuesday: <input type="number" onChange={e => setDay(e.target.value)} value={day}/></label>
            <label>Wednesday: <input type="number" onChange={e => setDay(e.target.value)} value={day}/></label>
            <label>Thursday: <input type="number" onChange={e => setDay(e.target.value)} value={day}/></label>
            <label>Friday: <input type="number" onChange={e => setDay(e.target.value)} value={day}/></label>
            <label>Saturday: <input type="number" onChange={e => setDay(e.target.value)} value={day}/></label>
            <label>Sunday: <input type="number" onChange={e => setDay(e.target.value)} value={day}/></label>
        </StyledWeekDays>
    )
}

export default WeekDays