import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { Navigate } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; // Import the StyledFirebaseAuth component

// Configuration for Firebase UI authentication
const firebaseUIConfig = {
  signInOptions: [
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => false, // Prevent redirection after successful sign-in
  },
};

export default function MySignInScreen() {
  const auth = getAuth(); // Access the auth object

  // Check if the user is already signed in
  const [user] = useAuthState(auth);

  // If user is signed in, redirect to the start building page
  if (user) {
    return <Navigate to="/start-building" />;
  }

  // If user is not signed in, display the sign-in form
  return (
    <div>
      <p>Please sign in:</p>
      {/* Render the Firebase UI authentication component */}
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </div>
  );
}

