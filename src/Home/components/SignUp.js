import '../css/Nav.css';

function SignUp() {

  const cross = () =>
  {
    
  }

  return (
    <div class='navlogin'>
    AYS | at your service
      <img src='img/cross.png' alt='x' class='cross' onClick={cross}/>
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
  )
}

export default SignUp;
