import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MotiView, AnimatePresence, MotiText } from "moti";
import { styles } from "./style";

export default function Movements({data}){

    const [show, setShow] = useState(false)

    return(
        <TouchableOpacity style={styles.container} onPress={() => setShow(!show) }>
            <Text style={styles.date}>
                {data.date}
            </Text>

            <View style={styles.content}>
                <Text style={styles.label}>
                    {data.label}
                </Text>

                {show ? (
                    <AnimatePresence exitBeforeEnter>
                        <MotiText 
                            style={data.type === 1 ? styles.balance  : styles.expenses}
                            from={{
                                translateX: 100
                            }}
                            animate={{
                                translateX: 0
                            }}
                            transition={{
                                type: 'timing',
                                duration: 500
                            }}
                        >
                            R${data.type === 0 ? '-' : ''}{data.value}
                        </MotiText>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence exitBeforeEnter>
                        <MotiView 
                            style={styles.hidden}
                            from={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                type: 'timing'
                            }}
                        ></MotiView>
                    </AnimatePresence>
                )}
            </View>
        </TouchableOpacity>
    )
}

