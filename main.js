function openNav() {
  document.getElementById("mySidepanel").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function changer(x) {
  let hampanel1 = document.getElementById("mySidepanel");
  let hambutton = document.getElementById("tpanel");
  let hampanel2 = document.getElementById("mySidepanel2");
  if (x.matches) { // If media query matches
    hampanel1.style.display = "none";
    hambutton.style.display = "none";
    hampanel2.style.display = "flex";
  } else {
    hampanel1.style.display = "block";
    hambutton.style.display = "block";
    hampanel2.style.display = "none";
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 650px)")

// Call listener function at run time
changer(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  changer(x);
});


// this is serviceChanger section
function bigImg1(x) {
  // by using single css property
 document.getElementById('serviceImg1').style.cssText = "visibility: visible;";
 // by using multiple styles with cssText
 document.getElementById('serviceSection1').style.cssText = "border: none;  box-shadow: none; height: 260px; margin-top:7%";
 // inmormateUs();
}
function normalImg1(x) {
 // by using single css property
 document.getElementById('serviceImg1').style.visibility = "hidden";
 // by using multiple styles with setAttribute()
 var section = document.querySelector('#serviceSection1');
 section.setAttribute(
     "style",
     " border-radius: 20px; height: 200px; "
 );
}

function bigImg2(x) {
 var bmaker = document.getElementById('serviceImg2');
 bmaker.style.display = "block";
 document.getElementById('serviceSection2').style.cssText = "border: none;  box-shadow: none; height: 260px; margin-top:7%";
}
function normalImg2(x) {
 document.getElementById('serviceImg2').style.display = "none";
 document.getElementById('serviceSection2').style.cssText = " border-radius: 20px; height: 200px;";
}

function bigImg3(x) {
 document.getElementById('serviceImg3').style.visibility = "visible";
 document.getElementById('serviceSection3').style.cssText = "border: none;  box-shadow: none; height: 260px; margin-top:7%";
}
function normalImg3(x) {
 document.getElementById('serviceImg3').style.visibility = "hidden";
 document.getElementById('serviceSection3').style.cssText = " border-radius: 20px; height: 200px;";
}

function bigImg4(x) {
 document.getElementById('serviceImg4').style.visibility = "visible";
 document.getElementById('serviceSection4').style.cssText = "border: none;  box-shadow: none; height: 260px; margin-top:7%";
}
function normalImg4(x) {
 document.getElementById('serviceImg4').style.visibility = "hidden";
 document.getElementById('serviceSection4').style.cssText = " border-radius: 20px; height: 200px;";
}

function bigImg5(x) {
 document.getElementById('serviceImg5').style.visibility = "visible";
 document.getElementById('serviceSection5').style.cssText = "border: none;  box-shadow: none; height: 260px; margin-top:7%";
}
function normalImg5(x) {
 document.getElementById('serviceImg5').style.visibility = "hidden";
 document.getElementById('serviceSection5').style.cssText = " border-radius: 20px; height: 200px;";
}

function bigImg6(x) {
 document.getElementById('serviceImg6').style.visibility = "visible";
 document.getElementById('serviceSection6').style.cssText = "border: none;  box-shadow: none; height: 260px; margin-top:7%";
}
function normalImg6(x) {
 document.getElementById('serviceImg6').style.visibility = "hidden";
 document.getElementById('serviceSection6').style.cssText = " height: 200px;";
}
function remover1(x){
 document.getElementById('nav1').style.position = "initial";
}
function remover2(x){
 document.getElementById('nav1').style.position = "sticky";
}

//callsection bar

function numAdder() {
  clients();
  staff();
  projects();
}
function clients() {
  let number = parseInt(document.getElementById('num1').innerHTML);
  setInterval(() => {
    if (number < 5200) {
      number += 20;
      const obj = document.getElementById('num1');
      obj.innerText = number;
      // console.log(number);
    }
  }, 1)
}

function staff() {
  let number = parseInt(document.getElementById('num2').innerHTML);
  setInterval(() => {
    if (number < 52) {
      number = number + 1;
      const obj = document.getElementById('num2');
      obj.innerText = number;
      // console.log(number);
    }
  }, 29)
}
function projects() {
  let number = parseInt(document.getElementById('num3').innerText);
  setInterval(() => {
    if (number < 3811) {
      document.getElementById("num3").innerText = number += 20;
    }
  }, 3.5)
}


//slider bar section
let slideIndex = 0;
currentSlide(slideIndex);
function plusSlides(n) {
  try {
    if (n < 0) {
      // return showSlides(slideIndex = n - 4);
      return currentSlide(n -= 1);

    } else {
      // return showSlides(slideIndex += n);  
      return showSlides(n += 1);
    }

  } catch (error) {
    console(error)
  }

}
function currentSlide(n) {

  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let l = slides.length;
  let dots = document.getElementsByClassName("dots");
  let d = dots.length;
  if (n > l) {
    // if (n == 6) {
    // slideIndex = 1
    slideIndex = parseInt(n / 3)
    // }     
  }
  if (n < 1) { slideIndex = l }
  for (i = 0; i < l; i++) {
    // console.log(l);
    slides[i].style.display = "none";
  }
  if (slideIndex > l) { slideIndex = 1 }
  for (i = 0; i < d; i++) {
    // console.log(d);
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // console.log("before", slideIndex);
  slideIndex++;
  // console.log("after", slideIndex);

}
// setTimeout(showSlides, 3000); // Change image every 3 seconds
setInterval(showSlides, 3000);//another method for changing every 3 seconds


//chatarea
var messege = document.getElementById("chatarea");
function printer() {
    // alert(messege.value);    
    // alert(chatarea.value); also work

    // Create element:
    const para = document.createElement("p");
    const bot = document.createElement("p");
    para.innerText = messege.value;
    // Append to body:
    let paraStyle = document.getElementById("box").appendChild(para);
    paraStyle.style.cssText = "color: #ffffff; padding: 2%; margin-left: 60%; margin-top:5%; display: flow-root; text-align: right; align-content: end; align-items: end; width: max-content; height: max-content; background-color: #e99c9f; border-radius: 20px 3px 20px 20px;";
    function botchat() {
        // alert(paraStyle.innerText);
        let questions = {
            "hi": "hello",
            "hello": "hello to",
            "how are you": "i am fine how can i help you"

        };
        let botStyle;
        if (para.innerText in questions) {
            bot.innerText = questions[para.innerText];
            botStyle = document.getElementById("box").appendChild(bot);
        }
        else {
            bot.innerText = "sorry i have not any data";
            botStyle = document.getElementById("box").appendChild(bot);
        }
        botStyle.style.cssText = "color: #ffffff; padding: 2%; margin-left: 2%; margin-top:5%; text-align: left; width: max-content; height: max-content; background-color: #e9009f; border-radius: 3px 20px 20px 20px;";
    }
    botchat();
}
let chatbot = document.getElementById("chatbt");
let chatbotButton = document.getElementById("chatbotBox");

function openchat() {
    // chatbotButton.value = "hi";
    chatbot.style.cssText = "display: block; width:300px;";
    chatbotButton.style.cssText = "display: none; width:0px;";
}

function closechat() {
    // alert(chatbotButton.value);
    chatbot.style.cssText = "display: none; width:0px;";
    chatbotButton.style.cssText = "display: block; width:50px;";
}

//Make the DIV element draggagle:
dragElement(chatbotButton);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("image")) {
        //   if (document.getElementById(elmnt.id + "image")) 
/* if present, the header is where you move the DIV from:*/
    document.getElementById("image").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}