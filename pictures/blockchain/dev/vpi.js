const Blockchain = require("./blockchain");
const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');


const temi = new Blockchain();
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    // send message to the listening port that will get the
    // alert
    res.send('Hello SEN 381');
});

app.get('/blockchain', function (req, res) {
    
});

app.post('/transaction', function(req, res) {
    const blockIndex =temi.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({ note:`Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine', function(req, res) {
    const lastBlock = temi.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: temi.pendingTransactions,
        index: lastBlock['index'] + 1
    };
    const nonce = temi.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = temi.hashBlock(previousBlockHash, currentBlockData, nonce);
    const newBlock = temi.createNewBlock(nonce, previousBlockHash, blockHash);
    const nodeAddress = uuid.v1().split('-').join('');
    temi.createNewTransaction(12.5, "00", nodeAddress);
    res.json({
        note: "New block mined successfully",
        block: newBlock
    });
});

app.listen(3000, function(res, req){
console.log('listening on port 3000… ');
});