
const getFile = (file, clb) => {
const request = new XMLHttpRequest();
      request.open(`GET`, file);    
      request.send();
    
    request.addEventListener(`readystatechange`, () => {
        if (request.readyState === 4 && request.status === 200 && request.status < 400) {
            
            let response = (JSON.parse(request.response));
            clb(response);
        }
    })
}
const dataChildlen = [];

const receivedData = (response) => {
    Object.values(response)
        .forEach(item => item
            .forEach(item => dataChildlen.push(item)));

}

getFile(`./data.json`, receivedData);
getFile(`./data2.json`, receivedData);
console.log(dataChildlen);
