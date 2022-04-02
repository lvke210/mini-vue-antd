let activeEffect

class Dep {
  constructor(value) {
    this.subscrib = new Set()
    this._value = value
  }

  get name() {
    dep.depend()
    return this._value
  }

  set name(newValue) {
    this._value = newValue
    dep.notify()
  }

  depend() {
    if (activeEffect) {
      this.subscrib.add(activeEffect)
    }
  }

  notify() {
    this.subscrib.forEach((effect) => {
      effect()
    })
  }
}

function wattchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

const dep = new Dep("hello")

wattchEffect(() => {
  console.log(dep.name)
})
dep.name = "changed"
