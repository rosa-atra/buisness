const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

type HealthResponse = {
  status: string;
};

export async function getApiHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/health`);
  if (!response.ok) {
    throw new Error(`API health check failed with status ${response.status}`);
  }
  return (await response.json()) as HealthResponse;
}
