
import "./Chat.css";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Chat(){

    let {newChat,previousChat} = useContext(MyContext);

    return(
        <>
        {newChat && <h1>Start a New Chat</h1>}
        <div className="chats">
            <div className="userDiv">
                <p className="userMessage">User Message</p>

            </div>
            <div className="gptDiv">
                <p className="gptMessage"> Gpt generated Message</p>
            </div>

        </div>
        </> 
    )
}

export default Chat;