import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import RepoList from './components/ReposList';
import { useState } from 'react';

function App() {
	const [inputValue, setInputValue] = useState('');
	const [fetchedUser, setfetchedUser] = useState();
	const [fetchedRepos, setfetchedRepos] = useState();

	const fechedHandler = () => {
		fetch(`https://api.github.com/users/${inputValue}`)
			.then((response) => response.json())
			.then((data) => setfetchedUser(data))
			.catch((error) => console.error(error.message));

		fetch(`https://api.github.com/users/${inputValue}/repos`)
			.then((response) => response.json())
			.then((data) => setfetchedRepos(data))
			.catch((error) => console.error(error.message));
	};

	const resetFunc = () => {
		setfetchedUser('');
		setfetchedRepos('');
	};

	return (
		<div className='App'>
			<Input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			></Input>
			<Button onClick={fechedHandler}></Button>

			{fetchedUser && fetchedRepos && (
				<>
					<img src={fetchedUser.avatar_url} alt='Profile picture' />
					<h1>{fetchedUser.name}</h1>
					<p>BIO: {fetchedUser.location}</p>
					<p>LOCATION: {fetchedUser.bio}</p>
					<div className='reposList'>
						<p>REPOSITORIES: </p>
						<ol>
							{fetchedRepos.map((item) => (
								<RepoList key={item.id} name={item.name} />
							))}
						</ol>
					</div>
				</>
			)}

			<button onClick={resetFunc}>RESET</button>
		</div>
	);
}

export default App;
