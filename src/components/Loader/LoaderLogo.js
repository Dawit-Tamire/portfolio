import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
        <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="none">
          <rect width="300" height="300" fill="#0A1F48"/>
          <polygon points="150,50 200,80 200,140 150,170 100,140 100,80" stroke="white" strokeWidth="3" fill="none"/>
          <text x="140" y="115" fontFamily="Georgia, serif" fontSize="40" fontWeight="bold" fill="white">DT</text>
          <text x="50" y="240" fontFamily="Brush Script MT, cursive" fontSize="30" fill="white">Dawit Tamire</text>
        </svg>
    );
  }
}

export default LogoLoader;
