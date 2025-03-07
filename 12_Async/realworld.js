async function Example() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let value = await response.json();
        
        let output = document.getElementById("container"); // Get the container div
        output.innerHTML = ""; // Clear previous data

        value.forEach((post) => { // Loop through all posts
            let postElement = document.createElement("div"); // Create a new div
            postElement.innerHTML = `
            <div style="border:1px solid black padding:10px width:50%">
                <h3>${post.title}</h3>
                <hr>
                <p>${post.body}</p>
                
                </div>
            `;
            output.appendChild(postElement); // Append to container
        });

    } catch (err) {
        console.log("Error aayo hai!", err);
    }
}

Example();
