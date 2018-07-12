pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DEEContract.sol";

contract TestDEE{
  DEEContract dee = DEEContract(DeployedAddresses.DEEContract());
  bytes32 resultId;
  uint8 r;
  function testRightAnswers() public {

    uint8[4] memory answers = [2, 2,1,1];


    (r,  resultId) = dee.upload(answers);

    Assert.equal(uint(r), uint(4),  "should be equal");
  }

  function testGetById() public {

    uint8 result;
    (, result) = dee.getResult(resultId);

    Assert.equal(uint(r), uint(result) ,"should be equal");
  }



}