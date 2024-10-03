import { useState } from "react"
import { Button, StyleSheet, TextInput } from "react-native"
import { globalStyles } from "./global-styles"

type Props = {
  id: number
  title: string
  setShow: (taskId: number) => void
  changeTitle: (taskId: number, title: string) => void
}
export const Input = (props: Props) => {

  const [value, setValue] = useState(props.title)
  const changeTitle = (title: string) => {
    setValue(title)
  }

  return (
    <>
      <TextInput
        style={[globalStyles.border, styles.input]}
        value={value}
        onChangeText={(title) => changeTitle(title)} />
        <Button title={"+"} onPress={() => {
          props.changeTitle(props.id, value)
          props.setShow(0)}} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    // width: "60%",
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 8,
    // marginBottom: 15
  }
});