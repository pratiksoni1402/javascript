function downloadFile(fileName, callBackFunction) {
  console.log("Download Started");
  setTimeout(() => {
    console.log("Downloading File", fileName);
    callBackFunction(fileName);
  }, 3000);
}

function processFile(fileName, callBackFunction) {
  console.log("Processing Started"); // Added to indicate when processing begins
  setTimeout(() => {
    console.log("Processing file", fileName);
    callBackFunction(fileName);
  }, 2000);
}

function mainFile(fileName) {
  console.log("Processing Complete for", fileName);
}

// Execute in sequence
downloadFile("report.pdf", (file) => {
  processFile(file, (processedFile) => {
    mainFile(processedFile);
  });
});
