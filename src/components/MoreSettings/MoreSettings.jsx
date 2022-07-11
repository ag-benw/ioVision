import React from 'react';
import MoreSettingsIcon from '../Icons/MoreSettingsIcon';
import UserIcon from '../UserIcon/UserIcon';

function MoreSettings() {
  const active = 'bg-warn';

  return (
    <div className="p-6 flex">
      <div>
        <UserIcon activity={active} />
      </div>
      <MoreSettingsIcon />
    </div>
  );
}

export default MoreSettings;
