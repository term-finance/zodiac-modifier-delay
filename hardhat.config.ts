import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-verify'
import 'hardhat-gas-reporter'

import dotenv from 'dotenv'
import { HttpNetworkUserConfig } from 'hardhat/types'

dotenv.config()

import './tasks/deploy-mastercopies'
import './tasks/deploy-mastercopy'
import './tasks/extract-mastercopy'
import './tasks/verify-mastercopies'
import './tasks/verify-mastercopy'

const {
  INFURA_KEY,
  MNEMONIC,
  ETHERSCAN_API_KEY,
  PK,
  OPTIMISTIC_ETHERSCAN_API_KEY,
  GNOSISSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
  ARBISCAN_API_KEY,
  SNOWTRACE_API_KEY,
  ZKEVM_POLYGONSCAN_API_KEY,
  BASESCAN_API_KEY,
  BSCSCAN_API_KEY,
  CELOSCAN_API_KEY,
  SONICSCAN_API_KEY,
  BERASCAN_API_KEY,
  MANTLESCAN_API_KEY,
  UNISCAN_API_KEY,
} = process.env

const sharedNetworkConfig: HttpNetworkUserConfig = {}
if (PK) {
  sharedNetworkConfig.accounts = [PK]
} else {
  sharedNetworkConfig.accounts = {
    mnemonic:
      MNEMONIC ||
      'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat',
  }
}

export default {
  paths: {
    artifacts: 'build/artifacts',
    cache: 'build/cache',
    sources: 'contracts',
  },
  solidity: {
    compilers: [{ version: '0.8.20' }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      ...sharedNetworkConfig,
      chainId: 1,
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    },
    sepolia: {
      ...sharedNetworkConfig,
      chainId: 11155111,
      url: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
    },
    optimism: {
      ...sharedNetworkConfig,
      chainId: 10,
      url: 'https://mainnet.optimism.io',
    },
    gnosis: {
      ...sharedNetworkConfig,
      chainId: 100,
      url: 'https://rpc.gnosischain.com',
    },
    base: {
      ...sharedNetworkConfig,
      chainId: 8453,
      url: 'https://mainnet.base.org',
    },
    baseSepolia: {
      ...sharedNetworkConfig,
      chainId: 84532,
      url: 'https://sepolia.base.org',
    },
    matic: {
      ...sharedNetworkConfig,
      chainId: 137,
      url: 'https://rpc-mainnet.maticvigil.com',
    },
    arbitrum: {
      ...sharedNetworkConfig,
      chainId: 42161,
      url: 'https://arb1.arbitrum.io/rpc',
    },
    avalanche: {
      ...sharedNetworkConfig,
      chainId: 43114,
      url: 'https://avalanche.drpc.org',
    },
    zkevm: {
      ...sharedNetworkConfig,
      chainId: 1101,
      url: 'https://zkevm-rpc.com',
    },
    bsc: {
      ...sharedNetworkConfig,
      chainId: 56,
      url: 'https://bscrpc.com',
    },
    celo: {
      ...sharedNetworkConfig,
      chainId: 42220,
      url: 'https://celo.drpc.org',
    },
    lisk: {
      ...sharedNetworkConfig,
      chainId: 1135,
      url: 'https://rpc.api.lisk.com',
    },
    'lisk-sepolia': {
      ...sharedNetworkConfig,
      chainId: 4202,
      url: 'https://rpc.sepolia-api.lisk.com',
      gasPrice: 1000000000,
    },
    liskSepolia: {
      ...sharedNetworkConfig,
      chainId: 4202,
      url: 'https://rpc.sepolia-api.lisk.com',
    },
    'bob-sepolia': {
      ...sharedNetworkConfig,
      chainId: 808813,
      url: 'https://bob-sepolia.rpc.gobob.xyz/',
      gasPrice: 1000000000,
    },
    unichain: {
      ...sharedNetworkConfig,
      chainId: 130,
      url: 'https://mainnet.unichain.org',
    },
    mantle: {
      ...sharedNetworkConfig,
      chainId: 5000,
      url: 'https://rpc.mantle.xyz',
    },
    sonic: {
      ...sharedNetworkConfig,
      chainId: 146,
      url: 'https://rpc.soniclabs.com',
    },
    berachain: {
      ...sharedNetworkConfig,
      chainId: 80094,
      url: 'https://rpc.berachain.com',
    },
    bob: {
      ...sharedNetworkConfig,
      chainId: 60808,
      url: 'https://rpc.gobob.xyz',
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
      optimism: OPTIMISTIC_ETHERSCAN_API_KEY,
      gnosis: GNOSISSCAN_API_KEY,
      matic: POLYGONSCAN_API_KEY,
      arbitrum: ARBISCAN_API_KEY,
      avalanche: SNOWTRACE_API_KEY,
      zkevm: ZKEVM_POLYGONSCAN_API_KEY,
      base: BASESCAN_API_KEY,
      baseSepolia: BASESCAN_API_KEY,
      bsc: BSCSCAN_API_KEY,
      celo: CELOSCAN_API_KEY,
      mantle: MANTLESCAN_API_KEY,
      unichain: UNISCAN_API_KEY,
      sonic: SONICSCAN_API_KEY,
      berachain: BERASCAN_API_KEY,
      'lisk-sepolia': 'not-required',
      'bob-sepolia': ETHERSCAN_API_KEY,
    } as Record<string, string>,
    customChains: [
      {
        network: 'optimism',
        chainId: 10,
        urls: {
          apiURL: 'https://api-optimistic.etherscan.io/api',
          browserURL: 'https://optimistic.etherscan.io',
        },
      },
      {
        network: 'gnosis',
        chainId: 100,
        urls: {
          apiURL: 'https://api.gnosisscan.io/api',
          browserURL: 'https://www.gnosisscan.io',
        },
      },
      {
        network: 'matic',
        chainId: 137,
        urls: {
          apiURL: 'https://api.polygonscan.com/api',
          browserURL: 'https://www.polygonscan.com',
        },
      },
      {
        network: 'arbitrum',
        chainId: 42161,
        urls: {
          apiURL: 'https://api.arbiscan.io/api',
          browserURL: 'https://www.arbiscan.io',
        },
      },
      {
        network: 'avalanche',
        chainId: 43114,
        urls: {
          apiURL: 'https://api.snowtrace.io/api',
          browserURL: 'https://www.snowtrace.io',
        },
      },
      {
        network: 'zkevm',
        chainId: 1101,
        urls: {
          apiURL: 'https://api-zkevm.polygonscan.com/api',
          browserURL: 'https://zkevm.polygonscan.com',
        },
      },
      {
        network: 'bsc',
        chainId: 56,
        urls: {
          apiURL: 'https://api.bscscan.com/api',
          browserURL: 'https://bscscan.com',
        },
      },
      {
        network: 'celo',
        chainId: 42220,
        urls: {
          apiURL: 'https://api.celoscan.io/api',
          browserURL: 'https://celoscan.io',
        },
      },
      {
        network: 'mantle',
        chainId: 5000,
        urls: {
          apiURL: 'https://api.mantlescan.xyz/api',
          browserURL: 'https://mantlescan.xyz',
        },
      },
      {
        network: 'unichain',
        chainId: 130,
        urls: {
          apiURL: 'https://api.uniscan.xyz/api',
          browserURL: 'https://uniscan.xyz',
        },
      },
      {
        network: 'sonic',
        chainId: 146,
        urls: {
          apiURL: 'https://api.sonicscan.org/api',
          browserURL: 'https://sonicscan.org',
        },
      },
      {
        network: 'berachain',
        chainId: 80094,
        urls: {
          apiURL: 'https://api.berascan.com/api',
          browserURL: 'https://berascan.com',
        },
      },
      {
        network: 'bob',
        chainId: 60808,
        urls: {
          apiURL: 'https://explorer.gobob.xyz/api',
          browserURL: 'https://explorer.gobob.xyz',
        },
      },
      {
        network: 'lisk-sepolia',
        chainId: 4202,
        urls: {
          apiURL: 'https://sepolia-blockscout.lisk.com/api',
          browserURL: 'https://sepolia-blockscout.lisk.com',
        },
      },
      {
        network: 'bob-sepolia',
        chainId: 808813,
        urls: {
          apiURL: 'https://bob-sepolia.explorer.gobob.xyz/api',
          browserURL: 'https://bob-sepolia.explorer.gobob.xyz',
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
  gasReporter: {
    enabled: true,
  },
}
