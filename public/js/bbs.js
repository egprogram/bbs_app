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
      if(json.status){
        var bbsInfo = json.bbs_info;
	var bbsDom =
          '<p>' + 
            'ID: ' + bbsInfo.id + ', ' +
	    'message: ' + bbsInfo.message + ', ' +
	    'created_at: ' + bbsInfo.created_at +
          '</p>';
        $(".js-bbs-list").append(bbsDom);
      }
    }).fail(function(){
    });
  });
});
