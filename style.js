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
let tableButton = document.getElementById("table-button");
let tableMessage = document.getElementById("table-message");

function showTableMessage(){

    tableMessage.innerHTML = `
    <div class="alert alert-dismissible fade show alert-danger" role="alert">
    <table class=" table table-bordered table-responsive" style="text-align: center;background-color: black">
    <thead>
      <tr style="color: white">
        <th scope="col"></th>
        <th colspan="2" scope="col">8:00-9:00</th>
        <th colspan="2" scope="col">9:00-10:00</th>
        <th colspan="2" scope="col">10:00-11:00</th>
        <th colspan="2" scope="col">11:00-12:00</th>
        <th colspan="2" scope="col">12:00-13:00</th>
        <th colspan="2" scope="col">13:00-14:00</th>
        <th colspan="2" scope="col">14:00-15:00</th>
        <th colspan="2" scope="col">15:00-16:00</th>
        <th colspan="2" scope="col">16:00-17:00</th>
        <th colspan="2" scope="col">17:00-18:00</th>
        <th colspan="2" scope="col">18:00-19:00</th>
    


      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="background-color : yellow" scope="row">MONDAY</th>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        <td style="background-color : blue ; color: white;" colspan="4">Computer Sience Project</td>
        <td></td>
      </tr>

      <tr>
        <th style="background-color : pink" scope="row">TUESDAY</th>
        <td></td><td></td><td></td><td></td>
        <td style="background-color : orange ; color: white;" colspan="4">Web Tech</td>
        <td></td><td></td><td></td><td></td><td></td>
        <td style="background-color : orange ; color: white;" colspan="4">Web Tech</td>
        <td></td><td></td><td></td><td></td><td></td>

      </tr>

      <tr>
        <th style="background-color : green;color: white" scope="row">WEDNESDAY</th>
        <td></td><td></td><td></td><td></td>
        <td style="background-color : blue ; color: white;" colspan="4">OS</td>
        <td></td><td></td><td></td><td></td><td></td>
        <td style="background-color : orange ; color: white;" colspan="3">IS</td>
        <td></td><td></td><td></td><td></td><td></td><td></td>

      </tr>
      </tr>

      <tr>
        <th style="background-color : orange" scope="row">THURSDAY</th>
        <td style="background-color : orange ; color: white;" colspan="4">SE</td>
        <td></td><td></td>
        <td style="background-color : orange ; color: white;" colspan="4">SE</td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>

      </tr>

      <tr>
        <th style="background-color : blue; color: white" scope="row">FRIDAY</th>
        <td></td><td></td><td></td><td></td>
        <td style="background-color : blue ; color: white;" colspan="4">OS</td>
        <td></td><td></td><td></td><td></td><td></td>
        <td style="background-color : orange ; color: white;" colspan="3">IS</td>
        <td></td><td></td><td></td><td></td><td></td><td></td>

      </tr>

      <tr>
        <th style="background-color : purple;color: white" scope="row">SATURDAY</th>
        <td style="background-color : blue ; color: white;" colspan="8">ERP</td>
        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>

      </tr>
    </tbody>
  </table>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;
}

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


sundayButton.addEventListener("click",showSundayMessage);
mondayButton.addEventListener("click",showMondayMessage);
tuesdayButton.addEventListener("click",showTuesdayMessage);
wednesdayButton.addEventListener("click",showWednesdayMessage);
thursdayButton.addEventListener("click",showThursdayMessage);
fridayButton.addEventListener("click",showFridayMessage);
saturdayButton.addEventListener("click",showSaturdayMessage);
tableButton.addEventListener('click',showTableMessage);