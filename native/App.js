import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import WithTimer from 'core/hocs/timer'

const App = (props) => {
  const { time, reset } = props
  return (
    <View style={styles.container}>
      <Text> {time} </Text>
      <Button onPress={reset} title='Reset' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default WithTimer(App)
