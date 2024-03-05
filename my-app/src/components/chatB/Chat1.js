// import React from 'react';
// import Config from './Config.js';
// import  Chatbot  from 'react-chatbot-kit';
// import MessageParser from './MessageParser';
// import ActionProvider from './ActionProvider';
// import 'react-chatbot-kit/build/main.css';


// const MyChatbot = () => {
//     return (
//     <div className='chatbotdiv' align="center">
//     <Chatbot
//         config={Config}
//         messageParser={MessageParser}
//         actionProvider={ActionProvider}
//         />
//     </div>
//     );
// };

// export default MyChatbot;



import React from 'react';
import 'react-chatbot-kit/build/main.css';
import Apps from './Apps.jsx';
// import TextToSpeech from "./TextToSpeech.jsx"
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import useClipboard from "react-use-clipboard";
// import {useState} from "react";
// import SpeechToText from "./SpeechToText.jsx";




const MyChatbot = () => {

    // const [textToCopy, setTextToCopy] = useState();
    // const [isCopied, setCopied] = useClipboard(textToCopy, {
    //     successDuration:5000
    // });
    // const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    // const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    // if (!browserSupportsSpeechRecognition) {
    //     return null
    // }
    return (
        <>
            {/* <div className="container">
                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>
                <div className="btn-style">
                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                </div>
            </div>
             */}
            <React.StrictMode>
                <div class="container">
                    <div>
                        <header>
                        <h1 > NYAAY SAHAAYAK HELPER</h1>
                        </header>
                    </div>
                <div>
                <p class="CHATBOT" style={{fontFamily:"inherit",fontWeight:"normal",paddingBottom:"20px"}}>
                 Hi there! Welcome to our <b>SAHAAYAK</b>. We're here to provide you with essential information about your LAWS and RIGHTS as a citizen.
                 We're here to help you understand and navigate your rights as a citizen. Whether you're curious about freedom of speech, privacy laws, or voting rights, or anything regarding Legal Rights,laws,News,etc.. we've got you covered.
                 Feel free to ask questions, and our <b>SAHAAYAK</b> will provide you with valuable information. To get started, you can simply type keywords like "freedom of speech," "privacy," or "voting rights."or any thing regarding Legal Rights,laws,regulations,etc..
                 Our goal is to empower you with knowledge, so you can make informed decisions and better advocate for your rights. If you ever need assistance or have a specific question, just type it in, and we'll do our best to assist you.
                 To explore specific topics, you can use keywords or ask questions like:
                </p>
                </div>
                        <Apps />
                        {/* <TextToSpeech/> */}
                        {/* <SpeechToText/> */}
                </div>
            </React.StrictMode>
    </>
    );
};
export default MyChatbot;