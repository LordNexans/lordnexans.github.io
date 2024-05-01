function filter(type) {
    const boxes = document.querySelectorAll('.box');
    const sortedBoxes = Array.from(boxes).sort((a, b) => {
      const aValue = a.getAttribute(`data-${type}`);
      const bValue = b.getAttribute(`data-${type}`);
      return aValue.localeCompare(bValue);
    });
  
    const boxContainer = document.getElementById('boxes');
  
    // Check if already sorted by this type
    const isSorted = boxContainer.getAttribute('data-sorted-type') === type;
  
    // Reverse the order if already sorted
    if (isSorted) {
      sortedBoxes.reverse();
      boxContainer.removeAttribute('data-sorted-type');
    } else {
      boxContainer.setAttribute('data-sorted-type', type);
    }
  
    // Clear the container and append sorted boxes
    boxContainer.innerHTML = '';
    sortedBoxes.forEach(box => {
      boxContainer.appendChild(box);
    });
  }
  

  var isFilterApplied = false;
  var originalOrder = [];
  
  window.onload = function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
      originalOrder.push(box);
    });
  }
  
  function filterByCategory(category) {
    var boxes = document.querySelectorAll('.box');
    if (isFilterApplied) {
      // Remove the filter
      originalOrder.forEach(function(box, index) {
        box.style.display = 'inline-block';
      });
      isFilterApplied = false;
    } else {
      // Apply the filter
      boxes.forEach(function(box) {
        if (box.dataset.category === category) {
          box.style.display = 'inline-block';
        } else {
          box.style.display = 'none';
        }
      });
      isFilterApplied = true;
    }
  }
  
  
  