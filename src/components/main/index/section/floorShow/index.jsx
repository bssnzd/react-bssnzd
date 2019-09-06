import React from 'react';
import { connect } from "react-redux";
import {FloorShowWrap} from '@/components/main/index/section/styled'
import Swiper from '@/components/commonTemp/swiper';

class FloorShow extends React.PureComponent {
    render() {
        return this.props.floorShow.length>0?(
            <FloorShowWrap>
                {
                    this.props.floorShow.map((ite,inde)=>(
                        
                        <div key={inde}>
                           { ite.list.length>0?( 
                        <div>
                            <div className='dtop'>
                                
                                <h3>{ite.title}</h3>
                                <a href={ite.schedular_url}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                                </a>
                            </div>
                            <div className='dc'>
                                
                                <div style={{backgroundColor:`${this.getBg()}`}}>
                                    <a href={ite.list[0].url}>
                                        <div>
                                            <img src={ite.list[0].pic} alt=""/>
                                            {/* <div dangerouslySetInnerHTML={{__html:ite.list[0].ico}}></div> */}
                                        </div>
                                        <div>
                                            <p>
                                                <strong>{ite.list[0].date}</strong>
                                                <span>{ite.list[0].week}</span>
                                            </p>
                                            <h3>{ite.list[0].schedular_name}</h3>
                                            <p>{ite.list[0].city_name+' | '+ite.list[0].venue_name}</p>
                                        </div>
                                    </a>
                                </div>
                               
                            </div>
                            <div className='dbot'>
                                <Swiper>
                                    {   
                                        ite.list.slice(1).map((item,index)=>(
                                            <div className="swiper-slide" key={index}>
                                                <a href={item.url}>
                                                    <div>
                                                        <img src={item.pic} alt=""/>
                                                        {/* <div dangerouslySetInnerHTML={{__html:item.ico}}></div> */}
                                                    </div>
                                                    <p>{item.schedular_name}</p>
                                                    <p>
                                                        <strong>{'￥'+item.low_price}</strong>
                                                        <span>起</span>
                                                    </p>
                                                </a>
                                            </div>
                                        ))
                                    }

                                </Swiper>
                            </div>
                        </div>):(null)}
                            
                        </div>
                    ))
                }
                
            </FloorShowWrap>
        ):(null) 
    }
    getBg(){
        return `rgb(${parseInt(Math.random()*256)}, ${parseInt(Math.random()*256)}, ${parseInt(Math.random()*256)})`
    }
    
}
const mapStateToProps=(state)=>{
    return {
        floorShow:state.getIn(["indexReducer",'floorShow']).toJS()
    }
}


export default connect(mapStateToProps)(FloorShow);




