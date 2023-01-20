import styled from "styled-components";
import Global from "../../styles/Global";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: var(--gray-color-0);
  width: 55vw;
  height: 70vh;

  border-radius: 10px;
  overflow: hidden;

  div:first-child {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-right: 30px;

    width: 60%;
    height: 100%;

    h3 {
      margin-top: 50px;
      margin-bottom: 20px;
      font-weight: 900;
      font-size: 25px;
      color: var(--gray-color-2);
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      height: 80%;
      padding-bottom: 20px;

      label {
        color: var(--gray-color-2);
        font-size: small;
        font-weight: 500;
        margin-top: 10px;
      }

      span {
        font-size: 10px;
      }

      input {
        border: solid 2px var(--gray-color-1);
        border-radius: 4px;

        width: 90%;

        color: var(--gray-color-2);
        font-size: 12px;
        padding: 5px;
      }

      input:focus {
        border: solid 2px var(--primary-focus-color);
      }
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 40%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;
    padding-bottom: 50px;

    background-color: var(--primary-2-color);
    div {
      height: fit-content;
      width: 100%;
      padding-right: 50px;

      display: flex;
      justify-content: space-around;

      h5 {
        font-weight: 900;
        font-size: 13px;
        color: var(--primary-color);

        width: 100%;
      }

      hr {
        margin-top: 2px;
        border-top: 2px solid var(--primary-focus-color);
      }
    }

    ul {
      padding-left: 10px;
      width: 100%;
      height: 60%;
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    li {
      color: var(--primary-color);

      strong {
        font-weight: 600;
      }
    }
  }
`;
