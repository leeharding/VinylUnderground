<?php 

ini_set('display_errors',1);
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "test@YOURDOMAIN";
    $to = "mrkson@zoho.com";
    $subject = "PHP Mail Test script";
    $message = "This is a test to check the PHP Mail functionality";
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "Test email sent";


/*
require_once('./app/Mage.php');
Mage::app();

$mail = Mage::getModel('core/email');
$mail->setToName('Your Name');
$mail->setToEmail('Youe Email');
$mail->setBody('Mail Text / Mail Content');
$mail->setSubject('Mail Subject');
$mail->setFromEmail('Sender Mail Id');
$mail->setFromName("Msg to Show on Subject");
$mail->setType('html');// YOu can use Html or text as Mail format

try {
$mail->send();
Mage::getSingleton('core/session')->addSuccess('Your request has been sent');
$this->_redirect('');
}
catch (Exception $e) {
Mage::getSingleton('core/session')->addError('Unable to send.');
$this->_redirect('');
}*/
?>