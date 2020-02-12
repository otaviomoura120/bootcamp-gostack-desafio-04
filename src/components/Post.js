import React from 'react';

import PostComment from './PostComment';

function Post({post}){
    return (
        <div className="post">
            <div className="userDetails">
                <img className="userPhoto" src={post.author.avatar}/>
                <div className="date-name">    
                    <div className="userName">{post.author.name}</div>
                    <div className="postDate">{post.date}</div>
                </div>
            </div>
            <div className="postContent">{post.content}</div>
            <hr/>
            {post.comments.map(postComment => (<PostComment key={postComment.id} comment={postComment}/>))}
        </div>
    )
}

export default Post;