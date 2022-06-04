import React from "react";
import styled from "styled-components";

const Adddiv = styled.div`
.input{
    width: 50%;
    height: 30px;
}

.button{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-right:-4px;
    border: 1px solid RoyalBlue;
    background-color: rgba(0,0,0,0);
    color: RoyalBlue;
    padding: 5px;
}
.button:hover{
    color:white;
    background-color: RoyalBlue;
}
`
const Deldiv = styled.div`
.input{
    width: 50%;
    height: 30px;
}

.button{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-right:-4px;
    border: 1px solid OrangeRed;
    background-color: rgba(0,0,0,0);
    color: OrangeRed;
    padding: 5px;
}
.button:hover{
    color:white;
    background-color: OrangeRed;
}
`

const FoodMemo = () => {
    return (
        <div>
            <Adddiv>
                뭐 먹을래?<br/><br/>
                <input className="input" type="text"/><br/><br/>
                <button className="button" id="add">추가</button>
            </Adddiv>
            
            <Deldiv>
                <br/>불호 음식은 지우자<br/><br/>
                <input className="input" type="text"/><br/><br/>
                <button className="button" id="del">삭제</button>
            </Deldiv>
        </div>
    )
}

export default FoodMemo