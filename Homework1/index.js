import { Message } from './Components/message/message.js';

const text = 'My first homework on React :-)';

export const Homework = () => {
    return (
        <div>
            <h1>Homework 1</h1>
            <Message text = {text} />
        </div>
    );
};