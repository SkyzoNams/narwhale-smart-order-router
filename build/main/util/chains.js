"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nativeOnChain = exports.ExtendedEther = exports.WRAPPED_NATIVE_CURRENCY = exports.ID_TO_PROVIDER = exports.CHAIN_IDS_LIST = exports.ID_TO_NETWORK_NAME = exports.NATIVE_CURRENCY = exports.NATIVE_NAMES_BY_ID = exports.NativeCurrencyName = exports.ChainName = exports.ID_TO_CHAIN_ID = exports.NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = exports.HAS_L1_FEE = exports.V2_SUPPORTED = exports.SUPPORTED_CHAINS = exports.ChainId = void 0;
const sdk_core_1 = require("@uniswap/sdk-core");
var ChainId;
(function (ChainId) {
    ChainId[ChainId["MAINNET"] = 1] = "MAINNET";
    ChainId[ChainId["ROPSTEN"] = 3] = "ROPSTEN";
    ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
    ChainId[ChainId["G\u00D6RLI"] = 5] = "G\u00D6RLI";
    ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
    ChainId[ChainId["OPTIMISM"] = 10] = "OPTIMISM";
    ChainId[ChainId["OPTIMISTIC_KOVAN"] = 69] = "OPTIMISTIC_KOVAN";
    ChainId[ChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
    ChainId[ChainId["ARBITRUM_RINKEBY"] = 421611] = "ARBITRUM_RINKEBY";
    ChainId[ChainId["ARBITRUM_GOERLI"] = 421613] = "ARBITRUM_GOERLI";
    ChainId[ChainId["POLYGON"] = 137] = "POLYGON";
    ChainId[ChainId["POLYGON_MUMBAI"] = 80001] = "POLYGON_MUMBAI";
    ChainId[ChainId["CELO"] = 42220] = "CELO";
    ChainId[ChainId["CELO_ALFAJORES"] = 44787] = "CELO_ALFAJORES";
    ChainId[ChainId["GNOSIS"] = 100] = "GNOSIS";
    ChainId[ChainId["MOONBEAM"] = 1284] = "MOONBEAM";
    ChainId[ChainId["AVALANCHE"] = 43114] = "AVALANCHE";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
// WIP: Gnosis, Moonbeam
exports.SUPPORTED_CHAINS = [
    ChainId.MAINNET,
    ChainId.RINKEBY,
    ChainId.ROPSTEN,
    ChainId.KOVAN,
    ChainId.OPTIMISM,
    ChainId.OPTIMISTIC_KOVAN,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
    ChainId.ARBITRUM_GOERLI,
    ChainId.POLYGON,
    ChainId.POLYGON_MUMBAI,
    ChainId.GÖRLI,
    ChainId.CELO_ALFAJORES,
    ChainId.CELO,
    ChainId.AVALANCHE
    // Gnosis and Moonbeam don't yet have contracts deployed yet
];
exports.V2_SUPPORTED = [
    ChainId.MAINNET,
    ChainId.KOVAN,
    ChainId.GÖRLI,
    ChainId.RINKEBY,
    ChainId.ROPSTEN,
];
exports.HAS_L1_FEE = [
    ChainId.OPTIMISM,
    ChainId.OPTIMISTIC_KOVAN,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
    ChainId.ARBITRUM_GOERLI,
];
exports.NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = [
    ChainId.MAINNET,
    ChainId.ROPSTEN,
    ChainId.RINKEBY,
    ChainId.GÖRLI,
    ChainId.KOVAN,
    ChainId.OPTIMISM,
    ChainId.OPTIMISTIC_KOVAN,
    ChainId.ARBITRUM_ONE,
    ChainId.ARBITRUM_RINKEBY,
    ChainId.POLYGON,
    ChainId.POLYGON_MUMBAI,
];
const ID_TO_CHAIN_ID = (id) => {
    switch (id) {
        case 1:
            return ChainId.MAINNET;
        case 3:
            return ChainId.ROPSTEN;
        case 4:
            return ChainId.RINKEBY;
        case 5:
            return ChainId.GÖRLI;
        case 42:
            return ChainId.KOVAN;
        case 10:
            return ChainId.OPTIMISM;
        case 69:
            return ChainId.OPTIMISTIC_KOVAN;
        case 42161:
            return ChainId.ARBITRUM_ONE;
        case 421611:
            return ChainId.ARBITRUM_RINKEBY;
        case 421613:
            return ChainId.ARBITRUM_GOERLI;
        case 137:
            return ChainId.POLYGON;
        case 80001:
            return ChainId.POLYGON_MUMBAI;
        case 42220:
            return ChainId.CELO;
        case 44787:
            return ChainId.CELO_ALFAJORES;
        case 100:
            return ChainId.GNOSIS;
        case 1284:
            return ChainId.MOONBEAM;
        case 43114:
            return ChainId.AVALANCHE;
        default:
            throw new Error(`Unknown chain id: ${id}`);
    }
};
exports.ID_TO_CHAIN_ID = ID_TO_CHAIN_ID;
var ChainName;
(function (ChainName) {
    ChainName["MAINNET"] = "mainnet";
    ChainName["ROPSTEN"] = "ropsten";
    ChainName["RINKEBY"] = "rinkeby";
    ChainName["G\u00D6RLI"] = "goerli";
    ChainName["KOVAN"] = "kovan";
    ChainName["OPTIMISM"] = "optimism-mainnet";
    ChainName["OPTIMISTIC_KOVAN"] = "optimism-kovan";
    ChainName["ARBITRUM_ONE"] = "arbitrum-mainnet";
    ChainName["ARBITRUM_RINKEBY"] = "arbitrum-rinkeby";
    ChainName["ARBITRUM_GOERLI"] = "arbitrum-goerli";
    ChainName["POLYGON"] = "polygon-mainnet";
    ChainName["POLYGON_MUMBAI"] = "polygon-mumbai";
    ChainName["CELO"] = "celo-mainnet";
    ChainName["CELO_ALFAJORES"] = "celo-alfajores";
    ChainName["GNOSIS"] = "gnosis-mainnet";
    ChainName["MOONBEAM"] = "moonbeam-mainnet";
    ChainName["AVALANCHE"] = "avalanche";
})(ChainName = exports.ChainName || (exports.ChainName = {}));
var NativeCurrencyName;
(function (NativeCurrencyName) {
    // Strings match input for CLI
    NativeCurrencyName["ETHER"] = "ETH";
    NativeCurrencyName["MATIC"] = "MATIC";
    NativeCurrencyName["CELO"] = "CELO";
    NativeCurrencyName["GNOSIS"] = "XDAI";
    NativeCurrencyName["MOONBEAM"] = "GLMR";
    NativeCurrencyName["AVALANCHE"] = "AVAX";
})(NativeCurrencyName = exports.NativeCurrencyName || (exports.NativeCurrencyName = {}));
exports.NATIVE_NAMES_BY_ID = {
    [ChainId.MAINNET]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.RINKEBY]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.GÖRLI]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.KOVAN]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.ROPSTEN]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.OPTIMISM]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.OPTIMISTIC_KOVAN]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.ARBITRUM_ONE]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.ARBITRUM_RINKEBY]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.ARBITRUM_GOERLI]: [
        'ETH',
        'ETHER',
        '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    ],
    [ChainId.POLYGON]: ['MATIC', '0x0000000000000000000000000000000000001010'],
    [ChainId.POLYGON_MUMBAI]: [
        'MATIC',
        '0x0000000000000000000000000000000000001010',
    ],
    [ChainId.CELO]: ['CELO'],
    [ChainId.CELO_ALFAJORES]: ['CELO'],
    [ChainId.GNOSIS]: ['XDAI'],
    [ChainId.MOONBEAM]: ['GLMR'],
    [ChainId.AVALANCHE]: ['AVAX']
};
exports.NATIVE_CURRENCY = {
    [ChainId.MAINNET]: NativeCurrencyName.ETHER,
    [ChainId.ROPSTEN]: NativeCurrencyName.ETHER,
    [ChainId.RINKEBY]: NativeCurrencyName.ETHER,
    [ChainId.GÖRLI]: NativeCurrencyName.ETHER,
    [ChainId.KOVAN]: NativeCurrencyName.ETHER,
    [ChainId.OPTIMISM]: NativeCurrencyName.ETHER,
    [ChainId.OPTIMISTIC_KOVAN]: NativeCurrencyName.ETHER,
    [ChainId.ARBITRUM_ONE]: NativeCurrencyName.ETHER,
    [ChainId.ARBITRUM_RINKEBY]: NativeCurrencyName.ETHER,
    [ChainId.ARBITRUM_GOERLI]: NativeCurrencyName.ETHER,
    [ChainId.POLYGON]: NativeCurrencyName.MATIC,
    [ChainId.POLYGON_MUMBAI]: NativeCurrencyName.MATIC,
    [ChainId.CELO]: NativeCurrencyName.CELO,
    [ChainId.CELO_ALFAJORES]: NativeCurrencyName.CELO,
    [ChainId.GNOSIS]: NativeCurrencyName.GNOSIS,
    [ChainId.MOONBEAM]: NativeCurrencyName.MOONBEAM,
    [ChainId.AVALANCHE]: NativeCurrencyName.AVALANCHE
};
const ID_TO_NETWORK_NAME = (id) => {
    switch (id) {
        case 1:
            return ChainName.MAINNET;
        case 3:
            return ChainName.ROPSTEN;
        case 4:
            return ChainName.RINKEBY;
        case 5:
            return ChainName.GÖRLI;
        case 42:
            return ChainName.KOVAN;
        case 10:
            return ChainName.OPTIMISM;
        case 69:
            return ChainName.OPTIMISTIC_KOVAN;
        case 42161:
            return ChainName.ARBITRUM_ONE;
        case 421611:
            return ChainName.ARBITRUM_RINKEBY;
        case 421613:
            return ChainName.ARBITRUM_GOERLI;
        case 137:
            return ChainName.POLYGON;
        case 80001:
            return ChainName.POLYGON_MUMBAI;
        case 42220:
            return ChainName.CELO;
        case 44787:
            return ChainName.CELO_ALFAJORES;
        case 100:
            return ChainName.GNOSIS;
        case 1284:
            return ChainName.MOONBEAM;
        case 43114:
            return ChainName.AVALANCHE;
        default:
            throw new Error(`Unknown chain id: ${id}`);
    }
};
exports.ID_TO_NETWORK_NAME = ID_TO_NETWORK_NAME;
exports.CHAIN_IDS_LIST = Object.values(ChainId).map((c) => c.toString());
const ID_TO_PROVIDER = (id) => {
    switch (id) {
        case ChainId.MAINNET:
            return process.env.JSON_RPC_PROVIDER;
        case ChainId.ROPSTEN:
            return process.env.JSON_RPC_PROVIDER_ROPSTEN;
        case ChainId.RINKEBY:
            return process.env.JSON_RPC_PROVIDER_RINKEBY;
        case ChainId.GÖRLI:
            return process.env.JSON_RPC_PROVIDER_GORLI;
        case ChainId.KOVAN:
            return process.env.JSON_RPC_PROVIDER_KOVAN;
        case ChainId.OPTIMISM:
            return process.env.JSON_RPC_PROVIDER_OPTIMISM;
        case ChainId.OPTIMISTIC_KOVAN:
            return process.env.JSON_RPC_PROVIDER_OPTIMISTIC_KOVAN;
        case ChainId.ARBITRUM_ONE:
            return process.env.JSON_RPC_PROVIDER_ARBITRUM_ONE;
        case ChainId.ARBITRUM_RINKEBY:
            return process.env.JSON_RPC_PROVIDER_ARBITRUM_RINKEBY;
        case ChainId.ARBITRUM_GOERLI:
            return process.env.JSON_RPC_PROVIDER_ARBITRUM_GOERLI;
        case ChainId.POLYGON:
            return process.env.JSON_RPC_PROVIDER_POLYGON;
        case ChainId.POLYGON_MUMBAI:
            return process.env.JSON_RPC_PROVIDER_POLYGON_MUMBAI;
        case ChainId.CELO:
            return process.env.JSON_RPC_PROVIDER_CELO;
        case ChainId.CELO_ALFAJORES:
            return process.env.JSON_RPC_PROVIDER_CELO_ALFAJORES;
        case ChainId.AVALANCHE:
            return process.env.JSON_RPC_PROVIDER_AVALANCHE_FUJI;
        default:
            throw new Error(`Chain id: ${id} not supported`);
    }
};
exports.ID_TO_PROVIDER = ID_TO_PROVIDER;
exports.WRAPPED_NATIVE_CURRENCY = {
    [ChainId.MAINNET]: new sdk_core_1.Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ROPSTEN]: new sdk_core_1.Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.RINKEBY]: new sdk_core_1.Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.GÖRLI]: new sdk_core_1.Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.KOVAN]: new sdk_core_1.Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM]: new sdk_core_1.Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISTIC_KOVAN]: new sdk_core_1.Token(ChainId.OPTIMISTIC_KOVAN, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_ONE]: new sdk_core_1.Token(ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_RINKEBY]: new sdk_core_1.Token(ChainId.ARBITRUM_RINKEBY, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_GOERLI]: new sdk_core_1.Token(ChainId.ARBITRUM_GOERLI, '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.POLYGON]: new sdk_core_1.Token(ChainId.POLYGON, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC'),
    [ChainId.POLYGON_MUMBAI]: new sdk_core_1.Token(ChainId.POLYGON_MUMBAI, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889', 18, 'WMATIC', 'Wrapped MATIC'),
    // The Celo native currency 'CELO' implements the erc-20 token standard
    [ChainId.CELO]: new sdk_core_1.Token(ChainId.CELO, '0x471EcE3750Da237f93B8E339c536989b8978a438', 18, 'CELO', 'Celo native asset'),
    [ChainId.CELO_ALFAJORES]: new sdk_core_1.Token(ChainId.CELO_ALFAJORES, '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9', 18, 'CELO', 'Celo native asset'),
    [ChainId.GNOSIS]: new sdk_core_1.Token(ChainId.GNOSIS, '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d', 18, 'WXDAI', 'Wrapped XDAI on Gnosis'),
    [ChainId.MOONBEAM]: new sdk_core_1.Token(ChainId.MOONBEAM, '0xAcc15dC74880C9944775448304B263D191c6077F', 18, 'WGLMR', 'Wrapped GLMR'),
    [ChainId.AVALANCHE]: new sdk_core_1.Token(ChainId.AVALANCHE, '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18, 'WAVAX', 'Wrapped AVAX'),
};
function isMatic(chainId) {
    return chainId === ChainId.POLYGON_MUMBAI || chainId === ChainId.POLYGON;
}
class MaticNativeCurrency extends sdk_core_1.NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isMatic(this.chainId))
            throw new Error('Not matic');
        const nativeCurrency = exports.WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isMatic(chainId))
            throw new Error('Not matic');
        super(chainId, 18, 'MATIC', 'Polygon Matic');
    }
}
function isCelo(chainId) {
    return chainId === ChainId.CELO_ALFAJORES || chainId === ChainId.CELO;
}
class CeloNativeCurrency extends sdk_core_1.NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isCelo(this.chainId))
            throw new Error('Not celo');
        const nativeCurrency = exports.WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isCelo(chainId))
            throw new Error('Not celo');
        super(chainId, 18, 'CELO', 'Celo');
    }
}
function isGnosis(chainId) {
    return chainId === ChainId.GNOSIS;
}
class GnosisNativeCurrency extends sdk_core_1.NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isGnosis(this.chainId))
            throw new Error('Not gnosis');
        const nativeCurrency = exports.WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isGnosis(chainId))
            throw new Error('Not gnosis');
        super(chainId, 18, 'XDAI', 'xDai');
    }
}
function isMoonbeam(chainId) {
    return chainId === ChainId.MOONBEAM;
}
class MoonbeamNativeCurrency extends sdk_core_1.NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isMoonbeam(this.chainId))
            throw new Error('Not moonbeam');
        const nativeCurrency = exports.WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isMoonbeam(chainId))
            throw new Error('Not moonbeam');
        super(chainId, 18, 'GLMR', 'Glimmer');
    }
}
function isAvalancheFuji(chainId) {
    return chainId === ChainId.AVALANCHE;
}
class AvalancheNativeCurrency extends sdk_core_1.NativeCurrency {
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped() {
        if (!isAvalancheFuji(this.chainId))
            throw new Error('Not moonbeam');
        const nativeCurrency = exports.WRAPPED_NATIVE_CURRENCY[this.chainId];
        if (nativeCurrency) {
            return nativeCurrency;
        }
        throw new Error(`Does not support this chain ${this.chainId}`);
    }
    constructor(chainId) {
        if (!isAvalancheFuji(chainId))
            throw new Error('Not avalanche');
        super(chainId, 18, 'AVAX', 'Avalanche');
    }
}
class ExtendedEther extends sdk_core_1.Ether {
    get wrapped() {
        if (this.chainId in exports.WRAPPED_NATIVE_CURRENCY)
            return exports.WRAPPED_NATIVE_CURRENCY[this.chainId];
        throw new Error('Unsupported chain ID');
    }
    static onChain(chainId) {
        var _a;
        return ((_a = this._cachedExtendedEther[chainId]) !== null && _a !== void 0 ? _a : (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId)));
    }
}
exports.ExtendedEther = ExtendedEther;
ExtendedEther._cachedExtendedEther = {};
const cachedNativeCurrency = {};
function nativeOnChain(chainId) {
    if (cachedNativeCurrency[chainId] != undefined)
        return cachedNativeCurrency[chainId];
    if (isMatic(chainId))
        cachedNativeCurrency[chainId] = new MaticNativeCurrency(chainId);
    else if (isCelo(chainId))
        cachedNativeCurrency[chainId] = new CeloNativeCurrency(chainId);
    else if (isGnosis(chainId))
        cachedNativeCurrency[chainId] = new GnosisNativeCurrency(chainId);
    else if (isMoonbeam(chainId))
        cachedNativeCurrency[chainId] = new MoonbeamNativeCurrency(chainId);
    else if (isAvalancheFuji(chainId))
        cachedNativeCurrency[chainId] = new AvalancheNativeCurrency(chainId);
    else
        cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);
    return cachedNativeCurrency[chainId];
}
exports.nativeOnChain = nativeOnChain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvY2hhaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdEQUEyRTtBQUUzRSxJQUFZLE9Ba0JYO0FBbEJELFdBQVksT0FBTztJQUNqQiwyQ0FBVyxDQUFBO0lBQ1gsMkNBQVcsQ0FBQTtJQUNYLDJDQUFXLENBQUE7SUFDWCxpREFBUyxDQUFBO0lBQ1Qsd0NBQVUsQ0FBQTtJQUNWLDhDQUFhLENBQUE7SUFDYiw4REFBcUIsQ0FBQTtJQUNyQix5REFBb0IsQ0FBQTtJQUNwQixrRUFBeUIsQ0FBQTtJQUN6QixnRUFBd0IsQ0FBQTtJQUN4Qiw2Q0FBYSxDQUFBO0lBQ2IsNkRBQXNCLENBQUE7SUFDdEIseUNBQVksQ0FBQTtJQUNaLDZEQUFzQixDQUFBO0lBQ3RCLDJDQUFZLENBQUE7SUFDWixnREFBZSxDQUFBO0lBQ2YsbURBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQWxCVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFrQmxCO0FBRUQsd0JBQXdCO0FBQ1gsUUFBQSxnQkFBZ0IsR0FBYztJQUN6QyxPQUFPLENBQUMsT0FBTztJQUNmLE9BQU8sQ0FBQyxPQUFPO0lBQ2YsT0FBTyxDQUFDLE9BQU87SUFDZixPQUFPLENBQUMsS0FBSztJQUNiLE9BQU8sQ0FBQyxRQUFRO0lBQ2hCLE9BQU8sQ0FBQyxnQkFBZ0I7SUFDeEIsT0FBTyxDQUFDLFlBQVk7SUFDcEIsT0FBTyxDQUFDLGdCQUFnQjtJQUN4QixPQUFPLENBQUMsZUFBZTtJQUN2QixPQUFPLENBQUMsT0FBTztJQUNmLE9BQU8sQ0FBQyxjQUFjO0lBQ3RCLE9BQU8sQ0FBQyxLQUFLO0lBQ2IsT0FBTyxDQUFDLGNBQWM7SUFDdEIsT0FBTyxDQUFDLElBQUk7SUFDWixPQUFPLENBQUMsU0FBUztJQUNqQiw0REFBNEQ7Q0FDN0QsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHO0lBQzFCLE9BQU8sQ0FB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