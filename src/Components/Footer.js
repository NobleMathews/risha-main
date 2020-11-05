import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="blog-footer">
    {/* <p className="text-center">
        <a href="#">Back to top</a>
      </p> */}
      <p className="text-center text-muted">Webpage designed by              
        <Link
          className="preserve mx-1"
          to={{
            pathname: `/info/noble`,
            state: { modal: true },
          }}
        >
        Noble
        </Link></p>
    </footer>
  )
}

export default Footer;