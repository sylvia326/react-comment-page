import React, {Component} from 'react'


import 'bootstrap/dist/css/bootstrap.css'
import CommentAdd from '../comment-add/comment-add'
import CommentItem from '../comment-item/comment-item'



export default  class App extends Component {

    state={
        comments:[
            {username:'Tom',content:'React is so easy'},
            {username:'Jack',content:'React is hard'},
        ]
    }

    addComment = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    deleteComment = (index) => {
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({comments})
    }


    render(){
        const{comments}=this.state
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>Please leave your comments about React: </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">

                    <CommentAdd addComment={this.addComment}/>
                    <CommentItem comments={comments} deleteComment={this.deleteComment}/>
                 </div>
            </div>

        )
    }
}

