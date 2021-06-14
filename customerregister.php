<?php

//runs localy
$host="localhost";
$user="root";
$password="";
$dbname="Wineverse";

//new var for connection
$connect=mysqli_connect($host,$user,$password,$dbname);

$email=$_POST['email'];
$password=$_POST['password'];
$password2=$_POST['password2'];

if($password == $password2) {
    $sql="INSERT INTO Customers(username,password) VALUES('$email','$password')";
    $connect->query($sql);
    header('Location: index.php');
} else {
    echo "<script> alert('Password did not match!');
            window.location.href='user.html';
          </script>";
}

?>





























