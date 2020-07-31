let sundayButton = document.getElementById("sunday-button");
let sundayMessage = document.getElementById("sunday-message");
let mondayButton = document.getElementById("monday-button");
let mondayMessage = document.getElementById("monday-message");
let tuesdayButton = document.getElementById("tuesday-button");
let tuesdayMessage = document.getElementById("tuesday-message");
let wednesdayButton = document.getElementById("wednesday-button");
let wednesdayMessage = document.getElementById("wednesday-message");
let thursdayButton = document.getElementById("thursday-button");
let thursdayMessage = document.getElementById("thursday-message");
let fridayButton = document.getElementById("friday-button");
let fridayMessage = document.getElementById("friday-message");
let saturdayButton = document.getElementById("saturday-button");
let saturdayMessage = document.getElementById("saturday-message");

let mondayButton2 = document.getElementById("monday-button2");
let tuesdayButton2 = document.getElementById("tuesday-button2");
let wednesdayButton2 = document.getElementById("wednesday-button2");
let thursdayButton2 = document.getElementById("thursday-button2");
let fridayButton2 = document.getElementById("friday-button2");
let saturdayButton2 = document.getElementById("saturday-button2");

let subject1Button = document.getElementById("subject1-button");
let subject1Message = document.getElementById("subject1-message")
let subject2Button = document.getElementById("subject2-button");
let subject2Message = document.getElementById("subject2-message")
let subject3Button = document.getElementById("subject3-button");
let subject3Message = document.getElementById("subject3-message")
let subject4Button = document.getElementById("subject4-button");
let subject4Message = document.getElementById("subject4-message")
let subject5Button = document.getElementById("subject5-button");
let subject5Message = document.getElementById("subject5-message")
let subject6Button = document.getElementById("subject6-button");
let subject6Message = document.getElementById("subject6-message")
let subject7Button = document.getElementById("subject7-button");
let subject7Message = document.getElementById("subject7-message")
let subject8Button = document.getElementById("subject8-button");
let subject8Message = document.getElementById("subject8-message")
let subject9Button = document.getElementById("subject9-button");
let subject9Message = document.getElementById("subject9-message")
let subject10Button = document.getElementById("subject10-button");
let subject10Message = document.getElementById("subject10-message")
function showTableMessage(){


function showSundayMessage(){
    sundayMessage.innerHTML=`
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="text-align: center">
    <strong>ไม่มีเรียนวันนี้ !!</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}
function showMondayMessage(){
    mondayMessage.innerHTML=`
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="text-align: center">
    <strong>Computer Science Project 16:30 - 18:30 !!</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}
function showTuesdayMessage(){
    tuesdayMessage.innerHTML=`
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="text-align: center">
    <strong>1. Web Tech 10:00 - 12:00 !! <br>2. Web Tech 14:30 - 16:30 !! </strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}

function showWednesdayMessage(){
    wednesdayMessage.innerHTML=`
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="text-align: center">
    <strong>1. OS 10:00 - 12:00 !! <br>2. IS 14:30 - 16:00 !! </strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}
function showThursdayMessage(){
    thursdayMessage.innerHTML=`
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="text-align: center">
    <strong>1. SE 8:00 - 10:00 !! <br>2. SE 11:00 - 13:00 !! </strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}
function showFridayMessage(){
    fridayMessage.innerHTML=`
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="text-align: center">
    <strong>1. OS 10:00 - 12:00 !! <br>2. IS 14:30 - 16:00 !! </strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}
function showSaturdayMessage(){
    saturdayMessage.innerHTML=`
    <div class="alert alert-danger alert-dismissible fade show" role="alert" style="text-align: center">
    <strong>ERP 8:00 - 12:00 !! </strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
}

function showSubject1Message(){
    subject1Message.innerHTML=`01418499 (200)`
}

function showSubject2Message(){
    subject2Message.innerHTML=`01418442 (200)`
}
function showSubject3Message(){
    subject3Message.innerHTML=`01418442 (200)`
}
function showSubject4Message(){
    subject4Message.innerHTML=`01418331 (200)`
}
function showSubject5Message(){
    subject5Message.innerHTML=`01418322 (200)`
}
function showSubject6Message(){
    subject6Message.innerHTML=`01418471 (200)`
}
function showSubject7Message(){
    subject7Message.innerHTML=`01418471 (200)`
}
function showSubject8Message(){
    subject8Message.innerHTML=`01418331 (200)`
}
function showSubject9Message(){
    subject9Message.innerHTML=`01418322 (200)`
}
function showSubject10Message(){
    subject10Message.innerHTML=`01418342 (200)`
}


sundayButton.addEventListener("click",showSundayMessage);

mondayButton.addEventListener("click",showMondayMessage);
mondayButton2.addEventListener("click",showMondayMessage);

tuesdayButton.addEventListener("click",showTuesdayMessage);
tuesdayButton2.addEventListener("click",showTuesdayMessage);

wednesdayButton.addEventListener("click",showWednesdayMessage);
wednesdayButton2.addEventListener("click",showWednesdayMessage);

thursdayButton.addEventListener("click",showThursdayMessage);
thursdayButton2.addEventListener("click",showThursdayMessage);

fridayButton.addEventListener("click",showFridayMessage);
fridayButton2.addEventListener("click",showFridayMessage);

saturdayButton.addEventListener("click",showSaturdayMessage);
saturdayButton2.addEventListener("click",showSaturdayMessage);


subject1Button.addEventListener("click",showSubject1Message);
subject2Button.addEventListener("click",showSubject2Message);
subject3Button.addEventListener("click",showSubject3Message);
subject4Button.addEventListener("click",showSubject4Message);
subject5Button.addEventListener("click",showSubject5Message);
subject6Button.addEventListener("click",showSubject6Message);
subject7Button.addEventListener("click",showSubject7Message);
subject8Button.addEventListener("click",showSubject8Message);
subject9Button.addEventListener("click",showSubject9Message);
subject10Button.addEventListener("click",showSubject10Message);