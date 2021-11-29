<?php
	$username=$_GET["username"];
	// 此处应该查询数据库
	if($username=="zhangsan"){
		echo "此用戶已注冊";
	}else{
		echo "此用戶可以注冊";
	}
?>