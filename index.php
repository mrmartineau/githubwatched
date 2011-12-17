<!DOCTYPE html>
<!--[if IEMobile 7 ]>   <html class="no-js ie iem7">            <![endif]-->
<!--[if lt IE 7 ]>      <html class="no-js ie ie6" lang="en">   <![endif]-->
<!--[if IE 7 ]>         <html class="no-js ie ie7" lang="en">   <![endif]-->
<!--[if IE 8 ]>         <html class="no-js ie ie8" lang="en">   <![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!-->
<html class="no-js" lang="en"><!--<![endif]-->
<head>
	<meta charset="UTF-8">
	<title>Github watched</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<!-- !CSS -->
	<link rel="stylesheet" href="css/boost.css?v=2">
	<!-- !Modernizr - All other JS at bottom -->
	<script src="js/libs/modernizr.js"></script>

	<meta http-equiv="cleartype" content="on">
</head>
<!-- !Body -->
<body>
	<div id="container">
		<header id="header" class="row" role="banner">
			<h1><a href="https://github.com/mrmartineau/githubwatched" class="column grid_12">Github  watched</a></h1>
			by <a href="http://github.com/mrmartineau" title="Zander Martineau">Zander Martineau</a>
		</header>
		<section id="main" role="main" class="row">
			<div class="grid_12 column">
				<form method="post">
					<input type="text" placeholder="Enter your Github username and hit enter" id="username_entry" class="input_xxlarge"/>
					<input type="submit" value="submit">
				</form>
			</div>
			<div class="column grid_6">
				<h2>Watched repos</h2>
				<div id="watched" class="wrappers"></div>
			</div>
			<div class="column grid_6">
				<h2>Your repos</h2>
				<div id="your" class="wrappers"></div>

			</div>

		</section><!-- /main -->
	</div><!--!/#container -->
	<!-- !Javascript - at the bottom for fast page loading -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="js/libs/jquery.min.js"><\/script>')</script>
	<script src="js/script.js?v=1"></script>

	<noscript>Your browser does not support JavaScript. Please turn it on for the best experience.</noscript>
	</body>
</html>