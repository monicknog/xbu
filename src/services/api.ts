async function getAllBooks() {
  // const res = await fetch('http://localhost:9090/api/');
  const res = await fetch('https://xb-api.vercel.app/api');
  return res.json();
}

async function postBook(books: any) {
  // const res = await fetch('http://localhost:9090/api/', {
  const res = await fetch('https://xb-api.vercel.app/api', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(books),
  });

  if (res.ok) return await res.json();
  throw new Error('Error al publicar el libro');
}

async function getBookCategory(category: any) {
  const res = await fetch(
    `https://xb-api.vercel.app/api/?category=${category}`,
    // `http://localhost:9090/api/?category=${category}`,
  );

  if (res.ok) return await res.json();
  // throw new Error('Error al actualizar el libro');
}

async function deleteBook(id: any) {
  // const res = await fetch('http://localhost:9090/api/', {
  const res = await fetch(`https://xb-api.vercel.app/api/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('error');
  }

  return true;
}

export { getAllBooks, getBookCategory, postBook, deleteBook };
