var productNameInput=document.getElementById("productNameInput");
var productPriceInput=document.getElementById("productPriceInput");
var productNCategoryInput=document.getElementById("productNCategoryInput");
var productDescInput=document.getElementById("productDescInput");

var productContainer;

if(localStorage.getItem("myProducts")==null)
{
    productContainer=[];
}
else
{
    productContainer=JSON.parse(localStorage.getItem("myProducts"))
    display();
}

function addProduct()
{
   var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productNCategoryInput.value,
        description:productDescInput.value
    }
    productContainer.push(product);
    localStorage.setItem("myProducts",JSON.stringify(productContainer))
    clearForm();
    display();
    console.log(productContainer);
}
function clearForm()
{
    productNameInput.value="";
    productPriceInput.value="";
    productNCategoryInput.value="";
    productDescInput.value="";
}
function display()
{
    var cartoona="";
    for(var i=0;i<productContainer.length;i++)
    {
        cartoona+=`
            <tr>
                <td>${i}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].description}</td>
                <td><button class="btn btn-outline-warning">Update</button></td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
            </tr>`    
                
                document.getElementById("tableBody").innerHTML=cartoona;
    }
};
function deleteProduct(productIndex)
{
    productContainer.splice(productIndex,1);
    localStorage.setItem("myProducts",JSON.stringify(productContainer));
    display();

}