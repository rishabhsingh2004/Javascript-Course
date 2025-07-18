console.log("Ajax script loaded successfully.");

let fetchbtn = document.getElementById('fetch')
fetchbtn.addEventListener('click', buttonclickhandler);
     function buttonclickhandler() {
          console.log("You have clicked the fetch button");
          // Instantiate an XHR object
          const xhr = new XMLHttpRequest();
          // Open the object
         // xhr.open('GET', 'rishabh.txt', true);
         xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
         xhr.setRequestHeader('Content-type', 'application/json');

          // What to do on progress
          xhr.onprogress = function() {
               console.log("On progress");
          }
          // What to do when response is ready
          xhr.onload =function() {
               if (this.status === 200) {
                    console.log(this.responseText);
               } else {
                    console.log("Some error occurred");
               }
               console.log(this.responseText);
          }
          // send the request
          params = `{"name":"test","Rishabh":"12345k","age":"23"}`;
          xhr.send(params);
          console.log("Request sent");
          
     }