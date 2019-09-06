import React from 'react';
import { connect } from "react-redux";
import {HotsReWrap} from '@/components/main/index/section/styled'
import Swiper from '@/components/commonTemp/swiper';

class HotsRe extends React.PureComponent {
    render() {
        return this.props.hotsRecommend.length>0?(
            <HotsReWrap>
                <div className='dtop'>
                    <h3>热门演出</h3>
                    <a href='https://image.juooo.com'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
                    </a>
                </div>
                <div className='dbot'>
                    <Swiper>
                        {/* <div className="swiper-slide" style={{width:'200px',textAlign:'center'}}>ha</div> */}
                        {
                            this.props.hotsRecommend.map((item,index)=>(
                                <div className="swiper-slide" key={index}>
                                    <a href={item.schedular_url}>
                                        <div><img src={item.pic} alt=""/></div>
                                        <p>{item.show_name}</p>
                                    </a>
                                </div>
                            ))
                        }

                    </Swiper>
                </div>
            </HotsReWrap>
        ):(null) 
    }
    
}
const mapStateToProps=(state)=>{
    return {
        hotsRecommend:state.getIn(["indexReducer",'hotsRecommend']).toJS()
    }
}


export default connect(mapStateToProps)(HotsRe);




