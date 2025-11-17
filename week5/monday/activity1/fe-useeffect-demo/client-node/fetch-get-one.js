const apiUrl = "http://localhost:3001/api/blogs";
let id = "691adcc98ef9f1ccc615b0e7";

const fetchBlog = async () => {
  const response = await fetch(`${apiUrl}/${id}`);
  console.log(`${apiUrl}/${id}`);

  // console.log(`${apiUrl}/${id}`);
  const data = await response.json();

  console.log(data);
};

fetchBlog();
