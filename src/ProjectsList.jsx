import { useState, useEffect } from 'react';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(function() {
        fetch('/data/projects.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setProjects(data.projects);
                setLoading(false);
            })
            .catch(function(err) {
              setError('Eroare: ' + err.message);
              setLoading(false);
});
    }, []);

    if (loading) return <p>Se incarca...</p>;
    if (error) return <p>{error}</p>;

    const filteredProjects = projects.filter(function(p) {
        return p.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <h3>Proiecte</h3>

            {/* Search */}
            <input
                type="text"
                placeholder="Cauta proiect..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Lista proiecte */}
            {filteredProjects.map(function(project) {
                return (
                    <div key={project.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h4>{project.title}</h4>
                        <p>Tech: {project.tech}</p>
                        <p>Status: {project.done ? "Finalizat" : "În lucru"}</p>
                    </div>
                );
            })}

            {/* Statistici */}
            <div>
                <h4>Statistici</h4>
                <p>Total proiecte: {projects.length}</p>
                <p>Finalizate: {projects.filter(p => p.done).length}</p>
                <p>In lucru: {projects.filter(p => !p.done).length}</p>
            </div>
        </div>
    );
}

export default ProjectList;