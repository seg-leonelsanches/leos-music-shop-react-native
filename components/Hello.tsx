import { Text } from "react-native";

export interface HelloComponentProps {
    name: string;
}

const HelloComponent: React.FunctionComponent<HelloComponentProps> = (props: { name: string }) => 
<Text>Hello {props.name}</Text>;

export default HelloComponent;