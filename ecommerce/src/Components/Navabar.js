import React, { useState } from "react";
import './Navbar.css'
import Avatar from '../Assets/Images/image-avatar.png'

function Navbar(pops){
    let itemCount
    itemCount = pops.item.itemNumber
    console.log(itemCount)
    const NotificationIcon =
    (<div className='cart pointer' onClick={pops.click} style={{ position: 'relative' }}>
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
      <div className={pops.item.itemNumber ? 'counter--show': 'counter--hide'}>
        {itemCount} 
      </div>
    </div>)
    
    const [activeNav, setActiveNav] = useState('nav-1')

    function activateNav(event){
        setActiveNav(event.target.id)
    }
    return(
        <div className='nav' >
            {pops.popUp}
            <h1 className='nav--title'>sneakers</h1>
            <div className='nav--navbars'>
                <ul className='nav--contents pointer'>
                    <li onClick={activateNav} id='nav-1'className={activeNav==='nav-1'? "active cont": "nav--collections cont"}>Collections</li>
                    <li onClick={activateNav} id="nav-2" className={activeNav==='nav-2'? "active cont": "nav--men cont"}>Men</li>
                    <li onClick={activateNav} id="nav-3" className={activeNav==='nav-3'? "active cont": "nav--women cont"}>Women</li>
                    <li onClick={activateNav} id="nav-4" className={activeNav==='nav-4'? "active cont": "nav--about cont"}>About</li>
                    <li onClick={activateNav} id="nav-5" className={activeNav==='nav-5'? "active cont": "nav--contact cont"}>Contact</li>
                </ul>
            </div>
            <div className='nav--status pointer'>
                <div>
                    {NotificationIcon}
                </div>
                <div id='nav--avatar'>
                    <img  src={Avatar} alt="Avatar"/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;