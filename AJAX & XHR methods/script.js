document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt", true);

  //optional - Used for spinners and loaders
  xhr.onprogress = function () {
    console.log("readyState", xhr.readyState);
    setTimeout(() => {
      console.log(this.readyState);
    }, 5000);
  };

  xhr.onload = function () {
    console.log(xhr, xhr.readyState);
    this.status === 200
      ? (document.getElementById(
          "output"
        ).innerHTML += `<h1>${this.responseText}</h1>`)
      : console.log("error fetching data");
  };

  /* xhr.onreadystatechange = function()  {
     if(this.status === 200 && this.readyState === 4){
       console.log(this.responseText)
     }
   }*/

  xhr.onerror = function () {
    console.log("Request error...d");
  };

  xhr.send();
}

// readyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and responsed is ready

// HTTP STATUSES

// 200: "Ok"
// 400: "Forbidden"
// 404: "Not Found"

// the onload method is the best for gettings request instead
// of the onreadystatechange
