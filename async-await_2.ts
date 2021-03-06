
const HttpClient = {
    get(id){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({data: {id: id, from: 'Vienna', to: 'Bratislava'}});
            }, 500);
        })
    }
};


//2. Call the HttpClient with different id's i.e. 10, 11 12. 
//   The goal is to do the calls all in paralell. 
//   So only id if all call returns a value the the whole result is returned at once
const paralellRequests = async () => {
    //insert code here
};

paralellRequests();
