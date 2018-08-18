import React, {Component} from 'react';
import {changeVision} from '../actions/VisionAction';
import store from '../store/configureStore';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as VisionAction from "../actions/VisionAction";

class Sidebar extends Component {
    onVisionChangeClick = () => {
        console.log(this.props.myProp);
        store.dispatch(changeVision(this.props.myProp))
    }
    render() {
        return <div>
            {this.props.myProp && <div>
            Hello
        </div>}
            <button onClick={this.onVisionChangeClick}>Click</button>
        </div>
    }
}

export default Sidebar