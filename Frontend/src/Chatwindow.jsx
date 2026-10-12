import "./Chatwindow.css";
import Chat from "./Chat";


function Chatwindow(){

    return(
        <div className="chatWindow">
            <div className="navbar">
                <span>OwnGpt <i className="fa-solid fa-chevron-down"></i></span>
                <div className="userIconDiv">
                    <span><i className="fa-solid fa-user"></i></span>
                </div>
            </div>

            <Chat></Chat>

            <div className="chatInput">
                <div className="userInput">
                    <input placeholder="Ask anything"></input>
                
                <div id="submit"> <i className="fa-solid fa-paper-plane"></i></div>

                </div>
                <p className="info">
                    OwnGpt can make mistakes. Check important info. see Cookie Preferences.
                </p>
            </div>
        </div>
        
    )
}

export default Chatwindow;