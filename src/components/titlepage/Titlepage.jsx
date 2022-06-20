import React from 'react'
import "./titlepage.css"
const Titlepage = () => {
  return (
    <div className='titlepage' id="Home">
      <div className="content">
        <h1>Lorem ipsum dolor sit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sapien non justo venenatis fringilla. Aenean vitae aliquam arcu.</p>
        <button>CONTACT US</button>
      </div>
      <div className="image">
        <img src="/smoke2.gif" alt="" />
      </div>
    </div>
  )
}

export default Titlepage