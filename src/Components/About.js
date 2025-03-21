function Abouthero() {
    return (
        <>
            <section className="aboutme-hero">
                <img
                    src={`${process.env.PUBLIC_URL}/images/aboutme-hero.png`}
                    alt="Education banner"
                    className="" width='100%' height='550px'
                />
            </section>
        </>
    );
}
function Aboutme() {
    return (
        <>
            <section className="container ">
                <div className="">
                    <div className="d-flex mb-4 mt-3 justify-center align-items-center gap-3">
                        <h1 className="fw-bold fs-3 aboutme-name">About Me</h1>
                        <span className="w-100 line-decor" />
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="">
                                <figure className="">
                                    <img src={`${process.env.PUBLIC_URL}/images/sidd.png`} alt="developer" className="img-fluid figure-img" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="">
                                <h1 className="text-dark rounded fw-bold mb-3">Siddharth D. Budgude</h1>
                                <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .</p>
                                <div className="d-flex gap-2">
                                    <button className="btn mt-3 mt-md-3 px-4 py-3 fw-bold">Checkout My Portfolio</button>
                                    <button className="btn mt-3 mt-md-3 px-4 py-3 fw-bold">Contact ME</button>
                                    <button className="btn mt-3 mt-md-3 px-4 py-3 fw-bold">Hire Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
function Education() {
    return (
        <>
            <section className='Path-learn bg-gray container'>
                <div className="">
                    <div className="d-flex mb-4 mt-3 justify-center align-items-center gap-3">
                        <h1 className="fw-bold fs-3 about-work">Education</h1>
                        <span className="w-100 line-decor" />
                    </div>
                </div>
                <div className='container path-container'>
                    <div className='row  flex flex-lg-nowrap mx-2 mx-md-0 my-3 gap-3 gap-md-3'>
                        <div className='path-card col-sm-12   col-lg-3  bg-dark p-3 text-center rounded'>
                            <a href="" className="btn btn-outline-light btn-floating m-1">
                                <i className="fa-solid fa-book-open"></i>

                            </a>
                            <h1 className="text-light fs-4 fw-bold m-2">SSC (Secondary School Certificate)</h1>
                            <p className="text-light fs-6 m-0">Achieved 71% in 2017.  Developed a foundational understanding of science, mathematics, and analytical skills that sparked my interest in technical problem-solving.</p>

                        </div>
                        <div className='path-card col-sm-12   col-lg-3 bg-dark p-3 text-center rounded '>
                            <a href="#" className="btn btn-outline-light btn-floating m-1">
                                <i className="fa-solid fa-award"></i>
                            </a>
                            <h1 className="text-light fs-4 fw-bold m-2">HSC (Higher Secondary Certificate)</h1>
                            <p className="text-light fs-6 m-0">Secured 56.60% in 2019 with a specialization in Maths.This phase strengthened my knowledge in key areas like subjects, e.g., physics, chemistry, Information Technology (IT), preparing me for higher education</p>
                        </div>
                        <div className='path-card col-sm-12   col-lg-3 bg-dark p-3 text-center rounded '>
                            <a href="#" className="btn btn-outline-light btn-floating m-1">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </a>
                            <h1 className="text-light fs-4 fw-bold m-2">Bachelor's Degree</h1>
                            <p className="text-light fs-6 m-0">Graduated in Computer Science from Pune university with 8.5 CGPA focusing on Skil development and coding best practices.Focused on subjects like Maths, RDBMS and Java and completed. Developed problem-solving, teamwork, and project management skills</p>
                        </div>
                        <div className='path-card col-sm-12   col-lg-3 bg-dark p-3 text-center rounded '>
                            <a href="#" className="btn btn-outline-light btn-floating m-1">
                                <i className="fa-solid fa-user-graduate"></i>
                            </a>
                            <h1 className="text-light fs-4 fw-bold m-2">Master's Program (Pursuing)</h1>
                            <p className="text-light fs-6 m-0">Currently enrolled in masters in computer science at Pune university. Exploring advanced concepts and real-world applications in web development.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
function Skills() {
    return (
        <>
            <section className="container skill">
                <div className="d-flex mb-5 justify-center align-items-center gap-3">
                    <h1 className="fw-bold fs-3">Skills</h1>
                    <span className="w-100 line-decor" />
                </div>
                <div className="d-flex flex-wrap">
                    <figure className="  w-50 w-md-25 p-2 h-100" >
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/html-logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">HTML</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2 h-100">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/CSS-Logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">CSS</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2 h-100">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/Tailwind-css-logo.png`}  alt="skill-one" className="" />
                            <figcaption className="fw-bold">TAILWIND CSS</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2 h-100">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/bootstrap-5-logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">BOOTSTRAPP</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2 h-100">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/javaScript-Logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">JAVASCRIPT</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/jquery-logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">JQUERY</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/React-logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">REACT JS</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/Figma-Logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">FIGMA</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/canva-logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">CANVA</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/Wordpress-logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">WORDPRESS</figcaption>
                        </div>
                    </figure>
                    <figure className="  w-50 w-md-25 p-2">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/magento-logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">MAGENTO2</figcaption>
                        </div>
                    </figure>
                    <figure className="   w-50 w-md-25 p-2">
                        <div className="shadow-lg p-4 rounded d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                            <img src={`${process.env.PUBLIC_URL}/images/GitHub-logo.png`} alt="skill-one" className="" />
                            <figcaption className="fw-bold">GITHUB</figcaption>
                        </div>
                    </figure>
                </div>
            </section>
        </>
    );
}
function Workexperience() {
    return (
        <>
            <section className="container ">
                <div className=" row">
                    <div className="">
                        <div className="d-flex mb-4 mt-3 justify-center align-items-center gap-3">
                            <h1 className="fw-bold fs-3 about-work">Work Experiences</h1>
                            <span className="w-100 line-decor" />
                        </div>
                    </div>
                    <div className="row w-100 p-0 position-relative">
                        <div className="col-3 position-sticky">
                            <section className="work-experience-hero">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/aboutme-hero.png`}
                                    alt="Education banner"
                                    className="" width='100%' height='450px'
                                />
                            </section>
                        </div>
                        <div className="col-9 ">
                            <div className="w-100 shadow-lg p-3 rounded mb-4">
                                <h1 className="fs-2 fw-bold mb-2">Ui Developer Intern</h1>
                                <h3 className="fs-5">Coditron Technologies</h3>
                                <h5 className="fs-6 fw-bold">March-2023 - August-2023</h5>
                                <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
                                <span className="d-flex flex-wrap gap-2 skill-tag mt-2">
                                    <p>HTML</p>
                                    <p>Css</p>
                                    <p>Bootstrap</p>
                                    <p>JavaScript</p>
                                    <p>JQuery</p>
                                    <p>Figma</p>
                                    <p>Wordpress</p>
                                    <p>Elementor</p>
                                    <p>Git</p>
                                    <p>Git Hub</p>
                                </span>
                            </div>
                            <div className="w-100 shadow-lg p-3 rounded mb-4">
                                <h1 className="fs-2 fw-bold">Ui Designer</h1>
                                <h3 className="fs-5">Coditron Technologies</h3>
                                <h5 className="fs-6 fw-bold">August-2023 - December-2024</h5>
                                <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
                                <span className="d-flex flex-wrap gap-2 skill-tag mt-2">
                                    <p>HTML</p>
                                    <p>Css</p>
                                    <p>Bootstrap</p>
                                    <p>Tailwind Css</p>
                                    <p>JavaScript</p>
                                    <p>JQuery</p>
                                    <p>React Js</p>
                                    <p>Canva</p>
                                    <p>Figma</p>
                                    <p>Prototyping</p>
                                    <p>Responsive Web Design</p>
                                    <p>App Designes</p>
                                    <p>Wordpress</p>
                                    <p>Elementor</p>
                                    <p>Git</p>
                                    <p>Git Hub</p>
                                </span>
                            </div>
                            <div className="w-100 shadow-lg p-3 rounded mb-4">
                                <h1 className="fs-2 fw-bold">Web Developer</h1>
                                <h3 className="fs-5">Coditron Technologies</h3>
                                <h5 className="fs-6 fw-bold">January-2025</h5>
                                <p className="text-secondary">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr</p>
                                <span className="d-flex flex-wrap gap-2 skill-tag mt-2">
                                    <p>HTML</p>
                                    <p>Css</p>
                                    <p>Bootstrap</p>
                                    <p>Tailwind Css</p>
                                    <p>JavaScript</p>
                                    <p>JQuery</p>
                                    <p>React Js</p>
                                    <p>Responsive Web Development</p>
                                    <p>Canva</p>
                                    <p>Figma</p>
                                    <p>Prototyping</p>
                                    <p>Responsive Web Design</p>
                                    <p>App Designes</p>
                                    <p>Magento2</p>
                                    <p>Wordpress</p>
                                    <p>Elementor</p>
                                    <p>Git</p>
                                    <p>Git Hub</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default function About() {
    return (
        <>
            <Abouthero />
            <Aboutme />
            <Education />
            <Skills />
            <Workexperience />
        </>
    );
}