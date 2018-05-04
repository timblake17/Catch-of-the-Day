import React from 'react';
///implicit return of stateless functional component
const Header = (props) =>(
    <header className="top">
      <h1>Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        <span className="day">Day</span>

      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  )

export default Header;
