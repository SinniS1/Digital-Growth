'use client'
import React, { useState } from 'react'
import './contactPage.css'

const Page = () => {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const HandleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && mail && phone && message) {
      // Form submission logic here
      alert('Form Submitted ' + name + ' ' + mail + ' ' + phone + ' ' + message)
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <main className='ContactPage'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='./ContactImage.png' alt='Contact__Image' className='Contact__Image' />
      <div className='Contact__Form'>
        <div className='Contact__Title'>
          <span className='Contact__Heading'>Contact Us</span>
          <p className='Contact__Para'>
            <span>Explore the growth of your business with us.</span>
            <span>Feel free to get in touch.</span>
          </p>
        </div>
        <form className='form' onSubmit={HandleSubmitForm}>
          <label htmlFor='Contact__Name'>Name</label>
          <input
            type='text'
            id='Contact__Name'
            placeholder='Your full name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor='Contact__Email'>Email</label>
          <input
            type='email'
            id='Contact__Email'
            placeholder='Your email address'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
            required
          />
          <label htmlFor='Contact__PhoneNo'>Phone No.</label>
          <input
            type='tel'
            id='Contact__PhoneNo'
            placeholder='Your phone number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern='[6-9]{1}[0-9]{9}'
            title='Please enter a valid phone number with 10 digits & starts from 6 to 9'
            required
          />
          <label htmlFor='Contact__Message'>Your Project requirements?</label>
          <input
            type='text'
            id='Contact__Message'
            placeholder='eg:- Website, Mobile App ...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
