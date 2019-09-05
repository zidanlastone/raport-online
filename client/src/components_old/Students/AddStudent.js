import React,{ useState } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Button, Form } from 'react-bootstrap';
import {
    addStudents
} from '../../redux/actions/studentsActions';


const FormTemplate = (props) => {
    return(
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            {props.type !== 'select' ? (
                    <Form.Control
                        name={props.name}
                        value={props.value}
                        as={props.as}
                        onChange={props.func}
                        type={props.type}
                        placeholder={props.placeholder}/>
                ):(
                <Form.Control name={props.name} onChange={props.func} as="select">
                    {props.options.map((op,i) => (
                        <option key={i} value={op}>{op}</option>
                    ))}
                </Form.Control>
                )
            }
        </Form.Group>
    )
}

function AddStudent(props) {

    const [ name, setName ] = useState('');
    const [ nis,setNis ] = useState('');
    const [nisn, setNisn] = useState('');
    const [birthLocation, setBirthLocation] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [religion, setReligion] = useState('');
    const [address, setAddress] = useState('');
    const forms = [
        {
            name: 'name',
            as:'input',
            label:'Name',
            type: 'text',
            value: name,
            func: (e) => {
                setName(e.target.value);
            },
            placeholder: 'insert student name'
        },
        {
            name: 'nis',
            as: 'input',
            label:'NIS',
            type: 'number',
            value: nis,
                func: (e) => {
                    setNis(e.target.value);
                },
            placeholder: 'insert student nis'
        },
        {
            name: 'nisn',
            as: 'input',
            label:'NISN',
            type: 'number',
            value: nisn,
                func: (e) => {
                    setNisn(e.target.value);
                },
            placeholder: 'insert student nisn'
        },
        {
            name: 'birthLocation',
            as: 'input',
            label:'Birth Location',
            type: 'text',
            value: birthLocation,
                func: (e) => {
                    setBirthLocation(e.target.value);
                },
            placeholder: 'insert student birth Location'
        },
        {
            name: 'birthDate',
            as: 'input',
            label:'Birth Date',
            type: 'date',
            value: birthDate,
                func: (e) => {
                    setBirthDate(e.target.value);
                },
            placeholder: 'insert student birth date'
        },
        {
            name: 'gender',
            as: 'select',
            labbel: 'Gender',
            type: 'select',
            value: gender,
                func: (e) => {
                    setGender(e.target.value);
                },
            options: ['Select Gender','Male', 'Female'],
            placeholder: 'insert student gender'
        },
        {
            name: 'religion',
            as: 'select',
            label: 'Religion',
            type: 'select',
            value: religion,
                func: (e) => {
                    setReligion(e.target.value);
                },
            options: ['Select Religion','Islam', 'Kristen', 'Katholik', 'Budha', 'Hindu','Konghucu'],
            placeholder: 'insert student religion'
        },
        {
            name: 'address',
            as: 'textarea',
            label: 'Address',
            type: 'textarea',
            value: address,
                func: (e) => {
                    setAddress(e.target.value);
                },
            placeholder: 'insert student address'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        let newStudents = {
            name,
            nis,
            nisn,
            birthLocation,
            birthDate,
            gender,
            religion,
            address
        }
        props.addStudents(newStudents);
    }

    return (
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                {forms.map((form,i) =>(
                    <FormTemplate
                        key={i}
                        label={form.label}
                        value={form.value}
                        func={form.func}
                        as={form.as}
                        type={form.type}
                        options={form.options}
                        placeholder={form.placeholder}/>
                ))}
                <Button type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

AddStudent.propTypes = {
    addStudents: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    addStudents
}

export default connect(
    null,
    mapDispatchToProps
)(AddStudent);

