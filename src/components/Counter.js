import React from 'react'

function Counter() {
  return (
    <div>
      <main id="main">
        {/* <!-- ======= Counter Section ======= --> */}
    <div className="section-counter paralax-mf bg-image" style={{ backgroundImage: "url(assets/img/counters-bg.jpg)" }}>
      <div className="overlay-mf"></div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-check"></i></span>
              </div>
              <div className="counter-num">
                <p>4</p>
                <p data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1" className="counter purecounter"></p>
                <span className="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-journal-richtext"></i></span>
              </div>
              <div className="counter-num">
                <p>1.5</p>
                <p data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="counter purecounter"></p>
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-people"></i></span>
              </div>
              <div className="counter-num">
                <p>4</p>
                <p data-purecounter-start="0" data-purecounter-end="550" data-purecounter-duration="1" className="counter purecounter"></p>
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-lg-3">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle"><i className="bi bi-award"></i></span>
              </div>
              <div className="counter-num">
                <p>5</p>
                <p data-purecounter-start="0" data-purecounter-end="48" data-purecounter-duration="1" className="counter purecounter"></p>
                <span className="counter-text">CERTIFICATES EARNED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Counter Section --> */}
      </main>
    </div>
  )
}

export default Counter
