import React, { useState } from 'react'
import { StyledSalaryCalculator } from './salary-calculator.style'
import { StyledInput } from '../week-days/week-days.style'
// import { StyledWeekDays } from '../week-days/week-days.style'

const fields = [
    { name: 'Rate/hours', amount: 25, id: '1' }, // index 0
    { name: 'Retention %', amount: 3, id: '2' }, // index 1
    { name: 'Tax %', amount: 20, id: '3'}, // index 2
]


const SalaryCalculator = ({ toho }) => {



    const [fieldsList, setFieldsList] = useState(fields)

    const handleChange = (withValue, name) => {
        
        setFieldsList(fieldsList.map(field => field.name === name ? ({ ...field, amount: +withValue }) : field))
    }

    const getTotalIncomeNow = () => {
        return toho * fields[0].amount * (100-fields[1].amount)/100 * (100-fields[2].amount)/100
    }
    
    // const totalHours = (totalHours)
    // const rate = (rateAmount)
    // const retention = (retentionAmount) / 100
    // const tax = (taxAmount) / 100
    // const totalSalary = (rate + totalHours) - retention - tax


    return (
        <StyledSalaryCalculator>
            <h2>Salary Calculator</h2>
            {fieldsList.map(({name, amount, id}) => {
                return (
                    <label key={id}>{name}:<StyledInput type="number" onChange={e => {handleChange(e.target.value, name)}} value={amount} key={fields.id}/></label>
                )
            })}
                
            <h2>Total Income: £ {getTotalIncomeNow()}</h2>
            
        </StyledSalaryCalculator>
    )
}

export default SalaryCalculator