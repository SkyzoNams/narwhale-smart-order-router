import { DAI_MAINNET, USDC_MAINNET, USDT_MAINNET, WBTC_MAINNET, WMATIC_POLYGON, WMATIC_POLYGON_MUMBAI } from '../../providers/token-provider';
import { ChainId, WRAPPED_NATIVE_CURRENCY } from '../../util/chains';
export const BASES_TO_CHECK_TRADES_AGAINST = (_tokenProvider) => {
    return {
        [ChainId.MAINNET]: [
            WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
            DAI_MAINNET,
            USDC_MAINNET,
            USDT_MAINNET,
            WBTC_MAINNET,
        ],
        [ChainId.ROPSTEN]: [WRAPPED_NATIVE_CURRENCY[ChainId.ROPSTEN]],
        [ChainId.RINKEBY]: [WRAPPED_NATIVE_CURRENCY[ChainId.RINKEBY]],
        [ChainId.GÖRLI]: [WRAPPED_NATIVE_CURRENCY[ChainId.GÖRLI]],
        [ChainId.KOVAN]: [WRAPPED_NATIVE_CURRENCY[ChainId.KOVAN]],
        [ChainId.OPTIMISM]: [WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM]],
        [ChainId.OPTIMISTIC_KOVAN]: [
            WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISTIC_KOVAN],
        ],
        [ChainId.ARBITRUM_ONE]: [WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE]],
        [ChainId.ARBITRUM_RINKEBY]: [
            WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_RINKEBY],
        ],
        [ChainId.ARBITRUM_GOERLI]: [
            WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_GOERLI],
        ],
        [ChainId.POLYGON]: [WMATIC_POLYGON],
        [ChainId.POLYGON_MUMBAI]: [WMATIC_POLYGON_MUMBAI],
        [ChainId.CELO]: [WRAPPED_NATIVE_CURRENCY[ChainId.CELO]],
        [ChainId.CELO_ALFAJORES]: [WRAPPED_NATIVE_CURRENCY[ChainId.CELO_ALFAJORES]],
        [ChainId.GNOSIS]: [WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS]],
        [ChainId.MOONBEAM]: [WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM]],
        [ChainId.AVALANCHE_FUJI]: [WRAPPED_NATIVE_CURRENCY[ChainId.AVALANCHE_FUJI]],
    };
};
const getBasePairByAddress = async (tokenProvider, _chainId, fromAddress, toAddress) => {
    const accessor = await tokenProvider.getTokens([toAddress]);
    const toToken = accessor.getTokenByAddress(toAddress);
    if (!toToken)
        return {};
    return {
        [fromAddress]: [toToken],
    };
};
export const ADDITIONAL_BASES = async (tokenProvider) => {
    return {
        [ChainId.MAINNET]: {
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x561a4717537ff4AF5c687328c0f7E90a319705C0', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', '0x956F47F50A910163D8BF957Cf5846D573E7f87CA')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x853d955acef822db058eb8505911ed77f175b99e', '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0', '0x853d955acef822db058eb8505911ed77f175b99e')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d', '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599')),
        },
    };
};
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = async (tokenProvider) => {
    return {
        [ChainId.MAINNET]: {
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xd46ba6d942050d489dbd938a2c909a5d5039a161', DAI_MAINNET.address)),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xd46ba6d942050d489dbd938a2c909a5d5039a161', WRAPPED_NATIVE_CURRENCY[1].address)),
        },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVycy9sZWdhY3ktcm91dGVyL2Jhc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxXQUFXLEVBRVgsWUFBWSxFQUNaLFlBQVksRUFDWixZQUFZLEVBQ1osY0FBYyxFQUNkLHFCQUFxQixFQUV0QixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1yRSxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRyxDQUMzQyxjQUE4QixFQUNkLEVBQUU7SUFDbEIsT0FBTztRQUNMLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUU7WUFDekMsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtTQUNiO1FBQ0QsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUM7UUFDOUQsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUM7UUFDOUQsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDMUQsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDMUQsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDaEUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMxQix1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