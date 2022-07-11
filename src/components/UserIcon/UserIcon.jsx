import React from 'react';

function UserIcon(props) {
  const activity = props.activity;
  return (
    <div className="p-6 flex">
      <div className={`activity w-2 h-2 rounded-full ${activity}`} />
      <img src="../public/assets/images/user-icon.png" alt="user icon" />
    </div>
  );
}

export default UserIcon;
