import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './commentiiitem.css'

export default  class  CommentIiitem extends Component{

    static propsTypes={
        comment: PropTypes.object.isRequired,
        deleteComments: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    }

    handleClick=()=> {
        const {comment, deleteComment, index} = this.props
        if (window.confirm(`Are you sure to delete the comment from ${comment.username} ?`)) {
            deleteComment(index)
        }
    }

    render(){
        const {comment} = this.props
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>Delete</a>
                </div>
                <p className="user"><span>{comment.username}: </span></p>
                <p className="centence">{comment.content} </p>
            </li>

        )
    }
}
