import React from 'react'
import styled from 'styled-components'
import { ProfileImage } from './profile-image'
import {Canvas} from './canvas'
import imageUrl from '../../assets/team/sridhar.jpg'
import { headerHeight } from '../body/styleguide/breakpoints'
import {LogoAsci} from './test'

const StyledHeader = styled.header`
  position:relative;
  height: ${headerHeight};
`
const StyledBackground = styled.div`
  height: 100%;
  width: 100vw;
  font-size: 1vh;
  overflow: hidden;
`

export const Header = () =>
  (
    <>
    {/* <Canvas/> */}
    <StyledHeader>
      <StyledBackground className={"cloud-container"}>
        {/* <LogoAsci/> */}
        <div id="cloud-intro"></div>
      </StyledBackground>
      <ProfileImage imageUrl={imageUrl} />
    </StyledHeader>
    </>
  )