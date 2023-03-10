import React from "react"

function Nav(){

  return (
    <div>

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
    </div>
  );
  
}

export default Nav;
