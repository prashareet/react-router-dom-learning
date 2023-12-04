# React Router DOM


This is where I learnt about some of the core concepts of React Router Dom
**APP LINK** - https://656d837b68c8cf228797ec51--splendid-pavlova-99df0c.netlify.app/
## Outlet

 . React router DOM provides us an an **outlet** , which essentialy helps us in updating components.

 for example :

        <Header/>
        <Outlet />
        <Footer />
`</Outlet> ` here, allows us to change the components keeping the `<Header/> ` and `<Footer/> ` component to stay intact. The changed components can be anything, allowing the website not to refresh the entire page when we click on something, rather just updates only that component in the DOM which is changed. This adds to the very purpose of using react.

## Routers and methods:

In this project , I have learnt about various methods on how to declare specific routes of the application by using methods like **createBrowserRouter** , and for simplicity, declaring a way of declaring routes by the method **createRoutesFromElements**

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element= {<Layout/>}>
            <Route path='' element = {<Home/>}/>
            <Route path='about' element = {<About/>}/>
            <Route path='contact' element = {<Contact/>}/>
            <Route path='user' element = {<User/>}/>
            <Route loader={githubInfoloader}
            path='github' element = {<Github/>}/>
            </Route>
        
            )
        )

## Loader

React router dom also provides us a **loader** which is helpful when we
are fetching API datas. It helps in performance optimization, and the data gets fetched before we actually go to the page.
We get an hook called the **useLoaderData**, which gives us the data, after we have fetched from the API call. (using the normal JS syntax of fetch)