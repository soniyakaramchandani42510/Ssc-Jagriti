import React, { useState } from 'react'
import background1Image from '../../../Assets/background1.png'
import questionBackground from '../../../Assets/questionBackground.jpg'

const EventCard = ({ event }) => {
  const [currentTab, setCurrentTab] = useState('overview')

  return (
    <div className='eventCard'>
      <img src={background1Image} className='eventCardImg' />
      <div className='card event-card'>
        <div className='eventCardOuterMax'>
          <div className='eventCardOuter'>
            <div>
              <img id='images' src={questionBackground} alt='' />
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
              </div>
              {/* <div className='dropdown e-dropdown'>
                    <div
                      className=' card-title dropdown-toggle'
                      type='button'
                      id='dropdownMenu2'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Overview
                    </div>
                    <div
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenu2'
                    >
                      <button
                        className='dropdown-item'
                        type='button'
                        onClick={overView}
                      >
                        Overview
                      </button>
                      <button
                        className='dropdown-item'
                        type='button'
                        onClick={timeLine}
                      >
                        Timeline
                      </button>
                      <button
                        className='dropdown-item'
                        type='button'
                        onClick={contacts}
                      >
                        Contacts
                      </button>
                    </div>
                  </div> */}

              <div
                className={`card-text event-text cardText ${
                  currentTab === 'contacts' ? 'cardContactsText' : ''
                }`}
              >
                {currentTab === 'overview'
                  ? event?.content
                  : currentTab === 'contacts'
                  ? event?.contacts.map((contact) => (
                      <div className='contactsOuter'>
                        <div className='contactName'>{contact?.name}</div>
                        <div className='contactNumber'>{contact?.mobile}</div>
                      </div>
                    ))
                  : ''}
              </div>
              <div className='eventButtons'>
                <button>Registration: Opens soon!</button>
                {/* <div className='col-sm'>
                      <a id='problem' href='#' className='btn'>
                        View Problem Statement
                      </a>
                    </div>
                    <div className='col-sm'>
                      <a id='register' href='#' className='btn btn-danger'>
                        Register
                      </a>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
