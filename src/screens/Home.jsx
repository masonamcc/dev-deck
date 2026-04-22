import { config } from '../config.js';
import { useGitHubRepos } from '../hooks/useGitHubRepos.js';

function RepoCard({ repo }) {
    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="repo-card"
        >
            <div className="repo-card-header">
                <span className="repo-card-name">{repo.name}</span>
                {repo.private && <span className="repo-badge">private</span>}
            </div>

            {repo.description && (
                <p className="repo-card-desc">{repo.description}</p>
            )}

            <div className="repo-card-meta">
                {repo.language && (
                    <span className="repo-lang">{repo.language}</span>
                )}
                <span className="repo-meta-item">★ {repo.stargazers_count}</span>
                {repo.fork === false && repo.forks_count > 0 && (
                    <span className="repo-meta-item">⑂ {repo.forks_count}</span>
                )}
            </div>
        </a>
    );
}

export default function Home() {
    const { repos, loading, error } = useGitHubRepos(config.githubUsername);

    return (
        <div className="mainframe-grid">
            <div className="mainframe-section scroll column vertical-center flex-col">
                <div className="fullwidth vertical-center width-50">

                    <div className="color-white is-col-span-3 flex-col mb-1-children py-10" style={{ justifyContent: 'center' }}>
                        <div>
                            <p className="accent">{config.location}</p>
                        </div>
                        <div>
                            <h1>Full Stack Software Engineer</h1>
                        </div>
                        <div>
                            <h6>{config.bio}</h6>
                        </div>
                    </div>

                    <div className="section">
                        <div className="section-header gap-1 color-accent">
                            <p className="font-code">Projects</p>
                            <div className="horizon-line-faint" />
                        </div>

                        {loading && (
                            <p className="repo-status color-faint-text">Loading repositories...</p>
                        )}

                        {error && (
                            <p className="repo-status error-message">{error}</p>
                        )}

                        {!loading && !error && (
                            <div className="repo-grid">
                                {repos.map(repo => (
                                    <RepoCard key={repo.id} repo={repo} />
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
