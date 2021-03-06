import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

import { UserPhoto } from '../UserPhoto';
import LogoSvg from '../../assets/logo.svg';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButtonBox}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}

        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
