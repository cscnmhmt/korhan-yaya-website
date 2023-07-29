const URI = './data.json';

const getData = (setter) => {
  fetch(URI)
    .then((res) => res.json())
    .then((data) => setter(data));
};

export { getData };
