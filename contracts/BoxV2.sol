// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// BoxV2 contract that allows storing, retrieving, and incrementing a value
contract BoxV2 {
    // Private variable to hold the value
    uint256 private _value;

    // Event emitted when the value is changed
    event ValueChanged(uint256 value);

    // Function to store a new value
    function store(uint256 value) public {
        _value = value; // Set the new value
        emit ValueChanged(value); // Emit the ValueChanged event
    }

    // Function to retrieve the stored value
    function retrieve() public view returns (uint256) {
        return _value; // Return the stored value
    }

    // Function to increment the stored value by 1
    function increment() public {
        _value = _value + 1; // Increment the value
        emit ValueChanged(_value); // Emit the ValueChanged event
    }
}