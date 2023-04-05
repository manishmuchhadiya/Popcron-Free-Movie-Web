<?php
    include "connection.php";
    session_start();
    if(!isset($_SESSION["user_id"])){
        echo "<script>
            alert('You Are Not Logged in');
            window.location = 'http://localhost/movieweb/login.php';
            </script>";
    }
    else{
        $movie_id = $_GET["movie_id"];
        $user_id = $_SESSION["user_id"];
    
            // insert into watchlist table in database
            $query = "INSERT INTO watchlist(userid,movieid) values($user_id,$movie_id);";
            if(mysqli_query($conn,$query)){
                echo "<script>
                alert('Movie Added to watchlist!');
                window.location = 'http://localhost/movieweb/index.php';
                </script>";
            }
            else{
                echo "<script>alert('Something went wrong!');</script>";
            }
            mysqli_close($conn);
    
}
?>  