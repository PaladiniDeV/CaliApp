import * as React from 'react'

//imports components
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'

//screens
import Welcome from './screens/Welcome'
import Home from './screens/Home'
import Basics from './screens/Basics'
import Statics from './screens/Statics'
import Godset from './screens/Godset'
import Principiante from './screens/Principiante'
import Intermedio from './screens/Intermedio'
import Avanzado from './screens/Avanzado'
import Back from './screens/Back'
import Front from './screens/Front'
import Full from './screens/Full'
import Handstand from './screens/Handstand'
import Straddle from './screens/Straddle'
import Desafio from './screens/Desafio'
import GsUno from './screens/GsUno'
import GsDos from './screens/GsDos'
import GsTres from './screens/GsTres'
import GsCuatro from './screens/GsCuatro'
import GsCinco from './screens/GsCinco'

//stack navigator para navegar entre las diferentes pantallas
const Stack = createNativeStackNavigator()
 
const MainStack = () => {
 
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions = {{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name = 'Welcome'
                    component = { Welcome }
                    screenOptions = {{
                        headerShown: false,
                    }}
                />
                
                <Stack.Screen
                    name = 'Home'
                    component = { Home }
                />

                <Stack.Screen
                    name = 'Basics'
                    component = { Basics }
                />

                <Stack.Screen
                    name = 'Statics'
                    component = { Statics }
                />

                <Stack.Screen
                    name = 'Godset'
                    component = { Godset }
                />

                <Stack.Screen
                    name = 'Principiante'
                    component = { Principiante }
                />

                <Stack.Screen
                    name = 'Intermedio'
                    component = { Intermedio }
                />

                <Stack.Screen
                    name = 'Avanzado'
                    component = { Avanzado }
                />

                <Stack.Screen
                    name = 'Back'
                    component = { Back }
                />

                <Stack.Screen
                    name = 'Front'
                    component = { Front }
                />

                <Stack.Screen
                    name = 'Full'
                    component = { Full }
                />

                <Stack.Screen
                    name = 'Handstand'
                    component = { Handstand }
                />

                <Stack.Screen
                    name = 'Straddle'
                    component = { Straddle }
                />

                <Stack.Screen
                    name = 'Desafio'
                    component = { Desafio }
                />

                <Stack.Screen
                    name = 'GsUno'
                    component = { GsUno }
                />

                <Stack.Screen
                    name = 'GsDos'
                    component = { GsDos }
                />

                <Stack.Screen
                    name = 'GsTres'
                    component = { GsTres }
                />

                <Stack.Screen
                    name = 'GsCuatro'
                    component = { GsCuatro }
                />  

                <Stack.Screen
                    name = 'GsCinco'
                    component = { GsCinco }
                /> 

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;