import './How.css';

function How() {
  return (
    <div className='How'>
      <div class='how'>
        How does it work?
        <div class='row howcard'>
          <div class='col-sm-4'>
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
          <img src='img/employed.png' alt='search' class='howcircle' />
          <br/>
          <img src='img/rightarrow.png' alt='search' class='arrowmob arrow' />
          <br/>
          Employed
          <br/><br/>
            <div class='howcarddetails'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How;
