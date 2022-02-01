import {useEffect, useState} from "react";
import {useParams, Redirect} from "react-router-dom";
import {MessageList} from "../MessageList";
import {CHATS} from "../chats";
import {MessageInput} from "../MessageInput";

export const Messages = () => {
    const {chatId} = useParams();
    const [messageList, setMessageList] = useState([]);
    const SendMessage = (author, text, id) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text,
            id
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };
    const onSendMessage = (value) => {
        SendMessage('user', value);
    };
    useEffect(() => {
        if (messageList.length === 0) return;
        const tail = messageList[messageList.length - 1];
        if (tail.author === 'bot') return;
        SendMessage('bot', 'Hello!');
    }, [messageList]);
    if (!CHATS.find(({ id }) => id === chatId)) {
        return <Redirect to='/Chats'/>
    }
    return  (
        <>
            <MessageList messageList={messageList}/>
            <MessageInput onSend={onSendMessage}/>
        </>
    );
};