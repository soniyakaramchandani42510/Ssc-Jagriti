import React, { useState } from 'react'
import background1Image from '../../../Assets/background1.png'
import background2Image from '../../../Assets/background2.png'
import background3Image from '../../../Assets/background1.png'
import background4Image from '../../../Assets/background2.png'
import background5Image from '../../../Assets/background1.png'
import questionBackground from '../../../Assets/questionBackground.jpg'

const EventCard = ({ event, cardNumber }) => {
  const [currentTab, setCurrentTab] = useState('overview')
  const isMobile = window?.outerWidth < 775

  const imgUrls = [
    background1Image,
    background2Image,
    background3Image,
    background4Image,
    background5Image,
  ]

  return (
    <div className='eventCard'>
      <img src={imgUrls[cardNumber]} className='eventCardImg' alt="Background"/>
      <div className='card event-card'>
        <div className='eventCardOuterMax'>
          <div className='eventCardOuter'>
            <div>
              <img
                id='images'
                src={
                  event.image
                    ? isMobile
                      ? event.imageMobile
                      : event.image
                    : questionBackground
                }
                alt=''
              />
            </div>
            <div className='card-body event-body'>
              <div className='cardTitle'>{event?.name}</div>
              <div className='row event-title card-title cardTitles'>
                <div id='overview' onClick={() => setCurrentTab('overview')}>
                  Overview
                </div>
                {/* <div id='timeline' onClick={timeLine}>
                        Timeline
                      </div> */}
                <div id='contacts' onClick={() => setCurrentTab('contacts')}>
                  Contacts
                </div>
                {/* <div id='timeline' onClick={() => setCurrentTab('timeline')}>
                  Timeline
                </div> */}
              </div>
              <div
                className={`card-text event-text cardText ${
                  currentTab === 'contacts' ? 'cardContactsText' 
                  : currentTab === 'timeline' ?'cardContactsText ':''}` }
              >
                {currentTab === 'overview'
                  ? event?.content
                  : currentTab === 'contacts'
                  ? event?.contacts.map((contact, index) => (
                      <div className='contactsOuter' key={contact.name + index}>
                        <div className='contactName'>{contact?.name}</div>
                        <div className='contactNumber'>{contact?.mobile}</div>
                      </div>
                    ))
                  // : currentTab === 'timeline'
                  // ? event?.timeline.map((timeline,index)=>(
                  //   <div className='timelineContent'>
                  //       <div className='timelineDate'>{timeline?.date}</div>
                  //       <div className='timelineDesc'>{timeline?.desc}</div>
                  //     </div>
                    
                  // ))
                 : '' }
              </div>
              <div className='eventButtons'>
                {event?.registrationLink ? (
                  <a href={event?.registrationLink} target='_blank' rel="noreferrer">
                    <button className='activeBtn'>Register Now</button>
                  </a>
                ) : (
                  <button className='disabledBtn'>
                    {'Registration: Opens soon!'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
