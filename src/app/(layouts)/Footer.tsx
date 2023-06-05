import React from 'react'
import styles from './layout.module.css'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <span className={styles.footer_logo}>
          <Link className='link' href={'/'}>
            DigitalGrowth
          </Link>
        </span>
        <p className={styles.footer_rights}>2023 @DigitalGrowth. All rights reserved.</p>
      </div>

      {/* Social media links */}
      <div className={styles.link_container}>
        <div className={styles.footer_links}>
          <span>
            <Link className='link' href={'/'}>
              Instagram
            </Link>
          </span>
          <span>
            <Link className='link' href={'/'}>
              Twitter
            </Link>
          </span>
          <span>
            <Link className='link' href={'/'}>
              LinkedIn
            </Link>
          </span>
          <span>
            <Link className='link' href={'/'}>
              Facebook
            </Link>
          </span>
        </div>

        <div className={styles.footer_links}>
          <span>
            <Link className='link' href={'/'}>
              Privacy policy
            </Link>
          </span>
          <span>
            <Link className='link' href={'/'}>
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
