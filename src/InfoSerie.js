import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Badge } from 'reactstrap'

const InfoSerie = ({ match }) => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const [mode, setMode] = useState('INFO')

  const [data, setData] = useState({})
  useEffect(() => {
    axios
      .get('/api/series/' + match.params.id)
      .then(res => {
        setData(res.data)
      })
  }, [match.params.id])

  const masterHeader = {
    height: '120vh',
    minHeigth: '500px',
    backgroundImage: `url('${data.background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  const onChange = evt => {
    setName(evt.target.value)
  }
  const save = () => {
    axios.post('/api/series', {
      name
    })
    .then(res => {
      setSuccess(true)
    })
  }
  if(success){
    return <Redirect to='/series'/>
  }
  return (
    <div>
      <header style={masterHeader}>
        <div className='h-100' style={{ background: 'rgba(0,0,0,0.7)'}}>
          <div className='h-100 container'>
            <div className='row h-100 align-items-center'>
              <div className='col-3'>
                <img className='img-fluid img-thumbnail' src={data.poster} alt={data.name}/>
              </div>
              <div className='col-8'>
                <h1 className='font-weight-light text-white'>{data.name}</h1>
                <div className='lead tex-white'>
                  <Badge color='success'>Assistido</Badge>
                  <Badge color='warning'>Para asssitir</Badge>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <button onClick={() => setMode('EDIT')}>Editar</button>
      </div>

      {
        mode === 'EDIT' &&
        <div className='container'>
          <h1>Nova Serie</h1>
          <pre>{JSON.stringify(data)}</pre>
          <form>
            <div className='form-group'>
              <label for='name'>Nome</label>
              <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome da Serie'/>
            </div>
          </form>
          <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
        </div>
      }
    </div>
  );
}

export default InfoSerie;

{/* parei no 31:36 , no botão de edit*/}
{/* Só pra atualizar */}