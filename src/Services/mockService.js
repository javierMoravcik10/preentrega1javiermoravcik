import products from "../data/data";

function getItems(idCategory) {

    return new Promise((resolve) => {
        if (idCategory === undefined){
        setTimeout(() => {
            resolve(products);
    }, 2000);
    }
    else {
        setTimeout(() => {
            let itemRequested = products.filter((item) => item.category === idCategory);
            resolve(itemRequested);
        }, 2000);
    }
    });
}

export function getSingleItem(idParam) {

    return new Promise((resolve) => {
        let itemRequested = products.find((item) => item.id === Number(idParam));


        setTimeout(() => {
            resolve(itemRequested);
    }, 2000);
    });
}


export default getItems;



// console.log("App iniciada.");
// let promiseAPI = APICall();

// promiseAPI
//  .then((respuesta) => {
//     console.log("llegamos", respuesta);
//  })

// .catch((respuestaError) => {
//     console.log("Error:", respuestaError);
// });

// console.log(promiseAPI);
// console.log("seguimos trabajando.");