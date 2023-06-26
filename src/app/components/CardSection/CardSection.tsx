/* eslint-disable @next/next/no-img-element */
import React from 'react'
import './CardSection.css'
type Props = {
  tech_img?: string
  prj_img?: string
  imgLink: string
  Heading: string
}

const CardSection = ({ tech_img, prj_img, imgLink, Heading }: Props) => {
  return (
    <a href={imgLink} target='_blank'>
      <div className='Card'>
        {tech_img ? (
          <img src={tech_img} alt='Card__Image' id='tech_img' />
        ) : (
          <img src={prj_img} alt='Card__Image' id='prj_img' />
        )}
        <span className='Card_Heading'>{Heading}</span>
      </div>
    </a>
  )
}

export default CardSection
