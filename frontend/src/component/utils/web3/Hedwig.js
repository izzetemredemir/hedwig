const { ethers } = require("ethers");
const address = "0x69be0EF1F785237e920A2A762c5CCcda169DcE63";
const startSessionabi = [
  "function startSession(address to) returns (uint256 id)"
];

export const startSession = async (to)=> {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
	const contract = new ethers.Contract(address, startSessionabi, signer);
	const tx = await contract.functions.startSession(to);

	const receipt = await tx.wait();
	console.log("receipt", receipt);
}

const sessionsabi = [
    "function sessions(uint256) view returns (uint256 G, address from, address to, uint256 key1, uint256 key2)"
  ];
  

export const sessions = async(index)=> {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, sessionsabi, signer);
  const result = await contract.functions.sessions(index);

  console.log("result", result);
  return result
}

const sessionIDabi = [
  "function sessionID() view returns (uint256 _value)"
];


export const sessionID = async()=> {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, sessionIDabi, signer);
  const result = await contract.functions.sessionID();

  console.log("result", result);
  return result._value.toNumber();
}

  
const initiateConnectionabi = [
  "function initiateConnection(uint256 _sessionID, uint256 key)"
];


export const initiateConnection = async(sessionID, key)=> {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, initiateConnectionabi, signer);
  const tx = await contract.functions.initiateConnection(sessionID, key);

  const receipt = await tx.wait();
  console.log("receipt", receipt);
}

const getSessionsabi = [
  "function getSessions() view returns (uint256[] _sessions)"
];
  

export const getSessions = async()=> {
  const contract = new ethers.Contract(address, getSessionsabi);
  const result = await contract.functions.getSessions();

  console.log("result", result);
}

const getKeyabi = [
  "function getKey(uint256 _sessionID, uint256 seed) view returns (uint256 key)"
];

export const getKey = async(sessionID, seed)=> {
  const contract = new ethers.Contract(address, getKeyabi);
  const result = await contract.functions.getKey(sessionID, seed);

  console.log("result", result);
}

const connectabi = [
  "function connect(uint256 _sessionID, uint256 seed) view returns (uint256 key)"
];
  

export const connect = async(sessionID, seed)=> {
  const contract = new ethers.Contract(address, connectabi);
  const result = await contract.functions.connect(sessionID, seed);

  console.log("result", result);
}

const addressToSessionIDsabi = [
  "function addressToSessionIDs(address, uint256) view returns (uint256)"
];

export const addressToSessionIDs = async(address, index)=> {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, addressToSessionIDsabi, signer);
  const result = await contract.functions.addressToSessionIDs(address, index);

  console.log("result", result);
  return result
}
