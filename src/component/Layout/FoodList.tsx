import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`
const Listcontent = styled.li`
  background-color: #FAF9F9;
  margin: 0 auto;
  width: 200px;
  padding: 35px;
  text-align: center;
  float: left;
`

const FoodList = () => {
    return (
        <List>
            <Listcontent>김치찌개</Listcontent>
            <Listcontent>된장찌개</Listcontent>
            <Listcontent>불고기</Listcontent>
            <Listcontent>김치</Listcontent>
            <Listcontent>비빔밥</Listcontent>
            <Listcontent>잡채</Listcontent>
            <Listcontent>삼겹살</Listcontent>
            <Listcontent>갈비</Listcontent>
            <Listcontent>갈비찜</Listcontent>
            <Listcontent>청국장</Listcontent>
            <Listcontent>떡볶이</Listcontent>
            <Listcontent>보쌈</Listcontent>
        </List>
    )
}

export default FoodList