import Image from 'next/image'
import './contactPage.css'
export const metadata = {
  title: 'DigitalGrowth: Contact Us',
  description: 'Contact Form page of DigitalGrowth'
}
const Page = () => {
  return (
    <main className='ContactPage'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* <img src='./ContactImage.webp' alt='Contact__Image' className='Contact__Image' /> */}
      <Image
        src={'/ContactImage.webp'}
        alt='Contact__Image'
        width={800}
        height={800}
        className='Contact__Image'
        property='true'
        quality={100}
      />
      <div className='Contact__Form'>
        <div className='Contact__Title'>
          <span className='Contact__Heading'>Contact Us</span>
          <p className='Contact__Para'>
            <span>Explore the growth of your business with us.</span>
            <span>Feel free to get in touch.</span>
          </p>
        </div>
        <form className='form' method='POST' action={'https://formspree.io/f/mayzggbb'}>
          <label htmlFor='Contact__Name'>Name</label>
          <input type='text' id='Contact__Name' name='Name' placeholder='Your full name' required />
          <label htmlFor='Contact__Email'>Email</label>
          <input
            type='email'
            id='Contact__Email'
            name='Email'
            placeholder='Your email address'
            pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
            required
          />
          <label htmlFor='Contact__PhoneNo'>Phone No.</label>
          <input
            type='tel'
            id='Contact__PhoneNo'
            name='PhoneNo'
            placeholder='Your phone number'
            pattern='[6-9]{1}[0-9]{9}'
            title='Please enter a valid phone number with 10 digits & starts from 6 to 9'
            required
          />
          <label htmlFor='Contact__Message'>Your Project requirements?</label>
          <input
            type='text'
            id='Contact__Message'
            name='Project__Requirements'
            placeholder='eg:- Website for my sales business, ...'
            required
          />
          <button type='submit' className='Contact__Button'>
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}

export default Page
