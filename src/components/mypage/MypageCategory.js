import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MypageCategory = (props) => {
  const { setCategory, category } = props;
  const {clickedColor, setClickedColor} = useState();

  // useEffect(() => {
  //   if(category==='edit_profile'){

  //   }
  //   else if(category==='favorite_list'){

  //   }
  //   else if(category==='favorite_list_map'){

  //   }
  // }, [category]);

  return (
    <div
      style={{
        display: "flex",
        color: "#E22F2F",
        fontSize: "25px",
        fontWeight: "bold",
        justifyContent: "center",
      }}
    >
      <Element onClick={() => setCategory("edit_profile")} clicked={category}>
        내 정보
      </Element>
      <Element onClick={() => setCategory("favorite_list")} clicked={category}>내 찜 목록</Element>
      <Element onClick={() => setCategory("favorite_list_map")} clicked={category}>
        나만의 맛집 지도
      </Element>
    </div>
  );
};

const Element = styled.div`
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
  &:nth-child(1) {
    background-color: ${(props)=>props.clicked==='edit_profile'? 'yellow' : 'white'};
  }
  &:nth-child(2) {
    background-color: ${(props)=>props.clicked==='favorite_list'? 'yellow' : 'white'};
  }
  &:nth-child(3) {
    background-color: ${(props)=>props.clicked==='favorite_list_map'? 'yellow' : 'white'}
  }
  
`;

export default MypageCategory;
