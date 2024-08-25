  const dayInput = document.getElementById('day'); 
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');

  const dayOutput = document.getElementById('ageDay');
  const monthOutput = document.getElementById('ageMonth');
  const yearOutput = document.getElementById('ageYear');

  const form = document.querySelector("#myForm");

  const date = new Date();
  let day = date.getDate();
  let month = 1 + date.getMonth();
  let year = date.getFullYear();

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
      const parent = i.parentElement;
      if(!i.value){
        i.style.borderColor = '#ff5757';
        parent.querySelector("span").innerText = "This field is required";
        validator = false;
      }else if(monthInput.value > 12 || monthInput.value < 1 && dayInput.value > 31 || dayInput.value < 1 && yearInput.value > 2100 || yearInput.value < 1900) {
        monthInput.style.borderColor = '#ff5757';
        monthInput.parentElement.querySelector("label").style.color = "#ff5757"
        monthInput.parentElement.querySelector("span").innerText = "Must be a valid month"
        dayInput.style.borderColor = '#ff5757';
        dayInput.parentElement.querySelector("label").style.color = "#ff5757"
        dayInput.parentElement.querySelector("span").innerText = "Must be a valid day"
        yearInput.style.borderColor = '#ff5757';
        yearInput.parentElement.querySelector("label").style.color = "#ff5757"
        yearInput.parentElement.querySelector("span").innerText = "Must be a valid year"
        validator = false;
      }else {
        i.style.borderColor = "#dbdbdb";
        parent.querySelector("span").innerText = "";
        parent.querySelector("label").style.color = "auto";
        validator = true;
      }
    });
    return validator;
  }

  form.addEventListener("submit", function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      if (dayInput.value > day) {
        day = day + months[month - 1];
        month = month - 1;
      }
      if (monthInput.value > month) {
        month = month + 12;
        year = year - 1;
      }
  
      const d = day - dayInput.value;
      const m = month - monthInput.value;
      const y = year - yearInput.value;
  
      dayOutput.innerHTML = d;
      monthOutput.innerHTML = m;
      yearOutput.innerHTML = y;
    }
    
  });


