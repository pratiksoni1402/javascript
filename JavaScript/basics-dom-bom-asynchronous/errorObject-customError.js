  try{
      console.log(soni)
      throw new ReferenceError ("pratik is good")
  } 
  catch(error){
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
  }

  let a = 48
  if(a < 18){
    throw new Error("You are not eligible")

  }else if(a = 18){
    
  }