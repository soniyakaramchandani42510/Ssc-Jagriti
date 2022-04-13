import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Home from './components/Home/Home'
import React, { useEffect, useState } from 'react'
import Clock from './components/Clock/Clock'
import Events from './components/Events/Events'
import Testimonial from './components/Testimonial/Testimonial'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Throwback from './components/Throwback/Throwback'
import Faqs from './components/Faqs/Faqs'
import Announcements from './components/Announcements/Announcements'
import Timeline from './components/Timeline/Timeline'

function App() {
  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()
  const [events, setEvents] = useState()

  let interval

  const startTimer = () => {
    const countDownDate = new Date('April 16,2022 ').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })

  function overView() {
    console.log('timeline')
  }
  function timeLine() {
    console.log('timeline')
  }
  function contacts() {
    console.log('contacts')
  }

  return (
    <>
      <Router>
        <Switch>
          <Route path='/about'>
            <Navbar navbarInvisible />
            <About />
            <Footer />
          </Route>

          <Route path='/events'>
            <Navbar navbarInvisible />
            <Events
              events={events}
              setEvents={setEvents}
              overView={overView}
              timeLine={timeLine}
              contacts={contacts}
            />
            <Footer />
          </Route>

          <Route path='/announcements'>
            <Navbar navbarInvisible />
            <Announcements />
            <Footer />
          </Route>

          <Route path='/timeline'>
            <Navbar navbarInvisible />
            <Timeline />
            <Footer />
          </Route>

          <Route path='/'>
            <Navbar navbarLight />
            <Home />
            <Clock
              timerDays={timerDays}
              timerHours={timerHours}
              timerMinutes={timerMinutes}
              timerSeconds={timerSeconds}
            />
            <Testimonial />
            <Throwback />
            <Faqs />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
