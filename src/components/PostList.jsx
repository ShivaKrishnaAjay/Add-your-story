import Post from "./Post";
import { useContext, useEffect,useState } from "react";
import {PostList as PostListData} from '../store/post-list-store';
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList=()=>{

const {postList,addInitialPosts}=useContext(PostListData)




return(
<>
{
postList.map((post)=>(
    <Post key={post.id} post={post}/>
))
}

</>

)


}
export default PostList;