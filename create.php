<?php
$username = $_POST["username"];
$password = $_POST["password"];
$telephone = $_POST["telephone"];
$email = $_POST["email"];
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, Content-Type");
$servername = "localhost";
$susername = "root";
$spassword = "usbw";
$dbname = "profiling";
$conn = mysqli_connect($servername,$susername,$spassword,$dbname);
if ($conn->connect_error)
{
    die("Connection Failed" . $conn->connect_error) ;
} 
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json , true);
$sql = 'INSERT INTO users (username, password, telephone, email) values("' . $username . '","' . $password . '","' . $telephone . '","' . $email . '")';
if($conn->query($sql) === TRUE)
{
    $outp = "Successful";
    echo json_encode($outp);
}else {
    echo json_encode("Error " . $conn->error);
}
$conn->close();
?>

