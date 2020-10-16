import { Map, Marker, TileLayer, MapProps } from 'react-leaflet'
import happyMapIcon from '../utils/mapIcon'

type CreateOrphanageMap = {
  latitude: number
  longitude: number
} & MapProps

const CreateOrphanageMap = ({
  center,
  style,
  zoom,
  onclick,
  latitude,
  longitude,
  ...args
}: Omit<CreateOrphanageMap, 'children'>) => {
  return (
    <Map center={center} style={style} zoom={zoom} onclick={onclick} {...args}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />
      {latitude !== 0 && (
        <Marker
          interactive={false}
          icon={happyMapIcon}
          position={[latitude, longitude]}
        />
      )}
    </Map>
  )
}

export default CreateOrphanageMap
