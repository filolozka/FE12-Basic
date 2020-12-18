const token = 'b0fe71f66d6737dc7488ee526cd6a349';

const request = fetch('http://api.openweathermap.org/data/2.5/weather?q=x&units=metrics&mode=json&appid=${token}');

request
    .then(
        response => {
            console.log(response)
           if(response.ok) {
               return response.json()
           }
           throw Error(response.statusText)
        })

    .then(json => {
        console.log(json);
        document.querySelector('#city').innerText = json.name;
        document.querySelector('#temp').innerText = json.main.temp;
    })
    .catch(reason => {
        console.log(reason);
        document.querySelector('#error').innerText = reason;
    })