import React from 'react';

function PostComment({comment}){
    return (
        <div className="postComment">
            <img className="userPhoto" src={comment.author.avatar}/>
            <div className="userComment">
                <span className="userName">{`${comment.author.name} `}</span> 
                {comment.content}
            </div>
        </div>
    );
}

export default PostComment;