 import { Stack } from "expo-router";
import React, { Component } from 'react';
 
 export class Pageslayout extends Component {
   render() {
     return (
        <Stack>
            <Stack.Screen name='HomeScreen' />
            <Stack.Screen name='CategoriesScreen' />
        </Stack>
     )
   }
 }
 
 export default Pageslayout;
 