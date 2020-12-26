/*


//////////////////////////////////


c) Student email address is mandatory and should follow the pattern rules of valid
email addresses
d) Course code 1 is mandatory. The initial first shown value is the text (Please
select the course code 1…). There should be 6 course codes as options in the
form of (140XXXXX-X) where X is a digit (0-9)
e) Course code 2 is mandatory. The initial first shown value is the text (Please
select the course code 2…). There should be 6 course codes as options in the
form of (140XXXXX-X) where X is a digit (0-9)
f) Course code 3 is optional. The initial first shown value is the text (Please select
the course code 3…). There should be 6 course codes as options in the form of
(140XXXXX-X) where X is a digit (0-9)
g) Course code 4 is optional. The initial first shown value is the text (Please select
the course code 4…). There should be 6 course codes as options in the form of
(140XXXXX-X) where X is a digit (0-9)
*/


function add_course (){

/*  */ 

    if( prerequisiteCheck() & IsVaaildName() & check_level() &checkCourseCode() &check_creditHours()& check_descrption() ){
    return true ; 
}
else{
    return false ;
}
}















function IsVaaildName() { // vaild name sould englihs letter captial and small no digit no smbpl  , if ture return ture 
    // disapper style 
    var name = document.getElementById("errName");
    name.style.color = "red";
    name.display = "inline";
    if (document.getElementById("name").value.search(/^[A-Za-z'\-\._ ]{10,}$/) != 0) {
        // apper error message 
        name.display = "block";
   
        name.innerHTML = "* name sould  at least 10 charactor english char and no digit";

        return false;
    } else {
        name.innerHTML = "";
        name.display = "none";
        return true;
    }
}
/*

*/
function check_level(){

    var level = document.getElementById("level").value.search(/^[1-9]|10*/) != 0;
    var errlevel = document.getElementById("errLevel");
    errlevel.style.color = "red";
    errlevel.display = "inline";
    if (level==0){
        errlevel.innerHTML = "";
        errlevel.display = "none";
      return true ; 
    }
    else {
            // apper error message 
            errlevel.display = "block";
       
            errlevel.innerHTML = "* You have select course level from 1 to 10 ";
      return false ; 
    }
}

function check_creditHours(){

    var cr_hours = document.getElementById("credit_hours").value.search(/^[1-5]*$$/) != 0;
     var errhours = document.getElementById("errCridetHours");
     errhours.style.color = "red";
     errhours.display = "inline";

    if( cr_hours ==0){
        errhoursinnerHTML = "";
        errhours.display = "none";
      return true ; 
    }
    else {
        errhours.display = "block";
  
    
        errhours.innerHTML = "* Please Enter Vaild vaule of crdit hours from 1 to 5  ";
      return false ; 
    }
}


function check_descrption(){

    var description = document.getElementById("description").value.length;
    var errDesc = document.getElementById("errDescrition");
    errDesc.style.color = "red";
    errDesc.display = "inline";



    if( description >30){
        errDesc.innerHTML = "";
        errDesc.display = "none";
      return true ; 
    }
    else {
        errDesc.display = "block";
  
    
        errDesc.innerHTML = "* please enter text more then 30 char ";
      return false ; 
    }
}
function checkCourseCode(){
    var coursecode = document.getElementById("courseCode").value.search((/^140[0-9]{5}-[0-9]{1}$/))!=0;
    var errCorseCode=document.getElementById("errCourseCode");
    errCorseCode.style.color = "red";
    errCorseCode.display = "inline";
    if( coursecode==0){
        errCorseCode.innerHTML = "";
        errCorseCode.display = "none";
      return true ; 
    }
    else {
        errCorseCode.display = "block";
  
    
        errCorseCode.innerHTML = "* enter vaild pattren 140XXXXX-X ,only number ";
      return false ; 
    }

}
function prerequisiteCheck(){
    var pre = document.getElementById("pre");
    var errPre =document.getElementById("errPre");
    errPre.style.color = "red";
    errPre.display = "inline";
    var res =pre.value.search((/^140[0-9]{5}-[0-9]{1}$/))!=0; 
    var fi= pre.value=="";
    if(fi){
        errPre.innerHTML = "";
        errPre.display = "none";
        return true ;
    }
    else {
        if(res==0){
            errPre.innerHTML = "";
            errPre.display = "none";
            return true ;
        }
        else {
            errPre.display = "block";
  
    
            errPre.innerHTML = "* enter vaild pattren 140XXXXX-X ,only number ";
            false ;
        }
    }


}

/*                    */ 

///////////////////////////

//////////////////////////



///////////////////////////////////////////

/////////////////////////////////////////////////
var CourseCode1=document.getElementById("courseCode2");
var msgCode2 = document.getElementById("msgCode2");
////////////////////////////////////////////////////
var CourseCode1=document.getElementById("courseCode3");
var msgCode3 = document.getElementById("msgCode3");

////////////////////////////////////////////////////////////
var msgCode4 = document.getElementById("msgCode4");
var CourseCode1=document.getElementById("courseCode4");
/////////////////////////////////////////////////

function validtionCourseForStudent(){
    if( IsVaaildEmail() &IsVaaildName2() &IsStuedntNumber() &checkCourseCode1() &checkCourseCode2()
    &checkCourseCode3() &checkCourseCode4()
    ){
        return true ; 
        alert("submit");
    }
    else{
        return false ; 
    }
}

/* a) Student ID is mandatory and should be exactly 9 digits (0-9)*/ 
function IsStuedntNumber() { // valudite saude phone number 
    var Rphone = document.getElementById("sID").value.search(/^(\d{9})$/) != 0;
    var m = document.getElementById("sIdErr");
    if (Rphone || isEmpty(document.getElementById("sID"))) {
        m.style.color = "red";
        m.display = "block";
     

        m.innerHTML = "* Student Number 9 digit   ";


        return false;
    } else {

        m.innerHTML = "";
        m.display = "none";
        return true;
    }

}
// b) Student name is mandatory and should be at least 10 alphabet characters
function IsVaaildName2() { // vaild name sould englihs letter captial and small no digit no smbpl  , if ture return ture 
    // disapper style 
    var sNameErr = document.getElementById("sNameErr");
    sNameErr.style.color = "red";
    sNameErr.display = "inline";
    if (document.getElementById("sName").value.search(/^[A-Za-z'\-\._ ]{10,}$/) != 0) {
        // apper error message 
        sNameErr.display = "block";
 
    
        sNameErr.innerHTML = "* name sould  at least 10 charactor english char and no digit";

        return false;
    } else {
        sNameErr.innerHTML = "";
        sNameErr.display = "none";
        return true;
    }
}

function IsVaaildEmail() { // valudite email useing regex 
    var emailErr = document.getElementById("sEmailErr");
    var t = document.getElementById("sEmail").value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != 0;
    if (t || isEmpty(document.getElementById("sEmail"))) {
        emailErr.style.color = "red";
        emailErr.display = "block";


        emailErr.innerHTML = "   * Email sould like this example@copmay.domain and not Empty ";

        return false;
    } else {


        emailErr.innerHTML = "";
        emailErr.display = "none";
        return true;

    }


}



function isEmpty(a) {
    if (a.length == 0) {

        return true;
    } else {
        return false;
    }
}

function checkCourseCode1(){
    var coursecode = document.getElementById("courseCode1").value.search((/^140[0-9]{5}-[0-9]{1}$/))!=0;
    var errCorseCode=document.getElementById("msgCode1");
    errCorseCode.style.color = "red";
    errCorseCode.display = "inline";
    if( coursecode==0){
        errCorseCode.innerHTML = "";
        errCorseCode.display = "none";
      return true ; 
    }
    else {
        errCorseCode.display = "block";
  
    
        errCorseCode.innerHTML = "* enter vaild pattren 140XXXXX-X ,only number ";
      return false ; 
    }

}

function checkCourseCode2(){
    var coursecode = document.getElementById("courseCode2").value.search((/^140[0-9]{5}-[0-9]{1}$/))!=0;
    var errCorseCode=document.getElementById("msgCode2");
    errCorseCode.style.color = "red";
    errCorseCode.display = "inline";
    if( coursecode==0){
        errCorseCode.innerHTML = "";
        errCorseCode.display = "none";
      return true ; 
    }
    else {
        errCorseCode.display = "block";
  
    
        errCorseCode.innerHTML = "* enter vaild pattren 140XXXXX-X ,only number ";
      return false ; 
    }

}



function checkCourseCode3(){
    var coursecode = document.getElementById("courseCode3").value="none";
    var errCorseCode=document.getElementById("msgCode3");
    errCorseCode.style.color = "red";
    errCorseCode.display = "inline";

     if (coursecode)   {
         return true ; 
     } 
     else{
        if( coursecode==0){
            errCorseCode.innerHTML = "";
            errCorseCode.display = "none";
          return true ; 
        }
        else {
            errCorseCode.display = "block";
      
        
            errCorseCode.innerHTML = "* enter vaild pattren 140XXXXX-X ,only number ";
          return false ; 
        }
     }


}

function checkCourseCode4(){
    var coursecode = document.getElementById("courseCode4").value="none";
    var errCorseCode=document.getElementById("msgCode4");
    errCorseCode.style.color = "red";
    errCorseCode.display = "inline";

     if (coursecode)   {
         return true ; 
     } 
     else{
        if( coursecode==0){
            errCorseCode.innerHTML = "";
            errCorseCode.display = "none";
          return true ; 
        }
        else {
            errCorseCode.display = "block";
      
        
            errCorseCode.innerHTML = "* enter vaild pattren 140XXXXX-X ,only number ";
          return false ; 
        }
     }


}

