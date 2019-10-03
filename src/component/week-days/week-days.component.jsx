import React, { useState } from 'react'
import { StyledWeekDays, StyledInput } from './week-days.style'

const days = [
    { name: 'monday', amount: '' }, 
    { name: 'tuesday', amount: '' },
    { name: 'wednesday', amount: '' },
    { name: 'thursday', amount: '' },
    { name: 'friday', amount: '' },
    { name: 'saturday', amount: '' },
    { name: 'sunday', amount: '' },
]

const WeekDays = ({ sth }) => {

    const [daysList, setDaysList] = useState(days)
    const handleChange = (withValue, name) => {
        const newValues = daysList.map(day => day.name === name ? ({ ...day, amount: +withValue }) : day)

        setDaysList(newValues)

        sth(newValues.map(({ amount }) => amount).reduce((acc, cur) => acc + +cur, 0))
        console.log(name, withValue)
    }
    


    return (
        <StyledWeekDays>
            {daysList.map(({ name, amount }) => {
                return (
                    <label key={name}>{name}: <StyledInput type="text" onChange={e => {handleChange(e.target.value, name)}} value={amount}/></label>
                )
            })}

        </StyledWeekDays>

    )
}

export default WeekDays