import React from 'react'

const CommentList = ({ comments }) => {
    return(
        <div className="comment-list-component">
            <label>评论列表项</label>
            <ul className="list-group mb-3">
                { 
                    comments.map((comment,index)=>
                        <li key={index} className="list-group-item">{comment}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default CommentList