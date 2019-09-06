import React from 'react';
import { connect } from "react-redux";
import {TheaterWrap} from '@/components/main/theater/styled';
import Swiper from '@/components/commonTemp/swiper';
import {loadTheaterListAsync} from "@/components/main/theater/actionCreator"
class Theater extends React.Component {
    render() {
        
        return  this.props.theaterList.length===0?(
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
            ):(
            <TheaterWrap>
                <div className='dt'>
                    <h3>剧院</h3>
                </div>
                <div className='ds'>
                    <ul>
                        {
                            this.props.theaterList.map((item,index)=>(
                                <li key={index}>
                                    <div>
                                        <div className='ds1'>
                                            <a href={item.theatre_url}>
                                                <div>
                                                    <img src={item.pic} alt=""/>
                                                </div>
                                                <div>
                                                    <p>{item.name}</p>
                                                    <p>{item.count+'场在售演出'}</p>
                                                </div>
                                            </a>
                                            <a href={item.theatre_url}>...</a>
                                        </div>
                                        <div className='ds2'>
                                            <Swiper>                  
                                                {
                                                    item.showList.map((ite,inde)=>(
                                                        <div className="swiper-slide" key={inde}>
                                                            <div>
                                                                <p>{ite.show_time}</p>
                                                                <span></span>
                                                            </div>
                                                            <a href={item.show_list_url}>
                                                                <img src={ite.pic} alt=""/>
                                                            </a>
                                                        </div>
                                                    ))
                                                }
                                          </Swiper>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </TheaterWrap>
        )

    }
    componentDidMount(){
        this.props.panInit.bind(this)();
    }
}

const mapStateToProps=(state)=>{
    return {
        theaterList:state.getIn(["theaterReducer",'theaterList']).toJS()
    }
}
const mapDispatchToProps=(dispatch)=>({
    panInit(){
        dispatch(loadTheaterListAsync(dispatch))
    }

})

export default connect(mapStateToProps,mapDispatchToProps)(Theater);