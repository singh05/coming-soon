import React from 'react';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for Tabaak</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:singhprashant05@gmail.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;