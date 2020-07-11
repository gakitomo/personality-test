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
      if(typeANum > typeBNum){
        $(".resultA").fadeIn();
      }else if(typeANum < typeBNum){
        $(".resultB").fadeIn();
      }else{
        $(".resultC").fadeIn();
      }
    }
  });
})

