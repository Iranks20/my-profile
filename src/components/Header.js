
import React from 'react'



function Header() {
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('INNOCENT.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'INNOCENT.pdf';
          alink.click();
      })
      })
  }
  return (
    <div>
          {/* <!-- ======= Header ======= --> */}
          <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">my folio</a></h1>
      {/* Uncomment below if you prefer to use an image logo  */}
      {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a> */}

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#work">Work</a></li>
          <li><a class="nav-link scrollto " href="#blog">Blog</a></li>
         
         
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Hero Section ======= --> */}
  <div id="hero" className="hero route bg-image" style={{ backgroundImage: "url(assets/img/hero-bg8.jpg)" }}>
    <div className="overlay-itro"></div>
    <div className="hero-content display-table">
      <div className="table-cell">
        <div className="container">
          <p className="display-6 color-d">Hello, world!</p>
          <h1 className="hero-title mb-4">I AM IRANKUNDA INNOCENT</h1>
          <p className="hero-subtitle"><span className="typed" data-typed-items="Designer,Full stack Developer, Freelancer, "></span></p>
           <button className="btn btn-primary btn js-scroll px-4" role="button" onClick={onButtonClick}> Download CV</button> 
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Hero Section --> */}



  
    </div>
  )
}

export default Header;
