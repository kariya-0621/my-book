$(function(){

$('.img-container').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
        activePoint.addClass('active');
    }
    else{
        activePoint.removeClass('active');
    }
},{offset : '70%'});
 
$('.text-container').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
        activePoint.addClass('active');
    }
    else{
        activePoint.removeClass('active');
    }       
},{offset : '70%'});

 /*headerからお問い合わせhomeに移動させます。*/
 /*ナビゲーションのクリック時スクロール*/
$('.top-go-btn').click(function(){                        
   $('html, body').animate({            
     'scrollTop': 0             
   }, 2000);
   /*上に戻るボタンを押したら、topに見てくれてありがとうと表示*/
   $('#arigatou').fadeIn();            
 });

/*ここに、漫画紹介のtext触ると浮き上がる感じに*/
 $('.gazou-container-text').hover (
    function() {
      $(this).animate({
       'font-size':'20px'
     },300);
    },  
    function() {
      $(this).animate({
       'font-size':'16px'
     },300); 
   });

 /*ここに、漫画紹介のtext触ると浮き上がる感じに*/
 $('.top-go-btn').hover (
    function() {
      $('#mazide').fadeIn();   
    },  
    function() {
      $('#mazide').fadeOut();
   });

/*ハンバーガー*/

　$('.hunber').click(function() {
        $(this).toggleClass('nav-open');
        if($(this).hasClass('nav-open')) {
            $('.globalMenuSp').addClass('nav-open');
        } else {
             $('.globalMenuSp').removeClass('nav-open');        
        }
    });

  

});

