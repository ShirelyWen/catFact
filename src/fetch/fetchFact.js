export default async function fetchFact(url) {
  const response = await fetch(url);
  const fact = await response.json();
  return fact;
}
