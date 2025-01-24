"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Importation des icônes

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center">

        <p className="mt-4 text-sm text-gray-500">
          Designed & Built by{" "}
          <span className="text-green-400">cherica</span>. © {new Date().getFullYear()}
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Lien GitHub */}
          <a
            href="https://github.com/cherica01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition duration-200 flex items-center space-x-2"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          {/* Lien LinkedIn */}
          <a
            href="https://www.linkedin.com/in/riantsoa-cherica-88740a303"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition duration-200 flex items-center space-x-2"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          {/* Lien Email */}
          <a
            href="mailto:riantsoacherica01@gmail.com"
            className="hover:text-green-400 transition duration-200 flex items-center space-x-2"
          >
            <FaEnvelope size={20} />
            <span>Email</span>
          </a>
        </div>
        <p className="mt-6 text-xs text-gray-600">
          <span className="text-red-400">#</span> NexusCraft
        </p>
      </div>
    </footer>
  );
};

export default Footer;
