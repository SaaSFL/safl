<?php
 session_start();
 require_once 'dbconfig.php';

$POSTDATA = FILE_GET_CONTENTS("PHP://INPUT");
$REQUEST = JSON_DECODE($POSTDATA);
$agentname = $REQUEST->agentname;


  //  $user_email = trim($_POST['user_email']);
  // $user_password = trim($_POST['password']);



  try
  {

 if(1==1){
    echo $agentname;
   }
   else{

    echo "0"; // wrong details
   }

  }
  catch(PDOException $e){
   echo $e->getMessage();
  }


?>
