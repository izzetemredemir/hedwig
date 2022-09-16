const  ethers = require("ethers");

const provider = new ethers.providers.JsonRpcProvider("<Provider_URL>");
const signer = ethers.Wallet.fromMnemonic("<Mnemonic_Phrase>").connect(provider);
const address = "";

const sendMessageabi = [
  "function sendMessage(string _messsage, uint256 chatId)"
];

async function sendMessage() {
	const contract = new ethers.Contract(address, sendMessageabi, signer);   
	const tx = await contract.functions.sendMessage(null,null);

	const receipt = await tx.wait();
	console.log("receipt", receipt);
}

const messagesABI = [
    "function messages(uint256, uint256) view returns (address sender, string text)"
  ];
  
  async function messages() {
      const contract = new ethers.Contract(address, messagesABI, signer);   
      const result = await contract.functions.messages(null,null);
  
      console.log("result", result);
  }

  const lastChatIdABI = [
    "function lastChatId() view returns (uint256)"
  ];
  
  async function lastChatId() {
      const contract = new ethers.Contract(address, lastChatIdABI, signer);   
      const result = await contract.functions.lastChatId();
  
      console.log("result", result);
  }
  
  const getMessagesABI = [
    "function getMessages(uint256 chatId) view returns (tuple(address sender, string text)[])"
  ];
  
  async function getMessages() {
      const contract = new ethers.Contract(address, getMessagesABI, signer);   
      const result = await contract.functions.getMessages(null);
  
      console.log("result", result);
  }
  
  const getMessageABI = [
    "function getMessage(uint256 chatId, uint256 index) view returns (tuple(address sender, string text))"
  ];
  
  async function getMessage() {
      const contract = new ethers.Contract(address, getMessageABI, signer);   
      const result = await contract.functions.getMessage(null,null);
  
      console.log("result", result);
  }
  
  const chatsABI = [
    "function chats(uint256) view returns (address sender, address reciver)"
  ];
  
  async function chats() {
      const contract = new ethers.Contract(address, chatsABI, signer);   
      const result = await contract.functions.chats(null);
  
      console.log("result", result);
  }