<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
   
  <!-- Font Awesome Icon CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
 
 

<div class="container">
  <div id="presentation-area">
    <section class="presentation">
    <?php
$con = mysqli_connect('localhost', 'groot', '123', 'presenter');
$sql = "SELECT * FROM `page1`;";
$res = $con->query($sql);
if($res->num_rows > 0){
	while($row = $res->fetch_assoc()){
		echo $row['content1'];
	}
}
?>


    <section class="counter">
      1 of 6
    </section>

    <section class="navigation">
    <button id="save" class="btn-save">
        <i class="fas fa-save"></i>
      </button>

      <button id="full-screen" class="btn-screen show">
        <i class="fas fa-expand"></i>
      </button>

      <button id="small-screen" class="btn-screen">
        <i class="fas fa-compress"></i>
      </button>

      <button id="left-btn" class="btn">
        <i class="fas fa-solid fa-caret-left"></i>
      </button>

      <button id="right-btn" class="btn">
        <i class="fa-solid fa-caret-right"></i>
      </button>
    </section>
  </div>
</div>


</section>
    </div>
  </div>
<script src = "https://code.jquery.com/jquery-3.6.1.min.js"></script> 
<script src="./index.js" type="text/javascript"></script>
</body>
</html>
