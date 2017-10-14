import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
        	LOGO
        </div>
        <nav>
        	<ul>
        		<li className="first">
        			<a href="#">Cabin Crew</a>
        		</li>
        		<li>
        			<a href="#">Mechanics</a>
        		</li>
        		<li className="last">
        			<a href="#">Contacts</a>
        		</li>
        	</ul>
        </nav>
      </header>
    );
  }
}

export default Header;
