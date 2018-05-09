import React from 'react';

const StatusBar = ({
  user: {
    name,
    id
  },
  logoutLink,
  accountLink
}) => (
  <div className="status-bar">
    <span>{`Hi ${name}`}</span>
    <span><a href={`${accountLink}/${id}`}>Your Account</a></span>
    <span><a href={logoutLink}>Sign Out</a></span>
  </div>
)

StatusBar.defaultProps = {
  logoutLink: '/logout',
  accountLink: '/account',
  user: {
    name: 'John Doe',
    id: 12345
  }
};

export default StatusBar;
