import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("")

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input);
        setInput("");
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                    onChange={(e)=>setInput(e.target.value)}
                    type="text" 
                    value={input}
                    placeholder="Message here..." />
                    <SendButton 
                    type="submit"
                    onClick={send}
                    >
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput;

const Container = styled.div`
    padding: 0px 20px 24px 20px;
`;

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding: 0 10px;

       input {
           flex: 1;
           border: none;
           font-size: 13px;
       }
    
       input:focus {
            outline: none;
       }
    }
`;

const SendButton = styled.button`
    background-color: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;
    .MuiSvgIcon-root {
        width: 18px;

    }

    :hover{
        background-color: #148567;
    }

`;

const Send = styled(SendIcon)`
    color: #D9D9D9;
`

