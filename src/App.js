import React from 'react';

function Food({ name, pic }) {
  return <div>
      <h2>I like {name}</h2>
      <img src = {pic} />
    </div>
}

const animalLike = [
  {
    name: "강아지",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ui4u.go.kr%2Fdepart%2Fcontents.do%3FmId%3D0413000000&psig=AOvVaw2boearkt9jrnlUMxSoEqMQ&ust=1612256177930000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjivLioyO4CFQAAAAAdAAAAABAD"
  },
  {
    name: "고양이",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmypetlife.co.kr%2F47410%2F&psig=AOvVaw2bonWmewHomTTSUVIs3GZX&ust=1612256231519000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjsudKoyO4CFQAAAAAdAAAAABAD" 
  },
  {
    name: "쿼카",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Featsleepandread.xyz%2F141&psig=AOvVaw0g6CkonE813UVhCce92zFo&ust=1612256265613000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj6_OKoyO4CFQAAAAAdAAAAABAD"
  }

]

function App() {
  return (
    <div> 
      {animalLike.map(pop => (
        <Food name = {pop.name} pic = {pop.image} />
      ))}
    </div>
  );
}

export default App;
