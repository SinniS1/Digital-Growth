import FeatureSection from './components/FeatureSection/FeatureSection'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      {/* Home Section */}
      <FeatureSection
        heading={'Building Digital solutions, Fueling Business Growth'}
        headingSize={'3.48vw'}
        para={
          'Empower your business with our custom digital solutions. We specialize in building powerful websites, intuitive apps, and result-driven marketing campaigns to fuel your growth. '
        }
        btn1={'Contact Us'}
        btn1Link={'/contact'}
        btn2={'Our Services'}
        btn2Link={'/service'}
        image={'./HomePageImage.png'}
        isLeftImage={false}
      />

      {/* Online Presence section with card */}
      <div className='CardContainer'>
        <FeatureSection
          heading='Give your business online presence.'
          headingSize='3vw'
          para={`Our digital solutions can transform your business into a growth engine.`}
          btn1='Contact Us'
          btn1Link='/contact'
          image='./OnlinePresence.png'
          isLeftImage={false}
          CardClassName='CardContainer'
        />
      </div>

      {/* Web Development section */}
      <FeatureSection
        heading='Website Development'
        headingSize='3vw'
        para='We specialize in crafting exceptional digital experiences through expert development. Our team combines cutting-edge technology, creative design, and seamless functionality to build websites that captivate audiences and drive business growth.'
        btn1='Hire Us'
        btn1Link='/contact'
        image='./WebsiteDevelopment.png'
        isLeftImage={true}
      />
      {/* App Development */}
      <FeatureSection
        heading='Mobile App Development'
        headingSize='3vw'
        para={`Empower your business with custom mobile solutions tailored to your unique needs. Our app development expertise combines sleek design, intuitive functionality, and seamless integration to deliver apps that drive customer engagement and enhance your brand's digital presence.`}
        btn1='Hire Us'
        btn1Link='/contact'
        image='./AppDevelopment.png'
        isLeftImage={false}
      />
      {/* DigitalMarketing */}
      <FeatureSection
        heading='Digital Marketing'
        headingSize='3vw'
        para={`Unlock your business's growth potential with our data-driven marketing solutions.From search engine optimization (SEO) to social media marketing and content creation, we provide the expertise and tools you need to build a strong Online presence.`}
        btn1='Hire Us'
        btn1Link='/contact'
        image='./DigitalMarketing.png'
        isLeftImage={true}
      />
    </main>
  )
}
