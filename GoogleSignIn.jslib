mergeInto(LibraryManager.library, {
    GoogleSignIn: function() {
        // Initialize Google Sign-In
        google.accounts.id.initialize({
            client_id: '630733327891-t4qtltmmcq6irfmknt3t5fv329b34ift.apps.googleusercontent.com',
            callback: handleCredentialResponse
        });

        google.accounts.id.prompt(); // Show the sign-in prompt
    }
});

function handleCredentialResponse(response) {
    // Send the credential to Unity
    unityInstance.SendMessage('GoogleSignInHandler', 'OnGoogleSignInSuccess', response.credential);
}

function signInFailure(error) {
    // Send the error message to Unity
    unityInstance.SendMessage('GoogleSignInHandler', 'OnGoogleSignInFailure', error);
}
