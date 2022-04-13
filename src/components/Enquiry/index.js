import { Button, Container, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box, } from '@mui/system'
import React from 'react'




export const Enquiry = () => {
    return (
        <Box position='relative'  bgcolor='#FED5C3' alignContent='center' marginTop={10}>
            <Container fixed sx={{ padding: '100px 0', display: 'flex',  alignItems: 'center' }}>
                <Grid
                    container
                    xl="12" lg='12' md="12" xs="12"
                    spacing={10}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                >
                     <Grid item xl="6" lg='6' md="6" xs="12" >
                        <Typography variant="h4" >
                            Enquiry Now
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit pharetra vestibulum vitae nibh rhoncus, amet, sit. Nunc maecenas mauris massa eget viverra.
                        </Typography>
                    </Grid>
                    <Grid item xl="6" lg='6' md="6" xs="12" >
                        <form >
                            <Box sx={{ display: 'flex', alignItems: 'center',  gap: '15px', }}>
                                <Box>
                                    <Typography variant='h6' > First Name</Typography>
                                    <TextField placeholder="Enter First Name" variant="outlined" size="small" style={{ backgroundColor: 'white', borderRadius: '4px' }} />
                                </Box>
                                <Box>
                                    <Typography variant='h6'> Last Name</Typography>
                                    <TextField placeholder="Enter Last Name" variant="outlined" size="small" style={{ backgroundColor: 'white', borderRadius: '4px' }} />
                                </Box>

                            </Box>

                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '15px', }} marginTop={3}  >
                                <Box>
                                    <Typography variant='h6'> Phone </Typography>
                                    <TextField placeholder="Enter Phone " variant="outlined" size="small" style={{ backgroundColor: 'white', borderRadius: '4px' }} />
                                </Box>
                                <Box>
                                    <Typography variant='h6'> First Name</Typography>
                                    <TextField placeholder="Enter Email Adress" variant="outlined" size="small" style={{ backgroundColor: 'white', borderRadius: '4px' }} />
                                </Box>

                            </Box>
                            <Box marginTop={3} flexDirection='column' >

                                <Typography variant='h6'> Message</Typography>
                                <TextField
                                    size="large"
                                    aria-label="minimum height"
                                    minRows={10}
                                    placeholder="write message.."
                                    style={{ backgroundColor: 'white', border: 'none', borderRadius: '4px', width: '100%' }}
                                />

                                <Button size="large" variant="contained" color="primary" sx={{ px: '30px', marginTop: '50px', mt: '20px' }}>
                                    Send
                                </Button>
                            </Box>
                        </form>
                    </Grid>
                    </Grid>
            </Container>
        </Box>
    )
}
