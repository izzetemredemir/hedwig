const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("<Provider_URL>");      
const signer = ethers.Wallet.fromMnemonic("<Mnemonic_Phrase>").connect(provider);
const address = "0x1C7C346e8467Aeac9b99AB2D9076A009776370a1";
const sendMessageabi = [
  "function sendMessage(string _messsage, uint256 chatId)"
];

export const sendMessage = async()=> {
	const contract = new ethers.Contract(address, sendMessageabi, signer);
	const tx = await contract.functions.sendMessage(null,null);

	const receipt = await tx.wait();
	console.log("receipt", receipt);
}

const messagesabi = [
    "function messages(uint256, uint256) view returns (address sender, string text)"
  ];
  
  export const messages = async()=> {
      const contract = new ethers.Contract(address, messagesabi, signer);
      const result = await contract.functions.messages(null,null);
  
      console.log("result", result);
  }
  
  const lastChatIdabi = [
    "function lastChatId() view returns (uint256)"
  ];
  
    export const lastChatId = async()=> {
      const contract = new ethers.Contract(address, lastChatIdabi, signer);
      const result = await contract.functions.lastChatId();
  
      console.log("result", result);
  }
  

  const getMessagesabi = [
    "function getMessages(uint256 chatId) view returns (tuple(address sender, string text)[])"
  ];
  
 
    export const getMessages = async()=> {
      const contract = new ethers.Contract(address, getMessagesabi, signer);
      const result = await contract.functions.getMessages(null);
  
      console.log("result", result);
  }

  const getMessageabi = [
    "function getMessage(uint256 chatId, uint256 index) view returns (tuple(address sender, string text))"
  ];
  
  
    export const  getMessage = async()=> {
      const contract = new ethers.Contract(address, getMessageabi, signer);
      const result = await contract.functions.getMessage(null,null);
  
      console.log("result", result);
  }

  const createChatabi = [
    "function createChat(address reciver) returns (uint256)"
  ];

  export const  createChat = async()=> {
      const contract = new ethers.Contract(address, createChatabi, signer);   
      const tx = await contract.functions.createChat(null);
  
      const receipt = await tx.wait();
      console.log("receipt", receipt);
  }
  

  const chatsabi = [
    "function chats(uint256) view returns (address sender, address reciver)"
  ];
  
export const  chats = async()=> {
      const contract = new ethers.Contract(address, chatsabi, signer);   
      const result = await contract.functions.chats(null);
  
      console.log("result", result);
  }