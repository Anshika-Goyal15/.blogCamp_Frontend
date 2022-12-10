import {Box, TextField, Button, styled,Typography} from '@mui/material';
import './Login.css';
import {useState, useContext} from 'react';
import { API } from '../service/api.js';
import { DataContext } from '../context/DataProvider';
import {useNavigate} from 'react-router-dom';


const Component = styled(Box)`
width:400px;
margin: auto;
box-shadow: 7px 5px 7px 5px rgb(0 0 0/0.6);
background-color:white;
margin-top:120px;
`;

const Heading = styled('p')`
font-size:40px;
font-weight:bold;
font-family:"Lucida Handwriting";
display:flex;
padding:10px 0 0
`;

const Wrapper = styled(Box)`
padding: 10px 20px;
display:flex;
flex:1;
flex-direction: column;
& > div, & > button, & >p {
    margin-top:15px;
}
`;

const Loginbt = styled(Button)`
background-color: #a8325e;
border-radius: 5px;
`;

const Signupbt = styled(Button)`
box-shadow: 3px 2px 3px 2px rgb(0 0 0/0.3);
border-radius:4px;
`;

const Error = styled(Typography)`
font-size:10px;
color: red;
line-height:0;
margin-top:10px;
font-weight: bold;
`;

const signupInitialValues ={
    name:'',
    username:'',
    email:'',
    password:''
}

const loginInitialValues = {
    username:'',
    password:''
}

const Login = ({isUserAuthenticated}) =>{

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');
    const [login,setLogin] = useState(loginInitialValues);

    const {setAccount} = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) =>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }

    const onValueChange = (e) =>{
        setLogin({...login,[e.target.name]:e.target.value});
    }

    const signupUser = async() =>{
       let response = await API.userSignup(signup);
       if(response.isSuccess)
       {
        setError('');
        setSignup(signupInitialValues);
        toggleAccount('login')
       }
       else
       {
         setError('Something went Wrong! Try again later')
       }
    }

    const loginUser = async() =>{
        let response = await API.userLogin(login);
        if(response.isSuccess)
        {
            setError('');

            sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken',`Bearer ${response.data.refreshToken}`);

            setAccount({username: response.data.username, name: response.data.name})

            isUserAuthenticated(true);
            
            navigate('/');


        }
        else
        {
            setError('Something went Wrong! Try again later')
        }
    }


    return(
        <div className='abc'>
            <Component>
                <Box>
                    <Heading>.blogCamp</Heading>
                    {
                        account === 'login' ? 
                            <Wrapper>
                                <TextField variant='standard'value={login.username} onChange={(e) => onValueChange(e)} name="username" label='Enter Username'/>
                                <TextField variant='standard'value={login.password} onChange={(e) => onValueChange(e)} name="password" label='Enter Password'/>

                                {error && <Error>{error}</Error>}
                                <Loginbt variant='contained' onClick={() =>loginUser()}>Login</Loginbt>
                                <Typography style={({textAlign: 'center'})}>OR</Typography>
                                <Signupbt onClick={() => toggleSignup()}>Create an Account</Signupbt>
                            </Wrapper>
                    :        
                            <Wrapper>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='name'label='Enter Name'/>  
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username'label='Enter Username'/>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email'label='Enter Email'/>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password'label='Enter Password'/>

                                
                                <Loginbt variant='contained'onClick={() => signupUser()}>SignUp</Loginbt>
                                <Typography style={({textAlign: 'center'})}>OR</Typography>
                                <Signupbt onClick={() =>toggleSignup()}>Already have an Account</Signupbt>
                            </Wrapper>
                    }
                </Box>
            </Component>
        </div>
    )
}





export default Login;