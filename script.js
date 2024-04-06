//your code here
function handleDragStart(event) {
  console.log("Drag start:", event.target.id);
  event.dataTransfer.setData("text/plain", event.target.id);
}

function handleDragOver(event) {
  console.log("Drag over:", event.target.id);
  event.preventDefault();
}

function handleDrop(event) {
  console.log("Drop:", event.target.id);
  event.preventDefault();
  const draggedId = event.dataTransfer.getData("text/plain");
  const droppedId = event.target.id;

  console.log("Dragged ID:", draggedId);
  console.log("Dropped ID:", droppedId);

  const draggedElement = document.getElementById(draggedId);
  const droppedElement = document.getElementById(droppedId);

  console.log("Dragged element:", draggedElement);
  console.log("Dropped element:", droppedElement);

  if (draggedElement && droppedElement) {
    const tempBgImage = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = droppedElement.style.backgroundImage;
    droppedElement.style.backgroundImage = tempBgImage;

    draggedElement.id = droppedId;
    droppedElement.id = draggedId;
  }
}

const imageDivs = document.querySelectorAll(".image");
imageDivs.forEach((div) => {
  div.addEventListener("dragstart", handleDragStart);
  div.addEventListener("dragover", handleDragOver);
  div.addEventListener("drop", handleDrop);
  div.setAttribute("draggable", true);
});
