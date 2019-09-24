import React, { useState } from 'react'
import { StyledSalaryCalculator } from './salary-calculator.style'
import { StyledWeekDays } from '../week-days/week-days.style'

const fields = [
    { name: 'Rate Hours', amount: 0 },
    { name: 'Retention %', amount: 0 },
    { name: 'Tax %', amount: 0 },
]


const SalaryCalculator = () => {

    const [fieldsList, setFieldsList] = useState(fields)

    const handleChange = (withValue, name) => {
        setFieldsList(fieldsList.map(field => field.name === name ? ({ ...field, amount: +withValue }) : field))
    }


    return (
        <StyledSalaryCalculator>
            <h2>Salary Calculator</h2>
            {fieldsList.map(({name, amount}) => {
                return (
                    <label>{name}:<input type="number" onChange={e => {handleChange(e.target.value, name)}} value={amount}/></label>
                )
            })}
                
            <h2>Total Income: {}</h2>
            
        </StyledSalaryCalculator>
    )
}

export default SalaryCalculator