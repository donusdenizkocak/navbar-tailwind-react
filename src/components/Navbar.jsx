import React from 'react'
import data from '../helper/data'
import MegaMenuMap from './navbarMapFolder/MegaMenuMap';
 const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4 flex-wrap">
      <div className="flex  mt-2 d-none d-lg-block bg-red-200 flex-wrap p-4">
              <div className="nav-content flex gap-6 items-center">
                {data.map((item, index) => (
                  <MegaMenuMap item={item} key={index} />
                ))}
              </div>
            </div>
    </nav>
  )
}

export default Navbar;