<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<style>
			*{
				margin: 0px;
				padding: 0px;
			}
		</style>
	</head>
	<body>
		<?php
			// 二维数组模拟数据库
			$data=array();
			$data["123"]=array("name"=>"张三","chinese"=>"80","math"=>"60","english"=>"96");
			$data["456"]=array("name"=>"李四","chinese"=>"78","math"=>"90","english"=>"67");
			$data["789"]=array("name"=>"王五","chinese"=>"90","math"=>"97","english"=>"76");
			// get方法得到表单html提交内容
			$idname=$_GET["idname"];
			// 传递结果
			$result=$data[$idname];
		?>
		<?php
			if(array_key_exists($idname,$data)){
		?>
		<h1><?php echo $result["name"] ?>成绩表</h1>
		<ul>
			<li>语文：<?php echo $result["chinese"] ?></li>
			<li>数学：<?php echo $result["math"] ?></li>
			<li>英语：<?php echo $result["english"] ?></li>
		</ul>
		<?php }else{ ?>
		<div>
			<p>
				查询不到该学生！
			</p>
		</div>
		<?php } ?>
	</body>
<html>