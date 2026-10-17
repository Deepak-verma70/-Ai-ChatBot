import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import {v1 as uuidv1} from "uuid";


function Sidebar(){
    const {allThread,setAllThread,currThreadId,setNewChat,setPrompt,setReply,setCurrThreadId,setPreviousChat} = useContext(MyContext);

    const getAllThreads = async () => {
        try{
            const response = await fetch("http://localhost:8080/thread");
            const res = response.json();
            const filterData = res.map(thread => ({threadId : thread.threadId,title:thread.title}));
            
            setAllThread(filterData);
            
        }catch(err){
            console.log(err);

        }
    }


    useEffect(()=>{
        getAllThreads();
    },[currThreadId]);

    let createNewChat=() =>{
        setNewChat(true);
        setPrompt("");
        setReply(null);
        setCurrThreadId(uuidv1());
        setPreviousChat([]);

    }

    let changeThread= async(newThreadId)=>{
        setCurrThreadId(newThreadId);

        try{
            const response = await fetch(`http://localhost:8080/thread/${newThreadId}`);
            const res = response.json();
            setPreviousChat(res);
            setNewChat(false);
            setReply(null);
            
        }catch(err){
            console.log(err);

        }
    }


    return(
        <section className="sidebar">
            <button onClick={createNewChat}>
                <img src="/src/assets/blacklogo.png" alt="gpt logo" className="logo"></img>
                <span><i className="fa-regular fa-pen-to-square"></i></span>
            </button>

            <ul className="history">
                {
                    allThread?.map((thread,idx)=>(
                        
                            <li key={idx}
                            onClick={()=> changeThread(thread.threadId)}
                            >{thread.title}</li>
                    ))
                }
            </ul>

            <div className="sign">
                <p>by deepak &hearts;</p>
            </div>


        </section>
    )
}

export default Sidebar;