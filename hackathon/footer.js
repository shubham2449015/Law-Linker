// Simulate a live visitor count (random number between 100-500 for demo)
function updateVisitorCount() {
    const visitorCount = Math.floor(Math.random() * 400) + 100;
    document.getElementById("visitor-number").innerText = visitorCount;
  }
  
  setInterval(updateVisitorCount, 3000); // Update every 3 sec
  
  // Existing help function
  function openHelp() {
    alert("Welcome to the Help Desk!\n\nFor assistance, please call +91-9876543210 or email support@legalconnect.in");
  }
  