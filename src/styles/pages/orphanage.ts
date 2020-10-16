import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
  }

  .orphanage-details {
    width: 70rem;
    margin: 6.4rem auto;

    background: #ffffff;
    border: 0.1rem solid #d3e2e5;
    border-radius: 2rem;

    overflow: hidden;
  }

  .orphanage-details > img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }

  .orphanage-details .images {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 1.6rem;

    margin: 1.6rem 4rem 0;
  }

  .orphanage-details .images button {
    border: 0;
    height: 8.8rem;
    background: none;
    cursor: pointer;
    border-radius: 2rem;
    overflow: hidden;
    outline: none;

    opacity: 0.6;
  }

  .orphanage-details .images button.active {
    opacity: 1;
  }

  .orphanage-details .images button img {
    width: 100%;
    height: 8.8rem;
    object-fit: cover;
  }

  .orphanage-details .orphanage-details-content {
    padding: 8rem;
  }

  .orphanage-details .orphanage-details-content h1 {
    color: #4d6f80;
    font-size: 5.4rem;
    line-height: 5.4rem;
    margin-bottom: 0.8rem;
  }

  .orphanage-details .orphanage-details-content p {
    line-height: 2.8rem;
    color: #5c8599;
    margin-top: 2.4rem;
  }

  .orphanage-details .orphanage-details-content .map-container {
    margin-top: 6.4rem;
    background: #e6f7fb;
    border: 0.1rem solid #b3dae2;
    border-radius: 2rem;
  }

  .orphanage-details .orphanage-details-content .map-container footer {
    padding: 2rem 0;
    text-align: center;
  }

  .orphanage-details .orphanage-details-content .map-container footer a {
    line-height: 2.4rem;
    color: #0089a5;
    text-decoration: none;
  }

  .orphanage-details
    .orphanage-details-content
    .map-container
    .leaflet-container {
    border-bottom: 0.1rem solid #dde3f0;
    border-radius: 2rem;
  }

  .orphanage-details .orphanage-details-content hr {
    width: 100%;
    height: 0.1rem;
    border: 0;
    background: #d3e2e6;
    margin: 6.4rem 0;
  }

  .orphanage-details .orphanage-details-content h2 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: #4d6f80;
  }

  .orphanage-details .orphanage-details-content .open-details {
    margin-top: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }

  .orphanage-details .orphanage-details-content .open-details div {
    padding: 3.2rem 2.4rem;
    border-radius: 2rem;
    line-height: 2.8rem;
  }

  .orphanage-details .orphanage-details-content .open-details div svg {
    display: block;
    margin-bottom: 2rem;
  }

  .orphanage-details .orphanage-details-content .open-details div.hour {
    background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
    border: 0.1rem solid #b3dae2;
    color: #5c8599;
  }

  .orphanage-details
    .orphanage-details-content
    .open-details
    div.open-on-weekends {
    background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
    border: 0.1rem solid #a1e9c5;
    color: #37c77f;
  }

  .orphanage-details
    .orphanage-details-content
    .open-details
    div.open-on-weekends.dont-open {
    background: linear-gradient(154.16deg, #fdf0f5 7.85%, #ffffff 91.03%);
    border: 0.1rem solid #ffbcd4;
    color: #ff6690;
  }

  .orphanage-details .orphanage-details-content button.contact-button {
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

  .orphanage-details .orphanage-details-content button.contact-button svg {
    margin-right: 1.6rem;
  }

  .orphanage-details .orphanage-details-content button.contact-button:hover {
    background: #36cf82;
  }
`
