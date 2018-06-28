$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "http://localhost:3000/api/chirps"
    }).then(function(data) {
    console.log(data)
      // this is a test//
      let indexs = Object.keys(data);
      console.log(indexs);
      let info = Object.values(data);
      console.log(info);
      info.forEach(element => {
        console.log(element)
        console.log(indexs[info.indexOf(element)])

      
      });

      // for (let key of keys){
      //   if (key !== 'nextid'){ //this !== will test to see if key and the 'nextid are not equal//
      //     createChirp(data[key])
      //   }
      // }

  });
  




$('#btn').on('click', function() {
    var chirps = {
        user: $("#name").val(),
        text: $("#text").val(),
        

    }
    
    

createChirp(chirps)
  //   $("#box").append(`<div class="card mt-5">
  //   <h5 class="card-header">New Chirp</h5>
  //   <div class="card-body">
  //     <h5 class="card-title">${chirps.user}</h5>
  //     <p class="card-text">${chirps.text}</p>
  //     <a href="#" class="btn btn-danger  ">goodbye</a>
  //   </div>
  // </div>`)

//   $(`.btndelete`).click(() => {
// $(".btndelete").parent().parent().remove() ;
//   });

    $.ajax({
    type: "POST",
    url:"http://localhost:3000/api/chirps",
    data: JSON.stringify(chirps),
    contentType: 'application/json',
    dataType: "json",
    success: function createChirp(chirps) {
    //   $('#box').append(`<div class="card">
    //   <h5 class="card-header">New Chirp</h5>
    //   <div class="card-body">
    //     <h5 class="card-title">${chirps.user}</h5>
    //     <p class="card-text">${chirps.text}</p>
    //     <a href="#" class="btn btn-danger">goodbye</a>
    //   </div>
    // </div>`);
  }
  });
})



function createChirp(chirps) {
  console.log('this is the key',chirps);
  $('#box').append(`<div class="card mt-5 postion-relative">
  <h5 class="card-header">New Chirp</h5>
  <div class="card-body">
    <h5 class="card-title">${chirps.user}</h5>
    <p class="card-text">${chirps.text}</p>
    <a href="#" id= "btndelete" class="btndelete btn btn-danger">goodbye</a>
    <a href="#" id= "btndedit" class="btnedit btn btn-info">edit</a>
  </div>
</div>



<div class="modal"id="editmodal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${chirps.user}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>${chirps.text}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`);
//this is the delete button function//
$(`.btndelete`).click(() => {
  $("#btndelete").parent().parent().remove() 
});

//this is the edit button function//
$(`.btnedit`).click(() => {
  $(`#editmodal`).modal('show')
})

}




})



