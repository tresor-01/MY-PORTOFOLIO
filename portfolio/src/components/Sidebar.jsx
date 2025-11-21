import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={`sidebar bg-eerie-black-2 border border-jet rounded-2xl p-6 shadow-1 lg:max-h-none ${showContacts ? 'active' : ''}`}>
      {/* Mobile Toggle Button - Only visible on small screens */}
      <button 
        className="info_more-btn lg:hidden absolute -top-3 -right-3 bg-gradient-to-br from-gray-500 to-transparent text-orange-yellow-crayola p-3 rounded-tr-lg rounded-bl-lg shadow-2 transition-all duration-200 z-10 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-transparent"
        onClick={() => setShowContacts(!showContacts)}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium">Show Contacts</span>
          <ion-icon 
            name={showContacts ? "chevron-up" : "chevron-down"} 
            className="text-sm"
          ></ion-icon>
        </div>
      </button>

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="avatar-box mb-4">
          <img 
            src="./images/Screenshot 2025-04-22 140406.png" 
            alt="tita" 
            width="140"
            className="rounded-2xl border-4 border-orange-yellow-crayola hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h1 className="name text-white-2 text-3xl font-bold ">
          {personalInfo.name}
        </h1>
        
        <p className="title bg-gradient-to-r from-orange-yellow-crayola to-vegas-gold text-smoky-black text-base font-semibold px-6 py-3 rounded-xl inline-block">
          {personalInfo.title}
        </p>
      </div>

      {/* Contact Information - Hidden on mobile by default, shown when active */}
      <div className={`sidebar-info_more ${showContacts ? 'block' : 'hidden'} lg:block`}>
        <div className="space-y-6">
          {/* Email */}
          <div className="contact-item flex items-start space-x-4">
            <div className="icon-box flex-shrink-0 mt-1">
              <ion-icon name="mail-outline" className="text-orange-yellow-crayola text-lg"></ion-icon>
            </div>
            <div className="contact-info flex-1">
              <p className="contact-title text-light-gray-70 text-sm uppercase font-semibold mb-2">
                EMAIL
              </p>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="contact-link text-white-2 text-base font-light hover:text-orange-yellow-crayola transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Birthday */}
          <div className="contact-item flex items-start space-x-4">
            <div className="icon-box flex-shrink-0 mt-1">
              <ion-icon name="calendar-outline" className="text-orange-yellow-crayola text-lg"></ion-icon>
            </div>
            <div className="contact-info flex-1">
              <p className="contact-title text-light-gray-70 text-sm uppercase font-semibold mb-2">
                BIRTHDAY
              </p>
              <time className="text-white-2 text-base font-light">
                {personalInfo.birthday}
              </time>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-item flex items-start space-x-4">
            <div className="icon-box flex-shrink-0 mt-1">
              <ion-icon name="phone-portrait-outline" className="text-orange-yellow-crayola text-lg"></ion-icon>
            </div>
            <div className="contact-info flex-1">
              <p className="contact-title text-light-gray-70 text-sm uppercase font-semibold mb-2">
                PHONE
              </p>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="contact-link text-white-2 text-base font-light hover:text-orange-yellow-crayola transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="contact-item flex items-start space-x-4">
            <div className="icon-box flex-shrink-0 mt-1">
              <ion-icon name="location-outline" className="text-orange-yellow-crayola text-lg"></ion-icon>
            </div>
            <div className="contact-info flex-1">
              <p className="contact-title text-light-gray-70 text-sm uppercase font-semibold mb-2">
                LOCATION
              </p>
              <address className="text-white-2 text-base font-light not-italic">
                {personalInfo.location}
              </address>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-6 border-t border-jet">
          <ul className="social-list flex justify-center space-x-6">
            {personalInfo.social.map((social, index) => (
              <li key={index} className="social-item">
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link text-light-gray-70 hover:text-orange-yellow-crayola text-2xl transition-colors duration-200 hover:scale-110"
                >
                  <ion-icon name={social.icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;