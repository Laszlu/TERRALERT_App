import {Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@/theme";
import {IconByVariant} from "@/components/atoms";
import React from "react";

// Define the type for one menu option
type OptionItem = {
    iconPath: string;
    label: string;
    onPress: () => void;
};

// Props for the OptionsStack component
type OptionsStackProps = {
    options: OptionItem[];
};

const OptionsStack: React.FC<OptionsStackProps> = ({ options }) =>  {

    const {
        backgrounds,
        changeTheme,
        colors,
        components,
        fonts,
        gutters,
        layout,
        variant,
    } = useTheme();

    return(
        <View style={[
            layout.justifyCenter,
            backgrounds.lightgraySeeThrough,
            components.rectangleFullwidth,
            gutters.padding_12,
            ]}>
            {options.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={item.onPress}
                    style={[
                        layout.row,
                        layout.itemsCenter,
                        index !== options.length - 1 && gutters.marginBottom_16
                    ]}
                >
                    <IconByVariant path={item.iconPath} stroke={colors.red500} />
                    <Text style={[gutters.marginLeft_16]}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export  default OptionsStack;