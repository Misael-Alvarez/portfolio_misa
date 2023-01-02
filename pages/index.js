import Layout from "../components/Layout";
import Link from "next/link";
import { skills,experiences,projects,posts } from "../public/profile";

const Index = () => (
    <Layout>
        {/**Header Card*/}
        <header className="row">
            <div className="col-md-12">
            <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="misa.jpg" alt="Profile" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Misael Alvarez</h1>
                            <h3>Data Scientist</h3>
                            <p>Applied Mathematics Student, Beta Microsoft Learn Student Ambassadors and Data Scientist at Banorte</p>
                            <a href="https://www.linkedin.com/in/misael-alvarez-08a9211b4/" target="_blank" className="btn btn-outline-light">LinkedIn</a>
                            <a href="https://www.youtube.com/channel/UCn7RUg4ojIz5K_XT2CpWGow" target="_blank" className="btn btn-outline-light"> Youtube</a>
                            <a href="https://instagram.com/misaelalvarezca?igshid=Zjc2ZTc4Nzk=" target="_blank" className="btn btn-outline-light"> Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/**Second Section*/}
        <div className="row py-2">
            <div className="col-md-6">
                <div className="card bg-light"> 
                    <div className="card-body">
                        <h1>Skills</h1>
                        <h3>Programming Languages</h3>
                        <ul>
                            <li>Python  <b>(4 years)</b></li>
                            <li>C/C++ <b>(3 year)</b></li>
                            <li>SQL <b>(2 years)</b></li>
                            <li>R <b>(2 years)</b></li>
                            <li>Julia <b>(5 months)</b></li>

                        </ul>
                        <h3>Data Science</h3>
                        <ul>
                            <li>Data Analysis</li>
                            <li>Data Visualization</li>
                            <li>Data Cleaning</li>
                            <li>Data Wrangling</li>
                            <li>Machine Learning</li>
                            <li>Deep Learning</li>
                            <li>Computer Vision</li>
                        </ul>
                        <h3>Frameworks</h3>
                        <ul>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Bootstrap</li>
                        </ul>
                        <h3>Tools</h3>
                        {
                            skills.map(({skill, percentage}, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: `${percentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <p>I am a Data Scientist at Banorte, I am currently studying Applied Mathematics at the Metropolitan Autonomous University  (UAM) and I am a Beta Microsoft Learn Student Ambassador.</p>
                        <h3>Education</h3>
                        <h5>December 2019 - Present</h5>
                        <ul>
                            <li>Metropolitan Autonomous University - BS in Applied Mathematics</li>
                        </ul>
                        <h3>Work Experience</h3>
                        <ul>
                            {
                                experiences.map(({title, description, from, to}, i) => (
                                    <li key={i}>
                                        <h5>{title}</h5>
                                        <h6>{from} - {to}</h6>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                            <a href="https://www.linkedin.com/in/misael-alvarez-08a9211b4/" className="btn btn-light">Know more</a>

                    </div>
                </div>
            </div>
        </div>

        {/**Portfolio*/}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark text-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({name, description, image, url}, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image
                                            }`} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href={url}>Know more</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="text-center mt-4">
                    <a href="https://github.com/Misael-Alvarez" className="btn btn-outline-secondary">More projects</a>
                </div>


            </div>
        </div>

            
    </Layout>
)

export default Index;