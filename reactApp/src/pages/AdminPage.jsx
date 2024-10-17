// // AdminPage.jsx
// import React from "react";
// import { useLogout } from "../utils/authUtils"; // Ajusta la ruta según sea necesario

// const AdminPage = () => {
//   const submitLogout = useLogout(); // Usa la función de logout

//   return (
//     <div>
//       <h1>Si Soy Admin! :)</h1>
//       <form onSubmit={submitLogout}>
//         <button type="submit">Log out</button>
//       </form>
//     </div>
//   );
// };

// export default AdminPage;

'use client'

import React, { useState } from 'react';
// import { useLogout } from "../utils/authUtils"; // Ajusta la ruta según sea necesario

// Componente principal
export default function AdminTrelloBoard() {
  const [users, setUsers] = useState([]);
  const [instituciones, setInstituciones] = useState([]);
  const [sedes, setSedes] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);
  
  const logout = useLogout(); // Asumiendo que useLogout es un hook que maneja el logout

  const onDragEnd = (result) => {
    // Implementar lógica de arrastre y soltar si es necesario
  }

  const addUser = (user) => setUsers([...users, user]);
  const addInstitucion = (institucion) => setInstituciones([...instituciones, institucion]);
  const addSede = (sede) => setSedes([...sedes, sede]);
  const addCurso = (curso) => setCursos([...cursos, curso]);
  const addInscripcion = (inscripcion) => setInscripciones([...inscripciones, inscripcion]);

  const editUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? updatedUser : user));
  }
  const editInstitucion = (id, updatedInstitucion) => {
    setInstituciones(instituciones.map(inst => inst.id === id ? updatedInstitucion : inst));
  }
  const editSede = (id, updatedSede) => {
    setSedes(sedes.map(sede => sede.id === id ? updatedSede : sede));
  }
  const editCurso = (id, updatedCurso) => {
    setCursos(cursos.map(curso => curso.id === id ? updatedCurso : curso));
  }
  const editInscripcion = (id, updatedInscripcion) => {
    setInscripciones(inscripciones.map(insc => insc.id === id ? updatedInscripcion : insc));
  }

  const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));
  const deleteInstitucion = (id) => setInstituciones(instituciones.filter(inst => inst.id !== id));
  const deleteSede = (id) => setSedes(sedes.filter(sede => sede.id !== id));
  const deleteCurso = (id) => setCursos(cursos.filter(curso => curso.id !== id));
  const deleteInscripcion = (id) => setInscripciones(inscripciones.filter(insc => insc.id !== id));

  const handleLogout = (e) => {
    e.preventDefault();
    logout(); // Llama a la función de logout
  }

  return (
    <div className="flex overflow-x-auto p-4 space-x-4 bg-gray-200 min-h-screen">
      <h1 className="mb-4">Si Soy Admin! :)</h1>
      <form onSubmit={handleLogout}>
        <button type="submit" className="bg-red-500 text-white rounded-md p-2">Log out</button>
      </form>
      <Column title="Usuarios" entities={users} onAdd={addUser} onEdit={editUser} onDelete={deleteUser} />
      <Column title="Instituciones" entities={instituciones} onAdd={addInstitucion} onEdit={editInstitucion} onDelete={deleteInstitucion} />
      <Column title="Sedes" entities={sedes} onAdd={addSede} onEdit={editSede} onDelete={deleteSede} />
      <Column title="Cursos" entities={cursos} onAdd={addCurso} onEdit={editCurso} onDelete={deleteCurso} />
      <Column title="Inscripciones" entities={inscripciones} onAdd={addInscripcion} onEdit={editInscripcion} onDelete={deleteInscripcion} />
    </div>
  );
}

// Componente de columna
function Column({ title, entities, onAdd, onEdit, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), ...formData });
    setIsOpen(false);
    setFormData({});
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-72">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {entities.map((entity) => (
        <EntityCard key={entity.id} entity={entity} onEdit={onEdit} onDelete={onDelete} />
      ))}
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white rounded-md p-2 w-full mt-4">Agregar {title}</button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Agregar {title}</h3>
            <form onSubmit={handleSubmit}>
              {getFormFields(title, formData, setFormData)}
              <button type="submit" className="bg-green-500 text-white rounded-md p-2 w-full">Agregar</button>
              <button type="button" onClick={() => setIsOpen(false)} className="bg-red-500 text-white rounded-md p-2 w-full mt-2">Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente de tarjeta de entidad
function EntityCard({ entity, onEdit, onDelete }) {
  return (
    <div className="bg-gray-100 rounded-md p-2 mb-2">
      <h4 className="font-semibold">{getEntityTitle(entity)}</h4>
      <p>{getEntityDetails(entity)}</p>
      <button onClick={() => onEdit(entity.id, entity)} className="text-blue-500">Editar</button>
      <button onClick={() => onDelete(entity.id)} className="text-red-500 ml-2">Eliminar</button>
    </div>
  );
}

function getEntityTitle(entity) {
  return entity.username || entity.nombre || entity.codigo || `Inscripción ${entity.id}`;
}

function getEntityDetails(entity) {
  if (entity.email) return `Email: ${entity.email}`;
  if (entity.tipo) return `Tipo: ${entity.tipo}, Número: ${entity.numero || 'N/A'}`;
  if (entity.provincia) return `Provincia: ${entity.provincia}, Cantón: ${entity.canton}`;
  if (entity.descripcion) return `Descripción: ${entity.descripcion || 'N/A'}, Cupo: ${entity.cupo}`;
  return `Usuario ID: ${entity.user_id}, Curso ID: ${entity.curso_id}`;
}

function getFormFields(entityType, formData, setFormData) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  switch (entityType) {
    case 'Usuarios':
      return (
        <>
          <input type="text" name="email" placeholder="Email" value={formData.email || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
          <input type="text" name="username" placeholder="Username" value={formData.username || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
          <select name="is_staff" onChange={handleChange} className="border rounded-md p-2 mb-2 w-full">
            <option value="">Es staff?</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </>
      );
    case 'Instituciones':
      return (
        <>
          <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
          <input type="text" name="tipo" placeholder="Tipo" value={formData.tipo || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
          <input type="text" name="numero" placeholder="Número" value={formData.numero || ''} onChange={handleChange} className="border rounded-md p-2 mb-2 w-full" />
        </>
      );
    case 'Sedes':
      return (
        <>
          <input type="text" name="provincia" placeholder="Provincia" value={formData.provincia || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
          <input type="text" name="canton" placeholder="Cantón" value={formData.canton || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
        </>
      );
    case 'Cursos':
      return (
        <>
          <input type="text" name="codigo" placeholder="Código" value={formData.codigo || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
          <input type="text" name="descripcion" placeholder="Descripción" value={formData.descripcion || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
          <input type="number" name="cupo" placeholder="Cupo" value={formData.cupo || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
        </>
      );
    case 'Inscripciones':
      return (
        <>
          <input type="text" name="user_id" placeholder="Usuario ID" value={formData.user_id || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
          <input type="text" name="curso_id" placeholder="Curso ID" value={formData.curso_id || ''} onChange={handleChange} required className="border rounded-md p-2 mb-2 w-full" />
        </>
      );
    default:
      return null;
  }
}
