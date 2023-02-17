import { Token } from '@uniswap/sdk-core';
import { FACTORY_ADDRESS } from '@uniswap/v3-sdk';
import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
const CELO_V3_CORE_FACTORY_ADDRESSES = '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc';
const CELO_QUOTER_ADDRESSES = '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8';
const CELO_MULTICALL_ADDRESS = '0x633987602DE5C4F337e3DbF265303A1080324204';
const ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES = '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6';
const ARBITRUM_GOERLI_QUOTER_ADDRESSES = '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA';
const ARBITRUM_GOERLI_MULTICALL_ADDRESS = '0x8260CB40247290317a4c062F3542622367F206Ee';
const AVAX_FUJI_MULTICALL_ADDRESS = '0x13cCA6a0DcDd3abAF9F28994B7d51DEE964D04B4';
const AVAX_FUJI_QUOTER_ADDRESSES = '0x1710485376231218a789C897cafB35a56399E0Ff';
const AVAX_FUJI_V3_CORE_FACTORY_ADDRESSES = '0xF14C6250F1BA13FC0Df3ec40cD4c053D296Fc74F';
export const V3_CORE_FACTORY_ADDRESSES = {
    ...constructSameAddressMap(FACTORY_ADDRESS),
    [ChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.AVALANCHE_FUJI]: AVAX_FUJI_V3_CORE_FACTORY_ADDRESSES
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const QUOTER_V2_ADDRESSES = {
    ...constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e'),
    [ChainId.CELO]: CELO_QUOTER_ADDRESSES,
    [ChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES,
    [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_QUOTER_ADDRESSES,
    [ChainId.AVALANCHE_FUJI]: AVAX_FUJI_QUOTER_ADDRESSES,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const MIXED_ROUTE_QUOTER_V1_ADDRESSES = {
    [ChainId.MAINNET]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [ChainId.RINKEBY]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [ChainId.ROPSTEN]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
    [ChainId.GÖRLI]: '0xBa60b6e6fF25488308789E6e0A65D838be34194e',
};
export const UNISWAP_MULTICALL_ADDRESSES = {
    ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
    [ChainId.CELO]: CELO_MULTICALL_ADDRESS,
    [ChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS,
    [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_MULTICALL_ADDRESS,
    [ChainId.AVALANCHE_FUJI]: AVAX_FUJI_MULTICALL_ADDRESS,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0xbfd8137f7d1516D3ea5cA83523914859ec47F573';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
export const SWAP_ROUTER_02_ADDRESS = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
export const V3_MIGRATOR_ADDRESS = '0xA5644E29708357803b5A882D272c41cC0dF92B34';
export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
export function constructSameAddressMap(address, additionalNetworks = []) {
    return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(additionalNetworks).reduce((memo, chainId) => {
        memo[chainId] = address;
        return memo;
    }, {});
}
export const WETH9 = {
    [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.KOVAN]: new Token(ChainId.KOVAN, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISTIC_KOVAN]: new Token(ChainId.OPTIMISTIC_KOVAN, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_ONE]: new Token(ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_RINKEBY]: new Token(ChainId.ARBITRUM_RINKEBY, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_GOERLI]: new Token(ChainId.ARBITRUM_GOERLI, '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.AVALANCHE_FUJI]: new Token(ChainId.AVALANCHE_FUJI, '0xB767287A7143759f294CfB7b1Adbca1140F3de71', 18, 'WETH', 'Wrapped Ether'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6RSxNQUFNLDhCQUE4QixHQUNsQyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLHFCQUFxQixHQUFHLDRDQUE0QyxDQUFDO0FBQzNFLE1BQU0sc0JBQXNCLEdBQUcsNENBQTRDLENBQUM7QUFFNUUsTUFBTSx5Q0FBeUMsR0FDN0MsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxnQ0FBZ0MsR0FDcEMsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxpQ0FBaUMsR0FDckMsNENBQTRDLENBQUM7QUFFL0MsTUFBTSwyQkFBMkIsR0FBRyw0Q0FBNEMsQ0FBQztBQUNqRixNQUFNLDBCQUEwQixHQUFHLDRDQUE0QyxDQUFDO0FBQ2hGLE1BQU0sbUNBQW1DLEdBQUcsNENBQTRDLENBQUE7QUFFeEYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWU7SUFDbkQsR0FBRyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsOEJBQThCO0lBQzlDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLDhCQUE4QjtJQUV4RCxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSx5Q0FBeUM7SUFDcEUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsbUNBQW1DO0lBQzdELG1EQUFtRDtDQUNwRCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWU7SUFDN0MsR0FBRyx1QkFBdUIsQ0FBQyw0Q0FBNEMs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