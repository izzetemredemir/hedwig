//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Hedwig {
    using Counters for Counters.Counter;
    Counters.Counter public sessionID;
    
    struct Session {
        uint256 G;
        address from;
        address to;
        uint256 key1;
        uint256 key2;
    }
    mapping(uint256 => Session) public sessions;
    mapping(address => uint256[]) public addressToSessionIDs;

    uint constant mod = 10**16;
    
    event SessionStart(address from, address to, uint256 sessionID);

    modifier onlyOwners(uint256 _sessionID){
        require(msg.sender == sessions[_sessionID].from || msg.sender == sessions[_sessionID].to, "You are not associated with this session");
        _;
    }

    function startSession(address to) external returns(uint256 id){
        uint256 _sessionID = sessionID.current();
        uint256 _G = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, to))) % mod;

        sessions[_sessionID] = Session(
            _G,
            msg.sender,
            to,
            0,
            0
        );
        addressToSessionIDs[msg.sender].push();
        addressToSessionIDs[to].push();
        sessionID.increment();
        emit SessionStart(msg.sender, to, _sessionID);
        return _sessionID;
    }

    function getKey(uint256 _sessionID, uint256 seed) external view returns(uint256 key){
        return (sessions[_sessionID].G * seed) % mod;
    }

    function initiateConnection(uint256 _sessionID, uint256 key) external onlyOwners(_sessionID){
        require(sessions[_sessionID].key1 == 0 || sessions[_sessionID].key2 == 0, "Keys are initialized");
        if (sessions[_sessionID].from == msg.sender){
            sessions[_sessionID].key1 = key;
        } else {
            sessions[_sessionID].key2 = key;
        }

    }

    function connect(uint256 _sessionID, uint256 seed) external view returns(uint256 key){
        require(sessions[_sessionID].key1 != 0 && sessions[_sessionID].key2 != 0, "Both keys should be added first.");
        if (sessions[_sessionID].from == msg.sender){
            return (sessions[_sessionID].key2 * seed) % mod;
        } else {
            return (sessions[_sessionID].key1 * seed) % mod;
        }
    }

    function decryptData(bytes memory data, uint256 key) external pure returns(bytes memory message){
        return abi.encode(data, key);
    }

    function getSessions() external view returns(uint256[] memory _sessions){
        return addressToSessionIDs[msg.sender];
    }
}
