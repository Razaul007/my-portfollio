import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="mb-4">&copy; Muhammad Razaul Alam</p>

            <div className="flex justify-center space-x-6">
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
        </footer>
    );
}

export default Footer;
