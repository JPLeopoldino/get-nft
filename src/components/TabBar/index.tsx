import { View, Text, TouchableOpacity } from 'react-native';

function MyTabBar({ state, descriptors, navigation }): JSX.Element {
  return (
    <View
      key={state.index}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 9999,
        // height: 70,
        paddingVertical: 30,
        paddingHorizontal: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ 
              width: '25%',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#999' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
