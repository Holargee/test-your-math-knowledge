function submit(){
	var a = document.getElementById("text1").value;	
	var b = document.getElementById("text2").value;
	var c = a - -b;
	document.getElementById("text3").value = c;

}
function submit1(){
setTimeout(function(){
	var a = Math.trunc(Math.random() * 200);
	var b = Math.trunc(Math.random() * 200);
	document.getElementById("txt1").value = a;	document.getElementById("txt2").value = b;},1000)	
}
function submit2(){
	var a = document.getElementById("txt1").value;	
	var b = document.getElementById("txt2").value;
	var c = document.getElementById("txt3").value;
	var e = document.getElementById("noti");
	var f = document.getElementById("noti1");
	var d = a - -b;
	if( d == c){e.style.display="block";setTimeout(function(){e.style.display="none";c ="0"},1000);}
else{f.style.display="block";setTimeout(function(){f.style.display="none"},1000);}
}
				
