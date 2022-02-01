import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {Profile} from "./routes/Profile";
import {Home} from "./routes/Home";
import {Chats} from "./routes/Chats";
import {Messages} from "./components/Messages";

export const Homework4 = () => {
    return (
        <div>
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar>
                        <Button to='/' component={Link} color='inherit'>
                            Home
                        </Button>
                        <Button to='/profile' component={Link} color='inherit'>
                            Profile
                        </Button>
                        <Button to='/chats' component={Link} color='inherit'>
                            Chats
                        </Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path='/chats'>
                        <Chats>
                            <Switch>
                                <Route component={Messages} path='/chats/:chatId' />
                            </Switch>
                        </Chats>
                    </Route>
                    <Route component={Profile} path='/Profile'/>
                    <Route component={Home} path='/'/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}