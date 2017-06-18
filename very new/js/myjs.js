// This file is created by bibo for loading JSON and shopping Cart
// 取数据使用方法： qushuju(第几个数据，哪个属性,要修改哪个class的值) 如果属性名写错会导致显示undfined
function qushuju(num,a,b){

            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','https://raw.githubusercontent.com/CynthiaaLIU/WebAssignment2/master/very%20new/JSON/data.json')
            ourRequest.onload= function(){
            var ourData= JSON.parse(ourRequest.responseText)

              //  console.log(ourData[num][a])
              $(b).text(ourData[num][a])
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
    $('.buyme'+(i+1)).attr('id', '#buyme'+(j+i+1));

  }
}

function hello(){
  alert($('.buyme1').attr('id'));
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


// test page
  $('#btn1').click(function() {
    console.log("AA")
    qushuju(1,'name','#name1');

  });

});
