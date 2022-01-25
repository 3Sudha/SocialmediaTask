Submit = () => {
    //   var fname = document.getElementById("fname").value;
    //   var lname = document.getElementById("lname").value;
    //   var number = document.getElementById("number").value;
    //   var email = document.getElementById("email").value;
    //   var male = document.getElementById("genMale").value;
    //   var female = document.getElementById("genFemale").value;
    //   var other = document.getElementById("genOther").value;
    //   var dob = document.getElementById("dob").value;
    
    //   function validate() {
    //     if (document.getElementById("genMale").checked) {
    //       var male = document.getElementById("genMale").value;
    //       return male;
    //     } else if (document.getElementById("genFemale").checked) {
    //       var female = document.getElementById("genFemale").value;
    //       return female;
    //     } else {
    //       var other = document.getElementById("genOther").value;
    //       return other;
    //     }
    //   }
    
    //   //  start of name validation
    //   if (fname == "" || lname == "") {
    //     alert("Please provide your full name!");
    //     return false;
    //   } else {
    //     document.write(fname + "<br>" + lname + "<br>");
    //   }
    //   //   end of name validation
    
    //   // start of email validation
    //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //     document.write(email + "<br>");
    //   } else {
    //     alert("enter valid email");
    //   }
    //   //   end of email validation
    
    //   // start of number validation
    //   if (/^[6-9]\d{9}$/.test(number)) {
    //     document.write(number + "<br>");
    //   } else {
    //     alert("Enter valid number");
    //   }
    //   // end of number validation
    
    //   // start of dob validation
    //   var year = Number(dob.substr(0, 4));
    //   var month = Number(dob.substr(5, 2));
    //   var day = Number(dob.substr(8, 2));
    //   var today = new Date();
    //   var age = today.getFullYear() - year;
    //   if (
    //     today.getMonth() < month ||
    //     (today.getMonth() == month && today.getDate() < day)
    //   ) {
    //     age--;
    //   }
    //   if (age >= 18) {
    //     document.write(dob);
    //   } else {
    //     alert("You are under 18");
    //   }
    
    //   //   end of number validation
    
    //   if (document.getElementById("genMale").checked) {
    //     console.log(document.getElementById("genMale").value);
    //   } else if (document.getElementById("genFemale").checked) {
    //     console.log(document.getElementById("genFemale").value);
    //   } else {
    //     console.log(document.getElementById("genOther").value);
    //   }
    //   // end of gender validation
    // };
    
    // //   var checkedValue = null;
    // //   document.getElementById("gen").innerHTML = gender;
    // //   console.log(x);
    // //   for (var i = 0; inputElements[i]; ++i) {
    // //     if (inputElements[i].checked) {
    // //       checkedValue = inputElements[i].value;
    // //       break;
    // //     }
    // //   }
    // //   document.write(checkedValue);
    // // };
    
    // //   var c = document.simpleForm.gen1[0].checked;
    // //   console.log(c);
    
    // //   if (
    // //     document.simpleForm.gen1[0].checked == false &&
    // //     document.simpleForm.gen1[1].checked == false &&
    // //     document.simpleForm.gen1[2].checked == false
    // //   ) {
    // //     alert("Select your gender");
    // //     return false;
    // //   }
    
    Submit = () => {
      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      var number = document.getElementById("number").value;
      var email = document.getElementById("email").value;
      var dob = document.getElementById("dob").value;
    
      //  start of name validation
      if (fname == "" || lname == "") {
        alert("Please provide your full name!");
        return false;
      } else {
        var nameErr = true;
      }
      //   end of name validation
    
      // start of email validation
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        var emailErr = true;
      } else {
        alert("enter valid email");
      }
      //   end of email validation
    
      // start of number validation
      if (/^[6-9]\d{9}$/.test(number)) {
        var numErr = true;
      } else {
        alert("Enter valid number");
      }
      // end of number validation
    
      // start of dob validation
      var year = Number(dob.substr(0, 4));
      var month = Number(dob.substr(5, 2));
      var day = Number(dob.substr(8, 2));
      var today = new Date();
      var age = today.getFullYear() - year;
      if (
        today.getMonth() < month ||
        (today.getMonth() == month && today.getDate() < day)
      ) {
        age--;
      }
      if (age >= 18) {
        var ageErr = true;
      } else {
        alert("You are under 18");
      }
    
      //   end of number validation
      var gen22 = "";
      if (document.getElementById("genMale").checked) {
        gen22 = document.getElementById("genMale").value;
      } else if (document.getElementById("genFemale").checked) {
        gen22 = document.getElementById("genFemale").value;
      } else {
        gen22 = document.getElementById("genOther").value;
      }
    
      // end of gender validation
    
      // Writing all the information
      if (nameErr == true && emailErr == true && numErr == true && ageErr == true) {
        alert(
          "Confirm the Information \n Name: " +
            fname +
            " " +
            lname +
            "\n Email: " +
            email +
            "\n Phone No: " +
            number +
            "\n Date of Birth: " +
            dob +
            "\n Gender: " +
            gen22
        );
      }
      // end of writing all th info.
    };
}
    