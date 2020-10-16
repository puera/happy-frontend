import { Map, Marker, TileLayer } from 'react-leaflet'
import happyMapIcon from '../utils/mapIcon'

type OrphanageDetailProps = {
  orphanage: {
    latitude: number
    longitude: number
  }
}

const DetailOrphanageMap = ({ orphanage }: OrphanageDetailProps) => {
  return (
    <Map
      center={[orphanage.latitude, orphanage.longitude]}
      zoom={16}
      style={{ width: '100%', height: 280 }}
      dragging={false}
      touchZoom={false}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />
      <Marker
        interactive={false}
        icon={happyMapIcon}
        position={[orphanage.latitude, orphanage.longitude]}
      />
    </Map>
  )
}

export default DetailOrphanageMap
