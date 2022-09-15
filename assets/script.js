// Moment.js
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



  $(".saveBtn").on("click",function(){
    var userInput = $(this).parent().siblings(".col-8").children("textarea").val()
    var currentTime = $(this).parent().siblings(".time").children("span").text() 
    var id = $(this).attr("id")
    localStorage.setItem(id,userInput)
  })

  for (let i=9;i<=17;i++){
    var storedEntry = localStorage.getItem(i)
    $("#"+i).parent().siblings(".col-8").children("textarea").val(storedEntry)
  }

