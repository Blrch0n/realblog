"use client";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import HomeCard from "./HomeCard";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(3);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?top=100&per_page=${pages}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="w-screen ">
      <div className=" w-[1216px] m-auto h-[630px] relative">
        <div className="w-[300%] m-auto flex overflow-scroll">
          {posts.map((home) => (
            <HomeCard img={home.cover_image} />
          ))}
        </div>
        <div className="absolute right-0 bottom-0 flex gap-3">
          <button className="bg-gray-300 px-2 rounded-md">Prev</button>
          <button className="bg-gray-300 px-2 rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
}
