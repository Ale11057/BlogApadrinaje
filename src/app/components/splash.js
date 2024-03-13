import { useEffect } from "react";

const Splash = () => {
    useEffect(() => {
        const intro = document.querySelector('.inicio');
        const logoSpan = document.querySelectorAll('.logo');
    
        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.add('active');
            }, (idx + 1) * 200);
          });
    
          setTimeout(() => {
            logoSpan.forEach((span, idx) => {
              setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
              }, (idx + 1) * 50);
            });
          }, 2000);
    
          setTimeout(() => {
            intro.style.top = '-100vh';
          }, 2300);
        }, 0); // Added to ensure it runs after DOMContentLoaded
      }, []); // Empty dependency array to run only once after component mount
    
      return (
        <div className="inicio">
          <h1 className="logo-header">
            <span className="logo">BIEN</span>
            <span className="logo">VENID@</span>
          </h1>
        </div>
      );
    };

export default Splash;
