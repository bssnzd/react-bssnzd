import React, { Fragment } from 'react';
// import axios from "axios"
import { connect } from "react-redux";
import City from '@/components/main/index/section/city'
import Toplist from '@/components/main/index/section/topList'
import HotsRe from '@/components/main/index/section/hotsRecommen'
import TourRe from '@/components/main/index/section/tourRecommend'
import FloorShow from '@/components/main/index/section/floorShow'
import HotTh from '@/components/main/index/section/hotTheatre'
import ReShow from '@/components/main/index/section/recommendShow'
import Vip from '@/components/main/index/section/vip'


// import City from '@/components/main/index/section/city'

class Index extends React.Component {
    
    render() {
        return (
            <Fragment>
                    <City/>
                    {
                        this.props.floorShow.length===0?(
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
                        ):(null) 
                    }
                    <Toplist/>
                    <HotsRe/> 
                    <TourRe/>
                    <Vip/> 
                    <FloorShow/>
                    <HotTh/>
                    <ReShow/>
                <div style={{height:"1.5rem"}}></div>
            </Fragment>
        )
    }
    
}

const mapStateToProps=(state)=>{
    return {
        floorShow:state.getIn(["indexReducer",'floorShow']).toJS()
    }
}
// const mapDispatchToProps=(dispatch)=>({
//     panInit(){
//         dispatch(loadHotcityAsync(dispatch))
//         dispatch(loadCityAsync(dispatch))
        
//         this.props.getIndexData(this.props.currentCity)
//     },
//     handleCity(res){
//         this.setState({isCity:!this.state.isCity})
//         if(res){
//             var  currentCity={
//                 city_id:res.id,
//                 abbreviation:res.Abbreviation||"",
//                 name:res.name
//             }
//             this.props.getIndexData(currentCity)
//         }
//     },
//     getIndexData(currentCity){
//         dispatch(loadIndexDataAsync(dispatch,currentCity));
//         dispatch(loadHotsRecommendAsync(dispatch,currentCity))
//     }
// })
export default connect(mapStateToProps)(Index);