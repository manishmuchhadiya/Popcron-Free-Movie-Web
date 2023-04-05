<?php include "auth.php"; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="./images/logo 1.png " />
    <link rel="stylesheet" href="./style/login.css" />
    <title>Popcron Free</title>
  </head>
  <body>
    <div class="logo">
      <a href="index.php">
      <img src="./images/logo.png" alt="logo" /></a>
    </div>

    <form method="POST">
      <div class="header">Sing in to your account</div>

      <div class="label">Email</div>
      <input type="email" name="email" /><br />

      <div class="label">Password</div>
      <input type="password" name="pass" /><br />

      <button name="submit" type="submit">Continue</button>
    </form>

    <span>Don't have an account? &nbsp<a href="register.php">Sing up.</a></span>
    <div class="copy">&copy; PopcprnFree</div>

    <?php
        if(isset($_POST["submit"])){
          $email = $_POST["email"];
          $password = $_POST["pass"];
          login($email,$password);
        }
      ?>
  </body>
</html>
