import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import * as S from '../styles/pages/landing-page'

import logoImg from '../images/logo.svg'

const Home = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <img src={logoImg} alt="Happy Logo" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <S.Location>
          <strong>Armação dos Búzios</strong>
          <span>Rio de Janeiro</span>
        </S.Location>

        <Link href="/orphanagesmap">
          <a>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </a>
        </Link>
      </S.Wrapper>
    </S.Container>
  )
}

export default Home
