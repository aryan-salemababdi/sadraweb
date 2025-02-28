export default async function sitemap() {
    const staticRoutes = ["", "/blogs", "/contactus"];
    const res = await import("@/app/api/post/posts/route");
    const data = await (await res.GET()).json();

    const routes = staticRoutes.map((route:any) => ({
        url: `https://www.aryansalemabadi.com${route}`,
        lastModified: new Date().toString(),
    }));

    const blogs = data.data.map((item:any) => ({
        url: `https://www.aryansalemabadi.com/composition/${item._id}`,
        lastModified: new Date().toString(),
    }));

    return [...routes, ...blogs]
}