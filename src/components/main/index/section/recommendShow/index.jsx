import React from 'react';
import { connect } from "react-redux";
import {ReShowWrap} from '@/components/main/index/section/styled'
import { PullToRefresh} from 'antd-mobile';
import {loadRecommendShowAsync} from "@/components/main/index/actionCreator"
class ReShow extends React.PureComponent { 
    constructor(props) {
        super(props);
        this.state = {
            page:1,
            height: document.documentElement.clientHeight,
        };
      }
    render() {
        return this.props.recommendShow.length>0?(
            <PullToRefresh
            damping={60}
            ref={el => this.ptr = el}
            direction={'up'}
            onRefresh={() => {
                let currentCity=this.props.currentCity;
                this.setState({page:this.state.page+1})
                currentCity.page=this.state.page;
                this.props.getData(currentCity)
            }}
            style={{
                height: this.state.height,
                overflow: 'auto',
            }}
          >
            {this.props.children}
            <ReShowWrap>
                <div className='dtop'>
                    <h3>为你推荐</h3>
                </div>
                <div className='dbot'>
                    <ul>
                        {
                            this.props.recommendShow.map((item,index)=>(
                                <li key={index}>
                                    <div className='db1'>
                                        <a href={item.url}>
                                            <img src={item.schePic} alt=""/>
                                        </a>
                                        {/* <div dangerouslySetInnerHTML={{__html:item.tag_icon}}></div> */}
                                    </div>
                                    <div className='db2'>
                                        <p className='p1'>
                                            <strong>{item.show_time}</strong>
                                            <span>{item.week}</span>
                                        </p>
                                        <a href={item.url}>
                                            <h3>{item.show_name}</h3>
                                        </a>
                                        <p className='p2'>{item.c_name+' | '+item.v_name}</p>
                                        <p className='p3'>
                                            <strong>{'￥'+item.low_price}</strong>
                                            <span>起</span>
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div style={{display:this.props.bool?'block':'none'}}>没有更多了</div>
                </div>
            </ReShowWrap>
            </PullToRefresh>
        ):(null) 
    }
    componentDidMount(){
        this.props.getData.bind(this,this.props.currentCity)()
    }
}
const mapStateToProps=(state)=>{
    return {
        bool:state.getIn(["indexReducer",'bool']),     
        currentCity:state.getIn(["indexReducer",'currentCity']).toJS(),
        recommendShow:state.getIn(["indexReducer",'recommendShow']).toJS()
    }
}
const mapDispatchToProps=(dispatch)=>({
    getData(currentCity){   
        dispatch(loadRecommendShowAsync(dispatch,currentCity))     
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(ReShow);




