const API_BASE = "http://localhost:3000";

export const downloadCSVapi = async (id) => {
  let request = await fetch(`${API_BASE}/download/${id}`);
  let response = await request.json();
  return response;
};

export const uploadCSVapi = async (form) => {
  let request = await fetch(`${API_BASE}/upload/`, {
    method: "POST",
    body: form,
  });

  let response = await request.json();
  return response;
};
