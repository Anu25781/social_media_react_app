import { createContext, useReducer } from "react";


//const DEFAULT_CONTEXT={};
  
  




export const PostListData=createContext({
  postList:[],
  addPost: ()=> {},
  deletePost: ()=> {},
});

const postListReducer=(currPostList, action)=>{
let newPostList=currPostList;
  if(action.type==='DELETE_POST'){

    
    newPostList=currPostList.filter((post)=>post.id !==action.payload.postId);

  }
  else if(action.type==='ADD_POST'){
    newPostList=[action.payload, ...currPostList]
    
  }
  return newPostList;
};




const PostListProvider=({children})=>{


const [postList, dispatchPostList]=useReducer(postListReducer, []);




const addPost=(userId, postTitle, postBody, reactions, tags)=>{

  dispatchPostList({
    type:'ADD_POST',
    payload:{
      id:Date.now(),
      title:postTitle,
      body:postBody,
      reactions:reactions,
      userId:userId,
      tags:tags,
    }
  })
};

const deletePost=(postId)=>{

  dispatchPostList({
    type:"DELETE_POST",
    payload: {
      postId,
    },
  });
};


  return <PostListData.Provider value={{postList,addPost,
deletePost,
  }}>{children}
  </PostListData.Provider>;
};




export default PostListProvider;