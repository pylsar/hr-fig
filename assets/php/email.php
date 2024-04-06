<?php

$site = "2222";
//Переменые которые могут быть в запросе
$array_data = [
	'callback' => "Номер телефона клиента",
	'name' => "Имя",
	'email' => "Email",
	'text' => "Текст",

];

if ($_POST['callback']) {
	//Откуда прислали заявку
	$ref = getenv("HTTP_REFERER");

	//Кому отправлять
	$to  = 'Проверка теста <kysov2006@bk.ru>';

	$today = date("d-m-Y H:i:s");

	$subject = 'Новая заявка: ' . $_POST['callback'];
	//Если есть тема письма то пишем новую тему письма
	if ($_POST['subject']) {
		$subject = $_POST['subject'];
	}

	$message = 'С сайта <a href="https://' . $site . '/">' . $site . '</a> пришла новая заявка.<br /><br />';
	//Тут перебираем все данные которые пришли с формы
	foreach ($_POST as $key => $value) {
		if ($array_data[$key]) {
			$message .= '<strong>' . $array_data[$key] . ': </strong>' . $value . '<br /> ';
		}
	}

	$message .= '<br /> <br /> <br /> Заявку отправили со страницы: <b><a href="' . $ref . '">' . $ref . '</a></b><br /> ';
	$message .= 'Время отправки: <b>' . $today . '</b><br /> 

<br /><br />
Это письмо отправлено роботом и не требует ответа.<br />
Спасибо

<br /><br />
';

	//    var_dump($message);

	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Новая заявка <akusov@voltag.ru>\r\n";

	$result = mail($to, $subject, $message, $headers);

	if (!$result) {
		echo json_encode(['status' => 'Error']);
	} else {

		echo json_encode([
			'status' => 'Success',
			'from' => $_POST['form']
		]);
	}
} else {
	header('HTTP/1.0 403 Forbidden');
}
