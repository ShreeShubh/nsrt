import axios from "axios"

const API_BASE_URL = "http://localhost:8000"

export const getPortfolio = () => axios.get(`${API_BASE_URL}/api/portfolio/`)
export const deletePortfolio = (id) =>
  axios.delete(`${API_BASE_URL}/api/portfolio/${id}`)
