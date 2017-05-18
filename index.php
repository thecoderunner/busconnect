<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="img/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon-precomposed" sizes="60x60" href="img/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="img/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon-precomposed" sizes="76x76" href="img/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="img/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="img/favicon-196x196.png" sizes="196x196" />
  <link rel="icon" type="image/png" href="img/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="img/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="img/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="img/favicon-128.png" sizes="128x128" />
  <meta name="application-name" content="&nbsp;"/>
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta name="msapplication-TileImage" content="img/mstile-144x144.png" />
  <meta name="msapplication-square70x70logo" content="img/mstile-70x70.png" />
  <meta name="msapplication-square150x150logo" content="img/mstile-150x150.png" />
  <meta name="msapplication-wide310x150logo" content="img/mstile-310x150.png" />
  <meta name="msapplication-square310x310logo" content="img/mstile-310x310.png" />


  <title>Bus Connect</title>
  <link href='//fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="css/normalize.css">  
  <link rel="stylesheet" href="css/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="css/main.css">
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha1.js"></script>  
  <script src="js/config.js"></script>  
</head>
<body>
  <div class="container">          
    <h1>Bus Connect</h1>
    <header></header>
    <div id="trainbuttons">
      <button type='button' id='flindersst' class='btntrain btn btn-primary'>Flinders St</button>
      <button type='button' id='melbournecentral' class='btntrain btn btn-primary'>Melboure Central</button>
      <button type='button' id='parliament' class='btntrain btn btn-primary'>Parliament</button>
      <button type='button' id='southerncross' class='btntrain btn btn-primary'>Southern Cross</button>
      <button type='button' id='richmond' class='btntrain btn btn-primary'>Richmond</button>      
      <button type='button' id='boxhill' class='btntrain btn btn-primary'>Box Hill</button>
      <!--<button type='button' id='ringwood' class='btntrain btn btn-primary'>Ringwood</button>!-->
    </div>  
    <div id="trainList" class="">        
    </div>
    <div id="trainList2" class="">        
    </div>                
    <div id="busList" class="">        
    </div>         
  </div>  
<footer class="fixed-bottom"><p>Copyright 2017 &copy;</p></footer>    
<script src="js/functions.js"></script>
<script src="js/app.js?"></script>
</body>
</html>