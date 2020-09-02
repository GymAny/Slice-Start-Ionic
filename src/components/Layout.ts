import { IonFab, IonPopover } from "@ionic/react";
//@ts-expect-error
import styled from "styled-components";
import { media } from "../styles/media";

const Column = styled.div`
  min-height: 100%;
  max-width: 992px;
  margin: auto;

  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 8px 0px;

  ion-card {
    max-width: 440px;
  }

  ${media.md`
     grid-template-columns: 1fr 1fr;
  `}
`;

const DenseGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(1fr, 460px) 1fr;
  grid-template-rows: auto;
  padding-left: 4px;
`;

const Block = styled.div`
  height: 100%;
  width: 100%;
  max-width: 460px;
  ion-card {
    margin: 0px 0px 16px 16px;
  }
`;

const StyledIonFab = styled(IonFab)`
  margin-right: 10px;
  ${media.sm`
    margin-right: 26px;
  `}
`;

const RowToReverseColumn = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row-reverse;
  }
`;

const ScrollRow = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollBlock = styled.div`
  display: inline-block;
  width: 90%;
  flex: 0 0 auto;
  align-self: center;
  /* padding-top: 20px; */
  max-width: 460px;
  ion-card {
    margin: 0px 0px 16px 16px;
  }
`;

const StyledPopOver = styled(IonPopover)`
  --width: 95vw;
  --max-width: 360px;
  --background: var(--ion-color-primary-card);
  margin: auto;
`;

export {
  Block,
  Grid,
  DenseGrid,
  Column,
  StyledIonFab,
  StyledPopOver,
  ScrollBlock,
  ScrollRow,
  RowToReverseColumn,
};
