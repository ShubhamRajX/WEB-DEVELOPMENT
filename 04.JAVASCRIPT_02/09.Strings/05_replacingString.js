//! Replacing String Content:

let originalString = "Hello, World! How are you, World?";

// let replacedString = originalString.replace("world", "vinod");
// let replacedString = originalString.replace("World", "vinod");

// let replacedString = originalString.replace(/world/, "vinod");
// let replacedString = originalString.replace(/world/i, "vinod");

// let replacedString = originalString.replace(/world/gi, "vinod");

// let replacedString = originalString.replaceAll(/World/i, "vinod");

let replacedString = originalString.replaceAll("World", "vinod");
console.log(replacedString);