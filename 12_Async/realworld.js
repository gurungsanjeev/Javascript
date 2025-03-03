async function Example(){
    try{

        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let value = await response.json();
        

        value.map((post)=>{
            console.log(post.title);
        })



    }catch(err){
        console.log("Error aayo hai!")
    }

}
Example();
