<?php

$nume = $_POST["nume"];
$email = $_POST["email"];

$linie = "Nume: $nume | Email: $email\n";

file_put_contents("date.txt", $linie . PHP_EOL, FILE_APPEND);
echo "<h2>Date salvate pe server!</h2>";
echo "Nume: " . $nume . "<br>";
echo "Email: " . $email;

?>
