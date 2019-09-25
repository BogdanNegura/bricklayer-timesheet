import React, { useState } from 'react'
import { StyledSalaryCalculator } from './salary-calculator.style'
// import { StyledWeekDays } from '../week-days/week-days.style'

const fields = [
    { name: 'Rate Hours', amount: '', id: '1' },
    { name: 'Retention %', amount: '', id: '2' },
    { name: 'Tax %', amount: '', id: '3'},
]


const SalaryCalculator = () => {

    const [fieldsList, setFieldsList] = useState(fields)

    const handleChange = (withValue, name) => {
        setFieldsList(fieldsList.map(field => field.name === name ? ({ ...field, amount: +withValue }) : field))
    }
    
    // const totalHours = (totalHours)
    // const rate = (rateAmount)
    // const retention = (retentionAmount) / 100
    // const tax = (taxAmount) / 100
    // const totalSalary = (rate + totalHours) - retention - tax


    return (
        <StyledSalaryCalculator>
            <h2>Salary Calculator</h2>
            {fieldsList.map(({name, amount}) => {
                return (
                    <label>{name}:<input type="number" onChange={e => {handleChange(e.target.value, name)}} value={amount} key={fields.id}/></label>
                )
            })}
                
            <h2>Total Income: {}</h2>
            
        </StyledSalaryCalculator>
    )
}

export default SalaryCalculator