<!DOCTYPE html>
<html lang="en">

<head>
	<link href="<?php echo get_stylesheet_directory_uri().'/'; ?>style.css" type="text/css" rel="stylesheet" />
</head>

<body>

<?php 

	$logo = get_field('logo',11);
?>
	<img src="<?php echo $logo['url']; ?>" />