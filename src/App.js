import { useState } from "react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import  store  from "./app/store";
import Actions from "./components/Actions/Actions";
import { StyledAppContainer } from "./components/App/AppContainer.styled";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Spinner from "./components/Spinner/Spinner";
import { theme } from "./theme";
import { Provider } from "react-redux";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 3000);
	}, []);

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StyledAppContainer>
					{loading && <Spinner />}
					<Header />
					<Map />
					<Actions />
				</StyledAppContainer>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
