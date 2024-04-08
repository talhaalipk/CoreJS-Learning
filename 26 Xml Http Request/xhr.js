const image =  document.querySelector('img');

document.querySelector('button').addEventListener('click',() => {
    const apiRequest = new XMLHttpRequest();

    apiRequest.open('GET', 'https://dog.ceo/api/breeds/image/random');
    apiRequest.responseType = "json";
    apiRequest.send();

    apiRequest.onload = () => {  
        image.src = apiRequest.response.message ;
    }

})

/*
    * Importants Notes

        * when ever we create / call function using new Keyword it will return object
*/