# yzpDrapmenu
##Intance
###html code
```html
<!DOCTYPE html>
<html>
	<head>
		<title>mydropdown</title>
		<meta charset='utf-8'>
		<link href='css/yzpDropmenu.css' rel=stylesheet>
	</head>
	<body ng-app='yzpDropmenu'>
	    <div style="width:100px;">
		<yzp-dropmenu name='列表' items=['item1','item2','item3'] ></yzp-dropmenu>
		</div>
	</body>
	<script src='js/angular.js'></script>
	<script src='js/yzpDropmenu.js'></script>
</html>
```
##API
name string define the content of the dropbutton
<br>
items array define the content of dropmenuList
