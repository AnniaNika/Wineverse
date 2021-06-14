<?php

//runs localy
$host="localhost";
$user="root";
$password="";
$dbname="Wineverse";

//new var for connection
$connect=mysqli_connect($host,$user,$password,$dbname);

$name=$_POST['name'];
$email=$_POST['email'];
$find=$_POST['find'];
$checkbox=(isset($_POST['checkbox'])?$_POST['checkbox']:'');
$message=$_POST['message'];

$sql="INSERT INTO Contact(name,email,find,message) VALUES('$name','$email','$find','$message')";

$connect->query($sql);

header("Location: index.php#form");
?>