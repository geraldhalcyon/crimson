import React from 'react'
import { NonhomeAbout } from './page/NonhomeAbout'

export const Pages = ({pages}) => {
  return (
    <div>
        {pages.map((page, index) => (
            <div key={index}>
                
          { page.pageType === 'nonhome_about' ? 
            <NonhomeAbout page={page} />
            : page.pageType === 'nonhome_rooms_suites' ? 
            <NonhomeAbout page={page} />
            : '' ? "" : ''}
            </div>
        ))}

    </div>
  )
}
