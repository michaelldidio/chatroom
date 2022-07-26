import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Welcome to our online chatroom</h1>
      <p>Try it out and chat with your friends!</p>

    </div>
    {
      users
        ? (
          <div>
            <h1>Online Users:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon} />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;