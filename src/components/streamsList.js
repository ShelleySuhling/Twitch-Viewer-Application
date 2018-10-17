import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as streamsActions from '../actions/streamsActions';
import PropTypes from 'prop-types';
import React from 'react';


class streamsList extends React.Component {  
    renderData() {
      return <div>{this.props.streams}</div>;
    }
    
    
    render() {
      return (
        <div className="">
            {this.props.streams.length > 0 ?
              this.renderData()
              :
              <div className="">
                No Data
              </div>
            }
        </div>
      );
    }
  }
  
  streamsList.propTypes = {
    stuffActions: PropTypes.object,
    streams: PropTypes.array
  };
  
  function mapStateToProps(state) {
    return {
      streams: state.streams
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      streamsActions: bindActionCreators(streamsActions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(streamsList);