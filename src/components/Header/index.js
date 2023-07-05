import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { MotiView, MotiText } from 'moti'
import { styles } from "./style";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header({ name }){
    return(
        <View style={styles.container}>
            <MotiView 
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0
                }}
                animate={{
                    translateY: 0,
                    opacity: 1
                }}
                transition={{
                    type: 'timing',
                    duration: 800,
                    delay: 300
                }}
            >
                <MotiText 
                    style={styles.userName}
                    from={{
                        translateX: -300
                    }}     
                    animate={{
                        translateX: 0
                    }}      
                    transition={{
                        type: "timing",
                        duration: 800,
                        delay: 800
                    }}    
                >
                    {name}
                </MotiText>

                <TouchableOpacity style={styles.buttonUser} activeOpacity={0.9}>
                    <Feather name="user" size={27} color='#fff'/>
                </TouchableOpacity>
            </MotiView>
        </View>
    )
}

