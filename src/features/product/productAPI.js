export function fechAllProducts() {
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/products') 
      const data = await response.json()
      resolve({data})
    }
    );
  }

  export function fechProductsByFilter(filter) {
    // todos filter selected multiple categories start in node section
    let queryString = ''
    for(let key in filter){
      queryString += `${key}=${filter[key]}&`
    }
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/products?'+queryString) 
      const data = await response.json()
      resolve({data})
    }
    );
  }

  export function fechProductsBySort(sort,order) {
    console.log(order)
    // todos filter selected multiple categories start in node section
    let queryString = ''
    for(let key in sort){
      queryString += `${key}=${sort[key]}`
    }
    return new Promise(async (resolve) =>{
      const response = await fetch('http://localhost:8080/products?'+queryString) 
      const data = await response.json()
      resolve({data})
    }
    );
  }