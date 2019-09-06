import React,{Fragment} from 'react';
import { connect } from "react-redux";
import {CityWrap, SearchWrap} from '@/components/main/index/section/styled';
import {loadHotcityAsync, loadCityAsync, loadIndexDataAsync, loadHotsRecommendAsync, 
    loadTourRecommendAsync, loadFloorShowAsync, loadHotTheatreAsync, loadSearchHotAsync, loadSearchDataAsync} from "@/components/main/index/actionCreator"

class City extends React.PureComponent {
    constructor(){
        super();
        this.state={
            index:-1,
            isCity: true,
            isSearch: true,
            val:''
        }
    }
    render() {
        return (
            <Fragment>
            <CityWrap>
                {
                    this.state.isCity?(
                        <div onClick={this.props.handleCity.bind(this,0)} className='noshow'>
                            <strong></strong>
                            <span>{this.props.currentCity.getIn(['name'])}</span>
                        </div>
                    ):(
                        <div className='show'>
                            <div onClick={this.props.handleCity.bind(this,0)} className='d'>城市选择</div>
                            <div className='d1' id='b'>
                                <p >当前城市</p>
                                <div>
                                    <div>{this.props.currentCity.getIn(['name'])}</div>
                                </div>
                                <p>热门城市</p>
                                <div>
                                    <div onClick={this.props.handleCity.bind(this,{city_id:0,abbreviation:"", name:"全国"})}>全国</div>
                                    {
                                        this.props.hotcity.map((item,index)=>(
                                            <div key={index} onClick={this.props.handleCity.bind(this,item)}>{item.name}</div>
                                        ))
                                    }
                                </div>
                                <ul className='u'>
                                    {
                                        this.props.citys.map((item,index)=>(
                                            <li key={index}>
                                                <p id={'a'+index}>{item.id}</p>
                                                {
                                                    item.list.map((it,ind)=>(
                                                        <div key={ind} onClick={this.props.handleCity.bind(this,it)}>{it.name}</div>
                                                    ))
                                                }
                                            </li>
                                            
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='d2'>
                                <p  onClick={this.scrollToAnchor.bind(this,'b')} >当前</p>
                                <p onClick={this.scrollToAnchor.bind(this,'b')} >热门</p>
                                <ul>
                                    {
                                        this.props.citys.map((item,index)=>(
                                            <li key={index} >
                                                <p onClick={this.scrollToAnchor.bind(this,'a'+index)} className={this.state.index===index?'active':''}>{item.id}</p>
                                            </li>
                                            
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                }
                {
                    this.state.isSearch?(
                        <div className='search' onClick={()=>{this.setState({isSearch:false})}}>
                            <img src="https://m.juooo.com/static/img/nav_icon_search.f194288.png" alt=""/>
                            <span>搜索热门演出</span>
                        </div>
                    ):(
                        null
                    )
                }
                <span>
                    <a href="https://m.juooo.com/Distributor/centre">
                        <img src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt=""/>
                    </a>
                </span>
               
            </CityWrap>
            <SearchWrap>
                 {
                    !this.state.isSearch?(
                        <div className='searcht'>
                            <header>
                                <div>
                                    <img src={require('@/assets/img/wenhao.png')} alt=""/>
                                    <input type="text" value={this.state.val} onChange={this.setval.bind(this)}/>
                                    <img src={require('@/assets/img/x.png')} alt="" onClick={()=>{this.setState({val:''})}}/>
                                </div>
                                <span onClick={()=>{this.setState({isSearch:true})}}>取消</span>
                            </header>
                            <section>
                                <div>
                                    {
                                        !this.state.val?(
                                            <div>
                                                {

                                                }
                                                <div>
                                                    <h3>
                                                        <span>热门搜索</span>
                                                    </h3>
                                                    <ul>
                                                        {
                                                            this.props.searchHot.map((item,index)=>(
                                                                <li key={index} onClick={this.getval.bind(this,item)}>{item}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        ):(
                                            <div className="sea">
                                                <ul>
                                                    {   this.props.searchDate.length?(
                                                        this.props.searchDate.map((item,index)=>(
                                                            <li key={index}>
                                                                <div className='db1'>
                                                                    <a href={item.url}>
                                                                        <img src={item.pic} alt=""/>
                                                                    </a>
                                                                    <div dangerouslySetInnerHTML={{__html:item.tag_icon}}></div>
                                                                </div>
                                                                <div className='db2'>
                                                                    <p className='p1'>
                                                                        <strong>{item.show_time_top}</strong>
                                                                        <span>{item.show_time_bottom}</span>
                                                                    </p>
                                                                    <a href={item.url}>
                                                                        <h3 dangerouslySetInnerHTML={{__html:item.name}}></h3>
                                                                    </a>
                                                                    <p className='p2'>{item.city_name+' | '+item.venue_name}</p>
                                                                    <p className='p3'>
                                                                        <strong>{'￥'+item.min_price}</strong>
                                                                        <span>起</span>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        ))):(null)
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                            </section>
                        </div>
                    ):(null)
                }
            </SearchWrap>
            </Fragment>
        )
    }
    scrollToAnchor (anchorName) {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorName.indexOf('a')!==-1){
                this.setState({index:parseInt(anchorName.substr(1,1))});
                anchorElement.style.paddingTop=1.17333+'rem';
                var elseEl = anchorElement.parentNode.parentNode.querySelectorAll('p');
                for (var i = 0; i < elseEl.length; i++) {
                    if (elseEl[i] !== anchorElement) {//判断是否是ele节点，是否与触发事件的节点相同
                        elseEl[i].style.paddingTop=0+'rem';
                    }
                }
            }else{
                this.setState({index:-1});
            }
            if(anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    getval(item){
        this.setState({
            val:item
        })
        this.props.getSearch.bind(this,item)();
    }
    setval(e){
        this.setState({
            val:e.target.value
        })
        console.log(1)
        this.props.getSearch.bind(this,e.target.value)();
    }
    componentDidMount(){
        this.props.panInit.bind(this)();
    }
}
const mapStateToProps=(state)=>{
    return {
        currentCity:state.getIn(["indexReducer",'currentCity']),
        hotcity:state.getIn(["indexReducer",'hotcity']).toJS(),
        citys:state.getIn(["indexReducer",'citys']).toJS(),
        searchHot:state.getIn(["indexReducer",'searchHot']),
        searchDate:state.getIn(["indexReducer",'searchDate']).toJS()
    }
}
const mapDispatchToProps=(dispatch)=>({
    panInit(){
        dispatch(loadHotcityAsync(dispatch))
        dispatch(loadCityAsync(dispatch))
        dispatch(loadSearchHotAsync(dispatch))
        this.props.getIndexData(this.props.currentCity)
    },
    handleCity(res){
        this.setState({isCity:!this.state.isCity})
        if(res){
            var  currentCity={
                city_id:res.id,
                abbreviation:res.Abbreviation||"",
                name:res.name
            }
            this.props.getIndexData(currentCity)
        }
    },
    getIndexData(currentCity){
        dispatch(loadIndexDataAsync(dispatch,currentCity));
        dispatch(loadHotsRecommendAsync(dispatch,currentCity))
        dispatch(loadTourRecommendAsync(dispatch,currentCity))
        dispatch(loadFloorShowAsync(dispatch,currentCity))
        dispatch(loadHotTheatreAsync(dispatch,currentCity))
    },
    getSearch(e){
        dispatch(loadSearchDataAsync(dispatch,e))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(City);




