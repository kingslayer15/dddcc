// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface ICardERC1155 {
    // 折扣信息
    function getDisCount(address account) external view returns (uint256);
}