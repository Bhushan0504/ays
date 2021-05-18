import React from 'react';
import '../css/Nav.css';
import Home from '../';

class Contact extends React.Component {

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
      </div>
    )
  }

}

export default Contact;
