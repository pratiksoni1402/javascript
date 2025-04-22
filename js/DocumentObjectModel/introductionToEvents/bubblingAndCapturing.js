//() Listeners on the same element and same phase run in their set order
//? If we have multiple event handlers on the same phase, assigned to the same element with addEventListener, they run in the same order as they are created:

elem.addEventListener("click", e => alert(1)); // guaranteed to trigger first
elem.addEventListener("click", e => alert(2));