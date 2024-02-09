fetch("https://fakestoreapi.com/products").then((response)=>{
    return response.json()
}).then((result)=>{
    console.log(result);
    let data=""
    result.map((x)=>{
       data+=` <tr>
        <th scope="row">${x.title}</th>
        <td>${x.description}</td>
        <td>${x.price}</td>
        <td><image src= "${x.image}"/></td>
      </tr>`
    })
    document.getElementById("tablebody").innerHTML=data
})