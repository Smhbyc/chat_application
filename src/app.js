import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = "100vh"
            projectID = "47db332a-bb44-4bf5-826e-2a6db9add65f"
            userName = "admin"
            userSecret = "123123"

            renderChatFeed = {(chatAppProps) => <ChatFeed { ... chatAppProps } /> }


        />
    )
}

export default App;