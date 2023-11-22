export async function createContent(formData: any) {
  const response = await fetch(
    "https://media-content.ccbp.in/website/react-assignment/add_resource.json"
  );
  const data = await response.json();
  return data;
}
