import React from 'react';
import logo from './logo.svg';
import './App.css';
import DropZoneFileUploader from './FileUploaders/DropZoneFileUploader';
import { UserInfo } from './views/UserInfo';
import { EmailInput } from './ForwardRefSample/ForwardRefSample';
import {ErrorBoundary} from './ErrorBoundary/ErrorBoundary'
import { BuggyCounter } from './ErrorBoundary/SampleBugComponent';

function App() {
  const emailRef = React.useRef();

  const onClickButton = () => {
    emailRef.current.focus();
  }

  return (
    <div className="container p-5">
      <h1>React File Uploader</h1>
      <div className="row">
        <div className="col-md-6">
          <UserInfo />
        </div>
        <div className="col-md-6">
          <div style={{ width: "500px" }}>
             <DropZoneFileUploader />
          </div>
        </div>
        <div className="col-md-6">
          <h3>Error Boundary Sample</h3>
            <ErrorBoundary>
              <BuggyCounter />
            </ErrorBoundary>
        </div>
        <div className="col-md-6">
        <h3>Forward Ref</h3>
        <EmailInput ref={emailRef} />
        <button onClick={onClickButton}>Focus in Email Input with ForwardRef</button>
        </div>
      </div>
    </div>
  );
}

export default App;
