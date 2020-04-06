import React from "react";

function Card({ pic, title, desc }) {
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 20) {
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div>Name: {ninja.name}</div>
  //         <div>Age: {ninja.age}</div>
  //         <div>Belt: {ninja.belt}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  const card = (
    <div className="card card h-100">
      {/* <img src={pic} className="card-img-top img-fluid" /> */}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );

  return <div className="col-md-4">{card}</div>;
}

export default Card;
