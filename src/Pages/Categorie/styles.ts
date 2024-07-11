import styled from "styled-components";

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #f0f2f5;
`

export const Sidebar = styled.div`
    height: 100vh;
    width: 20vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`

export const Img = styled.img`
    width: 60px;
    margin: 40px;
`

export const Tabs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;
`

export const Main = styled.div`
    height: 100vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    padding: 20px;
`

export const Header = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: #333;
    margin: 24px 0;
`

export const TitleAndFilter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
`

export const Title = styled.h3`
    font-size: 24px;
    color: #333;
`

export const FilterField = styled.div`
    display: flex;
    align-items: center;
`

export const FilterIcon = styled.img`
    height: 24px;
    margin: 0 12px;
`
