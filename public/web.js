var popup = document.getElementById("myPopup");
console.log("web")

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submitted');
  
    // Get the value from the input field
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
 
    if(password.length < 8){
        popup.textContent = "Password is too short!"
        popup.classList.add("show");
        console.log("tooshort")
        //document.getElementById("username").value = "";
    } else {
        popup.classList.remove("show")
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            .then(response => {
                if (response.redirected) {
                    // Handle the redirect
                    window.location.href = response.url;
                } else {
                    // Handle other responses
                    return response.json();
                }
            })
            .then(data => {
                // Check if the data contains a redirect property
                if (data && data.redirect) {
                    // Handle the redirect manually
                    window.location.href = data.redirect;
                } else {
                    // Handle other JSON data
                    console.log('Received JSON data:', data);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    
            const data = await response.json();
            // console.log("Uh oh!")
            // console.log(data.message);
            if(data.message = "Username already taken")
            {
                popup.textContent = "Username already taken, please try again!"
                popup.classList.add("show");
            } else {
                //login/account creation was a success!
                popup.classList.add("hide");
            }
            // Handle response
        } catch (error) {
            console.error('Error:', error);
        }
    }
});