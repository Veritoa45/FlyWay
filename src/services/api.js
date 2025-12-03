const BASE = "https://6923164509df4a4923243e83.mockapi.io/api/flyway/destinos";

export async function getDestinos() {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error("Error al obtener destinos");
  return res.json();
}
export async function getDestino(id) {
  const res = await fetch(`${BASE}/${id}`);
  if (!res.ok) throw new Error("Destino no encontrado");
  return res.json();
}
export async function createDestino(data) {
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al crear el destino");
  return res.json();
}
export async function updateDestino(id, data) {
  const res = await fetch(`${BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar el destino");
  return res.json();
}
export async function deleteDestino(id) {
  const res = await fetch(`${BASE}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar el destino");
  return res.json();
}
