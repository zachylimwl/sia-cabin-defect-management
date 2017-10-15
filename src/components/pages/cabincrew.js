import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCabinMap} from '../../actions/cabinMapAction';

class Cabincrew extends Component {
    componentWillMount() {
        this.props.dispatch(fetchCabinMap())
    }

    render() {
        return (
            <div className="container-fluid">
                {console.log(this.props)}
            </div>
        );
    }
}

export default connect(
    state=> {
        return {
            map: state.cabinMap.map
        }
    }
)(Cabincrew);
