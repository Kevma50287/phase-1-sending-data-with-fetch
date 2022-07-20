// Add your code here

// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). 

//This request should include:
// The destination URL
// Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// A body with the name and email passed in as arguments to submitData. 
//These should be assigned to name and email keys within an object. 
//This object should then be stringified.

const submitData = (username, user_email) => {
    //create a constant object containing the server request info 
    const fetchObj = {

        //method is uppercase, contains a HTTP Verb, aka-POST, DELETE, PATCH
        method: 'POST',

        //headers determine the type of data to be sent and type of data accepted as a response
        headers: {
            'Content-type':'application/json',
            'Accept':'application/json',
        },

        //takes the two string arguments and assigns them as values to the name and email key
        body: JSON.stringify({
            name: username,
            email: user_email,
        })
    }

    //executes the fetch function to JSON server requesting info contained in fetchObj
    return fetch('http://localhost:3000/users',fetchObj)

    //pasre through new result and generate a new object
    .then((res) => res.json())

    //appends the ID to the DOM
    .then((data) => document.querySelector('body').append(data.id))

    //
    .catch((error) => {
        document.querySelector('body').append(error.message)
    })
}
 // test console function: submitData('me, me, me','me.gmail.com')