let username = 'Pratik'
function ParentFunction(){
  const x = 15
  const y = 10
  const z = 20
  console.log(x -y)
  console.log(username)

  function childFunction(){
    const childName = "Pratik"
    console.log(childName)
    console.log(z)

    function grandChild(){
      const grandChild = 'Soni'
      console.log(grandChild)
    }
    grandChild() 
  }  
  child()

  console.log(childName )
}