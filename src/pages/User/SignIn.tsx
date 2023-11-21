import React, {useState} from "react";
//import KakaoMap from "../KakaoMap";
import styled from "styled-components";
import SignInContent from "./SignInContent";
import MenuBar from "../../../public/src/NavBar";

const Main = () => {
    // MenuBar와 MenuContent의 보이기/숨기기 상태를 관리하는 상태 변수
    const [isMenuVisible, setMenuVisible] = useState(true);

    // MenuBar를 클릭할 때 MenuContent의 상태를 토글하는 함수
    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
                    <SignInContent />
    );
};

const MainPage = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: white;
`;


const Sidebar = styled.div`
    display: flex;
    width: 510px; /* 원하는 사이드바 너비로 조정 */
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: #ffffff;
    
`;
const MenuContentWrapper = styled.div<{ isVisible: boolean }>`
    width: ${(props) => (props.isVisible ? "86.5%" : "0%")};
    overflow: hidden;
    transition: width 0.3s ease-in-out;
`;

const MapContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export default Main;
