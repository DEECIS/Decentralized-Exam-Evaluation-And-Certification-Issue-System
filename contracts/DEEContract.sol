pragma solidity ^0.4.18;

contract DEEContract {



  struct Result {
    address  sender;
    uint8 result;
  }

  event Evaluation(
    address  sender,
    bytes32 id,
    uint8 result
  );

  uint8[5] answers = [2, 2,1,1, 0];

  mapping(address => bytes32) addressToid;
  mapping(bytes32 => Result) idToResult;

  function _evaluate(uint8[5] _answers) internal returns (uint8 r, bytes32 resultId){
    r = 0;
    for (uint8 i=0; i<_answers.length; i++){
      if(_answers[i] == answers[i]){
        r++;
      }
    }
    resultId= keccak256(abi.encodePacked(now, msg.sender, block.timestamp, r));

    addressToid[msg.sender] = resultId;
    idToResult[resultId] = Result(msg.sender, r);
    // emit the event
    emit Evaluation(msg.sender,  resultId, r);

  }

  function upload(uint8[5] _answers) public returns (uint8 r, bytes32 resultId) {
    return _evaluate(_answers);
  }

  function getMyResult() public view returns (uint8 r){
    return idToResult[addressToid[msg.sender]].result;

  }
  function getTestId()public view returns (bytes32 id){
    return addressToid[msg.sender];
  }

  function getResult(bytes32 _id) public view returns(address addr, uint8 r){
    addr = idToResult[_id].sender;
    r= idToResult[_id].result;
  }
}
