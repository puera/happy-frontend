import dynamic from 'next/dynamic'
import Sidebar from 'components/Siderbar'

import { FiPlus } from 'react-icons/fi'

import * as S from '../styles/pages/create-orphanage'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { LeafletMouseEvent } from 'leaflet'
import api from 'services/api'
import { useRouter } from 'next/router'

const Map = dynamic(() => import('../components/CreateOrphanageMap'), {
  ssr: false
})

export default function CreateOrphanage() {
  const { push } = useRouter()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpeningHours] = useState('')
  const [open_on_weekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }, [])

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return
      }
      const selectedImages = Array.from(event.target.files)

      setImages(selectedImages)

      const selectedImagesPreview = selectedImages.map((image) =>
        URL.createObjectURL(image)
      )

      setPreviewImages(selectedImagesPreview)
    },
    []
  )

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      const { latitude, longitude } = position

      const data = new FormData()

      data.append('latitude', String(latitude))
      data.append('longitude', String(longitude))
      data.append('name', name)
      data.append('about', about)
      data.append('instructions', instructions)
      data.append('opening_hours', opening_hours)
      data.append('open_on_weekends', String(open_on_weekends))

      images.forEach((image) => data.append('images', image))

      await api.post('orphanages', data)

      alert('Cadastro realizado com sucesso!')
      push('/orphanagesmap')
    },
    [
      position,
      name,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
      push
    ]
  )

  return (
    <S.Container>
      <Sidebar />
      <main>
        <S.Form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>
            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
              latitude={position.latitude}
              longitude={position.longitude}
            />
            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={name}
                    style={{
                      width: '100%',
                      height: '9.6rem',
                      objectFit: 'cover',
                      borderRadius: '2rem'
                    }}
                  />
                ))}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </S.Form>
      </main>
    </S.Container>
  )
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
