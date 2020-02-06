//Changing the state of the database esstientally

const TodoList = artifacts.require("./TodoList.sol");

module.exports = function (deployer) {
    deployer.deploy(TodoList);
};