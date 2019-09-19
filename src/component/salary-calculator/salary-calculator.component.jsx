import React from 'react'
import { StyledSalaryCalculator } from './salary-calculator.style'

const SalaryCalculator = () => {
    return (
        <StyledSalaryCalculator>
            <h2>Salary Calculator</h2>
            <label>Rate/hour:<input/></label>
            <label>Retention %:<input/></label>
            <label>TAX %:<input/></label>
            <h2>Total Income: {}</h2>
            
        </StyledSalaryCalculator>
    )
}

export default SalaryCalculator