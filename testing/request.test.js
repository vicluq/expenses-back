function addRequest() {
  const data = JSON.stringify({
    data: {
      title: "Perfume Effie",
      type: "purchase",
      credit: false,
      currency: "R$",
      installments: 0,
      value: 98.9,
      origin: "Thera Cosméticos",
    },
  });

  fetch("http://localhost:8080/expenses", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((resp_body) => {
      console.log(resp_body);
    })
    .catch((err) => console.log(err));
}

function updateRequest() {
  const data = JSON.stringify({
    data: {
      title: "Perfume Effie Gold",
      credit: true,
      installments: 1,
      value: 99.9,
    },
    id: "62b35dc8e9a50c0b0bd97659",
  });

  fetch("http://localhost:8080/expenses", {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((resp_body) => {
      console.log(resp_body);
    })
    .catch((err) => console.log(err));
}

function deleteRequest() {
    const data = JSON.stringify({
      id: "62b35dc8e9a50c0b0bd97659",
    });
  
    fetch("http://localhost:8080/expenses", {
      method: "DELETE",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp_body) => {
        console.log(resp_body);
      })
      .catch((err) => console.log(err));
  }

function getAllRequest(id) {
  fetch(`http://localhost:8080/expenses/${id}`, {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .then((resp_body) => {
      console.log(resp_body);
    })
    .catch((err) => console.log(err));
}

deleteRequest();