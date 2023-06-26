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
          <Link className='link linkUnderline' href={'/service'}>
            service
          </Link>
        </span>
        <span>
          <Link className='link linkUnderline' href={'/about'}>
            about
          </Link>
        </span>
        <span>
          <Link className='link linkUnderline' href={'/contact'}>
            contact
          </Link>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
