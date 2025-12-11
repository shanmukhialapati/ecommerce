import { Stack } from "expo-router";
import React, { Component } from 'react';
 
 export class Pageslayout extends Component {
   render() {
     return (
        <Stack>
            <Stack.Screen name='Login' />
            <Stack.Screen name='Signup' />
            
        </Stack>
     )
   }
 }
 
 export default Pageslayout;