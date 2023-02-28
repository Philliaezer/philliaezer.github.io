window.onscroll = function() {scrollSign(); scrollFunction()};

function scrollSign() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("minhaBar").style.width = scrolled + "%";
}
// Criar onevent.js, para armazenar os manipuladores de eventos

window.ononline = function() {estaOnline()}
function estaOnline(){alert("Você está online");}

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  mybutton.style.display = "block";
  } else {
  mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
var slideIndex = 1;
var mmd = document.getElementById('myModal');

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

function openModal(xy) {
  switch(xy){
  	case 'myModal':
  		document.getElementById(xy).style.display = "block";
  		mmd.webkitRequestFullscreen();
  	break;
  				
  	case 'settings':
  		document.getElementById(xy).style.display = "block";
  		var x = document.getElementById("navDemo");
  		x.className += " w3-show";
  	break;
  				
  	default:
  		document.getElementById(xy).style.display = "block";
  	break;
  };
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  mmd.style.display = "none";
  document.getElementById(xy).style.display = "none";
  document.webkitExitFullscreen();
  document.exitFullscreen();
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var e;
  var x = document.getElementsByClassName("mySlidess");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (e = 0; e < x.length; e++) {
    x[e].style.display = "none";
  }
  for (e = 0; e < dots.length; e++) {
    dots[e].className = dots[e].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
var anderson = document.getElementById('ticketAnderson');
var gustavo = document.getElementById('ticketGustavo');
var guilherme = document.getElementById('ticketGuilherme');
var bioResum = document.getElementById('bio-resum');
var urlcall = document.getElementById('urlcall');
var settings = document.getElementById('settings');
var tag = document.createElement('script');
  
window.onclick = function(event) {
  // Um dos conceitos da programação é o de diminuir o tempo de trabalho
  // Então, por que raios esse código não tem um for loop???

  if (event.target == modal) {
    modal.style.display = "none";
  }
  
  if (event.target == anderson) {
    anderson.style.display = "none";
  }
  
  if (event.target == gustavo) {
    gustavo.style.display = "none";
  }
  
  if (event.target == guilherme) {
    guilherme.style.display = "none";
  }

  if (event.target == urlcall) {
    urlcall.style.display = "none";
  }

  if (event.target == bioResum) {
    bioResum.style.display = "none";
  }

  if (event.target == settings) {
    settings.style.display = "none";
  }
}

tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '100%',
        videoId: 'wtvE6z2c1rc'
    });
    }

    function stopVideo() {
    player.stopVideo();
    }

// Get the button:
let mybutton = document.getElementById("myBtnio");

function disablen(eita){
  	event.preventDefault();
  	document.getElementById('urlcall').style.display = "block";
  	ponto = document.getElementsByClassName("oiada");	
    for (i = 0; i < ponto.length; i++) {
    ponto[i].setAttribute("href",eita);
    }
  }

function chTheme(){
	var themerIer = document.getElementById('body');
	var themer = themerIer.getAttribute('theme');
							
	if(themer == 'light'){
		themerIer.setAttribute('theme','dark');
		document.getElementById('all-content').classList.add('w3-darker');
		document.getElementById('all-content').classList.remove('w3-lighter');
		document.getElementById('rftb').classList.add('w3-table-black');
		document.getElementById('rftb').classList.remove('w3-table-all');
		document.getElementById('theme-icon').classList.add('fa-sun');
		document.getElementById('theme-icon').classList.remove('fa-moon');
		document.getElementById('quotte').classList.add('w3-bck-greyer');
		document.getElementById('quotte').classList.remove('w3-light-grey');
	};
							
	if(themer == 'dark'){
		themerIer.setAttribute('theme','light');
		document.getElementById('all-content').classList.add('w3-lighter');
		document.getElementById('all-content').classList.remove('w3-darker');
		document.getElementById('rftb').classList.add('w3-table-all');
		document.getElementById('rftb').classList.remove('w3-table-black');
		document.getElementById('theme-icon').classList.add('fa-moon');
		document.getElementById('theme-icon').classList.remove('fa-sun');
		document.getElementById('quotte').classList.add('w3-light-grey');
		document.getElementById('quotte').classList.remove('w3-bck-greyer');
	};
};

// Desculpe, esse site ainda está bastante desorganizado
// Mas, estou tratando de atualizar essa bagaça :)