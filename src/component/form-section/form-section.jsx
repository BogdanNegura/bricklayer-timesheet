import React, {useState} from 'react'
import {StyledFormInputs} from './form-section.style'

const inputs = [
    { name: 'Company', value: '' },
    { name: 'Total Income', value: '' },
    { name: 'Tax Deduced', value: '' },
    { name: 'Date', value: '' }
]

const FormSection = () => {

    const [inputsList, setInputsLIst] = useState(inputs)

    const handleChange = (withValue, name) => {
        const otherValues = inputsList.map(input => input.name === name ? ({ ...input, value: +withValue }) : input)

        setInputsLIst(otherValues)

    }

    

    return (
        <StyledFormInputs>
            {inputsList.map(({name, value}) => {
                return (
                    <label key={name}>{name}: <input type="text" onChange={e => {handleChange(e.target.value, name)}} value={value}/></label>

                )
            })}
            
       </StyledFormInputs>      
    )
}

export default FormSection