<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<form action="form.php" method="get">
<label>User</label>
<button type="button" onclick="loadDoc()">+</button>
</form>
</body>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
</script>

</html>