import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

function SignInPage() {
  return (
    <div>
      <Navbar />
      <div className="sign-in-button1-container">
        <button type="button"><a href="">Sign in with Email</a></button>
      </div>
      <div className="sign-in-button2-container">
        <button type="button"><a href="">Sign in with Gmail</a></button>
      </div>
      <Footer />
    </div>
  );
}

export default SignInPage;