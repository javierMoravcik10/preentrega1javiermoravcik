function ItemListContainer(props) {
   
    let styleH1 = {
        color: "red",
        fontSize: 40,
        fontWight: "bold",
        textAlign: "center"
};

    return (
        <>
            <h1 style={styleH1}>{props.greeting}</h1>
        </>
    );
}

export default ItemListContainer;