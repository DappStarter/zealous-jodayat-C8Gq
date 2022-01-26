require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note predict uncle gesture slam fringe gesture'; 
let testAccounts = [
"0x56d0915930c5b85e4af12a70078ca0a2db871b327a692fd4fc2cb9025439a94e",
"0xac6bd8d0bc7bfd6e8fee20d917da88c26a68662c39bcdc38e214cad6b0fb8aff",
"0xccea3e115128e03cd8472ff22d7525277b7f2b5dc6d0d8f34b0e6aef686f3087",
"0x74b52743328b25c13e763bfa8ada7c7e50d2c48795d5ca826c0e0dbe6c3b0a36",
"0x2dbbed1b2fac3a38987ed1041a22afc31d8bc7e230abfde2e43c68c423c6000f",
"0x8c435e10d8b62813f955154132a8b759af91bbb64ca472d142ad525746224bbe",
"0xe4fb32508801f0be198c112b9ada69297829743fad9d3eede1e0cacc40cb9bf2",
"0x84244a8b718216a88ca158b2061d391777fb3382419359a287a0cfa4aed2f0ce",
"0xd1c144a5e3c3f7b1b506159e4592ed576c67cc3b4ed8ffee98efa9b4f6e1c8b4",
"0x6fc3f145cc59db0c87232b9da1310e31a4fc60d23b428a0603b9b702f8e23257"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

