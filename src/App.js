import { useState } from "react";
import { ThemeProvider } from "styled-components";
import  store  from "./app/store";
import Actions from "./components/Actions/Actions";
import { StyledAppContainer } from "./components/App/AppContainer.styled";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Spinner from "./components/Spinner/Spinner";
import { theme } from "./theme";
import { Provider } from "react-redux";
import Intro from "./components/Intro/Intro";
import { toggleIntroCompleted } from "./features/userSlice";

function App() {
	const [loading, setLoading] = useState(true);
  const [introCompleted, setIntroCompleted] = useState(store.getState().user.introCompleted);

  const setIntroOpen = () => {
    store.dispatch(toggleIntroCompleted());
    setIntroCompleted(prevState => !prevState);
  };

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StyledAppContainer>
					{loading && <Spinner />}
          {!introCompleted && <Intro setIntroOpen={setIntroOpen}/>}
					<Header />
					<Map setLoading={setLoading}/>
					<Actions />
				</StyledAppContainer>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
