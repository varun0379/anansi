import { CardContent, Typography, Card, Grid, CardActionArea } from "@mui/material";
import {Link } from 'react-router-dom'

export default function StoryCard({data}) {
    return (
        <>
            <Link to={`/stories/${data.id}`} style={{textDecoration: 'none'}}>
                <Card raised={true} sx={{margin: 5}}>
                    <CardActionArea>
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
            </Link>
        </>
    )
}