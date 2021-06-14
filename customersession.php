<?php

start_session();
if (empty($_SESSION['email'] AND $_SESSION['password'])) {
    echo "<script> alert('Please Log in!');
    window.location.href='user.html';
    </script>
    ";
}

?>