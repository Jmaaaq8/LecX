// Get elements for all sets
const allCodeContainers = document.querySelectorAll(".code-container");
const allDropZonesContainers = document.querySelectorAll(".drop-zones-container");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");

// Track attempts
let attempts = 0;

// Store the dragged snippet's ID
let draggedSnippet = null;

// Drag start event for all code snippets
allCodeContainers.forEach(codeContainer => {
  const codeSnippets = codeContainer.querySelectorAll(".code-snippet");

  codeSnippets.forEach(snippet => {
    snippet.addEventListener("dragstart", (e) => {
      draggedSnippet = e.target.id;
      setTimeout(() => {
        e.target.style.display = "none"; // Hide snippet while dragging
      }, 0);
    });

    // Reset the display when drag ends
    snippet.addEventListener("dragend", (e) => {
      setTimeout(() => {
        e.target.style.display = "block"; // Show snippet again
        draggedSnippet = null;
      }, 0);
    });
  });
});

// Drag over and drop logic for each set of drop zones
allDropZonesContainers.forEach(dropZonesContainer => {
  const dropZones = dropZonesContainer.querySelectorAll(".drop-zone");

  dropZones.forEach(zone => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault(); // Allow the drop
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      if (!zone.classList.contains("dropped")) {
        // Only allow one snippet per zone
        zone.innerHTML = ""; // Clear the current content
        const draggedElement = document.getElementById(draggedSnippet);
        zone.appendChild(draggedElement); // Append the dragged snippet

        // Check if the dropped snippet matches the expected one
        if (draggedSnippet === zone.getAttribute("data-id")) {
          zone.classList.add("dropped");
          zone.classList.remove("wrong"); // Ensure wrong class is removed
        } else {
          // Incorrect placement, turn red and move the snippet back to the code container
          zone.classList.add("wrong");
          setTimeout(() => {
            zone.innerHTML = ""; // Clear drop zone
            zone.classList.remove("wrong");
            document.getElementById(`code-container-${dropZonesContainer.dataset.set}`).appendChild(draggedElement); // Return snippet to the correct code container
          }, 1000); // 1 second delay before moving the snippet back
        }
      }
    });
  });
});

// Handle submit button click to check if the order is correct
submitButton.addEventListener("click", () => {
  let isCorrect = true;

  // Check all drop zones across sets
  allDropZonesContainers.forEach(dropZonesContainer => {
    const dropZones = dropZonesContainer.querySelectorAll(".drop-zone");

    dropZones.forEach(zone => {
      const snippetInZone = zone.querySelector(".code-snippet");
      if (snippetInZone && snippetInZone.id !== zone.getAttribute("data-id")) {
        isCorrect = false;
      }
    });
  });

  // Increment attempts and update attempts display
  attempts += 1;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (isCorrect) {
    result.textContent = "Correct! The code is in the right order.";
    result.style.color = "green";
  } else {
    result.textContent = "Incorrect. Try again.";
    result.style.color = "red";
  }
});

// Handle reset button click to reset the quiz
resetButton.addEventListener("click", () => {
  // Reset each set
  allDropZonesContainers.forEach(dropZonesContainer => {
    const dropZones = dropZonesContainer.querySelectorAll(".drop-zone");

    dropZones.forEach(zone => {
      const snippetInZone = zone.querySelector(".code-snippet");
      
      // If there's a snippet in the drop zone, move it back to the code container
      if (snippetInZone) {
        const codeContainer = document.getElementById(`code-container-${dropZonesContainer.dataset.set}`);
        codeContainer.appendChild(snippetInZone); // Move snippet back to the original container
      }

      zone.innerHTML = ""; // Clear the drop zone
      zone.classList.remove("dropped");
      zone.classList.remove("wrong");
    });
  });

  // Reset result text and attempts
  result.textContent = "";
});