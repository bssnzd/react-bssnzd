import React,{Fragment} from 'react';
import {Route,Redirect } from 'react-router-dom';

import Index from "@/components/main/index"
import Theater from "@/components/main/theater"
import Show from "@/components/main/show"
import My from "@/components/main/my"


export default class  extends React.PureComponent{
    render(){
        return (
            <Fragment>
                <Route path="/index" component={Index}/>   
                <Route path="/theater" component={Theater}/>   
                <Route path="/show" component={Show}/>   
                <Route path="/my" component={My}/>   
                <Redirect path="/" to="/index"/>
            </Fragment>
        )    
    }
}
