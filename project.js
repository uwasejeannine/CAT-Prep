class Mkulima{
    constructor(product,order,vendor){
        this.farm=[];
        this.product=[];
        this.order=[];
        this.vendor=[];


    }
    addFarm(id, farmName, farmer, phoneNumber, address){
        var farm={
            id:id,
            farmName:farmName,
            farmer:farmer,
            phoneNumber:phoneNumber,
            address:address,

        }
        return farm

       }
    removeFarm(id){
        this.farm.shift(id)
        return this.farm
    }
    updateFarm(id, farmName, farmer, phoneNumber, address){
    let  newFarm=this.farm.find(newFarm=>newFarm.address=="Karen")
      newFarm={
          id:id,
          farmName:farmName,
          phoneNumber:phoneNumber,
          address:address,
          farmer:farmer,

      }
      return newFarm
    }
getFarm(id){
    for(var i=0;i=id.length;i++){
    let farm=this.id[i];
    if(farm.id===id);{
    }
    return farm
}}

addProduct(productId, name, prices){
    var product={
        productId:productId,
        name:name,
        prices:prices,
    }

    return product
}
removeProduc(productId){
    this.farm.shift(productId)
    return farm
}


updateProduct(productId, name, price){
    let  newProduct=this.farm.find(newProduct=>newProduct.name=="Karen")
    newProduct={
          productId:productId,
          name:name,
          prices:price,


}
return newProduct
}
getProduct(productId){
let anyProduct=this.farm.find(anyProduct=>anyProduct.productId==productId)
return anyProduct
}

printProducts(products,prices){
    var farm={
        products:products,
        prices:prices,

    }
    return farm

   }

   calculateOrderCost(productId, quantity){
    let  orderCost=this.farm.find(orderCost=>orderCost.productId==productId)
      console.log(`${productId*quantity}`);
     return orderCost
      }
    }





let  farm=new Mkulima();
console.log(farm.addFarm(756,"Gashora Firm","Karisa",+2578989737,"Gashora"));
console.log(farm.addFarm(116,"Kirehe Farm","Kamari",+25078990837,"Kirehe"));
console.log(farm.removeFarm(756));
console.log(farm.updateFarm(345,"Knamba farm","Gad",+3453436336,"Kinamba"));
console.log(farm.getFarm(116));
console.log(farm.addProduct(756,"Akabanga",67000));
console.log(farm.updateProduct("3452DT","Maize",6800));
console.log(farm.getFarm(116));
console.log(farm.printProducts("Orange",600,"apple",500,"Banana",700));
console.log(farm.calculateOrderCost(756,34))


