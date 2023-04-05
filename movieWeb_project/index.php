<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popcron Free</title>
    <link rel="icon" type="image/x-icon" href="./images/logo 1.png " />
    <link rel="stylesheet" href="./style/mediaQueries.css">
    <link rel="stylesheet" href="./style/Style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  </head>

  <body>
    <!-- nav -->
    <div id="nav" class="nav">
      <h2 class="nav__logo" id="Popcron">
        <img src="./images/logo.png" alt=""/>
      </h2>
      
        <input type="search" id="search-movie" name="search" placeholder="Search for movies, tv shows and more..." class="search" />
        <a class="search-logo" id="search-btn"><i class="fa fa-search" ></i></a>
    
      <ul>
        <li><a href="#trendingnow"> Movies</a></li>
        <li><a href="#documentries">Series</a></li>
        <!-- <li><a href="contact.asp">Contact Us</a></li> -->
        <?php
          if(isset($_SESSION['user_id'])){
            echo '<li><a href="./west/in.html">Search  </a></li>';
              echo '<li><a href="logout.php">Logout</a></li>';
          }
          else{
            
        echo '<li><a href="register.php">Register</a></li>
        <li><a href="login.php" class="login banner__button"> Login</a></li>';
          }
        ?>
      </ul>
    </div>
    <!-- nav End -->
    
    <header class="banner">
      <div class="banner__contents">
        <h1 class="banner__title">Spencer</h1>
        <h1 class="banner__description">
          To carry out the biggest heist in history, a mysterious man called The
          Professor recruits a band of eight robbers who have a single
          characteristic: n...
        </h1>
        <a href="https://youtu.be/Lagauhb5GyY" class="banner__button">Play Trailer</a>
      </div>
      <div class="banner--fadeBottom"></div>
    </header>

     <div class="wrapper">
    <!-- MAIN CONTAINER -->
    <section class="main-container">
      <div class="location" id="home">

        <h1 class="mv_title">New Movies</h1>
        <p class="mv_title">Recently Added Movies</p><hr>
        <div class="box" id="trendingnow">
        </div>
        
        <h1 class="mv_title"> New TV Series</h1>
          <p class="mv_title"> Recently Added Movies</p><hr>
          <div class="box" id="documentries">
          </div>   

          <h1 class="mv_title">Action Movies</h1><hr>
          <div class="box" id="actionmovie">
          </div>
      </div> 

      <h1 class="mv_title">Netflix Originals</h1><hr>
      <div class="box" id="toprated">
      </div>
      </section>
      <!-- END OF MAIN CONTAINER -->
  
      <footer >
        <p> Copyright &copy;2022 PopcronFree.co</p>
      </footer>  

  <script>
    const nav = document.getElementById("nav");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        nav.classList.add("nav__black");
      } else {
        nav.classList.remove("nav__black");
      }
    });
  </script>
  <script src="./js/index.js"></script>
  <script src="./js/script.js"></script>

  </body>
</html>
