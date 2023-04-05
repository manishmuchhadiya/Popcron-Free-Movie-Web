<?php
include "connection.php";
function login($email,$pass){
    session_start();
    global $conn;
    $query = "SELECT * FROM users WHERE email='$email' AND pass='$pass';";
    echo $query;
    $result = mysqli_query($conn,$query);
    if(mysqli_num_rows($result)>0){
        $row = mysqli_fetch_assoc($result);
        $_SESSION['user_id'] = $row['id'];
        header("location:index.php");
    }
    else{
        echo "<script>alert('Login Failed!');</script>";
    }
    mysqli_close($conn);
}
function register($email,$name,$password){
    global $conn;
    $query = "INSERT INTO users(`email`,`name`,`pass`) VALUE('$email','$name','$password');";
    if(mysqli_query($conn,$query)){
        echo "<script>alert('You Are Registered Now!');</script>";
    }
    else{
        echo "<script>alert('Something went wrong!');</script>";
    }
    mysqli_close($conn);
}
function logout(){
    session_start();
    session_unset($_SESSION['user_id']);
    header("location:index.php");   
}
?>