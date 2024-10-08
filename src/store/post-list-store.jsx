import {useEffect,createContext,useReducer} from "react"

export const PostList=createContext({
postList:[],
addPost:()=>{},
deletePost:()=>{},
addInitialPosts:()=>{}
})


const postListReducer=(currPostList,action)=>{
    
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter((post)=>post.id!==action.payload.postId)
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
        
        console.log(newPostList)
    }
    else if(action.type==="ADD_INITIAL_POSTS")
    {  
        newPostList=action.payload.posts;
    }
    return newPostList;
}
const PostListProvider=({children})=>{

const [postList,dispatchPostList]=useReducer(
    postListReducer,
    []
)

const addInitialPosts=(posts)=>{

    dispatchPostList({
type:'ADD_INITIAL_POSTS',
payload:{
posts

}

    })
}

const addPost=(userId,postTitle,postBody,reactions,tags)=>{

    dispatchPostList({
type:'ADD_POST',
payload:{
id: Date.now() ,
title:postTitle,
body:postBody,
reactions:reactions,
userId:userId,
tags:tags

}

    })
}

const deletePost=(postId)=>{

dispatchPostList({
    type:"DELETE_POST",
    payload:{
        postId,
    }
})


}





useEffect(()=>{
    console.log("fetch started")

   
  
    fetch("https://dummyjson.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
        addInitialPosts(data.posts)
        console.log("fetch returned")

    })
  

    }
,[])


    return <PostList.Provider value={{postList,addPost,deletePost,addInitialPosts}}>
        {children}
        </PostList.Provider>
}












export default PostListProvider;