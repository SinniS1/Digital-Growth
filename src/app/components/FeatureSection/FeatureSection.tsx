import Link from 'next/link'
import './FeatureSection.css'

const FeatureSection = ({
  heading,
  para,
  btn1,
  btn1Link,
  btn2,
  btn2Link,
  image,
  profileImage,
  isLeftImage,
  CardClassName
}: props) => {
  return (
    // <div className={CardClassName}>
    <div className={`FeatureSection ${CardClassName}`}>
      {isLeftImage && (
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt='FeatureSection__image'
            className={`FeatureSection__image ${profileImage ? 'ProfileImage' : ''}`}
          />
        </div>
      )}
      <div className='FeatureSection__content'>
        <header className='FeatureSection__heading'>{heading}</header>
        <p className='FeatureSection__para'>{para}</p>
        <div className='FeatureSection__content__btns'>
          <Link className='link btn btn1' href={btn1Link}>
            {btn1}
          </Link>
          {btn2 && btn2Link && (
            <Link className='link btn btn2' href={btn2Link}>
              {btn2}
            </Link>
          )}
        </div>
      </div>
      {isLeftImage || (
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt='FeatureSection__image'
            className={`FeatureSection__image ${profileImage ? 'ProfileImage' : ''}`}
          />
        </div>
      )}
    </div>
    // </div>
  )
}

export default FeatureSection
