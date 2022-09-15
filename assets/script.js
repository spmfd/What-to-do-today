// Timer


var todaysDate = moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var hour = moment().hours();

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(todaysDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100);

// Saves data to local storage

  $(".saveBtn").on("click",function(){
    var userInput = $(this).parent().siblings(".col-8").children("textarea").val()
    var currentTime = $(this).parent().siblings(".time").children("span").text() 
    var id = $(this).attr("id")
    localStorage.setItem(id,userInput)
  })

  // Sets backgrounds for data entry fields based on time

  for (let i=9;i<=17;i++){
    var storedEntry = localStorage.getItem(i)
    $("#"+i).parent().siblings(".col-8").children("textarea").val(storedEntry)
    if(i<hour) {
      $("#"+i).parent().siblings(".col-8").children("textarea").addClass("past")
    }else if( i === hour){
      $("#"+i).parent().siblings(".col-8").children("textarea").addClass("present")
    } else {
      $("#"+i).parent().siblings(".col-8").children("textarea").addClass("future")
    }
  }

  // Cleared Button and message
  var textarea = document.getElementById('txtclr')
  textarea.value = '';

  $(".clearBtn").on("click",function () {
    localStorage.clear();
    textarea.value = '';
  })

  let clearedmsg = () => {
    let ele = document.getElementById('cleared');
    let node = document.createTextNode ('You have cleared your calendar!');
    ele.appendChild(node);
}