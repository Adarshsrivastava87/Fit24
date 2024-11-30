import { Platform, SafeAreaView, StatusBar, View } from "react-native"

export const StatusBarWrapper = ({backgroundColor, barStyle, children}) => {
    return(
        <View style={{flex: 1}} >
            <StatusBar 
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            translucent={false} />
            {Platform.OS === 'ios' &&(
                <SafeAreaView style={{flex: 0, backgroundColor: backgroundColor}}/>
            )}
            <SafeAreaView style={{flex: 1}}>
                {children}
            </SafeAreaView>
        </View>
    )
}