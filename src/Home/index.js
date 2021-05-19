import React from 'react';
import './css/Nav.css';
import Midimg from './components/Midimg';
import How from './components/How';
import Nav from './components/Navvv';

class Home extends React.Component {
  constructor()
  {
    super();
    this.state=
    {
      // showContact:false,
      // showLogin:false,
      // name:"Home"
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

    // const contact = () => {
    //   this.setState({showContact: !this.setState.showContact});
    //   this.setState({showLogin: false});
    // }
    // const login = () => {
    //   this.setState({showContact: false})
    //   this.setState({showLogin: !this.setState.showLogin})
    // }

    return (
      <div>
        <Nav />
        <Midimg />
        <How />
      </div>
    )
  }
}

export default Home;
