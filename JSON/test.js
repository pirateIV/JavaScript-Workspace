document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
  const getItemsButton = document.getElementById("getItems");
  const createItemButton = document.getElementById("createItems");

  getItemsButton.addEventListener("click", () => {
    fetch("file.json")
      .then((response) => response.json())
      .then((data) => {
        output.innerHTML = JSON.stringify(data, null, 2);
      })
      .catch((error) => {
        output.innerHTML = `Error: ${error.message}`;
      });
  });

  createItemButton.addEventListener("click", () => {
    const newItem = { id: 3, name: "Item 3" };

    const request = new Request('file.json', {
      method: 'POST',
      body: JSON.stringify(newItem)
    })

  })

    // const request = new Request('file.json', {
      
    // })
});
