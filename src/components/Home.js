import React from "react";
import "./Navbar.css";
import "./Home.css";


function Home() {
  return (
    <>
      <div>
        <section className="hero">
          <div className="hero-content">
          <img className="homeimg" src={require('../Assets/homeimg.png')} />
            {/* <h1 className="hero-heading">Welcome to Jagriti.</h1> */}
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, id</p>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, id</p>
            
          
          
            <div class="box">
  
<button class="btn btn2 button">Explore Events</button>
<button class="btn btn3 button">Workshops</button>
  
  
</div>

           
          </div>

        </section>
       
    
        
     
        
      </div>


      <div className="text-center my-5">
        <h1 class="text-decoration-underline">TESTIMONIALS</h1>
        <p className="px-3 my-3 mx-3 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam unde, iure magnam corporis repellat iste, amet nostrum expedita possimus, veritatis error sed ea? Itaque, quam veritatis facilis ipsam velit tempore.</p>  
        
            
      
      <div id="cover">
      <div class="testimonial">
    <div class="card bg-danger">
      <div class="layer"></div>
      <div class="content">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div class="image"><img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"       alt="avatar"/> 
        </div>
        <div class="details">
          <h2>Someone Famous</h2> <br/> <span>Web Designer</span>
        </div>
             </div>
    </div>
    
        <div class="card bg-warning">
      <div class="layer"></div>
      <div class="content">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div class="image"><img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"       alt="avatar"/> 
        </div>
        <div class="details">
          <h2>Someone Famous</h2> <br/> <span>Graphic Designer</span>
        </div>
             </div>
    </div>
    
        <div class="card bg-primary">
      <div class="layer"></div>
      <div class="content">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div class="image"><img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png"       alt="avatar"/> 
        </div>
        <div class="details">
          <h2>Someone Famous</h2> <br/> <span>Product Designer</span>
        </div>
             </div>
    </div>
    
  </div>
  </div>
  </div>  
  <div className="text-center my-5">
  <h1 class="text-decoration-underline">THROWBACK</h1>
        <p className="px-3 my-3 mx-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam unde, iure magnam corporis repellat iste, amet nostrum expedita possimus, veritatis error sed ea? Itaque, quam veritatis facilis ipsam velit tempore.</p>  

        <div class="container">
  <div class="row">
    <div class="col-sm">
    
      <img class="nature" src={require('../Assets/homeimg.png')} />
    </div>
    <div class="col-sm">
    <img class="nature" src={require('../Assets/homeimg.png')} />
    
    </div>
    <div class="col-sm">
    <img class="nature" src={require('../Assets/homeimg.png')} />
    
    </div>
  </div>
</div>

    </div>


    <div class="content">
        <h1 className=" text-decoration-underline text-center my-5">Frequently Asked   Questions</h1>
  <details >
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






    </>

  );
}

export default Home;
