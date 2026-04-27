export default async function handler(req, res) {
    const segments = Array.isArray(req.query.path) ? req.query.path : [req.query.path];
    const { path: _, ...queryParams } = req.query;

    const url = new URL(`https://api.github.com/${segments.join('/')}`);
    Object.entries(queryParams).forEach(([key, value]) => url.searchParams.set(key, value));

    const response = await fetch(url.toString(), {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
            Accept: 'application/vnd.github+json',
        },
    });

    const data = await response.json();
    res.status(response.status).json(data);
}
