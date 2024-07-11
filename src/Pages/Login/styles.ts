import styled from 'styled-components';

export const Img = styled.img`
    width: 30vw;
`

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const LeftSide = styled.div`
    width: 50vw;
    height: 100vh;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RightSide = styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 12.5vw;
    box-sizing: border-box;
`

export const Title = styled.h1`
    color: #333;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 40px;
    margin: 12px 0;
`

export const Subtitle = styled.h2`
    color: #666;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 16px;
    font-weight: 300;
    margin: 8px 0 16px 0;

    a {
        color: #7f56da;
        font-weight: bold;

        &:hover {
            color: #613db7;
            cursor: pointer;
        }
    }
`

export const FieldName = styled.h2`
    color: #777;
    font-family: 'Roboto', Arial, sans-serif;
    font-size: 16px;
    margin: 8px 0;
`

export const InputField = styled.input`
    width: 25vw;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding-left: 8px;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;

    &:focus {
        border: 1px solid #999;
        outline: none;
    }

    &::placeholder {
        color: #bbb;
    }
`

export const SignIn = styled.button`
    width: 25vw;
    height: 40px;
    border-radius: 8px;
    background: #7f56da;
    color: white;
    font-size: 16px;
    border: none;
    font-weight: 500;
    margin: 16px 0;

    &:hover {
        background: #613db7;
        cursor: pointer;
    }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    border: 1px solid #333;
    margin-right: 8px;
    height: 16px;
    width: 16px;
`

export const KeepSigned = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 16px;
`
