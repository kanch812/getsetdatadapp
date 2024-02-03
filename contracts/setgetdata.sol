// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract setgetdata{
    uint256 public data;

    function setData(uint a) public{
        data = a;
    }

    function getData() public view returns(uint256){
        return data;
    }
}