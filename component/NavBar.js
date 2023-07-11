import React, { useState } from 'react'
import Link from 'next/link'

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav>
        <h3 className='logo'>Company</h3>
        <ul className='menu'>
            <li className={`menu dropdown ${isDropdownOpen ? 'open' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link href="/">
                ABOUT
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/">
                    HISTORY
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    VISSION MISSION
                  </Link>
                </li>
              </ul>
            </li>
            <li className='menu'>
              <Link href="/">
                OUR WORK
              </Link>
            </li>
            <li className='menu'>
              <Link href="/">
                OUR TEAM
              </Link>
            </li>
            <li className='menu'>
              <Link href="/">
                CONTACT
              </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar