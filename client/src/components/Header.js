import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper">
          <a className="left brand-logo">애프터바이</a>
          <ul className="right">
            <li>
              <a>구글로 로그인하기</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;