$(function(){

  var BbsView = {
    page: 1,
    bbsDomFunc: function(bbsInfo, before){
      var bbsDom =
        '<p>' + 
          'ID: ' + bbsInfo.id + ', ' +
          'message: ' + bbsInfo.message + ', ' +
          'created_at: ' + bbsInfo.created_at +
        '</p>';
      if(before){
        $(".js-bbs-list").prepend(bbsDom);
      }else{
        $(".js-bbs-list").append(bbsDom);
      }
    }
  };

  // 新規投稿処理
  $(".js-bbs-btn").on("click", function(e){
    e.preventDefault();

    var mess = $(".js-bbs-mes").val();
    $.ajax({
      url: '/bbs',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({ message: mess })
    }).done(function(json){
      if(json.status){
        BbsView.bbsDomFunc(json.bbs_info, true);
      }
    });
  });

  // 続きを見る処理
  $(".js-bbs-more-btn").on("click", function(e){
    e.preventDefault();

    var page = BbsView.page + 1;
    $.ajax({
      url: '/api/bbs/' + page,
      dataType: 'json',
    }).done(function(json){
      var bbsArray = json.bbs;
      $.each(bbsArray, function(){
        BbsView.bbsDomFunc(this, false);
      })
      BbsView.page += 1;
    })
  });
});
