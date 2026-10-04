
import "dotenv/config";

const OpenAIApiResponse = async (message) =>{
    let option = {
   method:"POST",
   headers:{
    "content-type":"application/json",
    "x-goog-api-key":process.env.GEMINI_API_KEY 
    },
    body:JSON.stringify({
      model:"gemini-3.8-flash",

      input:message
    })
  };5

  try{
    let response = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions",option);
    const data = await response.json();
  
    return data.steps[1].content;
  }catch(err){
    console.log(err.message);
  }

}

export default OpenAIApiResponse;