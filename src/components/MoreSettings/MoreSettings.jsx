import React from 'react';
import MoreSettingsIcon from '../Icons/MoreSettingsIcon.jsx';
import UserIcon from '../User/UserIcon.jsx';

function MoreSettings(props) {
  const active = 'bg-warn';

  return (
    <div className={props.openSidebar? 'p-6 flex bg-shade-two rounded-md items-center justify-between' : 'p-2 flex items-center justify-center'}>
      <UserIcon activity={active} />
      {props.openSidebar? <MoreSettingsIcon /> : null }
    </div>
  );
}

export default MoreSettings;
