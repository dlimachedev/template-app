import React from 'react';
//import { useSelector } from 'react-redux';

export const Loading = () => {

  //const { loading } = useSelector( state => state.productos );

  //if( !loading ) { return null }

  return (
    <div className="loading">
      <div className="centered">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>
    </div>
  )
}
