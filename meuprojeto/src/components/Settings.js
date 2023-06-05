import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Configurações</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Ativar notificações</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Idioma: </Text>
        <Text style={styles.settingText}>Português</Text>
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Tema: </Text>
        <Text style={styles.settingText}>Claro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  settingText: {
    fontSize: 16,
  },
});