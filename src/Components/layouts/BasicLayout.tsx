import { chakra } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';

import { BasicLayoutFooter } from '../containers/BasicLayout/Footer';
import { BasicLayoutHeader } from '../containers/BasicLayout/Header';
import { RequireMetamaskWrapper } from '../containers/BasicLayout/RequireMetamaskWrapper';

type Props = { children: ReactNode };

export const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title key="title">Web3 utils</title>
      </Head>
      <RequireMetamaskWrapper>
        <chakra.section height="100%" width="100%">
          <BasicLayoutHeader />
          <chakra.main>{children}</chakra.main>
          <BasicLayoutFooter />
        </chakra.section>
      </RequireMetamaskWrapper>
    </>
  );
};
