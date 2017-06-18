// This file is created by bibo for loading JSON and shopping Cart
// 取数据使用方法： qushuju(第几个数据，哪个属性,要修改哪个class的值) 如果属性名写错会导致显示undfined
function qushuju(num,a,b){

            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','https://raw.githubusercontent.com/CynthiaaLIU/WebAssignment2/master/very%20new/JSON/data.json')
            ourRequest.onload= function(){
            var ourData= JSON.parse(ourRequest.responseText)

              // console.log(ourData[num][a])
              $(b).text(ourData[num][a])
            }
            ourRequest.send();
                        }
function typeFillter(a){
  var i = "#"+a;
  console.log(i);
  $(i).click(function(){
    alert(i);
  });
}

$(document).ready(function() {



  console.log("document loaded")
    //index page
    qushuju(1,'name','#promo1');
    qushuju(6,'name','#promo2');
    qushuju(15,'name','#promo3');
    qushuju(16,'name','#promo4');
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
    typeFillter($('#type1').attr('id'));
    console.log($('#type1').attr('id')+ "aaa");

// test page
  $('#btn1').click(function() {
    console.log("AA")
    qushuju(1,'productid','.abc');
  });

});
