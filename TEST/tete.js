var arr = [{
    "user_id": 1,
    "user_name": "Abcd"
  },
  {
    "org_id": 11,
    "org_name": "some_name"
  }
];

arr.forEach(a => {
  Object.keys(a).forEach(k => {
    newK = k.replace(/(\_\w)/g, (m) => m[1].toUpperCase());
    a[newK] = a[k];
    delete a[k];
  });
});

console.log(arr);