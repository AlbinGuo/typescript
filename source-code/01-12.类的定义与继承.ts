class Person1 {
  name = 'dell'
  getName() {
    return this.name
  }
}

class Teacher1 extends Person1 {
  getTeacherName() {
    return 'Teacher'
  }
  getName() {
    return super.getName() + 'lee'
  }
}

const teacher1 = new Teacher1()
console.log(teacher1.getName())
console.log(teacher1.getTeacherName())
