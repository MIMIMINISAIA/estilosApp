import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Item {
    id: string;
    nome: string;
    idade: string;
    email: string;
}

const dados: Item[] = [
    {id:"1" , nome:"sumida" , idade:"88" , email:"sumida@gmail.com" },
    {id:"2" , nome:"henrigay" , idade:"16" , email:"henrigay@gmail.com" },
    {id:"3" , nome:"guigay" , idade:"17" , email:"guigay@gmail.com" },
    {id:"4" , nome:"sumida" , idade:"88" , email:"sumida@gmail.com" },
    {id:"5" , nome:"henrigay" , idade:"16" , email:"henrigay@gmail.com" },
    {id:"6" , nome:"guigay" , idade:"17" , email:"guigay@gmail.com" },
    {id:"7" , nome:"sumida" , idade:"88" , email:"sumida@gmail.com" },
    {id:"8" , nome:"henrigay" , idade:"16" , email:"henrigay@gmail.com" },
    {id:"9" , nome:"guigay" , idade:"17" , email:"guigay@gmail.com" },
    {id:"10" , nome:"sumida" , idade:"88" , email:"sumida@gmail.com" },
    {id:"11" , nome:"henrigay" , idade:"16" , email:"henrigay@gmail.com" },
    {id:"12" , nome:"guigay" , idade:"17" , email:"guigay@gmail.com" },

];

const renderItem = ({item}: {item: Item})=>(
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.email}</Text>
        <Text>{item.idade}</Text>


    </TouchableOpacity>
);

function FlatListExample(): React.JSX.Element {
    return (
        <View style={ styles.container} >
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Flat List</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image
                    source={require('./assets/images/home.png')}
                    style={ styles.footerIcon}
                />
            </TouchableOpacity>


            <TouchableOpacity>
                <Image  source={require('./assets/images/orders.png')}
                style={styles.footerIcon}
                />
                
            </TouchableOpacity>


            <TouchableOpacity>
                <Image   source={require('./assets/images/profile.png')}
                style={styles.footerIcon}
                />
                
            </TouchableOpacity>
        </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        

    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16

    },
    header: {
       backgroundColor: 'blue',
       alignItems: 'center',
       paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10


    },
    footerIcon: {
        width: 30,
        height: 30

    }


})
export default FlatListExample;