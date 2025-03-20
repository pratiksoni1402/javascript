function PropertyCheck(obj, property, defaultValue = 'USA'){
  if (!obj.hasOwnProperty(property)){
    obj[property] = defaultValue;
    console.log("Missing property added", obj)
  }else{
    console.log("Property already exist")
  }
}

PropertyCheck(student2, "country","India")

// you can make the function a little cleaner with a shorthand for the default parameter:

function PropertyCheckMethod2(obj, property, defaultValue = 'USA') {
  if (!(property in obj)) {
    obj[property] = defaultValue;
    console.log("Missing property added", obj);
  } else {
    console.log("Property already exists");
  }
}

PropertyCheckMethod2(student2, "country", "India");