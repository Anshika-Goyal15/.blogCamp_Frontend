import {Box, Typography, styled} from '@mui/material';
import Img from '../Images/c.jpg'

const Image = styled(Box)`
background: url(${Img}) center/50% repeat-x #000;
width:100%;
height: 50vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`;

const Heading = styled(Typography)`
font-size:90px;
color: yellow;
line-height:1;
`;

const Subheading = styled(Typography)`
font-size:20px;
background: #FFFFFF;
`;
const Banner = () =>{
    return(

        <Image>
            <Heading>BLOG</Heading>
            <Subheading>.blogCamp</Subheading>
        </Image>
    )
}



export default Banner;
