import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FacebookIcon from '@component/public/facebook-official.png'
import TwitterIcon from '@component/public/twitter.png'

function Footer() {
  return (
    <footer>
        <div className='footer-content'>
            <p>Copyright © 2016. PT Company</p>
        </div>
        <div className='footer-content'>
            <Link href=''>
                <Image src={FacebookIcon} alt='facebook icon' className='footer-icon' />
            </Link>
            <Link href=''>
                <Image src={TwitterIcon} alt='twitter icon' className='footer-icon' />
            </Link>
        </div>
    </footer>
  )
}

export default Footer