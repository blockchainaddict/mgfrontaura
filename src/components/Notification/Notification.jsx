import { useEffect, useState } from "react";
import "./Notification.scss";

function Notification({ title, body }) {
  const [time, setTime] = useState(3);

  useEffect(() => {
    const int = setInterval(() => {
        setTime((p) => p - 1);
    }, 1000);

    setTimeout(()=>{
        clearInterval(int)
    }, 3010)

    return () => clearInterval(int);
  }, []);

  return (
    <div className="notification-wrapper">
      <h3>{title}</h3>
      <p>{body}</p>
      {time <= 0 ? null : <p className="time">{time}</p>}
    </div>
  );
}

export default Notification;
