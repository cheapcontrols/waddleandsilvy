
const AJAX_EMAIL = new XMLHttpRequest();

function SEND_EMAIL(){
  AJAX_EMAIL.open('POST', 'php/email.php', true);
  AJAX_EMAIL.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  AJAX_EMAIL.onreadystatechange = SEND_EMAIL_RESPONSE;
  if(document.querySelector("#contact_robot_code").value == "SIUc"){
    var postString = 'SEND_EMAIL=nothing';
        postString += "&contact_name=";
        postString += "FROM waddle and silvy dot com";
        postString += "&contact_email=";
        postString += "comments@waddleandsilvy.com"; 
        postString += "&contact_comment=";
        postString += " NAME = "; 
        postString += document.querySelector("#contact_name").value; 
        postString += " EMAIL = "; 
        postString += document.querySelector("#contact_email").value; 
        postString += " COMMENT = "; 
        postString += document.querySelector("#contact_comment").value;
    AJAX_EMAIL.send(postString);
  }else{
		alert("Wrong Anti Robot code");
		document.querySelector("#contact_robot_code").value = "Try Again";
	}
}

function SEND_EMAIL_RESPONSE(){
  if (AJAX_EMAIL.readyState === 4) {
    if (AJAX_EMAIL.status === 200) {
      EMAIL_RESPONSE = JSON.parse(AJAX_EMAIL.responseText);
      alert("EMAIL SENT");
      document.querySelector('[name="name"]').value = "";
      document.querySelector("#contact_email").value = "";
      document.querySelector("#contact_comment").value = "";
      document.querySelector("#contact_robot_code").value = "";
    }
  }
}

function adjust_textarea(h) {
  h.style.height = "20px";
  h.style.height = (h.scrollHeight)+"px";
}