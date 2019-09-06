import React from 'react';
import { connect } from "react-redux";
import {ShowWrap} from '@/components/main/show/styled';
import {loadCityAsync, loadShowCategoryAsync, loadShowListAsync, loadShowChangeAsync} from "@/components/main/show/actionCreator"
import { PullToRefresh} from 'antd-mobile';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        index:-1,
        cindex:-1,
        isCity:false,
        page:1,
        height: document.documentElement.clientHeight,
    };
  }
  render() {
      
        return this.props.showList.length>0?(<div>
         <ShowWrap>
                <div className='dt'>
                    <h3>演出</h3>
                </div>
                <div className='dm'>
                    <div className='dm1'>
                        <ul>
                            <li onClick={this.props.handleShow.bind(this,this.props.current,-1)}
                            className={-1===this.state.index?'active':''}>全部</li>
                            {
                                this.props.showCategory.map((item,index)=>(
                                    <li key={index} className={index===this.state.index?'active':''} onClick={this.props.handleShow.bind(this,item,index)}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='dm2' onClick={()=>(this.setState({isCity:true}))}>
                        <span>{this.props.current.name}</span>
                        <span></span>
                    </div>
                </div>
                <PullToRefresh
                    damping={100}
                    ref={el => this.ptr = el}
                    direction={'up'}
                    onRefresh={() => {
                        let current=this.props.current;
                        this.setState({page:this.state.page+1})
                        current.page=this.state.page;
                        this.props.getShowList(current);
                    }}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                >
                <div className='df'>
                    <section>
                        <div>
                            <ul>
                                { 
                                this.props.showList.map((item,index)=>(
                                    <li key={index}>
                                        <div className='db1'>
                                            <a href={item.url}>
                                                <img src={item.pic} alt=""/>
                                            </a>
                                            {/* <div dangerouslySetInnerHTML={{__html:item.tag_icon}}></div> */}
                                        </div>
                                        <div className='db2'>
                                            <p className='p1'>
                                                <strong>{item.show_time_top}</strong>
                                                <span>{item.show_time_bottom}</span>
                                            </p>
                                            <a href={item.url}>
                                                <h3>{item.name}</h3>
                                            </a>
                                            <p className='p2'>{item.city_name+' | '+item.venue_name}</p>
                                            <p className='p3'>
                                                <strong>{'￥'+item.min_price}</strong>
                                                <span>起</span>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div style={{height:"1.33rem"}}></div>
                        </div>
                    </section>
                </div>
                </PullToRefresh>
                <div className='hed' style={{display:this.state.isCity?'block':'none'}}>
                    <section>
                        <div onClick={()=>(this.setState({isCity:false}))}></div>
                        <div>
                            <div>
                                <h3>城市</h3>
                                <div>
                                    <ul>
                                        <li onClick={()=>(this.setState({cindex:-1}))}
                                        className={-1===this.state.cindex?'active':''}>全国</li>
                                        {
                                            this.props.city.map((item,index)=>(
                                                <li key={index} className={index===this.state.cindex?'active':''}
                                                 onClick={()=>(this.setState({cindex:index}))}>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <span onClick={()=>(this.setState({cindex:-1}))}>重置</span>
                                <span onClick={this.props.handleCity.bind(this,this.state.cindex)}>确定</span>
                            </div>
                        </div>
                    </section>
                </div>
            </ShowWrap>
    </div>):(
        <div style={{position:"fixed",
        top:0,
        left:0,
        right:0,
        bottom:0,
        background:"#fff",
        zIndex:999}}>
            <img src={require('@/assets/img/loading.gif')} style={{width:"70%",height:"auto",
            position:'absolute',
            top:0,
            left:0,
            right:0,
            bottom:0,
            margin:"auto"}} alt=""/>
        </div>
    )
      
  }
  componentDidMount(){
    this.props.panInit.bind(this)();
  }
}

const mapStateToProps=(state)=>{
    return {
        current:state.getIn(["showReducer",'current']).toJS(),
        showList:state.getIn(["showReducer",'showList']).toJS(),
        city:state.getIn(["showReducer",'city']).toJS(),
        showCategory:state.getIn(["showReducer",'showCategory']).toJS(),
    }
}
const mapDispatchToProps=(dispatch)=>({
    panInit(){
        dispatch(loadCityAsync(dispatch))
        dispatch(loadShowCategoryAsync(dispatch))
        this.props.getIndexData(this.props.current)
    },
    handleCity(index){
        this.setState({isCity:false})
        var current={};
        if(index===-1){
            current={
                category_id:0,
                city_id:0,
                name:'全国',
                page:1
            }
        }else {
            let res=this.props.city[index]
            current={
                category_id:this.props.current.category_id,
                city_id:res.city_id,
                name:res.name,
                page:1
            }
        }
        console.log(current)
        this.props.getIndexData(current)
      
    },
    handleShow(res,index){
        this.setState({index})
        if(index===-1){
            res.category_id=0;
        }
        var current={
            category_id:res.category_id,
            city_id:this.props.current.city_id,
            name:this.props.current.name
        }
        this.props.getIndexData(current)  
    },
    getIndexData(current){
        dispatch(loadShowChangeAsync(dispatch,current))     
    },
    getShowList(current){
        dispatch(loadShowListAsync(dispatch,current))     
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Show);