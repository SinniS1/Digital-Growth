import Link from 'next/link'
import FeatureSection from './components/FeatureSection/FeatureSection'
export default function Home() {
  return (
    <main>
      {/* Home Section */}
      <FeatureSection
        heading={'Building Digital solutions, Fueling Business Growth'}
        para={
          'Empower your business with our custom digital solutions. We specialize in building powerful websites, intuitive apps, and result-driven marketing campaigns to fuel your growth. '
        }
        btn1={'Contact Us'}
        btn1Link={'/contact'}
        btn2={'Our Services'}
        btn2Link={'/service'}
        image={'./HomePageImage.webp'}
        isLeftImage={false}
      />

      {/* Online Presence section with card */}
      <FeatureSection
        heading='Give your business online presence.'
        para={`Our digital solutions can transform your business into a growth engine.`}
        btn1='Contact Us'
        btn1Link='/contact'
        image='./OnlinePresence.webp'
        isLeftImage={false}
        CardClassName='CardContainer'
      />

      {/* Web Development section */}
      <FeatureSection
        heading='Website Development'
        para='We specialize in crafting exceptional digital experiences through expert development. Our team combines cutting-edge technology, creative design, and seamless functionality to build websites that captivate audiences and drive business growth.'
        btn1='Hire Us'
        btn1Link='/contact'
        btn2='About Us'
        btn2Link='/about'
        image='./WebsiteDevelopment.webp'
        isLeftImage={true}
      />
      {/* App Development */}
      <FeatureSection
        heading='Mobile App Development'
        para={`Empower your business with custom mobile solutions tailored to your unique needs. Our app development expertise combines sleek design, intuitive functionality, and seamless integration to deliver apps that drive customer engagement and enhance your brand's digital presence.`}
        btn1='Hire Us'
        btn1Link='/contact'
        btn2='About Us'
        btn2Link='/about'
        image='./AppDevelopment.webp'
        isLeftImage={false}
      />
      {/* DigitalMarketing */}
      <FeatureSection
        heading='Digital Marketing'
        para={`Unlock your business's growth potential with our data-driven marketing solutions. From social media marketing and content creation, we provide the expertise and tools you need to build a strong Online presence.`}
        btn1='Hire Us'
        btn1Link='/contact'
        btn2='About Us'
        btn2Link='/about'
        image='./DigitalMarketing.webp'
        isLeftImage={true}
      />

      {/* Work Flow Section*/}
      <section className='CardContainer WorkFlow'>
        <div className='Left__Hand'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='./WorkFlow1.webp' alt='WorkFlow__image' className='WorkFlow__image' />
          <p className='StepPara'>
            We follow 3 industry standard steps to serve every product at its best.
          </p>
          <Link className='link btn btn1' href={'/contact'}>
            Contact Us
          </Link>
        </div>
        <div className='Right__Hand'>
          <div className='Step'>
            <span className='StepHeading'>Step 1</span>
            <span className='StepPara'>
              {` We will take your personalized requirements and will make a roadmap to serve you the best.`}
            </span>
          </div>
          <div className='Line' />
          <div className='Step'>
            <span className='StepHeading'>Step 2</span>
            <span className='StepPara'>
              {`Our specialist will prepare some prototypes which then be used as a template for the final product.`}
            </span>
          </div>
          <div className='Line' />
          <div className='Step'>
            <span className='StepHeading'>Step 3</span>
            <span className='StepPara'>
              {`We will upload the final product on internet or on multiple sources which then will serve your clients.`}
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
