<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
	$username = $_GET['u'];
	$activityid = $_GET['a'];
	//print_r($activityid);
	$tally = $_GET['p'];
	$xml = simplexml_load_file('XML/'.$username.".xml");
	foreach( $xml->xpath( '//activity') as $activity) {
		if($activity->id==$activityid)
		{
			//print_r($activity);
			$activity->tally=$tally;
			print_r($activity->tally);
    		$xml->asXml('XML/'.$username.'.xml');
		}
		
	} 
	//echo $xml['PROFILE']['USERNAME'];
?>