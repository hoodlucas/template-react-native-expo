// 1. Importar react como tecnología
import React from "react"; 
import { Text, TextComponent, StyleSheet } from "react-native";

type Props = {
    title: string
}

// 2. Declarar componente
function ItemTask({title}: Props) {
    return (
        <Text style={style.text}>{title}</Text>
    )
}

const style = StyleSheet.create({
    text : {
        color: 'red'
    }
})


// 3. Exportarlo
export default ItemTask;