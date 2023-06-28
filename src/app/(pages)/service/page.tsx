import React from 'react'
import './ServicePage.css'
import CardSection from '@/app/components/CardSection/CardSection'
import Image from 'next/image'
export const metadata = {
  title: 'Services',
  description: 'Services page of DigitalGrowth'
}
const page = () => {
  return (
    <main className='ServicePage'>
      <div className='ServicePage__Landing'>
        <span className='Service__Heading'>Services</span>
        <p className='Service__Para'>
          {`Our unrivaled digital solutions set a new benchmark for excellence, empowering businesses to outshine the competition and achieve unprecedented success in the digital landscape`}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img src='./services.webp' alt='Service__Image' className='Service__Image' /> */}
        <Image
          src={'/services.webp'}
          alt='Service__Image'
          width={1070}
          height={652}
          style={{
            width: '95%',
            height: 'auto',
            marginTop: '3vw'
          }}
          quality={100}
        />
      </div>
      {/* Technology Section */}
      <div className='ServicePage__Landing'>
        <span className='Service__Heading'>Technologies we use</span>
        <p className='Service__Para'>
          {`We use modern and advanced technologies to make our product secure, fast & easy to accessible`}
        </p>
        <div className='CardSection'>
          <CardSection tech_img='./NextJS.svg' Heading='NextJs' imgLink='https://nextjs.org/' />
          <CardSection tech_img='./ReactJS.svg' Heading='ReactJS' imgLink='https://react.dev/' />
          <CardSection tech_img='./sass.svg' Heading='Sass' imgLink='https://sass-lang.com/' />
          <CardSection tech_img='./NodeJS.svg' Heading='NodeJS' imgLink='https://nodejs.org/en' />
          <CardSection
            tech_img='./MongoDB.svg'
            Heading='MongoDB'
            imgLink='https://www.mongodb.com/'
          />
          <CardSection
            tech_img='./FirebaseDB.svg'
            Heading='Firebase'
            imgLink='https://firebase.google.com/'
          />
          <CardSection tech_img='./Github.svg' Heading='Github' imgLink='https://github.com/' />
          <CardSection
            tech_img='./Typescript.svg'
            Heading='Typescript'
            imgLink='https://www.typescriptlang.org/'
          />
          <CardSection tech_img='./Redux.svg' Heading='Redux' imgLink='https://redux.js.org/' />
        </div>
      </div>

      {/* Our Work Section */}

      <div className='ServicePage__Landing'>
        <span className='Service__Heading'>Our previous projects</span>
        <p className='Service__Para'>
          {`We have worked for lots of organizations or companies and provided our best services`}
        </p>
        <div className='CardSection'>
          <CardSection
            prj_img='./NetworkWizards.webp'
            Heading='NetworkWizards'
            imgLink='https://networkwizards.tech/'
          />
          <CardSection
            prj_img='./Copilot.webp'
            Heading='Copilot'
            imgLink='https://copilot-pearl.vercel.app/'
          />
          <CardSection prj_img='./NCETCSE.webp' Heading='NCETCSE' imgLink='http://ncetcse.com/' />
          <CardSection
            prj_img='./Coaching.webp'
            Heading='Coaching App'
            imgLink='https://play.google.com/store/apps/details?id=com.sukhvindra_singh.Jalauncodinghub'
          />
          <CardSection
            prj_img='./SwagMart.webp'
            Heading='SwagMart'
            imgLink='https://www.swagmart.live/'
          />
          <CardSection
            prj_img='./NewsMonkey.webp'
            Heading='NewsMonkey'
            imgLink='https://apninews.onrender.com/'
          />
        </div>
      </div>
    </main>
  )
}

export default page
