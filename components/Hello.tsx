import { Text } from "react-native";

export interface HelloComponentProps {
    name: string;
}

const HelloComponent: React.FunctionComponent<HelloComponentProps> = (props: { name: string }) => 
<Text>Hello {props.name}, your Firebase App Instance Id is 123</Text>;

export default HelloComponent;