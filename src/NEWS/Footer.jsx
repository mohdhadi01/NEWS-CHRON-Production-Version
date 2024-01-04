import React from 'react'
import "../NEWS/Footer.css"
import github from "../Assets/github.png"
import linked from "../Assets/linkedin.png"
function Footer() {
  return (
    <div>
        <section className="contact-area" id="contact">
        <div className="container">
            <div className="row">
                    <div className="contact-content text-center">
                        
                        <div className="contact-social">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/mohd-hadi-5a4638226/"><img src={linked} className="hover-target" href="google.com"></img></a></li>
                                <li><a href="https://github.com/mohdhadi01"><img src={github} className="hover-target" href=""></img></a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>Copyright &copy; 2024 Build by Mohd Hadi.</p>
    </footer>
    </div>
  )
}

export default Footer