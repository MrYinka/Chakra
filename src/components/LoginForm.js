import React, {useState} from "react";
import loginInput from "../hooks/login-hook";


import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text
} from "@chakra-ui/react";

const LoginForm = () => {


    const [enteredName, setEnteredName] = useState('');
    const [nameInputIsClicked, setNameInputIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);


    const nameIsValid = enteredName.trim() !== '';
    const nameHasError = !nameIsValid && nameInputIsClicked

    let formIsValid = false;

    if(nameIsValid){
        formIsValid = true;
    }


    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const nameBlurHandler = () => {
        setNameInputIsClicked(true);
    }

    const submitChangeHandler = e => {
        e.preventDefault()


        console.log('Form Submitted....');
        setEnteredName('')
        setNameInputIsClicked(false);
        setLoading(false);
    }






    return (
      <Box w='800px' bg='gray.1000' boxShadow='lg' rounded='lg' borderRadius='lg' m='auto' mt='12' p={10}>
          <Container>
              <Stack spacing={3}>
                  <Heading as="h1" size="md" isTruncated color='white'>
                      LogIn Form
                  </Heading>

                  <form onSubmit={submitChangeHandler}>
                      <FormControl id="name">
                          <FormLabel>Name</FormLabel>
                          <Input
                              type="text"
                              value={enteredName}
                              onChange={nameChangeHandler}
                              onBlur={nameBlurHandler}
                              focusBorderColor="lime"
                              isInvalid={nameHasError}

                          />
                          {!nameHasError && <FormHelperText>We'll never share your details ✌️ </FormHelperText>}
                          {nameHasError && <FormHelperText color='pink'>Enter a valid name 😏 </FormHelperText>}

                      </FormControl>

                      <Button
                          variant='outline'
                          type="submit"
                          colorScheme="blue"
                          mt='5'
                          disabled={!formIsValid}
                          isLoading={loading}
                          loadingText={!loading ? '' : 'Submitting' }
                      >
                          Submit
                      </Button>
                  </form>

              </Stack>
          </Container>

      </Box>
  )

};



export default LoginForm;