import { Container,  Grid,  Typography } from '@mui/material'
import { Box,} from '@mui/system'
import React from 'react'

export const Services = () => {
    return (
        <Box  bgcolor='#FBFBFB' alignContent='center' >
             <Container fixed  sx={{ padding: '100px 0', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography variant='h3'   >Our Services</Typography>
            <Grid container xs='12' sm='12' md='12' lg='12' xl='12' sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop:'60px',  gap:'100px' }}>
                {services.map((item, index) => <Grid item xs='6' sm='6' md='6' lg='3' xl='3' margin={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding:'10px auto' ,bgcolor:'#FFFFFF', borderRadius:'10px', }}  >
                    <Box key={index}   margin={2}  sx={{justifyContent: 'center', display: 'flex'}} flexDirection='column'  >
                        <Box flexDirection='column' sx={{ justifyContent: 'center', display: 'flex',}}  >
                            <Typography variant='h4' >
                                {item.title}
                            </Typography>
                        </Box>
                        <Box width='25%' border='3px solid #FED5C3'  bgcolor='#FED5C3'  mt={1}   />
                        <Box margin='30px auto'>
                        <Typography >
                            {item.desc}
                        </Typography>
                        </Box>
                    </Box>
                    </Grid>
                )}
            </Grid>
            </Container>
        </Box>
    )
}


const services = [
    {
        title: 'Contract Manage',
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time. We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
    {
        title: 'Private Label',
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time. We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
    {
        title: 'Term Key and Startup',
        desc: 'We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time. We have everything that you need to manufacture world class product. From research to delivery we have everything of our own, thats why we are always on right time.'
    },
]