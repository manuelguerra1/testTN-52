let obj = {
    marca: "HyperX",
    origen: "Estados unidos",
    comercio: "internacional",
    productos: "perifericos",
    identificacion: "09-9836768332-01",
    ventasProductos: function (venta) {
        let valor = "Teclados"
        if( venta === valor ){
        return true
    } else if( venta !== valor){
        return false
    } 
    }
}
console.log(obj);
console.log(obj.ventasProductos("Teclados"));
console.log(obj.ventasProductos("Televisores"));
