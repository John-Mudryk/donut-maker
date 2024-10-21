// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

  let donutCount = 0;
  let autoClickerCount = 0;
  let autoClickerCost = 100;

  const infoDisplay = document.getElementById("info");
  const autoClickerDisplay = document.getElementById("auto-clicker-info");
  const donutButton = document.getElementById("donut-button");
  const autoClickerButton = document.getElementById("auto-clicker-button");
  const resetButton = document.getElementById("reset-button");

  // Update Donut Display when called
  function updateDonutDisplay() {
    infoDisplay.innerHTML = `Donuts: ${donutCount}`;
  }

  // Update Auto Clicker Display when called
  function updateAutoClickerDisplay(){
    autoClickerDisplay.innerHTML = `Auto Clickers: ${autoClickerCount} (Cost: ${autoClickerCost} donuts)`
  }

  // Update the Button states when called
  function updateButtonStates() {
    autoClickerButton.disabled = donutCount < autoClickerCost;
  }

  // Add a Donut when button clicked
  donutButton.addEventListener("click", () => {
    donutCount += 1;
    updateDonutDisplay();
    updateButtonStates();
  });

  // Purchase Auto Clicker when button clicked
  autoClickerButton.addEventListener("click", () => {
    if (donutCount >= autoClickerCost) {
      donutCount -= autoClickerCost;
      autoClickerCount += 1;
      autoClickerCost = Math.round(autoClickerCost * 1.1); // Increase cost by 10% per autoclicker bought
      updateAutoClickerDisplay();
      updateDonutDisplay();
      updateButtonStates();
    }
  });

  // Activate the auto clickers every 1 second
  function activateAutoClickers() {
    setInterval(() => {
      donutCount += autoClickerCount;
      updateDonutDisplay();
      updateButtonStates();
    }, 1000);
  }

  // Initialize Game when page is reloaded
updateDonutDisplay();
updateAutoClickerDisplay();
activateAutoClickers();
updateButtonStates();