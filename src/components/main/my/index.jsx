import React, { Fragment } from 'react';
import store from 'storejs'
import { connect } from "react-redux"
import {LonginWrap, MyWrap} from '@/components/main/my/styled'
import {loginAsync , registerAsync} from "@/components/main/my/actionCreator"
import { Toast } from 'antd-mobile';

 class My extends React.Component {
    constructor(){
        super();
        this.state={
            isLogin:false,
            userinfo:'',
            loginbool:true,
            name:'',
            pwd:'',
            top:[{num:0,name:'账户余额'},{num:10,name:'积分'},{num:0,name:'优惠券'}],
            boto:[
                {url:require('@/assets/img/b1.png'),name:'我的订单'},
                {url:require('@/assets/img/b2.png'),name:'我的票夹'},
                {url:require('@/assets/img/b3.png'),name:'我的卡包'}
            ],
            bott:[
                {url:require('@/assets/img/b4.png'),name:'实名购票人'},
                {url:require('@/assets/img/b5.png'),name:'收货地址'},
                {url:require('@/assets/img/b6.png'),name:'收货地址'},
                {url:require('@/assets/img/b7.png'),name:'客服帮助'}
            ],
        }
    }
    componentWillMount(){
        let loc=store.get('userinfo')
        if(loc){
            this.setState({isLogin:true,userinfo:loc})
        }
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.isLogin?(
                        <MyWrap>
                            
                                <div className='top'>
                                    <div>
                                        <div className='t1'>
                                            <div><img src="https://image.juooo.com/group1/M00/03/6F/rAoKNV0XF2uABEtSAAANUrP00o0602.png" alt=""/></div>
                                            <span>{this.state.userinfo.name}</span>
                                            <span>{'ID:'+this.state.userinfo.id}</span>
                                        </div>
                                        <div className='t2'>
                                            <p>普通会员</p>
                                        </div>
                                        <div className='t3'>
                                            {
                                                    this.state.top.map((item,index)=>(
                                                        <a href="https://m.juooo.com/Myjuooo" key={index}>
                                                            <p>{item.num}</p>
                                                            <p>{item.name}</p>
                                                            <div></div>
                                                        </a>
                                                    ))
                                            }
                                            <a href="">
                                                <p>立即开通</p>
                                                <p>橙PLUS卡</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='bot'>
                                    <ul className='b1'>
                                            {
                                                this.state.boto.map((item,index)=>(
                                                    <li key={index} >
                                                        <img src={item.url} alt=""/>
                                                        <p>{item.name}</p>
                                                    </li>
                                                ))
                                            }
                                            <li></li>
                                    </ul>
                                    <ul className='b2'>
                                            {
                                                this.state.bott.map((item,index)=>(
                                                    <li key={index} >
                                                        <img src={item.url} alt=""/>
                                                        <p>{item.name}</p>
                                                    </li>
                                                ))
                                            }
                                    </ul>
                                </div>
                            
                        </MyWrap>
                    ):(
                        <LonginWrap>
                            <div className='navbar'>
                                <div>
                                    {/* &lt; */}
                                </div>
                            </div>
                            <div className='main'>
                                <div>
                                    <h1>欢迎来到聚橙网</h1>
                                    <div style={{display:this.state.loginbool?'block':'none'}}>
                                        <input type="text" placeholder="请输入账号" value={this.state.name}
                                         onChange={this.setName.bind(this)}/>
                                        <input type="password" placeholder="请输入密码"value={this.state.pwd}
                                         onChange={this.setPwd.bind(this)}/>
                                        <div>
                                            <button onClick={this.login.bind(this)}
                                            className={this.state.name?'active':''}>登 录</button>
                                        </div>
                                    </div>
                                    <div style={{display:this.state.loginbool?'none':'block'}}>
                                        <input type="text" placeholder="请输入想要注册的账号" value={this.state.name}
                                            onChange={this.setName.bind(this)}/>
                                        <input type="text" placeholder="请输入密码，且牢记"value={this.state.pwd}
                                         onChange={this.setPwd.bind(this)}/>
                                        <div>
                                            <button onClick={this.register.bind(this)} 
                                            className={this.state.name?'active':''}>注 册</button>
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{display:this.state.loginbool?'block':'none'}} onClick={
                                            ()=>{this.setState({loginbool:false,name:'',pwd:''})}
                                        }>注册账号</span>
                                        <span style={{display:this.state.loginbool?'none':'block'}} onClick={
                                            ()=>{this.setState({loginbool:true,name:'',pwd:''})}
                                        }>返回登录</span>
                                    </div>
                                </div>
                            </div>
                            <div className='footer'>
                                <div className='f1'>
                                    <p>其他登录方式</p>
                                </div>
                                <div className='f2'>
                                    <div>
                                        <a href="https://m.juooo.com/Passport/oauthRegLogin?type=qq">
                                            <span></span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://m.juooo.com/Passport/oauthRegLogin?type=sina">
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </LonginWrap>
                    )
                }
            </Fragment>
        )
    }
    setName(e){
        this.setState({
            name:e.target.value
        })
    }
    setPwd(e){
        this.setState({
            pwd:e.target.value
        })
    }
    login(){
        let params={
            name:this.state.name,
            pwd:this.state.pwd
        }
        loginAsync(params,(res)=>{
            console.log(res)
            if(res.data.status==300){
                Toast.fail(res.data.msg, 1);
            }else{
                Toast.success('登录成功', 1);
                store.set('userinfo',res.data)
                this.setState({isLogin:true})
            }
        })
    }
    register(){
        let params={
            name:this.state.name,
            pwd:this.state.pwd
        }
        registerAsync(params,(res)=>{
            console.log(res)
            if(res.data.status==300){
                Toast.fail(res.data.msg, 1);
            }else{
                Toast.success(res.data.msg, 1);
                this.setState({loginbool:true})
            }
        })
    }
}

const mapStateToProps=(state)=>{
    return {
        // current:state.getIn(["showReducer",'current']).toJS(),

    }
}
const mapDispatchToProps=(dispatch)=>({
    // panInit(){
    //     dispatch(loadCityAsync(dispatch))
    //     dispatch(loadShowCategoryAsync(dispatch))
    //     this.props.getIndexData(this.props.current)
    // },
    // getShowList(current){
    //     dispatch(loadShowListAsync(dispatch,current))     
    // }
})

export default connect(mapStateToProps,mapDispatchToProps)(My);