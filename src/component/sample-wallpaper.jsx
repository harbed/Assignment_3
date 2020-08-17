import React from 'react'
import venom1 from '../image/venom-1.jpg'
import hulk from '../image/hulk-1.jpg'
import venom2 from '../image/venom-2.jpg'
import Wallpaper from './wallpaper'


function SampleWallpaper() {
    return (
        <div className="sample-wallpaper">
          <article className="wallpaper">
            <img src={venom1} alt="Wallpaper #1" className="wallpaper" />
          </article>

          
          <article className="wallpaper">
            <img src={hulk} alt="Wallpaper #1" className="wallpaper" />
          </article>

          <article className="wallpaper">
            <img src={venom2} alt="Wallpaper #1" className="wallpaper" />
          </article>
        </div>
    )
}

export default SampleWallpaper
