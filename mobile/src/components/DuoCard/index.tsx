import { Text, TouchableOpacity, View } from 'react-native';
import { DuoInfo } from '../DuoInfo';
import { GameController } from 'phosphor-react-native'

import { THEME } from '../../theme';
import { styles } from './styles';

export interface DuoCardProps {
	hourEnd: string;
	hourStart: string;
	id: string;
	name: string;
	useVoiceChannel: boolean;
	weekDays: string[]
	yearsPlaying: Number;
}

interface Props {
	data: DuoCardProps;
	onConnect: ()=> void;
}

export function DuoCard({ data, onConnect} : Props ) {

  return (
    <View style={styles.container}>
			<DuoInfo 
				label='Name'
				value={data.name}
			/>
			<DuoInfo 
				label='Years playing it'
				value={`${data.yearsPlaying} years`}
			/>
			<DuoInfo 
				label='Available time'
				value={`${data.weekDays.length} days \u2022 ${data.hourStart} - ${data.hourEnd}`}
			/>
			<DuoInfo 
				label='Voice Call'
				value={ data.useVoiceChannel ? "yes" : "no"}
				colorValue={data.useVoiceChannel ?  THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
			/>
			<TouchableOpacity 
				style={styles.button}
				onPress={onConnect}
		>
				<GameController 
					color={THEME.COLORS.TEXT}
					size={20}
				/>
				<Text style={styles.buttonTitle}>
					Connect
				</Text>
			</TouchableOpacity>
    </View>
  );
}