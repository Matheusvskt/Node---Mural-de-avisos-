module.exports = {
    
    posts : [
        {id:"0",
        title:"Teste do Mural",
        description:"Descrição teste"},
    ],

    getAll(){ //RETORNA TODOS OS POSTS
        return this.posts
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description})
    },

    deletePost(id){
        
    }
    
}

function generateID(){
    return Math.random().toString(36).substring(2,9);
}