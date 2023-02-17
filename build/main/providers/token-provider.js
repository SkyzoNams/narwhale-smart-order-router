"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAI_CELO = exports.CELO = exports.WETH_POLYGON_MUMBAI = exports.DAI_POLYGON_MUMBAI = exports.USDC_POLYGON_MUMBAI = exports.WMATIC_POLYGON_MUMBAI = exports.DAI_POLYGON = exports.USDC_POLYGON = exports.WETH_POLYGON = exports.WMATIC_POLYGON = exports.USDC_ARBITRUM_GOERLI = exports.UNI_ARBITRUM_RINKEBY = exports.USDC_ARBITRUM_RINKEBY = exports.USDT_ARBITRUM_RINKEBY = exports.DAI_ARBITRUM_GOERLI = exports.DAI_ARBITRUM_RINKEBY = exports.DAI_ARBITRUM = exports.WBTC_ARBITRUM = exports.USDT_ARBITRUM = exports.USDC_ARBITRUM = exports.DAI_OPTIMISTIC_KOVAN = exports.WBTC_OPTIMISTIC_KOVAN = exports.USDT_OPTIMISTIC_KOVAN = exports.USDC_OPTIMISTIC_KOVAN = exports.DAI_OPTIMISM = exports.WBTC_OPTIMISM = exports.USDT_OPTIMISM = exports.USDC_OPTIMISM = exports.DAI_KOVAN = exports.WBTC_KOVAN = exports.USDT_KOVAN = exports.USDC_KOVAN = exports.UNI_GÖRLI = exports.DAI_GÖRLI = exports.WBTC_GÖRLI = exports.USDT_GÖRLI = exports.USDC_GÖRLI = exports.USDT_RINKEBY = exports.USDC_RINKEBY = exports.DAI_RINKEBY_2 = exports.DAI_RINKEBY_1 = exports.DAI_ROPSTEN = exports.USDT_ROPSTEN = exports.USDC_ROPSTEN = exports.UNI_MAINNET = exports.FEI_MAINNET = exports.DAI_MAINNET = exports.WBTC_MAINNET = exports.USDT_MAINNET = exports.USDC_MAINNET = void 0;
exports.WNATIVE_ON = exports.USDC_ON = exports.USDT_ON = exports.DAI_ON = exports.TokenProvider = exports.WETH_AVALANCHE_FUJI = exports.USDC_AVALANCHE = exports.USDC_AVALANCHE_FUJI = exports.MKR_AVALANCHE_FUJI = exports.WBTC_AVALANCHE_FUJI = exports.TUSD_AVALANCHE_FUJI = exports.USDT_AVALANCHE_FUJI = exports.DAI_AVALANCHE = exports.DAI_AVALANCHE_FUJI = exports.WBTC_MOONBEAM = exports.DAI_MOONBEAM = exports.WGLMR_MOONBEAM = exports.USDC_MOONBEAM = exports.WBTC_GNOSIS = exports.WXDAI_GNOSIS = exports.USDC_ETHEREUM_GNOSIS = exports.CEUR_CELO_ALFAJORES = exports.CUSD_CELO_ALFAJORES = exports.DAI_CELO_ALFAJORES = exports.CELO_ALFAJORES = exports.CEUR_CELO = exports.CUSD_CELO = void 0;
const sdk_core_1 = require("@uniswap/sdk-core");
const lodash_1 = __importDefault(require("lodash"));
const IERC20Metadata__factory_1 = require("../types/v3/factories/IERC20Metadata__factory");
const util_1 = require("../util");
// Some well known tokens on each chain for seeding cache / testing.
exports.USDC_MAINNET = new sdk_core_1.Token(util_1.ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
exports.USDT_MAINNET = new sdk_core_1.Token(util_1.ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
exports.WBTC_MAINNET = new sdk_core_1.Token(util_1.ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_MAINNET = new sdk_core_1.Token(util_1.ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
exports.FEI_MAINNET = new sdk_core_1.Token(util_1.ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', 18, 'FEI', 'Fei USD');
exports.UNI_MAINNET = new sdk_core_1.Token(util_1.ChainId.MAINNET, '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', 18, 'UNI', 'Uniswap');
exports.USDC_ROPSTEN = new sdk_core_1.Token(util_1.ChainId.ROPSTEN, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
exports.USDT_ROPSTEN = new sdk_core_1.Token(util_1.ChainId.ROPSTEN, '0x516de3a7a567d81737e3a46ec4ff9cfd1fcb0136', 6, 'USDT', 'Tether USD');
exports.DAI_ROPSTEN = new sdk_core_1.Token(util_1.ChainId.ROPSTEN, '0xad6d458402f60fd3bd25163575031acdce07538d', 18, 'DAI', 'Dai Stablecoin');
exports.DAI_RINKEBY_1 = new sdk_core_1.Token(util_1.ChainId.RINKEBY, '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea', 18, 'DAI', 'DAI');
exports.DAI_RINKEBY_2 = new sdk_core_1.Token(util_1.ChainId.RINKEBY, '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735', 18, 'DAI', 'DAI');
exports.USDC_RINKEBY = new sdk_core_1.Token(util_1.ChainId.RINKEBY, '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b', 6, 'tUSDC', 'test USD//C');
exports.USDT_RINKEBY = new sdk_core_1.Token(util_1.ChainId.RINKEBY, '0xa689352b7c1cad82864beb1d90679356d3962f4d', 18, 'USDT', 'Tether USD');
exports.USDC_GÖRLI = new sdk_core_1.Token(util_1.ChainId.GÖRLI, '0x07865c6e87b9f70255377e024ace6630c1eaa37f', 6, 'USDC', 'USD//C');
exports.USDT_GÖRLI = new sdk_core_1.Token(util_1.ChainId.GÖRLI, '0xe583769738b6dd4e7caf8451050d1948be717679', 18, 'USDT', 'Tether USD');
exports.WBTC_GÖRLI = new sdk_core_1.Token(util_1.ChainId.GÖRLI, '0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_GÖRLI = new sdk_core_1.Token(util_1.ChainId.GÖRLI, '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844', 18, 'DAI', 'Dai Stablecoin');
exports.UNI_GÖRLI = new sdk_core_1.Token(util_1.ChainId.GÖRLI, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uni token');
exports.USDC_KOVAN = new sdk_core_1.Token(util_1.ChainId.KOVAN, '0x31eeb2d0f9b6fd8642914ab10f4dd473677d80df', 6, 'USDC', 'USD//C');
exports.USDT_KOVAN = new sdk_core_1.Token(util_1.ChainId.KOVAN, '0xa325f1b1ebb748715dfbbaf62e0c6677e137f45d', 18, 'USDT', 'Tether USD');
exports.WBTC_KOVAN = new sdk_core_1.Token(util_1.ChainId.KOVAN, '0xe36bc5d8b689ad6d80e78c3e736670e80d4b329d', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_KOVAN = new sdk_core_1.Token(util_1.ChainId.KOVAN, '0x9dc7b33c3b63fc00ed5472fbd7813edda6a64752', 18, 'DAI', 'Dai Stablecoin');
exports.USDC_OPTIMISM = new sdk_core_1.Token(util_1.ChainId.OPTIMISM, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', 'USD//C');
exports.USDT_OPTIMISM = new sdk_core_1.Token(util_1.ChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'Tether USD');
exports.WBTC_OPTIMISM = new sdk_core_1.Token(util_1.ChainId.OPTIMISM, '0x68f180fcCe6836688e9084f035309E29Bf0A2095', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_OPTIMISM = new sdk_core_1.Token(util_1.ChainId.OPTIMISM, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.USDC_OPTIMISTIC_KOVAN = new sdk_core_1.Token(util_1.ChainId.OPTIMISTIC_KOVAN, '0x3b8e53b3ab8e01fb57d0c9e893bc4d655aa67d84', 6, 'USDC', 'USD//C');
exports.USDT_OPTIMISTIC_KOVAN = new sdk_core_1.Token(util_1.ChainId.OPTIMISTIC_KOVAN, '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDT', 'Tether USD');
exports.WBTC_OPTIMISTIC_KOVAN = new sdk_core_1.Token(util_1.ChainId.OPTIMISTIC_KOVAN, '0x2382a8f65b9120E554d1836a504808aC864E169d', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_OPTIMISTIC_KOVAN = new sdk_core_1.Token(util_1.ChainId.OPTIMISTIC_KOVAN, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
exports.USDC_ARBITRUM = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USD//C');
exports.USDT_ARBITRUM = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD');
exports.WBTC_ARBITRUM = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC');
exports.DAI_ARBITRUM = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin');
// export const DAI_ARBITRUM_RINKEBY = new Token(
//   ChainId.ARBITRUM_RINKEBY,
//   '0x2f3C1B6A51A469051A22986aA0dDF98466cc8D3c',
//   18,
//   'DAI',
//   'Dai Stablecoin'
// );
// higher liquidity in dai-weth pool on arb-rinkeby
exports.DAI_ARBITRUM_RINKEBY = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_RINKEBY, '0x5364dc963c402aaf150700f38a8ef52c1d7d7f14', 18, 'DAI', 'Dai Stablecoin');
exports.DAI_ARBITRUM_GOERLI = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_GOERLI, '0x0000000000000000000000000000000000000000', // TODO: add address
18, 'DAI', 'Dai Stablecoin');
exports.USDT_ARBITRUM_RINKEBY = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_RINKEBY, '0x920b9301c2de92186299cd2abc7199e25b9728b3', 6, 'UDST', 'Tether USD');
exports.USDC_ARBITRUM_RINKEBY = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_RINKEBY, '0x09b98f8b2395d076514037ff7d39a091a536206c', 6, 'USDC', 'USD//C');
exports.UNI_ARBITRUM_RINKEBY = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_RINKEBY, '0x049251a7175071316e089d0616d8b6aacd2c93b8', 18, 'UNI', 'Uni token');
// Bridged version of official Goerli USDC
exports.USDC_ARBITRUM_GOERLI = new sdk_core_1.Token(util_1.ChainId.ARBITRUM_GOERLI, '0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892', 6, 'USDC', 'USD//C');
//polygon tokens
exports.WMATIC_POLYGON = new sdk_core_1.Token(util_1.ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC');
exports.WETH_POLYGON = new sdk_core_1.Token(util_1.ChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped Ether');
exports.USDC_POLYGON = new sdk_core_1.Token(util_1.ChainId.POLYGON, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'USD//C');
exports.DAI_POLYGON = new sdk_core_1.Token(util_1.ChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin');
//polygon mumbai tokens
exports.WMATIC_POLYGON_MUMBAI = new sdk_core_1.Token(util_1.ChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC');
exports.USDC_POLYGON_MUMBAI = new sdk_core_1.Token(util_1.ChainId.POLYGON_MUMBAI, '0xe11a86849d99f524cac3e7a0ec1241828e332c62', 6, 'USDC', 'USD//C');
exports.DAI_POLYGON_MUMBAI = new sdk_core_1.Token(util_1.ChainId.POLYGON_MUMBAI, '0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f', 18, 'DAI', 'Dai Stablecoin');
exports.WETH_POLYGON_MUMBAI = new sdk_core_1.Token(util_1.ChainId.POLYGON_MUMBAI, '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa', 18, 'WETH', 'Wrapped Ether');
// Celo Tokens
exports.CELO = new sdk_core_1.Token(util_1.ChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo native asset');
exports.DAI_CELO = new sdk_core_1.Token(util_1.ChainId.CELO, '0xE4fE50cdD716522A56204352f00AA110F731932d', 18, 'DAI', 'Dai Stablecoin');
exports.CUSD_CELO = new sdk_core_1.Token(util_1.ChainId.CELO, '0x765DE816845861e75A25fCA122bb6898B8B1282a', 18, 'CUSD', 'Celo Dollar Stablecoin');
exports.CEUR_CELO = new sdk_core_1.Token(util_1.ChainId.CELO, '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73', 18, 'CEUR', 'Celo Euro Stablecoin');
// Celo Alfajores Tokens
exports.CELO_ALFAJORES = new sdk_core_1.Token(util_1.ChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo native asset');
exports.DAI_CELO_ALFAJORES = new sdk_core_1.Token(util_1.ChainId.CELO_ALFAJORES, '0x7d91E51C8F218f7140188A155f5C75388630B6a8', 18, 'DAI', 'Dai Stablecoin');
exports.CUSD_CELO_ALFAJORES = new sdk_core_1.Token(util_1.ChainId.CELO_ALFAJORES, '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1', 18, 'CUSD', 'Celo Dollar Stablecoin');
exports.CEUR_CELO_ALFAJORES = new sdk_core_1.Token(util_1.ChainId.CELO_ALFAJORES, '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F', 18, 'CEUR', 'Celo Euro Stablecoin');
// Gnosis Tokens
exports.USDC_ETHEREUM_GNOSIS = new sdk_core_1.Token(util_1.ChainId.GNOSIS, '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83', 6, 'USDC', 'USDC from Ethereum on Gnosis');
exports.WXDAI_GNOSIS = new sdk_core_1.Token(util_1.ChainId.GNOSIS, '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d', 18, 'WXDAI', 'Wrapped XDAI on Gnosis');
exports.WBTC_GNOSIS = new sdk_core_1.Token(util_1.ChainId.GNOSIS, '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252', 8, 'WBTC', 'Wrapped BTC from Ethereum on Gnosis');
// Moonbeam Tokens
exports.USDC_MOONBEAM = new sdk_core_1.Token(util_1.ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'USDC', 'USD Coin bridged using Multichain');
exports.WGLMR_MOONBEAM = new sdk_core_1.Token(util_1.ChainId.MOONBEAM, '0xAcc15dC74880C9944775448304B263D191c6077F', 18, 'WGLMR', 'Wrapped GLMR');
exports.DAI_MOONBEAM = new sdk_core_1.Token(util_1.ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'DAI', 'Dai on moonbeam bridged using Multichain');
exports.WBTC_MOONBEAM = new sdk_core_1.Token(util_1.ChainId.MOONBEAM, '0x922D641a426DcFFaeF11680e5358F34d97d112E1', 8, 'WBTC', 'Wrapped BTC bridged using Multichain');
exports.DAI_AVALANCHE_FUJI = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0x12C135a68b7B3Cd006eDb785cB53398a5DA59613', 18, 'DAI', 'Dai on avalanche bridged using Multichain');
exports.DAI_AVALANCHE = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18, 'DAI', 'Dai on avalanche bridged using Multichain');
exports.USDT_AVALANCHE_FUJI = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0x82DCEC6aa3c8BFE2C96d40d8805EE0dA15708643', 6, 'USDT', 'Tether USD');
exports.TUSD_AVALANCHE_FUJI = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0x35907d0D62864f7ab75574947C040CCD9Ad003d3', 18, 'TUSD', 'TrueUSD');
exports.WBTC_AVALANCHE_FUJI = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0xaaB927CfD81A029F841575AF787C960CDE597e4F', 8, 'WBTC', 'Wrapped BTC');
exports.MKR_AVALANCHE_FUJI = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0x4c49a0c7a834caF1469f534f548d7fBaEE2bF5C9', 18, 'MKR', 'Maker DAO');
exports.USDC_AVALANCHE_FUJI = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0xAF82969ECF299c1f1Bb5e1D12dDAcc9027431160', 6, 'USDC', 'USDC from Ethereum on avalanche');
exports.USDC_AVALANCHE = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E', 6, 'USDC', 'USDC from Ethereum on avalanche');
exports.WETH_AVALANCHE_FUJI = new sdk_core_1.Token(util_1.ChainId.AVALANCHE_FUJI, '0xB767287A7143759f294CfB7b1Adbca1140F3de71', 18, 'WETH', 'ETH from Ethereum on avalanche');
class TokenProvider {
    constructor(chainId, multicall2Provider) {
        this.chainId = chainId;
        this.multicall2Provider = multicall2Provider;
    }
    async getTokens(_addresses, providerConfig) {
        const addressToToken = {};
        const symbolToToken = {};
        const addresses = (0, lodash_1.default)(_addresses)
            .map((address) => address.toLowerCase())
            .uniq()
            .value();
        if (addresses.length > 0) {
            const [symbolsResult, decimalsResult] = await Promise.all([
                this.multicall2Provider.callSameFunctionOnMultipleContracts({
                    addresses,
                    contractInterface: IERC20Metadata__factory_1.IERC20Metadata__factory.createInterface(),
                    functionName: 'symbol',
                    providerConfig,
                }),
                this.multicall2Provider.callSameFunctionOnMultipleContracts({
                    addresses,
                    contractInterface: IERC20Metadata__factory_1.IERC20Metadata__factory.createInterface(),
                    functionName: 'decimals',
                    providerConfig,
                }),
            ]);
            const { results: symbols } = symbolsResult;
            const { results: decimals } = decimalsResult;
            for (let i = 0; i < addresses.length; i++) {
                const address = addresses[i];
                const symbolResult = symbols[i];
                const decimalResult = decimals[i];
                if (!(symbolResult === null || symbolResult === void 0 ? void 0 : symbolResult.success) || !(decimalResult === null || decimalResult === void 0 ? void 0 : decimalResult.success)) {
                    util_1.log.info({
                        symbolResult,
                        decimalResult,
                    }, `Dropping token with address ${address} as symbol or decimal are invalid`);
                    continue;
                }
                const symbol = symbolResult.result[0];
                const decimal = decimalResult.result[0];
                addressToToken[address.toLowerCase()] = new sdk_core_1.Token(this.chainId, address, decimal, symbol);
                symbolToToken[symbol.toLowerCase()] =
                    addressToToken[address.toLowerCase()];
            }
            util_1.log.info(`Got token symbol and decimals for ${Object.values(addressToToken).length} out of ${addresses.length} tokens on-chain ${providerConfig ? `as of: ${providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber}` : ''}`);
        }
        return {
            getTokenByAddress: (address) => {
                return addressToToken[address.toLowerCase()];
            },
            getTokenBySymbol: (symbol) => {
                return symbolToToken[symbol.toLowerCase()];
            },
            getAllTokens: () => {
                return Object.values(addressToToken);
            },
        };
    }
}
exports.TokenProvider = TokenProvider;
const DAI_ON = (chainId) => {
    switch (chainId) {
        case util_1.ChainId.MAINNET:
            return exports.DAI_MAINNET;
        case util_1.ChainId.ROPSTEN:
            return exports.DAI_ROPSTEN;
        case util_1.ChainId.RINKEBY:
            return exports.DAI_RINKEBY_1;
        case util_1.ChainId.GÖRLI:
            return exports.DAI_GÖRLI;
        case util_1.ChainId.KOVAN:
            return exports.DAI_KOVAN;
        case util_1.ChainId.OPTIMISM:
            return exports.DAI_OPTIMISM;
        case util_1.ChainId.OPTIMISTIC_KOVAN:
            return exports.DAI_OPTIMISTIC_KOVAN;
        case util_1.ChainId.ARBITRUM_ONE:
            return exports.DAI_ARBITRUM;
        case util_1.ChainId.ARBITRUM_RINKEBY:
            return exports.DAI_ARBITRUM_RINKEBY;
        case util_1.ChainId.ARBITRUM_GOERLI:
            return exports.DAI_ARBITRUM_GOERLI;
        case util_1.ChainId.POLYGON:
            return exports.DAI_POLYGON;
        case util_1.ChainId.POLYGON_MUMBAI:
            return exports.DAI_POLYGON_MUMBAI;
        case util_1.ChainId.CELO:
            return exports.DAI_CELO;
        case util_1.ChainId.CELO_ALFAJORES:
            return exports.DAI_CELO_ALFAJORES;
        case util_1.ChainId.MOONBEAM:
            return exports.DAI_MOONBEAM;
        case util_1.ChainId.AVALANCHE_FUJI:
            return exports.DAI_AVALANCHE_FUJI;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.DAI_ON = DAI_ON;
const USDT_ON = (chainId) => {
    switch (chainId) {
        case util_1.ChainId.MAINNET:
            return exports.USDT_MAINNET;
        case util_1.ChainId.ROPSTEN:
            return exports.USDT_ROPSTEN;
        case util_1.ChainId.RINKEBY:
            return exports.USDT_RINKEBY;
        case util_1.ChainId.GÖRLI:
            return exports.USDT_GÖRLI;
        case util_1.ChainId.KOVAN:
            return exports.USDT_KOVAN;
        case util_1.ChainId.OPTIMISM:
            return exports.USDT_OPTIMISM;
        case util_1.ChainId.OPTIMISTIC_KOVAN:
            return exports.USDT_OPTIMISTIC_KOVAN;
        case util_1.ChainId.ARBITRUM_ONE:
            return exports.USDT_ARBITRUM;
        case util_1.ChainId.ARBITRUM_RINKEBY:
            return exports.USDT_ARBITRUM_RINKEBY;
        case util_1.ChainId.AVALANCHE_FUJI:
            return exports.USDT_AVALANCHE_FUJI;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.USDT_ON = USDT_ON;
const USDC_ON = (chainId) => {
    switch (chainId) {
        case util_1.ChainId.MAINNET:
            return exports.USDC_MAINNET;
        case util_1.ChainId.ROPSTEN:
            return exports.USDC_ROPSTEN;
        case util_1.ChainId.RINKEBY:
            return exports.USDC_RINKEBY;
        case util_1.ChainId.GÖRLI:
            return exports.USDC_GÖRLI;
        case util_1.ChainId.KOVAN:
            return exports.USDC_KOVAN;
        case util_1.ChainId.OPTIMISM:
            return exports.USDC_OPTIMISM;
        case util_1.ChainId.OPTIMISTIC_KOVAN:
            return exports.USDC_OPTIMISTIC_KOVAN;
        case util_1.ChainId.ARBITRUM_ONE:
            return exports.USDC_ARBITRUM;
        case util_1.ChainId.ARBITRUM_RINKEBY:
            return exports.USDC_ARBITRUM_RINKEBY;
        case util_1.ChainId.ARBITRUM_GOERLI:
            return exports.USDC_ARBITRUM_GOERLI;
        case util_1.ChainId.POLYGON:
            return exports.USDC_POLYGON;
        case util_1.ChainId.POLYGON_MUMBAI:
            return exports.USDC_POLYGON_MUMBAI;
        case util_1.ChainId.GNOSIS:
            return exports.USDC_ETHEREUM_GNOSIS;
        case util_1.ChainId.MOONBEAM:
            return exports.USDC_MOONBEAM;
        case util_1.ChainId.AVALANCHE_FUJI:
            return exports.USDC_AVALANCHE_FUJI;
        default:
            throw new Error(`Chain id: ${chainId} not supported`);
    }
};
exports.USDC_ON = USDC_ON;
const WNATIVE_ON = (chainId) => {
    return util_1.WRAPPED_NATIVE_CURRENCY[chainId];
};
exports.WNATIVE_ON = WNATIVE_ON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3Rva2VuLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxnREFBMEM7QUFDMUMsb0RBQXVCO0FBRXZCLDJGQUF3RjtBQUN4RixrQ0FBZ0U7QUErQmhFLG9FQUFvRTtBQUN2RCxRQUFBLFlBQVksR0FBRyxJQUFJLGdCQUFLLENBQ25DLGNBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sUUFBUSxDQUNULENBQUM7QUFDVyxRQUFBLFlBQVksR0FBRyxJQUFJLGdCQUFLLENBQ25DLGNBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sWUFBWSxDQUNiLENBQUM7QUFDVyxRQUFBLFlBQVksR0FBRyxJQUFJLGdCQUFLLENBQ25DLGNBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLENBQUMsRUFDRCxNQUFNLEVBQ04sYUFBYSxDQUNkLENBQUM7QUFDVyxRQUFBLFdBQVcsR0FBRyxJQUFJLGdCQUFLLENBQ2xDLGNBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCLENBQUM7QUFDVyxRQUFBLFdBQVcsR0FBRyxJQUFJLGdCQUFLLENBQ2xDLGNBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsU0FBUyxDQUNWLENBQUM7QUFDVyxRQUFBLFdBQVcsR0FBRyxJQUFJLGdCQUFLLENBQ2xDLGNBQU8sQ0FBQyxPQUFPLEVBQ2YsNENBQTRDLEVBQzVDLEVBQUUsRUFDRixLQUFLLEVBQ0wsU0FBUyxDQUNWLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxJQUFJLGdCQUFLLENBQ25DLGNBQU8sQ0FBQyxPQUFPLEVBQ2YsNENB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