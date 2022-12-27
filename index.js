let presentation = document.querySelector(".presentation");
let slides = document.querySelectorAll(".slide");
let currentSlide = document.querySelector(".slide.show");

var slideNumber = document.querySelector(".counter");
var toLeftBtn = document.querySelector("#left-btn");
var toRightBtn = document.querySelector("#right-btn");
var toSave = $("#save");

let presentationController = document.querySelector("#presentation-area");
var toFullScreenBtn = document.querySelector("#full-screen");
var toSmallScreenBtn = document.querySelector("#small-screen");


//alert("gffd")

// initailize defualt values
var screenStatus = 0;
var currentSlideNo = 1;
var totalSides = 0;

// run init script
init();

function init() {
  getCurrentSlideNo();
  totalSides = slides.length;
  setSlideNo();
  hideLeftButton();
  hideRightButton();
}

const startbtn = async () => {
  console.log('hiij')
  const cont = document.querySelectorAll(".slide")[currentSlideNo];
  console.log(cont)
  return
  // $.post(
  //   "update.php",{pgno: currentSlideNo,content:cont[currentSlideNo]},function(data){
  //     console.log(data)
  //   },"json");
  console.log((cont[currentSlideNo]).parseHTML)
  return
  var formData = new FormData();
  formData.append('pgno', currentSlideNo);
  formData.append('content', (cont[currentSlideNo]).toString());
  await fetch('update.php', {
    method: "POST",
    body: formData
  })
    .then(response => {
      var data = response.json()
      return data
    }
    )
    .then(data => {
      console.log(data)
      // if (data.response_code == 200) {
      //   jerseyBase = data.response.data
      //   created_jersey.src = jerseyBase
      //   setTimeout(() => {
      //     toggleSwitcher("#popup_loading", "#popup_success")
      //   }, 1500)
      // } else {
      //   created_jersey_error.innerHTML = '<span class="price color-popup">Error :</span> ' + data.message
      //   setTimeout(() => {
      //     toggleSwitcher("#popup_loading", "#popup_failed")
      //   }, 1500)
      // }

    })
    .catch(err => {
      // created_jersey_error.innerHTML = '<span class="price color-popup">Error :</span> Server Error, please try after sometime.'
      // setTimeout(() => {
      //   toggleSwitcher("#popup_loading", "#popup_failed")
      // }, 1500)
      console.log(err)
    });
  //   $.ajax({
  //     type: "POST",
  //     url: 'update.php',
  //     dataType:'json',
  //     data:{pgno: currentSlideNo,content:cont[currentSlideNo]} ,
  //     processData:false,
  // }).done( function(response)
  // {
  //     console.log(response)
  // });
}

// handle clicks on left and right icons
toLeftBtn.addEventListener("click", moveToLeftSlide);
toRightBtn.addEventListener("click", moveToRightSlide);

// handle full screen and small screen modes
toFullScreenBtn.addEventListener("click", fullScreenMode);
toSmallScreenBtn.addEventListener("click", smallScreenMode);

toSave.on("click", startbtn);



// hide left button at first page
function hideLeftButton() {
  if (currentSlideNo == 1) {
    toLeftBtn.classList.remove("show");
  } else {
    toLeftBtn.classList.add("show");
  }
}

// hide right button at last page
function hideRightButton() {
  if (currentSlideNo === totalSides) {
    toRightBtn.classList.remove("show");
  } else {
    toRightBtn.classList.add("show");
  }
}

// moves to left slide
function moveToLeftSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.previousElementSibling;
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");

  init();
}

// moves to right slide
function moveToRightSlide() {
  var tempSlide = currentSlide;
  currentSlide = currentSlide.nextElementSibling;
  tempSlide.classList.remove("show");
  currentSlide.classList.add("show");

  init();
}

// get current slide
function getCurrentSlideNo() {
  let counter = 0;

  slides.forEach((slide, i) => {
    counter++;

    if (slide.classList.contains("show")) {
      currentSlideNo = counter;
    }
  });
}

// go full screen
function fullScreenMode() {
  presentationController.classList.add("full-screen");
  toFullScreenBtn.classList.remove("show");
  toSmallScreenBtn.classList.add("show");

  screenStatus = 1;
}

// switch to small screen
function smallScreenMode() {
  presentationController.classList.remove("full-screen");
  toFullScreenBtn.classList.add("show");
  toSmallScreenBtn.classList.remove("show");

  screenStatus = 0;
}

// update counter
function setSlideNo() {
  slideNumber.innerText = `${currentSlideNo} of ${totalSides}`;
}

