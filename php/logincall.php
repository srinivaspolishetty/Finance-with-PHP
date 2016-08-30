<?php
$data = file_get_contents("php://input");
$objData = json_decode($data);
$link = mysqli_connect("103.209.144.117", "srinivasfin", "Ap28bc@4649", "myfinancedetails");
 

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}




$username = $objData->username;
$password = $objData->password;

$sql = "select * from userdetails where username ='".$username."' AND password = '".$password."'";
$result = mysqli_query($link, $sql);



$emparray = array();

while($row =mysqli_fetch_assoc($result))
    {

    	//print_r($row);
        $emparray[] = $row;
    }
echo json_encode($emparray);














 

mysqli_close($link);
?>