module.exports = {
    //network keys 
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545, // port ganache is runnig on
            network_id: "*" // Match any network id
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}