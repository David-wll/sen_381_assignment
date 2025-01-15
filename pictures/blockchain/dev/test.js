const Blockchain = require('./LAB7/blockchain');
const veroin = new Blockchain();
veroin.hashBlock();
const previousBlockHash = 'TEMILOYEDAVID09047616320';
const currentBlockData =[
    {
        amount: 10,
        sender: 'WHERE1AREYOU9090',
        recipient: 'BAKA5567BAKA90', 
    }
]

const nonce = 100;
veroin.hashBlock(previousBlockHash,currentBlockData,nonce);