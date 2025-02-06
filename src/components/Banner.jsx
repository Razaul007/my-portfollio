import React from 'react';
import photo from '../assets/mypic.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Razaul_Alam_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen  p-8">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-52">
        <img

          src={photo}
          className=" w-50 rounded-full shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Razaul Alam</h1>
          <p className="py-3">
            I am a passionate Web Developer specializing in creating dynamic and responsive web applications.
          </p>
          <p>Feel free to reach out—I’d love to connect and discuss how we can work together to create something extraordinary.</p>
          <div className="flex space-x-6 mt-4 mb-4">
            {/* Facebook */}
            <a href="https://www.facebook.com/Razaul007" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/Razaul007" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/razaul-alam/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <button onClick={handleDownload}> <a href="/resume.pdf"
            download="Razaul_Alam_Resume.pdf"
            className="btn bg-cyan-200" >Resume</a></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;