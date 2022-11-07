
import React from 'react'

function About() {
  return (
    <div>
      <main id="main">
         {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img src="assets/img/hero-bg2.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p><span className="title-s">Name: </span> <span>IRANKUNDA INNOCENT</span></p>
                        <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                        <p><span className="title-s">Email: </span> <span>rankunda48@gmail.com</span></p>
                        <p><span className="title-s">Phone: </span> <span>+256771289654</span></p>
                        <p><span className="title-s">Date of Birth: </span> <span>24-10-2000</span></p>
                        <p><span className="title-s">GitHub: </span> <span>https://github.com/Iranks20</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>HTML</span> <span className="pull-right">80%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar"  style={{ width: "80%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>CSS3</span> <span className="pull-right">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar"  style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>JAVASCRIPT</span> <span className="pull-right">50%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>REACT.JS</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>FLASK</span> <span className="pull-right">60%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <span>PHP</span> <span className="pull-right">30%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: "30%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About me
                      </h5>
                    </div>
                    <p className="lead">
                      Passionate Information and financial technology professional with 1 year experience of dealing in solving complex problems
                      . Currently am a free lancer and open to work.
                      For mor information about my projects you can follow my github account link below: https://github.com/Iranks20
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End About Section --> */}
      </main>
    </div>
  )
}

export default About
