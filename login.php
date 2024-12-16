<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<form action="login.php" method="get">
    <label for="uname">Enter your username here:</label>
    <input type="text" name="username">
    <br>
    <label for="password">Enter your password here:</label>
    <input type="text" name="password">
<input type="submit" value="log in">

</form>
</body>
</html>

<?php
echo "{$_GET["username"]} <br>";
echo "{$_GET["password"]} <br>";



?>