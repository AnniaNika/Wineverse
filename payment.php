<?php

//runs localy
$host="localhost";
$user="root";
$password="";
$dbname="Wineverse";

//new var for connection
$connect=mysqli_connect($host,$user,$password,$dbname);

$fname=$_POST['fname'];
$email=$_POST['email'];
$address=$_POST['address'];
$city=$_POST['city'];
$state=$_POST['state'];
$zip=$_POST['zip'];

$sql="INSERT INTO Orders(fname,email,address,city,state,zip) VALUES('$fname','$email','$address','$city','$state','$zip')";

$connect->query($sql);

header("Location: index.php#form");
?>