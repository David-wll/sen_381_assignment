const Blockchain = require ('./blockchain');
const veroin = new Blockchain ();
// define a sample random previous block
const previousBlockHash =
'20985DA6CCF066ASDED38C1D27C35692E11';
// create a new block for a current block representation

const currentBlockData = [
{
amount: 10,
sender: 'WH3GE9C0E5CD571',
recipient: 'HHDY8UY6F6E462D48E9',
},{
amount: 100,
sender: 'WH3KGCFVTE9C0E5CD571',
recipient: '8UY6F6E462D48E9',
},{
amount: 210,
sender: 'WH3GRFTGE9C0E5CD571',
recipient: 'FG8UY6FGFG6E462D48E9',
}
];
const nonce = 100;
console.log(veroin.proofOfWork(previousBlockHash, currentBlockData));
console.log(veroin.hashBlock(previousBlockHash, currentBlockData, nonce));
console.log(veroin);