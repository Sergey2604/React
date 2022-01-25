import {ChatList} from "./components/ChatList";
import {MessageInput} from "./components/MessageInput";
import {MessageList} from "./components/MessageList";
import { useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '200px 1fr'
    }
});

export const Homework3 = () => {
    const classes = useStyle();
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

    return (
        <div className={classes.wrapper}>
            <ChatList
                list={[
                    {
                        name: 'Chat1',
                        id: '1'
                    },
                    {
                        name: 'Chat2',
                        id: '2'
                    },
                    {
                        name: 'Chat3',
                        id: '3'
                    },
                    {
                        name: 'Chat4',
                        id: '4'
                    },
                ]}
            />
            <div>
                <MessageList messageList={messageList} />
                <MessageInput onSend={onSendMessage} />
            </div>
        </div>
    );
};