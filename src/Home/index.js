import React from 'react';
import './css/Nav.css';
import NavLogin from './components/NavLogin';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Midimg from './components/Midimg';
import How from './components/How';

class Home extends React.Component {
  constructor()
  {
    super();
    this.state=
    {
      showContact:false,
      showLogin:false,
      name:"Home"
    };
    // this.hideComponent = this.hideComponent.bind(this);
  }

  // hideComponent(name)
  // {
  //   switch (name) {
  //     case "close":
  //       this.setState({showContact: false});
  //       this.setState({showLogin: false});
  //       break;
  //     default:
  //   };
  // }

  render()
  {

    const contact = () => {
      this.setState({showContact: !this.setState.showContact});
      this.setState({showLogin: false});
    }
    const login = () => {
      this.setState({showContact: false})
      this.setState({showLogin: !this.setState.showLogin})
    }

    return (
      <div>
      <div class='navbar'>
        <table class='navtable'><tr><td class='left'><table class='navlogotext'><tr><td>
                  <img src='img/logo1.png' alt='AYS' class='navlogo'/>
                </td><td> &nbsp;&nbsp;&nbsp; </td><td>
                  At Your <br/>Service</td></tr></table>
            </td>
            <td class='right'><div class='row'><div class='col-sm-3'></div>
                <div class='col-sm-3'>
                  <span class='navmenu' onClick={contact}>Contact Us</span>
                </div>
                <div class='col-sm-3'>
                  <span class='navmenu'>Apply here</span>
                </div>
                <div class='col-sm-3'>
                  <span class='navmenu' onClick={login}>Login / Sign Up</span>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <br/><br/>
      { this.state.showContact ? <Contact /> : null }
      { this.state.showLogin ? <NavLogin /> : null }

      <Midimg />
      <How />
      </div>
    )
  }
}

export default Home;
