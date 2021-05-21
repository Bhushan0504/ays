import '../css/Nav.css';
import React from 'react';
import Midimg from './Midimg';
import config from './config';

class Nav extends React.Component {

  constructor()
  {
    super();
    this.state={
      showLogin:false,
      showSignup:false,
      showContact:false,
      showNeedjob:false
    }
  }

  componentDidMount(){
       (function() {
           var e = document.createElement("script");
           e.type = "text/javascript";
           e.async = true;
           e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
           var t = document.getElementsByTagName("script")[0];
           t.parentNode.insertBefore(e, t)
       })();
   }

   topgo = () => {
     window.scrollTo(0, 0);
   }

   //Triggering login for google
   googleLogin = () => {
       let response = null;
       window.gapi.auth.signIn({
           callback: function(authResponse) {
               this.googleSignInCallback( authResponse )
           }.bind( this ),
           clientid: config.google, //Google client Id
           cookiepolicy: "single_host_origin",
           requestvisibleactions: "http://schema.org/AddAction",
           scope: "https://www.googleapis.com/auth/plus.login email"
       });
   }

   googleSignInCallback = (e) => {
       console.log( e )
       if (e["status"]["signed_in"]) {
           window.gapi.client.load("plus", "v1", function() {
               if (e["access_token"]) {
                   this.getUserGoogleProfile( e["access_token"] )
               } else if (e["error"]) {
                   console.log('Import error', 'Error occured while importing data')
               }
           }.bind(this));
       } else {
           console.log('Oops... Error occured while importing data')
       }
   }

   getUserGoogleProfile = accesstoken => {
       var e = window.gapi.client.plus.people.get({
           userId: "me"
       });
       e.execute(function(e) {
           if (e.error) {
               console.log(e.message);
               console.log('Import error - Error occured while importing data')
               return

           } else if (e.id) {
               //Profile data
               alert("Successfull login from google : "+ e.displayName )
               console.log( e );
               return;
           }
       }.bind(this));
   }


  render(){

    // const [showLogin, setLogin] = React.useState(false)
    // const [showSignup, setSignup] = React.useState(false)
    // const [showContact, setContact] = React.useState(false)
    // const [showNeedjob, setNeedjob] = React.useState(false)



    const cross = () => {
      this.topgo();
      this.setState({showContact:false})
      this.setState({showNeedjob:false})
      this.setState({showLogin:false})
      this.setState({showSignup:false})
      return console.log(" Cross clicked")
    }

    const login = () => {
      this.topgo();
      this.setState({showContact:false})
      this.setState({showNeedjob:false})
      this.setState({showLogin:true})
      this.setState({showSignup:false})
      return console.log(" Login clicked")
    }

    const signup = () => {
      this.topgo();
      this.setState({showContact:false})
      this.setState({showNeedjob:false})
      this.setState({showLogin:false})
      this.setState({showSignup:true})
      return console.log(" Login click then signup clicked")
    }

    const contact = () => {
      this.topgo();
      this.setState({showContact:true})
      this.setState({showNeedjob:false})
      this.setState({showLogin:false})
      this.setState({showSignup:false})
      return console.log(" Contact clicked")
    }

    const needjob = () => {
      this.topgo();
      this.setState({showContact:false})
      this.setState({showNeedjob:true})
      this.setState({showLogin:false})
      this.setState({showSignup:false})
      return console.log(" Need Job clicked")
    }

    const Contact = () => {
      return (
        <div class='blackbg'><br/><br/><br/><br/><br/><br/>
        <div class='navlogin'>
        <img src='img/cross.png' alt='x' class='cross' onClick={cross} />
        <div class='row'>
          <div class='col-sm-4 width33'>
            <img src='img/logo2.png' alt='AYS' class='logo2' />
          </div>
          <div class='col-sm-4 left'>
           <br/> <br/>
          <b>Contact</b> <br/>
          9876543210 <br/> <br/>
          <b>Email</b> <br/>
          info@ays.com
          </div>
          <div class='col-sm-4 left'>
           <br/>
          <b>Chat Now</b> <br /><br />
          <form action='https://wa.me/918878668537?text=Hi%20Bhushan' target='_blank'>
            <button class='whatsapp'>Message us on Whatsapp</button>
          </form>
          Whatsapp at +91-8878668537
          </div>
        </div>
        </div>
        <br/><br/>
        </div>
      )
    }

    const NavLogin = () => {

      return (
        <div class='blackbg' ><br/><br/><br/><br/><br/><br/>
        <div class='navlogin'>
          Login
          <img src='img/cross.png' alt='x' class='cross' onClick={cross} />
          <div class='row'>
            <div class='col-sm-4'>
              <img src='img/logo2.png' alt='AYS' class='logo2' />
            </div>
            <div class='col-sm-4'>
              <form>
              <table>
                <tr>
                  <td>
                    <span class='labellogin'>Email</span><br/>
                    <input type='email' name='email' placeholder='Email' class='logininput'/><br/>
                    <span class='labellogin'>Password</span><br/>
                    <input type='password' name='pwwd' placeholder='Password' class='logininput'/><br/>
                    <span class='loginlinkpwd'> Forget Password? </span><br/>
                    <input type='submit' name='login' value='LOGIN' class='logininput loginsubmit'/><br/><br/>
                  </td>
                </tr>
              </table>
              </form>
            </div>
            <div class='col-sm-4'>
              <br/><br/>
              <img src='img/goo.png' alt='Signin with google' class='logingoogle'
              onClick={ () => this.googleLogin() }
               />
              <br/><br/>
              Don't have an account?<br/>
              <span class='loginlinksignup' onClick={signup}>Sign Up</span>
            </div>
          </div>
        </div>
        <br/>
        </div>
      )
    }

    const Signup = () => {
      return (
        <div class='blackbg' ><br/><br/><br/><br/><br/><br/>
        <div class='navlogin'>
        AYS | at your service
          <img src='img/cross.png' alt='x' class='cross' onClick={cross} />
          <form>
          <div class='row'>
            <div class='col-sm-4'>
              <img src='img/logo2.png' alt='AYS' class='logo2' />
            </div>
            <div class='col-sm-8'>
              <div class='row'>
                <div class='col-sm-6'>
                <table>
                  <tr>
                    <td>
                      <span class='labellogin'>Name</span><br/>
                      <input type='text' name='name' placeholder='Name' class='logininput'/><br/>
                      <span class='labellogin'>Email</span><br/>
                      <input type='email' name='email' placeholder='Email' class='logininput'/><br/>
                    </td>
                  </tr>
                </table>
                </div>
                <div class='col-sm-6'>
                <table>
                  <tr>
                    <td>
                      <span class='labellogin'>Phone</span><br/>
                      <input type='number' name='pnumber' placeholder='Contact number' class='logininput'/><br/>
                      <span class='labellogin'>Password</span><br/>
                      <input type='password' name='pwwd' placeholder='Password' class='logininput'/><br/>
                    </td>
                  </tr>
                </table>
                </div>
              </div><br/>
              <input type='submit' name='btnsignup' value='Continue' class='logininput loginsubmit width33'/><br/><br/>
            </div>
          </div>
          </form>
        </div>
        <br/>
        </div>
      )
    }


  return (
    <div className="Nav">
      <div class='navbar'>
        <table class='navtable'><tr><td class='left'><table class='navlogotext'><tr><td>
                  <img src='img/logo1.png' alt='AYS' class='navlogo'/>
                </td><td> &nbsp;&nbsp;&nbsp; </td><td>
                  At Your <br/>Service</td></tr></table>
            </td>
            <td class='right'><table class='fright'><tr><td>
                <span class='navmenutxt' onClick={contact}>
                  <img src='img/nav/width768/contactnav.png' alt='call' class='navimagewidth768' />
                  <img src='img/nav/contactnav.png' alt='call' class='navimage' />
                  <span class='navmenutxthide'>Contact Us</span>
                </span></td><td>
                <span class='navmenutxt' alt='apply'>
                  <img src='img/nav/width768/applynav.png' alt='call' class='navimagewidth768' />
                  <img src='img/nav/applynav.png' class='navimage' />
                  <span class='navmenutxthide'>Apply here</span>
                </span></td><td>
                <span class='navmenutxt' onClick={login}>
                  <img src='img/nav/width768/signinnav.png' alt='call' class='navimagewidth768' />
                  <img src='img/nav/signinnav.png'  alt='signin' class='navimage' />
                  <span class='navmenutxthide' >Sign in</span>
                </span></td></tr></table>
            </td>
          </tr>
        </table>
      </div>
      { this.state.showLogin ? <NavLogin /> : null }
      { this.state.showContact ? <Contact /> : null }
      { this.state.showSignup ? <Signup /> : null }
    </div>
  );
  }
}

export default Nav;
