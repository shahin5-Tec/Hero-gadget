const addToDb = (id)=>{
    let shoppingCart = {};

    // get the previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    try {
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        } 
    } catch (error) {
        shoppingCart = []; 
    }
    // add the quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id]= 1;
    }
    // set the data 
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
export {addToDb}