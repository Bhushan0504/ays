import '../css/Nav.css';
import React from 'react';

class NavLogin extends React.Component {

  constructor()
  {
    super()
  }

  render () {

    const cross = () =>
    {
      // implement later
    }

    return (
      <div><br/><br/><br/>
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
          <img src='img/goo.png' alt='Signin with google' class='logingoogle' />
          <br/><br/>
          Don't have an account?<br/>
          <span class='loginlinksignup' >Sign Up</span>
        </div>
      </div>
    </div>
    </div>
  )
  }
}

export default NavLogin;
