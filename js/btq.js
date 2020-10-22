function buttonToggle(where, pval, nval) {
    var elem = document.getElementById(where.attributes.rel.value);
    where.value = (where.value == pval) ? nval : pval;
    elem.style.display = (elem.style.display == 'block') ? 'none' : 'block';
}

$(document).on("click mousemove",function(e){ 
    var x = e.clientX/$(window).width();
    var y = e.clientY/$(window).height();
  
    var newposX = -x*10;
    var newposY = -y*10;
    $(".wheel").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
});

var elements = document.getElementsByClassName("btq-gi-column");
var i;
for (i = 0; i < elements.length; i++) 
{
  elements[i].style.flex = "25%";
}
