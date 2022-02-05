import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Node.js',
    },
    {
      id: 4,
      name: 'Mark',
      age: 87,
      skill: 'Vue.js',
    },
  ]
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ))

  return <div>{personList}</div>
}

export default NameList
