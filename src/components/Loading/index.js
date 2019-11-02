import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => (
  <div className="container loading">
    <div className="row">
      <div className="col-md-12 text-center">
        <Spinner animation="grow" variant="primary" />
      </div>
    </div>
  </div>
);

export default Loading;
