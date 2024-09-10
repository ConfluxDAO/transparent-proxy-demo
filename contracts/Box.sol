// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Box contract that allows storing and retrieving a value
contract Box {
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
}