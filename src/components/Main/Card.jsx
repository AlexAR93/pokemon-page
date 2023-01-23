import React from 'react'
import CardStyle from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card({name,useFetchPoke,setCurrentPokemon}) {

  const showMoreDate=()=>{
    setCurrentPokemon({
      state:true,
      name:name
    })
  }

  let {image,height,weight}=useFetchPoke(name);

  return (
    <CardStyle sx={{ maxWidth: 'auto' }}>
      <CardActionArea onClick={showMoreDate}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <ul>
            <li>Fuerza: {weight}</li>
            <li>Altura: {height}</li>
          </ul>
        </CardContent>
      </CardActionArea>
    </CardStyle>
  );
}