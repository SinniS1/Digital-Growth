import React from 'react'
import './AboutPage.css'
import FeatureSection from '@/app/components/FeatureSection/FeatureSection'
import Image from 'next/image'
export const metadata = {
  title: 'About Us',
  description: 'About page of DigitalGrowth'
}
const page = () => {
  return (
    <main className='AboutPage'>
      <div className='AboutPage__Landing'>
        <span className='About__Heading'>About Us</span>
        <p className='About__Para'>
          We are startup of passionate developers, wants to revolutionize the small businesses with
          our digital solutions.
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img src='./AboutUs.webp' alt='About__Image' className='About__Image' /> */}
        <Image
          src={'/AboutUs.webp'}
          alt='About__Image'
          width={1280}
          height={853}
          style={{
            width: '110%',
            height: 'auto'
          }}
          quality={100}
        />
        <span className='About__Heading'>Our mission</span>
        <p className='About__Para'>{`At DigitalGrowth , we believe in the transformative power of digital solutions. Our dedicated team of professionals is passionate about helping businesses succeed online. From designing visually stunning websites to developing innovative mobile apps and implementing targeted marketing campaigns, we empower our clients to reach their full potential in the digital world. Trust DigitalGrowth as your digital partner and embark on a journey of growth and success.`}</p>
      </div>
      <div className='About_Section2'>
        <span className='About__Heading Section2__Heading'>{`Let's give your business online presence.`}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='./AboutUs2.webp' alt='Section2__Image' className='Section2__Image' />
      </div>
      <div className='About_Section3'>
        <div className='Section3_Team'>
          <span className='About__Heading'>Our Team</span>
          <p className='About__Para'>{`Meet the people behind the magic`}</p>
        </div>
        <FeatureSection
          heading={'Sachin Yadav'}
          para={`Meet Sachin Yadav, a highly motivated and skilled web developer with a passion for creating engaging and user-friendly web applications. With a strong foundation in web technologies and responsive web design, Sachin brings a keen eye for detail and a collaborative mindset to every project.`}
          btn1={'Web Development'}
          btn1Link={'/contact'}
          image='/SachinProfile.webp'
          profileImage={true}
          isLeftImage={true}
          CardClassName='CardContainer'
        />
        <FeatureSection
          heading={'Sukhvinder Singh'}
          para={`Introducing Sukhvinder Singh, an accomplished App Developer with a passion for creating innovative mobile applications. With expertise in app development technologies and a keen eye for user experience, Sukhvinder brings a strong skill set to deliver mobile solutions.`}
          btn1={'App Development'}
          btn1Link={'/contact'}
          image='/SukhiProfile.webp'
          profileImage={true}
          isLeftImage={false}
          CardClassName='CardContainer'
        />
        <FeatureSection
          heading={'Bharat Yadav'}
          para={`Introducing Bharat Yadav, a skilled Digital Marketing Manager. With a strong focus on driving successful digital campaigns, Bharat brings expertise in leveraging various marketing channels, increasing brand visibility. With a strategic mindset Bharat is dedicated to achieving outstanding results in the digital landscape.`}
          btn1={'Digital Marketing'}
          btn1Link={'/contact'}
          image='/BharatProfile.webp'
          profileImage={true}
          isLeftImage={true}
          CardClassName='CardContainer'
        />
      </div>
    </main>
  )
}
export default page
