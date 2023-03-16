function validate() {
    var flag = 1;
    if(document.forms["myform"]["p_name"].value == "" || document.forms["myform"]["c_no"].value == "" || document.forms["myform"]["email"].value == "" || document.forms["myform"]["dob"].value == "" || document.forms["myform"]["p_no"].value == "" || document.forms["myform"]["ad_no"].value == "") {
        flag = 0;
    }

    if(flag == 0) {
        alert("Fill all the details");
    }
    
    if (document.forms["myform"]["p_name"].value=="") {
        alert('Enter your name');
        flag = 0;
    }

    if (document.forms["myform"]["ad_no"].value=="") {
        alert('Enter your Adhaar no');
        flag = 0;
    }

    if (document.forms["myform"]["p_no"].value=="") {
        alert('Enter your Pan number');
        flag = 0;
    }

    if (document.forms["myform"]["c_no"].value=="") {
        alert('Invalid contact no');
        flag = 0;
    }
    if (document.forms["myform"]["email"].value=="") {
        alert('Invalid email');
        flag = 0;
    }
    if (document.forms["myform"]["dob"].value=="") {
        alert('Enter dob');
        flag = 0;
    }

    if(flag == 1) {
        window.open("transaction.html");
    }
    
    
}