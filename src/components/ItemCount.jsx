import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Flex,
  Spacer,
  Text,
  IconButton
} from "@chakra-ui/react";
import { Icon,
  AddIcon,
  MinusIcon 
} from '@chakra-ui/icons'


function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const restar = () => {
    if (count - 1 >= initial) setCount(count - 1);
  };

  return (
    <Card maxW="sm">
      <CardBody bg="#E2E8F0">
        <Flex minWidth="max-content" alignItems="center">
          <IconButton icon={<MinusIcon /> } onClick={restar} colorScheme="teal"
            variant="outline"/>
          <Spacer />
          <p>{count}</p>
          <Spacer />
          <IconButton icon={<AddIcon/>} onClick={sumar} colorScheme="teal"
            variant="outline"/>
          <Spacer />
          {count >= initial && (
            <Button colorScheme="teal" size="sm"  fontSize="lg" /* onClick={() => onAdd(count)} */>
              Agregar al carrito
            </Button>
          )}
          <Spacer />
        </Flex>
      </CardBody>
    </Card>
  );
}

export default ItemCount;



