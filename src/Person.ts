class Persona {
  _name: string
  constructor(_name: string) {
    this._name = _name
  }
  run(): string {
    return this._name
  }
}

class Web extends Persona {
  constructor(name: string) {
    super(name) /*初始化父类的构造函数*/
  }
  work(): string {
    return this.name + '在工作'
  }
}
let a = new Web('李雷')
console.log(a.run())
console.log(a.work())

const tupleFruit: [string, string, number] = ['aaaaaa', 'bbbbbbb', 111111]
const fruits: (string | number)[] = ['a', 'b', 11, 'cc']
fruits.forEach(item => console.log('===item===', item))
tupleFruit.forEach(item => console.log('===tupleFruit===', item))
