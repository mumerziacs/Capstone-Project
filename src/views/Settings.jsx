import React, { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(
    JSON.parse(localStorage.getItem("notify") || "false")
  );

  function toggle() {
    const val = !notifications;
    setNotifications(val);
    localStorage.setItem("notify", JSON.stringify(val));

    if (val && "Notification" in window) {
      if (Notification.permission !== "granted") {
        Notification.requestPermission();
      } else {
        new Notification("Test notification enabled!");
      }
    }
  }

  return (
    <div>
      <h3>Settings</h3>

      <label>
        <input type="checkbox" checked={notifications} onChange={toggle} />
        Enable Notifications
      </label>

      <h4>Menu Items</h4>
      <ul>
        <li>Profile</li>
        <li>Theme</li>
        <li>About</li>
      </ul>
    </div>
  );
}
