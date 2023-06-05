import React from 'react'
import styles from './layout.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>
        <Link className='link' href={'/'}>
          DigitalGrowth
        </Link>
      </span>
      <div className={styles.pages__links}>
        <span>
          <Link className='link' href={'/service'}>
            service
          </Link>
        </span>
        <span>
          <Link className='link' href={'/about'}>
            about us
          </Link>
        </span>
        <span>
          <Link className='link' href={'/contact'}>
            contact
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
