<?php 
$con = mysqli_connect('localhost', 'groot', '123', 'presenter');
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST"){
    //print_r($_POST["pgno"]);
    $sql = "UPDATE `page1` SET content1 ='".$_POST['content']."' WHERE id='".$_POST['pgno']."'";
    //echo $sql;
    $con->query($sql);
    print_r($sql);
}