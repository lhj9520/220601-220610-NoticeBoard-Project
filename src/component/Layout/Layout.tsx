import React, { useState } from 'react';
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import FoodList from "./FoodList";
import FoodMemo from "./FoodMemo";
import styled from 'styled-components';

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }

  .submenufocused{
    background-color: #808080;
    width:100% auto;
    padding: 15px 10px;
    cursor: pointer;
  }
`;
const menuList = [
    {
        title: "음식 목록",
        content : <FoodList />,
    },
    {
        title: "음식 추가할까?",
        content : <FoodMemo />,
    },
];

const Layout = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const selectMenuHandler = (index : number) => {
        setCurrentTab(index);
      };

    return(
        <div className="wrap">
            <Header />
          <div className="menuBar">
          <TabMenu>
          {menuList.map((ele, index)=>{
            return (
              <li
              key={index}
              className={currentTab === index ? "submenufocused" : "submenu"}
              onClick={()=> selectMenuHandler(index)}
            >
              {ele.title}
            </li>
              )
          })}

        </TabMenu>
          </div>
          <div className="contentArea">
            {menuList[currentTab].content}
          </div>
          <Footer />
        </div>
      )
}

export default Layout