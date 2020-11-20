import React from 'react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const usePromiseAll = (prosmises, callback) => {
	React.useEffect(() => {
		const execPromises = async () => {
			await Promise.all(prosmises);
			callback();
		};

		execPromises();
	});
};

const useLoadAssets = (assets, fonts) => {
	const [ready, setReady] = React.useState(false);

	usePromiseAll([Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))], () =>
		setReady(true)
	);

	return ready;
};

const LoadAssets = ({ assets, fonts, children }) => {
	const ready = useLoadAssets(assets || [], fonts || []);

	if (!ready) {
		return <AppLoading />;
	}

	return <React.Fragment>{children}</React.Fragment>;
};

export default LoadAssets;

{
	/* <LoadAssets>
	children
</LoadAssets> */
}
