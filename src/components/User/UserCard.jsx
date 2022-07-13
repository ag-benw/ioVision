import React from 'react';
import MoreSettings from '../MoreSettings/MoreSettings.jsx';

function UserCard(props) {
  return (
    <div className="user__section p-4 rounded-md">
      <MoreSettings openSidebar={props.openSidebar} />
    </div>
  );
}

export default UserCard;
