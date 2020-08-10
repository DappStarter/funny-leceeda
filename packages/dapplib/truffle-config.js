require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture strategy crawl mirror protect good another army general'; 
let testAccounts = [
"0xb170cf03dcb1c0c934205b3a5bdea5018fd95f9dd81dbcde6dfc2681495b7daa",
"0xaa73f16233fdb67427af3d85850b1c4be1c589cebfd06f20fe8d84a9498962e5",
"0xcfbd54ac5465ff0e1be9705a56a2a1d203175f6f52c189c11a87fef4b8f8d209",
"0xdbb5c3fb452dd83170d1f09255bebbf6f1813962ff327ba464402339c9e571c7",
"0xc55b97e122b22717549ea38ae562fd7f471fc8a465d0dc38ef8cff6050c4986b",
"0xefa10e89d1c4a82e1c3569918255e3725105aced79d01e6eda82676b6d06d463",
"0x0e84a8ad015f53c32e672b2c1a010be69461f5d731fa4ad3b7863f279b41d795",
"0x3abcc69e3b7d4fb0fa294356d612c2d0d3e480a2e17e770c969d606d33b468ab",
"0xbe3fd3786f8d10e11a0b25d246630de0fcc8a6483bfc94b54b47ed91460ac715",
"0x124beb446e3eb1378aed1c3ffd128f436aa209fc0a9ce515d18adaa6dabefe0f"
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
            version: '^0.5.11'
        }
    }
};
