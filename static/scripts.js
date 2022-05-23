/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 


// TODO: delete
resp = {
  "num_of_images": -1,
  "i_bright_rate": [
      [
          0.48525490196078436,
          "desc",
          "images\\tiki.png"
      ],
      [
          0.6252156862745099,
          "desc",
          "images\\tiki_new.png"
      ],
      [
          0.4996707818930042,
          "desc",
          "images\\2.png"
      ],
      [
          0.6840084388185653,
          "desc",
          "images\\3.png"
      ],
      [
          0.40434782608695646,
          "desc",
          "images\\4.png"
      ],
      [
          0.4330196078431372,
          "desc",
          "images\\5.png"
      ],
      [
          0.8119215686274509,
          "desc",
          "images\\6.png"
      ],
      [
          0.48637096774193544,
          "desc",
          "images\\7.png"
      ],
      [
          0.41052000000000005,
          "desc",
          "images\\8.png"
      ],
      [
          0.7469803921568626,
          "desc",
          "images\\9.png"
      ]
  ],
  "i_messy_rate": [
      [
          0.1211819052696228,
          "desc",
          "images\\tiki.png"
      ],
      [
          0.1013462245464325,
          "desc",
          "images\\tiki_new.png"
      ],
      [
          0.9259664416313171,
          "desc",
          "images\\2.png"
      ],
      [
          0.1190466582775116,
          "desc",
          "images\\3.png"
      ],
      [
          0.6015366315841675,
          "desc",
          "images\\4.png"
      ],
      [
          0.7122364044189453,
          "desc",
          "images\\5.png"
      ],
      [
          0.05697524547576904,
          "desc",
          "images\\6.png"
      ],
      [
          0.9428436756134033,
          "desc",
          "images\\7.png"
      ],
      [
          0.8530024886131287,
          "desc",
          "images\\8.png"
      ],
      [
          0.1281992793083191,
          "desc",
          "images\\9.png"
      ]
  ],
  "i_triq_model": [
    [
        0.48525490196078436,
        "desc",
        "images\\tiki.png"
    ],
    [
        0.6252156862745099,
        "desc",
        "images\\tiki_new.png"
    ],
    [
        0.4996707818930042,
        "desc",
        "images\\2.png"
    ],
    [
        0.6840084388185653,
        "desc",
        "images\\3.png"
    ],
    [
        0.40434782608695646,
        "desc",
        "images\\4.png"
    ],
    [
        0.4330196078431372,
        "desc",
        "images\\5.png"
    ],
    [
        0.8119215686274509,
        "desc",
        "images\\6.png"
    ],
    [
        0.48637096774193544,
        "desc",
        "images\\7.png"
    ],
    [
        0.41052000000000005,
        "desc",
        "images\\8.png"
    ],
    [
        0.7469803921568626,
        "desc",
        "images\\9.png"
    ]
],
  "i_quality_rate": [
    [
        0.48525490196078436,
        "desc",
        "images\\tiki.png"
    ],
    [
        0.6252156862745099,
        "desc",
        "images\\tiki_new.png"
    ],
    [
        0.4996707818930042,
        "desc",
        "images\\2.png"
    ],
    [
        0.6840084388185653,
        "desc",
        "images\\3.png"
    ],
    [
        0.40434782608695646,
        "desc",
        "images\\4.png"
    ],
    [
        0.4330196078431372,
        "desc",
        "images\\5.png"
    ],
    [
        0.8119215686274509,
        "desc",
        "images\\6.png"
    ],
    [
        0.48637096774193544,
        "desc",
        "images\\7.png"
    ],
    [
        0.41052000000000005,
        "desc",
        "images\\8.png"
    ],
    [
        0.7469803921568626,
        "desc",
        "images\\9.png"
    ]
],
  "grammar_model": {'issues': ['Possible spelling mistake found.', 'This sentence does not start with an uppercase letter.'], 'main_response': 'Please notice several grammar corrections', 'grade': 55, 'replacement_description': 'The apartment is big and beautiful, you should come see it'}
}

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

var files;
var loginWay;
var emailLogin;
var descriptionFromUser;
function sendOnClick() {
  if (loginWay != null && loginWay != "") {
    var formData = new FormData();
    descriptionFromUser = document.getElementById('descriptionFromUser').value
    formData.append('descriptionText', descriptionFromUser)
    formData.append('email', emailLogin)
    if (typeof(files) != 'undefined') {
      if (files.size != 0) {
        for (var i = 0, f; (f = files[i]); i++) {
          formData.append('photosInfo', f)
        }
        console.log(formData.getAll('photosInfo'))  
      }
    }
    console.log(formData.getAll('descriptionText'))

    const Http = new XMLHttpRequest();
    const url = '/';
    Http.open("POST", url);
    Http.send(formData);

    Http.onreadystatechange = (e) => {
      if(Http.readyState === XMLHttpRequest.DONE) {
        console.log("response from server is:", Http.responseText)
        document.getElementById("ResponseBanner").className = '';
        if (descriptionFromUser != "undefined" && descriptionFromUser != "") {
          document.getElementById("descriptionAccordion").className = 'accordion-item';
          loadDescriptionBanner(Http);
        }
        document.getElementById("imagesAccordion").className = 'accordion-item';
        loadImagesBanner(Http);
      }
    }
  }
  else {
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'))
    myModal.show()
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
  files = e.target.files;

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

function generalLogin(loggedName, email) {
  emailLogin = email;
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
        generalLogin(loggedName, profile.getEmail())
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
  var formData = new FormData();
  formData.append('userName', userName);
  formData.append('password', password);
  formData.append('name', name);
  formData.append('email', email);
  const Http = new XMLHttpRequest();
  const url = '/signUp';
  Http.open("POST", url);
  Http.send(formData);
  Http.onreadystatechange = (e) => {
    if(Http.readyState === XMLHttpRequest.DONE) {
      if (Http.responseText == 1) {
        document.getElementById("validSignup").className = '';
        console.log("Sign up succeeded");
      }
      else {
        document.getElementById("emailIsTaken").className = '';
        console.log("Email is already taken");
      }
    }
  }
}

function verifyLogin(email, password) {
  var formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  const Http = new XMLHttpRequest();
  const url = '/verifyLogin';
  Http.open("POST", url);
  Http.send(formData);

  Http.onreadystatechange = (e) => {
    if(Http.readyState === XMLHttpRequest.DONE) {
      console.log("response for sign in from server is:", Http.responseText)
      if (Http.responseText != 0) {
        // when server is ready : chaneg logged name to Http.responseText
        var loggedName = email;
        generalLogin(loggedName, email)  
        loginWay = 'Local'
        return true;
      }
      // TODO: can remove when the server is ready
      else {
        return false;
      }
    }
  }
  // TODO: temporary returns true (should return false) - until the server is ready
  return true;
}

function loginForm() {
  email = document.getElementById("email1").value;
  password = document.getElementById("password1").value;
  console.log("sign in info: {email:", email,", password:", password,"}")
  if (verifyLogin(email, password)) {
    document.getElementById("loggedIn").className = '';
  }
  else {
    document.getElementById("emailOrPasswordIncorrect").className = '';
    console.log("Email or password is incorrect");
  }
}

function colorGradeDecider(grade) {
  if (grade > 85) {
    return "green";
  }
  if (grade > 60) {
    return "orange";
  }
  return "red"
}

function colorBrightnessGradeDecider(grade) {
  if (grade > 90  || grade < 30) {
    return "red";
  }
  if (grade > 80 || grade < 45) {
    return "orange";
  }
  return "green"
}

function colorMessGradeDecider(grade) {
  if (grade > 85) {
    return "red";
  }
  if (grade > 60) {
    return "orange";
  }
  return "green"
}

function grammarDescriptionIssuesList(response) {
  if (resp.grammar_model.issues && resp.grammar_model.issues.length > 0) {
    var ul = document.getElementById("grammarDescriptionIssuesList");
    ul.textContent = "Possible issues are: "
    ul.style.textAlign = "left"
    for (let i = 0; i < resp.grammar_model.issues.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(resp.grammar_model.issues[i]));
      li.style.textAlign = "left"
      ul.appendChild(li);
    }
  }
}

function loadDescriptionBanner(response) {
  document.getElementById("uploadedDescription").textContent = descriptionFromUser
  document.getElementById("descriptionGrammarGrade").textContent = resp.grammar_model.grade + "%"
  document.getElementById("descriptionGrammarGrade").style.color = colorGradeDecider(resp.grammar_model.grade);
  document.getElementById("grammarDescriptionMainResponse").textContent = resp.grammar_model.main_response;
  grammarDescriptionIssuesList(response)
  document.getElementById("grammarDescriptionSuggestion").textContent = resp.grammar_model.replacement_description;
  generatedNumber = "The Grammar grade for the uploaded description is: "+response.responseText
  document.getElementById("generatedNumber").textContent = generatedNumber
  loadDescriptionGrades();
}

function loadDescriptionGrades() {
  var xValues = ["Grammar", "Positive semantic"];
  var yValues = [resp.grammar_model.grade, 70];
  grammarGradeColor = colorGradeDecider(resp.grammar_model.grade)
  var barColors = [grammarGradeColor, "green"];

  new Chart("chart_DescriptionGradesByModel", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Description grades by model"
      }
    }
  });
}

function DivCreator(values, modelName) {
  var gradeNumber = Math.round(values[0] * 100);
  var commentValue = values[1];
  var div = document.createElement("div");
  var title = document.createElement("strong");
  title.textContent = modelName + ":";
  div.style.textAlign = "left";
  title.style.textDecoration = "underline";
  title.style.fontSize = "larger";
  var span = document.createElement("span");
  span.className = "circle";
  span.textContent = gradeNumber + "%"
  if (modelName == "Brightness") {
    span.style.color = colorBrightnessGradeDecider(gradeNumber);
  } 
  else {
    if (modelName == "Mess") {
      span.style.color = colorMessGradeDecider(gradeNumber);
    }
    else {
      span.style.color = colorGradeDecider(gradeNumber);
    }  
  }
  var comment = document.createElement("p");
  comment.textContent = commentValue;
  div.appendChild(title);
  div.appendChild(span);
  div.appendChild(comment);
  return div;
}

function imgCreator(i) {
  var img = document.createElement("img");
  img.src = URL.createObjectURL(files[i]);
  img.className = "imges-card-img-top card-img-top imagesResponse";
  img.alt = "Card image cap";
  return img;
}

function cardImagesCreator() {
  if (files != "undefined") {
    if (files.length > 0) {
      var mainCard = document.getElementById("imagesCardsResponse");
      mainCard.innerHTML = '';
      for (let i = 0; i < files.length; i++) {
        var quality = qualityCalculator(files[i].name)
        var qualityDiv = DivCreator(quality, "Quality");
        var brightness = brightnessCalculator(files[i].name)
        var brightnessDiv = DivCreator(brightness, "Brightness");
        var messyRoom = messCalculator(files[i].name)
        var messyRoomDiv = DivCreator(messyRoom, "Mess");
        var triq = triqCalculator(files[i].name)
        var triqDiv = DivCreator(triq, "Triq");
        var card = document.createElement("div");
        card.className = "cardImages card"
        var img = imgCreator(i);
        card.appendChild(img);
        console.log(files[i].name);
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        var cardTitle = document.createElement("p");
        cardTitle.textContent = files[i].name;
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(qualityDiv);
        cardBody.appendChild(brightnessDiv);
        cardBody.appendChild(messyRoomDiv);
        cardBody.appendChild(triqDiv);
        card.appendChild(cardBody);
        mainCard.appendChild(card);
      }
    }
  }
}

function qualityCalculator(fileName) {
  for(let i = 0; i < resp.i_quality_rate.length; i++) {
    console.log("images\\" + fileName)
    if (resp.i_quality_rate[i][2] == ("images\\" + fileName)) {
      return resp.i_quality_rate[i]
    }
  }
}

function brightnessCalculator(fileName) {
  for(let i = 0; i < resp.i_bright_rate.length; i++) {
    console.log("images\\" + fileName)
    if (resp.i_bright_rate[i][2] == ("images\\" + fileName)) {
      return resp.i_bright_rate[i]
    }
  }
}

function messCalculator(fileName) {
  for(let i = 0; i < resp.i_messy_rate.length; i++) {
    console.log("images\\" + fileName)
    if (resp.i_messy_rate[i][2] == ("images\\" + fileName)) {
      return resp.i_messy_rate[i]
    }
  }
}

function triqCalculator(fileName) {
  for(let i = 0; i < resp.i_triq_model.length; i++) {
    console.log("images\\" + fileName)
    if (resp.i_triq_model[i][2] == ("images\\" + fileName)) {
      return resp.i_triq_model[i]
    }
  }
}

function loadImagesBanner(response) {
  if (resp.num_of_images != -1) {
    console.log("Suggest the user to add more images.");
    document.getElementById("notEnoughImages").textContent = resp.num_of_images;
  }
  cardImagesCreator();
}