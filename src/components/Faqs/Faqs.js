import React from 'react'
import '../Home/Home'
import './Faq.css'

function Faqs() {
  return (
    <div class='content faqOuter'>
      <h1 className='text-center my-5'>Frequently Asked Questions</h1>
      <details>
        <summary>When is Jagriti 22' going to be held?</summary>
        <div class='faq__content'>
          <p>
            Jagriti 22’ is scheduled to be held from 15th April-17th April 2022.
          </p>
        </div>
      </details>
      <details>
        <summary>Will Jagriti 22’ be offline or online?</summary>
        <div class='faq__content'>
          <p>Jagriti 22’ will be held in a completely online mode.</p>
        </div>
      </details>
      <details>
        <summary>
          Is the participation in events/guest talks/workshops paid?
        </summary>
        <div class='faq__content'>
          <p>Everything is completely free.</p>
        </div>
      </details>
      <details>
        <summary>Can I register for multiple Events?</summary>
        <div class='faq__content'>
          <p>Yes, you can register for multiple Events.</p>
        </div>
      </details>
      <details>
        <summary>How to keep oneself updated?</summary>
        <div class='faq__content'>
          <p>
            Please follow our instagram, facebook and linkedin handles under the
            name Jagriti for all updates.
          </p>
        </div>
      </details>
    </div>
  )
}

export default Faqs
