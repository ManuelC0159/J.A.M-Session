import React from 'react';

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </nav>
      <div className="social-media">
        {/* Social media icons go here */}
      </div>
      <p>&copy; 2023 Web Development Job Finder</p>
    </footer>
  );
}

export default Footer;
