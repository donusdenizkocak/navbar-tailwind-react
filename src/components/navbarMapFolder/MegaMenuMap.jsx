import React from 'react'
import '../MegaMenu.css'


 const MegaMenuMap = ({item,index}) => {
    const {navtext,nlink,navchildren} =item;
  return (
    <ul className="list-unstyled news-ul">
    <li key={index}>
      <a className="mega-menu-link bg-white p-1 rounded-sm" href={nlink}>
        {navtext}
      </a>
      {/* <Icon name="down" size={10} /> */}
      <div className="nav-content1">
        <div>
          <ul className="list-unstyled ">
            {navchildren?.map((event, index) => (
                <li >
                  <a key={index} className="mega-menu-link bg-amber-200" href={event.nlink}>{event.navtext} </a>

                      <div className="nav-content2">
                          <div>
                            <ul className="list-unstyled ">
                              {event.navchildren?.map((child, index) => (
                                  <li >
                                    <a key={index} className="mega-menu-link my-1" href={child.nlink}>{child.navtext} </a>
                                  </li>
                              ))}
                            </ul>
                          </div>
                      </div>
        
                  </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  </ul>
  )
}
export default MegaMenuMap;