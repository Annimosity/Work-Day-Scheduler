var saveBtn = $(".saveBtn");

var times = [9, 10, 11, 12, 13, 14, 15, 16, 17]

const currentDate = dayjs(); 

var time = dayjs().format('HH');

const formattedDate = currentDate.format('YYYY-MM-DD'); 
// console. log(formattedDate);

$(function () {
  //when the page loads 
  for (let i = 0; i < times.length; i++) {
    let id = "hour-" + times[i]
    var timeBlockEl = $("#" + id)
    //load data from local storage
    let textAreaEl = $("#text-" + times[i])
    textAreaEl.val(localStorage.getItem(`${times[i]}`) ?? "")

    if (time == times[i]) {
      console.log(times[i] + " is current")
      //assign class
      timeBlockEl.removeClass().addClass("row time-block present")
    }
    else if (time > times[i]) {
      console.log(times[i] + " is past")
      timeBlockEl.removeClass().addClass("row time-block past")
    }
    else {
      console.log(times[i] + " is future")
      timeBlockEl.removeClass().addClass("row time-block future")
    }
    
  }
  saveBtn.click(function (event) {
    // console.log('button click')
    let parentEl = event.target.parentElement;
    let idChars = parentEl.id.split("-") ?? [];
    let currentTime = idChars[1];
    let textAreaEl = $("#text-" + currentTime)
    // console.log(textAreaEl.val());
    // save the data to the local storage
    localStorage.setItem(currentTime, textAreaEl.val())
  }) 
  
});

function curTime () {
    
  console.log(time)
  $( ".time-block" ).each(function() {
    console.log($(this).attr("id"))
  });
}
  curTime();
    $('#currentDay').text("Today is "+ formattedDate);
    `Today is ${formattedDate}`