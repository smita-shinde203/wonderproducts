import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const Client = () => {
    return (
        <>
            <Box className="half-banner" sx={{ display: 'flex', alignItems: { md: 'flex-end', xs: 'center' } }}>
                <Container fixed>
                    <img src={require("../../ui/assets/Clients/clients.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
                </Container>
            </Box>
            <Box flexDirection='column' bgcolor='#FBFBFB' sx={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '30px' }}  >
                <Container fixed sx={{ padding: '100px, auto', marginY: '100px' }} >
                    <Grid container  >
                        {details.map((item, index) =>
                            <Grid key={index} lg='4' md='6' xs='12' sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}  >
                                <Box sx={{
                                    width: { md: "350px", xs: '100%' },
                                    height: "auto",
                                    background: "#FFFFFF",
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)",
                                    borderRadius: "8px",
                                    padding: '20px',
                                    margin:'20px'
                                }} >
                                    <Box sx={{ background: ' rgba(180, 201, 206, 0.16)', borderRadius: "8px", textAlign: 'center', padding: '20px' }}>
                                        {item.image}
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%', padding: '10px' }}>
                                        <Typography variant='h5' textAlign='left'>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Box>

                            </Grid>
                        )}

                    </Grid>
                </Container>
            </Box>
        </>
    )
}


const details = [
    {
        image: <img src={require("../../ui/assets/Clients/kindpng_7269149 1.png")} alt="" />,
        title: 'Himalaya'
    },
    {
        image: <img src={require("../../ui/assets/Clients/image 80 (1).png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'Vini Cosmetics '
    },
    {
        image: <img src={require("../../ui/assets/Clients/image 81.png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'Dabur'
    },
    {
        image: <img src={require("../../ui/assets/Clients/image 82.png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'ITC Limited'
    },
    {
        image: <img src={require("../../ui/assets/Clients/Group 1000001769.png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'Nivea'
    },
    {
        image: <img src={require("../../ui/assets/Clients/PngItem_1057053 2.png")} alt="" style={{ height: "100px", width: '100px' }} />,
        title: 'Chicco'
    },
]