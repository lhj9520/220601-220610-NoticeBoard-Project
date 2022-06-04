import styled from "styled-components"

const Headerdiv = styled.div`
  color: #555555; //텍스트 색상
  font-size: large; //텍스트 크기
  font-weight: bold; //텍스트 굵기
  text-align: center; //텍스트 정렬 방향
  height: 150px; //높이
  line-height: 150px; //줄간격
`;

const Header = () =>{
    return(
        <Headerdiv>
            <header id="header">
                <h1>Geenee's SHOP</h1>
            </header>
        </Headerdiv>
    )
}

export default Header