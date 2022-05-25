import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/about/AboutView.vue";
import OperationalView from "../views/about/OperationalView.vue";
import BoardView from "../views/about/BoardView.vue";
import NewsView from "../views/news/NewsView.vue";
import NewsContentView from "../views/news/NewsContentView.vue";
import VideosView from "../views/news/VideosView.vue";
import PublicationView from "../views/news/PublicationView.vue";
import CasestudiesView from "../views/case-studies/CasestudiesView.vue";
import CaseView from "../views/case-studies/CaseView.vue";
import LoginView from "../views/LoginView.vue";
import DevelopersView from "../views/DevelopersView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/about/operationalstructure",
    name: "operationalstructure",
    component: OperationalView,
  },
  {
    path: "/about/executiveboard",
    name: "executiveboard",
    component: BoardView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/news/:newsId",
    name: "newscontent",
    component: NewsContentView,
  },
  {
    path: "/news/videos",
    name: "videos",
    component: VideosView,
  },
  {
    path: "/news/publication",
    name: "publication",
    component: PublicationView,
  },
  {
    path: "/casestudies",
    name: "casestudies",
    component: CasestudiesView,
  },
  {
    path: "/casestudies/:caseID",
    name: "case",
    component: CaseView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/developers",
    name: "developers",
    component: DevelopersView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
