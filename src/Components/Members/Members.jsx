import React, { useEffect, useState } from "react";
import "./Members.css";
import Map from "../Map/Map";
const Members = () => {
  const membersList = ["Sinchan", "Nobita", "Kenichi"];
  const [activeMember, setActiveMember] = useState(null);

  const samplePos = {
    Sinchan: [28.6139, 77.209],
    Nobita: [25.3176, 82.9739],
    Kenichi: [26.8467, 80.9462],
  };

  
  //for self location>>>>

  // const [myLocation, setMyLocation] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       const { latitude, longitude } = pos.coords;
  //       console.log(pos)
  //       setMyLocation([latitude, longitude]);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  //   );
  // }, []);
  //upper part is just for testing<<<<






  return (
    <div className="members-window">
      <div className="members-list">
        {membersList.map((data, index) => {
          return (
            <div
              className={`member ${
                activeMember === data ? "active-member" : ""
              }`}
              key={index}
              onClick={() => setActiveMember(data)}
            >
              {data}
            </div>
          );
        })}
      </div>
      <div className="member-map-info">
        <Map position={samplePos[activeMember]} />
      </div>
    </div>
  );
};

export default Members;
