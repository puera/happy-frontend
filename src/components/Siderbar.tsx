import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'
import mapMarkerImg from '../images/map-marker.svg'

import * as S from '../styles/components/sidebar'

const Sidebar = () => {
  const { back } = useRouter()
  return (
    <S.Sidebar>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={back}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </S.Sidebar>
  )
}

export default Sidebar
