import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import logo from "../logo.svg";

function Product() {
  // TODO 商品情報を取得する

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="300" image={logo} alt="商品名" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            商品名
          </Typography>
          <Typography variant="body2" color="text.secondary">
            説明です。
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;