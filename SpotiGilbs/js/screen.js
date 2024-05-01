if ('wakeLock' in navigator) {
    // Request a screen wake lock
    navigator.wakeLock.request('screen').then(function(wakeLock) {
        // Screen wake lock has been acquired
        console.log('Screen wake lock acquired');
        // Listen for the screen wake lock release
        wakeLock.addEventListener('release', function() {
            console.log('Screen wake lock released');
        });
    }).catch(function(err) {
        // Unable to acquire screen wake lock
        console.error('Unable to acquire screen wake lock:', err);
    });
} else {
    // Wake lock API is not supported
    console.warn('Wake lock API is not supported');
}