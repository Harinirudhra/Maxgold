"use client";

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const persons = {
  users: [
    {
      name: "John Doe",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 5,
      emoji: "😁",
    },
    {
      name: "Emily Johnson",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 4,
      emoji: "🥰",
    },
    {
      name: "Michael Lee",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 3,
      emoji: "🤩",
    },
    {
      name: "Sophia Martinez",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 5,
      emoji: "😘",
    },
    {
      name: "David Brown",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 4,
      emoji: "😊",
    },
    {
      name: "David Brown",
      profile:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      shortFeedback:
        "Excellent service! Very pleased with the outcome!Good, but room for improvement.Amazing work, would recommend!",
      starRating: 4,
      emoji: "🥳",
    },
  ],
};

function Testimonials() {
  return (
    <>
    <div className="text-center mb-10">
        <h1>Testimonials</h1>
      </div>
      <div className="flex flex-col gap-4 m- sm:hidden">
        {persons.users.slice(0, 4).map((user, index) => (
          <Card key={index} data={user} />
        ))}
      </div>
      
      <div className="hidden md:flex flex-col gap-[12px] ">
        <Marquee loop={0} direction="right">
          <div className={`grid grid-cols-6 gap-4 ml-4 `}>
            {persons.users.map((user, index) => (
              <Card key={index} data={user} />
            ))}
          </div>
        </Marquee>
        <Marquee loop={0} direction="left">
          <div className={`grid grid-cols-6 gap-4 ml-4 `}>
            {persons.users.map((user, index) => (
              <Card key={index} data={user} />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

function Card({ data }) {
  const [count, SetCount] = useState(data.starRating);
  return (
    <div className=" p-1 rounded-lg shadow-sm aspect-[3/2]  h-[260px] bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
      <div class="flex flex-col items-center gap-4 bg-white rounded-lg p-4 border border-transparent h-full bg-clip-border">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px] rounded-[100%] bg-black">
              <img
                src={data.profile}
                className="rounded-[100%] object-cover w-full h-full"
              ></img>
            </div>
            <h2 className="text-xl font-bold">{data.name}</h2>
          </div>
          <div className="flex">
            {Array.from({ length: count }, (_, i) => (
              <div key={i}>
            <img className="h-[30px] w-[30px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZvW8bdRzGf1Q09r357MT3YikTZSgIwdAWCZA6MYBQ/oIKykCHDlUZujcUlQ2pVMAYJFQQUgckhKCxHb/cxU7sOunZvoiKdkCZUFGGVlS0gd/vQXcXv9upae4SG/mRnsny3ef5+vHd92xCJppoosAEW3sVdf0EGUfB0lTY2kPXlqaScRPq2jxsHag71ubJOAm/Ph+Crf+OuubAAzX1HoqzHBkXwU6cacHvuKp+QMZBAHkGNXWjCV5THXjAUm87r5FRF6r6221Tb8ADluL4LTLqQk1L9YW/pQDr8UUyyoKlvQRLZX3hvQDAuvIKGVXBUr/qqkwXfByozCyQkb1xWcpfPVNvh19zAkw/QiWeIKMmWMrH/SvTBr8243wCji+RURKKsxys+B994RvgLXjg5vQWLE04uOu8reioxY/B0uZgKWdhKdcGVqYd3IP3XJ6+hlLsLMrROazKx1BSdF/uE6grR7Chn4SdOIW6fgE1/Qpq6nVUtQKq6iaq6vbuV5kB8A1wDx4ox4CSZ7YadU1Xotu0KG/SFblAi5HrtBi5goJ0AcuRUyiIJ2HKz+0Ov5H4yF3AWktY9zrQfWMatjKd4H3g2UrDMlhxx4WI5+WGJcAQLw4OYOunUddZE757Heg39eEr0wHeCy+3wHvgJTBTAjUkBlN67wkV0t9FXdvumXoAlWH94Bvg3fCm9A8M8cxw34Oa+iaq2oNRqAxzJy8+RF56Zyj4Zoh1/QSqyr2DrAzz4LdgiG/8J/hWnZQjsOJ3DqIyzIHPi78hKx59KvhmCOf6vB6/5U9l5KEqwzx4G1ludk/wzRC2ImItntyPyjAXXsghFZN9ge94zq3MfBdkZZghOvDfo0i44NaIysynQVSGOfCG+DlADgUC3xGkHLvqZ2WYO3nxauDgzQCl2Cd+VYbtmOaFy/sXoBxb8qMyzHHeM83x6f2BBzmEUvT+XivTghfAcgJoln+Ai/vR/9XpF/dcmXwnPHOc5YGc+ELwAVbk9/2oTBM858G7ATL86cAD0FX5Sz8q44ELTXiW4UGXwl8EH6AYrfhVGbYD7pkDTYdvBgqPLAnTovx44NQ7dhlhC4ZwDlnhHM0JW/0qwxrwS5xrusQ9ds4RXICC9PoT19+8RGle/BoFofmnBkw5RrP8ZzQj/N0JzzXhWdpxGEiFXwsuQFH+cNf11xAzMISXB74/Kx6lGe6nXviw51QYSE6dDywAXZa+7QtuSpsw+d2fVduDpLk5mubudsM7pouhb4ILUJDudj6nin/SvDT/NL1FhRxGeuo8TYfve/AhsGQINDl1JxB4t8dmhDnw1JAoNcUF5Pk9/8aJn/kETU0t0GSIugFuhBh+JDF/qNtPtKgJ1BBvU1PKYTly3PfjJ589Tm9M5eji4V/wA+H9Pv5EE/1f9S9M4cKBWKiMUAAAAABJRU5ErkJggg=="></img>

              </div>
            ))}
          </div>
        </div>
        <div className="font-light text-[18px] self-start">
          {data.shortFeedback}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
