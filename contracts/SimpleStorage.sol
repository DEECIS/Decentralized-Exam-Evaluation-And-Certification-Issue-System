pragma solidity ^0.4.18;

contract SimpleStorage {

  struct Result {
    address  sender;
    uint8 result;
  }

  uint storedData;

  uint8[] answers = [2, 2,1,1];

  mapping(address => uint8) addressToResult;
  mapping(bytes32 => Result) idToResult;

  function set(uint x) public {
    storedData = x;
  }

  function _evaluate(uint8[] _answers) internal returns (uint8 r, bytes32 resultId){
    r = 0;
    for (uint8 i=0; i<_answers.length; i++){
      if(_answers[i] == answers[i]){
        r++;
      }
    }
    addressToResult[msg.sender] = r;

    resultId= keccak256(abi.encodePacked(now, msg.sender, block.timestamp, r));

    idToResult[resultId] = Result(msg.sender, r);
  }

  function upload(uint8[] answers) public returns (uint8 r) {


  }

  function get() public view returns (uint) {
    return storedData;
  }
}
