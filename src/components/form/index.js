import React, {useState} from "react"
import {Text, TextInput, View, keyExtractor,TouchableOpacity, Vibration, Pressable, Keyboard, FlatList} from "react-native"
import ResultImc from "./ResultImc/";
import styles from "./style";

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("PREENCHA O PESO E ALTURA")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)
const [imcList, setImcList] = useState([])

function imcCalculator(){
    let heightFormat = height.replace(",",".")
    let weightFormat = weight.replace(",",".")
    let totalImc = (weightFormat/(heightFormat*heightFormat)).toFixed(2);
    setImcList ((arr) => [...arr,{id: new Date().getTime(), imc: totalImc}])
    setImc (totalImc)
}

function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage("Campo Obrigatorio*")
    }
}

function validationImc(){
    console.log(imcList)
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual:")
        setTextButton("Calcular Novemente")
        setErrorMessage(null)
    }
    else{
        verificationImc()
        setImc(null)
        setMessageImc("PREENCHA O PESO E ALTURA")
        setTextButton("Calcular")
    }
}
 
    return (
        <View style={styles.formContext}>
            {imc == null ?  
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.formImput} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.formImput} onChangeText={setWeight} value={weight} placeholder="Ex. 75.365" keyboardType="numeric"/>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TouchableOpacity style={styles.formButton} onPress={() => {validationImc()}}>
                    <Text style={styles.textformButton}>{textButton}</Text>
                </TouchableOpacity>
            </Pressable>
            : 
            <View style={styles.exibitionResultimc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <TouchableOpacity style={styles.formButton} onPress={() => {validationImc()}}>
                    <Text style={styles.textformButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList showsVerticalScrollIndicator={false} style={styles.listImcs} data={imcList.reverse()} 
                renderItem={({item}) => {
                    return(
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) =>{
                    item.id
                }}
                />
        </View>
    );
}