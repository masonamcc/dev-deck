import { useState, useEffect } from 'react';

export function useGitHubRepoDetail(username, repoName) {
    const [repo, setRepo] = useState(null);
    const [readme, setReadme] = useState(null);
    const [languages, setLanguages] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username || !repoName) return;

        setLoading(true);
        setError(null);

        const base = `/api/github/repos/${username}/${repoName}`;

        Promise.all([
            fetch(base).then(r => r.ok ? r.json() : Promise.reject(r.status)),
            fetch(`${base}/languages`).then(r => r.ok ? r.json() : {}),
            fetch(`${base}/readme`).then(r => r.ok ? r.json() : null).catch(() => null),
        ])
            .then(([repoData, langs, readmeData]) => {
                setRepo(repoData);
                setLanguages(langs || {});
                if (readmeData?.content) {
                    setReadme(atob(readmeData.content.replace(/\n/g, '')));
                } else {
                    setReadme(null);
                }
                setLoading(false);
            })
            .catch(err => {
                setError(`GitHub API error: ${err}`);
                setLoading(false);
            });
    }, [username, repoName]);

    return { repo, readme, languages, loading, error };
}
