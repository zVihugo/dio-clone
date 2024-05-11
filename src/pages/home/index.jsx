/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
import bannerImage from '../../assets/banner.png'

import { HomeContainer,  TextContent, Title, TitleHighlight } from './styles'
const Home =  () =>  {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/login')
  }
  
  return (
    <>
     <Header/>
      <HomeContainer>
          <div>
            <Title>
              <TitleHighlight> Codifique <br /></TitleHighlight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn}></Button>
          </div>
          <div>
            <img src={bannerImage} alt="banner-principal-dio" />
          </div>
      </HomeContainer>
      
    </>
  )
}

export  {Home}
