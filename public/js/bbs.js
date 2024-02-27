$(function(){
  $(".js-bbs-btn").on("click", function(){
    var mess = $(".js-bbs-mes").val();
    $.ajax({
      url: '/bbs',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({ message: mess })
    }).done(function(json){
      console.log(json);
    }).fail(function(){
    });
  });
});
