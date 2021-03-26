<?php
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE : submit an Email
//////////////////////////////////////////////////////////////////////////////////////////////////////////
if(isset($_POST["SEND_EMAIL"])){
	// the message
	$msg = "First line of text\nSecond line of text";

	// use wordwrap() if lines are longer than 70 characters
	$msg = wordwrap($msg,70);

	$headers =  "MIME-Version: 1.0" . "\r\n"; 
	$headers .= "From: {$_POST['contact_name']} <{$_POST['contact_email']}>" . "\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n"; 

	// send email
	mail("comments@waddleandsilvy.com","W and S comment",$_POST['contact_comment'], $headers);

	//mail($to, $subject, $body, $headers);

	echo json_encode("Email Sent");
}

?>