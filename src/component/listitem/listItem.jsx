import React , {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class ListItem extends Component{
    constructor(){
        super();
        this.state ={
            id:'',
        }
    }
    render(){
        return (
            <li className="list-item">
                <Link to={"/content/"+this.state.id+"/"+this.props.content.title}>
                    <img src={this.props.content.img} alt=""/>
                    <div className="item-info">
                        <h3 style={{'WebkitBoxOrient': 'vertical'}}>
                            {this.props.content.title}
                        </h3>
                        <p style={{'WebkitBoxOrient': 'vertical'}}>
                            {this.props.content.desc}
                        </p>
                    </div>
                </Link>
            </li>
        )
    }
    componentDidMount(){
        this.setState({
            id:this.props.content.id.replace(/\//g,'-')
        })

    }
}

export default  ListItem