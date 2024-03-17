import * as React from 'react';
import data from "/public/assets/data.json";
import topArticle from "/public/assets/topArticle.json";
import bottomArticle from "/public/assets/bottomArticle.json";
import CardComp from '../_components/CardComp';
import AppBar from '../_components/AppBar';
import {
  Box, Container, Grid, 
  Paper, Card, CardActionArea, 
  CardContent, Typography, CardMedia, 
  Divider 
} from '@mui/material';



export default function Homepage() {
  return (
    <div>
      <AppBar />
      <Container maxWidth='md' sx={{ marginY: 2, marginX: 'auto' }}>
        <Typography variant="h3" component="h2" sx={{ color: 'red' }}>NEWS</Typography>
        <Card sx={{ maxWidth: 900, display: 'flex', flexDirection: 'row' }} >
          <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{topArticle[0].title}</Typography>
                  <Typography variant="body2" color="text.secondary">{topArticle[0].content}</Typography>
                </CardContent>
              </Grid>
              <Grid item xs={8}>
                <CardMedia component="img" height="300" image={topArticle[0].imageUrl} alt="green iguana" />
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>

        <Box sx={{ flexGrow: 1, marginY: 2, marginX: 'auto' }} >
          <Grid container spacing={2}>
            {bottomArticle.map((article) => (
              <Grid item xs={4} key={article.id} onclick=''>
                <CardComp title={article.title} content={article.content} imageUrl={article.imageUrl} />
              </Grid>
            ))
            }
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="md">

        <Divider sx={{ marginY: 3, marginX: 'auto', borderColor: 'primary.main', borderWidth: '2px', borderStyle: 'solid'}} />

        <Typography variant="h4" component="h4" sx={{ textAlign: 'center', marginY: 5, marginX: 'auto' }}>Most Viewed</Typography>
        <Grid container spacing={3} >
          {data.map((article) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
              <CardComp title={article.title} content={article.content} imageUrl={article.imageUrl} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="md">

        <Divider sx={{ marginY: 3, marginX: 'auto', borderColor: 'primary.main', borderWidth: '2px', borderStyle: 'solid' }} />

        <Typography variant="h4" component="h4" sx={{ marginY: 2, marginX: 'auto' }}>Business</Typography>
        <Grid container spacing={3} >
          {data.map((article) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
              <CardComp title={article.title} content={article.content} imageUrl={article.imageUrl} />
            </Grid>
          ))}
        </Grid>
      </Container>


      <Container maxWidth="md">

        <Divider sx={{ marginY: 3, marginX: 'auto', borderColor: 'primary.main', borderWidth: '2px', borderStyle: 'solid' }} />

        <Typography variant="h4" component="h4" sx={{ marginY: 1, marginX: 'auto' }}>Sports</Typography>
        <Grid container spacing={3} >
          {data.map((article) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
              <CardComp title={article.title} content={article.content} imageUrl={article.imageUrl} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="md">

        <Divider sx={{ marginY: 3, marginX: 'auto', borderColor: 'primary.main', borderWidth: '2px', borderStyle: 'solid' }} />

        <Typography variant="h4" component="h4" sx={{ marginY: 1, marginX: 'auto' }}>Footer</Typography>

      </Container>
    </div>
  )
}