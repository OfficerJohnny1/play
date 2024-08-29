mergeInto(LibraryManager.library, {
  LoadGoogleGIS: function(clientIdPtr) {
    var clientId = UTF8ToString(clientIdPtr);
    if (!clientId) {
      console.error("Google Client ID is required");
      return;
    }

    var script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = function () {
      google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse
      });

      google.accounts.id.prompt(); // Automatically shows the sign-in button.
    };
    document.head.appendChild(script);
  }
});

function handleCredentialResponse(response) {
  // Send the ID token to Unity
  unityInstance.SendMessage('GoogleSignInManager', 'OnGoogleSignInSuccess', response.credential);
}
