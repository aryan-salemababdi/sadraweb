export default async function sitemap() {
    const staticRoutes = ["", "/composition"];
    
    try {
        const res = await import("@/app/api/post/posts/route");
        const response = await res.GET();
        
        if (!response.ok) {
            console.error("Error fetching posts:", response.status);
            return [];
        }

        const data = await response.json();
        console.log("Fetched Data:", data);

        const routes = staticRoutes.map((route) => ({
            url: `https://www.aryan-salemabadi.com${route}`,
            lastModified: new Date().toISOString(),
        }));

        const blogs = Array.isArray(data?.data) 
            ? data.data.map((item: { _id: string }) => ({
                url: `https://www.aryan-salemabadi.com/composition/${item._id}`,
                lastModified: new Date().toISOString(),
            }))
            : [];

        return [...routes, ...blogs];
    } catch (error) {
        console.error("Error generating sitemap:", error);
        return [];
    }
}
