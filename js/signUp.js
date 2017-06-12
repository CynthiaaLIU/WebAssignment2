function signUpNameVerify() {
    var name = $('#signUpName').val();
    if (isEmpty(name))
    {
        $('#signError').html('<br/>'+$('#signError').val()+'please enter your name');
    }else if(name.length<6){
        $('#signError').html('<br/>'+$('#signError').val()+'your name needs at least 6 letters');
    }else{
        $('#signError').html('<br/>'+$('#signError').val()+"");
    }

}

function signUpSurNameVerify() {
    var SurName = $('#signUpSurName').val();
    if (isEmpty(SurName))
    {
        $('#signError').html('<br/>'+$('#signError').val()+'please enter your SurName');
    }else if(SurName.length<8){
        $('#signError').html('<br/>'+$('#signError').val()+'your SurName needs at least 8 letters');
    }else{
        $('#signError').html('<br/>'+$('#signError').val()+"");
    }
}
function signUpEmailVerify() {
    var email =$('#signUpEmail').val();
    if (isEmpty(email))
    {
        $('#signError').html('<br/>'+$('#signError').val()+'please enter your Email');
    }else if(!isValidEmail(email)){
        $('#signError').html('<br/>'+$('#signError').val()+'your email address is invalid');
    }else{
        $('#signError').html('<br/>'+$('#signError').val()+"");
    }
}
function signUpDateVerify() {
    var date = $('#signUpDate').val();
    if (isEmpty(date))
    {
        $('#signError').html('<br/>'+$('#signError').val()+'please enter your Date of Birth');
    }else{
        $('#signError').html('<br/>'+$('#signError').val()+"");
    }
}

function signUpTermsVerify() {
    if (!document.getElementById('signUpTerms').checked)
    {
        $('#signError').html('<br/>'+$('#signError').val()+'please accept our terms');
    }else{
        $('#signError').html('<br/>'+$('#signError').val()+"");
    }
}

function signUpSubmitVerify() {
    signUpNameVerify();
    signUpSurNameVerify();
    signUpEmailVerify();
    signUpDateVerify();
    signUpTermsVerify();
}

function isEmpty(value){
    return (value == null || value.length === 0);
}

function wraningStyle() {
    
}

function isValidEmail(email)
{
    return /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,4}$/.test(email)
        && /^(?=.{1,64}@.{4,64}$)(?=.{6,100}$).*/.test(email);
}