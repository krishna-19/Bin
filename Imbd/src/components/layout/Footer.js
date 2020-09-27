import React from 'react';

//creating a footer from functional based component
function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              Vamsi Krishna,Harika and Manjunath
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

//exporting
export default Footer;