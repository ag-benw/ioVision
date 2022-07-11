import React from 'react';

function UserSettings() {
  return (
    <section className="hidden bg-shade-three w-5 h-5">
      <ul>
        <li>
          <button type="button" className="activity__active flex">
            <p> Active </p>
          </button>
        </li>
        <li>
          <button type="button" className="activity__away flex">
            <p> Away </p>
          </button>
        </li>
        <li>
          <button type="button" className="activity__dnd flex">
            <p> Do Not Disturb </p>
          </button>
        </li>
      </ul>
    </section>
  );
}

export default UserSettings;
