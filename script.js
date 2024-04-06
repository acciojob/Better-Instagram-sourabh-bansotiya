//your code here
function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  // Function to handle drag over event
  function handleDragOver(event) {
    event.preventDefault();
  }

  // Function to handle drop event
  function handleDrop(event) {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData("text/plain");
    const droppedId = event.target.id;

    const draggedElement = document.getElementById(draggedId);
    const droppedElement = document.getElementById(droppedId);

    // Swap background images
    const tempBgImage = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = droppedElement.style.backgroundImage;
    droppedElement.style.backgroundImage = tempBgImage;

    // Update ids
    draggedElement.id = droppedId;
    droppedElement.id = draggedId;
  }

  // Add event listeners to each image div
  const imageDivs = document.querySelectorAll(".image");
  imageDivs.forEach((div) => {
    div.addEventListener("dragstart", handleDragStart);
    div.addEventListener("dragover", handleDragOver);
    div.addEventListener("drop", handleDrop);
    div.setAttribute("draggable", true);
  });