import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

function Form() {
  const { register, handleSubmit, formState, setValue } = useForm()
  const [cpfError, setCpfError] = useState('')
  const navigate = useNavigate()

  async function fetchAddress(cep) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&country=BR&postalcode=${cep}`)
      const data = await response.json()
      if (data && data.length > 0) {
        const address = data[0]
        setValue('endereco', address.display_name)
        setValue('latitude', address.lat)
        setValue('longitude', address.lon)
      } else {
        throw new Error('CEP não encontrado')
      }
    } catch (error) {
      alert('Erro ao buscar endereço')
    }
  }

  async function addUser(values) {
    const existingUsersResponse = await fetch('http://localhost:3000/usuarios')
    const existingUsers = await existingUsersResponse.json()

    const cpfExists = existingUsers.some(user => user.cpf === values.cpf)
    if (cpfExists) {
      setCpfError('CPF já cadastrado.')
      return
    }

    setCpfError('')

    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values,
          id: Math.random().toString(36).substr(2, 9)
        })
      })

      if (response.ok) {
        alert("Cadastrado com sucesso")
        navigate('/dashboard')
      } else {
        alert("Houve um erro ao cadastrar o usuário")
      }
    } catch (error) {
      alert("Houve um erro ao cadastrar o usuário - NO CATCH")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(addUser)}>
        <input
          placeholder='Nome'
          {...register('nome', { required: 'O nome é obrigatório' })}
        />
        {formState.errors?.nome?.message}

        <br />

        <select {...register('sexo', { required: 'O sexo é obrigatório' })}>
          <option value="">Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        {formState.errors?.sexo?.message}

        <br />

        <input
          placeholder='CPF'
          {...register('cpf', { required: 'O CPF é obrigatório' })}
        />
        {formState.errors?.cpf?.message}
        {cpfError && <p>{cpfError}</p>}

        <br />

        <input
          placeholder='Data de Nascimento'
          type='date'
          {...register('dataNascimento', { required: 'A data de nascimento é obrigatória' })}
        />
        {formState.errors?.dataNascimento?.message}

        <br />

        <input
          placeholder='Email'
          type='email'
          {...register('email', { required: 'O email é obrigatório' })}
        />
        {formState.errors?.email?.message}

        <br />

        <input
          placeholder='Senha'
          type='password'
          {...register('senha', { required: 'A senha é obrigatória' })}
        />
        {formState.errors?.senha?.message}

        <br />

        <input
          placeholder='CEP'
          {...register('cep')}
          onBlur={(e) => fetchAddress(e.target.value)}
        />

        <input
          placeholder='Endereço'
          {...register('endereco')}
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

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default Form
