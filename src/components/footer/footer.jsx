import { AppBar, Button, Container, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import './footer.scss'

export default function Footer() {
    return (
        <Box>
            <AppBar position="static" className="footer">
                <Container maxWidth="md">
                    <Toolbar>
                        <Container className="content">
                            <Typography className="footerText">
                                We are the specialists for your individual Costa Rica adventure!<br />For 20+ years we have been renting 4×4 cars at economic rates.
                            </Typography>
                            <Button className="getFreeQuoteBtn">
                                GET A FREE QUOTE
                            </Button>
                        </Container>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}