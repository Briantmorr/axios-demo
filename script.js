const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';
const ID = '5ac278c9329150131fbbff67';
const ITEM_URL = 'http://api.reactprototypes.com/todos/';
axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp =>{
    console.log('server response: ', resp);
}).catch(err => {
console.log('error', err);
console.dir(err);
});

const newItem = {
    title: ' add  more items',
    details: 'get to work on this'
}

axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then(resp => {
    console.log('we added an item', newItem, 'response is', resp);
    
});


axios.get(`${ITEM_URL}${ID}${API_KEY}`).then(resp => {
    console.log('response is', resp);
    
});