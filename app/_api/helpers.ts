export async function request(apiUrl: string) {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    // Handle HTTP error
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return data
}
