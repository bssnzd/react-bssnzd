import React from 'react';
import { connect } from "react-redux";
import {HotThWrap} from '@/components/main/index/section/styled'
import Swiper from '@/components/commonTemp/swiper';

class HotTh extends React.PureComponent {
    render() {
        return this.props.hotTheatre.length>0?(
            <HotThWrap>
                <div className='dtop'>
                    <h3>热门场馆</h3>
                    <a href='https://image.juooo.com'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                    </a>
                </div>
                <div className='dbot'>
                    <Swiper>
                        {/* <div className="swiper-slide" style={{width:'200px',textAlign:'center'}}>ha</div> */}
                        {
                            this.props.hotTheatre.map((item,index)=>(
                                <div className="swiper-slide" key={index}>
                                    <div className='db1'>
                                       <div>
                                           <img src={item.pic} alt=""/>
                                       </div>
                                       <div>
                                           <h3>{item.name}</h3>
                                           <p>{item.count+'场在售演出'}</p>
                                       </div>
                                       <p>...</p>
                                    </div>
                                    <div className='db2'>
                                        <p>
                                            <span>{item.showList[0].show_time}</span>
                                            <span></span>
                                        </p>
                                        <p>
                                            <span>{item.showList[1].show_time}</span>
                                            <span></span>
                                        </p>
                                    </div>
                                    <ul>
                                        <li>
                                            <img src={item.showList[0].pic} alt=""/>
                                        </li>
                                        <li>
                                            <img src={item.showList[1].pic} alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }

                    </Swiper>
                </div>
            </HotThWrap>
        ):(null) 
    }
    
}
const mapStateToProps=(state)=>{
    return {
        hotTheatre:state.getIn(["indexReducer",'hotTheatre']).toJS()
    }
}


export default connect(mapStateToProps)(HotTh);




