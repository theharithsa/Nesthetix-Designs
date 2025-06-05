<?php

	$to = "wpoceanmarketing@gmail.com"; // this is your Email address
	$from  = $_POST['email']; // this is the sender's Email address
	$sender_name = $_POST['name'];
	$adress = $_POST['adress'];
	$service = $_POST['service'];
	$note = $_POST['note'];

	$subject = "Form submission";

	$message = $sender_name . " has send the contact message. His / Her contact Service is " . $service . " and his / her adress is "  . $adress . ". He / she wrote the following... ". "\n\n" . $note;

	$headers = 'From: ' . $from;
	mail($to, $subject, $message, $headers);

?>