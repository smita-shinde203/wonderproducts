import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

export const Location = () => {
    const [show, setShow] = React.useState(1)
    console.log(show)


    return (
        <>
            <Box className="half-banner" sx={{ display: 'flex', alignItems: { md: 'flex-end', xs: 'center' } }}>
                <Container fixed>
                    <img src={require("../../ui/assets/Location/locations.png")} alt="" style={{ position: 'absolute', width: '80%', bottom: '10px', }} />
                </Container>
            </Box>

            <Container fixed sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
                <Grid container  >
                    <Grid item xl="4" md="4" xs="12" >
                        {Locations.map((item, index) =>
                            <Box
                            onClick={() => setShow(index)}
                            sx={{ background: show === index && "#FED5C3", boxShadow: "14px 31px 40px rgba(0, 0, 0, 0.05)", textAlign: 'center', cursor: 'pointer', padding:'20px', margin:'20px auto' }}
                            >
                                {item.title}
                            </Box>
                        )}
                    </Grid>
                    <Grid item xl="8" md="8" xs="12" >
                        {Locations.filter((data) => data.id == show).map((item, index) =>
                        (
                            <>
                                <iframe src={item.link} title="map"
                                    style={{ width: '100%', height: '100vh', border: '0px' }}
                                    allowfullscreen="" loading="lazy" />
                            </>
                        )
                        )}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


const Locations = [
    {
        id: '0',
        title: 'Vanesa cosmetics',
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612272.0964061805!2d73.78178517036567!3d17.633085205332723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26db900008b51%3A0xebf3979d1af2cb85!2sKoyna%20Wildlife%20Sanctuary!5e0!3m2!1sen!2sin!4v1650022150985!5m2!1sen!2sin"
    },
    {
        id: '1',
        title: 'Wonder Products',
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30369.085991924945!2d73.63127207907061!3d17.925821316502613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2655313cba1bb%3A0xca8196c7aa20a0a8!2sMahabaleshwar%2C%20Maharashtra%20412806!5e0!3m2!1sen!2sin!4v1650022188503!5m2!1sen!2sin"
    },
    {
        id: '2',
        title: 'Pritam international',
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30424.80024154531!2d73.83881527877384!3d17.597984228961813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc23d6fd5eaedb7%3A0x7b02938ae9fe05b7!2sThoseghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650022274632!5m2!1sen!2sin"
    },
    {
        id: '3',
        title: 'Sai corporation',
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60833.353539058655!2d73.73358043536541!3d17.64615190844222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc216a059a83a5f%3A0x2755c73ab67df22a!2sVasota%2C%20Maharashtra%20415013!5e0!3m2!1sen!2sin!4v1650022315013!5m2!1sen!2sin"
    },
    {
        id: '4',
        title: 'Wonder hygiene',
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15205.164506992069!2d73.82843317962543!3d17.683702156425383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2158be22de4bb%3A0xc2e53ffa50d8363d!2sPateghar%2C%20Maharashtra%20415013!5e0!3m2!1sen!2sin!4v1650022424126!5m2!1sen!2sin"
    },
    {
        id: '5',
        title: 'Sadhana industries',
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62316.390214486906!2d73.76804469772813!3d17.684875591127266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2158052a3ab33%3A0xf0443863bb202d24!2sVajrai%20waterfall%20viewing%20point!5e0!3m2!1sen!2sin!4v1650022470029!5m2!1sen!2sin"
    },
    {
        id: '6',
        title: 'Saitech medicare Pvt Ltd',
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170757.92226631177!2d73.86389602796596!3d17.80241848935084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2660326292d1b%3A0x7b364992c7d16bfc!2sPanchgani%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650022550343!5m2!1sen!2sin"
    },
]

