function deepClone(obj) {
  let res = {}
  // 类型判断的通用方法
  function getType(obj) {
    return Object.prototype.toString
      .call(obj)
      .replaceAll(new RegExp(/\[|\]|object /g), "")
  }
  const type = getType(obj)
  const reference = [
    "Set",
    "WeakSet",
    "Map",
    "WeakMap",
    "RegExp",
    "Date",
    "Error",
  ]
  if (type === "Object") {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        res[key] = deepClone(obj[key])
      }
    }
  } else if (type === "Array") {
    console.log("array obj", obj)
    obj.forEach((e, i) => {
      res[i] = deepClone(e)
    })
  } else if (type === "Date") {
    res = new Date(obj)
  } else if (type === "RegExp") {
    res = new RegExp(obj)
  } else if (type === "Map") {
    res = new Map(obj)
  } else if (type === "Set") {
    res = new Set(obj)
  } else if (type === "WeakMap") {
    res = new WeakMap(obj)
  } else if (type === "WeakSet") {
    res = new WeakSet(obj)
  } else if (type === "Error") {
    res = new Error(obj)
  } else {
    res = obj
  }
  return res
}

console.log(Object.prototype.toString.call("sss"))
