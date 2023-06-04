import React from 'react'
import MegaMenuMap from './MegaMenuMap'
import data from '../../helper/data'



 const MenuMap = () => {
  return (
    <>
     <div className="flex flex-row mt-2 d-none d-lg-block bg-red-200">
              <div className="d-flex gap-4">
                {data.map((item, index) => (
                  <MegaMenuMap item={item} key={index} />
                ))}
              </div>
            </div>


            {/* <div className="flex items-center">
              <div className="flex gap-6 items-center">
                <div className="smx:hidden sm:hidden lg:flex gap-6 navtext-white navtext-2xl  ">
                  {data.map((items) => (
                     <a href={items.nlink}>{items.navtext}</a>
                  ))}
                </div>
                </div>
                </div>  */}

    </>
  )
}
export default MenuMap



{/* <aside
        id="logo-sidebar"
        className="bg-[#E12A32] lg:hidden fixed smx:top-0 sm:top-10
         z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200  "
        aria-label="Sidebar"
      >
        <div className="  h-full px-3  overflow-y-auto bg-[#E12A32]">
          <ul className="space-y-2 font-medium ">
            {data.map((event,index) => (
              <li key={index}>
                <a
                  href={event.nlink}
                  className="flex items-center p-2 navtext-white  rounded-lg hover:bg-gray-100   hover:navtext-[#E12A32]"
                >
                  {/* <svg
                    aria-hidden="true"
                    className="w-6 h-6 navtext-white transition duration-75  group-hover:navtext-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg> */}
                  {/* {event.icon} */}
{/* 
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {event.navtext}
                  </span> */}
                  // </a>
                  //       </li>
                  //     ))}
                  //   </ul>
                  // </div>
                // </aside> */}