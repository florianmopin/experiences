$("#interno").hover(
  function(){
  	$("#esterno").attr("class", "over");
  	$("#bordo").attr("class", "over");
  	$("#content-txt").attr("class", "over");
	},
  function(){
  	$("#esterno").attr("class", "");
  	$("#bordo").attr("class", "");
  	$("#content-txt").attr("class", "");
	}
);