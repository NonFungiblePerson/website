import { Box, chakra, HStack, Stack } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { AbiItem } from 'web3-utils';

import { AfterMetamaskContainer } from '../Components/containers/IndexPage/AfterMetamask';
import { BeforeMetamaskContainer } from '../Components/containers/IndexPage/BeforeMetamask';
import { useWeb3 } from '../hooks/useWeb3';
import { useResponsiveCondition } from '../utils/Responsive';

const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
    ],
    name: 'mintReservedNFT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'amount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'price',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
    ],
    name: 'vectorData',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export default function Index() {
  const { isMetamaskApproved, publicAddress, requestMetamask, web3 } = useWeb3(
    window.ethereum,
    window.web3,
  );
  const { isSp } = useResponsiveCondition();
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Monofett&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <chakra.section bg="linear-gradient(132deg, rgba(206,109,255,0.2539390756302521) 0%, rgba(255,0,63,0.24273459383753504) 100%)">
        <chakra.div margin="0 auto" maxW="1400px">
          <Stack alignItems="center" direction={isSp ? 'column' : 'row'} spacing={0}>
            <Box margin="30px">
              <chakra.img
                alt="polygon logo"
                src="/images/sample.gif"
                w={isSp ? '300px' : '300px'}
              />
            </Box>
            <chakra.h1
              className="gaming"
              fontFamily="Monofett"
              fontSize={isSp ? '60px' : '100px'}
              lineHeight={isSp ? '50px' : '80px'}
              padding="32px"
            >
              Non <br />
              Fungible <br />
              Person <br />
              NFT
            </chakra.h1>
          </Stack>
        </chakra.div>
      </chakra.section>
      <chakra.section bg="#eee" padding="32px" w="100%">
        <chakra.div margin="0 auto" maxW="1400px">
          <chakra.h2 fontSize="28px" mb="20px">
            <i>Non Fungible Person NFT</i> is{' '}
            <chakra.span fontWeight="bold">
              Completely On-chain Generative NFT
            </chakra.span>
            .
          </chakra.h2>
          <chakra.article>
            <chakra.p
              fontSize="16px"
              mb="20px"
              minW="300px"
              whiteSpace="unset"
              width="60%"
            >
              Most of NFTs currently issued are more or less depends on off-chain
              something. They are generated outside the contracts and their binaries are
              stored outside the chain (typically, in the conventional Web system).
              Therefore, the lifetime of such token is much shorter than the lifetime of
              the blockchain.
            </chakra.p>
            <chakra.p
              fontSize="16px"
              mb="20px"
              minW="300px"
              whiteSpace="unset"
              width="60%"
            >
              As of <i>Non Fungible Person NFT</i>, tokens are{' '}
              <b>generated on the chain</b> and <b>stored in the contract itself</b>. Even
              metadata is hosted on the chain! This means that{' '}
              <i>Non Fungible Person NFT</i> is practically everlasting token ecosystem.
            </chakra.p>
            <chakra.p fontSize="16px" minW="300px" whiteSpace="unset" width="60%">
              What is more is that <i>Non Fungible Person NFT</i> is <b>generative</b>.
              The token images are not adhoc. You mint a token and you get new pattern
              everytime.
            </chakra.p>
          </chakra.article>
        </chakra.div>
      </chakra.section>
      <chakra.div bg="linear-gradient(132deg, rgba(54,255,251,0.2539390756302521) 0%, rgba(0,255,1,0.24273459383753504) 100%)">
        <chakra.div margin="0 auto" maxW="1400px">
          {!isMetamaskApproved && (
            <BeforeMetamaskContainer requestMetamask={requestMetamask} />
          )}
          {isMetamaskApproved && <AfterMetamaskContainer publicAddress={publicAddress} />}
        </chakra.div>
      </chakra.div>
      <chakra.section bg="#eee" padding="32px" w="100%">
        <chakra.div margin="0 auto" maxW="1400px">
          <chakra.h2 color="nfpGreys.400" fontSize="52px" fontWeight="bold" mb="32px">
            Chain
          </chakra.h2>
          <chakra.article>
            <chakra.p fontSize="14px" mb="20px" whiteSpace="unset" width="60%">
              Polygon Chain.
            </chakra.p>
            <Box my="30px">
              <chakra.img
                alt="polygon logo"
                src="/images/polygon-matic-logo.svg"
                w="200px"
              />
            </Box>
          </chakra.article>
        </chakra.div>
      </chakra.section>
      <chakra.section bg="#eee" padding="32px" w="100%">
        <chakra.div margin="0 auto" maxW="1400px">
          <chakra.h2 color="nfpGreys.400" fontSize="52px" fontWeight="bold" mb="32px">
            Roadmap
          </chakra.h2>
          <chakra.article>
            <chakra.p fontSize="14px" mb="20px" whiteSpace="unset" width="60%">
              Will be launched in Sept. 2021.
            </chakra.p>
          </chakra.article>
        </chakra.div>
      </chakra.section>
      <chakra.section bg="#eee" padding="32px" w="100%">
        <chakra.div margin="0 auto" maxW="1400px">
          <chakra.h2 color="nfpGreys.400" fontSize="52px" fontWeight="bold" mb="32px">
            Token Price
          </chakra.h2>
          <chakra.article>
            <chakra.p fontSize="14px" mb="20px" whiteSpace="unset" width="60%">
              The price of tokens are determined as follows:
            </chakra.p>
            <Box my="30px">
              <chakra.img alt="price constraints" src="/images/prices.png" w="400px" />
            </Box>
            <chakra.p fontSize="14px" mb="20px" whiteSpace="unset" width="60%">
              For tokens whose tokenID is less than 200, 1MATIC.
              <br />
              Next 100 tokens are 5MATIC each.
              <br />
              After that, the price goes up by 0.2MATIC for each token.
            </chakra.p>
            <Box my="30px">
              <chakra.img alt="price chart" src="/images/chart.svg" width="600px" />
            </Box>
          </chakra.article>
        </chakra.div>
      </chakra.section>
    </>
  );
}
