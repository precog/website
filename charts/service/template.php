<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>'+$info['title']+'</title>
<link rel="stylesheet" type="text/css" href="<?php echo $CSS_API; ?>"/>
<link rel="stylesheet" type="text/css" href="../samples/css/sample.css"/>
<script src="<?php echo $VIZ_API; ?>"></script>
<?php
if($info['style'])
{
	echo "<style>\n";
	echo $info['style']."\n";
	echo "</style>\n";
}
?>
</head>
<body>
<div id="chart"<?php echo ($info['class']?' class="'.$info['class'].'"':'')?>></div>
<script>
<?php 
	echo $info['data'];
	echo "\n\n";
	echo $info['viz'];
	echo "\n";
?>
</script>
</body>
</html>