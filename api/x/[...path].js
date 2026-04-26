export default async function handler(req, res) {
    const segments = Array.isArray(req.query.path) ? req.query.path : [req.query.path];
    const { path: _, ...queryParams } = req.query;

    const url = new URL(`https://api.x.com/${segments.join('/')}`);
    Object.entries(queryParams).forEach(([key, value]) => url.searchParams.set(key, value));

    const response = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}` },
    });

    const data = await response.json();
    res.status(response.status).json(data);
}
