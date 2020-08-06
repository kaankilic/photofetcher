# Runecast - Assignment \#1

## Project setup
You have to install dependencies of projects as running command below:
```
yarn install
```
If you want to build on dev mode. You can simply run:
```
yarn run serve
```

## Technologies Preferred
- Vue
	- Vuex
	- Content Loader
	- Vue-Wait
	- Axios
- Tailwind CSS

## Project Structure
App.vue file is Master layout of components. There are 2 components implemented for the assignment.
- PhotoFrame // This is the photo card called inside the for loop.
- PhotosWrapper // This component implemented for listing photos as loop.
All css files implemented on assets/css/app.css folder. Css file included on main.js.
The only class implemented rather than tailwind classes is toggle-checkbox and toggle-label classes which used for the switch button on grayscale selection.

Main store file is on root directory as store.js. It calls photosModule as its part of store. On the root store.js, I've implemented pagination and limit actions, mutations and states implemented. If we need to implement something for the future and there also needs to be some pagination, limit or any other generic states to store, we can simply use it from root. It prevents duplicated state definition for different modules.

All requests are sent by store/actions itself. The reason behind this idea; If there will be any endpoint update you can simply just update LOAD_PHOTOS action from the store module. That makes components more generic.

I combined both Vue-Wait and Content Loader to loading photos and user interactions more smooth.

### How did you select technologies
If this project will scale in the future, we need to ready for state management. That's why I selected to use Vuex.
Also, It seperates the communication logic and UI each other. When I started to code, I saw there is a slow image loading issue on the project so I decided to combine vue-wait and content loader to improve user feelings about
response rendering and button interacting. For axios, you can simply generate complex requests within axios.
This endpoint where we get images has some filtering options which means axios makes it more smooth.
The reason I choose tailwind is building design quickly. I don't mind to reinvent the wheel.

### For next versions
I can add some other features like lightboxin images. Maybe blur option could be add to filter as same as grayscaling.
The most important thing for the next release is prefetching images. I created a directive about that for the future implementations. Within new release, images can have some lazy load feature.
### Before Production Deployment
process.env.NODE_ENV variable needs to be production to run purgecss. Otherwise, there will be unused tailwind classes on the project. It may cause a performance issue to use pure tailwind css without purgecss.
I totally, prefer to integrate it with some of error handling service for production builds. (I always prefer Sentry.)


```
yarn run build
```
