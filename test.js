$(function(){
  $('.result').hide();
  $('button').click(function(){
    $('.result').hide();
    let qNum = $('ul li').length;
    if($('ul li input:checked').length < qNum){
      alert("未回答の問題があります");
    } else {
      //チェックされているinputの数を取得
      let typeANum = $(".typeA:checked").length,
      typeBNum = $(".typeB:checked").length;
      typeCNum = $(".typeC:checked").length;
      if(typeANum > typeBNum && typeANum > typeCNum){
        $(".resultA").fadeIn();
      }else if(typeBNum > typeANum && typeBNum > typeCNum){
        $(".resultB").fadeIn();
      }else{
        $(".resultC").fadeIn();
      }
    }
  });
})

