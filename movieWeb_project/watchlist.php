<html>
<head>

</head>

<body>
<h1 class="mv_title">Your Watchlist</h1>
        <div class="box" id="trendingnow">
        </div>
<?php
    include "connection.php";
    $query = "SELECT w.id,w.userid,w.movieid FROM watchlist w,users u WHERE u.id=w.userid;";

    if ($result = mysqli_query($conn, $query)) {
        while ($row = mysqli_fetch_row($result)) {
            echo "
                <script>
                window.onload = function(){
                    
                    let trendingnow = document.getElementById('trendingnow');
                    fetch(`https://api.themoviedb.org/3/movie/$row[2]?api_key=c0b396111ea91e3dd8adc069f9c9529b&language=en-US`).
                    then((res)=>res.json()).then((data)=>{
                        let results = data?.results;

                        // for (let i = 0; i < results.length; i++) {
                            let div = document.createElement('div');
                            div.className = 'movie_container';

                            let img = document.createElement('img');
                            img.src =
                            'https://image.tmdb.org/t/p/original/' + results.backdrop_path;
                            img.className = 'row__poster';
                            img.height = '300';
                            img.width = '300';
                            div.append(img);

                            let btn = document.createElement('button');
                            let textNode = document.createTextNode('Remove From watchlist');
                            btn.className = '';
                            btn.appendChild(textNode);

                            btn.addEventListener('click', () => {
                            window.location = `removeFromWatch.php?movie_id=${results[i].id}`;
                            });

                            div.append(btn);

                            trendingnow.append(div);
                    }).catch((err)=>{});
                };
                </script>
            ";
        }
        mysqli_free_result($result);
    }

    mysqli_close($con);
    else{
        echo "<h5>No Items in watchlist!<h5>";
    }

?>

</body>
</html>