import React, {Component} from 'react'

class Sidebar extends Component {
    onVisionChangeClick(e) {

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

export default Sidebar;