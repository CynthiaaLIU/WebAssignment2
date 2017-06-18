// This file is created by bibo for loading JSON and shopping Cart
// 取数据使用方法： qushuju(第几个数据，哪个属性,要修改哪个class的值) 如果属性名写错会导致显示undfined
function qushuju(num,a,b){

            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','https://raw.githubusercontent.com/CynthiaaLIU/WebAssignment2/master/very%20new/JSON/data.json')
            ourRequest.onload= function(){
            var ourData= JSON.parse(ourRequest.responseText)
            if (typeof b === 'undefined') {
              return ourData[num][a];
            }else {
                $(b).text(ourData[num][a])
            }
              //  console.log(ourData[num][a])
            }
            ourRequest.send();
                        }
function typeFillter(a){

  var j = (a-1)*6;

  for (var i = 0; i <6; i++) {
    // console.log("this is loop" + i);


    qushuju(j+i,'name',"#name"+(i+1));
    qushuju(j+i,'description',"#des"+ (i+1));
    qushuju(j+i,'price',"#pri"+ (i+1));
    $('#productImg'+(i+1)).attr('src','images/art/'+(j+i+1)+'.jpg');
    $('.buyme'+(i+1)).attr('id', ''+(j+i+1));

  }
}

function hello(){

  var name = qushuju($('.buyme1').attr('id'),'name')

  $('#myTable tr:last').after('<tr id = "line1"> <td >'+name+'<button type="button" id = "hide" name="button">hide</button></td>   <td class="image">    <!-- <img src="1.jpg" width="40px" height="40px" id="image1"/> -->   </td>   <td class="quantity">    <input id="quantity1" value="1" onblur="total(1);"/>   </td>   <td class="price">    <input type="hidden" id="price1" value="20"/>    20   </td>   <td class="total">    <span id="smallTotal1"></span> ?   </td>  </tr>');
}




// $(function(){
// var size=3.0*$('#image1').width();
// $("#image1").mouseover(function(event) {
// var $target=$(event.target);
// if($target.is('img'))
// {
// $("<img id='tip' src='"+$target.attr("src")+"'>").css({
// "height":size,
// "width":size,
// }).appendTo($("#imgtest"));/*????????????????????????*/
// }
// }).mouseout(function() {
// $("#tip").remove();/*????*/
// })
//
// })
//
// function total(id)
// {
// /*???????*/
// var quantity=document.getElementById("quantity"+id).value;
// var price=document.getElementById("price"+id).value;
// var smallTotal=quantity*price;
// var smallT=document.getElementById("smallTotal"+id);
// smallT.innerHTML=smallTotal;
//
// /*?????*/
// var totalPrice=0;
// for(var a=1;a<3;a++){
// var quantity=document.getElementById("quantity"+a).value;
// var price=document.getElementById("price"+a).value;
// var smallTotal=quantity*price;
// totalPrice=totalPrice+smallTotal;
// }
// var total=document.getElementById("total");
// total.innerHTML=totalPrice;
// }
//
function initialize()
{

if (typeof myCart === 'undefined' ){
  var myCart =[];
}
if (typeof(myTotal) === 'undefined'){
  var myTotal =0;

}


// for(var a=1;a<3;a++){
// var quantity=document.getElementById("quantity"+a).value;
// var price=document.getElementById("price"+a).value;
// var smallTotal=quantity*price;
// totalPrice=totalPrice+smallTotal;
// /*alert(smallTotal);*/
// var smallT=document.getElementById("smallTotal"+a);
// smallT.innerHTML=smallTotal;
// }
// /*???????????????*/
// var total=document.getElementById("total");
// total.innerHTML=totalPrice;
}


$(document).ready(function() {



  console.log("document loaded")
    //index page
    qushuju(1,'name','#promo1');
    qushuju(6,'name','#promo2');
    qushuju(15,'name','#promo3');
    qushuju(19,'name','#promo4');
    qushuju(29,'name','#promo5');
    qushuju(4,'name','#popul1');
    qushuju(4,'price','#pop1');
    qushuju(8,'name','#popul2');
    qushuju(8,'price','#pop2');
    qushuju(14,'name','#popul3');
    qushuju(14,'price','#pop3');
    qushuju(21,'name','#popul4');
    qushuju(21,'price','#pop4');
    qushuju(28,'name','#popul5');
    qushuju(28,'price','#pop5');

//product Page

    typeFillter(1);

//Shopping Cart page
   initialize();


  $('#hide').click(function (){
    $('#line1').remove();
    alert ("a")

  });
// test page
  $('#btn1').click(function() {
    console.log("AA")
    qushuju(1,'name','#name1');

  });

});
