import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@/theme';
import {useI18n, useUser} from '@/hooks';

import {AssetByVariant, IconByVariant, Skeleton} from '@/components/atoms';
import {SafeScreen} from '@/components/templates';
import OptionsStack from "@/navigation/OptionsStack";


function MainScreen() {
    const {t} = useTranslation();
    const {useFetchOneQuery} = useUser();
    const {toggleLanguage} = useI18n();

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

    const [currentId, setCurrentId] = useState(-1);

    const [menuVisibility1, toggleMenuVisibility1] = useState(false);

    const [menuVisibility2, toggleMenuVisibility2] = useState(false);

    const fetchOneUserQuery = useFetchOneQuery(currentId);

    useEffect(() => {
        if (fetchOneUserQuery.isSuccess) {
            Alert.alert(
                t('screen_example.hello_user', {name: fetchOneUserQuery.data.name}),
            );
        }
    }, [fetchOneUserQuery.isSuccess, fetchOneUserQuery.data, t]);

    const onChangeTheme = () => {
        changeTheme(variant === 'default' ? 'dark' : 'default');
    };

    return (
        <SafeScreen
            isError={fetchOneUserQuery.isError}
            onResetError={fetchOneUserQuery.refetch}
        >
            <View
                style={[
                    layout.flex_1,
                    layout.col,
                    layout.itemsCenter,
                    layout.justifyCenter,
                    backgrounds.blue
                ]}
            >

                <View
                    style={[
                        {display: menuVisibility1 ? 'flex' : 'none'},
                        backgrounds.greenSeeThrough,
                        layout.z10,
                        layout.top0,
                        layout.absolute,
                        layout.left0,
                        layout.fullWidth,
                        gutters.paddingHorizontal_12]}>
                    <OptionsStack
                        options={[
                            {iconPath: 'settings', label: 'Settings', onPress: () => console.log('Settings')},
                            {iconPath: 'settings', label: 'Settings', onPress: () => console.log('Settings')},
                            {iconPath: 'settings', label: 'Settings', onPress: () => console.log('Settings')},
                            {iconPath: 'settings', label: 'Settings', onPress: () => console.log('Settings')},
                        ]}
                    />
                </View>

                <View
                    style={[
                        {display: menuVisibility2 ? 'flex' : 'none'},
                        backgrounds.greenSeeThrough,
                        layout.z10,
                        layout.top0,
                        layout.absolute,
                        layout.left0,
                        layout.fullWidth,
                        gutters.paddingHorizontal_12]}>
                    <OptionsStack
                        options={[
                            {iconPath: 'settings', label: 'Settings', onPress: () => console.log('Settings')},
                            {iconPath: 'settings', label: 'Settings', onPress: () => console.log('Settings')},
                        ]}
                    />
                </View>

                <ScrollView style={[backgrounds.gray200, layout.fullWidth]}>
                    <View
                        style={[
                            layout.justifyCenter,
                            layout.itemsCenter,
                            gutters.marginTop_80,
                            backgrounds.red500,
                        ]}
                    >
                        <View
                            style={[layout.relative, backgrounds.gray100, components.circle250]}
                        />

                        <View style={[layout.absolute, gutters.paddingTop_80]}>
                            <AssetByVariant
                                path={'tom'}
                                resizeMode={'contain'}
                                style={{height: 300, width: 300}}
                            />
                        </View>
                    </View>

                    <View style={[gutters.marginTop_40, gutters.marginHorizontal_16, backgrounds.purple100]}>
                        <Text style={[fonts.size_40, fonts.gray800, fonts.bold]}>
                            {t('screen_example.title')}
                        </Text>
                        <Text
                            style={[fonts.size_16, fonts.gray200, gutters.marginBottom_40]}
                        >
                            {t('screen_example.description')}
                        </Text>
                    </View>
                </ScrollView>

                <View style={[gutters.paddingHorizontal_32]}>
                    <View
                        style={[
                            layout.row,
                            layout.justifyBetween,
                            layout.fullWidth,
                            gutters.marginTop_16,
                        ]}
                    >
                        <Skeleton
                            height={64}
                            loading={fetchOneUserQuery.isLoading}
                            style={{borderRadius: components.buttonCircle.borderRadius}}
                            width={64}
                        >
                            <TouchableOpacity
                                onPress={() => setCurrentId(Math.ceil(Math.random() * 9 + 1))}
                                style={[components.buttonCircle, gutters.marginBottom_16]}
                                testID="fetch-user-button"
                            >
                                <IconByVariant path={'send'} stroke={colors.purple500}/>
                            </TouchableOpacity>
                        </Skeleton>

                        <TouchableOpacity style={[components.buttonCircle, gutters.marginBottom_16]}
                                          onPress={() => toggleMenuVisibility1(!menuVisibility1)}
                        >
                            <IconByVariant path={'menu'} stroke={colors.purple500}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={[components.buttonCircle, gutters.marginBottom_16]}
                                          onPress={() => toggleMenuVisibility2(!menuVisibility2)}
                        >
                            <IconByVariant path={'menu'} stroke={colors.purple500}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={onChangeTheme}
                            style={[components.buttonCircle, gutters.marginBottom_16]}
                            testID="change-theme-button"
                        >
                            <IconByVariant path={'theme'} stroke={colors.purple500}/>
                        </TouchableOpacity>

                        {/*<TouchableOpacity
              onPress={toggleLanguage}
              style={[components.buttonCircle, gutters.marginBottom_16]}
              testID="change-language-button"
            >
              <IconByVariant path={'language'} stroke={colors.purple500} />
            </TouchableOpacity>*/}
                    </View>
                </View>
            </View>
        </SafeScreen>
    );
}

export default MainScreen;
