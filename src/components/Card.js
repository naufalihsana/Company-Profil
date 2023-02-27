import React from "react";
import "../css/card.css";
import {BsChevronDown } from "react-icons/bs";

function Card() {
  return (
    <div className="title">
      <div className="card" id="GALLERY">
        <div className="card-atas">
          <div className="card1"></div>
          <div className="card2"></div>
        </div>
        <div className="text-satu">
          <div className="text1">
            <h1>KONTEN 01</h1>
            <p className="kata1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              porro itaque molestias accusamus impedit deleniti est iusto rem
              nam unde at, tenetur saepe quisquam, eligendi quis provident odit
              dolorem quidem.
            </p>
            <button>Read More</button>
          </div>
          <div className="text2">
            <h1>KONTEN 02</h1>
            <p className="kata2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus provident minima incidunt unde soluta doloribus
              nesciunt praesentium, fugiat, repellendus impedit quisquam rem
              distinctio dolores laborum sunt labore tempora, aut iure!
            </p>
            <button> Read More </button>
          </div>
         
        </div>
        <div className="tombolicon">
            <span><BsChevronDown/></span>
        </div>
      </div>
      
    </div>
  );
}

export default Card;
