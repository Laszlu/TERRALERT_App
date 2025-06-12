import {Text, TouchableOpacity, View} from "react-native";
import {useTheme} from "@/theme";
import {IconByVariant} from "@/components/atoms";

function TopMenu() {

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
        <View style={[layout.absolute,
            layout.z10,
            layout.justifyCenter,
            backgrounds.lightgraySeeThrough,
            components.rectangleFullwidth,
            gutters.marginTop_40,
            gutters.padding_16]}>
            <TouchableOpacity style={[layout.row, layout.itemsCenter, gutters.marginBottom_16]}>
                <IconByVariant path={'settings'} stroke={colors.red500}></IconByVariant>
                <Text style={[gutters.marginLeft_16]}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[layout.row, layout.itemsCenter, gutters.marginBottom_16]}>
                <IconByVariant path={'settings'} stroke={colors.red500}></IconByVariant>
                <Text style={[gutters.marginLeft_16]}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[layout.row, layout.itemsCenter, gutters.marginBottom_16]}>
                <IconByVariant path={'settings'} stroke={colors.red500}></IconByVariant>
                <Text style={[gutters.marginLeft_16]}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[layout.row, layout.itemsCenter]}>
                <IconByVariant path={'settings'} stroke={colors.red500}></IconByVariant>
                <Text style={[gutters.marginLeft_16]}>Settings</Text>
            </TouchableOpacity>
        </View>
    )
}

export  default TopMenu;