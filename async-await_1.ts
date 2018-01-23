const HttpClient = {
    get(id){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({data: {id: id, from: 'Vienna', to: 'Bratislava'}});
            }, 500);
        })
    }
};

//1. Call the HttpClient with different id's i.e. 10, 11 12. 
//   The goal is to do the calls one after another. 
//   So only the previouse call returns a value the next one can be done

const sequentRequests = async () => {
    //insert code here
};

sequentRequests();
