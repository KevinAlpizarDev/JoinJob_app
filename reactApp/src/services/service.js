import axios from "axios";

// Configuración inicial para manejar CSRF tokens y credenciales
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

// Crear un cliente Axios con la baseURL de tu backend
const client = axios.create({
  baseURL: "http://127.0.0.1:8000", // URL de tu backend
  withCredentials: true,
});

// Función para obtener el usuario actual con autenticación
export const getCurrentUser = () => {
  const token = localStorage.getItem("accessToken"); // Obtener el token del almacenamiento local
  return client.get("/api/user/", {
    headers: {
      Authorization: `Bearer ${token}`, // Enviar el token en los headers
    },
  });
};

// Función para registrar un nuevo usuario
export const registerUser = (name, username, email, password1, password2) => {
  return client.post("/api/register/", {
    name,
    username,
    email,
    password1,
    password2,
  });
};

// Función para iniciar sesión
export const loginUser = (email, password) => {
  return client.post("/api/login/", { email, password });
};

// Función para verificar si el usuario está logueado
export const checkLoggedInUser = async () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await client.get("/api/user/", config);
    return response.data; // Devuelve la información del usuario
  } else {
    throw new Error("No token found");
  }
};

// Función para cerrar sesión
export const handleLogout = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (accessToken && refreshToken) {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    await client.post("/api/logout/", { refresh: refreshToken }, config);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.log("Log out successful!");
  } else {
    throw new Error("No tokens found");
  }
};

// Función para agregar una nueva institución
export const addInstitution = (institutionData) => {
  const token = localStorage.getItem("accessToken");
  return axios.post(
    "http://localhost:8000/api/institutions/",
    institutionData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// Función para obtener las instituciones
export const getInstitutions = () => {
  const token = localStorage.getItem("accessToken");
  return axios.get("http://localhost:8000/api/institutions/", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// Función para actualizar el estado de una institución
export const updateInstitutionStatus = (institutionId, institutionData) => {
  const token = localStorage.getItem("accessToken");
  return axios.put(
    `http://localhost:8000/api/institutions/${institutionId}/`,
    institutionData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
// Función para actualizar una institución
export const updateInstitution = (institutionId, institutionData) => {
  const token = localStorage.getItem("accessToken");
  return axios.put(
    `http://localhost:8000/api/institutions/${institutionId}/`,
    institutionData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

/////////////////////

export const addCampus = async (campusData) => {
  const token = localStorage.getItem("accessToken"); // Obtener el token
  return await axios.post("http://localhost:8000/api/campuses/", campusData, {
    headers: {
      Authorization: `Bearer ${token}`, // Uso correcto del template literal
    },
  });
};

export const getAllCampuses = async () => {
  const token = localStorage.getItem("accessToken");
  const response = await axios.get("http://localhost:8000/api/campuses/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateCampusStatus = (campusId, isActive) => {
  const token = localStorage.getItem("accessToken");
  return axios.patch(
    `http://localhost:8000/api/campuses/${campusId}/`,
    { is_active: isActive },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
// Función para actualizar un campus
export const updateCampus = (campusId, campusData) => {
  const token = localStorage.getItem("accessToken");
  return axios.put(
    `http://localhost:8000/api/campuses/${campusId}/`,
    campusData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

/////////////////////

// Función para obtener todos los cursos con autenticación
export const getAllCourses = () => {
  const token = localStorage.getItem("accessToken");
  return axios.get("http://localhost:8000/api/courses/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Función para agregar un curso nuevo
export const addCourse = (courseData) => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
  return axios.post("http://localhost:8000/api/courses/", courseData, {
    headers: {
      Authorization: `Bearer ${token}`, // Incluir el token en los headers
      "Content-Type": "application/json", // Asegurar que los datos se envían en formato JSON
    },
  });
};

export const updateCourseStatus = (courseId, isActive) => {
  const token = localStorage.getItem("accessToken");
  return axios.patch(
    `http://localhost:8000/api/courses/${courseId}/`,
    { is_active: isActive },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// Función para actualizar los datos de un curso
export const updateCourse = (courseId, updatedData) => {
  const token = localStorage.getItem("accessToken");
  return axios.put(
    `http://localhost:8000/api/courses/${courseId}/`,
    updatedData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// Función para crear una inscripción
export const createEnrollment = async (enrollmentData) => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso almacenado
  try {
    const response = await axios.post(
      "http://localhost:8000/api/enrollments/",
      enrollmentData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Enviar el token en los encabezados
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para obtener las inscripciones
export const getEnrollments = async () => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await axios.get("http://localhost:8000/api/enrollments/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para actualizar el estado de una inscripción
export const updateEnrollmentStatus = async (enrollmentId, enrollmentData) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await axios.put(
      `http://localhost:8000/api/enrollments/${enrollmentId}/`,
      enrollmentData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
// Función para actualizar una inscripción
export const updateEnrollment = async (enrollmentId, enrollmentData) => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso almacenado
  try {
    const response = await axios.put(
      `http://localhost:8000/api/enrollments/${enrollmentId}/`,
      enrollmentData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Enviar el token en los encabezados
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
