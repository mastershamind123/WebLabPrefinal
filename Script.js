function checkAge() {
    var age = prompt("What is the age of your favorite artist?");
    if (age < 25) {
      document.getElementById("result").innerHTML = "They're " + age + " old and they're younger than Google";
    } else if (age == 25) {
      document.getElementById("result").innerHTML = "They're " + age + " and they're as old as Google";
    } else {
      alert("They're " + age + " and they're older than Google");
    }
  }
  