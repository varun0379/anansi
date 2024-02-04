import { CardContent, Typography, Card, Grid, CardActionArea, Button } from "@mui/material";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function StoryCard({data}) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
                <Card raised={true} sx={{margin: 5}}>
                    <CardActionArea onClick={handleClickOpen}>
                        <CardContent>
                            <Grid container spacing={2} 
                                justifyContent={'flex-start'}
                                alignItems={'center'}
                                textAlign={'start'}>
                                    <Grid item xs={12} sm={9}>
                                        <Typography variant="h3" component="div">
                                            {data.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <Typography>
                                            Author: {data.author}
                                        </Typography>
                                        
                                        <Typography>
                                            Published: {data.time_published}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {data.story_body_en.substring(0,300)}...
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>
                                            Tags: {data.tags}
                                        </Typography>
                                    </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
            <BootstrapDialog onClose={handleClose} open={open}>
                <DialogTitle>
                    {data.title}
                </DialogTitle>
                <DialogContent dividers>
                    {data.story_body_en}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    )
}