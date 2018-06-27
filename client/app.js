$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/api/chirps"
    }).then(function(data) {
    
        console.log(data)
});




$('#btn').on('click', function() {
    var chirps = {
        user: $("#name").val(),
        text: $("#text").val()
    }

    $("#box").html(`<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${chirps.user}</li>
      <li class="list-group-item">${chirps.text}</li>
    </ul>
  </div>`)

    $.ajax({
    type: "POST",
    url:"http://localhost:3000/api/chirps",
    data: JSON.stringify(chirps),
    contentType: 'application/json; charset=utf-8',
    dataType: "json",
    success: function() {
        $("#box").html(`<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${chirps.user}</li>
          <li class="list-group-item">${chirps.text}</li>
        </ul>
      </div>`)
       
        //console.log(resultData)
    }
  });
})




})



