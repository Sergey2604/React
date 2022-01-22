import {useState, useEffect} from "react";
import './homework2.css'

export const Homework2 = () => {
    const [MessageList, SetMessageList] = useState([]);
    const [Value, SetValue] = useState('');

    const SendMessage = (author, text) => {
        const NewMessageList = [...MessageList];
        const NewMessage = {
            author,
            text
        };
        NewMessageList.push(NewMessage);
        // в список
        SetMessageList(NewMessageList)
    };
    const ResetForm = () => {
        SetValue('')
    };
    const OnSubmitMessage = (event) => {
        event.preventDefault();
        SendMessage('user', Value);
        ResetForm();
    };
    const OnChangeMessageInput = (event) => {
        SetValue(event.target.value);
    };
    useEffect(() => {
        if (MessageList.length === 0) {
            return;
        }
        const tail = MessageList[MessageList.length - 1];
        if (tail.author === 'bot') {
            return;
        }
        SendMessage('bot', 'Hello!');
    }, [MessageList]);

    return (
        <div>
            <form onSubmit={OnSubmitMessage}>
                <input
                    onChange={OnChangeMessageInput}
                    placeholder='type message'
                    value={Value}
                    type='text'
                />
                <button>Send</button>
            </form>
            <ul>
                {
                    MessageList.map((Item, Index) => (
                      <li key={Index}>
                          {Item.author} - {Item.text}
                      </li>
                    ))
                }
            </ul>
        </div>
    );
};