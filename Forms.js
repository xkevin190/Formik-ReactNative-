import React, { Component } from 'react'
import InputField from '../../components/Input'
import {Formik} from 'formik'
import { Button , Text}  from 'react-native'
import * as yup from 'yup';
const initialValues ={
  email:'hello',
  password:'world'
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('El Email no es valido')
    .required(),
  password: yup
    .string()
    .label('Password')
    .required('La contraseña es requerida'),
});

export default class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  handleSubmit=(values)=>{
    console.log('hello ',values)
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
    return (
        <Formik
          InitialValues={initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={validationSchema}
          render = {({values , handleSubmit, setFieldValue, errors }) =>(
           <>
            <InputField label='Email'
             value={values.email}
             onChange={setFieldValue}
             name='email'
             error={errors.email}
             />
            <InputField label ='Password' 
             value={values.password}
             onChange={setFieldValue}
             name='password'
             error={errors.password}
             />
            <Button
                style={{marginTop:40}}
                onPress={handleSubmit}
                title="Submit"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
              />
           </> 
          )}
            
      />  
      
    )
  }
}

