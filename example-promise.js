function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback(true, 'City not found');
}

getTempCallback("kathmandu", function (err, temp) {
  if (err) {
    console.log('error', temp);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject("City not found.");
    }, 1000);
  });
}

getTempPromise("kathmandu").then(function (temp) {
  console.log("success promise", temp);
}, function (err) {
  console.log("error promise", err);
});

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a == "number" && typeof b == "number") {
      resolve(a + b);
    } else {
      reject("Both are not of type number");
    }
  });
}

addPromise(3, 4).then(function (sum) {
  console.log("Sum is", sum);
}, function (err) {
  console.log(err);
});

addPromise(3, "do sum here").then(function (sum) {
  console.log("Sum is", sum);
}, function (err) {
  console.log(err);
});
