<?php

        $to = "wpoceanmarketing@gmail.com"; // this is your Email address
        $from  = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL); // this is the sender's Email address
        $sender_name = $_POST['name'];
        $address = isset($_POST['address']) ? $_POST['address'] : '';
        $service = $_POST['service'];
        $note = $_POST['note'];

        $subject = "Form submission";

        $message = $sender_name . " has sent the contact message. His / Her contact Service is " . $service .
            " and his / her address is "  . $address . ". He / she wrote the following... \n\n" . $note;

        $headers = 'From: ' . $from;
        mail($to, $subject, $message, $headers);

?>

