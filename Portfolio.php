<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "lmoreng10@gmail.com"; 
    $subject = "Mensaje desde portfolio web";
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mensaje enviado correctamente";
    } else {
        echo "Error al enviar el mensaje";
    }
} else {
    echo "Método no permitido";
}
?>
