import styled from "styled-components";
import { SearchContainer,SearchInput } from "./ContactListComponents";
import { messagesList } from "../Data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Container = styled.div`
display:flex;
flex-direction:column;
height: 100%;
flex:2;
background:#f6f7f8

`;
const ProfileHeader=styled.div`
display:flex;
flex-direction:row;
background-color:#ededed;
padding: 15px;
align-items:center;
gap:10px;

`;

const ProfileImage = styled.img`
width:32px;
height:32px;
border-radius:50%;
`;

const ChatBox = styled.div`
display:flex;
background:#f0f0f0;
padding:10px;
align-items:center;
bottom:0;
`;

const EmojiImage = styled.img`
width:30px;
height:28px;
opacity:0.4;
cursor:pointer;
padding-left:10px;
`;

const Send = styled.img`
width:30px;
height:28px;
opacity:0.4;
cursor:pointer;
padding-right:10px
`

const MessageContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;
`;
const MessageDiv = styled.div`
justify-content:${props => (props.isYours ?'flex-end':'flex-start')};
display:flex;
margin:5px 16px;

`;

const Message = styled.div`
background:${props => (props.isYours ?"#daf8cb":"white")};
max-width: 50%;
color:#303030;
padding: 8px 10px;
font-size:14px;

`;

const ConversationComponent =() => {
    return (
    <Container>
        <ProfileHeader>
        <ProfileImage src ="/profile/muneed.jpg"/>
        Munees
        </ProfileHeader>
        <MessageContainer>
           {messagesList.map((messageData)=>(
            <MessageDiv isYours={messageData.senderID === 0}>
                <Message isYours={messageData.senderID === 0}>{[messageData.text]}</Message>
            </MessageDiv>
           ))}
        </MessageContainer>
        
        <ChatBox>
            <SearchContainer>
                <EmojiImage src={"/emoji.png"}/>
                <SearchInput placeholder="Type a message"/>
                <Send src="send-icon.png"/>
            </SearchContainer>
        </ChatBox>
        </Container>
    );
};

export default ConversationComponent;