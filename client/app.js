$('#editmodal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  console.log(recipient)
  var modal = $(this)
  modal.find('.modal-title').text('Chirp: #' + recipient)

  //this is the edit button function//
  $(`#edit`).click(() => {
    console.log($(`#message-text`).val())
    console.log($(`#user${recipient}`).html())
    let chirp = {
      user: $(`#user${recipient}`).html(),
      text: $(`#message-text`).val(),
    }
    //this is the PUT(UPDATE) function//
    $.ajax({
      type: 'PUT',
      url: `http://localhost:3000/api/chirps/${recipient}`,
      data: JSON.stringify(chirp),
      contentType: 'application/json',
      dataType: "json",
      success: (result) => {
        console.log(result)
        updateChirp(result, modal, recipient)
      }
    })
    $(`#text${recipient}`).html($(`#message-text`).val())
    $(`#message-text`).val("")
  })
})

// THIS WILL CREATE MY CARDS OF CHIRPS//
function createChirp(id, chirps) {
  console.log('this is the key', chirps);
  $('#box').append(`<div class="col"><div class="card m-auto text-center mt-5" style= "width: 230px"   id= "${id}">
  <h5 class="card-header">New Chirp</h5>
  <div class="card-body">
    <h5 class="card-title" id="user${id}">${chirps.user}</h5>
    <p class="card-text" id= "text${id}">${chirps.text}</p>
    <a href="#" id= "btndelete${id}" class="btndelete btn btn-danger">goodbye</a>
    <button type="button" class="btn btn-primary" id="editmodal${id}" data-toggle="modal" data-target="#editmodal" data-whatever="${id}">edit</button>
  </div>
</div></div>`)

  //this is the delete button function//
  $(`#btndelete${id}`).click(() => {
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3000/api/chirps/${id}`,
      success: () => {
        console.log(`delete`)
      }
    })
    $(`#btndelete${id}`).parent().parent().remove()
  });

}

$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: "http://localhost:3000/api/chirps"
  }).then(function (data) {
    console.log(data)
    // this is a test//
    let indexs = Object.keys(data);
    console.log(indexs);
    let info = Object.values(data);
    console.log(info);
    info.forEach(element => {
      console.log(element)
      console.log(indexs[info.indexOf(element)])
      if (!isNaN(indexs[info.indexOf(element)])) {
        createChirp(indexs[info.indexOf(element)], element)
      }


    });



  });





  $('#btn').on('click', function () {
    var chirps = {
      user: $("#name").val(),
      text: $("#text").val(),
    }
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/chirps",
      data: JSON.stringify(chirps),
      contentType: 'application/json',
      dataType: "json",
      success: (result) => {
        console.log(result)
        createChirp(result, chirps)
      }
    });
  })
})



