import '../css/Trust.css';

function Trust() {
  return (
    <div class='trust'>
      <p class='trusttag1'>TRUST and SAFETY</p>
      <div class='whitebg'>
        <div class='row'>
          <div class='col-sm-6'>
            <table class='point'>
              <tr class='trtrust'>
                <td class='trtrust'>
                  <img src='img/trust/tick.png' alt='*' class='tick' />
                </td>
                <td>
                  The is no involvement of external agent.<br/><br/>
                </td>
              </tr>
              <tr class='trtrust'>
                <td class='trtrust'>
                  <img src='img/trust/tick.png' alt='*' class='tick' />
                </td>
                <td>
                  Your information is not disclose to any of the employee.
                  <br/><br/>
                </td>
              </tr>
              <tr class='trtrust'>
                <td class='trtrust'>
                  <img src='img/trust/tick.png' alt='*' class='tick' />
                </td>
                <td>
                  Directly contact to service providing employee.
                  <br/><br/>
                </td>
              </tr>
              <tr class='trtrust'>
                <td class='trtrust'>
                  <img src='img/trust/tick.png' alt='*' class='tick' />
                </td>
                <td>
                  Safe to contact, all employees are verified with their government ID proof.
                  <br/><br/>
                </td>
              </tr>
            </table>
          </div>
          <div class='col-sm-6'>
            <img src='img/trust/noagent.png' alt='No agent involve' class='imgtrust' />
            <br/>
            <img src='img/trust/contact.png' alt='contact to confirm' class='imgtrust' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
