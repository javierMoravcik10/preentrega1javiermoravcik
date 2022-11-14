import "./ItemDetail.css"
import ToggleButton from "../ToggleButton/ToggleButton";



function ItemDetail( {product} ) {

    return (
        <div className="item-list-detail">
            <div className="card1">
            <ToggleButton icon="♥"/>
            <div className="card-img1">
                <img src={product.imgurl} alt={product.title} />
            </div>
            <div className="card-detail1">
                <h3 className="h3Detail1">{product.title}</h3>
                <p className="descriptionDetail">{product.description}</p>
                <p className="priceDetail">${product.price} <strong className="priceStrongDetail" >NUEVO</strong> </p>
                <p className="descuentoDetail" >{product.descuento}</p>
                <div className="stockCounter" >
            <p className="disponibleDetail">{product.disponible}</p> 
            {product.itemcounter}
            </div>
            <div className="mybuttonDetail" >
            {product.mybutton}
            </div>
            </div>
        </div>
         </div>
    );
}

export default ItemDetail;