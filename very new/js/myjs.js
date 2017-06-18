// This file is created by bibo for loading JSON and shopping Cart
// 取数据使用方法： qushuju(第几个数据，哪个属性,要修改哪个class的值) 如果属性名写错会导致显示undfined
function qushuju(num,a,b){

            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET','https://raw.githubusercontent.com/CynthiaaLIU/WebAssignment2/master/very%20new/JSON/data.json')
            ourRequest.onload= function(){
            var ourData= JSON.parse(ourRequest.responseText)

              console.log(ourData[num][a])
              $(b).text(ourData[num][a])
            }
            ourRequest.send();
                        }


$(document).ready(function() {
//index page


  console.log("document loaded")
  qushuju(2,'productid','#promo1');

  $('#btn1').click(function() {
    console.log("AA")
    qushuju(1,'productid','.abc');
  });

});
