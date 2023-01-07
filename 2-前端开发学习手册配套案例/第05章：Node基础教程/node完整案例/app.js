const Koa = require("koa");
const nunjucks = require("nunjucks");
const koaRouter = require("koa-router")();// 引入koa-router并使用
const koaSession = require("koa-session");
const views = require("koa-views");
const koaStatic = require("koa-static");
const parser = require('koa-parser')

const app = new Koa();

app.use(parser());
app.use(koaStatic(__dirname + "/public")) // 设置静态文件目录
app.use(views(__dirname + '/views', {
  //将使用nunjucks模板引擎渲染以html为后缀的文件。
  map: { html: 'nunjucks' }
}));
//加密的密钥
app.keys = ['shengbangshenghua'];
app.use(koaSession({
  maxAge: 10000,
  rolling: true,
}, app))


// 导航链接
let navLinks = [
  { label: '首页', key: 'home', href: '/' },
  { label: '学习手册', key: 'docs', href: '/docs' },
  { label: '技术博客', key: 'blogs', href: '/blogs' },
  { label: '教学视频', key: 'videos', href: '/videos' }
];

// 模拟用户
let users = [
  { username: "admin", pw: "123456" }
];

//模拟数据
let data = {
  docs: [
    {
      name: "前端开发学习手册",
      summary: "这是一个任何人都能学习的视频",
      icons: "/images/web.png",
      tag: "web",
      date: "2020-2-15",
      lists: [
        { title: "第一节:测试第一节", contents: "测试第一节", author: "li", date: "2020-2-15" },
        { title: "第二节:测试第一节", contents: "测试第二节", author: "li", date: "2020-2-15" },
        { title: "第三节:测试第一节", contents: "测试第三节", author: "li", date: "2020-2-15" },
        { title: "第四节:测试第一节", contents: "测试第四节", author: "li", date: "2020-2-15" }
      ]
    },
    {
      name: "JAVA开发学习手册",
      summary: "这是一个任何人都能学习的java视频",
      icons: "/images/web.png",
      tag: "java",
      date: "2020-2-15",
      lists: [
        { title: "第一节", contents: "测试第一节", author: "li", date: "2020-2-15" },
        { title: "第二节", contents: "测试第二节", author: "li", date: "2020-2-15" },
        { title: "第三节", contents: "测试第三节", author: "li", date: "2020-2-15" },
        { title: "第四节", contents: "测试第四节", author: "li", date: "2020-2-15" }
      ]
    }
  ],
  blogs: {
    name: "技术博客",
    key: "精选博客",
    summary: "技术分享",
    // tag: "blogs",
    icons: "/images/web.png",
    lists: [
      {
        title: "如何学好node", contents: `合格的程序员解决的是问题，而不是实现某个解决方案。产品经理（特别是知道一点技术的产品经理）的某个需求可能只是某个问题的解决方案，他认为这个方法可以解决他的问题，于是把解决方案当成了需求，而不是真正的问题。程序员应该主动沟通，多问几个为什么，了解真正的问题，也许能有更好的解决方案。

      之前就有这么个例子，给到的需求：为每一个用户（用户有唯一的id标示）生成一个唯一的邀请码，同时也要为未来一段时间可能增加的用户预生成邀请码，保存到数据库。而真正的需求是老用户分享自己的邀请码，如果新用户使用了该邀请码，则老用户获得相应奖励。而我提出的方案很简单，直接用户的唯一id生成可逆的邀请码，这样就根本无无需数据库存储。`, author: "li", date: "2020-2-15", icons: "/images/web.png", isChoice: true
      },
      {
        title: "你觉着小舟报告对你有帮助么", contents: `合格的程序员解决的是问题，而不是实现某个解决方案。产品经理（特别是知道一点技术的产品经理）的某个需求可能只是某个问题的解决方案，他认为这个方法可以解决他的问题，于是把解决方案当成了需求，而不是真正的问题。程序员应该主动沟通，多问几个为什么，了解真正的问题，也许能有更好的解决方案。

      之前就有这么个例子，给到的需求：为每一个用户（用户有唯一的id标示）生成一个唯一的邀请码，同时也要为未来一段时间可能增加的用户预生成邀请码，保存到数据库。而真正的需求是老用户分享自己的邀请码，如果新用户使用了该邀请码，则老用户获得相应奖励。而我提出的方案很简单，直接用户的唯一id生成可逆的邀请码，这样就根本无无需数据库存储。`, author: "li", date: "2020-2-15", icons: "/images/web.png", isChoice: true
      },
      {
        title: "先有鸡，先有蛋？", contents: `合格的程序员解决的是问题，而不是实现某个解决方案。产品经理（特别是知道一点技术的产品经理）的某个需求可能只是某个问题的解决方案，他认为这个方法可以解决他的问题，于是把解决方案当成了需求，而不是真正的问题。程序员应该主动沟通，多问几个为什么，了解真正的问题，也许能有更好的解决方案。

      之前就有这么个例子，给到的需求：为每一个用户（用户有唯一的id标示）生成一个唯一的邀请码，同时也要为未来一段时间可能增加的用户预生成邀请码，保存到数据库。而真正的需求是老用户分享自己的邀请码，如果新用户使用了该邀请码，则老用户获得相应奖励。而我提出的方案很简单，直接用户的唯一id生成可逆的邀请码，这样就根本无无需数据库存储。`, author: "li", date: "2020-2-15", icons: "/images/web.png"
      },
      {
        title: "十年程序员的发展过程", contents: `合格的程序员解决的是问题，而不是实现某个解决方案。产品经理（特别是知道一点技术的产品经理）的某个需求可能只是某个问题的解决方案，他认为这个方法可以解决他的问题，于是把解决方案当成了需求，而不是真正的问题。程序员应该主动沟通，多问几个为什么，了解真正的问题，也许能有更好的解决方案。

      之前就有这么个例子，给到的需求：为每一个用户（用户有唯一的id标示）生成一个唯一的邀请码，同时也要为未来一段时间可能增加的用户预生成邀请码，保存到数据库。而真正的需求是老用户分享自己的邀请码，如果新用户使用了该邀请码，则老用户获得相应奖励。而我提出的方案很简单，直接用户的唯一id生成可逆的邀请码，这样就根本无无需数据库存储。`, author: "li", date: "2020-2-15", icons: "/images/web.png"
      }
    ]
  },
  videos: {
    name: "教学视频",
    key: "精选视频",
    summary: "视频收费",
    courses: [{
      title: "前端开发",
      summary: "这是一个任何人都能学习的视频",
      icons: "/images/web.png",
      date: "2020-2-15",
      lists: [
        { title: "第一节", contents: "测试第一节", author: "li", date: "2020-2-15" },
        { title: "第二节", contents: "测试第二节", author: "li", date: "2020-2-15" },
        { title: "第三节", contents: "测试第三节", author: "li", date: "2020-2-15" },
        { title: "第四节", contents: "测试第四节", author: "li", date: "2020-2-15" }
      ]
    },
    {
      title: "JAVA开发",
      summary: "这是一个任何人都能学习的java视频",
      icons: "/images/web.png",
      date: "2020-2-15",
      lists: [
        { title: "第一节", contents: "测试第一节", author: "li", date: "2020-2-15" },
        { title: "第二节", contents: "测试第二节", author: "li", date: "2020-2-15" },
        { title: "第三节", contents: "测试第三节", author: "li", date: "2020-2-15" },
        { title: "第四节", contents: "测试第四节", author: "li", date: "2020-2-15" }
      ]
    }]
  }

};

// 设置全局变量
koaRouter.use(async (ctx, next) => {

  ctx.state.username = ctx.session.username
  ctx.state.navLinks = navLinks

  await next()
})

// 首页
koaRouter.get("/", async (ctx) => {
  await ctx.render("home", { data, title: "首页", key: 'home' })
})

// docs列表页面
koaRouter.get("/docs", async (ctx) => {
  await ctx.render("docs", { docs: data.docs, title: "学习手册", key: 'docs' })
})
// doc详情页面
koaRouter.get("/docs/:doc", async (ctx) => {
  let doc = ctx.params.doc;
  let query = ctx.query;
  for (let i = 0; i < data.docs.length; i++) {
    if (doc == data.docs[i].tag) {
      await ctx.render("doc", { doc: data.docs[i], key: 'docs' })
    }
  }
})

// blogs列表页面
koaRouter.get("/blogs", async (ctx) => {
  await ctx.render("blogs", { blogs: data.blogs, title: "技术博客", key: 'blogs' })
})
// blog详细页面
koaRouter.get("/blogs/blog", async (ctx) => {
  let title = ctx.query.title;
  for (let i = 0; i < data.blogs.lists.length; i++) {
    if (title == data.blogs.lists[i].title) {
      await ctx.render("blog", { blog: data.blogs.lists[i], key: 'blogs' })
    }
  }
})

// videos列表页面
koaRouter.get("/videos", async (ctx) => {
  await ctx.render("videos", { videos: data.videos, title: "教学视频", key: 'videos' })
})

// 登录页面
koaRouter.get("/login", async ctx => {
  await ctx.render("login", { navLinks, title: "登录" })
})

// 登录页面
koaRouter.post("/user/login", async ctx => {

  let username = ctx.request.body.username;
  let password = ctx.request.body.password;
  if (username == "admin" && password == "123456") {
    ctx.session.username = username;
    await ctx.redirect("/docs")
  } else {
    await ctx.redirect("/")
  }
})

//注销
koaRouter.get("/logout", async ctx => {
  ctx.session.username = "";
  await ctx.redirect("/")
})

app.use(koaRouter.routes())

// 404页面
app.use((ctx) => {
  ctx.redirect('/')
})

app.listen(3000, () => {
  console.log("server is running on 3000");
})