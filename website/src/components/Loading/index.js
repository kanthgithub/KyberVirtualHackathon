import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => (
  <div className="container loading">
    <div className="row">
      <div className="col-md-12 text-center">
        <Spinner color="primary" />
      </div>
    </div>
  </div>
);

export default Loading;