import React from 'react'
import { InputContainer, IconContainer, InputText } from './styles'


const Input = ({leftIcon, name, ...rest}) => {
    return (
        <InputContainer>
        {/* Então se leftIcon Existir, ele exibe meu IconContainer*/}
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <InputText {...rest}/>
        </InputContainer>
    )
}

export {Input}