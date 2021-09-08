import { chakra, Box, Text, HStack, useToast } from '@chakra-ui/react';
import React, { Dispatch, FormEvent, useCallback, useEffect, useRef } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

import { CenteredTitle } from '../../atoms/CenteredTitle';
import { RadiusButton } from '../../atoms/RadiusButton';

import { tipSend } from './calls/tipSend';
import { tipTotalCall } from './calls/tipTotalCall';
import { onChangeTotalTip } from './stores/actions';
import { Action } from './stores/reducer';
import { State } from './stores/state';

type Props = {
  contract: Contract;
  dispatch: Dispatch<Action>;
  publicAddress: string;
  state: State;
  web3: Web3;
};
export const TippingComponent = ({ contract, dispatch, publicAddress, state }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const toast = useToast();
  useEffect(() => {
    tipTotalCall({ contract, publicAddress }).then(res => {
      dispatch(onChangeTotalTip(res));
    });

    contract.events.tipped({}).on('data', async (event: any) => {
      dispatch(onChangeTotalTip(event.returnValues.totalTip));
    });
  }, []);

  const onSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    const amount = Number(ref.current?.value) * 1000000000000000000;
    await tipSend({ contract, publicAddress, value: amount });
    toast({ status: 'success', title: 'Thank you!' });
  }, []);
  return (
    <chakra.div>
      <CenteredTitle text="Tip to Developer" />
      <chakra.div>
        <form onSubmit={onSubmit}>
          <HStack alignItems="center" justifyContent="center" spacing="3.2rem">
            <HStack alignItems="center" justifyContent="center">
              <chakra.input
                ref={ref}
                _placeholder={{ color: '#ccc', fontSize: '2xl' }}
                border="1px solid #bdbdbd"
                borderRadius="5px"
                boxSizing="border-box"
                defaultValue={1}
                fontSize="2xl"
                height="53px"
                min={0}
                padding="0 16px"
                placeholder="Tip amount"
                required={true}
                type="number"
                w="100%"
              />
              <chakra.span fontSize="2xl">MATIC</chakra.span>
            </HStack>
            <RadiusButton
              kind="orangeFilledWhiteOutlined"
              label={'Send Tip to Dev'}
              type="submit"
            />
          </HStack>
        </form>
        <Text fontSize="1.6rem" mt="2rem" textAlign="center">
          Accumulated Chip Amount: {(state.totalTip / 1000000000000000000).toFixed(1)}{' '}
          MATIC
        </Text>
      </chakra.div>
    </chakra.div>
  );
};
