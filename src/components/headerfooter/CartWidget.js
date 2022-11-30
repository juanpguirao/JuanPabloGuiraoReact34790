import React from "react";
import {IconButton,Badge} from "@mui/material/";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom"
import {useCustomProvider} from "../main/CustomProvider";


function CartWidget(){
    const valorDelContexto = useCustomProvider();

    return(
        <IconButton LinkComponent={Link} to="/carrito">
            <Badge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                badgeContent={valorDelContexto.productos.length}
                color="primary">
                <AddShoppingCartIcon ></AddShoppingCartIcon>
            </Badge>
        </IconButton>
    );
}

export default CartWidget;