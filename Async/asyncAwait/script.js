const posts = [
    {
        title: "BOOK One",
        body: "this is book one"
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
            output += `<li>${post.title}: ${post.body}</li>`;
        });
        document.body.innerHTML = output;
    });
}
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            let err = false;
            if(!err){
                resolve();
            }else{
                reject("OOPs there is an error");
            }
        },2000);
    });
}
async function init(){
    await createPost({title:"BOOK Three", body:"this is book three"});
    getPost();
}
init();

//---- async/await with fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUsers();