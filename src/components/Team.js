import React from "react";
import Subject from "./Subject";

export default function team() {
 



  
  return (
    <div>
      <section className="section-white">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">Our Teams</h2>

              <p className="section-subtitle">
                Fully Dedicated For Future Scientist
              </p>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQFYazUb8ZrNBQ/profile-displayphoto-shrink_400_400/0/1661492463363?e=1698278400&v=beta&t=eDvqj7gLjgiY4mSFfugqAfNncxfjdHSHUJY7fRABY6c"
                  className="team-img"
                  alt="pic"
                />
                <h3>Akhil Tripathi</h3>
                <div className="team-info">
                  <p className="position">Cofounder SciAstra</p>
                </div>
                <p>
                Mentor, Qualified NEST, Master's Student at NISER
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="linkedin.com/in/akhiltripathisciastra" className="linkedin">
                      <strong className="fa fa-linkedin">in</strong>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="pinterest">
                      <i className="fa fa-pinterest">p</i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook">f</i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dribble">
                      <i className="fa fa-dribbble">d</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQEQuY0lkYhV-w/profile-displayphoto-shrink_400_400/0/1673874765972?e=1698278400&v=beta&t=ikYv47pzcJsBb21h7He_ER02xgQVhAXK3glQMAEqtEI"
                  className="team-img"
                  alt="pic"
                />

                <h3>Vivek Dwivedi</h3>

                <div className="team-info">
                  <p className="position">Founder SciAstra</p>
                </div>

                <p>
                Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="https://www.linkedin.com/in/vivekdwivedisciastra/" className="linkedin">
                      <strong className="fa fa-linkedin">in</strong>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="pinterest">
                      <i className="fa fa-pinterest">p</i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook">f</i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dribble">
                      <i className="fa fa-dribbble">d</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="team-item">
                <img
                  src="https://www.sciastra.com/teams/dr_omkar.jpg"
                  className="team-img"
                  alt="pic"
                />

                <h3>Dr. Omkar Kushwaha</h3>

                <div className="team-info">
                  <p className="position">Mentor & Advisior</p>
                </div>

                <p>
                Principal Project Scientist at Indian Institute of Technology, Madras
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="linkedin.com/in/dr-omkar-kushwaha-28177215" className="linkedin">
                      <strong className="fa fa-linkedin">in</strong>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="pinterest">
                      <i className="fa fa-pinterest">p</i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook">f</i>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="dribble">
                      <i className="fa fa-dribbble">d</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
            <div className="col-md-12 text-center my-5">
              <p className="section-subtitle">Our</p>

              <h2 className="section-title">
              Awesome Team
              </h2>
            </div>
            
            <div className="subject col-sm-6 col-md-4 container">
            {/* slider */}
            <Subject />
            </div>
           

           
            

           
            

            
            

          </div>
        </div>

        
        
      </section>
     

    </div>
  );
}
