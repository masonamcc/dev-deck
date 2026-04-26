import { useState, useEffect } from 'react';

export function useGitHubRepos(username) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        setLoading(true);
        setError(null);

        fetch('/api/github/user/repos?per_page=100&sort=pushed&affiliation=owner')
            .then(res => {
                if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
                return res.json();
            })
            .then(data => {
                const nonForks = data.filter(r => !r.fork);
                return Promise.all(
                    nonForks.map(repo =>
                        fetch(`/api/github/repos/${username}/${repo.name}/languages`)
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
