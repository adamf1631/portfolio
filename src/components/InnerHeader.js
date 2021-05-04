import React from 'react';
import { Animate, useAnimate } from "react-simple-animate";

const InnerHeader = () => {

    const { style, play } = useAnimate({ })
    return (
        <div className='inner-header mt-4'>

            <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
            <h4>Adam Falchetta</h4>
            </Animate>
         <p>Full Stack Developer with plenty of knowledge & experince.</p>
         <a href="mailto:adam@adamdesign.digital" >adam@adamdesign.digital</a>
         
         <div className='skills'>
         <h5 className='m-3'>Skills: 
             <span>
                 <i class="fab fa-js"></i>
                 <i class="fab fa-html5"></i>
                 <i class="fab fa-css3-alt"></i>
                 <i class="fab fa-node"></i>
                 <i class="fab fa-react"></i>
                 <i class="fab fa-sass"></i>
                 <i class="fab fa-php"></i>
                 <i class="fas fa-database"></i>
                 </span>
                 </h5>
         </div>

            
        </div>
    )
}

export default InnerHeader
