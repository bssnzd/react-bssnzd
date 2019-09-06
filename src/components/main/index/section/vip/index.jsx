import React from 'react';
import {VipWrap} from '@/components/main/index/section/styled'

class Vip extends React.PureComponent { 
    render() {
        return (<VipWrap>
                <div className='dtop'>
                    <div>
                        <span></span>
                        <span>VIP+会员尊享权益</span>
                    </div>
                    <div>
                        <span>99元/年</span>
                        <span></span>
                    </div>
                </div>
                <div className='dbot'>
                   <div>
                       <h3>
                            <span>专享折扣</span>
                            <span>&gt;</span>
                       </h3>
                       <ul>
                            <li>
                                <div>
                                    <img src="https://image.juooo.com/group1/M00/02/68/rAoKNVv_glKAOQPuAABtQiJfgns079.jpg" alt=""/>
                                </div>
                                <p>
                                    <strong>8</strong>
                                    <span>折</span>
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src="https://image.juooo.com/group1/M00/03/01/rAoKNVyhceeADu8DAACvlzeklJ8752.jpg" alt=""/>
                                </div>
                                <p>
                                    <strong>8.5</strong>
                                    <span>折</span>
                                </p>
                            </li>
                       </ul>
                   </div>
                   <div>
                       <h3>
                            <span>优先购票</span>
                            <span>&gt;</span>
                       </h3>
                       <ul>
                            <li>
                                <div>
                                    <img src="https://image.juooo.com/group1/M00/03/8D/rAoKNV0_kEiAUtd3AACLd6lSPOY055.jpg" alt=""/>
                                </div>
                                <p>
                                    <span>08/13 12:00</span>
                                    <span>开始</span>
                                </p>
                            </li>
                       </ul>
                   </div>
                </div>
            </VipWrap>)
       
    }
    
}



export default Vip;




