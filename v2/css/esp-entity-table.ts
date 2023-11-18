import { css } from "lit";

export default css`
  select {
    background-color: inherit;
    color: inherit;
    width: 100%;
    border-radius: 4px;
  }
  option {
    color: currentColor;
    background-color: var(--primary-color, currentColor);
  }
  input[type="range"], input[type="text"] {
    width: calc(100% - 3rem);
    height: 0.75rem;
  }
  .range, .text {
    text-align: center;
  }
  div.entities {
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(127,127,127,0.12);
    transition: all 0.3s ease-out 0s;
    font-size: 14px;
    background-color: rgba(127,127,127,0.05);
    padding: 16px;
  }
  div.entity-row {
    display: flex;
    align-items: center;
    flex-direction: row;
    transition: all 0.3s ease-out 0s;
    min-height: 40px;
  }
  div.entity-row:nth-child(2n) {
    background-color: rgba(127,127,127,0.05);
    border-radius: 6px;
  }
  div.entity-row iconify-icon {
    vertical-align: middle;
  }
  div.entity-row > div:nth-child(1) {
    flex: 0 0 40px;
    color: #44739e;
    line-height: 40px;
    text-align: center;
  }
  div.entity-row > div:nth-child(2) {
    flex: 1 1 50%;
    margin-left: 16px;
    margin-right: 8px;
  }
  div.entity-row > div:nth-child(3) {
    flex: 1 1 50%;
    margin-left: 16px;
    margin-right: 8px;
    text-align: right;
    display: flex;
    justify-content: space-between;
  }
  div.entity-row > div:nth-child(3) > div:only-child {
    margin-left: auto;
  }
  div.entity-row > div:nth-child(2) > i {
    margin-right: 0.2rem;
    color: rgba(127,127,127,0.8);
    font-size: 80%;
    display: block;
  }
`;