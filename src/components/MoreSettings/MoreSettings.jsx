import React from 'react';
import MoreSettingsIcon from '../Icons/MoreSettingsIcon.jsx';
import UserIcon from '../User/UserIcon.jsx';

function MoreSettings() {
  const active = 'bg-warn';

  return (
    <div className="p-6 flex bg-shade-two rounded-md items-center justify-between">
      <UserIcon activity={active} />
      <MoreSettingsIcon />
    </div>
  );
}

export default MoreSettings;
