import React, { useState } from 'react';
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import FoodList from "./FoodList";
import FoodMemo from "./FoodMemo";
import styled from 'styled-components';

const Tabs = styled.div`
  margin-top: 50px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 200px;
  margin: 0 auto;
  //float: left;
`
const TabMenu = styled.div`
  width: 200px;
  height: 50px;
  border-bottom: 3px solid #333333;
  background-color: #f8f8f8;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: #333333;
  display: block;
  float: left;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;

.submenu {
    width:100% auto;
    padding: 15px 15px;
    cursor: pointer;
}

.submenufocused{
    width:100% auto;
    padding: 15px 15px;
    cursor: pointer;
    background-color: #333333;
    color: #fff;
}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Contentdiv = styled.div`
  padding: 40px 40px 0;
  clear: both;
  overflow: hidden;

.contents{
  width: calc(100% - 120px);
  margin: 60px;
}
`;

const menuList = [
    {
        title: "음식 목록",
        content : <FoodList />,
    },
    {
        title: "음식 입력",
        content : <FoodMemo />,
    },
];

const Layout = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const selectMenuHandler = (index : number) => {
        setCurrentTab(index);
      };

    return(
        <Container>
            <Header />
            <Tabs className="tabs">
                <TabMenu className="tab_item">
                    {menuList.map((ele, index)=>{
                        return (
                        <label key={index} className={currentTab === index ? "submenufocused" : "submenu"}
                        onClick={()=> selectMenuHandler(index)}>{ele.title}</label>)}
                        )
                    }
                </TabMenu>
            </Tabs>
            <Contentdiv>
                <div className="contents">
                  {menuList[currentTab].content}
              </div>
            </Contentdiv>
            <Footer />
        </Container>
    )
}

export default Layout