import { useState, useEffect } from 'react';

export function useGitHubRepos(username) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const url = token
            ? `https://api.github.com/user/repos?per_page=100&sort=pushed&affiliation=owner`
            : `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`;

        setLoading(true);
        setError(null);

        fetch(url, { headers })
            .then(res => {
                if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
                return res.json();
            })
            .then(data => {
                const nonForks = data.filter(r => !r.fork);
                // Fetch languages for all repos in parallel
                return Promise.all(
                    nonForks.map(repo =>
                        fetch(`https://api.github.com/repos/${username}/${repo.name}/languages`, { headers })
                            .then(r => r.ok ? r.json() : {})
                            .catch(() => ({}))
                            .then(langs => ({ ...repo, languages: langs }))
                    )
                );
            })
            .then(reposWithLangs => {
                setRepos(reposWithLangs);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [username]);

    return { repos, loading, error };
}
