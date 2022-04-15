import React from 'react'
import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from "../../components/Navbar/Navbar"
const New = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="new-container">
        <Navbar/>
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="" />
          </div>
          <div className="right"> 

          </div>
        </div>
      </div>
    </div>
  )
}

export default New
