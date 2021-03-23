
$("a").mouseover(function(){
  var dropdown = ($(this).siblings(".hoverMenu")); //sibling() prende il fratello
  dropdown.css("display", "block");
})
$("a").mouseout(function(){
  var dropdown = ($(this).siblings(".hoverMenu"));
  dropdown.css("display", "none");
})
