import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

function NatuDexList() {
  const navigate = useNavigate();
  const [locais, setLocais] = useState([]);
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const userId = localStorage.getItem('userId');

  async function carregarLocais() {
    const resposta = await fetch(`http://localhost:3000/localidades?userId=${userId}`);
    const data = await resposta.json();
    setLocais(data);
  }

  useEffect(() => {
    carregarLocais();
  }, [userId]);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/localidades/${id}`, {
        method: 'DELETE'
      });
      carregarLocais();
    } catch (error) {
      console.error('Erro ao deletar a localidade:', error);
    }
    setShowDeleteModal(false);
  }

  const handleEdit = (local) => {
    setSelectedLocal(local);
    setShowEditModal(true);
  }

  const handleSaveEdit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedLocal = {
      ...selectedLocal,
      nome: form.nome.value,
      descricao: form.descricao.value,
      localizacao: form.localizacao.value,
      latitude: form.latitude.value,
      longitude: form.longitude.value
    };

    try {
      await fetch(`http://localhost:3000/localidades/${selectedLocal.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedLocal)
      });
      carregarLocais();
    } catch (error) {
      console.error('Erro ao editar a localidade:', error);
    }
    setShowEditModal(false);
  }

  return (
    <div>
      <button onClick={() => navigate('/natudex-form')}>Cadastrar Nova Área</button>
      <table border="1">
        <thead>
          <tr>
            <td>Nome</td>
            <td>Descrição</td>
            <td>Localização</td>
            <td>Latitude</td>
            <td>Longitude</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {locais.map((local) => (
            <tr key={local.id}>
              <td>{local.nome}</td>
              <td>{local.descricao}</td>
              <td>{local.localizacao}</td>
              <td>{local.latitude}</td>
              <td>{local.longitude}</td>
              <td>
                <button onClick={() => handleEdit(local)}>Editar</button>
                <button onClick={() => {
                  setSelectedLocal(local);
                  setShowDeleteModal(true);
                }}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Confirmação de Deleção */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Deleção</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que deseja deletar esta localidade?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => handleDelete(selectedLocal.id)}>
            Deletar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Edição */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Localidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSaveEdit}>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" defaultValue={selectedLocal?.nome} name="nome" />
            </div>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <textarea className="form-control" id="descricao" defaultValue={selectedLocal?.descricao} name="descricao"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="localizacao" className="form-label">Localização</label>
              <input type="text" className="form-control" id="localizacao" defaultValue={selectedLocal?.localizacao} name="localizacao" />
            </div>
            <div className="mb-3">
              <label htmlFor="latitude" className="form-label">Latitude</label>
              <input type="text" className="form-control" id="latitude" defaultValue={selectedLocal?.latitude} name="latitude" />
            </div>
            <div className="mb-3">
              <label htmlFor="longitude" className="form-label">Longitude</label>
              <input type="text" className="form-control" id="longitude" defaultValue={selectedLocal?.longitude} name="longitude" />
            </div>
            <Button variant="primary" type="submit">
              Salvar
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NatuDexList;
