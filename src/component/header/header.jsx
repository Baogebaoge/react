import React ,{Component } from 'react'
import './header.css'
/*
*  返回
*  标题
* */
class Header extends  Component{
    handleClick=()=>{
        window.history.back();
    }
    render(){
        return (
            <header>
                <span className='iconfont icon-fanhui' style={{'visibility':(this.props.isshow=='true'?'visible':'hidden')}} onClick={this.handleClick}></span>
                <span>{this.props.title}</span>
                <span></span>
            </header>
        )
    }
}
export default Header