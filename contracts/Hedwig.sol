//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Hedwig {
    using Counters for Counters.Counter;
    Counters.Counter public sessionID;
    
    struct Session {
        bytes G;
        address from;
        address to;
        bytes key1;
        bytes key2;
    }
    mapping(uint256 => Session) public sessions;
    mapping(address => uint256[]) public addressToSessionIDs;
    
    event SessionStart(address from, address to, uint256 sessionID);

    modifier onlyOwners(uint256 _sessionID){
        require(msg.sender == sessions[_sessionID].from && msg.sender == sessions[_sessionID].to);
        _;
    }

    function startSession(address to) external returns(uint256 id){
        uint256 _sessionID = sessionID.current();
        sessions[_sessionID] = Session(
            "",
            msg.sender,
            to,
            "",
            ""
        );
        addressToSessionIDs[msg.sender].push();
        sessionID.increment();
        return _sessionID;
    }

    function initiateConnection(uint256 _sessionID) external{

    }

    function connect(uint256 _sessionID) external {

    }

    function decryptData(bytes memory data) external pure returns(string memory message){

    }

    function getSessions() external view returns(uint256[] memory _sessions){

    }
}
