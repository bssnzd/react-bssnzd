
import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class  extends React.PureComponent {
    componentDidMount(){
        this.pageInit()
    }
    render() {
        return (
            <div className="swiper-container  "
                    >
                <div className="swiper-wrapper" >
                    {this.props.children}
                </div>
            </div>
        )  
    }
    pageInit(){
        new Swiper('.swiper-container', {
              pagination: '.swiper-pagination',
              slidesPerView: 'auto',
              paginationClickable: true,
              freeMode:true
        });
    }
}