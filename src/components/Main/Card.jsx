import React from 'react'
import CardStyle from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card({name,useFetchPoke,setCurrentPokemon}) {

  const showMoreDate=(e,currentPokemon)=>{
    setCurrentPokemon(c=>({
      state:true,
      name:currentPokemon
    }))
  }

  return (
    <CardStyle sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={e=>showMoreDate(e,name)}>
        <CardMedia
          component="img"
          height="140"
          image={useFetchPoke(name).image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <ul>
            <li>Fuerza: {useFetchPoke(name).weight}</li>
            <li>Altura: {useFetchPoke(name).height}</li>
          </ul>
        </CardContent>
      </CardActionArea>
    </CardStyle>
  );
}