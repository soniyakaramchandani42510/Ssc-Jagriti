import React from "react";
import "./Navbar.css";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <section className="hero">
          <div className="hero-content">
          
            <h1 className="hero-heading">Welcome to Jagriti.</h1>
          
            <div class="box">
  
<button class="btn btn2">Explore Events</button>
<button class="btn btn3">Workshops</button>
  
  
</div>

            {/* <p>Best websites for developing companies.</p> */}

          </div>
        </section>
       
    
        
        <div class="content">
        <h1 className="FAQS">FAQS</h1>
  <details open>
  <summary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quod.</summary>
  <div class="faq__content">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima dolorem possimus esse? Sapiente minima laboriosam velit a nisi omnis.</p>
  </div>
</details>
<details>
  <summary>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos?</summary>
  <div class="faq__content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur non ullam blanditiis at sed dolore expedita saepe quod voluptate!</p>
  </div>
</details>
<details>
  <summary>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, obcaecati!</summary>
  <div class="faq__content">
    <p>Answer 3</p>
  </div>
</details>
</div>
        
      </div>
    </>
  );
}

export default Home;
