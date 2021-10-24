import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import ContactForm from "../pages/Contact";


function Header() {
  const [activeTab, setActiveTab] = useState("tab1");
  const renderTab = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main >
        {renderTab(activeTab)}
      </main>
    </div>
  );
}

export default Header;