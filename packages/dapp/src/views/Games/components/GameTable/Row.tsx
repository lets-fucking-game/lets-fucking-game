import { useEffect, useState, createElement, useRef } from 'react'
import styled from 'styled-components'
import { Box, Flex, useMatchBreakpoints, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import { useGameUser } from 'state/games/hooks'

import { FarmAuctionTag, CoreTag } from 'components/Tags'
import BoostedApr from 'views/Farms/components/YieldBooster/components/BoostedApr'
import BoostedTag from 'views/Farms/components/YieldBooster/components/BoostedTag'
import Apr, { AprProps } from './Apr'
import Game, { GameProps } from './Game'

import Earned, { EarnedProps } from './Earned'
import Details from './Details'
import Multiplier, { MultiplierProps } from './Multiplier'
import Liquidity, { LiquidityProps } from './Liquidity'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema, GameWithStakedValue } from '../types'

export interface RowProps {
  apr: AprProps
  game: GameProps
  earned: EarnedProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: GameWithStakedValue
  type: 'core' | 'community'
  initialActivity?: boolean
}

interface RowPropsWithLoading extends RowProps {
  userDataReady: boolean
}

const cells = {
  apr: Apr,
  game: Game,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.disabled};
  }
`

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const GameMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<React.PropsWithChildren<RowPropsWithLoading>> = (props) => {
  const { details, initialActivity, multiplier } = props
  const { stakedBalance, proxy, tokenBalance } = props.details.userData
  const userDataReady = multiplier.multiplier !== undefined
  const hasSetInitialValue = useRef(false)
  const hasStakedAmount = !!useGameUser(details.pid).stakedBalance.toNumber()
  const [actionPanelExpanded, setActionPanelExpanded] = useState(hasStakedAmount)
  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)
  const { t } = useTranslation()

  const toggleActionPanel = () => {
    setActionPanelExpanded(!actionPanelExpanded)
  }

  useEffect(() => {
    setActionPanelExpanded(hasStakedAmount)
  }, [hasStakedAmount])
  useEffect(() => {
    if (initialActivity && hasSetInitialValue.current === false) {
      setActionPanelExpanded(initialActivity)
      hasSetInitialValue.current = true
    }
  }, [initialActivity])

  const { isDesktop, isMobile } = useMatchBreakpoints()

  const isSmallerScreen = !isDesktop
  const tableSchema = isSmallerScreen ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isMobile) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'type':
                return (
                  <td key={key}>
                    {userDataReady ? (
                      <CellInner style={{ width: '140px' }}>
                        {props[key] === 'community' ? <FarmAuctionTag scale="sm" /> : <CoreTag scale="sm" />}
                        {props?.details?.boosted ? <BoostedTag scale="sm" ml="16px" /> : null}
                      </CellInner>
                    ) : (
                      <Skeleton width={60} height={24} />
                    )}
                  </td>
                )
              case 'details':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelExpanded} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apr':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t('APR')}>
                        <Apr
                          {...props.apr}
                          hideButton={isSmallerScreen}
                          strikethrough={props?.details?.boosted}
                          boosted={props?.details?.boosted}
                        />
                        {props?.details?.boosted ? (
                          <BoostedApr
                            lpRewardsApr={props?.apr?.lpRewardsApr}
                            apr={props?.apr?.originalValue}
                            pid={props.game?.pid}
                            lpTotalSupply={props.details?.lpTotalSupply}
                            userBalanceInFarm={
                              stakedBalance.plus(tokenBalance).gt(0)
                                ? stakedBalance.plus(tokenBalance)
                                : proxy.stakedBalance.plus(proxy.tokenBalance)
                            }
                          />
                        ) : null}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t(tableSchema[columnIndex].label)}>
                        {createElement(cells[key], { ...props[key], userDataReady })}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <>
        <tr style={{ cursor: 'pointer' }} onClick={toggleActionPanel}>
          <GameMobileCell colSpan={3}>
            <Flex justifyContent="space-between" alignItems="center">
              <Game {...props.game} />
              {props.type === 'community' ? (
                <FarmAuctionTag marginRight="16px" scale="sm" />
              ) : (
                <Box style={{ marginRight: '16px' }}>
                  <CoreTag scale="sm" />
                  {props?.details?.boosted ? (
                    <BoostedTag style={{ verticalAlign: 'bottom' }} scale="sm" ml="4px" />
                  ) : null}
                </Box>
              )}
            </Flex>
          </GameMobileCell>
        </tr>
        <StyledTr onClick={toggleActionPanel}>
          <td width="33%">
            <EarnedMobileCell>
              <CellLayout label={t('Earned')}>
                <Earned {...props.earned} userDataReady={userDataReady} />
              </CellLayout>
            </EarnedMobileCell>
          </td>
          <td width="33%">
            <AprMobileCell>
              <CellLayout label={t('APR')}>
                <Apr
                  {...props.apr}
                  hideButton
                  strikethrough={props?.details?.boosted}
                  boosted={props?.details?.boosted}
                />
                {props?.details?.boosted ? (
                  <BoostedApr
                    lpRewardsApr={props?.apr?.lpRewardsApr}
                    apr={props?.apr?.originalValue}
                    pid={props.game?.pid}
                    lpTotalSupply={props.details?.lpTotalSupply}
                    userBalanceInFarm={
                      stakedBalance.plus(tokenBalance).gt(0)
                        ? stakedBalance.plus(tokenBalance)
                        : proxy.stakedBalance.plus(proxy.tokenBalance)
                    }
                  />
                ) : null}
              </CellLayout>
            </AprMobileCell>
          </td>
          <td width="33%">
            <CellInner style={{ justifyContent: 'flex-end' }}>
              <Details actionPanelToggled={actionPanelExpanded} />
            </CellInner>
          </td>
        </StyledTr>
      </>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {shouldRenderChild && (
        <tr>
          <td colSpan={7}>
            <ActionPanel {...props} expanded={actionPanelExpanded} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row