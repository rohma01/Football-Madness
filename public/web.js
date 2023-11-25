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
            });
                if (response.redirected) {
            window.location.href = response.url;;
                } else {
                    // Handle other responses
                    const data = await response.json();
                    //return response.json();
                
                // Check if the data contains a redirect property
                if (data && data.redirect) {
                    const redirectUrl = data.redirect;
                    const draftStatus = "notStarted"; 
                    console.log(redirectUrl)
                    // Handle the redirect manually
                    window.location.href = `${redirectUrl}?draftStatus=${draftStatus}`;
                } else {
                    // Handle other JSON data
                    console.log('Received JSON data:', data);
                }
            }
        
    
            
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