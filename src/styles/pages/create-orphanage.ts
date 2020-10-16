import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }
`

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  .leaflet-container {
    margin-bottom: 4rem;
    border: 0.1rem solid #d3e2e5;
    border-radius: 2rem;
  }

  fieldset {
    border: 0;
  }

  fieldset + fieldset {
    margin-top: 8rem;
  }

  fieldset legend {
    width: 100%;

    font-size: 3.2rem;
    line-height: 3.4rem;
    color: #5c8599;
    font-weight: 700;

    border-bottom: 0.1rem solid #d3e2e5;
    margin-bottom: 4rem;
    padding-bottom: 2.4rem;
  }

  .input-block + .input-block {
    margin-top: 2.4rem;
  }

  .input-block label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 0.8rem;
    line-height: 2.4rem;
  }

  .input-block label span {
    font-size: 1.4rem;
    color: #8fa7b3;
    margin-left: 2.4rem;
    line-height: 2.4rem;
  }

  .input-block input,
  .input-block textarea {
    width: 100%;
    background: #f5f8fa;
    border: 0.1rem solid #d3e2e5;
    border-radius: 2rem;
    outline: none;
    color: #5c8599;
  }

  .input-block input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  .input-block textarea {
    min-height: 12rem;
    max-height: 24rem;
    resize: vertical;
    padding: 1.6rem;
    line-height: 2.8rem;
  }

  .input-block .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1.6rem;
  }

  .input-block .new-image {
    height: 9.6rem;
    background: #f5f8fa;
    border: 0.1rem dashed #96d2f0;
    border-radius: 2rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-block input[type='file'] {
    display: none;
  }

  .input-block .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .input-block .button-select button {
    height: 6.4rem;
    background: #f5f8fa;
    border: 0.1rem solid #d3e2e5;
    color: #5c8599;
    cursor: pointer;
  }

  .input-block .button-select button.active {
    background: #edfff6;
    border: 0.1rem solid #a1e9c5;
    color: #37c77f;
  }

  .input-block .button-select button:first-child {
    border-radius: 2rem 0rem 0rem 2rem;
  }

  .input-block .button-select button:last-child {
    border-radius: 0 2rem 2rem 0;
    border-left: 0;
  }

  .confirm-button {
    margin-top: 6.4rem;

    width: 100%;
    height: 6.4rem;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 2rem;
    color: #ffffff;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
  }

  .confirm-button svg {
    margin-right: 1.6rem;
  }

  .confirm-button:hover {
    background: #36cf82;
  }
`
