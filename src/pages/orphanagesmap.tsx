import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

import * as S from '../styles/pages/orphanagesmap'

import mapMakerImg from '../images/map-marker.svg'
import { GetServerSideProps } from 'next'
import api from 'services/api'

const Map = dynamic(() => import('../components/Map'), {
  ssr: false
})

export type Orphanage = {
  id: number
  latitude: number
  longitude: number
  name: string
}

export type Orphanages = {
  orphanages: Orphanage[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('orphanages')
  const orphanages: Orphanage[] = response.data
  return {
    props: {
      orphanages
    }
  }
}

const OrphanagesMap = ({ orphanages }: Orphanages) => {
  return (
    <S.Container>
      <aside>
        <header>
          <img src={mapMakerImg} alt="Happy Maker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Armação dos Búzios</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>

      <Map orphanages={orphanages} />

      <Link href="/createorphanage">
        <a>
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
    </S.Container>
  )
}

export default OrphanagesMap
