import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from "react-bootstrap";

function Contact() {
  const [isLoading, SetLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    SetLoading(true)
    e.preventDefault();
    emailjs.sendForm("service_jmx03jp", "template_odobd0v", form.current, "59iJRXKiAxT5F25-3")
       .then((result) => {
        // console.log(result)
       const response = JSON.stringify(result);
        console.log(response);
        if (result.status === 200) {
          SetLoading(false)
          toast("Your message to Irankunda has been sent successfully")
        } else if (result.status =! 200){
          SetLoading(false)
          toast("technical error")
        }
        //show user success mesage
        // how to change my result into a jsonif format 
        // then call it back, make an if-sst
       }, (error) => {
       const response = JSON.stringify(error);
         console.log(response);
         if (error.status === 0) {
          SetLoading(false)
          toast(error.text)
        } else if (error.status =! 200){
          SetLoading(false)
          toast("technical error")
        }
       });
  };
  return (
    <div>
      <ToastContainer />
      <main id="main">
        {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send Message to me
                      </h5>
                    </div>
                    <div>
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" name="from_name" className="form-control" id="from_name" placeholder="Your Email" required />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name=" from_email" id="email" placeholder="Your Name" required />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="reply_to" id="subject" placeholder="Subject" required />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                          </div>
                          <div><br /></div>
                          <div className="col-md-12 text-center">
                            { 
                            isLoading ? <button className="button button-a button-big button-rouded"><Spinner animation="border" variant="light" /></button> : <button type="submit" className="button button-a button-big button-rouded" value="Send">Send Message</button>
                            }
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                      While i’am good with smoke signals, there are simpler ways for me to get in touch with you.
                        If you have any question or querries i will always be happy to respond, feel free to contact me by telephoone or email and am sure to get back to you as soon as possible.
                      </p>
                      <ul className="list-ico">
                        <li><span className="bi bi-geo-alt"></span> KAMPALA CITY UGANDA</li>
                        <li><span className="bi bi-phone"></span> <a href="tel:+256771289654">+25677189654</a></li>
                        <li><span className="bi bi-envelope"></span> <a href="mailto:rankunda48@gmail.com">rankunda48@gmail</a></li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li><a href="https://wa.me/qr/FXOLHHJBOCBFO1"><span className="ico-circle"><i className="bi bi-whatsapp"></i></span></a></li>
                        <li><a href="https://www.instagram.com/lrankslnno?r=nametag"><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                        <li><a href="https://twitter.com/InnoIranks?t=jj8jiHPBCCnDXpfVAc8XGg&s=08"><span className="ico-circle"><i className="bi bi-twitter"></i></span></a></li>
                        <li><a href="https://www.linkedin.com/in/rankunda-ino-334131223"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>

    </div>
  )
}

export default Contact
