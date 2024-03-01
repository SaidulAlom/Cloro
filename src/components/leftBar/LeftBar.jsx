import React from 'react'
import "./leftBar.scss"
import profile from "../navbar/2023-06-11.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faPeopleGroup, faShop, faFilm, faStopwatch, faGamepad, faCalendarDays, faPhotoFilm, faVideo, faMessage } from '@fortawesome/free-solid-svg-icons';

const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={profile} alt="" />
            <span>Saidul Alom</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Friends</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span>Groups</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faShop} />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faFilm} />
            <span>Watch</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faStopwatch} />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>Events</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faGamepad} />
            <span>Gaming</span>
          </div>
          <div className="item">
              <FontAwesomeIcon icon={faPhotoFilm} />
              <span>Gallery</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faVideo} />
              <span>Videos</span>
            </div>
            <div className="item">
              <FontAwesomeIcon icon={faMessage} />
              <span>Messages</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar