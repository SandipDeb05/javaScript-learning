const posts = [
    {
        title: "BOOK One",
        body: "this is book one"
    },
    {
        title: "BOOK Two",
        body: "this is book two"
    }
]
function getPost(){
    let output = "";
    setTimeout(()=>{
        posts.forEach((post)=>{
            output += `<li>${post.title} : ${post.body}</li>`
        })
        document.body.innerHTML = output;
    },1000)
}
function createPost(post){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            posts.push(post);
            const err = false;
            if(!err){
                res();
            }else{
                rej("there is an error");
            }
        },2000);
    })
}
createPost({title:"Book three", body:"this is a book three"}).then(getPost).catch(err=>{
    console.log(err);
});