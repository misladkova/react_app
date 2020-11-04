import React from 'react'
import Person from "./Person";

const Persons = (props) => {
    const personsFiltered = props.persons.filter(person=>person.name.toLowerCase().includes(props.newFilter))
    return(
        <ul>
            {personsFiltered.map(person=> <Person key={person.id} name={person.name} number={person.number}/>)}
        </ul>
    )
}

export default Persons