import { initializeApp } from "firebase/app";
import { getFirestore,
collection,
getDocs,
getDoc,
doc,
query,
where,
addDoc,
} from "firebase/firestore";

// import  products from "../data/data;"

const firebaseConfig = {
  apiKey: "AIzaSyCLVoOQrKuUBLP8WtTuAuoxCEIEFOcK4ao",
  authDomain: "guatambu-5f5e5.firebaseapp.com",
  projectId: "guatambu-5f5e5",
  storageBucket: "guatambu-5f5e5.appspot.com",
  messagingSenderId: "268087945458",
  appId: "1:268087945458:web:31c91308025f3d03cf486b"
};

export const products = [
    // {
    // // id: 1,
    // title: "Pantalon Jogger",
    // marca: "Volcom",
    // price: 12000,
    // discount: "25%",
    // descuento: "-10% off, abonando por transferencia o efectivo.",
    // stock: 7,
    // category: "Pantalones",
    // imgurl: "/imgs/item20482foto93379th.jpg",
    // temporada: "Producto temporada 2022",
    // description: "Jogger negro/algodon Volcom temporada 2022",
    // disponible: "Producto disponible en stock.",
    // // mybutton: <MyButton>Comprar</MyButton>,
    
    //          },
    // {
    //     // id: 2,
    //     title: "Remera Volcom Stone",
    //     marca: "Volcom",
    //     price: 8000,
    //     discount: "30%",
    //     descuento: "-10% off, abonando por transferencia o efectivo.",
    //     stock: 10,
    //     category: "Remeras",
    //     imgurl: "/imgs/item21268foto94870th.jpg",
    //     temporada: "Producto temporada 2022",
    //     description: "Remera estampa 'TRUE TO THIS' temporada 2022",
    //     disponible: "Producto disponible en stock.",
    //     // mybutton: <MyButton>Comprar</MyButton>,

    //         },
    {
        // id: 3,
        title: "Buzo algodon",
        marca: "Volcom",       
        price: 15000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
        stock: 0,
        category: "Buzos",
        imgurl: "/imgs/item22005foto97118th.jpg",
        temporada: "Producto temporada 2022",
        description: "Buzo canguro Volcom temporada 2022",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
            },
    {
        // id: 4,
        title: "Jean skinny",
        marca: "Volcom",       
        price: 14000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
        stock: 13,
        category: "Pantalones",
        imgurl: "/imgs/item8743foto97251th.jpg",
        temporada: "Producto temporada 2022",
        description: "Jean skinny/negro Temporada 2022",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
            },
            {
        // id: 5,
        title: "Buzo cuello base",
        marca: "Volcom",       
        price: 13000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
        stock: 6,
        category: "Buzos",
        imgurl: "/imgs/buzomujer.jpg",
        temporada: "Producto temporada 2022",
        description: "Buzo cuello base/blanco con estampa, temporada 2021",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
            }, 
    {
        // id: 6,
        title: "Buzo cuello base",
        marca: "Volcom",       
        price: 13000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
        stock: 16,
        category: "Buzos",
        imgurl: "/imgs/buzorojomujer.jpg",
        temporada: "Producto temporada 2022",
        description: "Buzo cuello base/rojo overside, temporada 2022",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
                    },
    {
        //  id: 7,
         title: "Remeron overside",
        marca: "Volcom",       
         price: 7000,
        discount: "25%",
        descuento: "-10% off, abonando por transferencia o efectivo.",
         stock: 12,
         category: "Remeras",
         imgurl: "/imgs/remeramujer.jpg",
        temporada: "Producto temporada continua",
         description: "Remeron overside/negro con estampa, Temporada continua",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
             },
        {
        // id: 8,
        title: "Remera batick",
        marca: "Volcom",       
        price: 6000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
        discount: "30%",
        stock: 5,
        category: "Remeras",
        imgurl: "/imgs/item17082foto95063th.jpg",
        temporada: "Producto temporada 2022",
        description: "Remera batick gris/negro, temporada 2022",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
            },
        {
        // id: 9,
        title: "Remera overside",
        marca: "Volcom",       
        price: 8000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
        stock: 0,
        category: "Remeras",
        imgurl: "/imgs/vestidomujer.jpg",
        temporada: "Producto temporada 2022",
        description: "Remera overside/gris, temporada 2022",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
             },
    
        {
        // id: 10,
        title: "Jean recto/roto",
        marca: "Volcom",       
        price: 5000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
        discount: "30%",
        stock: 7,
        category: "Pantalones",
        imgurl: "/imgs/jeanmujer.jpg",
        temporada: "Producto liquidacion",
        description: "Jean clasico, recto/roto, producto en liquidacion",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
            },
    {
        //  id: 11,
         title: "Buzo algodon friza",
        marca: "Volcom",       
         price: 16000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
         stock: 14,
         category: "Buzos",
         imgurl: "/imgs/buzohombre.jpg",
        temporada: "Producto temporada 2021",
         description: "Buzo friza/negro, temporada 2021",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
             },
    {
        // id: 12,
        title: "Jean oxford",
        marca: "Volcom",       
        price: 14000,
        descuento: "-10% off, abonando por transferencia o efectivo.",
        stock: 3,
        category: "Pantalones",
        imgurl: "/imgs/pantalonmujer.jpg",
        temporada: "Producto temporada 2021",
        description: "Jean oxford/celeste temporada 2022",
        disponible: "Producto disponible en stock.",
        // mybutton: <MyButton>Comprar</MyButton>,
            },      
];

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);

//1. Traer todos los documentos.
export default async function getItems(){
    //1.a- Referenciamos nuestra coleccion
    const colectionProductsRef = collection(DB, "products");
    //1.b- Solicitamos todos los documentos de la collecion
    const documentSnapshot = await getDocs(colectionProductsRef);

    const documentsData = documentSnapshot.docs.map ((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
    });
        return documentsData;
}

//2. Traer un documento por ID.
export async function getSingleItem(idParams){
    const docRef = doc (DB, "products", idParams);

    const docSnapshot = await getDoc(docRef); 

   const itemData = docSnapshot.data(); 
   itemData.id = docSnapshot.id

   return itemData;
}

//3. Traer todos los documentos segun categoria.
export async function getItemsByCategory(categoryParams){
     const collectionRef = collection (DB, "products");

     const queryCat = query(collectionRef, where("category", "==", categoryParams ))

     const documentSnapshot = await getDocs(queryCat);

     const documentsData = documentSnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
     });
     return documentsData;
}


//4. Enviar la orden a Firebase
 export async function createOrder(order){
    const collectionRef = collection(DB, "orders");
     const docOrder = await addDoc(collectionRef, order); 

     return(docOrder.id); 
 }