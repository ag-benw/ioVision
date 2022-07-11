import React from 'react';
import UserIconPlaceholder from '../Icons/UserIconPlaceholder.jsx';

function UserIcon(props) {
  const { activity } = props;
  return (
    <div className="flex relative">
      <div className={`activity w-2 h-2 rounded-full ${activity} absolute top-0 right-0`} />
      <UserIconPlaceholder />
    </div>
  );
}

export default UserIcon;
