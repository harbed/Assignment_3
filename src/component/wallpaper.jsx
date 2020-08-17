import React from 'react'

function Wallpaper(props) {
    return (
        <article className="wallpaper">
          <img src= {props.src} alt={props.alt} className="wallpaper" />
        </article>

        // <div>
        //     <article class="wallpaper">
        //     <img src="./img/venom-1.jpg" alt="Wallpaper #1" class="wallpaper" />
        //   </article>

        //   <article class="wallpaper">
        //     <img src="./img/hulk-1.jpg" alt="Wallpaper #1" class="wallpaper" />
        //   </article>

        //   <article class="wallpaper">
        //     <img src="./img/venom-2.jpg" alt="Wallpaper #1" class="wallpaper" />
        //   </article> 
        // </div>
    )
}

export default Wallpaper
