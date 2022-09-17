// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Message {
     uint public lastChatId;

     struct MessageStruct {
          address sender;
          string text;
     }
     struct Chat {
          address sender;
          address reciver;
     }

     mapping(uint => MessageStruct[]) public messages;

     mapping(uint => Chat) public chats;

     constructor() {
          lastChatId = 0;
     }
     
     function createChat(address reciver) internal returns(uint) {
          chats[lastChatId] =  Chat(reciver,reciver);
          lastChatId++;
          return lastChatId;
     }    

     function sendMessage(string memory  _messsage, uint chatId) public{
          require(chats[chatId].sender == msg.sender || chats[chatId].reciver == msg.sender );
          MessageStruct memory tempMsg = MessageStruct(msg.sender,_messsage);
          messages[chatId].push(tempMsg);
     }
     
     function getMessages(uint chatId) public view returns( MessageStruct[] memory ){
          return messages[chatId];
     }

     function getMessage(uint chatId, uint index) public view returns( MessageStruct memory ){
          return messages[chatId][index];
     }

     
}
