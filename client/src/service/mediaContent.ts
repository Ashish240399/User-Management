export async function getAllMediaContent() {
  const response = await fetch(
    "https://media-content.ccbp.in/website/react-assignment/resources.json"
  );
  const data = await response.json();
  return data;
}
