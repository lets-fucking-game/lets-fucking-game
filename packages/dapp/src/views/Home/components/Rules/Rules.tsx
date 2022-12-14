import styled from 'styled-components'
import { Box, Flex, Text, Heading, Image } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 40px 0;
  width: 100%;
`

const BulletList = styled.ul`
  list-style-type: none;
  margin-left: 8px;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
  }
  li::before {
    content: '•';
    margin-right: 4px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
  li::marker {
    font-size: 12px;
  }
`

const StyledStepCard = styled(Box)`
  display: flex;
  align-self: baseline;
  position: relative;
  background: ${({ theme }) => theme.colors.cardBorder};
  padding: 1px 1px 3px 1px;
  border-radius: ${({ theme }) => theme.radii.card};
`

const StepCardInner = styled(Box)`
  width: 100%;
  padding: 24px;
  background: ${({ theme }) => theme.card.background};
  border-radius: ${({ theme }) => theme.radii.card};
`

const WinningCriteriaDrawing = () => {
  return <Image src="/images/Saly-6.png" alt="drawing of winning criteria" width={212} height={212} />
}

const RulesDrawing = () => {
  return <Image src="/images/Saly-23.png" alt="drawing of prize rules" width={118} height={118} />
}

const AllocationGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-auto-rows: max-content;
  row-gap: 4px;
`

const AllocationColorCircle = styled.div<{ color: string }>`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`

const AllocationMatch: React.FC<React.PropsWithChildren<{ color: string; text: string }>> = ({ color, text }) => {
  return (
    <Flex alignItems="center">
      <AllocationColorCircle color={color} />
      <Text color="textSubtle">{text}</Text>
    </Flex>
  )
}

const PoolAllocations = () => {
  const { t } = useTranslation()
  return (
    <StyledStepCard width={['280px', '330px', '380px']}>
      <StepCardInner height="auto">
        <Flex mb="32px" justifyContent="center">
          <RulesDrawing />
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="12px" pb="16px" color="secondary" bold textTransform="uppercase">
            {t('Player bank')}
          </Text>
          <Text fontSize="12px" pb="16px" color="secondary" bold textAlign="right" textTransform="uppercase">
            {t('Prize pool allocation')}
          </Text>
        </Flex>
        <AllocationGrid>
          <AllocationMatch color="#FFE362" text={t('First player')} />
          <Text pb="8px" textAlign="right" bold>
            80%
          </Text>
          <AllocationMatch color="#85C54E" text={t('Second player')} />
          <Text pb="8px" textAlign="right" bold>
            10%
          </Text>
          <AllocationMatch color="#028E75" text={t('Third player')} />
          <Text pb="8px" textAlign="right" bold>
            5%
          </Text>
          <AllocationMatch color="#BDC2C4" text={t('Bank')} />
          <Text pb="8px" textAlign="right" bold>
            10%
          </Text>
        </AllocationGrid>
      </StepCardInner>
    </StyledStepCard>
  )
}

const GappedFlex = styled(Flex)`
  gap: 24px;
`

const Rules: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  return (
    <Box width="100%">
      <Flex mb="40px" alignItems="center" flexDirection="column">
        <Heading mb="24px" scale="xl" color="secondary">
          {t('Rules')}
        </Heading>
        <Text textAlign="center">{t("Let's play a new game with really simple rules")}</Text>
        <Text>{t('Simple & Fun!')}</Text>
      </Flex>
      <Divider />
      <GappedFlex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex flex="2" flexDirection="column">
          <Heading mb="24px" scale="lg" color="secondary">
            {t('Winning Criteria')}
          </Heading>
          <Heading mb="24px" scale="md">
            {t('The last remaining players share the prizepool')}
          </Heading>
          <Text mb="16px" color="textSubtle">
            {t('But you can also vote to split pot when there are less than 50% of remaining players.')}
          </Text>
          <Text mb="16px" color="textSubtle">
            {t(
              ' This could be useful if the game takes too long. If all players vote to split, the smart contract will stop the game and split prizepool to remaining players.',
            )}
          </Text>

          <Text mt="16px" color="textSubtle">
            {t('More options will be added after the MVP test.')}
          </Text>
        </Flex>
        <Flex flex="1" justifyContent="center">
          <WinningCriteriaDrawing />
        </Flex>
      </GappedFlex>
      <Divider />
      <GappedFlex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex flex="2" flexDirection="column">
          <Heading mb="24px" scale="lg" color="secondary">
            {t('Prize Funds')}
          </Heading>
          <Text color="textSubtle">
            {t(
              'Here are the default game prize allocation. Game creators can update those parameters so check data for each game before register.',
            )}
          </Text>
          <Text mt="24px" color="textSubtle">
            {t('The prizes for each game come from two sources:')}
          </Text>
          <Text fontSize="18px" bold my="16px">
            {t('Player registration')}
          </Text>
          <BulletList>
            <li>
              <Text display="inline" color="textSubtle">
                {t(
                  'Registration amount paid by people goes back into the prize pools, minus creator and treasury fees.',
                )}
              </Text>
            </li>
          </BulletList>
          <Text bold fontSize="18px" my="16px">
            {t('Creator Prizes')}
          </Text>
          <BulletList>
            <li>
              <Text display="inline" color="textSubtle">
                {t('Creator can create a free game and set the prize pool on game creation.')}
              </Text>
            </li>
          </BulletList>
        </Flex>
        <Flex flex="1" justifyContent="center">
          <PoolAllocations />
        </Flex>
      </GappedFlex>
      <Divider />
      {/* <Flex justifyContent="center" alignItems="center" flexDirection={['column', 'column', 'row']}>
          <Image width={240} height={172} src="/images/lottery/tombola.png" alt="tombola bunny" mr="8px" mb="16px" />
          <Flex maxWidth="300px" flexDirection="column">
            <Heading mb="16px" scale="md">
              {t('Still got questions?')}
            </Heading>
            <Text>
              {t('Check our in-depth guide on')}{' '}
              <InlineLink href="https://docs.pancakeswap.finance/products/lottery/lottery-guide">
                {t('how to play the PancakeSwap lottery!')}
              </InlineLink>
            </Text>
          </Flex>
        </Flex> */}
    </Box>
  )
}

export default Rules
