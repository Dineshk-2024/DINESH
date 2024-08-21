fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      .then((resp)=>{ return resp.json()})
      .then((json)=>{
        console.log(json)
      }) 



      .then (function(resp){
            return resp.json()
        })



      .then (function (data){
            console.log (data)
        })
        
        

  .then (response=>response.json())
  .then(console.log)
  .catch(()=>{})

      
  