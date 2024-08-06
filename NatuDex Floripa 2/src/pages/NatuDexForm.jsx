import { useState } from "react"
import { useForm } from "react-hook-form"

function NatuDexForm() {
  const { register, handleSubmit, setValue, formState } = useForm()
  const [cepError, setCepError] = useState('')
  const userId = localStorage.getItem('userId')

  async function fetchAddress(cep) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&country=BR&postalcode=${cep}`)
      const data = await response.json()
      if (data && data.length > 0) {
        const address = data[0]
        setValue('localizacao', address.display_name)
        setValue('latitude', address.lat)
        setValue('longitude', address.lon)
      } else {
        throw new Error('CEP não encontrado')
      }
    } catch (error) {
      setCepError('Erro ao buscar endereço')
    }
  }

  async function addNatuDex(values) {
    try {
      const response = await fetch('http://localhost:3000/localidades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values,
          userId,
          id: Math.random().toString(36).substr(2, 9)
        })
      })

      if (response.ok === false) {
        alert("Houve um erro ao cadastrar a área de preservação")
      } else {
        alert("Área de preservação cadastrada com sucesso")
      }
    } catch (error) {
      alert("Houve um erro ao cadastrar a área de preservação - NO CATCH")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(addNatuDex)}>
        <input
          placeholder='Nome do Local'
          {...register('nome', { required: 'O nome do local é obrigatório' })}
        />
        {formState.errors?.nome?.message}

        <br />

        <textarea
          placeholder='Descrição do Local'
          {...register('descricao', { required: 'A descrição do local é obrigatória' })}
        />
        {formState.errors?.descricao?.message}

        <br />

        <input
          placeholder='CEP'
          {...register('cep')}
          onBlur={(e) => fetchAddress(e.target.value)}
        />
        {cepError && <p>{cepError}</p>}

        <input
          placeholder='Localização'
          {...register('localizacao')}
          readOnly
        />

        <input
          placeholder='Latitude'
          {...register('latitude')}
          readOnly
          hidden
        />

        <input
          placeholder='Longitude'
          {...register('longitude')}
          readOnly
          hidden
        />

        <input
          placeholder='Avaliação (1 a 5 estrelas)'
          type='number'
          min='1'
          max='5'
          step='1'
          {...register('avaliacao', { required: 'A avaliação é obrigatória' })}
        />
        {formState.errors?.avaliacao?.message}

        <button type="submit">Cadastrar Área</button>
      </form>
    </div>
  )
}

export default NatuDexForm
