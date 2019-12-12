import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getQuote } from '../actions';

const Quote = props => {
  // console.log(props);
  return(
    <div>
      <h1>Kanye West Quotes</h1>
      {!props.quote && !props.isFetching && <p>Go ahead! Fetch a Quote</p>}
      {props.isFetching && 
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
      />}
      {props.quote && <p> {props.quote} </p>}
      <button onClick={props.getQuote} >Get Quote!</button>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  }
}


export default connect(
  mapStateToProps,
  { getQuote }
)(Quote);