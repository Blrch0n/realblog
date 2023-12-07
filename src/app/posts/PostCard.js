import React from "react";
import styles from "@/app/page.module.css";
import LittleBtn from "../components/LittleBtn";

function PostCard(props) {
  return (
    <div>
      <div className={styles.blog}>
        <img className="w-[360px] h-[240px] rounded-md " src={props.img} />
        <LittleBtn />
        <h1 className="font-bold text-xl">{props.title} </h1>
        <p className="absolute bottom-6">{props.at}</p>
      </div>
    </div>
  );
}

export default PostCard;
