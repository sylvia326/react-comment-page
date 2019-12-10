import React, {Component} from 'react'
import PropTypes from'prop-types'
import CommentIiitem from "../comment-iiitem/comment-iiitem";
import './comment-item.css'


export default  class CommentItem extends Component {

    static propTypes={
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired,
    }

    render(){
        const {comments, deleteComment} = this.props
        const display = comments.length ===0? 'block':'none'
        return(
                 <div className="col-md-8">
                    <h3 className="reply">Comments: </h3>
                    <h2 style={{display}}>No comments, please add a comments above.</h2>
                    <ul className="list-group">
                        {
                            comments.map((comment,index)=> <CommentIiitem comment ={comment} key={index}
                            deleteComment={deleteComment} index={index}/>)
                        }
                    </ul>
                </div>

        )
    }
}

