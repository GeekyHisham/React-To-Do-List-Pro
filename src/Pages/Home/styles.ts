import styled from "styled-components";

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: linear-gradient(135deg, #ece9e6 0%, #ffffff 100%);
`

export const Sidebar = styled.div`
    height: 100vh;
    width: 20vw;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    border-right: 1px solid #e0e0e0;
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
    overflow-y: auto;
    padding: 20px;
    background: #f7f8fc;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
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
