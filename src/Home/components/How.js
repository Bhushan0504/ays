import '../css/How.css';

function How() {
  return (
    <div className='How'>
      <div class='how'>
        <p class='trusttag1'>How Does it work ?</p>
        <div class='row howcard'>
          <div class='col-sm-4'>
          <br/>
          <img src='img/search.png' alt='search' class='howcircle' />
          <br/>
          <img src='img/rightarrow.png' alt='search' class='arrow' />
          <br/>
          Search
          <br/>
          <br/>
            <div class='howcarddetails'>
              Search for your requirement. See list of all the available maids and servants.
            </div>
            <img src='img/rightarrow.png' alt='search' class='arrowmob' />
          </div>
          <div class='col-sm-4'>
          <br/>
          <img src='img/contact.png' alt='search' class='howcircle' />
          <br/>
          <img src='img/rightarrow.png' alt='search' class='arrow' />
          <br/>
          Contact
          <br/><br/>
            <div class='howcarddetails'>
              View complete profile of service providing employee and shortlist as per your preference.
            </div>
            <img src='img/rightarrow.png' alt='search' class='arrowmob' />
          </div>
          <div class='col-sm-4'>
          <br/>
          <img src='img/employed.png' alt='search' class='howcircle' />
          <br/>
          <img src='img/rightarrow.png' alt='search' class='arrowmob arrow' />
          <br/>
          Employed
          <br/><br/>
            <div class='howcarddetails'>
              According to your deal the employee is employed at your site.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How;
