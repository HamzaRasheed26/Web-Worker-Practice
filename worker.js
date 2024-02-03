// This is the worker script.
self.onmessage = function (e) {
  var sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }

  // Post data back to the main script
  self.postMessage(sum);
};
