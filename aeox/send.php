<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$offer = $_POST['offer_input'];

$form_kitch = $_POST['form_kitch'];
$material_facade = $_POST['material_facade'];
$countertop_material = $_POST['countertop_material'];
$accessories = $_POST['accessories'];
//Размеры
$width_kitch = $_POST['width_kitch'];
$width_kitch_left = $_POST['width_kitch-left'];
$width_kitch_right = $_POST['width_kitch-right'];



//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'grants_a@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'A2v4H69P2gJFkVRNMief'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('grants_a@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('aleksandr8862323@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку'.
'<p> Телефон: ' .$phone.
'<p> ФОРМА КУХНИ: '.$form_kitch.
'<p> МАТЕРИАЛ ФАСАДА: '.$material_facade.
'<p> МАТЕРИАЛ СТОЛЕШНИЦЫ: '.$countertop_material.
'<p> ФУРНИТУРА: '.$accessories.
'<p> Длина: '.$width_kitch.
'<p> Длина (Левый угол)(м2): '.$width_kitch_left.
'<p> Длина (Правый угол)(м2): '.$width_kitch_right;

$mail->AltBody = '';

if(!$mail->send()){
    $messege = 'Ошибка';
}
else{
    $messege = 'Данные отправлены';
}
$response = ['messege' => $messege];
header('Content-type: application/json');
echo json_encode($response);

?>