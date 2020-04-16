const posts = [
    {
        title: "BOOK One",
        body : "this is book one"
    },
    {
        title: "BOOK Two",
        body: "this is book two"
    }
];

function getPost(){
    let output = "";
    setTimeout(()=>{
        posts.forEach((post)=>{
            output += `<li>${post.title} : ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
};
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            let err = false;
            if(!err){
                resolve();
            }else{
                reject("oops! there is an error");
            }
        },2000)
    })
};
// ============= single promise
// createPost({title:"BOOK three", body:"this is book three"})
//     .then(getPost)
//     .catch(err=> { console.log(err)});

// ============== all promises
const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve,2000,"GoodBye");
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>
    res.json()
);
// promise.all() takes an array of promises 
Promise.all([promise1, promise2, promise3,promise4]).then((values)=>{
    console.log(values);
})