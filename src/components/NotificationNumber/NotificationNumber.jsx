import React from 'react';

function NotificationNumber(props) {
  const { notifications } = props;
  return (
    <div className="bg-primary rounded-md w-8 h-6 flex justify-center items-center">
      <span className="text-shade-one text-sm">
        {notifications}
      </span>
    </div>
  );
}

export default NotificationNumber;
