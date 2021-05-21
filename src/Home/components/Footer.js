import '../css/Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div class="row footerstyle">
        <br/><br/>
        <div class="col-sm-4 footerstyle">
          <img  class='image' src='img/logo/darklogo.png' alt='logo AYS' width='60%' height='auto'/>
        </div>
        <div class="col-sm-2 footerstyle">
          <br/>
        </div>
        <div class="col-sm-5 footerstyle">
          <br/>
          <table class='input-search-table1 width90'><tr><td>
          <input type='email' placeholder='email for newsletter' class='input-search'/>
          </td><td>
          <input type='submit' value='Sign up' class='input-search-button' /></td>
          </tr></table>
          <br/>
        </div>
      </div>
      <div class="row footerstyle">
        <br/><br/>
        <div class="col-sm-4 footerstyle">
          <div class='links'>
            <b class='footerlabel'>About AYS</b><br/><br/>
            <a class='footerstyle' href="#">About Us</a><br/>
            <a class='footerstyle' href="#">Contact Us</a><br/>
            <a class='footerstyle' href="#">Newsroom</a><br/>
            <a class='footerstyle' href="#">Careers</a><br/>

          </div>
        </div>
        <div class="col-sm-3 footerstyle">
          <div class='links'>
            <b class='footerlabel'>Services</b><br/><br/>
            <a class='footerstyle' href="#">Gardener</a><br/>
            <a class='footerstyle' href="#">Cleaner</a><br/>
            <a class='footerstyle' href="#">Baby Sitter</a><br/>
            <a class='footerstyle' href="#">Plumber</a><br/>
          </div>
        </div>
        <div class="col-sm-3 footerstyle">
          <div class='links'>
            <b class='footerlabel'>Account</b><br/><br/>
            <a class='footerstyle' href="#">My Employees</a><br/>
            <a class='footerstyle' href="#">Create Account</a><br/>
            <a class='footerstyle' href="#">Deactivate Account</a><br/>
          </div>
        </div>
        <div class="col-sm-2 footerstyle">
          <div class='links'>
            <b class='footerlabel'>Connect</b><br/><br/>
            <a class='footerstyle' href="#">
              <img src='img/social/fb.png' alt='linkedin' width='20%' height='auto'/></a> &nbsp;
            <a class='footerstyle' href="#">
              <img src='img/social/insta.png' alt='instagram' width='20%' height='auto'/></a> &nbsp;
            <a class='footerstyle' href="#">
              <img src='img/social/yt.png' alt='youtube' width='20%' height='auto'/></a>
            <div class='height100'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
