import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Teams from './components/Teams';

function App() {

  const teams = [
    { name: "Development", primary_color: '#57c278', secondary_color: "#09f7e9" },
    { name: "Front-end", primary_color: "#e8f8ff", secondary_color: "#82cffa" },
    { name: "Devops", primary_color: "#E06B69", secondary_color: "#FDE7E8" },
    { name: "Back-end", primary_color: "#DB6EBF", secondary_color: "#FAE9FS" },
    { name: "Mobile", primary_color: "#FFBA05", secondary_color: "#FFF5D9" }]

  const [collaborators, setCollaborators] = useState([])

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form cadasterCollaborator={collaborator => addCollaborator(collaborator)} teams={teams.map(team => team.name)} />
      {teams.map(team => <Teams
        key={team.name}
        teamName={team.name}
        primaryColor={team.primary_color}
        secondaryColor={team.secondary_color}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)} />)}
    </div>
  );
}

export default App;
