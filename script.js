fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        document.querySelector('button').addEventListener('click', e => {
            // Generate random number between 0 & length of data (160x)
            const randomNumber = Math.floor(Math.random() * data.length);

            // document.querySelector('.quote').innerHTML = data[randomNumber].text + data[randomNumber].author;
            document.querySelector('.quote').innerHTML = `<p>${data[randomNumber].text} </p> <p>${data[randomNumber].author}</p>  `

        })

    });