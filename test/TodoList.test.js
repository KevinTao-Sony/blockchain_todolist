const TodoList = artifacts.require('./TodoList.sol')

contract('TodoList', (accounts) => {
    before(async () => {
        this.todoList = await TodoList.deployed()
    })

    it('Deploys successfully', async () => {
        const address = await this.todoList.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, "")
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('List tasks', async () => {
        const taskCount = await this.todoList.taskCount()
        const task = await this.todoList.tasks(taskCount)
        assert.equal(task.id.toNumber(), taskCount.toNumber())
        assert.equal(task.content, "first item")
        assert.equal(task.completed, false)
        assert.equal(taskCount.toNumber(), 1)
        
    })
})