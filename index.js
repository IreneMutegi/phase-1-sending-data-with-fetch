function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())  // Handle the JSON response
    .then(data => {
        // Assuming the returned object contains an id field
        const newId = data.id;

        // Append the new id to the DOM
        const idElement = document.createElement('p');
        idElement.textContent = newId;
        document.body.appendChild(idElement);
    })
    .catch(error => {
        // Append the error message to the DOM
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
    });
}
