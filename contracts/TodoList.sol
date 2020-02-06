pragma solidity ^0.5.0;

contract TodoList {

	uint public taskCount = 0;

	struct Task{
		uint id;
		string content;
		bool completed;
	}
	///saving the task into the block chain
	mapping(uint => Task) public tasks;

	event TaskCreated(
		uint id,
		string content,
		bool completed
	);

	constructor() public {
		createTask("first item");
	}

	function createTask(string memory _content) public {
		taskCount ++;
		tasks[taskCount] = Task(taskCount, _content, false);
		emit TaskCreated(taskCount, _content, false);
	}
}