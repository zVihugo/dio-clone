import React from 'react'
import { HeaderContainer, Row, Column, Wrapper, Input, BuscarInputContainer, Menu, MenuRight, UserPicture  } from './styles'
import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'


const Header = ({autenticado}) => {
  return (
    <Wrapper>
    <HeaderContainer>
        <Row>
          <img src={logo} alt="Logo da dio"/>
          {autenticado ? (
            <>
             <BuscarInputContainer>
              <Input placeholder='Buscar...'/>
             </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
            {autenticado ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/118476125?v=4"/>
            ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>)}
        </Row>
    </HeaderContainer>
  </Wrapper>
  )
}

export  {Header}