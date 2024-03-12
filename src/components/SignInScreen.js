//import auth functions and variables from Firebase
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { Link, Navigate } from 'react-router-dom';


//import the component -- pick one!
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; //install option 1

//an object of configuration values
const firebaseUIConfig = {
  signInOptions: [ //array of sign in options supported
    //array can include just "Provider IDs", or objects with the IDs and options
   
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup', //don't redirect to authenticate
  credentialHelper: 'none', //don't show the email account chooser
  callbacks: { //"lifecycle" callbacks
    signInSuccessWithAuthResult: () => {
      return false; //don't redirect after authentication
    }
  }
}


//the React compnent to render
export default function MySignInScreen() {

  const auth = getAuth(); //access the "authenticator"
  //const user = useAuthState(auth)
  
  const currentUser = auth.currentUser;

  
  if (currentUser) { //if signed in
    return <Navigate to="/start-building" />
  }
  // const [user, error] = useState(auth)
    //let status; 
    //if (error) {
     // status = "Error:" + {error}
   //}
   //if (user) {
      //status = "You're now signed in!" 
   // } else {
     // status = "Please sign in to your account."
    //}
    
  // write a function /for the logic of logging -> wrong password = error msh should appear

  return (
    <div>
  
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </div>
  );
}
