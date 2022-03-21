import React from 'react'
import './about.css'
import sahyogLogo from '../../Assets/sahyog-logo.png'
import kuLogo from '../../Assets/ku-logo.png'
import spcLogo from '../../Assets/spc-logo.png'
import hhcLogo from '../../Assets/hhc-logo.png'

function About() {
  return (
    <>
      <div className='aboutOuter'>
        <section className='container-fluid react1 aboutInner'>
          <h1 className='text-center font-weight-bolder hey'>
            What is Jagriti?
          </h1>
          <p className='lead text-center'>
            Jagriti is an enlightening and edifying annual social service fest
            concentrated primarily on raising awareness through an assortment of
            educative and profound thinking events. We conduct an array of
            events circulating the theme of social issues. Jagriti is an elixir
            to self-contentment wherein we help the underprivileged, borrowing
            time and drawing attention from our surplus lives.
          </p>
        </section>
      </div>
      <div className='container-fluid react'>
        <h1 className='text-center font-weight-bolder hey'>
          Social Service Council
        </h1>
        <p className='lead text-center'>
          Social Service Council, IIT (BHU) Varanasi embraces all the clubs
          dedicated to bringing about positive changes in our society's social
          aspects. We are committed to developing and disseminating professional
          knowledge, critical analysis and drafting innovative solutions,
          consequently contributing to overall responsive social welfare. We
          believe that the inherent humane qualities and the spirit of
          volunteerism already existent in every individual needs to be nurtured
          and further developed, thereby blooming out with the full potential to
          benefit the society as a whole.
        </p>
      </div>
      <div className='clubDetails'>
        <div className='cardOuter'>
          <div className='card'>
            <div className='image'>
              <img src={sahyogLogo} alt='avatar' />
            </div>
            <div className='details'>
              <h2>Sahyog Club</h2> <br />
            </div>
            <p>
              Sahyog Club, with a mission of "improving quality education in
              government schools," collaborates with school teachers to improve
              the basic literacy and numeracy skills of children, leading to
              uplift their family conditions and background.
            </p>
          </div>
        </div>
        <div className='cardOuter'>
          <div className='card'>
            <div className='image'>
              <img src={kuLogo} alt='avatar' />
            </div>
            <div className='details'>
              <h2>Kashi Utkarsh</h2> <br />
            </div>
            <p>
              Kashi Utkarsh, as the name suggests, is the development of Kashi.
              The development is a process that creates growth and positive
              change, and the volunteers of Kashi Utkarsh strive to get this
              change in bastis (slums). The prime motto of Kashi Utkarsh is to
              improve the quality of life of basti people by alleviating poverty
              through children's education.
            </p>
          </div>
        </div>
        <div className='cardOuter'>
          <div className='card'>
            <div className='image'>
              <img src={spcLogo} alt='avatar' />
            </div>
            <div className='details'>
              <h2>Social Projects' Club</h2> <br />
            </div>
            <p>
              Social Projects' Club has taken the challenge of empowering
              society by employing simple and effective methods. We identify the
              public's problems and incorporate our technical skills with proper
              planning and strategy to come up with innovative solutions.
            </p>
          </div>
        </div>
        <div className='cardOuter'>
          <div className='card'>
            <div className='image'>
              <img src={hhcLogo} alt='avatar' />
            </div>
            <div className='details'>
              <h2>Health and Hygiene Club</h2> <br />
            </div>
            <p>
              The Health & Hygiene club promotes and advocates a safe and
              healthy environment for the society. Our various initiatives
              involve organising blood donation camps, medicine collection drive
              and spreading awareness on sensitive issues such as menstruation,
              diseases, healthy habits, sustainability, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
