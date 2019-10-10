import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchQuotes } from '../actions/index'
import Kanye from './kanye';

const KanyeQuotes = props => {
  useEffect(() =>{
    props.fetchQuotes();
  },[]);
  if(props.isFetching) {
    return <h2>Loading Kanye Quotes...</h2>
  }
  return(
    <div>
      {props.error && <p>{props.error}</p>}
      {/* {props.kanyeQuotes.map(quote => (
        <Kanye key={quote.id} quote={quote} />
      ))} */}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    kanyeQuotes: state.kanyeQuotes,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(KanyeQuotes)