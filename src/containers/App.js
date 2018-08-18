import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from "./Sidebar";
import {bindActionCreators} from "redux";
import * as VisionAction from '../actions/VisionAction'

class App extends Component {

    render() {
        console.log(this.props.actions);
        const { myProp } = this.props.page;
        const { changeVision } = this.props.actions;
        return <div>
            <Sidebar changeVision={changeVision} myProp={myProp} />
        </div>
    }
}

function mapStateToProps (state,props) {
    return {
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(VisionAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)