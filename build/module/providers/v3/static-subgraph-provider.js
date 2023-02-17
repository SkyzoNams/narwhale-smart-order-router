import { FeeAmount, Pool } from '@uniswap/v3-sdk';
import JSBI from 'jsbi';
import _ from 'lodash';
import { unparseFeeAmount } from '../../util/amounts';
import { ChainId, WRAPPED_NATIVE_CURRENCY } from '../../util/chains';
import { log } from '../../util/log';
import { CELO, CELO_ALFAJORES, CEUR_CELO, CEUR_CELO_ALFAJORES, CUSD_CELO, CUSD_CELO_ALFAJORES, DAI_ARBITRUM, DAI_ARBITRUM_RINKEBY, DAI_CELO, DAI_CELO_ALFAJORES, DAI_GÖRLI, DAI_KOVAN, DAI_MAINNET, DAI_MOONBEAM, DAI_OPTIMISM, DAI_OPTIMISTIC_KOVAN, DAI_POLYGON_MUMBAI, DAI_RINKEBY_1, DAI_RINKEBY_2, DAI_ROPSTEN, UNI_ARBITRUM_RINKEBY, USDC_ARBITRUM, USDC_ARBITRUM_GOERLI, USDC_ETHEREUM_GNOSIS, USDC_GÖRLI, USDC_KOVAN, USDC_MAINNET, USDC_MOONBEAM, USDC_OPTIMISM, USDC_OPTIMISTIC_KOVAN, USDC_POLYGON, USDC_RINKEBY, USDC_ROPSTEN, USDT_ARBITRUM, USDT_ARBITRUM_RINKEBY, USDT_GÖRLI, USDT_KOVAN, USDT_MAINNET, USDT_OPTIMISM, USDT_OPTIMISTIC_KOVAN, USDT_RINKEBY, USDT_ROPSTEN, WBTC_ARBITRUM, WBTC_GNOSIS, WBTC_GÖRLI, WBTC_KOVAN, WBTC_MAINNET, WBTC_MOONBEAM, WBTC_OPTIMISM, WBTC_OPTIMISTIC_KOVAN, WETH_POLYGON, WMATIC_POLYGON, WMATIC_POLYGON_MUMBAI, WXDAI_GNOSIS, DAI_AVALANCHE_FUJI, TUSD_AVALANCHE_FUJI, WBTC_AVALANCHE_FUJI, MKR_AVALANCHE_FUJI, USDC_AVALANCHE_FUJI, WETH_AVALANCHE_FUJI } from '../token-provider';
const BASES_TO_CHECK_TRADES_AGAINST = {
    [ChainId.MAINNET]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
        DAI_MAINNET,
        USDC_MAINNET,
        USDT_MAINNET,
        WBTC_MAINNET,
    ],
    [ChainId.ROPSTEN]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.ROPSTEN],
        DAI_ROPSTEN,
        USDT_ROPSTEN,
        USDC_ROPSTEN,
    ],
    [ChainId.RINKEBY]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.RINKEBY],
        DAI_RINKEBY_1,
        DAI_RINKEBY_2,
        USDC_RINKEBY,
        USDT_RINKEBY,
    ],
    [ChainId.GÖRLI]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.GÖRLI],
        USDT_GÖRLI,
        USDC_GÖRLI,
        WBTC_GÖRLI,
        DAI_GÖRLI,
    ],
    [ChainId.KOVAN]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.KOVAN],
        USDC_KOVAN,
        USDT_KOVAN,
        WBTC_KOVAN,
        DAI_KOVAN,
    ],
    [ChainId.OPTIMISM]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM],
        USDC_OPTIMISM,
        DAI_OPTIMISM,
        USDT_OPTIMISM,
        WBTC_OPTIMISM,
    ],
    [ChainId.ARBITRUM_ONE]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE],
        WBTC_ARBITRUM,
        DAI_ARBITRUM,
        USDC_ARBITRUM,
        USDT_ARBITRUM,
    ],
    [ChainId.ARBITRUM_RINKEBY]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_RINKEBY],
        DAI_ARBITRUM_RINKEBY,
        UNI_ARBITRUM_RINKEBY,
        USDT_ARBITRUM_RINKEBY,
    ],
    [ChainId.ARBITRUM_GOERLI]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_GOERLI],
        USDC_ARBITRUM_GOERLI,
    ],
    [ChainId.OPTIMISTIC_KOVAN]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISTIC_KOVAN],
        DAI_OPTIMISTIC_KOVAN,
        WBTC_OPTIMISTIC_KOVAN,
        USDT_OPTIMISTIC_KOVAN,
        USDC_OPTIMISTIC_KOVAN,
    ],
    [ChainId.POLYGON]: [USDC_POLYGON, WETH_POLYGON, WMATIC_POLYGON],
    [ChainId.POLYGON_MUMBAI]: [
        DAI_POLYGON_MUMBAI,
        WRAPPED_NATIVE_CURRENCY[ChainId.POLYGON_MUMBAI],
        WMATIC_POLYGON_MUMBAI,
    ],
    [ChainId.CELO]: [CELO, CUSD_CELO, CEUR_CELO, DAI_CELO],
    [ChainId.CELO_ALFAJORES]: [
        CELO_ALFAJORES,
        CUSD_CELO_ALFAJORES,
        CEUR_CELO_ALFAJORES,
        DAI_CELO_ALFAJORES,
    ],
    [ChainId.GNOSIS]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS],
        WBTC_GNOSIS,
        WXDAI_GNOSIS,
        USDC_ETHEREUM_GNOSIS,
    ],
    [ChainId.MOONBEAM]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM],
        DAI_MOONBEAM,
        USDC_MOONBEAM,
        WBTC_MOONBEAM,
    ],
    [ChainId.AVALANCHE_FUJI]: [
        WRAPPED_NATIVE_CURRENCY[ChainId.AVALANCHE_FUJI],
        DAI_AVALANCHE_FUJI,
        TUSD_AVALANCHE_FUJI,
        WBTC_AVALANCHE_FUJI,
        MKR_AVALANCHE_FUJI,
        USDC_AVALANCHE_FUJI,
        WETH_AVALANCHE_FUJI
    ],
};
/**
 * Provider that uses a hardcoded list of V3 pools to generate a list of subgraph pools.
 *
 * Since the pools are hardcoded and the data does not come from the Subgraph, the TVL values
 * are dummys and should not be depended on.
 *
 * Useful for instances where other data sources are unavailable. E.g. Subgraph not available.
 *
 * @export
 * @class StaticV3SubgraphProvider
 */
export class StaticV3SubgraphProvider {
    constructor(chainId, poolProvider) {
        this.chainId = chainId;
        this.poolProvider = poolProvider;
    }
    async getPools(tokenIn, tokenOut) {
        log.info('In static subgraph provider for V3');
        const bases = BASES_TO_CHECK_TRADES_AGAINST[this.chainId];
        const basePairs = _.flatMap(bases, (base) => bases.map((otherBase) => [base, otherBase]));
        if (tokenIn && tokenOut) {
            basePairs.push([tokenIn, tokenOut], ...bases.map((base) => [tokenIn, base]), ...bases.map((base) => [tokenOut, base]));
        }
        const pairs = _(basePairs)
            .filter((tokens) => Boolean(tokens[0] && tokens[1]))
            .filter(([tokenA, tokenB]) => tokenA.address !== tokenB.address && !tokenA.equals(tokenB))
            .flatMap(([tokenA, tokenB]) => {
            return [
                [tokenA, tokenB, FeeAmount.LOWEST],
                [tokenA, tokenB, FeeAmount.LOW],
                [tokenA, tokenB, FeeAmount.MEDIUM],
                [tokenA, tokenB, FeeAmount.HIGH],
            ];
        })
            .value();
        log.info(`V3 Static subgraph provider about to get ${pairs.length} pools on-chain`);
        const poolAccessor = await this.poolProvider.getPools(pairs);
        const pools = poolAccessor.getAllPools();
        const poolAddressSet = new Set();
        const subgraphPools = _(pools)
            .map((pool) => {
            const { token0, token1, fee, liquidity } = pool;
            const poolAddress = Pool.getAddress(pool.token0, pool.token1, pool.fee);
            if (poolAddressSet.has(poolAddress)) {
                return undefined;
            }
            poolAddressSet.add(poolAddress);
            const liquidityNumber = JSBI.toNumber(liquidity);
            return {
                id: poolAddress,
                feeTier: unparseFeeAmount(fee),
                liquidity: liquidity.toString(),
                token0: {
                    id: token0.address,
                },
                token1: {
                    id: token1.address,
                },
                // As a very rough proxy we just use liquidity for TVL.
                tvlETH: liquidityNumber,
                tvlUSD: liquidityNumber,
            };
        })
            .compact()
            .value();
        return subgraphPools;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXN1YmdyYXBoLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy92My9zdGF0aWMtc3ViZ3JhcGgtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLElBQUksTUFBTSxNQUFNLENBQUM7QUFDeEIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixjQUFjLEVBQ2QsU0FBUyxFQUNULG1CQUFtQixFQUNuQixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osWUFBWSxFQUNaLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbEIsYUFBYSxFQUNiLGFBQWEsRUFDYixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsb0JBQW9CLEVBQ3BCLFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixZQUFZLEVBQ1osWUFBWSxFQUNaLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxFQUNiLHFCQUFxQixFQUNyQixZQUFZLEVBQ1osWUFBWSxFQUNaLGFBQWEsRUFDYixX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