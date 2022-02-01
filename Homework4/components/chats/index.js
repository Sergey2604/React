import {nanoid} from "nanoid";

const createChats = (i) => ({
    id: nanoid(),
    name: `Chat № ${i+1}`
});

export const CHATS = Array.from({length: 15}).map((_, i) => createChats(i))