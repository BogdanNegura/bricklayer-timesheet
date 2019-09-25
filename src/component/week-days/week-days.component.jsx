import React, { useState } from 'react'
import { StyledWeekDays, StyledTotalHours } from './week-days.style'

const days = [
    { name: 'monday', amount: '' }, 
    { name: 'tuesday', amount: '' },
    { name: 'wednesday', amount: '' },
    { name: 'thursday', amount: '' },
    { name: 'friday', amount: '' },
    { name: 'saturday', amount: '' },
    { name: 'sunday', amount: '' },
]

const WeekDays = () => {

    const [daysList, setDaysList] = useState(days)
    const handleChange = (withValue, name) => {
        setDaysList(daysList.map(day => day.name === name ? ({ ...day, amount: +withValue }) : day))
        console.log(name, withValue)
    }
    


    return (
        <StyledWeekDays>
            {daysList.map(({name, amount}) => {
                return (
                    <label>{name}: <input type="number" onChange={e => {handleChange(e.target.value, name)}} value={amount}/></label>
                )
            })}

            <StyledTotalHours> Total Hours: {
                daysList.map(({ amount }) => amount).reduce((acc, cur) => acc + cur, 0)
            }</StyledTotalHours>
        </StyledWeekDays>

    )
}

export default WeekDays