<?php
session_start();

if(isset($_POST['login'])) {
    //runs localy
    $host="localhost";
    $user="root";
    $password="";
    $dbname="Wineverse";

    //new var for connection
    $connect=mysqli_connect($host,$user,$password,$dbname);
    
    $email=$_POST['email'];
    $password=$_POST['password'];
    $sql="SELECT * FROM Customers WHERE username='$email' AND password='$password'";
    $results=$connect->query($sql);
    $final=$results->fetch_assoc();
    
    $_SESSION['email']=$final['username'];
    $_SESSION['password']=$final['password'];
    
    
    if($email=$final['username'] AND $password=$final['password']) {
        header('Location: cart.php');
        echo("heyyyy");
    } else {
        echo "<script> alert('Credentials are wrong!');
        window.location.href='user.html';
        </script>
        ";
    }
}



?>