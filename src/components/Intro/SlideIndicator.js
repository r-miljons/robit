import React from 'react'
import { StyledIndicator } from './Indicator.styled'
import { StyledSlideIndicator } from './SlideIndicator.styled'

export default function SlideIndicator({userInfo, currentSlideIndex}) {
  return (
    <StyledSlideIndicator>
        {
            Object.keys(userInfo).map((key, index) => {
                return <StyledIndicator key={key} active={currentSlideIndex === index}/>
            })
        }
    </StyledSlideIndicator>
  )
}
