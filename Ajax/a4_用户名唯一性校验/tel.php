<?PHP
		$tel=$_POST["tel"];
		/*校验电话码格式 */
			if($tel=="0000"){
				echo "tel OK";
			}else{
				echo "tel error";
			}
?>