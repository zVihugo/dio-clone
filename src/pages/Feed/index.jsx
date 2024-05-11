/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
import { UserInfo } from '../../components/UserInfo'
import bannerImage from '../../assets/banner.png'

import { FeedContainer,  Column,Title, TitleHighlight } from './styles'
import Card from '../../components/Card'
const Feed =  () =>  {
  return (
    <>
     <Header autenticado={true}/>
      <FeedContainer>
      <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
              <UserInfo nome="Victor" image="https://avatars.githubusercontent.com/u/118476125?v=4" percentual={25} />
              <UserInfo nome="Victor" image="https://avatars.githubusercontent.com/u/118476125?v=4" percentual={65} />
              <UserInfo nome="Victor" image="https://avatars.githubusercontent.com/u/118476125?v=4" percentual={45} />
              <UserInfo nome="Victor" image="https://avatars.githubusercontent.com/u/118476125?v=4" percentual={72} />
            </Column>
      </FeedContainer>
      
    </>
  )
}

export  {Feed}
