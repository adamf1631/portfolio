import React from 'react';

const TopBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link" rel="noreferrer" href="https://www.youtube.com/channel/UCOdN20QUYBjY6TALfx3XCGg" target="_blank"><i className="fab fa-youtube"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" rel="noreferrer" href="https://github.com/adamf1631?tab=repositories" target="_blank"><i className="fab fa-github"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" rel="noreferrer" href="https://www.linkedin.com/in/adam-falchetta-b7871b210/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
        </li>
        <li className="nav-item">
        <a className='nav-link' rel="noreferrer" href="mailto:info@adamfalchetta.com"><i className="fas fa-envelope-open-text"></i> info@adamfalchetta.com</a>
        </li>
        
      </ul>
      
            <a href='../assests/ADAM_FALCHETTA_RESUME.png' download>
              <button className='btn btn-success btn-sm'>
                My Resume
              </button>
            </a>
            <a href='#work-section'>
              <button className='btn btn-success btn-sm m-2'>
                My Work
              </button>
            </a>
            
    </div>
  </div>
</nav>
        </>
    )
}

export default TopBar
