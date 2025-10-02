function varTimeout() {
  for (let x = 0; x < 3; x++) {
    setTimeout(function () {
      console.log(x);
    }, 10000);
  }
}

varTimeout();