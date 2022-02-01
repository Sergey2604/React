import {makeStyles} from "@material-ui/styles";
import {CHATS} from "../../components/chats";
import {ChatList} from "../../components/ChatList";
import {Route, Switch} from "react-router-dom";
import {Messages} from "../../components/Messages";

const useStyle = makeStyles({
    wrapper: {
        display: 'grid',
        gridTemplateColumns: '200px 1fr'
    }
});

export const Chats = ({children}) => {
    const classes = useStyle();

    return (
        <div className={classes.wrapper}>
            <ChatList list={CHATS} />
            <div>
                {
                    children
                }
            </div>
        </div>
    )
}