document.addEventListener("DOMContentLoaded", () => {
  const homeScreen = document.getElementById("home");
  const callScreen = document.getElementById("call-screen");
  const callButton = document.getElementById("call-button");

  // Navigate to the call screen when the home screen is touched
  homeScreen.addEventListener("click", () => {
    homeScreen.classList.add("hidden");
    callScreen.classList.remove("hidden");
  });

  // Handle the call button functionality
  callButton.addEventListener("click", () => {
    // SIP URI for the call
    const sipURI = "sip:kiosk_test@coxwxc.rooms.webex.com";
    // Initiate the call
    window.location.href = sipURI;
  });
});
