import React, {useState} from 'react'
import personService from '../services/persons'

const PersonForm = (props) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    const addPerson = (event) =>{
        event.preventDefault()
        const personObj = {name: newName, number: newNumber, id: props.persons.length+1}
        if(props.persons.some(person=>person.name===newName)) {
            let result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if(result===true){
                const x = props.persons.find(n=>n.name===newName)
                console.log('x', x)
                const url = `http://localhost:3001/persons/${x.id}`
                console.log('u', url)
                const changedPerson = { ...x, number: newNumber }
                console.log('ch', changedPerson)
                personService.changeNumberServer(url, changedPerson)
                    .then(response=>{
                        const newPersons = props.persons.map(person=> person.name !== newName ? person: response.data)
                        props.setPersons(newPersons)
                    })
            }
        }else {
            personService.addPersonServer(personObj)
                .then(response=>{
                    props.setPersons(props.persons.concat(response.data))
                })
            props.setPersons(props.persons.concat(personObj))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNameChange = (event) =>{
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) =>{
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return(
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm