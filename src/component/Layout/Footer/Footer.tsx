import styled from "styled-components"

const Footerdiv = styled.div`
  color: #555555; //텍스트 색상
  text-align: left; //텍스트 정렬 방향
  height: 50px; //높이
  position: absolute;
  bottom: 0px;
`;

const Footer = () =>{
    return(
        <Footerdiv>
            <footer id="footer">
                <br />푸터입니다잉
            </footer>
        </Footerdiv>
    )
}

export default Footer