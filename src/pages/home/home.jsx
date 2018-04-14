import React , {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './home.css'
import data from '../../libs/data'
import bannerimg from  '../../static/image/banner1.jpg'
import img from  '../../static/image/cate1.jpg'
import Header from '../../component/header/header'
import ListItem from '../../component/listitem/listItem'
class Home extends Component{
    constructor(){
        super();
        this.state ={
            cate:[]
        }
    }
    componentDidMount(){
         this.setState({
             cate:data.cate.slice(0,3)
         })
    }
    render(){
        return (<div className="index-content">
            <Header title="故事" isshow='false' />
            <div className="banner">
                <img src={bannerimg} alt=""/>
            </div>
            {
                this.state.cate.map((item,index)=>(<Listbox value={item.value} key={index} type={item.type} />))
            }
        </div>)
    }
}

class Listbox extends  Component{
    constructor(){
        super();
        this.state = {
            lists:[]
        }
    }
    render(){
        return (
            <div className="index-list-box">
                <div className="index-list-title">
                    <h3><span></span> {this.props.value}</h3>
                    <Link to={'/list/'+this.props.type+'/'+this.props.value}>
                        <span className="iconfont icon-gengduo-tianchong"></span>
                    </Link>
                </div>
                <ul className="index-list">
                    {
                        this.state.lists.map((value,index)=>(
                            <ListItem content={value} key={index}/>
                        ))

                    }

                </ul>
            </div>
        )
    }
    componentDidMount(){
          data.getList(this.props.type,1).then(res=>{
              this.setState({
                  lists:res.showapi_res_body.pagebean.contentlist.slice(0,5)
              });
          })

    }
}



export default  Home