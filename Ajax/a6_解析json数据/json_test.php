<?php
	header('content-type:application/json;charset=utf8');  //响应头信息，识别为json文件
	$arr=array(  
	array(
		 "name"=>"张三", 
		"age"=>"20",
		"sex"=>"男",
		),  
	array(
		"name"=>"李四", 
		"age"=>"21",
		"sex"=>"女",
		),
	array(
		"name"=>"王五", 
		"age"=>"30",
		"sex"=>"男",
		)
			);  
  	// $result=array("status"=> 1,"data"=>$arr,"msg"=>"获取商品信息成功");
    // $json=json_encode($result);
	$json=json_encode($arr);//json_encode：将数值转换成json数据存储格式
	echo $json;