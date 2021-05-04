import React from 'react';

const TopBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a className="nav-link" rel="noreferrer" href="https://www.youtube.com/channel/UCOdN20QUYBjY6TALfx3XCGg" target="_blank"><i class="fab fa-youtube"></i></a>
        </li>
        <li class="nav-item">
        <a className="nav-link" rel="noreferrer" href="https://github.com/adamf1631?tab=repositories" target="_blank"><i class="fab fa-github"></i></a>
        </li>
        <li class="nav-item">
        <a className="nav-link" rel="noreferrer" href="https://www.linkedin.com/in/adam-falchetta-b7871b210/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </li>
        <li class="nav-item">
        <a className='nav-link' href="mailto:adam@adamdesign.digital"><i class="fas fa-envelope-open-text"></i></a>
        </li>
        
      </ul>
      
            <a href='../assests/ADAM_FALCHETTA_RESUME.png' download>
              <button className='btn btn-success btn-sm'>
                Resume
              </button>
            </a>
            
    </div>
  </div>
</nav>
        </>
    )
}

export default TopBar
