window.addEventListener("load", function () {
		const loader = document.querySelector(".loader");
		loader.className += " hidden"; // class "loader hidden"
		});
var all = document.getElementById("blur");
var modal = document.getElementById("myModal");
var btn = document.getElementById("menu-icon");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
	modal.style.display = "block";
	btn.classList.add('de-emphasized');
	all.classList.add('de-emphasized');
}								
span.onclick = function(){
	modal.style.display = "none";
	btn.classList.remove('de-emphasized');
	all.classList.remove('de-emphasized');		
}	
window.onclick = function(event){
  if(event.target == modal){
	modal.style.display = "none";
	btn.classList.remove('de-emphasized');
	all.classList.remove('de-emphasized');			
	}
}
function tagFunction(){
	modal.style.display = "none";
	btn.classList.remove('de-emphasized');
	all.classList.remove('de-emphasized');		
}



$(document).ready(function(){
  $("#menu-icon").click(function(){
    $("#myModal-content").animate({
      top:'toggle'
    });
  });
});