import React from 'react'


export default function Home() {
  return (
    <>
        <section className="overflow-hidden inverted border-bottom">
            <div className="d-flex flex-column container min-vh-100 foreground">
                <div className="row align-items-center justify-content-center justify-content-lg-between my-auto">
                    <div className="col-lg-6 col-xl-5 text-center text-lg-start foreground mb-10 mb-lg-0">
                        <img src='assets/images/logolight.svg' className="navbar-brand mt-3 mb-3" alt='Logo' width={200} />
                        <h1 className="display-2 lh-sm">Money on your <span className='text-red'>terms.</span></h1>
                        <p className="lead text-secondary my-4 fw-lg-75">Millions of entrepreneurs and businesses trust Kozipay to help disburse funds and handle payment settlements from anyone, anywhere in the world.</p>
                        <div className="row justify-content-center justify-content-lg-start g-1">
                            <div className="col-auto">
                                <div className="grouped-inputs border p-1 rounded-pill">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control rounded-pill px-3" aria-label="Text input" placeholder="Your email" />
                                        </div>
                                        <div className="col-auto">
                                            <a href className="btn btn-red btn-icon rounded-circle"><i className="bi bi-arrow-return-left" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 position-relative">
                        <div className="card level-1">
                            <div className="card-wrap">
                                <img className="img-fluid" width={320} src="assets/images/koziapp.png" alt="App screen" data-aos="fade-up" data-aos-delay={200} />
                            </div>
                        </div>
                        <img className="position-absolute top-50 start-50 translate-middle level-2" src="https://cube.webuildthemes.com/assets/images/svg/shadow.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
