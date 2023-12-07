import React from "react";

function HomeCard(props) {
  return (
    <div>
      <img className="m-auto w-[100%] h-[600px] " src={props.img} />
    </div>
  );
}

export default HomeCard;
