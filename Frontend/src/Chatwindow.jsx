import "./Chatwindow.css";
import Chat from "./Chat";
import { MyContext } from "./MyContext";
import { useContext, useState ,useEffect } from "react";
import {ScaleLoader} from "react-spinners";



function Chatwindow(){
    const {prompt,setPrompt,reply,setReply,currThreadId,setCurrThreadId,previousChat,setPreviousChat,newChat,setNewChat} = useContext(MyContext);
    let [loading,setLoading] = useState(false);

    const getReply = async()=>{
        setLoading(true);
        const options = {
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify({
                message:prompt,
                threadId:currThreadId
            })
        }

        try{
            const response = await fetch("http://localhost:8080/chat",options);
           let res= await response.json();
           console.log(res);

        }catch(err){
            console.log(err);

        }
        setLoading(false);

    }

    useEffect(()=>{
        if(prompt && reply){
            setPreviousChat(prevChats => {
                [...prevChats, {
                    role:"user",
                    content:prompt
                },{
                    role:"assistant",
                    content:reply
                }]
            })
        }
    }, [reply]);

    
    return(
        <div className="chatWindow">
            <div className="navbar">
                <span>OwnGpt <i className="fa-solid fa-chevron-down"></i></span>
                <div className="userIcon">
                    <span><i className="fa-solid fa-user"></i></span>
                </div>
            </div>

            <Chat></Chat>

            <ScaleLoader color="#fff" loading={loading}></ScaleLoader>

            <div className="chatInput">
                <div className="userInput">
                    <input placeholder="Ask anything" value={prompt} onChange={(e)=> setPrompt(e.target.value)} onKeyDown={(e)=> e.key === "Enter" ? getReply():""}></input>
                
                <div id="submit" onClick={getReply}> <i className="fa-solid fa-paper-plane"></i></div>

                </div>
                <p className="info">
                    OwnGpt can make mistakes. Check important info. see Cookie Preferences.
                </p>
            </div>
        </div>
        
    )
}

export default Chatwindow;