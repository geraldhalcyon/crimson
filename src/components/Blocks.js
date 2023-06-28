import React from 'react'
import { VideoBanner } from './VideoBanner'
import { HomeAbout } from './HomeAbout'
import { HomeServices } from './HomeServices'

export const Blocks = ({blocks}) => {
  return (
    <div>
        {blocks.map((block, index) => (
            <div key={index}>
                
          { block.blockType === 'video_banner' ? 
            <VideoBanner block={block} />
            : block.blockType === 'home_about' ? 
            <HomeAbout block={block} />
            : block.blockType === 'home_services' ? 
            <HomeServices block={block} /> 
            : '' ? "" : ''}
            </div>
        ))}

    </div>
  )
}
