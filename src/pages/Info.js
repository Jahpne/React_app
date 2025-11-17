import React from 'react'
import "../components/info.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee, faFaceSmileWink} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'

function Info() {
 
  return (
    <div className="cs">
      <div className="contact-section1">
         <div className="contact-info1">
             <h2>Info</h2>
              <FontAwesomeIcon icon={faCoffee} />
              <FontAwesomeIcon icon={faFaceSmileWink} />
              <FontAwesomeIcon icon={faInstagram} /> 
             <p> <FontAwesomeIcon icon={faMailBulk} />  <span>wateva@gmail.com</span> </p>
             <p><FontAwesomeIcon icon={faPhone} /> <span>+234 810 242 0781</span></p>
             <p> <FontAwesomeIcon icon={faMailBulk} /> <span>Fuck Off</span></p>
           <br></br>
             <h2>Social Media</h2>
                  <button className="ok"><FontAwesomeIcon icon={faFacebook} />Facebook </button> 
               <button className="ok"><FontAwesomeIcon icon={faWhatsapp} />Whatsapp </button> 
               <button className="ok"><FontAwesomeIcon icon={faTwitter} />Twitter </button> 
               <button className="ok"><FontAwesomeIcon icon={faDiscord} />Discord </button> 
               
               
               
                </div>
       </div>
    </div>
  )
}

export default Info
