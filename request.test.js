function makeRequest() {
    const data = JSON.stringify({
        expense: {
            description: "Perfume Effie",
            type: "purchase",
            credit: false,
            installments: 0,
            price: 98.9,
            origin: "Thera Cosméticos",
        },
    });

    fetch("http://localhost:8080/expenses", {
        method: "POST",
        body: data,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((resp) => {
            console.log("Converting to JSON...");
            return resp.json();
        })
        .then((resp_body) => {
            console.log("Done!");
            console.log(resp_body);
        })
        .catch((err) => console.log(err));
}
