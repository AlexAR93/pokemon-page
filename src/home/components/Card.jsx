import React from 'react'
import CardStyle from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPokemon, showPokemon } from '../../store';

export function Card({data}) {
  const dispatch=useDispatch();
  const {name,image,weight,height}= data;

  const showMoreDate=()=>{
    dispatch(getPokemon(name))
    dispatch(showPokemon());
  }


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
            {name.toUpperCase()}
          </Typography>
          <ul>
            <li>Weight: {weight}</li>
            <li>Height: {height}</li>
          </ul>
        </CardContent>
      </CardActionArea>
    </CardStyle>
  );
}