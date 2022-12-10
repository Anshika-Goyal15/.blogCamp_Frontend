import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">.blogCamp</Typography>
                <Text variant="h5"> 
                    Hey Everyone!! <br></br>.blogCamp is a Blogging Website where you can post your creative ideas and post your blogs according to your interested fields and categories and much more.
                    Here, you can ready and enjoy articles on various fields of your interests and contribute for the same.
                    <br></br>
                </Text>
                <Text variant="h5">
                    Hava a great visit !!
                    <br></br>
                    Hope you will make your Creative and Thoughtful Contribution here!!
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;