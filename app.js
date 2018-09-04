document.addEventListener("submit", event => {
  event.preventDefault();
   return addFormData();
})

function addFormData() {
  const formObj = {};
  const jobForm = document.querySelector(".job-form");
  const formTitle = document.querySelector("input[name='title']");
  formObj["title"] = formTitle.value;
  const formPay = document.querySelector("input[name='pay']");
  formObj["pay"] = formPay.value;
  const formDescription = document.querySelector("textarea[name='description']")
  formObj["description"] = formDescription.value;
  formObj["interested"] = [];
  console.log(formObj);
  return createJobBox(formObj);
}

fetch('https://dino-1-server.herokuapp.com/')
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(objItem => {
      createJobBox(objItem);
    })
  });

function createJobBox(objItem) {
  const jobBox = document.querySelector("#job-listings");
  let jobs = document.createElement("li");

  jobs.innerHTML = `<h4>${objItem["title"]}</h4>
  <small>${objItem["pay"]}</small>
  <p>${objItem["description"]}</p>
  <small>${objItem["interested"].length} dinos are interested in this job</small>`

  jobBox.prepend(jobs);
}



 



  