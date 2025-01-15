const Blockchain = require("./LAB7/blockchain");
// test 1 A
const verion
 = new Blockchain();

console.log("test 1A \n", verion
    
);
// test 1 B
verion.createNewBlock();

console.log("\ntest 1B \n", verion
    
);
// test 1C
verion.createNewBlock(231, "TEMILOYEDAVID", "VUG/SEN/22/7495");

console.log("\ntest 1C \n", verion
    
);

// test 1D
verion.createNewBlock(4131, "VERITASDATASAAYTOIWE", "21219875ash980");

console.log("\ntest 1C \n", verion
    
);

// Test 2A
verion.createNewTransaction(101, "ASDUJYHFD89891773", "IKOLAPHDMSCBSCMG");
console.log("\ntest 2A with new Transaction \n", verion
    
);

verion.createNewTransaction(501, "VASHHT845SJ5TKCJ2", "JAMN5BG5DF6HT8NG9");
verion.createNewTransaction(430, "VASHHT845SJ5TKCJ2", "JAMN5BG5DF6HT8NG9");
verion.createNewTransaction(901, "VASHHT845SJ5TKCJ2", "JAMN5BG5DF6HT8NG9");
console.log("\ntest 2D with new Transactions \n", verion
    
);
