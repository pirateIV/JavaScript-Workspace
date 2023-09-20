let fileHandle;
butOpenFile.addEventListener("click", async () => {
  // Destructure the one-element array.
  [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  const contents = await file.text();
  
  textArea.value = contents
});
