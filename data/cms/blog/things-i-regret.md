# The things I regret about my first React project

<!--
<img
  alt="Spider man pointing meme"
  src="https://storage.googleapis.com/nathanleroy-io-assets/images/react-regrets/Spider_Man_meme.jpg"
  class="w-24 mb-3 border-2 border-purple-500 rounded-md"
  width="100"
    height="100"
/> -->

> Before one studies Zen, mountains are mountains and waters are waters; after a first glimpse into the truth of Zen, mountains are no longer mountains and waters are no longer waters; after enlightenment, mountains are once again mountains and waters once again waters.

<br />

## Introduction

Looking back on old code you've written and cringing is a sign of growth as a developer.

> "Who wrote this garbage?"

Oh right, it was me.

Pushing through challenges and reflecting on what works and doesn't work forces you to grow and get better. However, like scrolling through your facebook posts from 2009, it can be painful. About two years ago I got contracted out to build a web app for a small business; nothing crazy, just some CRUD functions and datatables for internal business use. I'd been using React for about a year, but hadn't necessarily built anything that I would consider **production ready**. I was anxious to get start. I was excited to learn. I **did** learn a lot, but I also made a lot of mistakes. As an exercise in reflection, I decided to write down some of the things I completely regret about that project.

## #1 JavaScript over TypeScript

By and large, the number one mistake I made was using JavaScript over TypeScript. I wouldn't even say I _picked_ JS over TS, I just didn't really know any better. As a lone-wolf developer, TypeScript was on my radar, but I was kind of just ignorant of its potential. Sadly, not even 6 months later, I completely re-wrote one of my first projects in TypeScript, and I havn't looked back since. The benefits were clear: TypeScript offers 1) better intellisense, 2) better type safety, and 3) better refactoring.

I'm not going to go into detail about why TypeScript is better than JavaScript, but I will say that I truly regret not using it sooner. I think I was just intimidated by the learning curve. I was already learning React, production Flask, and SQL Server. Adding TypeScript to the mix seemed like a lot.

**I was wrong**.

If you are a JavaScript dev, TypeScript is _really_ easy to learn and the benefits are clear. I'm not sure I'll ever write another line of JavaScript again (unless I'm fixing a bug in this legacy code). I'll differ to Fireship to explain this one:

<!-- Fireship tweet -->
<div id="tweet-1567936669529305088"></div>

## #2 Using GraphQL

I mean what can I say. I saw all the hype on Twitter and Reddit; I wanted a piece of that cake. The app I was building required us to regularly pull a lot of system settings, and as such, I figured a flexible GraphQL endpoint next to the RESTful API we were making would complement things well.

**I was wrong.**

I am not even exaggerating when I say that I can't understand _half_ the queries I wrote not even two years later with the GraphQL layer I implemented on top of Flask. I mean seriously it _sucks_. I spent three days adding in GraphQL, just to 1) introduce bugs for the next two years, and 2) save myself three queries to the server that has like **maybe 4** active users a day. Cool bro; good job there.

I wish every day to rip out GraphQL and just stick with REST. If you dont believe me, [check out the isuses my lab has had with GraphQL recently](https://github.com/databio/bedhost/issues/59). I promise you: **unless you have a very specific reason to be using GraphQL, you probably shouldn't be.**

## #3 Not using `react-query`

I take less personal responsibility for this one. I'm not even sure `react-query` was out when I started building this? Ok, [it was](https://github.com/TanStack/query/commit/08f61bd524c9c2a1544d39e6fbe33ff17fabac7d). But I truly didn't know about this one until it was too late. It's hard to articulate the benefits of `react-query` without just telling you to go use the thing, but I can try with a small example code snippet:

```ts
// state management
const [loading, setLoading] = useState(true)
const [data, setData] = useState([])

// fetch data
useEffect(() => {
  setLoading(true)
  fetch('https://api.github.com/users')
    .then((res) => res.json())
    .then((json) => setData(json))
    .finally(() => setLoading(false))
}, [])

// render
if (loading) return <div>Loading...</div>
return <div>{data.map((user) => user.login)}</div>
```

Here, I am using `useState` to keep track of the loading state **and** the data. While this isn't the end of the world, this pattern can get a little messy when you have multiple API calls to make. `react-query` abstracts this away from you, and allows you to focus on the data you want to render, rather than the loading state. You also get:

- caching
- refetch on interval
- refetch on window focus
- cache invaldiation

It's just **so good**. Here's the same example using `react-query`:

```ts
const { isLoading, data } = useQuery('users', () =>
  fetch('https://api.github.com/users').then((res) => res.json())
)

if (isLoading) return <div>Loading...</div>
return <div>{data.map((user) => user.login)}</div>
```

I know it's not a huge code save, but the mental load along with the added features make this a no-brainer. Ever since adopting `react-query` I've been able to focus on the data I want to render, rather than the loading state. I find myself almost **never** using `useEffect` anymore, and the amount of `useState` calls I make in my codebase has gone down significantly. I can't recommend this library enough. Also, [tanner](twitter.com/tannerlinsley) is a great guy and deserves your support. Go follow him.

## #4 `useEffect` hell

Speaking of `useEffect`, did you know that you [arn't supposed to be using it, like ever?](https://react.dev/learn/you-might-not-need-an-effect) Thats good because I used it nearly **everywhere** in this project. `useEffect` should actually be called [`useFootGun`](https://youtu.be/HyWYpM_S-2c?t=45) because of the bugs it can unintentionally introduce. I learned hooks right at the dawn of their existence, and I was so excited to use them that I just started using them everywhere. I was told that `useEffect` was the new `componentDidMount`, so I just started using it for everything.

**I was wrong.**

I've since backtracked this behavior and only reach for `useEffect` if absolutely necessary. Instead, just directly calculating state during render is 1) more efficient, and 2) reduces mental load. The developer experience is just better. I've found that I can code almost anything nowadys without ever reaching for `useEffect`. Granted, this is in part because of `react-query`, but the point still stands.

I'm not saying you should never use it, but I am saying that you should think twice before you do.

## #5 Not embracing simplicity

In my quest for creating a **real production app**, I might have become overzealous in a lot of the decisions I made which added completely unnecessary complexities to an otherwise simple application (_cough_, GraphQL, _cough_). The backend had abstractions on top of abstractions, and the frontend was a mess of `useEffect` calls and `useState` hooks. I was trying to do too much, and I was trying to do it all at once. Far too often I built things that I thought I would need, but never actually did. Far too often I built things that I thought would be useful, but never actually were. Even today, I still find myself cleaning up the mess I made. I wanted the app to be perfect, but I didn't realize that perfection is the enemy of good.

**I was wrong.**

## Conclusion

I realize now that software engineering is a delicate balance between simplicity and complexity. As a developer, time is our most precious resource; focusing too hard on the wrong things can be detrimental to the success of a project. I've learned to embrace simplicity, and to only add complexity when it is absolutely necessary. I've learned to focus on the things that matter, and to ignore the things that don't. I've learned to be ok with **good enough**.

Here is a midwit meme to summarize my thoughts:

![midwit meme](https://storage.googleapis.com/nathanleroy-io-assets/images/react-regrets/midwit.jpg)
