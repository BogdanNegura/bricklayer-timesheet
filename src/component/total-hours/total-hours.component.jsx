import React from 'react'
import {StyledTotalIncome} from '../total-hours/total-hours.style'


const TotalHours = ({th}) => {

    return (
        <StyledTotalIncome>Total Hours: {th}</StyledTotalIncome>
        
    )
}

export default TotalHours