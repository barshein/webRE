/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function showDiv() {
    var oneOrMoreIsSelected = 0;
    var descriptionButton = document.getElementById("btncheck1");
    var imagesButton = document.getElementById("btncheck2");
    if (descriptionButton.checked) {
        document.getElementById("uploadDescriptionDiv").className = '';
        document.getElementById("sendDataDiv").style.visibility = 'visible';
        oneOrMoreIsSelected = 1;
    }
    else {
        document.getElementById("uploadDescriptionDiv").className = 'hidden';
    }
    if (imagesButton.checked) {
        document.getElementById("uploadImagesDiv").className = '';
        document.getElementById("sendDataDiv").style.visibility = 'visible';
        oneOrMoreIsSelected = 1;
    } 
    else {
        document.getElementById("uploadImagesDiv").className = 'hidden';
    }
    if (oneOrMoreIsSelected == 0) {
        document.getElementById("sendDataDiv").style.visibility = 'hidden';
    }
}
  
// Attach click listeners onload
window.onload = function() {
[].forEach.call(document.querySelectorAll('[name="selectActions"]'), function(button) {
    button.onclick = showDiv;
    [].forEach.call(document.querySelectorAll('[name="selectActions"]'), function(button){
        document.getElementById(button.dataset.divid).className = 'hidden';
    })
    })
    document.getElementById("sendDataDiv").style.visibility = 'hidden';
}

var loginWay;
function sendOnClick() {
  if (loginWay != null) {
    document.getElementById("ResponseBanner").className = '';
    loadBanner();
  }
  else {
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'))
    myModal.show()
    // document.getElementById("loginButton").click();
    console.log("The user is not logged in")
  }
}

//I added event handler for the file upload control to access the files properties.
document.addEventListener("DOMContentLoaded", init, false);

//To save an array of attachments
var AttachmentArray = [];

//counter for attachment array
var arrCounter = 0;

//to make sure the error message for number of files will be shown only one time.
var filesCounterAlertStatus = false;

//un ordered list to keep attachments thumbnails
var ul = document.createElement("ul");
ul.className = "thumb-Images";
ul.id = "imgList";

function init() {
  //add javascript handlers for the file upload event
  document
    .querySelector("#files")
    .addEventListener("change", handleFileSelect, false);
}

//the handler for file upload event
function handleFileSelect(e) {
  //to make sure the user select file/files
  if (!e.target.files) return;

  //To obtaine a File reference
  var files = e.target.files;

  // Loop through the FileList and then to render image files as thumbnails.
  for (var i = 0, f; (f = files[i]); i++) {
    //instantiate a FileReader object to read its contents into memory
    var fileReader = new FileReader();

    // Closure to capture the file information and apply validation.
    fileReader.onload = (function(readerEvt) {
      return function(e) {
        //Apply the validation rules for attachments upload
        ApplyFileValidationRules(readerEvt);

        //Render attachments thumbnails.
        RenderThumbnail(e, readerEvt);

        //Fill the array of attachment
        FillAttachmentArray(e, readerEvt);
      };
    })(f);

    // Read in the image file as a data URL.
    // readAsDataURL: The result property will contain the file/blob's data encoded as a data URL.
    // More info about Data URI scheme https://en.wikipedia.org/wiki/Data_URI_scheme
    fileReader.readAsDataURL(f);
  }
  document
    .getElementById("files")
    .addEventListener("change", handleFileSelect, false);
}

//To remove attachment once user click on x button
jQuery(function($) {
  $("div").on("click", ".img-wrap .close", function() {
    var id = $(this)
      .closest(".img-wrap")
      .find("img")
      .data("id");

    //to remove the deleted item from array
    var elementPos = AttachmentArray.map(function(x) {
      return x.FileName;
    }).indexOf(id);
    if (elementPos !== -1) {
      AttachmentArray.splice(elementPos, 1);
    }

    //to remove image tag
    $(this)
      .parent()
      .find("img")
      .not()
      .remove();

    //to remove div tag that contain the image
    $(this)
      .parent()
      .find("div")
      .not()
      .remove();

    //to remove div tag that contain caption name
    $(this)
      .parent()
      .parent()
      .find("div")
      .not()
      .remove();

    //to remove li tag
    var lis = document.querySelectorAll("#imgList li");
    for (var i = 0; (li = lis[i]); i++) {
      if (li.innerHTML == "") {
        li.parentNode.removeChild(li);
      }
    }
  });
});

//Apply the validation rules for attachments upload
function ApplyFileValidationRules(readerEvt) {
  //To check file type according to upload conditions
  if (CheckFileType(readerEvt.type) == false) {
    alert(
      "The file (" +
        readerEvt.name +
        ") does not match the upload conditions, You can only upload jpg/png/gif files"
    );
    e.preventDefault();
    return;
  }

  //To check file Size according to upload conditions
  if (CheckFileSize(readerEvt.size) == false) {
    alert(
      "The file (" +
        readerEvt.name +
        ") does not match the upload conditions, The maximum file size for uploads should not exceed 300 KB"
    );
    e.preventDefault();
    return;
  }

  //To check files count according to upload conditions
  if (CheckFilesCount(AttachmentArray) == false) {
    if (!filesCounterAlertStatus) {
      filesCounterAlertStatus = true;
      alert(
        "You have added more than 30 files. According to upload conditions you can upload 30 files maximum"
      );
    }
    e.preventDefault();
    return;
  }
}

//To check file type according to upload conditions
function CheckFileType(fileType) {
  if (fileType == "image/jpeg") {
    return true;
  } else if (fileType == "image/png") {
    return true;
  } else if (fileType == "image/gif") {
    return true;
  } else {
    return false;
  }
  return true;
}

//To check file Size according to upload conditions
function CheckFileSize(fileSize) {
  if (fileSize < 300000000) {
    return true;
  } else {
    return false;
  }
  return true;
}

//To check files count according to upload conditions
function CheckFilesCount(AttachmentArray) {
  //Since AttachmentArray.length return the next available index in the array,
  //I have used the loop to get the real length
  var len = 0;
  for (var i = 0; i < AttachmentArray.length; i++) {
    if (AttachmentArray[i] !== undefined) {
      len++;
    }
  }
  //To check the length does not exceed 10 files maximum
  if (len > 30) {
    return false;
  } else {
    return true;
  }
}

//Render attachments thumbnails.
function RenderThumbnail(e, readerEvt) {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = [
    '<div class="img-wrap"> <span class="close">&times;</span>' +
      '<img class="thumb" src="',
    e.target.result,
    '" title="',
    escape(readerEvt.name),
    '" data-id="',
    readerEvt.name,
    '"/>' + "</div>"
  ].join("");

  var div = document.createElement("div");
  div.className = "FileNameCaptionStyle";
  li.appendChild(div);
  div.innerHTML = [readerEvt.name].join("");
  document.getElementById("Filelist").insertBefore(ul, null);
}

//Fill the array of attachment
function FillAttachmentArray(e, readerEvt) {
  AttachmentArray[arrCounter] = {
    AttachmentType: 1,
    ObjectType: 1,
    FileName: readerEvt.name,
    FileDescription: "Attachment",
    NoteText: "",
    MimeType: readerEvt.type,
    Content: e.target.result.split("base64,")[1],
    FileSizeInBytes: readerEvt.size
  };
  arrCounter = arrCounter + 1;
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
  const listItem = document.getElementById("logoutButton");
  const loginItem = document.createElement('li');
  loginItem.setAttribute("id", "loginButton");
  loginItem.innerHTML = '<a type="button" class="navbar-brand" data-toggle="modal" data-target="#loginModal">Login</a>';
  listItem.replaceWith(loginItem); 
  console.log('User signed out.');
  });
  loginWay = ""
}

function generalLogin(loggedName) {
  const listItem = document.getElementById("loginButton");
  const loginItem = document.createElement('li');
  loginItem.innerHTML = '<a type="button" class="navbar-brand" data-toggle="modal" data-target="#loginModal">Login</a>';
  
  const newItem = document.createElement('li');
  newItem.setAttribute("id", "logoutButton");
  var signOutHTML;
  if (loggedName != undefined && loggedName != "") {
    loggedName = ', '+loggedName;
    signOutHTML = '                    <div class="dropdown">'+
'<a href="#" class="navbar-brand dropdown-toggle" data-bs-toggle="dropdown">Hello'+
loggedName+
'</a>'+
'<div class="dropdown-menu">'+
'    <a href="#" class="dropdown-item" onclick="signOut();">Sign Out</a>'+
'</div>'+
'</div>';
  } 
  
  else{
    signOutHTML = '                    <div class="dropdown">'+
'<a href="#" class="navbar-brand dropdown-toggle" data-bs-toggle="dropdown">Hello'+
'</a>'+
'<div class="dropdown-menu">'+
'    <a href="#" class="dropdown-item" onclick="signOut();">Sign Out</a>'+
'</div>'+
'</div>';
  }
  newItem.innerHTML = signOutHTML;
  listItem.parentNode.replaceChild(newItem, listItem); 
}

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        loginWay = 'Google';
        var loggedName = profile.getName();
        generalLogin(loggedName)
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}

function signupForm() {
  userName = document.getElementById("username2").value;
  password = document.getElementById("password2").value;
  name = document.getElementById("name2").value;
  email = document.getElementById("email2").value;
  console.log("signup info: {username:", userName,", password:", password,", name:", name,", email:", email,"}")
  // TODO: check if username or email already exists (from DB)
  // TODO: save the data to the DB (also generate ID)
}

function verifyLogin() {
  return false;
}

function loginForm() {
  userName = document.getElementById("username1").value;
  password = document.getElementById("password1").value;
  console.log("sign in info: {username:", userName,", password:", password,"}")
  // TODO: verify login
  if (verifyLogin(userName, password)) {
    // TODO: change logged name to be the name that appears in the DB (instead of username)
    var loggedName = userName;
    generalLogin(loggedName)  
    loginWay = 'Local'
  }
  else {
    document.getElementById("usernameOrPasswordIncorrect").className = '';
  }
}

function loadBanner() {
  var xyValues = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });  
}