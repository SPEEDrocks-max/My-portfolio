import React, { useState } from 'react';
import AnimatedTitle from '../components/AnimatedTitle';

const ContactPage = () => {
  const [isCopied, setIsCopied] = useState(false);
  const emailAddress = 'shouryarnav4@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      setIsCopied(true);
  
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black p-4">
      <AnimatedTitle 
        title="Let's Connect"
        containerClass="!text-black text-center mb-8"
      />
      <p className="text-center max-w-md mb-4">
        I'm currently available for freelance work and open to discussing new projects. 
        You can reach me at the email address below.
      </p>
      
      <div className="flex items-center gap-4 p-3 bg-white border border-gray-300 rounded-lg shadow-sm">
        <span className="font-mono text-gray-700">{emailAddress}</span>
        <button 
          onClick={handleCopyEmail}
          className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default ContactPage;