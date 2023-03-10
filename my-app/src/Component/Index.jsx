import React from "react";

function Index() {

    return (
        
<div class="container-xxl bg-white p-0">
       
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" style={{width: "3rem; height: 3rem"}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
       
 <div class="container-xxl position-relative p-0">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="/" class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa fa-search me-2"></i>Shikayat<span class="fs-5">Kendra</span></h1>
                    
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="/" class="nav-item nav-link active">Home</a>
                        <a href="/notes" class="nav-item nav-link">ComplaintBox</a>
                    </div>
                   </div>
            </nav>

            <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="text-white mb-4 animated zoomIn">One stop solution to see and address Customer Complaints rapidly</h1>
                            <p class="text-white pb-3 animated zoomIn">Complaint Management System can help businesses improve customer satisfaction, protect their reputation, and drive continuous improvement.Overall, resolving complaints can help businesses build stronger relationships with their customers </p>
                            <a href="/notes" class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Complaint-Box</a>
                            <a href="https://www.linkedin.com/in/shriyansh-gaur-82b969a6/" class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Me</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-start">
                            <img class="img-fluid" src="img/hero.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
<div class="modal fade" id="searchModal" tabindex="-1">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content" style={{background: "rgba(29, 29, 39, 0.7)"}}>
                    <div class="modal-header border-0">
                        <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex align-items-center justify-content-center">
                        <div class="input-group" style={{maxWidth: "600px;"}}>
                            <input type="text" class="form-control bg-transparent border-light p-3" placeholder="Type search keyword"/>
                            <button class="btn btn-light px-4"><i class="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="section-title position-relative mb-4 pb-2">
                            <h6 class="position-relative text-primary ps-4">About Us</h6>
                            <h2 class="mt-2">The best Complaint Management solution for your company</h2>
                        </div>
                        <p class="mb-4">
                        A Complaint Management System is necessary for businesses to effectively manage and resolve customer complaints. It helps improve customer satisfaction, protect a business's reputation, and drive continuous improvement. By acknowledging and addressing complaints in a timely and effective manner, businesses can build stronger relationships with their customers and demonstrate their commitment to providing a positive experience. Additionally, having a formal process for managing complaints is often required by regulatory bodies and can help protect businesses from legal action.
                            </p>
                            <div class="row g-3">
                            <div class="col-sm-6">
                                <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>Customer satisfaction</h6>
                                <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Business improvement</h6>
                            </div>
                            <div class="col-sm-6">
                                <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>Legal protection</h6>
                                <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Improved trust</h6>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container px-lg-5">
                <div class="row align-items-center" style={{ height: "250px"}}>
                    <div class="col-12 col-md-6">
                        <h3 class="text-white">Ready to get started</h3>
                        <div class="position-relative w-100 mt-3">
                        <a href="/notes" class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Complaint-Box</a>
                            
                         </div>
                    </div>
                    <div class="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img class="img-fluid mt-5" style={{ height: "250px"}} src="img/newsletter.png"/>
                    </div>
                </div>
            </div>
        </div>
   
       
           
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h2 class="mt-2">Features</h2>
                </div>
                <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                   
                </div>
                <div class="row g-4 portfolio-container">
                    <div class="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div class="position-relative rounded overflow-hidden">
                            <img class="img-fluid w-100" src="img/portfolio-1.jpg" alt=""/>
                            <div class="portfolio-overlay">
                                <a class="btn btn-light" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i class="fa fa-plus fa-2x text-primary"></i></a>
                                <div class="mt-auto">
                                    <small class="text-white"><i class="fa fa-folder me-2"></i>Customer satisfaction</small>
                                    <a class="h5 d-block text-white mt-1 mb-0" href="/">Better retainment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div class="position-relative rounded overflow-hidden">
                            <img class="img-fluid w-100" src="img/portfolio-2.jpg" alt=""/>
                            <div class="portfolio-overlay">
                                <a class="btn btn-light" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i class="fa fa-plus fa-2x text-primary"></i></a>
                                <div class="mt-auto">
                                    <small class="text-white"><i class="fa fa-folder me-2"></i>Reputation management</small>
                                    <a class="h5 d-block text-white mt-1 mb-0" href="/">More customers</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div class="position-relative rounded overflow-hidden">
                            <img class="img-fluid w-100" src="img/portfolio-3.jpg" alt=""/>
                            <div class="portfolio-overlay">
                                <a class="btn btn-light" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i class="fa fa-plus fa-2x text-primary"></i></a>
                                <div class="mt-auto">
                                    <small class="text-white"><i class="fa fa-folder me-2"></i>Business improvement</small>
                                    <a class="h5 d-block text-white mt-1 mb-0" href="/">Revenue genertion</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div class="position-relative rounded overflow-hidden">
                            <img class="img-fluid w-100" src="img/portfolio-4.jpg" alt=""/>
                            <div class="portfolio-overlay">
                                <a class="btn btn-light" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i class="fa fa-plus fa-2x text-primary"></i></a>
                                <div class="mt-auto">
                                    <small class="text-white"><i class="fa fa-folder me-2"></i>Compliance</small>
                                    <a class="h5 d-block text-white mt-1 mb-0" href="/">Good word</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div class="position-relative rounded overflow-hidden">
                            <img class="img-fluid w-100" src="img/portfolio-5.jpg" alt=""/>
                            <div class="portfolio-overlay">
                                <a class="btn btn-light" href="img/portfolio-5.jpg" data-lightbox="portfolio"><i class="fa fa-plus fa-2x text-primary"></i></a>
                                <div class="mt-auto">
                                    <small class="text-white"><i class="fa fa-folder me-2"></i>Positive word-of-mouth</small>
                                    <a class="h5 d-block text-white mt-1 mb-0" href="/">Improved perception</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div class="position-relative rounded overflow-hidden">
                            <img class="img-fluid w-100" src="img/portfolio-6.jpg" alt=""/>
                            <div class="portfolio-overlay">
                                <a class="btn btn-light" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i class="fa fa-plus fa-2x text-primary"></i></a>
                                <div class="mt-auto">
                                    <small class="text-white"><i class="fa fa-folder me-2"></i>Increased Loyalty</small>
                                    <a class="h5 d-block text-white mt-1 mb-0" href="/">Improved trust</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
    
        
        <div class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6">
                        <h5 class="text-white mb-4">Get In Touch</h5>
                        <p><i class="fa fa-map-marker-alt me-3"></i>N.I.T. RAIPUR BOYS HOSTEL-H</p>
                        <p><i class="fa fa-phone-alt me-3"></i>01010505125</p>
                        <p><i class="fa fa-envelope me-3"></i>ShikayatKendra.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                   
                    <div class="col-md-6 col-lg-6">
                        <h5 class="text-white mb-4">Feature Gallery</h5>
                        <div class="row g-2">
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-1.jpg" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-2.jpg" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-3.jpg" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-4.jpg" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-5.jpg" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-6.jpg" alt="Image"/>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div class="container px-lg-5">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="/">Shikayat-Kendra</a>, All Right Reserved by Shriyansh Gaur . (2023-present)
							
					       </div>
                      
                    </div>
                </div>
            </div>
        </div>
      
        <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i class="bi bi-arrow-up"></i></a>
    </div> 
 

    );

}

export default Index;


    
        
   
 