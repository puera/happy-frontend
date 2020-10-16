import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

import happyMapIcon from '../utils/mapIcon'
import { Orphanages } from 'pages/orphanagesmap'

const MapNoSSR = ({ orphanages }: Orphanages) => {
  return (
    <Map
      center={[-22.763076, -41.8967369]}
      zoom={14}
      style={{ width: '100%', height: '100%', zIndex: 5 }}
    >
      {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />

      {orphanages.map((orphanage) => (
        <Marker
          key={orphanage.id}
          icon={happyMapIcon}
          position={[orphanage.latitude, orphanage.longitude]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240}>
            {orphanage.name}
            <Link href={`orphanage/${orphanage.id}`}>
              <a>
                <FiArrowRight size={20} color="#fff" />
              </a>
            </Link>
          </Popup>
        </Marker>
      ))}
    </Map>
  )
}

export default MapNoSSR
