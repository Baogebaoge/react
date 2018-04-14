import React , {Component} from 'react'

import data from '../../libs/data'
import Header from '../../component/header/header'
import './content.css'
class Content extends Component{
    constructor(){
        super();
        this.state = {
            text:''
        }
    }
    render(){
        return (<div>
            <Header title={this.props.match.params.title} isshow='true'/>
            <div className="content" dangerouslySetInnerHTML={{__html:this.state.text}}>

            </div>
        </div>)
    }
    componentDidMount(){
        let id = this.props.match.params.id.replace(/-/g,'/');
        data.getContent(id).then(res=>(
            this.setState({
                text:res.showapi_res_body.text.replace(/&nbsp;&nbsp;&nbsp;/g,'<br>')
            })
        ))
    }
}

export default Content