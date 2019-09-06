import React from 'react';
import { connect } from "react-redux";
import { Carousel, WingBlank } from 'antd-mobile';
import {ToplistWrap} from '@/components/main/index/section/styled'


class Toplist extends React.PureComponent {
    render() {
        
        if(this.props.indexdata.classify_list){
            return (
                <ToplistWrap>
                    {
                        this.props.indexdata.slide_list.length>0?(   
                            <div>   
                            <WingBlank style={{width:'100%',margin:'0 auto',height:'5.22667rem'}}>
                              <Carousel
                                autoplay
                                infinite
                                
                              //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                              //   afterChange={index => console.log('slide to', index)}
                                style={{width:'100%',margin:'0 auto',height:'5.22667rem'}}
                              >
                                {this.props.indexdata.slide_list.map(val => (
                                  <a
                                    key={val}
                                    href={val.url}
                                    style={{width:'100%',margin:'0 auto',height:'5.22667rem', display: 'inline-block'}}
                                  >
                                    <img
                                      src={val.image_url}
                                      alt={val.title}
                                      style={{width:'100%',margin:'0 auto',height:'5.22667rem'}}
                                      onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                      }}
                                    />
                                  </a>
                                ))}
                              </Carousel>
                            </WingBlank>        
                            </div> 
                          ):(
                             null
                          )
                    }
                    <div className='d'>                      
                        <div className='d1'>
                            {
                                this.props.indexdata.classify_list.map((item,index)=>(
                                    <div key={index}>
                                        <img src={item.pic} alt=""/>
                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='d2'>
                            <div className='d2-1'>
                                <div>
                                    <span>优先购票</span>
                                    <span>VIP+会员尊享权益</span>
                                </div>
                                <div>
                                    <span>开通99元/年</span>
                                    <span>{'>'}</span>
                                </div>
                            </div>
                            <div className='d2-2'>
                                <div><img src="https://image.juooo.com/group1/M00/02/E9/rAoKmV1EA9CAf09qAACEU5NfPaE667.jpg" alt=""/></div>
                                <div>
                                    <a href='https://image.juooo.com'>【万有音乐系】你眼里的蓝之音色幻想—西安站</a>
                                    <p>西安 | 西安果核剧场</p>
                                    <p>
                                        <span>08/03 16:18</span>
                                        <span>开始</span>
                                    </p>
                                </div>
                                <a href='https://image.juooo.com'> <span>开售提醒</span></a>
                            </div>
                        </div>
                        <div className='d3'>
                            <ul className='du1'>
                                {
                                    this.props.indexdata.operation_list.slice(0,2).map((item,index)=>(
                                        <li key={index}>
                                            <div>
                                                <h3>{item.name}</h3>
                                                <p dangerouslySetInnerHTML={{__html:item.describe}}></p>                                               
                                            </div>
                                            <img src={item.pic} alt=""/>
                                        </li>
                                    ))
                                }
                            </ul>
                            <ul className='du2'>
                                {
                                    this.props.indexdata.operation_list.slice(2).map((item,index)=>(
                                        <li key={index}>
                                            <div>
                                                <h3>{item.name}</h3>
                                                <p dangerouslySetInnerHTML={{__html:item.describe}}></p>                   
                                            </div>
                                            <img src={item.pic} alt=""/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>        
                    </div>
                </ToplistWrap>
            )
        }
        return null;
    }
    
}
const mapStateToProps=(state)=>{
    return {
        indexdata:state.getIn(["indexReducer",'indexdata']).toJS()

    }
}


export default connect(mapStateToProps)(Toplist);




